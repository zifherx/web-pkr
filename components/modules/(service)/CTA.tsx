import { ButtonSlide } from "../../shared/Button-Slide";
import { RevealWrapper } from "../../shared/Reveal-Wrapper";

export function CTA() {
  return (
    <section className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <RevealWrapper direction="left" className="max-w-135">
          <p className="text-xs font-semibold tracking-[0.32em] uppercase text-gold400 flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold400" />
            ¿Interesado?
          </p>
          <h2 className="font-display text-5xl font-extrabold text-navy mb-3">
            Hablemos sobre <em className="text-gold400 not-italic font-semibold">tu empresa</em>
          </h2>

          <p className="text-gray-600 not-italic font-light">
            Cada empresa es única. Contáctanos y diseñaremos una solución completamente personalizada para tus
            necesidades.
          </p>
        </RevealWrapper>

        <RevealWrapper direction="right" className="border-2 border-gray-600">
          <ButtonSlide href="/contacto">Agendar Consulta Gratuita</ButtonSlide>
          {/* <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-9 py-3.5 bg-gold400 border border-gold400 font-body text-sm font-semibold uppercase rounded-xs cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-transparent hover:text-gold400"
          >
            <span>Agendar Consulta Gratuita</span>
          </Link> */}
        </RevealWrapper>
      </div>
    </section>
  );
}
