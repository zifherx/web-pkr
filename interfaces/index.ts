import { GENERAL_ICON_TYPE } from "@/types";

export interface ItemNavitagion {
  id: number;
  label: string;
  href: string;
}

export interface IStat {
  value: string;
  label: string;
}

export interface ISlide {
  id: number;
  label: string;
  headline: string;
  headlineItalic: string;
  subHeadline: string;
  cta: string;
  accent: string;
  stat: IStat;
  imageUrl: string;
  imageAlt: string;
}

export interface IHomeStat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface IAboutUs {
  tag: string;
  prefixTitle: string;
  focusTitle: string;
  suffixTitle: string;
  paragrah: string[];
  benefits: string[];
  cta: iCTAButton;
}

export interface iCTAButton {
  icon: GENERAL_ICON_TYPE;
  label: string;
}

export interface IBeginnings {
  id: number;
  icon: GENERAL_ICON_TYPE;
  label: string;
}

export interface IService {
  id: number;
  icon: GENERAL_ICON_TYPE;
  label: string;
  href: string;
  description: string;
  benefits: string[];
  cta: iCTAButton;
}
