import { motion } from "motion/react";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className="w-[320px] shrink-0"
    >
      <div
        className="
          h-full rounded-[28px]
          border border-[var(--color-border)]
          bg-[rgba(255,255,255,0.72)]
          p-6
          shadow-[0_10px_40px_rgba(44,53,57,0.05)]
          backdrop-blur-xl
          transition-colors duration-300
          hover:bg-[rgba(255,255,255,0.82)]
        "
      >
        {/* TOP */}
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative">
            <img
              className="
                h-12 w-12 rounded-full object-cover
                border border-[var(--color-border)]
              "
              src={testimonial.image}
              alt={testimonial.name}
            />

            {/* VERIFIED DOT */}
            <div
              className="
                absolute -bottom-1 -right-1
                flex h-5 w-5 items-center justify-center
                rounded-full
                bg-[var(--color-dark)]
                border-2 border-[var(--color-bg)]
              "
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* USER INFO */}
          <div className="min-w-0">
            <h3
              className="
                truncate
                text-[15px] font-semibold
                text-[var(--color-dark)]
              "
            >
              {testimonial.name}
            </h3>

            <p
              className="
                mt-0.5
                text-sm
                text-[var(--color-text-muted)]
              "
            >
              {testimonial.handle}
            </p>
          </div>
        </div>

        {/* QUOTE */}
        <div className="mt-6">
          <p
            className="
              text-[15px]
              leading-7
              text-[var(--color-text-muted)]
            "
          >
            “{testimonial.quote}”
          </p>
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-6
            flex items-center gap-2
            border-t border-[var(--color-border)]
            pt-4
          "
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[var(--color-dark)]"
              >
                <path d="M12 17.3L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.3Z" />
              </svg>
            ))}
          </div>

          <span
            className="
              text-xs font-medium
              text-[var(--color-text-muted)]
            "
          >
            Trusted creator
          </span>
        </div>
      </div>
    </motion.div>
  );
}