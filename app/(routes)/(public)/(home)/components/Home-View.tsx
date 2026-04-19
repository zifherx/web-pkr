"use client";

import { AboutSection } from "@/components/modules/(home)/About-Section";
import { HeroSection } from "@/components/modules/(home)/Hero-Section";
import { ProcessSection } from "@/components/modules/(home)/Process-Section";
import { ServiceSection } from "@/components/modules/(home)/Service-Section";
import { StatsSection } from "@/components/modules/(home)/Stats-Section";

import { CTASection } from "@/components/modules/(home)/CTA-Section";
import { TestimoniosSection } from "@/components/modules/(home)/Testimonios-Section";
import { TikTokSection } from "@/components/modules/(home)/TikTok.Section";
import {
  aboutHome,
  benfitsHome,
  servicesList,
  slidesList,
  statsHome,
  stepsHome,
  testimonialsHome,
  tiktokVideos,
} from "@/data/public.data";

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
      <TikTokSection videos={tiktokVideos} />
    </>
  );
}
