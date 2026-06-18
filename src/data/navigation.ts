export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation = { main: [
  {
    label: "Productos",
    href: "/productos",
    children: [
      { label: "Trajes para Bomberos", href: "/productos/trajes-bombero" },
      { label: "Cascos NFPA", href: "/productos/cascos-nfpa" },
      { label: "Equipos SCBA", href: "/productos/equipos-scba" },
      { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate" },
      { label: "Extintores", href: "/productos/extintores" },
      { label: "Sistemas Contra Incendio", href: "/productos/sistemas-ci" },
      { label: "Cámaras Térmicas", href: "/productos/camaras-termicas" },
      { label: "Equipos HAZMAT", href: "/productos/hazmat" },
      { label: "Drones de Emergencia", href: "/productos/drones-emergencia" },
      { label: "Marcas autorizadas", href: "/marcas" },
      { label: "Ver todo el catálogo", href: "/productos" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Capacitación Certificada", href: "/servicios/capacitacion" },
      { label: "Mantenimiento y Recarga", href: "/servicios/mantenimiento" },
      { label: "Instalación Sistemas CI", href: "/servicios/instalacion-sistemas-ci" },
      { label: "Auditoría NOM-002", href: "/servicios/auditoria-seguridad" },
      { label: "Brigadas Empresariales", href: "/servicios/brigadas-empresariales" },
      { label: "Soporte para Licitaciones", href: "/servicios/licitaciones" },
    ],
  },
  {
    label: "Industrias",
    href: "/industrias",
    children: [
      { label: "Bomberos Municipales", href: "/industrias/bomberos-municipales" },
      { label: "Brigadas Industriales", href: "/industrias/brigadas-industriales" },
      { label: "Aeropuertos ARFF", href: "/industrias/aeropuertos-arff" },
      { label: "Hospitales", href: "/industrias/hospitales" },
      { label: "Hoteles", href: "/industrias/hoteles" },
      { label: "Refinerías PEMEX", href: "/industrias/refinerias-pemex" },
      { label: "Minería", href: "/industrias/mineria" },
      { label: "Protección Civil", href: "/industrias/proteccion-civil" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      { label: "La empresa", href: "/empresa" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Certificaciones", href: "/certificaciones" },
      { label: "Cobertura Nacional", href: "/cobertura" },
      { label: "Distribuidores", href: "/distribuidores" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  { label: "Licitaciones", href: "/licitaciones" },
] };
