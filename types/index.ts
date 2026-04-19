import {
  IAboutUs,
  IBeginnings,
  IHomeStat,
  IService,
  ISlide,
  IStep,
  ItemNavitagion,
  ITestimonial,
  MailingTemplate,
  TikTokVideo,
} from "@/interfaces";
import { LucideIcon } from "lucide-react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { IconType } from "react-icons";

export type NAVIGATION_ITEM_PROPS = {
  item: ItemNavitagion;
};

export type HOME_HERO_SECTION_PROPS = {
  slides: ISlide[];
};

export type SLIDE_CARD_PROPS = {
  slide: ISlide;
  current: number;
  direction: number;
  total: number;
  goTo: (i: number) => void;
};

export type STATS_HOME_PROPS = {
  stats: IHomeStat[];
};

export type GENERAL_ICON_TYPE = LucideIcon | IconType;

export type ABOUT_SECTION_PROPS = {
  rightContent: IAboutUs;
  leftContent: IBeginnings[];
};

export type REVEAL_WRAPPER_PROPS = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

export type SERVICE_SECTION_PROPS = {
  services: IService[];
};

export type SERVICE_CARD_PROPS = {
  service: IService;
  inView: boolean;
};

export type PROCESS_SECTION_PROPS = {
  steps: IStep[];
};

export type TESTIMONIAL_SECTION_PROPS = {
  testimonials: ITestimonial[];
};

export type TESTIMONIAL_CARD_PROPS = {
  testimonial: ITestimonial;
};

export type RATING_STAR_PROPS = {
  rating: number;
};

export type MENU_MOBILE_PROPS = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navLink: ItemNavitagion[];
};

export type CONTACTO_EMAIL_PROPS = {
  propsEmail: MailingTemplate;
};

export type CONFIRMACION_EMAIL_PROPS = {
  propsEmail: Partial<MailingTemplate>;
};

export type SERVICIO_VIEW_PROPS = {
  slug: string;
};

export type SERVICE_PAGE_PROP = {
  service: IService;
};

export type BUTTON_SLIDE_PROP = {
  href: string;
  children: ReactNode;
  className?: string;
};

export type SERVICE_BREADCRUMB_PROPS = {
  service: string;
};

export type TIKTOK_SECTION_PROPS = {
  videos: TikTokVideo[];
};

export type TIKTOK_EMBED_PROPS = {
  videId: string;
};
