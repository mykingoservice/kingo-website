import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";

class NodeFileReader {
  result = null;
  onloadend = null;

  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((result) => {
      this.result = result;
      this.onloadend?.();
    });
  }

  readAsDataURL(blob) {
    blob.arrayBuffer().then((result) => {
      const base64 = Buffer.from(result).toString("base64");
      this.result = `data:${blob.type || "application/octet-stream"};base64,${base64}`;
      this.onloadend?.();
    });
  }
}

globalThis.FileReader = NodeFileReader;

const scene = new THREE.Scene();
scene.name = "KingoHVACCondenserScene";

const root = new THREE.Group();
root.name = "HVACUnit";
scene.add(root);

const materials = {
  cabinet: new THREE.MeshStandardMaterial({
    name: "PowderCoatedCabinet",
    color: 0xb8c2bd,
    metalness: 0.58,
    roughness: 0.32,
  }),
  cabinetDark: new THREE.MeshStandardMaterial({
    name: "CabinetShadow",
    color: 0x53615c,
    metalness: 0.64,
    roughness: 0.38,
  }),
  coil: new THREE.MeshStandardMaterial({
    name: "AluminumCoil",
    color: 0xa8c0ba,
    metalness: 0.84,
    roughness: 0.24,
  }),
  coilFrame: new THREE.MeshStandardMaterial({
    name: "KingoTealCoilFrame",
    color: 0x176b67,
    metalness: 0.46,
    roughness: 0.28,
  }),
  fan: new THREE.MeshStandardMaterial({
    name: "FanGraphite",
    color: 0x1c2926,
    metalness: 0.72,
    roughness: 0.3,
  }),
  fanEdge: new THREE.MeshStandardMaterial({
    name: "FanEdge",
    color: 0x61716b,
    metalness: 0.78,
    roughness: 0.26,
  }),
  accent: new THREE.MeshStandardMaterial({
    name: "KingoOrange",
    color: 0xc84a2b,
    emissive: 0x2a0702,
    emissiveIntensity: 0.25,
    metalness: 0.48,
    roughness: 0.28,
  }),
  compressor: new THREE.MeshStandardMaterial({
    name: "CompressorBlack",
    color: 0x111816,
    metalness: 0.68,
    roughness: 0.22,
  }),
  copper: new THREE.MeshStandardMaterial({
    name: "CopperLineSet",
    color: 0xb66d38,
    metalness: 0.86,
    roughness: 0.2,
  }),
  controls: new THREE.MeshStandardMaterial({
    name: "ControlPanel",
    color: 0xd0d9d5,
    metalness: 0.52,
    roughness: 0.3,
  }),
};

function mesh(geometry, material, name, position, rotation = [0, 0, 0]) {
  const item = new THREE.Mesh(geometry, material);
  item.name = name;
  item.position.set(...position);
  item.rotation.set(...rotation);
  item.castShadow = true;
  item.receiveShadow = true;
  return item;
}

const cabinet = new THREE.Group();
cabinet.name = "cabinet";
cabinet.add(
  mesh(new THREE.BoxGeometry(3.6, 0.18, 2.25), materials.cabinetDark, "CabinetBase", [0, -1.35, 0]),
  mesh(new THREE.BoxGeometry(3.6, 2.8, 0.15), materials.cabinet, "CabinetBack", [0, 0, -1.02]),
  mesh(new THREE.BoxGeometry(0.16, 2.8, 2.15), materials.cabinetDark, "CabinetLeftPost", [-1.72, 0, 0]),
  mesh(new THREE.BoxGeometry(0.16, 2.8, 2.15), materials.cabinetDark, "CabinetRightPost", [1.72, 0, 0]),
  mesh(new THREE.BoxGeometry(3.6, 0.13, 2.25), materials.cabinet, "CabinetTop", [0, 1.37, 0]),
);
root.add(cabinet);

const fan = new THREE.Group();
fan.name = "fanAssembly";
fan.position.set(-0.1, 0.62, 0.72);
fan.add(
  mesh(new THREE.TorusGeometry(0.82, 0.09, 20, 72), materials.fanEdge, "FanRim", [0, 0, 0]),
  mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.22, 32), materials.accent, "FanHub", [0, 0, 0.06], [Math.PI / 2, 0, 0]),
);

