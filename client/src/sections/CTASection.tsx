"use client";

import { motion } from "motion/react";

import { ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function CTASection() {

  const navigate = useNavigate();

  return (

    <section className="relative py-6 lg:py-10">

      {/* SOFT BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(143,168,155,0.12)] blur-[120px]" />

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}

          className="
            relative overflow-hidden
            rounded-[36px]
            border border-[var(--color-border)]
            bg-[rgba(255,255,255,0.65)]
            px-8 py-14
            shadow-[0_20px_60px_rgba(44,53,57,0.06)]
            backdrop-blur-xl
            md:px-14
          "
        >

          {/* TOP LABEL */}
          <div className="
            inline-flex items-center
            rounded-full
            bg-[var(--color-bg-secondary)]
            px-4 py-2
            text-sm font-medium
            text-[var(--color-dark)]
          ">

            Start creating smarter
          </div>

          {/* CONTENT */}
          <div className="
            mt-8
            flex flex-col gap-10
            lg:flex-row lg:items-end lg:justify-between
          ">

            {/* LEFT SIDE */}
            <div className="max-w-2xl">

              <h2 className="
                text-4xl font-bold
                leading-tight tracking-[-0.03em]
                text-[var(--color-dark)]
                md:text-5xl
              ">

                Create thumbnails
                that stand out instantly
              </h2>

              <p className="
                mt-6
                max-w-xl
                text-lg leading-relaxed
                text-[var(--color-text-muted)]
              ">

                ForgeSnap helps creators generate
                clean, high-converting thumbnails
                with AI-powered layouts and visual optimization
                designed for modern content workflows.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-start gap-4">

              <button
                onClick={() => navigate("/generate")}
                className="
                  group
                  inline-flex items-center gap-2
                  rounded-2xl
                  bg-[var(--color-dark)]
                  px-7 py-4
                  text-[15px] font-semibold
                  text-white
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

              <p className="
                text-sm
                text-[var(--color-text-muted)]
              ">

                No design skills required
              </p>
            </div>
          </div>

          {/* SUBTLE DECORATION */}
          <div className="
            absolute right-0 top-0
            h-40 w-40
            rounded-full
            bg-[rgba(234,213,195,0.35)]
            blur-3xl
          " />
        </motion.div>
      </div>
    </section>
  );
}