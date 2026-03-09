import {
  ArrowRight,
  BookOpenText,
  Building2,
  Check,
  CircleStop,
  Facebook,
  FileSearchCorner,
  Instagram,
  Lightbulb,
  Megaphone,
  MessageSquare,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import {
  IAboutUs,
  IBeginnings,
  IHomeStat,
  IService,
  ISlide,
  IStep,
  ItemNavitagion,
  ITestimonial,
} from "@/interfaces";

export const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/pkr" },
  { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com/@pkr" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/pkr" },
];

export const navLinks: ItemNavitagion[] = [
  { id: 1, label: "Inicio", href: "#inicio" },
  { id: 2, label: "Servicios", href: "#servicios" },
  { id: 3, label: "Nosotros", href: "#nosotros" },
  { id: 4, label: "Proceso", href: "#proceso" },
  { id: 5, label: "Contacto", href: "/contact" },
];

export const servicesList: IService[] = [
  {
    id: 1,
    icon: Scale,
    label: "Asesoría Tributaria",
    href: "/#servicios",
    description:
      "Planificación fiscal estratégica para minimizar la carga tributaria de forma legal y eficiente. Cumplimiento normativo y defensa ante la administración tributaria.",
    benefits: [
      "Declaraciones de impuestos",
      "Planeación fiscal",
      "Defensa tributaria",
    ],
    cta: {
      icon: ArrowRight,
      label: "Consultar",
    },
  },
  {
    id: 2,
    icon: BookOpenText,
    label: "Contabilidad General",
    href: "/#servicios",
    description:
      "Registro contable preciso y ordenado de todas las operaciones financieras. Generamos estados financieros confiables para la toma de decisiones.",
    benefits: [
      "Estados financieros",
      "Libros contables",
      "Reportes gerenciales",
    ],
    cta: {
      icon: ArrowRight,
      label: "Consultar",
    },
  },
  {
    id: 3,
    icon: Search,
    label: "Auditoría Financiera",
    href: "/#servicios",
    description:
      "Revisión independiente e integral de sus estados financieros bajo estándares internacionales. Certeza y confianza para inversores, bancos y socios.",
    benefits: ["Auditoría externa", "Auditoría interna", "Due diligence"],
    cta: {
      icon: ArrowRight,
      label: "Consultar",
    },
  },
  {
    id: 4,
    icon: TrendingUp,
    label: "Planificación Financiera",
    href: "/#servicios",
    description:
      "Diseñamos estrategias financieras de corto, mediano y largo plazo alineadas con sus objetivos de crecimiento empresarial.",
    benefits: [
      "Proyecciones financieras",
      "Presupuestos",
      "Análisis de inversión",
    ],
    cta: {
      icon: ArrowRight,
      label: "Consultar",
    },
  },
  {
    id: 5,
    icon: Building2,
    label: "Gestión Empresarial",
    href: "/#servicios",
    description:
      "Optimizamos su estructura organizacional y procesos internos para lograr mayor eficiencia operativa y rentabilidad sostenida.",
    benefits: [
      "Reestructuración",
      "Procesos & KPIs",
      "Consultoría estratégica",
    ],
    cta: {
      icon: ArrowRight,
      label: "Consultar",
    },
  },
];

export const slidesList: ISlide[] = [
  {
    id: 1,
    label: "Asesoría Tributaria",
    headline: "Optimiza tu",
    headlineItalic: "carga fiscal",
    subHeadline:
      "Estrategias fiscales personalizadas que protegen tu patrimonio y maximizan la eficiencia de tu empresa.",
    cta: "Agendar consulta",
    accent: "Soluciones que generan resultados medibles.",
    stat: { value: "+500", label: "empresas asesoradas" },
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=90&auto=format&fit=crop",
    imageAlt: "Asesor revisando documentos tributarios",
  },
  {
    id: 2,
    label: "Contabilidad General",
    headline: "Decisiones basadas",
    headlineItalic: "en datos reales",
    subHeadline:
      "Llevamos tu contabilidad con precisión y transparencia, brindándote información financiera en tiempo real.",
    cta: "Conocer más",
    accent: "Información financiera a tu alcance.",
    stat: { value: "15+", label: "años de experiencia" },
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=90&auto=format&fit=crop",
    imageAlt: "Profesional financiera analizando documentos",
  },
  {
    id: 3,
    label: "Auditoría Financiera",
    headline: "Transparencia",
    headlineItalic: "y confianza",
    subHeadline:
      "Nuestras auditorías independientes garantizan la integridad de tu información financiera ante cualquier stakeholder.",
    cta: "Solicitar auditoría",
    accent: "Revisión integral con estándares internacionales.",
    stat: { value: "100%", label: "precisión garantizada" },
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&auto=format&fit=crop",
    imageAlt: "Reunión de negocios estratégica",
  },
  {
    id: 4,
    label: "Planificación Financiera",
    headline: "Construye tu",
    headlineItalic: "futuro financiero",
    subHeadline:
      "Proyecciones financieras y estrategias de crecimiento diseñadas para alcanzar tus metas empresariales.",
    cta: "Planificar ahora",
    accent: "Visión estratégica de largo plazo.",
    stat: { value: "3x", label: "retorno promedio" },
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=90&auto=format&fit=crop",
    imageAlt: "Profesional financiera analizando documentos",
  },
  {
    id: 5,
    label: "Gestión Empresarial",
    headline: "Impulsa el crecimiento",
    headlineItalic: "con eficiencia",
    subHeadline:
      "Optimizamos tus procesos internos y estructura organizacional para que tu negocio opere con máxima eficiencia.",
    cta: "Transformar empresa",
    accent: "Metodologías probadas de gestión.",
    stat: { value: "40%", label: "mejora en eficiencia" },
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&auto=format&fit=crop",
    imageAlt: "Reunión de negocios estratégica",
  },
];

