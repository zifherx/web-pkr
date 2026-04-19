import {
  BookOpenText,
  Building2,
  Check,
  CircleStop,
  Clock,
  Facebook,
  FileSearchCorner,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  Phone,
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
  IContacto,
  IHomeStat,
  IService,
  ISlide,
  IStep,
  ItemNavitagion,
  ITestimonial,
  TikTokVideo,
} from "@/interfaces";

export const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/pkrcontadorestributarios" },
  { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com/@pkrcontadorestrib" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/pkrcontadorestributarios" },
];

export const navLinks: ItemNavitagion[] = [
  { id: 1, label: "Inicio", slug: "/#inicio" },
  { id: 2, label: "Servicios", slug: "/#servicios" },
  { id: 3, label: "Nosotros", slug: "/#nosotros" },
  { id: 4, label: "Proceso", slug: "/#proceso" },
  { id: 5, label: "Contacto", slug: "/contacto" },
];

export const servicesList: IService[] = [
  {
    id: 1,
    icon: Scale,
    label: "Asesoría Tributaria",
    primaryTitlePage: "Asesoría Tributaria",
    secondaryTitlePage: "Estratégica",
    slug: "asesoria-tributaria",
    cardDescription:
      "En PKR diseñamos estrategias tributarias inteligentes para reducir tu carga fiscal de forma legal y segura. Te acompañamos en cada proceso, asegurando cumplimiento ante SUNAT y protegiendo tu empresa frente a riesgos tributarios.",
    pageDescription:
      "Optimizamos tu carga fiscal con estrategias legales que maximizan tus beneficios y garantizan el cumplimiento con la normativa tributaria vigente.",
    benefits: [
      { id: 1, label: "Declaraciones tributarias sin errores" },
      { id: 2, label: "Planeamiento fiscal estratégico" },
      { id: 3, label: "Defensa y acompañamiento ante SUNAT" },
      { id: 4, label: "Asesoramiento en regímenes tributarios" },
      { id: 5, label: "Recuperación de crédito fiscal" },
      { id: 6, label: "Representación ante la administración tributaria" },
      { id: 7, label: "Análisis de contingencias tributarias" },
      { id: 8, label: "Consultas sobre normativa vigente" },
      { id: 9, label: "Estrategias de minimización fiscal legal" },
    ],
    approach: [
      {
        id: 1,
        order: "01",
        label: "Análisis Tributario",
        description:
          "Evaluamos tu situación fiscal actual para identificar opoertunidades de optimización y riesgos de incumplimiento.",
      },
      {
        id: 2,
        order: "02",
        label: "Estrategia Personalizada",
        description: "Diseñamos un plan tributario adaptado a tu sector, tamaño y objetivos de negocio.",
      },
      {
        id: 3,
        order: "03",
        label: "Cumplimiento Normativo",
        description: "Garantizamos el cumplimiento de todas tus obligaciones fiscales dentro del marco legal.",
      },
    ],
  },
  {
    id: 2,
    icon: BookOpenText,
    label: "Contabilidad General",
    primaryTitlePage: "Contabilidad Precisa y",
    secondaryTitlePage: "Transparente",
    slug: "contabilidad-general",
    cardDescription:
      "En PKR transformamos tu contabilidad en una herramienta estratégica. Te ayudamos a cumplir correctamente con tus obligaciones tributarias mientras optimizamos tus recursos para que tomes mejores decisiones.",
    pageDescription: "Gestión contable integral que te brinda visibilidad total de la salud financiera de tu empresa.",
    benefits: [
      { id: 1, label: "Cumplimiento tributario sin errores" },
      { id: 2, label: "Información financiera clara y oportuna" },
      { id: 3, label: "Asesoría estratégica para tu crecimiento" },
      { id: 4, label: "Control de cuentas por pagar y cobrar" },
      { id: 5, label: "Gestión de activos fijos" },
      { id: 6, label: "Análisis de costos y márgenes" },
      { id: 7, label: "Reportes personalizados para gerencia" },
      { id: 8, label: "Integración con sistemas de facturación" },
      { id: 9, label: "Libros contables electrónicos SUNAT" },
    ],
    approach: [
      {
        id: 1,
        order: "01",
        label: "Registro Preciso",
        description:
          "Capturamos y registramos todas las transacciones con exactitud, garantizando la integridad de tu información financiera.",
      },
      {
        id: 2,
        order: "02",
        label: "Reportes Claros",
        description:
          "Generamos estados financieros comprensibles que te ayudan a tomar decisiones informadas para tu negocio.",
      },
      {
        id: 3,
        order: "03",
        label: "Automatización",
        description:
          "Implementamos herramientas modernas que agilizan el proceso contable y reducen el margen de error humano.",
      },
    ],
  },
  {
    id: 3,
    icon: Search,
    label: "Auditoría Financiera",
    slug: "auditoria-financiera",
    primaryTitlePage: "Auditoría Financiera",
    secondaryTitlePage: "Independiente",
    cardDescription:
      "En PKR realizamos auditorías integrales que garantizan la transparencia y confiabilidad de tu información financiera. Evaluamos tus procesos y estados financieros para brindarte seguridad frente a inversionistas, entidades financieras y organismos de control.",
    pageDescription:
      "Revisión exhaustiva y objetiva de tus estados financieros para garantizar transparencia y detectar irregularidades.",
    benefits: [
      { id: 1, label: "Auditoria externa independiente" },
      { id: 2, label: "Auditoria interna y control de procesos" },
      { id: 3, label: "Due diligence para toma de decisiones" },
      { id: 4, label: "Auditoria de cumplimiento tributario" },
      { id: 5, label: "Informes de auditoría detallados" },
      { id: 6, label: "Recomendaciones de mejora" },
      { id: 7, label: "Auditoría de cuentas específicas" },
      { id: 8, label: "Due diligence financiero" },
      { id: 9, label: "Validación de información para terceros" },
    ],
    approach: [
      {
        id: 1,
        order: "01",
        label: "Planificación",
        description:
          "Definimos el alcance y metodología de la auditoría adaptada a tu empresa y objetivos específicos.",
      },
      {
        id: 2,
        order: "02",
        label: "Revisión Profunda",
        description: "Examinamos documentos, transacciones y procesos con metodología rigurosa e independiente.",
      },
      {
        id: 3,
        order: "03",
        label: "Informe Final",
        description: "Entregamos un informe completo con hallazgos, conclusiones y recomendaciones accionables.",
      },
    ],
  },
  {
    id: 4,
    icon: TrendingUp,
    label: "Planificación Financiera",
    slug: "planificacion-financiera",
    primaryTitlePage: "Planificación Financiera",
    secondaryTitlePage: "Estratégica",
    cardDescription:
      "En PKR diseñamos estrategias financieras que impulsan el crecimiento sostenible de tu empresa. Analizamos tu información para proyectar escenarios, optimizar recursos y ayudarte a tomar decisiones con mayor seguridad.",
    pageDescription:
      "Diseñamos estrategias financieras a medida que alinean tus recursos con tus objetivos de crecimiento sostenible.",
    benefits: [
      { id: 1, label: "Proyecciones financieras estratégicas" },
      { id: 2, label: "Presupuestos y control de gestión" },
      { id: 3, label: "Evaluación y análisis de inversiones" },
      { id: 4, label: "Estrategias de inversión y financiamiento" },
      { id: 5, label: "Presupuestos anuales y control" },
      { id: 6, label: "Análisis de riesgos financieros" },
      { id: 7, label: "Reestructuración financiera" },
      { id: 8, label: "Valorización de empresas" },
      { id: 9, label: "Planificación de capital de trabajo" },
    ],
    approach: [
      {
        id: 1,
        order: "01",
        label: "Diagnóstico Financiero",
        description:
          "Analizamos tu situación financiera actual: liquidez, rentabilidad, endeudamiento y eficiencia operativa.",
      },
      {
        id: 2,
        order: "02",
        label: "Plan Estratégico",
        description: "Diseñamos un roadmap financiero con metas claras, indicadores y estrategias de implementación.",
      },
      {
        id: 3,
        order: "03",
        label: "Monitoreo Continuo",
        description: "Hacemos seguimiento periódico del plan y ajustamos la estrategia ante cambios del entorno.",
      },
    ],
  },
  {
    id: 5,
    icon: Building2,
    label: "Gestión Empresarial",
    slug: "gestion-empresarial",
    primaryTitlePage: "Gestión Empresarial",
    secondaryTitlePage: "Integral",
    cardDescription:
      "En PKR impulsamos el crecimiento de su empresa mediante la optimización de su estructura organizacional y la mejora continua de sus procesos internos. Nuestro enfoque está orientado a lograr mayor eficiencia operativa, control y rentabilidad sostenible.",
    pageDescription:
      "Asesoramiento estratégico integral para optimizar procesos, mejorar la eficiencia operativa y escalar tu negocio.",
    benefits: [
      { id: 1, label: "Reestructuración organizacional" },
      { id: 2, label: "Diseño y optimización de procesos & KPIs" },
      { id: 3, label: "Asesoría estratégica para la toma de decisiones" },
      { id: 4, label: "Indicadores de gestión (KPIs)" },
      { id: 5, label: "Estrategias de crecimiento y expansión" },
      { id: 6, label: "Análisis de mercado y competencia" },
      { id: 7, label: "Gestión del cambio organizacional" },
      { id: 8, label: "Implementación de sistemas de control" },
      { id: 9, label: "Coaching gerencial y directivo" },
    ],
    approach: [
      {
        id: 1,
        order: "01",
        label: "Análisis Organizacional",
        description:
          "Evaluamos la estructura, procesos y capacidades de tu empresa para identificar cuellos de botella y oportunidades.",
      },
      {
        id: 2,
        order: "02",
        label: "Estrategia de Crecimiento",
        description: "Definimos el camino de expansión más adecuado para tu empresa, con metas y acciones concretas.",
      },
      {
        id: 3,
        order: "03",
        label: "Implementación y Control",
        description:
          "Acompañamos la ejecución del plan e implementamos métricas que aseguran el cumplimiento de objetivos.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): IService | undefined => {
  return servicesList.find((servicio) => servicio.slug === slug);
};

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
    // imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=90&auto=format&fit=crop",
    imageUrl: "/images/slides/slide-01.jpg",
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
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=90&auto=format&fit=crop",
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
    imageUrl: "/images/slides/slide-02.jpg",
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
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=90&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&auto=format&fit=crop",
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
    description: "Escuchamos tu situación actual, necesidades y objetivos. Sin compromisos, solo conversación.",
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
    description: "Diseñamos un plan personalizado alineado con los objetivos específicos de tu empresa.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Implementación",
    description: "Ejecutamos el plan con precisión y transparencia, manteniéndote informado en cada etapa del proceso.",
  },
  {
    id: 5,
    icon: RefreshCw,
    title: "Seguimiento Continuo",
    description: "Monitoreamos resultados, ajustamos estrategias y garantizamos que tu empresa siga creciendo.",
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

export const infoContacto: IContacto[] = [
  { id: 1, icon: Mail, label: "Email", value: "info@pkr.com" },
  { id: 2, icon: Phone, label: "Teléfono", value: "+51 926 924 472" },
  {
    id: 3,
    icon: Clock,
    label: "Horario",
    value: "Lun–Vie: 8:00 AM – 6:00 PM",
  },
  {
    id: 4,
    icon: MapPin,
    label: "Ubicación",
    value: "Av. Antenor Orrego 186, 2do piso, Trujillo",
  },
];

export const tiktokVideos: TikTokVideo[] = [
  { id: "7628286142063971605" },
  { id: "7628276693299465492" },
  { id: "7615351870332210450" },
  { id: "7611552531235212564" },
];
