import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";

export default function HomePage() {
  return (
    <main
      className="
        relative overflow-hidden
        bg-[var(--color-bg)]
      "
    >
      {/* GLOBAL BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.08),transparent_35%),
              radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.06),transparent_30%)]
        "
      />

      {/* HERO */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* FEATURES */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        <FeaturesSection />
      </section>

      {/* TESTIMONIALS */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        <TestimonialSection />
      </section>

      {/* PRICING */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        <PricingSection />
      </section>

      {/* CONTACT */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        <ContactSection />
      </section>

      {/* CTA */}
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        <CTASection />
      </section>
    </main>
  );
}