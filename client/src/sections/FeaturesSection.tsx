"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
  return (
    <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Features"
        text2="Why use our generator?"
        text3="Create stunning thumbnails that get clicks, without the hassle."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
        {featuresData.map((feature: IFeature, index: number) => (
          <motion.div
            key={index}
            className={`${
              index === 1
                ? "p-px rounded-[13px] bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-600"
                : ""
            }`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <div className="p-6 rounded-xl space-y-4 border border-white/10 bg-slate-950 max-w-80 w-full">
              <img src={feature.icon} alt={feature.title} />
              <h3 className="text-base font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 line-clamp-2 pb-4">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 relative mx-auto max-w-5xl">
        <div className="absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full bg-indigo-500/30 blur-3xl"></div>

        <motion.p
          className="text-slate-300 text-lg text-left max-w-3xl"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          ForgeSnap simplifies thumbnail creation so you can focus on growing
          your videos and views
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
          <motion.div
            className="md:col-span-2"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              className="h-full w-auto rounded-xl"
              src="/assets/img3.jpeg"
              alt="features showcase"
              width={1000}
              height={500}
            />
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              src="/assets/img2.jpg"
              alt="features showcase"
              width={1000}
              height={500}
              className="hover:-translate-y-0.5 transition duration-300 rounded-xl"
            />

            <h3 className="text-[24px]/7.5 text-slate-200 font-medium mt-6">
              Boost Your Views with ForgeSnap AI
            </h3>

            <p className="text-slate-400 mt-2">
              Stop guessing what works — ForgeSnap creates thumbnails designed
              to capture attention and drive clicks.
            </p>

            <a
              href="/"
              className="group flex items-center gap-2 mt-4 text-indigo-400 hover:text-cyan-400 transition"
            >
              Forge Your Thumbnail
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
