export interface NavItem {
  label: string;
  href: string;
  description?: string;   // subtítulo opcional (para mega-menu o tooltips)
  children?: NavItem[];   // soporta hasta 3 niveles
}

export const navigation = { main: [
  {
    label: "Productos",
    href: "/productos",
    children: [
      {
        label: "Trajes para Bomberos",
        href: "/productos/trajes-bombero",
        description: "Globe, Lion, Honeywell, Fire-Dex",
        children: [
          { label: "Globe Manufacturing", href: "/productos/trajes-bombero/globe-manufacturing", description: "NFPA 1970 — 6 modelos" },
          { label: "Lion Apparel",          href: "/productos/trajes-bombero/lion-apparel",          description: "NFPA 1970 + 1977 — V-Force®" },
          { label: "Honeywell Morning Pride", href: "/productos/trajes-bombero/honeywell-morning-pride", description: "NFPA 1970 · 2112 · CBRN" },
          { label: "Fire-Dex",               href: "/productos/trajes-bombero/fire-dex",               description: "TECGEN® · el más ligero" },
        ],
      },
      {
        label: "Cascos NFPA",
        href: "/productos/cascos-nfpa",
        description: "MSA, Bullard, Cairns",
        children: [
          { label: "MSA Gallet", href: "/productos/cascos-nfpa/msa-gallet", description: "F1 XF · ARFF · USAR · NFPA 1970" },
          { label: "Bullard",    href: "/productos/cascos-nfpa/bullard",    description: "USTM · ala completa · NFPA 1970" },
          { label: "Cairns",     href: "/productos/cascos-nfpa/cairns",     description: "N6A Houston · cuero · NFPA 1970" },
        ],
      },
      {
        label: "Equipos SCBA",
        href: "/productos/equipos-scba",
        description: "MSA G1, Dräger, 3M Scott",
        children: [
          { label: "MSA G1",                href: "/productos/equipos-scba/msa-g1",       description: "EOSTI · telemetría ICM · NFPA 1970" },
          { label: "Dräger PSS 7000",       href: "/productos/equipos-scba/drager-pss",   description: "Arnés ergonómico · EN 137 + NFPA" },
          { label: "3M Scott Air-Pak NxG7", href: "/productos/equipos-scba/scott-air-pak", description: "Modular · Pak-Tracker · NFPA 1970" },
        ],
      },
      {
        label: "Herramientas de Rescate",
        href: "/productos/herramientas-rescate",
        description: "Holmatro, Hurst, Weber Rescue",
        children: [
          { label: "Holmatro",           href: "/productos/herramientas-rescate/holmatro",     description: "Pentheon batería · Combi-Tool" },
          { label: "Hurst Jaws of Life", href: "/productos/herramientas-rescate/hurst",        description: "eDRAULIC · el inventor del rescate" },
          { label: "Weber Rescue",       href: "/productos/herramientas-rescate/weber-rescue", description: "E-FORCE · ingeniería alemana" },
        ],
      },
      {
        label: "Extintores",
        href: "/productos/extintores",
        description: "PQS ABC · CO₂ · Especializados · Sobre Ruedas",
        children: [
          { label: "PQS ABC",          href: "/productos/extintores/pqs-abc",        description: "NOM-154-SCFI · 1 a 12 kg · A·B·C" },
          { label: "CO₂",             href: "/productos/extintores/co2",            description: "NOM-100-SCFI · Sin residuo · Clase C" },
          { label: "Especializados",   href: "/productos/extintores/especializados", description: "Agua · AFFF · Tipo K · FM-200" },
          { label: "Sobre Ruedas",     href: "/productos/extintores/sobre-ruedas",   description: "25 a 125 kg · Industrial · Aeronáutico" },
        ],
      },
      {
        label: "Sistemas Contra Incendio",
        href: "/productos/sistemas-ci",
        description: "Tyco Viking · Notifier · Kidde Fenwal · Red Hidráulica",
        children: [
          { label: "Tyco Viking",          href: "/productos/sistemas-ci/tyco-viking",          description: "NFPA 13 · rociadores UL/FM · Viking EC" },
          { label: "Honeywell Notifier",   href: "/productos/sistemas-ci/honeywell-notifier",   description: "NFPA 72 · detección · NFS2-3030" },
          { label: "Kidde Fenwal",         href: "/productos/sistemas-ci/fm200-novec",          description: "NFPA 2001 · FM-200 · Novec 1230" },
          { label: "Red Hidráulica",       href: "/productos/sistemas-ci/red-hidraulica",       description: "NFPA 20 · bombas UL/FM · gabinetes CI" },
        ],
      },
      {
        label: "Cámaras Térmicas",
        href: "/productos/camaras-termicas",
        description: "FLIR, MSA Evolution, Bullard",
        children: [
          { label: "FLIR",          href: "/productos/camaras-termicas/flir",          description: "K-Series · FSX · NFPA 1930" },
          { label: "MSA Evolution", href: "/productos/camaras-termicas/msa-evolution",  description: "Integración G1 · manos libres" },
          { label: "Bullard TXS",   href: "/productos/camaras-termicas/bullard-txs",    description: "Interfaz intuitiva · montaje casco" },
        ],
      },
      {
        label: "Equipos HAZMAT",
        href: "/productos/hazmat",
        description: "DuPont Tychem · Lakeland · MSA · Kappler",
        children: [
          { label: "DuPont Tychem",       href: "/productos/hazmat/dupont-tychem",     description: "NFPA 1990 · Nivel A encapsulado · Tychem 10000" },
          { label: "Lakeland Industries", href: "/productos/hazmat/lakeland-chemmax",  description: "NFPA 1990 · ChemMax · AlphaTec · FR" },
          { label: "MSA Safety",          href: "/productos/hazmat/msa-deteccion",     description: "Altair · multi-gas · ATEX · espacio confinado" },
          { label: "Kappler",             href: "/productos/hazmat/kappler",           description: "Zytron 500 CBRN · Frontline FR · kits Nivel B" },
        ],
      },
      { label: "Drones de Emergencia",       href: "/productos/drones-emergencia",      description: "ISR, búsqueda y rescate" },
      { label: "Marcas autorizadas",         href: "/marcas",                           description: "20+ fabricantes internacionales" },
      { label: "Ver catálogo completo →",    href: "/productos" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Capacitación Certificada",   href: "/servicios/capacitacion",           description: "NFPA, NOM-002, brigadas" },
      { label: "Mantenimiento y Recarga",    href: "/servicios/mantenimiento",          description: "NFPA 1850, extintores" },
      { label: "Instalación Sistemas CI",    href: "/servicios/instalacion-sistemas-ci",description: "Diseño e instalación" },
      { label: "Auditoría NOM-002",          href: "/servicios/auditoria-seguridad",    description: "Diagnóstico y cumplimiento" },
      { label: "Brigadas Empresariales",     href: "/servicios/brigadas-empresariales", description: "Formación y equipamiento" },
      { label: "Soporte para Licitaciones",  href: "/servicios/licitaciones",           description: "Fichas técnicas y manifiestos" },
    ],
  },
  {
    label: "Industrias",
    href: "/industrias",
    children: [
      { label: "Bomberos Municipales",       href: "/industrias/bomberos-municipales" },
      { label: "Brigadas Industriales",      href: "/industrias/brigadas-industriales" },
      { label: "Aeropuertos ARFF",           href: "/industrias/aeropuertos-arff" },
      { label: "Hospitales",                 href: "/industrias/hospitales" },
      { label: "Hoteles",                    href: "/industrias/hoteles" },
      { label: "Refinerías PEMEX",           href: "/industrias/refinerias-pemex" },
      { label: "Minería",                    href: "/industrias/mineria" },
      { label: "Protección Civil",           href: "/industrias/proteccion-civil" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      { label: "La empresa",                 href: "/empresa" },
      { label: "Nosotros",                   href: "/nosotros" },
      { label: "Certificaciones",            href: "/certificaciones" },
      { label: "Cobertura Nacional",         href: "/cobertura" },
      { label: "Distribuidores",             href: "/distribuidores" },
      { label: "Contacto",                   href: "/contacto" },
    ],
  },
  { label: "Precios", href: "/precios" },
  { label: "Licitaciones", href: "/licitaciones" },
  {
    label: "Directorio",
    href: "/estaciones",
    children: [
      { label: "Estaciones de Bomberos",  href: "/estaciones",            description: "Directorio nacional — 32 estados" },
      { label: "Ciudad de México",        href: "/estaciones/ciudad-de-mexico", description: "HCBCDMX + AICM + cuarteles" },
      { label: "Jalisco",                 href: "/estaciones/jalisco",    description: "GDL, ZMG y municipios" },
      { label: "Nuevo León",              href: "/estaciones/nuevo-leon", description: "Monterrey y ZMM" },
      { label: "Estado de México",        href: "/estaciones/estado-de-mexico", description: "Toluca, Naucalpan, Ecatepec" },
      { label: "Ver todos los estados →", href: "/estaciones" },
    ],
  },
] };
