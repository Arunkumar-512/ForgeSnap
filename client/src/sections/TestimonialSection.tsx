import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
  return (
    <div
      id="testimonials"
      className="relative px-4 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Soft background glow */}
      <div className="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-indigo-600/30 blur-[220px]" />
      <div className="absolute -z-10 bottom-0 right-20 w-[360px] h-[360px] rounded-full bg-cyan-500/25 blur-[220px]" />

      <SectionTitle
        text1="Testimonials"
        text2="Loved by creators"
        text3="See how our AI thumbnails are helping channels explode their views"
      />

      {/* TOP MARQUEE */}
      <Marquee
        className="max-w-5xl mx-auto mt-11"
        gradient={true}
        speed={25}
        gradientColor="#020617" // slate-950
      >
        <div className="flex items-center justify-center py-5 overflow-hidden">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={index}
                index={index}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </Marquee>

      {/* BOTTOM MARQUEE */}
      <Marquee
        className="max-w-5xl mx-auto"
        gradient={true}
        speed={25}
        direction="right"
        gradientColor="#020617" // slate-950
      >
        <div className="flex items-center justify-center py-5 overflow-hidden">
          {[...testimonialsData, ...testimonialsData].map(
            (testimonial: ITestimonial, index: number) => (
              <TestimonialCard
                key={index}
                index={index}
                testimonial={testimonial}
              />
            )
          )}
        </div>
      </Marquee>
    </div>
  );
}
