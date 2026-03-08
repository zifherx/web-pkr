"use client";

import { HeroSection } from "./Hero-Section";
import { StatsSection } from "./Stats-Section";
import { AboutSection } from "./About-Section";
import { ServiceSection } from "@/components/modules/(home)/Service-Section";

import {
  aboutHome,
  benfitsHome,
  servicesList,
  slidesList,
  statsHome,
} from "@/data/public.data";

export function HomeView() {
  return (
    <div>
      <HeroSection slides={slidesList} />
      <StatsSection stats={statsHome} />
      <AboutSection rightContent={aboutHome} leftContent={benfitsHome} />
      <ServiceSection services={servicesList} />
    </div>
  );
}
