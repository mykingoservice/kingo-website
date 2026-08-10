"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type HvacThreeSceneProps = {
  active: boolean;
  activeStep: number;
  onReady: () => void;
  onUnavailable: () => void;
  progress: number;
};

type PartState = {
  object: THREE.Object3D;
  position: THREE.Vector3;
  rotation: THREE.Euler;
};

type MaterialState = {
  emissive: THREE.Color;
  emissiveIntensity: number;
};

const MODEL_URL = "/models/kingo-hvac-condenser.glb";
const highlightColor = new THREE.Color(0xc84a2b);

function capturePart(object: THREE.Object3D | undefined): PartState | null {
  if (!object) return null;

  return {
    object,
    position: object.position.clone(),
    rotation: object.rotation.clone(),
  };
}

function collectMaterials(object: THREE.Object3D | undefined) {
  const materials = new Set<THREE.MeshStandardMaterial>();

  object?.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
    childMaterials.forEach((material) => {
      if (material instanceof THREE.MeshStandardMaterial) materials.add(material);
    });
  });

  return [...materials];
}

export default function HvacThreeScene({
  active,
  activeStep,
  onReady,
  onUnavailable,
  progress,
}: HvacThreeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeRef = useRef(active);
  const activeStepRef = useRef(activeStep);
  const progressRef = useRef(progress);
  const onReadyRef = useRef(onReady);
  const onUnavailableRef = useRef(onUnavailable);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    onReadyRef.current = onReady;
    onUnavailableRef.current = onUnavailable;
  }, [onReady, onUnavailable]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !window.WebGLRenderingContext) {
      onUnavailableRef.current();
      return;
    }

    let disposed = false;
    let frame = 0;
    let lastTime = performance.now();
    let displayedProgress = progressRef.current;
    let model: THREE.Object3D | null = null;
    let modelReady = false;
    let parts: Record<string, PartState | null> = {};
    let partMaterials: Record<string, THREE.MeshStandardMaterial[]> = {};
    const materialStates = new Map<THREE.MeshStandardMaterial, MaterialState>();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
        powerPreference: "high-performance",
      });
    } catch {
      onUnavailableRef.current();
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.setClearColor(0x10211f, 0);
    renderer.shadowMap.enabled = window.innerWidth > 820;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x10211f, 0.055);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
    const cameraTarget = new THREE.Vector3(0, -0.12, 0);

    const hemisphere = new THREE.HemisphereLight(0xd8f4eb, 0x16211e, 2.4);
    scene.add(hemisphere);

    const keyLight = new THREE.DirectionalLight(0xfff3df, 5.6);
    keyLight.position.set(4.6, 6.5, 5.8);
    keyLight.castShadow = renderer.shadowMap.enabled;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 18;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x77c6bb, 3.2);
    fillLight.position.set(-4.8, 2.2, 3.6);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xd55a37, 18, 12, 2);
    rimLight.position.set(3.4, 0.8, -2.8);
    scene.add(rimLight);

    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b1715,
      metalness: 0.18,
      opacity: 0.42,
      roughness: 0.9,
      transparent: true,
    });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(4.6, 72), floorMaterial);
    floor.name = "ShadowFloor";
    floor.position.set(0, -1.47, 0.1);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const particlePositions = new Float32Array(66 * 3);
    for (let index = 0; index < 66; index += 1) {
      const angle = (index / 66) * Math.PI * 8;
      const radius = 0.2 + (index % 9) * 0.055;
      particlePositions[index * 3] = Math.cos(angle) * radius - 0.1;
      particlePositions[index * 3 + 1] = 0.9 + (index / 66) * 1.7;
      particlePositions[index * 3 + 2] = Math.sin(angle) * radius + 0.7;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      color: 0xaee9e2,
      depthWrite: false,
      opacity: 0,
      size: 0.045,
      transparent: true,
    });
    const airflow = new THREE.Points(particleGeometry, particleMaterial);
    airflow.name = "AirflowParticles";
    scene.add(airflow);

    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        if (disposed) {
          gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) child.geometry.dispose();
          });
          return;
        }

        model = gltf.scene;
        model.name = "KingoHVACModel";
        model.rotation.set(-0.03, -0.28, 0);
        scene.add(model);

        parts = {
          cabinet: capturePart(model.getObjectByName("cabinet")),
          coil: capturePart(model.getObjectByName("coil")),
          compressor: capturePart(model.getObjectByName("compressor")),
          controls: capturePart(model.getObjectByName("controls")),
          fan: capturePart(model.getObjectByName("fanAssembly")),
          lineSet: capturePart(model.getObjectByName("lineSet")),
        };

        partMaterials = Object.fromEntries(
          Object.entries(parts).map(([key, part]) => [key, collectMaterials(part?.object)]),
        );

        Object.values(partMaterials).flat().forEach((material) => {
          if (materialStates.has(material)) return;
          materialStates.set(material, {
            emissive: material.emissive.clone(),
            emissiveIntensity: material.emissiveIntensity,
          });
        });

        modelReady = true;
        onReadyRef.current();
      },
      undefined,
      () => {
        if (!disposed) onUnavailableRef.current();
      },
    );

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const compact = width < 560;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.6));
      renderer.setSize(width, height, false);
      renderer.shadowMap.enabled = !compact;
      camera.aspect = width / height;
      camera.fov = compact ? 45 : 38;
      camera.position.set(compact ? 4.25 : 4.7, compact ? 2.7 : 3.25, compact ? 7.2 : 6.6);
      camera.lookAt(cameraTarget);
      camera.updateProjectionMatrix();

      if (model) model.scale.setScalar(compact ? 0.82 : 1.04);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const setPart = (
      part: PartState | null,
      offset: [number, number, number],
      rotationZ = 0,
    ) => {
      if (!part) return;
      part.object.position.set(
        part.position.x + offset[0] * displayedProgress,
        part.position.y + offset[1] * displayedProgress,
        part.position.z + offset[2] * displayedProgress,
      );
      part.object.rotation.set(
        part.rotation.x,
        part.rotation.y,
        part.rotation.z + rotationZ * displayedProgress,
      );
    };

    const updateHighlights = () => {
      materialStates.forEach((state, material) => {
        material.emissive.copy(state.emissive);
        material.emissiveIntensity = state.emissiveIntensity;
      });

      const step = activeStepRef.current;
      const keys =
        step === 0
          ? ["fan", "coil"]
          : step === 1
            ? ["compressor", "lineSet"]
            : step === 2
              ? ["coil"]
              : step === 3
                ? ["controls"]
                : ["fan", "coil", "compressor", "controls", "lineSet"];
      const strength = step === 4 ? 0.24 : 0.48;

      keys.flatMap((key) => partMaterials[key] ?? []).forEach((material) => {
        const state = materialStates.get(material);
        if (!state) return;
        material.emissive.copy(state.emissive).lerp(highlightColor, strength);
        material.emissiveIntensity = Math.max(state.emissiveIntensity, step === 4 ? 0.36 : 0.75);
      });
    };

    const render = (time: number) => {
      if (disposed) return;

      const delta = Math.min(0.05, Math.max(0.001, (time - lastTime) / 1000));
      lastTime = time;
      const targetProgress = reducedMotion.matches ? 0.72 : progressRef.current;
      displayedProgress = THREE.MathUtils.damp(displayedProgress, targetProgress, 8, delta);

      if (modelReady && model) {
        model.rotation.x = -0.03 + displayedProgress * 0.05;
        model.rotation.y = -0.28 + displayedProgress * 0.62;
        model.position.y = Math.sin(time * 0.0007) * 0.025;

        setPart(parts.cabinet, [0, 0, -0.28]);
        setPart(parts.fan, [-1.05, 0.55, 1.05], 0.72);
        setPart(parts.coil, [1.2, -0.12, 0.72]);
        setPart(parts.compressor, [-1.12, -0.3, 1.22]);
        setPart(parts.controls, [1.28, 0.65, 1.2]);
        setPart(parts.lineSet, [0.48, 0.05, 0.88]);
        updateHighlights();
      }

      airflow.rotation.y = time * 0.00012;
      particleMaterial.opacity = Math.max(0, (displayedProgress - 0.08) * 0.55);

      if (activeRef.current || !modelReady) renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onUnavailableRef.current();
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    frame = window.requestAnimationFrame(render);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener("webglcontextlost", handleContextLost);

      scene.traverse((child) => {
        if (!(child instanceof THREE.Mesh || child instanceof THREE.Points)) return;
        child.geometry.dispose();
        const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
        childMaterials.forEach((material) => material.dispose());
      });

      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
