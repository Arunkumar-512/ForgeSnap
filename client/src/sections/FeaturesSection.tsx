"use client";

import SectionTitle from "../components/SectionTitle";

import {
  ArrowRight,
  Check,
} from "lucide-react";

import { motion } from "motion/react";

import { featuresData } from "../data/features";

import type { IFeature } from "../types";

export default function FeaturesSection() {

  return (

    <section
      id="features"
      className="relative overflow-hidden py-6 lg:py-10"
    >

      {/* SOFT BACKGROUND */}
      <div className="
        absolute left-1/2 top-0
        h-[420px] w-[420px]
        -translate-x-1/2
        rounded-full
        bg-[rgba(143,168,155,0.08)]
        blur-[120px]
      " />

      <div className="container-custom relative z-10">

        {/* SECTION TITLE */}
        <SectionTitle
          text1="Features"
          text2="Built for modern creators"
          text3="Everything you need to create cleaner, faster, high-converting thumbnails."
        />

        {/* MAIN LAYOUT */}
        <div className="
          mt-16
          grid gap-8
          xl:grid-cols-[1.05fr_0.95fr]
          xl:items-start
        ">

          {/* LEFT SIDE */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{ once: true }}

            transition={{
              duration: 0.5,
            }}

            className="
              glass
              overflow-hidden
              rounded-[32px]
              p-5 md:p-6
            "
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[24px]">

              <img
                src="/assets/img3.jpeg"
                alt="Thumbnail showcase"
                className="
                  h-full w-full
                  object-cover
                "
              />
            </div>

            {/* CONTENT */}
            <div className="px-2 pb-2 pt-8">

              {/* LABEL */}
              <div className="
                inline-flex items-center
                rounded-full
                bg-[var(--color-bg-secondary)]
                px-4 py-2
                text-sm font-medium
                text-[var(--color-dark)]
              ">

                AI Powered Workflow
              </div>

              {/* TITLE */}
              <h3 className="
                mt-5
                max-w-xl
                text-3xl font-bold
                leading-tight tracking-[-0.03em]
                text-[var(--color-dark)]
                md:text-4xl
              ">

                Create thumbnails
                designed to get attention
              </h3>

              {/* DESCRIPTION */}
              <p className="
                mt-5
                max-w-2xl
                text-[16px]
                leading-relaxed
                text-[var(--color-text-muted)]
              ">

                ForgeSnap helps creators generate
                modern, clean, and high-performing
                thumbnails using AI-powered layouts,
                typography, and visual optimization.
              </p>

              {/* LIST */}
              <div className="
                mt-7
                flex flex-wrap gap-3
              ">

                {[
                  "AI optimized",
                  "High CTR focused",
                  "Fast export",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex items-center gap-2
                      rounded-full
                      bg-[var(--color-bg-secondary)]
                      px-4 py-2
                      text-sm
                      text-[var(--color-dark)]
                    "
                  >

                    <div className="
                      flex h-5 w-5
                      items-center justify-center
                      rounded-full
                      bg-[var(--color-dark)]/15
                    ">

                      <Check
                        size={12}
                        className="
                          text-[var(--color-dark)]
                        "
                      />
                    </div>

                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="
                  group
                  mt-8
                  inline-flex items-center gap-2
                  text-[15px]
                  font-semibold
                  text-[var(--color-dark)]
                  transition-opacity duration-300
                  hover:opacity-70
                "
              >

                Explore features

                <ArrowRight
                  size={18}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="
            grid gap-5
            sm:grid-cols-2
            xl:grid-cols-1
          ">

            {featuresData.map(
              (
                feature: IFeature,
                index: number
              ) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{ once: true }}

                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}

                  className="
                    glass
                    rounded-[28px]
                    p-6
                  "
                >

                  {/* TOP */}
                  <div className="
                    flex items-start justify-between gap-4
                  ">

                    {/* ICON */}
                    <div className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      bg-[var(--color-bg-secondary)]
                    ">

                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="
                          h-6 w-6
                          object-contain
                        "
                      />
                    </div>

                    {/* TAG */}
                    <div className="
                      rounded-full
                      bg-[var(--color-dark)]/10
                      px-3 py-1
                      text-xs font-medium
                      text-[var(--color-dark)]
                    ">

                      Feature
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5">

                    <h4 className="
                      text-lg font-semibold
                      text-[var(--color-dark)]
                    ">

                      {feature.title}
                    </h4>

                    <p className="
                      mt-3
                      text-[15px]
                      leading-relaxed
                      text-[var(--color-text-muted)]
                    ">

                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}