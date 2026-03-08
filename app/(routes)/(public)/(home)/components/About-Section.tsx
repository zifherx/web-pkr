"use client";

import Link from "next/link";

import { RevealWrapper } from "@/components/shared/Reveal-Wrapper";

import { ABOUT_SECTION_PROPS } from "@/types";

export function AboutSection({
  rightContent,
  leftContent,
}: ABOUT_SECTION_PROPS) {
  const { benefits, cta, focusTitle, paragrah, prefixTitle, suffixTitle, tag } =
    rightContent;
  const IconCTA = cta.icon;

  return (
    <section id="nosotros" className="py-32 bg-pastel">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
        {/* Left Content */}
        <RevealWrapper direction="left">
          <div className="relative">
            <div className="bg-navy border border-gold/15 p-12 relative">
              <div className="absolute -top-6 -left-6 w-[55%] h-[55%] border-2 border-gold/30 pointer-events-none" />
              <div className="grid grid-cols-2 gap-8">
                {leftContent.map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-6 border border-gold/10 text-white/70 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Icon className="text-2xl" />
                    <span className="text-[0.72rem] tracking-[0.15rem] uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gold px-6 py-5 flex-col items-center md:flex hidden">
              <span className="text-4xl font-bold text-[#09111f] leading-none">
                15+
              </span>
              <span className="text-sm font-medium tracking-tight uppercase text-[#09111f] text-center mt-1">
                Años de <br />
                Experiencia
              </span>
            </div>
          </div>
        </RevealWrapper>

        {/* Right Content */}
        <RevealWrapper direction="right">
          <p className="text-xs font-semibold tracking-[0.32em] uppercase text-gold flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold" />
            {tag}
          </p>

          <h2 className="text-5xl font-semibold text-[#09111f] leading-[1.15] mb-2">
            {prefixTitle}{" "}
            <em className="text-gold not-italic font-light">{focusTitle}</em>{" "}
            {suffixTitle}
          </h2>

          <div className="w-12 h-0.5 bg-linear-to-r from-gold to-[#debb6e] mx-0 my-6" />

          {paragrah.map((s) => (
            <p key={s} className="text-[#6b6459] leading-[1.8] mb-6">
              {s}
            </p>
          ))}

          <div className="space-y-3 mb-8">
            {benefits.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 text-[0.88rem] text-[#6b6459]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {a}
              </div>
            ))}
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 py-3.5 px-9 bg-gold text-black text-sm font-semibold tracking-widest uppercase border border-gold cursor-pointer relative overflow-hidden hover:text-gold hover:bg-[#09111f] hover:transition-colors hover:duration-300 hover:border hover:border-[#09111f] hover:rounded-sm"
          >
            <IconCTA className="h-5 w-5 mr-2" strokeWidth={2} />
            {cta.label}
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
