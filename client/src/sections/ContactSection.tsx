"use client";
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <div className="relative px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-[#06070d] overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 backdrop-blur-[80px]" />

      <div className="relative z-10">
        <SectionTitle
          text1="Contact"
          text2="Let’s Scale Your Clicks 🚀"
          text3="Got questions or ready to boost your CTR? Drop a message and let's make your thumbnails unstoppable."
        />

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* NAME */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <p className="mb-2 font-medium text-gray-300">Your name</p>
            <div className="flex items-center pl-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl focus-within:border-emerald-400 transition">
              <UserIcon className="size-5 text-emerald-400" />
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent outline-none text-gray-200 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <p className="mb-2 font-medium text-gray-300">Email address</p>
            <div className="flex items-center pl-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl focus-within:border-cyan-400 transition">
              <MailIcon className="size-5 text-cyan-400" />
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent outline-none text-gray-200 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* MESSAGE */}
          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <p className="mb-2 font-medium text-gray-300">Message</p>
            <textarea
              name="message"
              rows={7}
              placeholder="Tell us what you're trying to achieve..."
              className="resize-none w-full p-3 bg-white/5 text-gray-200 placeholder-gray-400 outline-none rounded-xl border border-white/10 backdrop-blur-xl focus:border-emerald-400 transition"
            />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-max flex items-center gap-2 px-10 py-3 rounded-full font-semibold mt-2
            bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Send Message</span>
            <ArrowRightIcon className="size-5 relative z-10" />

            {/* SHINE EFFECT */}
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}