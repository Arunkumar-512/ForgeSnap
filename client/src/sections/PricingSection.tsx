"use client";

import SectionTitle from "../components/SectionTitle";

import { pricingData } from "../data/pricing";

import type { IPricing } from "../types";

import { Check } from "lucide-react";

import { motion } from "motion/react";

export default function PricingSection() {

  return (

    <section
      id="pricing"
      className="relative overflow-hidden py-6 lg:py-10"
    >

      {/* SOFT BACKGROUND */}
      <div className="
        absolute left-1/2 top-0
        h-[500px] w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[rgba(143,168,155,0.08)]
        blur-[140px]
      " />

      <div className="container-custom relative z-10">

        {/* SECTION TITLE */}
        <SectionTitle
          text1="Pricing"
          text2="Simple pricing for creators"
          text3="Choose a plan that fits your content workflow. Upgrade or cancel anytime."
        />

        {/* PRICING GRID */}
        <div className="
          mt-20
          grid gap-8
          lg:grid-cols-3
        ">

          {pricingData.map(
            (
              plan: IPricing,
              index: number
            ) => (

              <motion.div
                key={index}

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
                  duration: 0.5,
                  delay: index * 0.08,
                }}

                className={`
                  relative
                  rounded-[32px]
                  border
                  p-8
                  transition-all duration-300

                  ${
                    plan.mostPopular
                      ? `
                        bg-white
                        border-[var(--color-dark)]
                        shadow-[0_20px_60px_rgba(143,168,155,0.12)]
                      `
                      : `
                        glass
                        border-[var(--color-border)]
                      `
                  }
                `}
              >

                {/* POPULAR BADGE */}
                {plan.mostPopular && (

                  <div className="
                    absolute right-6 top-6
                    rounded-full
                    bg-[var(--color-dark)]/12
                    px-3 py-1
                    text-xs font-semibold
                    text-[var(--color-dark)]
                  ">

                    Most Popular
                  </div>
                )}

                {/* PLAN NAME */}
                <div>

                  <p className="
                    text-sm font-medium
                    uppercase tracking-[0.15em]
                    text-[var(--color-text-muted)]
                  ">

                    {plan.name}
                  </p>

                  {/* PRICE */}
                  <div className="mt-5 flex items-end gap-1">

                    <h3 className="
                      text-5xl font-bold
                      tracking-[-0.04em]
                      text-[var(--color-dark)]
                    ">

                      ${plan.price}
                    </h3>

                    <span className="
                      mb-1
                      text-sm
                      text-[var(--color-text-muted)]
                    ">

                      / {plan.period}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="
                    mt-5
                    text-[15px]
                    leading-relaxed
                    text-[var(--color-text-muted)]
                  ">

                    Perfect for creators looking
                    to streamline thumbnail creation
                    with AI-powered workflows.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="
                  mt-8
                  border-t border-[var(--color-border)]
                  pt-8
                ">

                  <ul className="space-y-4">

                    {plan.features.map(
                      (
                        feature,
                        featureIndex
                      ) => (

                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >

                          <div className="
                            mt-[2px]
                            flex h-5 w-5
                            items-center justify-center
                            rounded-full
                            bg-[var(--color-dark)]/12
                          ">

                            <Check
                              size={12}
                              className="
                                text-[var(--color-dark)]
                              "
                            />
                          </div>

                          <span className="
                            text-[15px]
                            text-[var(--color-dark)]
                          ">

                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* CTA BUTTON */}
                <button
                  className={`
                    mt-10
                    w-full
                    rounded-2xl
                    py-4
                    text-[15px]
                    font-semibold
                    transition-all duration-300

                    ${
                      plan.mostPopular
                        ? `
                          bg-[var(--color-dark)]
                          text-white
                          hover:opacity-90
                        `
                        : `
                          bg-[var(--color-bg-secondary)]
                          text-[var(--color-dark)]
                          hover:bg-[var(--color-border)]
                        `
                    }
                  `}
                >

                  Get Started
                </button>
              </motion.div>
            )
          )}
        </div>

        {/* BOTTOM TEXT */}
        <div className="
          mt-12
          text-center
        ">

          <p className="
            text-sm
            text-[var(--color-text-muted)]
          ">

            No hidden fees • Cancel anytime • Secure payments
          </p>
        </div>
      </div>
    </section>
  );
}