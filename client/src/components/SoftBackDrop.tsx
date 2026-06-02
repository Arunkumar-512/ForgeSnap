import { motion } from "motion/react";

const SoftBackDrop = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* BASE BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_45%,#eef2f7_100%)]
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* TOP dark GLOW */}
      <motion.div
        initial={{ opacity: 0.55, scale: 0.95 }}
        animate={{
          opacity: [0.45, 0.7, 0.45],
          scale: [0.95, 1.02, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2 top-0
          h-[28rem] w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(143,168,155,0.22)_0%,rgba(143,168,155,0.10)_35%,transparent_75%)]
          blur-[120px]
        "
      />

      {/* RIGHT AMBIENT LIGHT */}
      <motion.div
        initial={{ opacity: 0.45 }}
        animate={{
          opacity: [0.3, 0.55, 0.3],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-6rem] top-1/4
          h-[26rem] w-[26rem]
          rounded-full
          bg-[radial-gradient(circle,rgba(234,213,195,0.28)_0%,rgba(234,213,195,0.12)_45%,transparent_75%)]
          blur-[100px]
        "
      />

      {/* LEFT SOFT LIGHT */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{
          opacity: [0.25, 0.5, 0.25],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-8rem] bottom-10
          h-[24rem] w-[24rem]
          rounded-full
          bg-[radial-gradient(circle,rgba(186,200,190,0.22)_0%,rgba(186,200,190,0.08)_45%,transparent_75%)]
          blur-[110px]
        "
      />

      {/* CENTER BLUR LIGHT */}
      <motion.div
        initial={{ opacity: 0.35 }}
        animate={{
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2 top-1/2
          h-[18rem] w-[40rem]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[rgba(255,255,255,0.45)]
          blur-[120px]
        "
      />

      {/* SMALL ACCENT ORBS */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-24 left-[18%]
          h-32 w-32
          rounded-full
          bg-[rgba(143,168,155,0.18)]
          blur-[60px]
        "
      />

      <motion.div
        animate={{
          y: [0, 16, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20 right-[20%]
          h-40 w-40
          rounded-full
          bg-[rgba(234,213,195,0.20)]
          blur-[70px]
        "
      />

      {/* SOFT NOISE EFFECT */}
      <div
        className="
          absolute inset-0 opacity-[0.025]
          mix-blend-overlay
          [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />
    </div>
  );
};

export default SoftBackDrop;