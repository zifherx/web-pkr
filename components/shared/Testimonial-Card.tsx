"use client";

import { TESTIMONIAL_CARD_PROPS } from "@/types";
import { RevealWrapper } from "./Reveal-Wrapper";
import { RatingStar } from "./Rating-Star";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function TestimonialCard({ testimonial }: TESTIMONIAL_CARD_PROPS) {
  const { company, id, initials, name, role, text, rating } = testimonial;

  return (
    <RevealWrapper delay={id * 0.1}>
      <div className="bg-white border border-pastel p-10 hover:-translate-y-1 hover:shadow-xs hover:shadow-navyMid transition-all duration-300 group">
        <div className="mb-5">
          <RatingStar rating={rating} />
        </div>

        <p className="text-ink400 text-base leading-7 italic mb-6">{text}</p>

        <div className="flex items-center gap-3">
          <Avatar size="lg" className="shrink-0 font-bold text-sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div>
            <strong className="block text-navy text-base group-hover:text-gold400">
              {name}
            </strong>
            <div className="flex gap-0.5 text-xs text-ink300">
              <span>{role}</span>,<span>{company}</span>
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}
