import type { SectionTitleProps } from "../types";

import { motion } from "motion/react";

export default function SectionTitle({
  text1,
  text2,
  text3,
}: SectionTitleProps) {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
      {/* SOFT BACKGROUND GLOW */}
      <div
        className="
          absolute -top-16 left-1/2
          h-52 w-52 -translate-x-1/2
          rounded-full
          bg-[rgba(143,168,155,0.10)]
          blur-[90px]
        "
      />

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="
          relative inline-flex items-center gap-2
          rounded-full
          border border-[var(--color-border)]
          bg-[rgba(255,255,255,0.72)]
          px-5 py-2
          shadow-[0_8px_30px_rgba(15,23,42,0.05)]
          backdrop-blur-xl
        "
      >
        {/* DOT */}
        <div className="h-2 w-2 rounded-full bg-[var(--color-dark)]" />

        <p className="text-sm font-semibold tracking-wide text-[var(--color-dark)]">
          {text1}
        </p>
      </motion.div>

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="relative mt-7"
      >
        <h2
          className="
            text-4xl font-bold
            leading-[1.05]
            tracking-[-0.04em]
            text-[var(--color-dark)]
            md:text-5xl lg:text-6xl
          "
        >
          {text2}
        </h2>

        {/* MODERN ACCENT LINE */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-[2px] w-10 rounded-full bg-[var(--color-dark)]/30" />

          <div className="h-[6px] w-6 rounded-full bg-[var(--color-dark)]" />

          <div className="h-[2px] w-10 rounded-full bg-[var(--color-dark)]/30" />
        </div>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="
          mt-7 max-w-2xl
          text-[15px] leading-8
          text-[var(--color-text-muted)]
          md:text-lg
        "
      >
        {text3}
      </motion.p>
    </div>
  );
}