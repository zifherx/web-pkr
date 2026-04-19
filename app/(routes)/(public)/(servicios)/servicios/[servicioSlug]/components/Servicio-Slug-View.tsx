import { notFound } from "next/navigation";

import { SERVICIO_VIEW_PROPS } from "@/types";

import { getServiceBySlug } from "@/data/public.data";

import { Beneficios } from "@/components/modules/(service)/Beneficios";
import { CTA } from "@/components/modules/(service)/CTA";
import { Features } from "@/components/modules/(service)/Features";
import { HeroSection } from "@/components/modules/(service)/Hero-Section";

export function ServicioSlugView({ slug }: SERVICIO_VIEW_PROPS) {
  const foundedService = getServiceBySlug(slug);

  if (!foundedService) {
    notFound();
  }

  return (
    <>
      <HeroSection service={foundedService} />
      <Beneficios service={foundedService} />
      <Features service={foundedService} />
      <CTA />
    </>
  );
}
