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
    <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
      {/* GLOW */}
      <div className="absolute top-30 -z-10 left-1/4 size-72 bg-indigo-600/60 blur-[300px]"></div>

      {/* BADGE */}
      <motion.a
        href="https://prebuiltui.com?utm_source=pixels"
        className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44
                text-indigo-100 bg-indigo-400/15 border border-indigo-500/30"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white text-xs px-3.5 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-1">
          <span>Experience ForgeSnap for Free</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-0.5 transition duration-300"
          />
        </p>
      </motion.a>

      {/* HEADING */}
      <motion.h1
        className="text-5xl/17 md:text-6xl/21 font-medium max-w-3xl text-center text-slate-100"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        Forge Stunning Thumbnails for your{" "}
        <span
          className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400
                bg-clip-text text-transparent px-3 rounded-xl text-nowrap"
        >
          Videos.
        </span>
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        className="text-base text-center text-slate-300 max-w-lg mt-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        With ForgeSnap, create scroll-stopping YouTube thumbnails in seconds —
        no design skills needed.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <button
          onClick={() => navigate("/generate")}
          className="bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500
                    hover:opacity-90 text-white rounded-full px-7 h-11 transition"
        >
          Generate Now
        </button>

        <button
          className="flex items-center gap-2 border border-indigo-800
                    hover:bg-indigo-950/50 transition rounded-full px-6 h-11 text-slate-200"
        >
          <VideoIcon strokeWidth={1} />
          <span>See how it works</span>
        </button>
      </motion.div>

      {/* FEATURES */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
        {specialFeatures.map((feature, index) => (
          <motion.p
            className="flex items-center gap-2"
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <CheckIcon className="size-5 text-cyan-400" />
            <span className="text-slate-400">{feature}</span>
          </motion.p>
        ))}
      </div>

      <TiltedImage />
    </div>
  );
}
