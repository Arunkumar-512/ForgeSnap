"use client";

import SectionTitle from "../components/SectionTitle";

import {
  ArrowRight,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

import { motion } from "motion/react";

export default function ContactSection() {

  return (

    <section className="relative overflow-hidden py-6 lg:py-10">

      {/* SOFT BACKGROUND */}
      <div className="
        absolute left-1/2 top-20
        h-[500px] w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[rgba(143,168,155,0.08)]
        blur-[140px]
      " />

      <div className="container-custom relative z-10">

        {/* TITLE */}
        <SectionTitle
          text1="Contact"
          text2="Let’s build better thumbnails"
          text3="Have questions, feedback, or ideas? We'd love to hear from creators using ForgeSnap."
        />

        {/* CONTACT LAYOUT */}
        <div className="
          mt-20
          grid gap-12
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-start
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

            transition={{ duration: 0.6 }}
          >

            {/* LABEL */}
            <div className="
              inline-flex items-center
              rounded-full
              bg-[var(--color-bg-secondary)]
              px-4 py-2
              text-sm font-medium
              text-[var(--color-dark)]
            ">

              Creator Support
            </div>

            {/* TITLE */}
            <h3 className="
              mt-6
              text-4xl font-bold
              leading-tight tracking-[-0.03em]
              text-[var(--color-dark)]
            ">

              We’d love to hear
              from you
            </h3>

            {/* DESCRIPTION */}
            <p className="
              mt-6
              max-w-lg
              text-lg leading-relaxed
              text-[var(--color-text-muted)]
            ">

              Whether you're looking for help,
              sharing feedback, or exploring
              collaborations, our team is here
              to support your creative workflow.
            </p>

            {/* INFO BLOCKS */}
            <div className="mt-10 space-y-5">

              {[
                {
                  icon: Mail,
                  title: "Email support",
                  text: "support@forgesnap.ai",
                },
                {
                  icon: MessageSquare,
                  title: "Average response",
                  text: "Usually within 24 hours",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    glass
                    flex items-start gap-4
                    rounded-[24px]
                    p-5
                  "
                >

                  <div className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    bg-[var(--color-bg-secondary)]
                  ">

                    <item.icon
                      size={20}
                      className="
                        text-[var(--color-dark)]
                      "
                    />
                  </div>

                  <div>

                    <h4 className="
                      text-[15px]
                      font-semibold
                      text-[var(--color-dark)]
                    ">

                      {item.title}
                    </h4>

                    <p className="
                      mt-1
                      text-sm
                      text-[var(--color-text-muted)]
                    ">

                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}

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
              duration: 0.6,
              delay: 0.1,
            }}

            className="
              glass
              rounded-[32px]
              p-8 md:p-10
            "
          >

            {/* NAME */}
            <div>

              <label className="
                mb-2 block
                text-sm font-medium
                text-[var(--color-dark)]
              ">

                Your name
              </label>

              <div className="
                flex items-center gap-3
                rounded-2xl
                border border-[var(--color-border)]
                bg-white/60
                px-4
              ">

                <User
                  size={18}
                  className="
                    text-[var(--color-dark)]
                  "
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    h-14 w-full
                    bg-transparent
                    text-[15px]
                    text-[var(--color-dark)]
                    placeholder:text-[var(--color-text-muted)]
                  "
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="mt-6">

              <label className="
                mb-2 block
                text-sm font-medium
                text-[var(--color-dark)]
              ">

                Email address
              </label>

              <div className="
                flex items-center gap-3
                rounded-2xl
                border border-[var(--color-border)]
                bg-white/60
                px-4
              ">

                <Mail
                  size={18}
                  className="
                    text-[var(--color-dark)]
                  "
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    h-14 w-full
                    bg-transparent
                    text-[15px]
                    text-[var(--color-dark)]
                    placeholder:text-[var(--color-text-muted)]
                  "
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-6">

              <label className="
                mb-2 block
                text-sm font-medium
                text-[var(--color-dark)]
              ">

                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us how we can help..."
                className="
                  w-full resize-none
                  rounded-2xl
                  border border-[var(--color-border)]
                  bg-white/60
                  p-4
                  text-[15px]
                  leading-relaxed
                  text-[var(--color-dark)]
                  placeholder:text-[var(--color-text-muted)]
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                group
                mt-8
                inline-flex items-center gap-2
                rounded-2xl
                bg-[var(--color-dark)]
                px-7 py-4
                text-[15px]
                font-semibold
                text-white
                transition-all duration-300
                hover:opacity-90
              "
            >

              Send Message

              <ArrowRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}