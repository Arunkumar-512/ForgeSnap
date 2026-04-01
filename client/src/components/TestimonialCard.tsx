import { motion } from "motion/react";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="group relative p-[1px] rounded-xl mx-4 w-72 shrink-0 
      bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-teal-300/20"
      initial={{ y: 80, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.04 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 200,
      }}
    >
      {/* CARD */}
      <div className="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 
      group-hover:bg-white/10 transition duration-300 shadow-lg">

        {/* USER */}
        <div className="flex gap-3 items-center">
          <img
            className="size-11 rounded-full border border-white/10"
            src={testimonial.image}
            alt={testimonial.name}
          />

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="text-white font-medium">
                {testimonial.name}
              </p>

              {/* VERIFIED BADGE */}
              <svg
                className="mt-0.5"
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
              > 
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.555.72... (same path)"
                  fill="#22D3EE"
                />
              </svg>
            </div>

            <span className="text-xs text-gray-400">
              {testimonial.handle}
            </span>
          </div>
        </div>

        {/* QUOTE */}
        <p className="text-sm pt-4 text-gray-300 leading-relaxed line-clamp-3">
          “{testimonial.quote}”
        </p>
      </div>
    </motion.div>
  );
}