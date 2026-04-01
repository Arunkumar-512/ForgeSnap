"use client";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto 
      flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left
      rounded-2xl p-8 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
      
      initial={{ y: 80, opacity: 0, scale: 0.96 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.15),transparent_40%),
             radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.15),transparent_40%)] 
        opacity-60 blur-2xl">
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-[46px] md:leading-tight font-semibold
          bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 
          text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,255,200,0.35)]"
          
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        >
          Create with ForgeSnap
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg pr-4 mt-3 max-w-xl leading-relaxed"
          
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
        >
          Generate professional, scroll-stopping thumbnails with ForgeSnap that
          turn viewers into clicks instantly.
        </motion.p>
      </div>

      {/* BUTTON */}
      <motion.button
        onClick={() => navigate("/generate")}
        
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        
        className="relative z-10 px-10 py-3 rounded-full font-semibold mt-4
        bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-lg overflow-hidden"
        
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <span className="relative z-10">Generate</span>

        {/* HOVER SHINE */}
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
      </motion.button>
    </motion.div>
  );
}