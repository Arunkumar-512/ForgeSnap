"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const spring = {
  stiffness: 140,
  damping: 22,
  mass: 1,
};

export default function TiltedImage({ rotateAmplitude = 5 }) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);

  const glowX = useSpring(0, {
    stiffness: 180,
    damping: 30,
  });

  const glowY = useSpring(0, {
    stiffness: 180,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue = ((mouseX - width / 2) / width) * rotateAmplitude;

    const rotateXValue = -((mouseY - height / 2) / height) * rotateAmplitude;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    glowX.set(mouseX);
    glowY.set(mouseY);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="
        relative mx-auto
        w-full max-w-6xl
        perspective-[1400px]
      "
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        className="
          pointer-events-none absolute inset-0
          rounded-[40px]
          opacity-70 blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(143,168,155,0.18), transparent 70%)",
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* CARD */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          relative overflow-hidden
          rounded-[36px]
          border border-[var(--color-border)]
          bg-[rgba(255,255,255,0.72)]
          p-4
          shadow-[0_30px_80px_rgba(44,53,57,0.08)]
          backdrop-blur-xl
        "
      >
        {/* TOP BAR */}
        <div
          className="
            mb-4 flex items-center gap-2
            border-b border-[var(--color-border)]
            pb-4
          "
        >
          <div className="h-3 w-3 rounded-full bg-[var(--color-dark)]/50" />
          <div className="h-3 w-3 rounded-full bg-[var(--color-secondary)]" />
          <div className="h-3 w-3 rounded-full bg-[var(--color-border)]" />

          <div
            className="
              ml-4 rounded-full
              bg-[var(--color-bg-secondary)]
              px-4 py-1
              text-xs font-medium
              text-[var(--color-text-muted)]
            "
          >
            AI Thumbnail Preview
          </div>
        </div>

        {/* IMAGE WRAPPER */}
        <div className="relative overflow-hidden rounded-[28px]">
          {/* IMAGE */}
          <motion.img
            src="/hero_img2.png"
            alt="ForgeSnap AI Thumbnail Generator"
            className="
              w-full rounded-[28px]
              object-cover
            "
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[rgba(44,53,57,0.08)]
              via-transparent
              to-white/10
              pointer-events-none
            "
          />
        </div>

        {/* FLOATING STATS */}
        {/* FLOATING STATS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
    absolute bottom-8 left-8
    hidden md:block
    rounded-2xl
    border border-white/50
    bg-[rgba(250,247,242,0.85)]
    px-5 py-4
    shadow-lg
    backdrop-blur-xl
  "
        >
          <p
            className="
      text-xs font-medium
      uppercase tracking-[0.12em]
      text-[var(--color-text-muted)]
    "
          >
            Average CTR Boost
          </p>

          <div className="mt-1 flex items-end gap-2">
            <h3
              className="
        text-3xl font-bold
        text-[var(--color-dark)]
      "
            >
              +38%
            </h3>

            <span
              className="
        mb-1 text-sm
        text-[var(--color-dark)]
      "
            >
              creators growth
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
