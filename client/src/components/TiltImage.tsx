"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 25,
  stiffness: 120,
  mass: 1.8,
};

export default function TiltedImage({ rotateAmplitude = 6 }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);

  const glowX = useSpring(0, { stiffness: 200, damping: 30 });
  const glowY = useSpring(0, { stiffness: 200, damping: 30 });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: any) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);

    setLastY(offsetY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(0);
    glowY.set(0);
  }

  return (
    <motion.figure
      ref={ref}
      className="relative w-full max-w-5xl mx-auto mt-20 flex items-center justify-center perspective-[1200px]"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 180 }}
    >
      {/* GLOW FOLLOW EFFECT */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,200,0.6), transparent 70%)",
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* IMAGE CONTAINER */}
      <motion.div
        className="relative transform-3d w-full rounded-2xl"
        style={{ rotateX, rotateY }}
      >
        {/* GRADIENT BORDER */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 blur-[1px]" />

        {/* IMAGE */}
        <motion.img
          src="/hero_img2.png"
          alt="hero section showcase"
          className="relative rounded-2xl w-full bg-[#0b0f1a] border border-white/10 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* TOP LIGHT OVERLAY */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-transparent to-white/10 pointer-events-none" />
      </motion.div>
    </motion.figure>
  );
}