import { motion } from "motion/react";

const SoftBackDrop = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {/* BASE BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#020617]
          via-[#030712]
          to-[#020617]
        "
      />

      {/* CENTER GLOW */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="
          absolute
          left-1/2 top-1/3
          -translate-x-1/2 -translate-y-1/2
          w-[42rem] h-[22rem]
          bg-gradient-to-r
          from-emerald-500/30
          via-cyan-400/20
          to-transparent
          rounded-full
          blur-3xl
        "
      />

      {/* TOP GLOW */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="
          absolute
          left-1/2 top-10
          -translate-x-1/2
          w-[34rem] h-[14rem]
          bg-gradient-to-tr
          from-cyan-400/25
          via-emerald-400/15
          to-transparent
          rounded-full
          blur-3xl
        "
      />

      {/* BOTTOM GLOW */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="
          absolute
          right-10 bottom-10
          w-[26rem] h-[14rem]
          bg-gradient-to-bl
          from-emerald-500/25
          via-cyan-500/20
          to-transparent
          rounded-full
          blur-2xl
        "
      />

      {/* EXTRA LEFT AMBIENT LIGHT (NEW 🔥) */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="
          absolute
          left-[-5rem] bottom-20
          w-[24rem] h-[14rem]
          bg-gradient-to-tr
          from-cyan-500/20
          via-emerald-400/10
          to-transparent
          rounded-full
          blur-2xl
        "
      />
    </div>
  );
};

export default SoftBackDrop;