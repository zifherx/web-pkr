import { RevealWrapper } from "../../shared/Reveal-Wrapper";

import { SERVICE_PAGE_PROP } from "../../../types";

export function Features({ service }: SERVICE_PAGE_PROP) {
  const { approach } = service;

  return (
    <section className="relative py-28">
      <div className="absolute inset-0 bg-linear-to-br from-navy to-navyMid" />
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <RevealWrapper direction="right">
          <p className="text-xs font-semibold tracking-[0.32em] uppercase text-gold400 flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold400" />
            Cómo lo Hacemos
          </p>

          <h2 className="font-display text-6xl font-bold text-white mb-10">Nuestro Enfoque</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {approach.map(({ description, id, label, order }, i) => (
              <RevealWrapper key={id} delay={i * 0.1}>
                <div className="bg-navy p-10 relative overflow-hidden h-full hover:bg-navyMid transition-colors duration-300">
                  <span className="absolute top-4 right-6 font-display text-[3.5rem] font-bold text-gold400/10 leading-none">
                    {order}
                  </span>
                  <h3 className="relative font-display text-white mb-4 font-semibold text-xl">
                    {label}
                    <div className="absolute -bottom-2 left-0 w-8 h-px bg-gold400" />
                  </h3>
                  <p className="text-white/50 text-[0.85rem] leading-[1.7] mt-4">{description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
