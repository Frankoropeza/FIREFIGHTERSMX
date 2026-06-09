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
}

export const featuredProducts: Product[] = [
  {
    slug: "traje-estructural-nfpa-1971",
    title: "Traje Estructural Globe GX-7 NFPA 1971",
    description: "Traje de combate estructural certificado NFPA 1971:2018, 3 capas (externa DuPont™ Nomex® NXT, barrera de humedad Crosstech®, forro PBI/Kevlar®). Costuras de doble aguja reforzadas.",
    category: "Trajes Bombero",
    brand: "Globe Manufacturing",
    norm: "NFPA 1971",
    badge: "Más vendido",
    href: "/productos/trajes-bombero/globe-gx7-estructural-nfpa-1971",
  },
  {
    slug: "scba-msa-g1",
    title: "SCBA MSA G1 30 min NFPA 1981",
    description: "Equipo de aire autónomo MSA G1, cilindro de fibra de carbono 4500 psi, 30 minutos autonomía, válvula EOSTI integrada, compatible NFPA 1981:2019 Ed.",
    category: "Equipos SCBA",
    brand: "MSA Safety",
    norm: "NFPA 1981",
    href: "/productos/equipos-scba/msa-g1-scba-30min",
  },
  {
    slug: "camara-termica-bullard-tac",
    title: "Cámara Térmica Bullard T3-MAX",
    description: "Cámara de imagen térmica para bomberos. Sensor 320×240 px, autonomía 4h, resistencia EN54-10, pantalla de alta resolución, mango ergonómico intercambiable.",
    category: "Cámaras Térmicas",
    brand: "Bullard",
    norm: "NFPA 1801",
    href: "/productos/camaras-termicas/bullard-t3max",
  },
  {
    slug: "extintor-co2-10kg",
    title: "Extintor CO₂ 10 kg Clase BC",
    description: "Extintor portátil de dióxido de carbono 10 kg, ideal para tableros eléctricos, servidores y equipos electrónicos. Certificado NOM-100-SCFI y NFPA 10.",
    category: "Extintores",
    norm: "NOM-100-SCFI",
    badge: "NOM Certificado",
    href: "/productos/extintores/extintor-co2-10kg",
  },
  {
    slug: "casco-msa-gallet-f1-nfpa",
    title: "Casco MSA Gallet F1 XF NFPA 1971",
    description: "Casco estructural certificado NFPA 1971:2018. Cuerpo de fibra de vidrio, protector facial integrado Optrel, talla única ajustable, peso 1.35 kg.",
    category: "Cascos NFPA",
    brand: "MSA Safety",
    norm: "NFPA 1971",
    href: "/productos/cascos-nfpa/msa-gallet-f1xf",
  },
  {
    slug: "cizalla-holmatro-spr-4250",
    title: "Cizalla Holmatro SPR 4250 SC",
    description: "Cizalla combinada de rescate vehicular con apertura máxima 250 mm, fuerza de corte 1,060 kN. Sistema Combi-Tool para cambio rápido de herramientas. NFPA 1936.",
    category: "Herramientas Rescate",
    brand: "Holmatro",
    norm: "NFPA 1936",
    href: "/productos/herramientas-rescate/holmatro-spr4250",
  },
];
