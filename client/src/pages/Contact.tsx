"use client";

import { motion } from "motion/react";
import {
  MailIcon,
  MessageSquareIcon,
  YoutubeIcon,
  TwitterIcon,
  SendIcon,
  GlobeIcon,
  ZapIcon,
  SparklesIcon,
  HeadphonesIcon,
  ArrowRightIcon,
  InstagramIcon,
} from "lucide-react";

export default function Contact() {
  const contactStats = [
    {
      label: "Response Time",
      value: "< 12 Hours",
      icon: <MessageSquareIcon className="size-4" />,
    },
    {
      label: "Support",
      value: "24/7 Active",
      icon: <HeadphonesIcon className="size-4" />,
    },
    {
      label: "AI Assistance",
      value: "Instant Help",
      icon: <SparklesIcon className="size-4" />,
    },
  ];

  const faqs = [
    {
      q: "Do you offer free credits?",
      a: "Yes, every account gets free thumbnail generations to test the platform.",
    },
    {
      q: "Can I use thumbnails commercially?",
      a: "Absolutely. You own full rights to all generated thumbnails.",
    },
    {
      q: "Do you support teams & agencies?",
      a: "Yes. We provide automation workflows and API access for teams.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-24 text-[#0f172a]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* soft glow */}
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[120px]" />

        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-violet-500/8 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_520px]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* badge */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-slate-200
                bg-white/80
                px-4 py-2
                text-sm font-medium text-slate-700
                backdrop-blur-xl
                shadow-sm
              "
            >
              <GlobeIcon className="size-4 text-dark" />
              Contact ForgeSnap
            </div>

            {/* heading */}
            <h1
              className="
                mt-8 max-w-3xl
                text-5xl font-black leading-[1.05]
                tracking-tight
                text-slate-900
                md:text-6xl
              "
            >
              Let’s build
              <span
                className="
                  mt-2 block
                  bg-gradient-to-r
                  from-[#2C3539] to-[#8FA89B]
                  bg-clip-text text-transparent
                "
              >
                better thumbnails.
              </span>
            </h1>

            {/* description */}
            <p
              className="
                mt-6 max-w-2xl
                text-lg leading-relaxed
                text-slate-600
              "
            >
              Need help with AI thumbnails, content growth,
              or creator workflows? Our team is here to help
              you scale faster with smarter design tools.
            </p>

            {/* status */}
            <div
              className="
                mt-8 inline-flex items-center gap-3
                rounded-2xl
                border border-emerald-200
                bg-white/80
                px-5 py-3
                text-sm text-slate-700
                backdrop-blur-xl
                shadow-sm
              "
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              Support team online • All systems active
            </div>

            {/* stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {contactStats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="
                    rounded-3xl border border-slate-200
                    bg-white/80
                    p-5
                    backdrop-blur-xl
                    shadow-sm
                    transition-all duration-300
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      mb-4 flex h-12 w-12 items-center
                      justify-center rounded-2xl
                      bg-slate-100 text-dark
                    "
                  >
                    {stat.icon}
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {stat.value}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <div className="mb-6 flex items-center gap-2">
                <ZapIcon className="size-5 text-dark" />

                <h3 className="text-xl font-bold text-slate-900">
                  Quick Answers
                </h3>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="
                      group rounded-3xl
                      border border-slate-200
                      bg-white/70
                      p-5
                      backdrop-blur-xl
                      shadow-sm
                      transition-all duration-300
                      hover:border-cyan-200
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">
                          {faq.q}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </div>

                      <ArrowRightIcon className="mt-1 size-4 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-dark" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* glow */}
            <div
              className="
                absolute -inset-4 rounded-[40px]
                bg-gradient-to-r
                from-cyan-500/10
                via-violet-500/5
                to-emerald-500/10
                blur-3xl
              "
            />

            {/* card */}
            <div
              className="
                relative overflow-hidden
                rounded-[36px]
                border border-slate-200
                bg-white/85
                p-8 sm:p-10
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              <div className="relative z-10">
                {/* header */}
                <div className="mb-8">
                  <div
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-slate-200
                      bg-slate-50
                      px-4 py-2
                      text-sm font-medium text-slate-700
                    "
                  >
                    <SendIcon className="size-4 text-dark-600" />
                    Send a Message
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-slate-900">
                    Start a conversation
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-dark-600">
                    Tell us about your channel or project and
                    we’ll help you grow faster.
                  </p>
                </div>

                {/* form */}
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* name */}
                    <div>
                      <label className="mb-2 block text-sm text-dark-600">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="
                          h-14 w-full rounded-2xl
                          border border-dark-200
                          bg-white
                          px-5
                          text-slate-900
                          placeholder:text-dark-400
                          outline-none
                          transition-all duration-300
                          focus:border-dark-100 
                          focus:ring-4 focus:ring-dark-700
                        "
                      />
                    </div>

                    {/* email */}
                    <div>
                      <label className="mb-2 block text-sm text-slate-600">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="
                          h-14 w-full rounded-2xl
                          border border-dark-200
                          bg-white
                          px-5
                          text-secondary-900
                          placeholder:text-dark-400
                          outline-none
                          transition-all duration-300
                          focus:border-dark-100 
                          focus:ring-4 focus:ring-dark-700
                        "
                      />
                    </div>
                  </div>

                  {/* textarea */}
                  <div>
                    <label className="mb-2 block text-sm text-dark-600">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your content goals..."
                      className="
                        w-full resize-none rounded-2xl
                        border border-dark-200
                        bg-white
                        px-5 py-4
                        text-secondary-900
                        placeholder:text-dark-400
                        outline-none
                        transition-all duration-300
                        focus:border-secondary-400
                        focus:ring-4 focus:ring-secondary-100
                      "
                    />
                  </div>

                  {/* button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      flex h-14 w-full
                      items-center justify-center gap-2
                      rounded-2xl
                      bg-slate-900
                      font-semibold text-white
                      transition-all duration-300
                      hover:bg-slate-800
                    "
                  >
                    Send Message
                    <SendIcon className="size-4" />
                  </motion.button>
                </form>

                {/* socials */}
                <div className="mt-10 border-t border-slate-200 pt-7">
                  <p className="mb-5 text-center text-sm text-slate-500">
                    Follow ForgeSnap
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    {[
                      TwitterIcon,
                      YoutubeIcon,
                      InstagramIcon,
                      MailIcon,
                    ].map((Icon, i) => (
                      <motion.button
                        key={i}
                        whileHover={{
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                          flex h-12 w-12 items-center
                          justify-center rounded-2xl
                          border border-slate-200
                          bg-white
                          text-slate-500
                          transition-all duration-300
                          hover:border-cyan-200
                          hover:text-dark
                          hover:shadow-md
                        "
                      >
                        <Icon size={20} />
                      </motion.button>
                    ))}
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