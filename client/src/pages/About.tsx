"use client";
import { motion } from "motion/react";
import {
  RocketIcon,
  CpuIcon,
  UsersIcon,
  ShieldCheckIcon,
  BarChart3Icon,
} from "lucide-react";

export default function About() {
  const stats = [
    { label: "Thumbnails Generated", value: "1.2M+" },
    { label: "Active Creators", value: "50k+" },
    { label: "Average CTR Boost", value: "24%" },
  ];

  const values = [
    {
      title: "AI Precision",
      desc: "Our models are trained specifically on high-performing YouTube metadata.",
      icon: <CpuIcon className="size-6 text-indigo-400" />,
    },
    {
      title: "Creator First",
      desc: "Built by YouTubers, for YouTubers.",
      icon: <UsersIcon className="size-6 text-cyan-400" />,
    },
    {
      title: "Data Driven",
      desc: "Optimized for psychology & click-through rates.",
      icon: <BarChart3Icon className="size-6 text-purple-400" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] pt-32 pb-20 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">

        {/* 🚀 HERO */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <RocketIcon size={12} /> Our Mission
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            We help creators <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              win the click.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-slate-400 leading-relaxed"
          >
            ForgeSnap was born from a simple idea: design should never slow you down.
            Our AI helps you create high-performing thumbnails instantly.
          </motion.p>
        </div>

        {/* 📊 STATS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="bg-[#0b0f1a] rounded-[1.4rem] p-8 text-center backdrop-blur-xl border border-white/5 group-hover:border-white/10 transition">
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 💡 VALUES */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why we built <br /> ForgeSnap AI
            </h2>

            <div className="space-y-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {v.icon}
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {v.title}
                    </h4>
                    <p className="text-slate-400">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* subtle glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 blur-2xl rounded-[2rem]" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 aspect-video flex items-center justify-center overflow-hidden backdrop-blur-xl"
            >
              <div className="text-center">
                <ShieldCheckIcon size={64} className="text-indigo-500/50 mx-auto mb-4" />
                <p className="text-slate-400 italic">
                  "Empowering the next generation of creators."
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}