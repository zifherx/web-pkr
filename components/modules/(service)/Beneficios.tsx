import { Check } from "lucide-react";
import { SERVICE_PAGE_PROP } from "../../../types";
import { RevealWrapper } from "../../shared/Reveal-Wrapper";

export function Beneficios({ service }: SERVICE_PAGE_PROP) {
  const { benefits } = service;

  return (
    <section className="py-28 bg-crema">
      <div className="max-w-7xl mx-auto px-8">
        <RevealWrapper direction="right">
          <p className="text-xs font-semibold tracking-[0.32em] uppercase text-gold400 flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold400" />
            ¿Qué Incluye?
          </p>

          <h2 className="font-display text-6xl font-bold text-navy mb-10">Beneficios del Servicio</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {benefits.map(({ id, label }, i) => (
              <RevealWrapper key={id} delay={Math.floor(i / 3) * 0.08}>
                <div className="flex items-start gap-3 px-5 py-4 bg-white border border-crema text-sm hover:border-gold400 transition-colors duration-300">
                  <Check
                    className="w-6 h-6 bg-gold400 flex items-center justify-center shrink-0 mt-0.5 p-1"
                    size={12}
                  />
                  {label}
                </div>
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
