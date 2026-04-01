import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";
export default function TestimonialSection() {
  return (
    <div
      id="testimonials"
      className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-32 overflow-hidden"
    >
      {/* PREMIUM BACKGROUND (MATCH HERO + FEATURES) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(120,119,198,0.1),transparent_40%)]" />

      {/* EXTRA SOFT GLOW */}
      <div className="absolute -z-10 top-32 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-emerald-400/20 blur-[180px]" />
      <div className="absolute -z-10 bottom-0 right-20 w-[360px] h-[360px] rounded-full bg-cyan-400/20 blur-[180px]" />

      <SectionTitle
        text1="Testimonials"
        text2="Loved by creators"
        text3="See how our AI thumbnails are helping channels explode their views"
      />

      {/* TOP MARQUEE */}
      <div className="relative mt-14">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#06070d] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#06070d] to-transparent z-10" />

        <Marquee
          className="max-w-6xl mx-auto"
          gradient={false}
          speed={30}
        >
          <div className="flex items-center justify-center py-6 gap-6">
            {[...testimonialsData, ...testimonialsData].map(
              (testimonial: ITestimonial, index: number) => (
                <div className="group">
                  <TestimonialCard
                    key={index}
                    index={index}
                    testimonial={testimonial}
                  />
                </div>
              )
            )}
          </div>
        </Marquee>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="relative mt-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#06070d] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#06070d] to-transparent z-10" />

        <Marquee
          className="max-w-6xl mx-auto"
          gradient={false}
          speed={30}
          direction="right"
        >
          <div className="flex items-center justify-center py-6 gap-6">
            {[...testimonialsData, ...testimonialsData].map(
              (testimonial: ITestimonial, index: number) => (
                <div className="group">
                  <TestimonialCard
                    key={index}
                    index={index}
                    testimonial={testimonial}
                  />
                </div>
              )
            )}
          </div>
        </Marquee>
      </div>
    </div>
  );
}