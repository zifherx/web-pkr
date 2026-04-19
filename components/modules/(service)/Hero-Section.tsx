import { SERVICE_PAGE_PROP } from "@/types";
import { ArrowRight } from "lucide-react";

import { BreadcrumbService } from "../../shared/Breadcrumb-Service";
import { ButtonSlide } from "../../shared/Button-Slide";

export function HeroSection({ service }: SERVICE_PAGE_PROP) {
  const { id, icon: Icon, primaryTitlePage, secondaryTitlePage, pageDescription, label } = service;

  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(200,165,71,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,165,71,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute top-0 right-[10%] w-125 h-125 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(200,165,71,0.07) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 flex items-center justify-between gap-12">
        <div className="flex flex-col items-start text-left max-w-xl">
          <BreadcrumbService service={label} />
          <div className="text-gold400 mb-5 opacity-80">
            <Icon className="w-14 h-14" />
          </div>

          <p className="text-xs font-semibold tracking-[0.32em] uppercase text-gold400 flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-gold400" />
            Servicio 0{id}
          </p>

          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold text-white leading-[1.1] mb-5">
            {primaryTitlePage}
            {secondaryTitlePage && (
              <>
                <br />
                <em className="text-gold400 not-italic font-light">{secondaryTitlePage}</em>
              </>
            )}
          </h1>

          <p className="text-white/55 text-base leading-[1.75] mb-8 max-w-130">{pageDescription}</p>

          <ButtonSlide href="/contacto">
            Solicitar Asesoría
            <ArrowRight size={18} />
          </ButtonSlide>
        </div>

        <div
          className="hidden md:block font-display font-bold leading-none select-none pointer-events-none shrink-0 text-[14rem]"
          style={{
            fontSize: "clamp(20rem, 25vw, 24rem)",
            color: "rgba(200,165,71,0.08)",
          }}
          aria-hidden="true"
        >
          0{id}
        </div>
      </div>
    </section>
  );
}
