"use client";

import { HeroSection } from "@/components/modules/(home)/Hero-Section";
import { StatsSection } from "@/components/modules/(home)/Stats-Section";
import { AboutSection } from "@/components/modules/(home)/About-Section";
import { ServiceSection } from "@/components/modules/(home)/Service-Section";
import { ProcessSection } from "@/components/modules/(home)/Process-Section";

import {
  aboutHome,
  benfitsHome,
  servicesList,
  slidesList,
  statsHome,
  stepsHome,
  testimonialsHome,
} from "@/data/public.data";
import { CTASection } from "@/components/modules/(home)/CTA-Section";
import { TestimoniosSection } from "@/components/modules/(home)/Testimonios-Section";

export function HomeView() {
  return (
    <>
      <HeroSection slides={slidesList} />
      <StatsSection stats={statsHome} />
      <AboutSection rightContent={aboutHome} leftContent={benfitsHome} />
      <ServiceSection services={servicesList} />
      <ProcessSection steps={stepsHome} />
      <CTASection />
      <TestimoniosSection testimonials={testimonialsHome} />
    </>
  );
}
