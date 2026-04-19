import { GENERAL_ICON_TYPE } from "@/types";
import { ContactoInput } from "@/validation/contacto.validation";
import { Types } from "mongoose";

export interface ItemNavitagion {
  id: number;
  label: string;
  slug: string;
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

export interface IBenefit {
  id: number;
  label: string;
}

export interface IApproach {
  id: number;
  order: string;
  label: string;
  description: string;
}

export interface IService {
  id: number;
  icon: GENERAL_ICON_TYPE;
  label: string;
  primaryTitlePage: string;
  secondaryTitlePage: string;
  slug: string;
  cardDescription: string;
  pageDescription: string;
  benefits: IBenefit[];
  approach: IApproach[];
}

export interface IStep {
  id: number;
  icon: GENERAL_ICON_TYPE;
  title: string;
  description: string;
}

export interface ITestimonial {
  id: number;
  initials: string;
  name: string;
  rating: number;
  role: string;
  company: string;
  text: string;
}

export interface IContacto {
  id: number;
  icon: GENERAL_ICON_TYPE;
  label: string;
  value: string;
}

export interface ContactoResponse {
  success: boolean;
  message: string;
}

export interface MailPayload {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export interface IMailRepository {
  send(payload: MailPayload): Promise<void>;
}

export interface MailingTemplate {
  nombre_completo: string;
  email: string;
  telefono: string;
  empresa?: string;
  servicio_interes: string;
  mensaje: string;
  fecha?: string;
}

export interface IContactoRepository {
  guardar(data: ContactoInput, ip?: string): Promise<ContactoRecord>;
}

export interface ContactoRecord extends ContactoInput {
  _id: Types.ObjectId;
  ip: string | null;
  estado: "pendiente" | "respondido";
  createdAt: Date;
  updatedAt: Date;
}

export interface TikTokOEmbed {
  html: string;
  title: string;
  author_name: string;
}

export interface TikTokVideo {
  id: string;
}

export interface EmbedItem {
  id: string;
  title?: string;
}
