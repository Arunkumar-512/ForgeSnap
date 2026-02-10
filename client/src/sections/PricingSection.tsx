"use client";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
  return (
    <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Pricing"
        text2="Pricing Plans"
        text3="Choose the plan that fits your creation schedule. Cancel anytime"
      />

      <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
        {pricingData.map((plan: IPricing, index: number) => (
          <motion.div
            key={index}
            className={`
                            w-72 text-center p-6 pb-16 rounded-xl border
                            ${
                              plan.mostPopular
                                ? "relative bg-indigo-950 border-indigo-600"
                                : "bg-indigo-950/40 border-indigo-900"
                            }
                        `}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            {/* MOST POPULAR BADGE */}
            {plan.mostPopular && (
              <p
                className="absolute px-3 text-sm -top-3.5 left-3.5 py-1
                            bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500
                            text-white rounded-full shadow-lg"
              >
                Most Popular
              </p>
            )}

            {/* PLAN NAME */}
            <p className="font-semibold text-slate-200">{plan.name}</p>

            {/* PRICE */}
            <h1 className="text-3xl font-semibold text-white mt-2">
              ${plan.price}
              <span className="text-slate-400 font-normal text-sm">
                /{plan.period}
              </span>
            </h1>

            {/* FEATURES */}
            <ul className="list-none text-slate-300 mt-6 space-y-2 text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckIcon className="size-4.5 text-cyan-400" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <button
              type="button"
              className={`
                                w-full py-2.5 rounded-md font-medium mt-7 transition-all
                                ${
                                  plan.mostPopular
                                    ? "bg-white text-indigo-700 hover:bg-slate-200"
                                    : "bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:opacity-90 text-white"
                                }
                            `}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
