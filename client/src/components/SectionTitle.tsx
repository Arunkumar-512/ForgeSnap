import type { SectionTitleProps } from "../types";
import { motion } from "motion/react";

export default function SectionTitle({
  text1,
  text2,
  text3,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* BADGE */}
      <motion.p
        className="text-sm font-medium text-emerald-300 mt-24 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-md"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0, type: "spring", stiffness: 200 }}
      >
        {text1}
      </motion.p>

      {/* HEADING */}
      <motion.h3
        className="text-3xl md:text-5xl font-semibold mt-5 max-w-3xl leading-tight text-white tracking-tight"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
      >
        <span className="block">{text2}</span>

        {/* GRADIENT UNDERLINE GLOW */}
        <span className="block h-[4px] w-24 mx-auto mt-3 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 blur-[2px] opacity-80" />
      </motion.h3>

      {/* SUBTEXT */}
      <motion.p
        className="text-gray-400 mt-4 max-w-xl text-base leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
      >
        {text3}
      </motion.p>
    </div>
  );
}