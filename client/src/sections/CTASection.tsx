"use client";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left
  bg-linear-to-b from-indigo-900 via-violet-900 to-slate-950 rounded-2xl p-6 text-white"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      <div>
        <motion.h1
          className="text-4xl md:text-[46px] md:leading-15 font-semibold
      bg-linear-to-r from-white via-indigo-300 to-cyan-300 text-transparent bg-clip-text"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Create with SnapForge
        </motion.h1>

        <motion.p
          className="bg-linear-to-r from-zinc-100 via-indigo-300 to-cyan-300 text-transparent bg-clip-text text-lg pr-4"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
          Generate professional, scroll-stopping thumbnails with SnapForge that
          turn viewers into clicks instantly.
        </motion.p>
      </div>

      <motion.button
        onClick={() => navigate("/generate")}
        className="px-12 py-3 text-white
    bg-linear-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600
    rounded-full text-sm mt-4 transition-all"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        Generate
      </motion.button>
    </motion.div>
  );
}
