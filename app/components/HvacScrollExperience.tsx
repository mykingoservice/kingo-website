"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./HvacScrollExperience.module.css";

const steps = [
  {
    title: "The outdoor unit rejects heat.",
    text: "The condenser fan and coil move heat out of the refrigerant so the cooling cycle can continue.",
  },
  {
    title: "The compressor drives the refrigerant cycle.",
    text: "The compressor creates the pressure difference that keeps refrigerant moving between the indoor and outdoor equipment.",
  },
  {
    title: "The coil needs clean airflow.",
    text: "Dirt, blocked airflow, fan problems, and electrical faults can all reduce the system’s ability to reject heat.",
  },
  {
    title: "Controls coordinate the system.",
    text: "Contactors, capacitors, wiring, sensors, and controls have to work together. A failed component can look like a refrigerant or airflow problem if diagnosis stops too early.",
  },
  {
    title: "Kingo diagnoses the system, not just the symptom.",
    text: "Good HVAC service means measuring what the equipment is actually doing before recommending the repair.",
  },
];

export default function HvacScrollExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const story = storyRef.current;
      const stage = stageRef.current;
      if (!section || !story || !stage) return;

      const header = document.querySelector<HTMLElement>(".site-header");
      const stickyTop = (header?.getBoundingClientRect().height ?? 104) + 16;
      section.style.setProperty("--sticky-top", `${stickyTop}px`);

      const storyRect = story.getBoundingClientRect();
      const stageHeight = stage.getBoundingClientRect().height;
      const travel = Math.max(1, storyRect.height - stageHeight);
      const raw = (stickyTop - storyRect.top) / travel;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeStep = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const unitStyle = { "--progress": progress } as CSSProperties;

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="hvac-story-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Inside your cooling system</p>
          <h2 id="hvac-story-title">Your AC is a system. Scroll to see what has to work together.</h2>
          <p>
            A no-cool call can involve airflow, refrigeration, electrical controls,
            or several problems at once. This interactive view shows why diagnosis
            should come before parts swapping.
          </p>
        </div>

        <div className={styles.story} ref={storyRef}>
          <div className={styles.stage} ref={stageRef} aria-hidden="true">
            <div className={styles.unit} style={unitStyle}>
              <div className={styles.air} />
              <div className={styles.cabinet} />
              <div className={styles.fan} />
              <div className={styles.coil} />
              <div className={styles.compressor} />
              <div className={styles.lineSet} />
              <div className={styles.panel} />
              <span className={`${styles.label} ${styles.labelFan}`}>Condenser fan</span>
              <span className={`${styles.label} ${styles.labelCoil}`}>Condenser coil</span>
              <span className={`${styles.label} ${styles.labelCompressor}`}>Compressor</span>
              <span className={`${styles.label} ${styles.labelControls}`}>Electrical controls</span>
            </div>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article
                className={`${styles.step} ${index === activeStep ? styles.stepActive : ""}`}
                key={step.title}
              >
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}

            <div className={styles.cta}>
              <strong>Cooling problem in Northeast Greater Houston?</strong>
              <p>Start with diagnosis. Kingo can help determine the right next step for the system.</p>
              <Link href="/services/ac-repair">Explore AC Repair</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
