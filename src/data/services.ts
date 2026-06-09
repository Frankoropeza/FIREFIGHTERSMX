export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    slug: "capacitacion",
    title: "Capacitación Certificada",
    icon: "🎓",
    description: "Cursos NFPA y NOM-002 con constancia DC-3 STPS para brigadas empresariales y cuerpos de bomberos.",
    features: ["DC-3 STPS", "NFPA 1001 / 1041", "NOM-002-STPS-2010", "Simulacros in situ"],
    href: "/servicios/capacitacion",
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento y Recarga",
    icon: "🔧",
    description: "Mantenimiento preventivo y correctivo de extintores, SCBA, herramientas hidráulicas y cámaras térmicas.",
    features: ["Extintores NOM-106", "SCBA hidrostático", "Herramientas Holmatro", "Certificado de servicio"],
    href: "/servicios/mantenimiento",
  },
  {
    slug: "instalacion-sistemas-ci",
    title: "Instalación Sistemas CI",
    icon: "⚙️",
    description: "Diseño e instalación de sistemas de rociadores NFPA 13, alarmas NFPA 72 y supresores especiales.",
    features: ["NFPA 13 rociadores", "NFPA 72 alarmas", "FM-200 / Novec 1230", "Memoria de cálculo hidráulico"],
    href: "/servicios/instalacion-sistemas-ci",
  },
  {
    slug: "auditoria-seguridad",
    title: "Auditoría NOM-002",
    icon: "📋",
    description: "Evaluación integral de instalaciones, brigadas y documentación contra incendio conforme a NOM-002-STPS-2010.",
    features: ["Diagnóstico de planta", "Plan de mejora", "Seguimiento 90 días", "Informe ejecutivo"],
    href: "/servicios/auditoria-seguridad",
  },
  {
    slug: "brigadas-empresariales",
    title: "Brigadas Empresariales",
    icon: "🏭",
    description: "Diseño, equipamiento y capacitación de brigadas contra incendio desde cero, con DC-3 STPS incluido.",
    features: ["Diseño organizacional", "Equipo completo NOM", "Capacitación DC-3", "Protocolos de respuesta"],
    href: "/servicios/brigadas-empresariales",
  },
  {
    slug: "licitaciones",
    title: "Soporte para Licitaciones",
    icon: "📄",
    description: "Acompañamiento técnico completo para ganar licitaciones en CompraNet, PEMEX, CFE y municipios.",
    features: ["Fichas técnicas NOM/NFPA", "Manifiestos de normas", "Registro CompraNet", "Asesoría jurídica"],
    href: "/servicios/licitaciones",
  },
];
