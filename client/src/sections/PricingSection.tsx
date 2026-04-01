"use client";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="relative px-4 md:px-16 lg:px-24 xl:px-32 py-24 overflow-hidden bg-[#06070d]"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(120,119,198,0.1),transparent_40%)]"></div>
      <div className="absolute inset-0 backdrop-blur-[80px]" />

      <div className="relative z-10">
        <SectionTitle
          text1="Pricing"
          text2="Pricing Plans"
          text3="Choose the plan that fits your creation schedule. Cancel anytime"
        />

        <div className="flex flex-wrap items-center justify-center gap-10 mt-20">
          {pricingData.map((plan: IPricing, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className={`
                relative w-72 text-center p-6 pb-16 rounded-2xl border
                backdrop-blur-xl transition-all duration-300
                ${
                  plan.mostPopular
                    ? "bg-white/10 border-cyan-400/40 shadow-[0_0_40px_rgba(0,255,200,0.15)]"
                    : "bg-white/5 border-white/10 hover:border-cyan-400/30"
                }
              `}
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-transparent blur-xl"></div>

              {/* MOST POPULAR BADGE */}
              {plan.mostPopular && (
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute px-3 text-xs -top-3.5 left-4 py-1
                  bg-gradient-to-r from-emerald-400 to-cyan-400
                  text-black rounded-full font-semibold shadow-lg"
                >
                  Most Popular
                </motion.p>
              )}

              {/* PLAN NAME */}
              <p className="font-semibold text-gray-300">{plan.name}</p>

              {/* PRICE */}
              <h1 className="text-3xl font-semibold text-white mt-2">
                ${plan.price}
                <span className="text-gray-400 font-normal text-sm">
                  /{plan.period}
                </span>
              </h1>

              {/* FEATURES */}
              <ul className="list-none text-gray-300 mt-6 space-y-3 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon className="size-4.5 text-emerald-400" />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className={`
                  relative w-full py-2.5 rounded-full font-semibold mt-8 overflow-hidden
                  ${
                    plan.mostPopular
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-lg"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                  }
                `}
              >
                <span className="relative z-10">Get Started</span>

                {/* hover shine */}
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}