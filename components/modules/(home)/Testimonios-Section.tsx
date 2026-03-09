"use client";

import { RevealWrapper } from "@/components/shared/Reveal-Wrapper";
import { TestimonialCard } from "@/components/shared/Testimonial-Card";

import { TESTIMONIAL_SECTION_PROPS } from "@/types";

export function TestimoniosSection({
  testimonials,
}: TESTIMONIAL_SECTION_PROPS) {
  return (
    <section id="testimonios" className="py-32 bg-pastel">
      <div className="max-w-7xl mx-auto px-8">
        <RevealWrapper delay={0.1} direction="right">
          <div className="flex items-center justify-start gap-3 mb-4">
            <span className="w-8 h-px bg-gold400" />
            <span className="uppercase text-gold400 text-xs font-semibold tracking-[0.3em]">
              Lo que dicen
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Nuestros Clientes
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
