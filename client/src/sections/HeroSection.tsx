"use client";

import {
  ArrowRight,
  Check,
  PlayCircle,
} from "lucide-react";

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import TiltedImage from "../components/TiltImage";

export default function HeroSection() {
  const navigate = useNavigate();

  const features = [
    "AI Generated",
    "High CTR Templates",
    "Fast Export",
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)]">
      
      {/* SOFT BACKGROUND */}
      <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(143,168,155,0.14)] blur-[140px]" />

      <div className="absolute bottom-[-220px] right-[-10%] h-[560px] w-[560px] rounded-full bg-[rgba(234,213,195,0.28)] blur-[160px]" />

      {/* MAIN CONTAINER */}
      <div
        className="
          container-custom
          relative z-10
          grid min-h-screen items-center
          gap-14
          py-28
          lg:grid-cols-[1fr_1.25fr]
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative z-20
            flex max-w-2xl flex-col items-start
          "
        >
          {/* BADGE */}
          <div
            className="
              glass
              inline-flex items-center gap-2
              rounded-full
              px-4 py-2
            "
          >
            <div className="h-2 w-2 rounded-full bg-[var(--color-dark)]" />

            <span className="text-sm font-medium text-[var(--color-dark)]">
              AI Powered Thumbnail Generation
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-8
              max-w-2xl
              text-5xl font-bold
              leading-[0.95]
              tracking-[-0.05em]
              text-[var(--color-dark)]
              md:text-6xl
              xl:text-7xl
            "
          >
            Create Thumbnails

            <span className="gradient-text block pb-3">
              That People Click
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-xl
              text-lg leading-relaxed
              text-[var(--color-text-muted)]
            "
          >
            Design high-converting YouTube thumbnails
            using AI. Built for creators who want
            premium visuals, faster workflows,
            and better CTR without complex tools.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            {/* dark */}
            <button
              onClick={() => navigate("/generate")}
              className="
                group
                flex h-14 items-center justify-center gap-2
                rounded-2xl
                bg-dark
                px-8
                text-[15px] font-semibold
                text-white/100
                shadow-[0_14px_34px_rgba(143,168,155,0.24)]
                transition-all duration-300
                hover:-translate-y-1
                hover:opacity-90
              "
            >
              Generate Thumbnail

              <ArrowRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* SECONDARY */}
            <button
              className="
                glass
                flex h-14 items-center justify-center gap-2
                rounded-2xl
                px-8
                text-[15px] font-medium
                text-[var(--color-dark)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <PlayCircle size={18} />
              Watch Demo
            </button>
          </div>

          {/* FEATURES */}
          <div className="mt-10 flex flex-wrap gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  glass
                  flex items-center gap-2
                  rounded-full
                  px-4 py-2
                "
              >
                <Check
                  size={16}
                  className="text-[var(--color-dark)]"
                />

                <span className="text-sm font-medium text-[var(--color-dark)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================
            RIGHT IMAGE
        ========================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            flex items-center justify-center
            lg:justify-end
          "
        >
          {/* IMAGE WRAPPER */}
          <div
            className="
              relative
              w-full
              max-w-[920px]
              xl:max-w-[1050px]
            "
          >
            {/* LARGE SOFT BACK LAYER */}
            <div
              className="
                absolute inset-0
                translate-x-6 translate-y-6
                rounded-[42px]
                bg-[var(--color-secondary)]
                opacity-40
                blur-3xl
              "
            />

            {/* DECORATIVE FLOAT */}
            <div
              className="
                absolute -top-10 -right-10
                h-40 w-40
                rounded-full
                bg-[rgba(143,168,155,0.16)]
                blur-3xl
              "
            />

            {/* MAIN CARD */}
            <div
              className="
                glass
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/40
                p-5
                shadow-[0_30px_80px_rgba(44,53,57,0.10)]
              "
            >
              <TiltedImage />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}