export const statsHome: IHomeStat[] = [
  { id: 1, value: 500, suffix: "+", label: "Clientes Atendidos" },
  { id: 2, value: 15, suffix: "+", label: "Años de Experiencia" },
  { id: 3, value: 98, suffix: "%", label: "Tasa de Satisfacción" },
  { id: 4, value: 50, suffix: "M+", label: "En Ahorro Fiscal" },
];

export const aboutHome: IAboutUs = {
  tag: "Sobre PKR",
  prefixTitle: "Expertos que",
  focusTitle: "entienden",
  suffixTitle: "tu negocio",
  paragrah: [
    "En PKR somos un equipo de especialistas con más de 15 años de experiencia en procesos tributarios y contables. Nuestra misión es transformar la complejidad fiscal en ventajas concretas para nuestros clientes.",
    "Combinamos conocimiento técnico profundo con un enfoque personalizado, adaptando nuestras soluciones a las necesidades específicas de cada empresa.",
  ],
  benefits: [
    "Ética profesional inquebrantable",
    "Actualización constante en normativa fiscal",
    "Soluciones innovadoras y personalizadas",
  ],
  cta: {
    icon: Megaphone,
    label: "Conoce Nuestro Equipo",
  },
};

export const benfitsHome: IBeginnings[] = [
  { id: 1, icon: Shield, label: "Confianza" },
  { id: 2, icon: Check, label: "Precisión" },
  { id: 3, icon: CircleStop, label: "Expertise" },
  { id: 4, icon: TrendingUp, label: "Crecimiento" },
];

export const stepsHome: IStep[] = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Consulta Inicial",
    description:
      "Escuchamos tu situación actual, necesidades y objetivos. Sin compromisos, solo conversación.",
  },
  {
    id: 2,
    icon: FileSearchCorner,
    title: "Diagnóstico",
    description:
      "Analizamos en profundidad tu estructura financiera, fiscal y operativa para identificar oportunidades.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Estrategia",
    description:
      "Diseñamos un plan personalizado alineado con los objetivos específicos de tu empresa.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos el plan con precisión y transparencia, manteniéndote informado en cada etapa del proceso.",
  },
  {
    id: 5,
    icon: RefreshCw,
    title: "Seguimiento Continuo",
    description:
      "Monitoreamos resultados, ajustamos estrategias y garantizamos que tu empresa siga creciendo.",
  },
];

export const testimonialsHome: ITestimonial[] = [
  {
    id: 1,
    initials: "MR",
    rating: 4,
    name: "María Rodríguez",
    role: "CEO",
    company: "Importaciones MR SAC",
    text: '"PKR transformó completamente nuestra gestión tributaria. Redujimos nuestra carga fiscal un 30% en el primer año, completamente dentro del marco legal."',
  },
  {
    id: 2,
    initials: "CL",
    rating: 5,
    name: "Carlos López",
    role: "Gerente General",
    company: "TechPeru EIRL",
    text: '"El equipo de PKR es excepcionalmente profesional. Su asesoría contable nos ha dado la claridad financiera que necesitábamos para expandirnos."',
  },
  {
    id: 3,
    initials: "AP",
    rating: 5,
    name: "Ana Paredes",
    role: "Directora",
    company: "Grupo Paredes & Hijos",
    text: '"La auditoría que realizó PKR nos permitió identificar ineficiencias que no habíamos notado. Hoy somos una empresa más sólida y transparente."',
  },
];
