"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
  return (
    <div
      id="features"
      className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-32 overflow-hidden"
    >
      {/* BACKGROUND GLOW (MATCH HERO) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,200,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.08),transparent_40%)]"></div>

      <SectionTitle
        text1="Features"
        text2="Why use our generator?"
        text3="Create stunning thumbnails that get clicks, without the hassle."
      />

      {/* FEATURE CARDS */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
        {featuresData.map((feature: IFeature, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -6 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 200,
            }}
            className="group relative p-[1px] rounded-xl bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-teal-300/20"
          >
            <div className="p-6 rounded-xl space-y-4 border border-white/10 bg-white/5 backdrop-blur-xl max-w-80 w-full group-hover:bg-white/10 transition duration-300">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 group-hover:scale-110 transition duration-300"
              />

              <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition">
                {feature.title}
              </h3>

              <p className="text-gray-400 line-clamp-2">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SHOWCASE */}
      <div className="mt-40 relative mx-auto max-w-6xl">
        <div className="absolute -z-10 w-[400px] h-[400px] top-0 left-0 bg-emerald-400/10 blur-[120px] rounded-full"></div>

        <motion.p
          className="text-gray-300 text-lg max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ForgeSnap simplifies thumbnail creation so you can focus on growing
          your videos and views.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 items-center">
          {/* BIG IMAGE */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="rounded-xl shadow-xl"
              src="/assets/img3.jpeg"
              alt="features showcase"
            />
          </motion.div>

          {/* SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.img
              src="/assets/img2.jpg"
              alt="features showcase"
              className="rounded-xl mb-6 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <h3 className="text-2xl text-white font-semibold">
              Boost Your Views with ForgeSnap AI
            </h3>

            <p className="text-gray-400 mt-3">
              Stop guessing what works — ForgeSnap creates thumbnails designed
              to capture attention and drive clicks.
            </p>

            <motion.a
              href="/"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-2 mt-5 text-emerald-400 hover:text-cyan-300 transition"
            >
              Forge Your Thumbnail
              <ArrowUpRight className="size-5 group-hover:translate-x-1 transition" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}