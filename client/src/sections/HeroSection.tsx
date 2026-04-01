"use client";
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const specialFeatures = [
    "No design skills needed",
    "Fast Generation",
    "High CTR templates",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-hidden bg-[#06070d]">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(120,119,198,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 backdrop-blur-[80px]"></div>

      {/* BADGE */}
      <motion.a
        href="https://prebuiltui.com?utm_source=pixels"
        className="group flex items-center gap-2 rounded-full px-4 py-1.5 mt-32 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
      >
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
          NEW
        </span>
        <p className="flex items-center gap-1 text-sm text-gray-300">
          <span>Try ForgeSnap AI — Free</span>
          <ChevronRightIcon className="group-hover:translate-x-1 transition" size={16} />
        </p>
      </motion.a>

      {/* HEADING - TWO LINES */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl text-center text-white mt-10 leading-tight tracking-tight"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160 }}
      >
        <span className="block text-gray-300">
          Create Thumbnails That
        </span>
        <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,200,0.35)]">
          Drive Clicks Instantly
        </span>
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        className="text-lg text-center text-gray-400 max-w-xl mt-6 leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 250 }}
      >
        Design high-performing YouTube thumbnails powered by AI. No tools, no
        complexity — just results that boost your CTR instantly.
      </motion.p>

      {/* CTA BUTTONS WITH ADVANCED ANIMATIONS */}
      <motion.div
        className="flex items-center gap-5 mt-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <motion.button
          onClick={() => navigate("/generate")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 h-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold shadow-lg overflow-hidden"
        >
          <span className="relative z-10">Generate Thumbnail</span>
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 border border-white/10 hover:border-cyan-400 hover:bg-white/5 transition-all rounded-full px-7 h-12 text-gray-300 backdrop-blur-md"
        >
          <VideoIcon strokeWidth={1} />
          <span>Watch Demo</span>
        </motion.button>
      </motion.div>

      {/* FEATURES */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-14">
        {specialFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition"
          >
            <CheckIcon className="size-5 text-emerald-400" />
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16"
      >
        <TiltedImage />
      </motion.div>
    </div>
  );
}