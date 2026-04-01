"use client";
import { motion } from "motion/react";
import {
  MailIcon,
  MessageSquareIcon,
  YoutubeIcon,
  TwitterIcon,
  SendIcon,
  CheckCircle2Icon,
  GlobeIcon,
  ZapIcon,
} from "lucide-react";

export default function Contact() {
  const contactStats = [
    {
      label: "Response Time",
      value: "< 24 hours",
      icon: <MessageSquareIcon className="size-4" />,
    },
    {
      label: "Support",
      value: "24/7 Priority",
      icon: <CheckCircle2Icon className="size-4" />,
    },
  ];

  const faqs = [
    {
      q: "Is there a free trial?",
      a: "Yes! Every new account gets 5 free thumbnail generations.",
    },
    {
      q: "Commercial use?",
      a: "You own full rights to generated thumbnails.",
    },
    {
      q: "API access?",
      a: "Yes. Contact us for enterprise solutions.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] pt-32 pb-20 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <GlobeIcon size={12} /> Support Hub
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let’s scale your <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                content together.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-md">
              Questions, ideas, or scaling plans? We’re here to help you win YouTube.
            </p>

            {/* STATUS */}
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400">
                AI System Active • All services operational
              </span>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-3 mt-10">
              {contactStats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <span className="text-indigo-400">{stat.icon}</span>
                  <span className="text-xs text-slate-300">
                    {stat.label}:{" "}
                    <span className="text-white">{stat.value}</span>
                  </span>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-14 space-y-4 hidden md:block">
              <h4 className="text-white font-bold flex gap-2">
                <ZapIcon className="text-cyan-400" /> Quick FAQ
              </h4>

              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <p className="text-sm text-white font-semibold">
                    {faq.q}
                  </p>
                  <p className="text-sm text-slate-500">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 blur-2xl rounded-[2rem]" />

            <div className="relative bg-[#0b0f1a]/90 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 shadow-2xl">

              <h3 className="text-xl font-bold text-white mb-6 flex gap-2">
                <SendIcon className="text-indigo-400" />
                Send Message
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative w-full py-4 rounded-xl font-bold text-black overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <SendIcon size={16} />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400" />
                </motion.button>
              </form>

              {/* SOCIAL */}
              <div className="mt-8 flex justify-center gap-6">
                {[TwitterIcon, YoutubeIcon, MailIcon].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-slate-500 hover:text-white transition"
                  >
                    <Icon size={20} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}