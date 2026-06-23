export interface Product {
  slug: string;
  title: string;
  description: string;
  category: string;
  brand?: string;
  norm?: string;
  badge?: string;
  image?: string;
  href: string;
  /** Tier de mercado, e.g. "Tier 1 · Internacional" */
  tier?: string;
  /** Especificaciones técnicas clave para mostrar como chips */
  specs?: {
    tpp?: string;
    thl?: string;
    outer?: string;
    weight?: string;
    extra?: string;
  };
  /** Tres características destacadas */
  features?: string[];
  /** Si es el modelo estelar de la categoría */
  highlight?: boolean;
}

export const featuredProducts: Product[] = [

  /* ─── Globe Manufacturing — 5 modelos estructurales ──────────── */
  {
    slug: "globe-gxtreme-3-estructural",
    title: "Globe G-XTREME 3.0",
    description: "El traje estructural más solicitado en licitaciones mexicanas tier-1. Sistema de 3 capas con shell PBI Matrix para máxima durabilidad, barrera GORE-TEX CrossTech y liner Nomex Nano de baja transmisión térmica.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Más solicitado MX",
    image: "/images/productos/traje-globe-gx7-estructural-1.avif",
    href: "/productos/trajes-bombero/globe-gxtreme-3",
    tier: "Tier 1 · Internacional",
    highlight: true,
    specs: {
      tpp: "TPP ≥ 35 cal/cm²",
      thl: "THL ≥ 130 W/m²",
      outer: "PBI Matrix",
      weight: "~4.5 kg completo",
    },
    features: [
      "Shell PBI Matrix con resistencia química superior a Nomex estándar",
      "Barrera GORE-TEX CrossTech® — certificada NFPA 1971 PFAS-free disponible",
      "Liner Nomex Nano de alta transpirabilidad para reducir estrés térmico",
    ],
  },
  {
    slug: "globe-athletix-estructural",
    title: "Globe ATHLETIX",
    description: "Traje de nueva generación con tejido Kombat Stretch PBI/Kevlar que permite rango de movimiento superior sin sacrificar protección. El favorito de cuerpos metropolitanos que priorizan movilidad y ergonomía.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Máxima movilidad",
    image: "/images/productos/traje-bombero-franjas-reflectivas-nfpa.avif",
    href: "/productos/trajes-bombero/globe-athletix",
    tier: "Tier 1 · Internacional",
    specs: {
      tpp: "TPP ≥ 35 cal/cm²",
      thl: "THL ≥ 155 W/m²",
      outer: "PBI/Kevlar Kombat Stretch",
      weight: "~4.1 kg completo",
    },
    features: [
      "Tejido Kombat Stretch: 30% mayor rango de movimiento vs. traje estándar",
      "Patrón Konflex preformado en rodillas y codos — reduce fatiga en servicio largo",
      "Reflectivo 3M Scotchlite Comfort Trim de mayor visibilidad nocturna",
    ],
  },
  {
    slug: "globe-classix-estructural",
    title: "Globe CLASSIX",
    description: "El traje estructural de referencia en miles de departamentos de América del Norte durante más de 30 años. Probado, predecible y certificado. La base de comparación para cualquier evaluación de trajes NFPA 1971.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Estándar probado",
    image: "/images/productos/traje-bombero-en-servicio.avif",
    href: "/productos/trajes-bombero/globe-classix",
    tier: "Tier 1 · Internacional",
    specs: {
      tpp: "TPP ≥ 35 cal/cm²",
      thl: "THL ≥ 130 W/m²",
      outer: "Nomex NXT",
      weight: "~4.7 kg completo",
    },
    features: [
      "Shell Nomex® NXT resistente a abrasión, rasgadura y calor directo",
      "Barrera CrossTech® Black — impermeabilidad probada en condiciones extremas",
      "Disponibilidad inmediata tallas S–4XL desde stock CDMX",
    ],
  },
  {
    slug: "globe-gxcel-estructural",
    title: "Globe G-XCEL",
    description: "La puerta de entrada a la línea Globe. Protección NFPA 1971 completa con materiales de probado desempeño y precio más accesible. Ideal para departamentos que requieren certificación tier-1 dentro de un presupuesto ajustado.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Entrada tier-1",
    image: "/images/productos/traje-bombero-completo-equipo.avif",
    href: "/productos/trajes-bombero/globe-gxcel",
    tier: "Tier 1 · Internacional",
    specs: {
      tpp: "TPP ≥ 35 cal/cm²",
      thl: "THL ≥ 130 W/m²",
      outer: "Nomex IIIA",
      weight: "~4.6 kg completo",
    },
    features: [
      "Certificación Globe NFPA 1971 verificable por número de lote",
      "Sistema de capas compatibles con accesorios Globe crossline",
      "Relación precio-protección óptima para licitaciones estatales con presupuesto estándar",
    ],
  },
  {
    slug: "globe-proximity-arff",
    title: "Globe Proximity — ARFF",
    description: "Traje de proximidad aluminizado para servicio aeroportuario, refinerías y aproximación a combustible. Refleja más del 90% del calor radiante. Cumple NFPA 1971 Proximity y estándares ICAO para servicio ARFF.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Aeropuertos · ARFF",
    image: "/images/productos/traje-jacket-detalle-nfpa.avif",
    href: "/productos/trajes-bombero/globe-proximity-arff",
    tier: "Tier 1 · Internacional",
    specs: {
      tpp: "Reflexividad > 90%",
      thl: "Resistencia Jet-A",
      outer: "Aluminizado 3 capas",
      extra: "ICAO Annex 14",
    },
    features: [
      "Capa exterior aluminizada que refleja calor radiante extremo de combustibles de aviación",
      "Compatible con SCBA de perfil bajo para operación en cockpit y fuselaje",
      "Certificación NFPA 1971 Proximity + estándar ICAO para aeropuertos internacionales",
    ],
  },

  /* ─── Otros productos del catálogo ───────────────────────────── */
  {
    slug: "traje-estructural-nfpa-1971",
    title: "Traje Estructural Globe GX-7 NFPA 1970",
    description: "Traje de combate estructural certificado NFPA 1970, 3 capas (externa DuPont™ Nomex® NXT, barrera de humedad Crosstech®, forro PBI/Kevlar®). Costuras de doble aguja reforzadas.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1970",
    badge: "Más vendido",
    image: "/images/categorias/trajes-bombero.avif",
    href: "/productos/trajes-bombero/globe-gx7-estructural-nfpa-1971",
  },
  {
    slug: "scba-msa-g1",
    title: "SCBA MSA G1 30 min NFPA 1970",
    description: "Equipo de aire autónomo MSA G1, cilindro de fibra de carbono 4500 psi, 30 minutos autonomía, válvula EOSTI integrada, compatible NFPA 1970 Ed.",
    category: "Equipos SCBA",
    brand: "MSA Safety",
    norm: "NFPA 1970",
    image: "/images/categorias/equipos-scba.avif",
    href: "/productos/equipos-scba/msa-g1-scba-30min",
  },
  {
    slug: "camara-termica-bullard-tac",
    title: "Cámara Térmica Bullard T3-MAX",
    description: "Cámara de imagen térmica para bomberos. Sensor 320×240 px, autonomía 4h, resistencia EN54-10, pantalla de alta resolución, mango ergonómico intercambiable.",
    category: "Cámaras Térmicas",
    brand: "Bullard",
    norm: "NFPA 1801",
    image: "/images/categorias/camaras-termicas.avif",
    href: "/productos/camaras-termicas/bullard-t3max",
  },
  {
    slug: "extintor-co2-10kg",
    title: "Extintor CO₂ 10 kg Clase BC",
    description: "Extintor portátil de dióxido de carbono 10 kg, ideal para tableros eléctricos, servidores y equipos electrónicos. Certificado NOM-100-SCFI y NFPA 10.",
    category: "Extintores",
    norm: "NOM-100-SCFI",
    badge: "NOM Certificado",
    image: "/images/categorias/extintores.avif",
    href: "/productos/extintores/extintor-co2-10kg",
  },
  {
    slug: "casco-msa-gallet-f1-nfpa",
    title: "Casco MSA Gallet F1 XF NFPA 1970",
    description: "Casco estructural certificado NFPA 1970. Cuerpo de fibra de vidrio, protector facial integrado Optrel, talla única ajustable, peso 1.35 kg.",
    category: "Cascos NFPA",
    brand: "MSA Safety",
    norm: "NFPA 1970",
    image: "/images/categorias/cascos-nfpa.avif",
    href: "/productos/cascos-nfpa/msa-gallet-f1xf",
  },
  {
    slug: "cizalla-holmatro-spr-4250",
    title: "Cizalla Holmatro SPR 4250 SC",
    description: "Cizalla combinada de rescate vehicular con apertura máxima 250 mm, fuerza de corte 1,060 kN. Sistema Combi-Tool para cambio rápido de herramientas. NFPA 1936.",
    category: "Herramientas Rescate",
    brand: "Holmatro",
    norm: "NFPA 1936",
    image: "/images/categorias/herramientas-rescate.avif",
    href: "/productos/herramientas-rescate/holmatro-spr4250",
  },
];
