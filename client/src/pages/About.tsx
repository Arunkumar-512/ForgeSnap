"use client";

import { motion } from "motion/react";
import {
  RocketIcon,
  CpuIcon,
  UsersIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  SparklesIcon,
  PlayCircleIcon,
  StarsIcon,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "Thumbnails Generated",
      value: "1.2M+",
      color:
        "from-dark-400/10to-sky-500/5 text-dark-300",
    },
    {
      label: "Active Creators",
      value: "50K+",
      color:
        "from-violet-400/10 to-fuchsia-500/5 text-violet-300",
    },
    {
      label: "Average CTR Boost",
      value: "24%",
      color:
        "from-emerald-400/10 to-teal-500/5 text-emerald-300",
    },
  ];

  const values = [
    {
      title: "AI Precision",
      desc: "Models trained on viral thumbnail patterns and high-performing YouTube content.",
      icon: (
        <CpuIcon className="size-6 text-dark-300" />
      ),
      glow: "from-dark-400/10 to-transparent",
    },
    {
      title: "Creator Focused",
      desc: "Built for creators who want faster workflows and better click-through rates.",
      icon: (
        <UsersIcon className="size-6 text-violet-300" />
      ),
      glow: "from-violet-400/10 to-transparent",
    },
    {
      title: "Performance Driven",
      desc: "Every design system is optimized for attention and engagement.",
      icon: (
        <BarChart3Icon className="size-6 text-emerald-300" />
      ),
      glow: "from-emerald-400/10 to-transparent",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-24 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
         <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-black/[0.03] blur-[120px]" />

  <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-black/[0.025] blur-[120px]" />

  <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-black/[0.02] blur-[120px]" />

        {/* GRID */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="mx-auto max-w-4xl text-center">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              inline-flex items-center gap-2
              rounded-full border border-dark-400/20
              bg-dark-400/10
              px-4 py-2
              text-sm font-medium text-dark-300
              backdrop-blur-xl
            "
          >
            <RocketIcon className="size-4" />
            About ForgeSnap AI
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-8 text-4xl font-bold
              leading-tight tracking-tight
              md:text-6xl
            "
          >
            We help creators
            <span
              className="
                block bg-gradient-to-r
                from-dark-300
                via-violet-300
                to-emerald-300
                bg-clip-text text-transparent
              "
            >
              dominate attention.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mx-auto mt-8 max-w-2xl
              text-base leading-8 text-slate-400
            "
          >
            ForgeSnap AI combines intelligent design,
            cinematic visuals, and creator psychology
            to generate thumbnails that increase clicks
            and grow channels faster.
          </motion.p>

          {/* ACTION CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              mt-12 flex flex-wrap items-center
              justify-center gap-4
            "
          >
            {/* CARD */}
            <div
              className="
                flex items-center gap-3
                rounded-2xl border border-white/10
                bg-white/[0.03]
                px-5 py-4
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-xl
                  bg-dark-400/10 text-dark-300
                "
              >
                <PlayCircleIcon className="size-5" />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  AI Powered Design
                </p>

                <p className="text-xs text-slate-400">
                  Generate thumbnails instantly
                </p>
              </div>
            </div>

            {/* CARD */}
            <div
              className="
                flex items-center gap-3
                rounded-2xl border border-white/10
                bg-white/[0.03]
                px-5 py-4
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center
                  justify-center rounded-xl
                  bg-violet-400/10 text-violet-300
                "
              >
                <StarsIcon className="size-5" />
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Optimized for CTR
                </p>

                <p className="text-xs text-slate-400">
                  Built for YouTube growth
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/8
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
                transition-all duration-300
                hover:border-dark-400/20
              "
            >
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br
                  ${stat.color}
                  opacity-30
                `}
              />

              <div className="relative z-10">
                <p className="text-4xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_480px]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-violet-400/20
                bg-violet-400/10
                px-4 py-2
                text-sm font-medium text-violet-300
              "
            >
              <SparklesIcon className="size-4" />
              Why ForgeSnap AI
            </div>

            <h2
              className="
                mt-6 text-4xl font-bold
                leading-tight tracking-tight
                md:text-5xl
              "
            >
              Smart design tools
              <span
                className="
                  block bg-gradient-to-r
                  from-violet-300
                  via-dark-300
                  to-emerald-300
                  bg-clip-text text-transparent
                "
              >
                built for creators.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We combine AI creativity with real
              performance insights so creators can
              generate thumbnails that look premium
              and perform better.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-white/10
                    bg-white/[0.025]
                    p-6
                    backdrop-blur-lg
                  "
                >
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-r
                      ${item.glow}
                      opacity-0 transition-opacity duration-500
                      group-hover:opacity-100
                    `}
                  />

                  <div className="relative z-10 flex gap-5">
                    <div
                      className="
                        flex h-14 w-14 shrink-0
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-black/20
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* GLOW */}
            <div
              className="
                absolute -inset-6
                rounded-[40px]
                bg-gradient-to-tr
                from-dark-500/10
                via-violet-500/5
                to-emerald-500/10
                blur-2xl
              "
            />

            {/* MAIN CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-[#0b1220]/70
                p-8
                backdrop-blur-xl
              "
            >
              {/* INNER BG */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_30%)]
                "
              />

              <div className="relative z-10">
                {/* MOCK SCREEN */}
                <div
                  className="
                    overflow-hidden rounded-3xl
                    border border-white/10
                    bg-[#050816]
                  "
                >
                  {/* TOP BAR */}
                  <div
                    className="
                      flex items-center gap-2
                      border-b border-white/10
                      px-5 py-4
                    "
                  >
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div
                      className="
                        relative aspect-video overflow-hidden
                        rounded-2xl
                        bg-gradient-to-br
                        from-dark-400/15
                        via-violet-400/10
                        to-emerald-400/10
                      "
                    >
                      <div
                        className="
                          absolute left-6 top-6
                          rounded-full bg-black/40
                          px-4 py-2
                          text-xs font-semibold text-dark-300
                          backdrop-blur-xl
                        "
                      >
                        AI Generated
                      </div>

                      <div
                        className="
                          absolute bottom-6 left-6
                          max-w-[240px]
                        "
                      >
                        <p className="text-3xl font-bold leading-tight text-white">
                          How I Grew
                          <span className="block text-dark-300">
                            to 1M Views
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* MINI CARDS */}
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div
                        className="
                          rounded-2xl border border-white/10
                          bg-white/[0.025]
                          p-4
                        "
                      >
                        <p className="text-sm text-slate-400">
                          CTR Increase
                        </p>

                        <p className="mt-2 text-2xl font-bold text-emerald-300">
                          +24%
                        </p>
                      </div>

                      <div
                        className="
                          rounded-2xl border border-white/10
                          bg-white/[0.025]
                          p-4
                        "
                      >
                        <p className="text-sm text-slate-400">
                          AI Speed
                        </p>

                        <p className="mt-2 text-2xl font-bold text-dark-300">
                          15s
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM CARD */}
                <div
                  className="
                    mt-6 rounded-3xl
                    border border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-12 w-12 items-center
                        justify-center rounded-2xl
                        bg-violet-400/10 text-violet-300
                      "
                    >
                      <ShieldCheckIcon className="size-6" />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-white">
                        Built for serious creators
                      </p>

                      <p className="mt-2 leading-relaxed text-slate-400">
                        Premium AI thumbnail workflows
                        with modern aesthetics, cinematic
                        styling and creator-focused UX.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}