const bladeShape = new THREE.Shape();
bladeShape.moveTo(0.12, -0.1);
bladeShape.lineTo(0.66, -0.2);
bladeShape.quadraticCurveTo(0.82, -0.05, 0.72, 0.12);
bladeShape.lineTo(0.2, 0.15);
bladeShape.closePath();
const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, {
  depth: 0.07,
  bevelEnabled: true,
  bevelSize: 0.025,
  bevelThickness: 0.025,
  bevelSegments: 2,
});
bladeGeometry.translate(0, 0, -0.035);

for (let index = 0; index < 8; index += 1) {
  const blade = mesh(bladeGeometry, materials.fan, `FanBlade${index + 1}`, [0, 0, 0.01]);
  blade.rotation.z = (index / 8) * Math.PI * 2;
  fan.add(blade);
}

for (let index = 0; index < 12; index += 1) {
  const spoke = mesh(
    new THREE.BoxGeometry(1.55, 0.025, 0.025),
    materials.fanEdge,
    `FanGuard${index + 1}`,
    [0, 0, 0.16],
  );
  spoke.rotation.z = (index / 12) * Math.PI;
  fan.add(spoke);
}
root.add(fan);

const coil = new THREE.Group();
coil.name = "coil";
coil.position.set(0.15, -0.43, 0.72);
coil.add(
  mesh(new THREE.BoxGeometry(3.05, 0.12, 0.2), materials.coilFrame, "CoilTopRail", [0, 0.92, 0]),
  mesh(new THREE.BoxGeometry(3.05, 0.12, 0.2), materials.coilFrame, "CoilBottomRail", [0, -0.92, 0]),
  mesh(new THREE.BoxGeometry(0.12, 1.96, 0.2), materials.coilFrame, "CoilLeftRail", [-1.47, 0, 0]),
  mesh(new THREE.BoxGeometry(0.12, 1.96, 0.2), materials.coilFrame, "CoilRightRail", [1.47, 0, 0]),
);

for (let index = 0; index < 34; index += 1) {
  const x = -1.37 + (index / 33) * 2.74;
  coil.add(mesh(new THREE.BoxGeometry(0.035, 1.72, 0.1), materials.coil, `CoilFin${index + 1}`, [x, 0, 0]));
}
root.add(coil);

const compressor = new THREE.Group();
compressor.name = "compressor";
compressor.position.set(-0.88, -0.76, 0.72);
compressor.add(
  mesh(new THREE.CylinderGeometry(0.42, 0.48, 1.08, 40), materials.compressor, "CompressorBody", [0, 0, 0]),
  mesh(new THREE.CylinderGeometry(0.28, 0.36, 0.16, 40), materials.cabinetDark, "CompressorCap", [0, 0.62, 0]),
  mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.3, 20), materials.copper, "CompressorOutlet", [0.18, 0.73, 0]),
);
root.add(compressor);

const controls = new THREE.Group();
controls.name = "controls";
controls.position.set(1.13, 0.2, 0.85);
controls.add(
  mesh(new THREE.BoxGeometry(0.86, 1.2, 0.34), materials.controls, "ControlBox", [0, 0, 0]),
  mesh(new THREE.BoxGeometry(0.08, 1.04, 0.04), materials.accent, "ControlStripe", [0, 0, 0.2]),
  mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.04, 20), materials.fan, "ControlLatch", [0.31, 0, 0.2], [Math.PI / 2, 0, 0]),
);
root.add(controls);

const lineSet = new THREE.Group();
lineSet.name = "lineSet";
const lineCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.72, -0.2, 0.78),
  new THREE.Vector3(-0.2, -0.1, 0.9),
  new THREE.Vector3(0.45, -0.2, 0.94),
  new THREE.Vector3(1.1, -0.2, 0.92),
  new THREE.Vector3(1.42, 0.12, 0.9),
  new THREE.Vector3(1.42, 0.64, 0.88),
]);
lineSet.add(mesh(new THREE.TubeGeometry(lineCurve, 56, 0.055, 14, false), materials.copper, "CopperTube", [0, 0, 0]));
root.add(lineSet);

const exporter = new GLTFExporter();
const result = await exporter.parseAsync(scene, {
  binary: true,
  onlyVisible: true,
  trs: false,
});

const outputPath = resolve("public/models/kingo-hvac-condenser.glb");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, new Uint8Array(result));
console.log(`Generated ${outputPath} (${result.byteLength} bytes)`);
