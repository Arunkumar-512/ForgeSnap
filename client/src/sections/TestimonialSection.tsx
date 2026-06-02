"use client";

import SectionTitle from "../components/SectionTitle";

import TestimonialCard from "../components/TestimonialCard";

import { testimonialsData } from "../data/testimonial";

import type { ITestimonial } from "../types";

import Marquee from "react-fast-marquee";

export default function TestimonialSection() {

  return (

    <section
      id="testimonials"
      className="relative overflow-hidden py-6 lg:py-10"
    >

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
          text1="Testimonials"
          text2="Loved by creators"
          text3="Creators use ForgeSnap to generate cleaner, faster, and more engaging thumbnails for modern content platforms."
        />

        {/* TESTIMONIALS */}
        <div className="relative mt-20">

          {/* LEFT FADE */}
          <div className="
            absolute left-0 top-0 z-10
            h-full w-32
            bg-gradient-to-r
            from-[var(--color-bg)]
            to-transparent
          " />

          {/* RIGHT FADE */}
          <div className="
            absolute right-0 top-0 z-10
            h-full w-32
            bg-gradient-to-l
            from-[var(--color-bg)]
            to-transparent
          " />

          {/* MARQUEE */}
          <Marquee
            speed={24}
            gradient={false}
            pauseOnHover
          >

            <div className="flex gap-6 py-4">

              {[...testimonialsData, ...testimonialsData].map(
                (
                  testimonial: ITestimonial,
                  index: number
                ) => (

                  <div
                    key={index}
                    className="w-[360px] shrink-0"
                  >

                    <div className="
                      glass
                      h-full
                      rounded-[28px]
                      p-8
                    ">

                      <TestimonialCard
                        index={index}
                        testimonial={testimonial}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </Marquee>
        </div>

        {/* BOTTOM STATS */}
        <div className="
          mt-24
          grid gap-8
          border-t border-[var(--color-border)]
          pt-12
          md:grid-cols-3
        ">

          {[
            {
              value: "20K+",
              label: "Thumbnails generated",
            },
            {
              value: "4.9/5",
              label: "Creator satisfaction",
            },
            {
              value: "3x",
              label: "Higher click-through rates",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <h3 className="
                text-4xl font-bold
                tracking-[-0.03em]
                text-[var(--color-dark)]
              ">

                {item.value}
              </h3>

              <p className="
                mt-3
                text-[15px]
                text-[var(--color-text-muted)]
              ">

                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}