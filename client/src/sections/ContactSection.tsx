"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Contact"
        text2="Grow your channel"
        text3="Have questions about our AI? Ready to scale your views? Let's talk."
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-zinc-300 mt-16 w-full"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-zinc-200">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-white/12 bg-white/6 focus-within:border-indigo-500 transition">
            <UserIcon className="size-5 text-indigo-400" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent outline-none text-zinc-200 placeholder-zinc-400"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-zinc-200">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-white/12 bg-white/6 focus-within:border-cyan-500 transition">
            <MailIcon className="size-5 text-cyan-400" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-transparent outline-none text-zinc-200 placeholder-zinc-400"
            />
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-zinc-200">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="resize-none w-full p-3 bg-white/6 text-zinc-200 placeholder-zinc-400 outline-none rounded-lg border border-white/12 focus:border-violet-500 transition"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white px-10 py-3 rounded-full"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Submit
          <ArrowRightIcon className="size-5" />
        </motion.button>
      </form>
    </div>
  );
}
