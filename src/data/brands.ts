export interface Brand {
  name: string;
  emoji: string;
  description: string;
  country?: string;
  website?: string;
}

export const brands: Brand[] = [
  { name: "MSA Safety", emoji: "🛡️", description: "Líder mundial en EPP para bomberos. SCBA, cascos, trajes y detectores de gas.", country: "🇺🇸 USA" },
  { name: "Dräger", emoji: "🔵", description: "Tecnología alemana de precisión. SCBA, equipos médicos y detección de gases.", country: "🇩🇪 Alemania" },
  { name: "3M Scott", emoji: "🟠", description: "SCBA Scott Air-Pak, mascarillas y equipos respiratorios para emergencias.", country: "🇺🇸 USA" },
  { name: "Globe Manufacturing", emoji: "🧥", description: "El fabricante #1 de trajes estructurales para bomberos en Norteamérica.", country: "🇺🇸 USA" },
  { name: "Holmatro", emoji: "⚙️", description: "Herramientas hidráulicas de rescate: cizallas, expansores, cilindros.", country: "🇳🇱 Países Bajos" },
  { name: "Bullard", emoji: "⛑️", description: "Cascos para bomberos, cámaras de imagen térmica y EPP de alta performance.", country: "🇺🇸 USA" },
  { name: "Honeywell", emoji: "🔶", description: "Detectores de gas, alarmas contra incendio y soluciones de seguridad integral.", country: "🇺🇸 USA" },
  { name: "Kidde / UTC", emoji: "🚨", description: "Extintores, sistemas de supresión y alarmas para mercado comercial e industrial.", country: "🇺🇸 USA" },
  { name: "Ansul", emoji: "🔴", description: "Sistemas de supresión para cocinas industriales, transformadores y riesgos especiales.", country: "🇺🇸 USA" },
  { name: "NAFFCO", emoji: "🏗️", description: "Fabricante global de extintores, equipos CI y vehículos bomberos.", country: "🇦🇪 EAU" },
  { name: "Tyco / Johnson Controls", emoji: "🟢", description: "Rociadores NFPA 13, sistemas de alarma y soluciones contra incendio a gran escala.", country: "🇮🇪 Irlanda" },
  { name: "Rosenbauer", emoji: "🚒", description: "Vehículos y equipos para cuerpos de bomberos a nivel mundial.", country: "🇦🇹 Austria" },
  { name: "Lion Apparel", emoji: "🦁", description: "Trajes estructurales y de proximidad, capas y prendas de protección.", country: "🇺🇸 USA" },
  { name: "Cairns Helmets", emoji: "⛑️", description: "Cascos tradicionales para bomberos estructurales, iconos del sector.", country: "🇺🇸 USA" },
  { name: "Flir / Teledyne", emoji: "📷", description: "Cámaras de imagen térmica para bomberos y búsqueda y rescate.", country: "🇺🇸 USA" },
  { name: "DJI Enterprise", emoji: "🚁", description: "Drones para emergencias, búsqueda y rescate y vigilancia aérea.", country: "🇨🇳 China" },
];
