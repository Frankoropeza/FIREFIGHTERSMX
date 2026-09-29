/**
 * Árbol del catálogo — FUENTE ÚNICA (2026-09-16).
 *
 * Familia  línea  páginas hijas. Sustituye a las dos rejillas duplicadas de
 * la portada (LineasContraIncendio + ProductCards) y es la base del árbol de
 * /productos/ y del menú. Cada línea aparece UNA sola vez.
 *
 * Imágenes: /images/catalogo/<slug>.avif (1200×750, 16:10). Si el archivo no
 * existe, la card pinta un panel técnico con el ícono — nunca una foto que no
 * corresponda al producto. Prompts de generación en `prompt`.
 */
import { allCategories } from './categories';

const cat = (slug: string) => allCategories.find((c) => c.slug === slug)!;

export interface LineaCatalogo {
  slug: string;
  titulo: string;
  norma: string;
  texto: string;
  href: string;
  cta: string;
  imagenAlt: string;
  icon: string;
  accent: string;
  /** Páginas hijas existentes (para árbol, menú y enlazado interno) */
  hijas: { label: string; href: string }[];
  /** Prompt para fal.ai/FLUX — foto de producto, sin texto ni logotipos */
  prompt: string;
}

export interface FamiliaCatalogo {
  slug: string;
  eyebrow: string;
  titulo: string;
  texto: string;
  hub: { label: string; href: string };
  lineas: LineaCatalogo[];
}

const ICON = {
  rociador: '',
  alarma: '',
  bomba: '',
  hidrante: '',
  supresion: '',
};

const FOTO = 'Professional commercial product photograph, dark navy studio background with subtle blueprint grid, soft orange rim light, sharp focus, realistic materials, 16:10 wide composition, no text, no logos, no people faces';

export const catalogo: FamiliaCatalogo[] = [
  {
    slug: 'proteccion-inmuebles',
    eyebrow: 'Protección contra incendio para inmuebles',
    titulo: 'Detectar, combatir y evacuar',
    texto: 'Equipo y sistemas fijos para oficinas, comercios, hoteles, almacenes e industria: del extintor al rociador, con la norma que exige cada uno.',
    hub: { label: 'Sistemas contra incendio para inmuebles', href: '/productos/sistemas-ci/' },
    lineas: [
      {
        slug: 'extintores',
        titulo: 'Extintores',
        norma: 'NOM-100-STPS · NOM-102-STPS · NFPA 10',
        texto: 'Portátiles y sobre ruedas de polvo químico seco, CO₂, tipo K y agente limpio, con recarga y mantenimiento conforme a NOM-154-SCFI.',
        href: '/productos/extintores/',
        cta: 'Venta de extintores',
        imagenAlt: 'Extintores portátiles de polvo químico seco y CO₂ con manómetro y collar de garantía',
        icon: cat('extintores').icon,
        accent: cat('extintores').accent,
        hijas: [
          { label: 'Extintores PQS ABC', href: '/productos/extintores/pqs-abc/' },
          { label: 'Extintores CO₂', href: '/productos/extintores/co2/' },
          { label: 'Extintores tipo K', href: '/productos/extintores/extintor-tipo-k/' },
          { label: 'Extintores sobre ruedas', href: '/productos/extintores/sobre-ruedas/' },
          { label: 'Extintores especializados', href: '/productos/extintores/especializados/' },
        ],
        prompt: `Row of three red portable fire extinguishers of different sizes (dry chemical and CO2) plus one wheeled industrial extinguisher, pressure gauges and valve heads visible. ${FOTO}`,
      },
      {
        slug: 'rociadores',
        titulo: 'Rociadores automáticos',
        norma: 'NFPA 13',
        texto: 'Rociadores que descargan agua sobre el fuego en su etapa inicial, diseñados por densidad de riesgo para naves, almacenes y edificios.',
        href: '/productos/sistemas-ci/rociadores-contra-incendio/',
        cta: 'Rociadores contra incendio',
        imagenAlt: 'Rociador automático contra incendio con bulbo de vidrio instalado en tubería roja',
        icon: ICON.rociador,
        accent: cat('sistemas-ci').accent,
        hijas: [
          { label: 'Rociadores Tyco y Viking', href: '/productos/sistemas-ci/tyco-viking/' },
          { label: 'Rociador colgante Tyco TY-B', href: '/productos/sistemas-ci/tyco-tyb-pendant/' },
          { label: 'Rociador vertical Tyco TY3131', href: '/productos/sistemas-ci/tyco-ty3131-respuesta-rapida/' },
          { label: 'Rociador Viking VK100', href: '/productos/sistemas-ci/viking-vk100-estandar/' },
        ],
        prompt: `Close-up of a brass pendent fire sprinkler head with red glass bulb mounted on red steel pipe under a ceiling, macro detail. ${FOTO}`,
      },
      {
        slug: 'deteccion-alarma',
        titulo: 'Detección y alarma',
        norma: 'NFPA 72',
        texto: 'Paneles direccionables, detectores de humo y calor, estaciones manuales y notificación audiovisual que alertan a los ocupantes.',
        href: '/productos/sistemas-ci/alarma-contra-incendio/',
        cta: 'Alarma contra incendio',
        imagenAlt: 'Panel de alarma contra incendio con detector de humo, estación manual y estrobo',
        icon: ICON.alarma,
        accent: '#B54708',
        hijas: [
          { label: 'Sistemas Notifier y Honeywell', href: '/productos/sistemas-ci/honeywell-notifier/' },
          { label: 'Panel Notifier NFS2-3030', href: '/productos/sistemas-ci/notifier-nfs2-3030/' },
          { label: 'Detector de humo Notifier FSP-951', href: '/productos/sistemas-ci/honeywell-detector-humo/' },
          { label: 'Sirena estrobo System Sensor', href: '/productos/sistemas-ci/system-sensor-pc2rl-sirena-estrobo/' },
        ],
        prompt: `Addressable fire alarm control panel on a wall next to a white ceiling smoke detector, a red manual pull station and a red horn strobe. ${FOTO}`,
      },
      {
        slug: 'detectores-de-humo',
        titulo: 'Detectores de humo autónomos',
        norma: 'NFPA 72 · UL 217',
        texto: 'Alarmas autónomas Kidde de humo y humo/CO para vivienda, con opciones a batería, cableadas e interconectables según modelo.',
        href: '/productos/detectores-de-humo/',
        cta: 'Detectores de humo',
        imagenAlt: 'Detector autónomo de humo instalado en plafón blanco',
        icon: cat('detectores-de-humo').icon,
        accent: cat('detectores-de-humo').accent,
        hijas: [
          { label: 'Detector fotoeléctrico Kidde P9050', href: '/productos/detectores-de-humo/kidde-p9050-fotoelectrico/' },
          { label: 'Detector de humo y CO Kidde', href: '/productos/detectores-de-humo/kidde-kn-cope-d-humo-co/' },
          { label: 'Detector Kidde 20SAR interconectable', href: '/productos/detectores-de-humo/kidde-20sar-vrf-interconectable/' },
          { label: 'Detector fotoeléctrico Kidde P4010', href: '/productos/detectores-de-humo/kidde-p4010acsaq-wf/' },
        ],
        prompt: `White standalone residential smoke alarm mounted on a clean ceiling, product-focused studio scene. ${FOTO}`,
      },
      {
        slug: 'bombas-red-hidraulica',
        titulo: 'Bombas y red hidráulica',
        norma: 'NFPA 20',
        texto: 'Bombas eléctricas, diésel y jockey con su tablero de control, y la red que garantiza presión y caudal constantes al sistema.',
        href: '/productos/sistemas-ci/bombas-contra-incendio/',
        cta: 'Bombas contra incendio',
        imagenAlt: 'Cuarto de bombas contra incendio con bomba principal, bomba jockey y tuberías rojas',
        icon: ICON.bomba,
        accent: '#C8102E',
        hijas: [
          { label: 'Bomba principal eléctrica', href: '/productos/sistemas-ci/bomba-principal-electrica-20hp/' },
          { label: 'Bomba diésel de emergencia', href: '/productos/sistemas-ci/bomba-diesel-emergencia-ci/' },
          { label: 'Bomba jockey de presurización', href: '/productos/sistemas-ci/bomba-jockey-ci-5hp/' },
          { label: 'Red hidráulica contra incendio', href: '/productos/sistemas-ci/red-hidraulica/' },
        ],
        prompt: `Industrial fire pump room: red horizontal split-case fire pump with electric motor, small jockey pump, red flanged pipes, valves and pressure gauges. ${FOTO}`,
      },
      {
        slug: 'hidrantes-gabinetes',
        titulo: 'Hidrantes y gabinetes',
        norma: 'NFPA 14',
        texto: 'Gabinetes tipo I y II con manguera, hidrantes, válvulas y tomas siamesas para la red de hidrantes del inmueble.',
        href: '/productos/sistemas-ci/hidrantes-contra-incendio/',
        cta: 'Hidrantes contra incendio',
        imagenAlt: 'Gabinete contra incendio abierto con manguera enrollada, válvula y extintor',
        icon: ICON.hidrante,
        accent: '#175CD3',
        hijas: [
          { label: 'Gabinete contra incendio tipo I', href: '/productos/sistemas-ci/gabinete-ci-tipo-i-30m/' },
          { label: 'Gabinete contra incendio tipo II', href: '/productos/sistemas-ci/gabinete-ci-tipo-ii-20m/' },
          { label: 'Válvula OS&Y contra incendio', href: '/productos/sistemas-ci/valvula-osy-nfpa-20/' },
        ],
        prompt: `Open red steel fire hose cabinet with rack-mounted canvas fire hose, brass angle valve and nozzle, next to a red outdoor fire hydrant. ${FOTO}`,
      },
      {
        slug: 'supresion-agentes-limpios',
        titulo: 'Supresión con agentes limpios',
        norma: 'NFPA 2001',
        texto: 'Sistemas fijos sin agua —FM-200, Novec 1230 y CO₂— para centros de datos, archivos y cuartos eléctricos.',
        href: '/productos/sistemas-ci/fm200-novec/',
        cta: 'Supresión con FM-200 y Novec',
        imagenAlt: 'Banco de cilindros de agente limpio para supresión de incendios en un centro de datos',
        icon: ICON.supresion,
        accent: cat('sistemas-ci').accent,
        hijas: [
          { label: 'Sistema Kidde FM-200', href: '/productos/sistemas-ci/kidde-fm200-sistema/' },
          { label: 'Sistema Kidde FK-5-1-12', href: '/productos/sistemas-ci/kidde-novec-sistema/' },
          { label: 'Supresión CO₂ Kidde Fenwal', href: '/productos/sistemas-ci/kidde-co2-alta-presion-sistema/' },
          { label: 'Sistema Ansul R-102 para cocinas', href: '/productos/sistemas-ci/ansul-r-102/' },
        ],
        prompt: `Bank of red clean-agent fire suppression cylinders with manifold piping inside a server room, rows of data center racks softly lit in background. ${FOTO}`,
      },
      {
        slug: 'senalizacion-emergencia',
        titulo: 'Señalización y emergencia',
        norma: 'NOM-003-SSPC-2011 · NOM-026-STPS · UL 924',
        texto: 'Señales de protección civil y seguridad industrial, lámparas de emergencia y botiquines para cada centro de trabajo.',
        href: '/productos/senalizacion-emergencia/',
        cta: 'Señalamientos de protección civil',
        imagenAlt: 'Señal fotoluminiscente de ruta de evacuación, lámpara de emergencia y botiquín',
        icon: cat('senalizacion-emergencia').icon,
        accent: cat('senalizacion-emergencia').accent,
        hijas: [
          { label: 'Señalamientos de seguridad', href: '/productos/senalizacion-emergencia/senalamientos-de-seguridad/' },
          { label: 'Lámparas de emergencia LED', href: '/productos/senalizacion-emergencia/lamparas-de-emergencia/' },
          { label: 'Botiquines de primeros auxilios', href: '/productos/senalizacion-emergencia/botiquines-primeros-auxilios/' },
          { label: 'Letrero de salida LED Sure-Lites', href: '/productos/senalizacion-emergencia/sure-lites-eur-letrero-salida-led/' },
        ],
        prompt: `Green photoluminescent emergency exit sign with running figure pictogram and arrow (no words), a wall-mounted LED emergency light and a first aid kit box. ${FOTO}`,
      },
    ],
  },
  {
    slug: 'equipo-bomberos',
    eyebrow: 'Equipo para bomberos y brigadas',
    titulo: 'Protección de quien responde',
    texto: 'Para incendio estructural, el equipo completo de un bombero reúne traje de capas con barrera térmica (Nomex o PBI), casco, capucha, guantes, botas y equipo de respiración autónoma; para rescate y primera respuesta, herramientas hidráulicas y cámaras térmicas.',
    hub: { label: 'Marcas de equipo para bomberos', href: '/marcas/' },
    lineas: [
      {
        slug: 'trajes-bombero',
        titulo: 'Trajes para bomberos',
        norma: 'NFPA 1970 · 1950',
        texto: 'Trajes estructurales de tres capas, de proximidad y forestales, en tallas S a 4XL con programa de mantenimiento NFPA 1850.',
        href: '/productos/trajes-bombero/',
        cta: 'Trajes de bombero',
        imagenAlt: 'Traje estructural para bombero con bandas reflejantes',
        icon: cat('trajes-bombero').icon,
        accent: cat('trajes-bombero').accent,
        hijas: [
          { label: 'Trajes de bombero Globe', href: '/productos/trajes-bombero/globe-manufacturing/' },
          { label: 'Trajes de bombero Lion', href: '/productos/trajes-bombero/lion-apparel/' },
          { label: 'Trajes Morning Pride', href: '/productos/trajes-bombero/honeywell-morning-pride/' },
          { label: 'Trajes Fire-Dex', href: '/productos/trajes-bombero/fire-dex/' },
          { label: 'Trajes Sköld', href: '/productos/trajes-bombero/skold/' },
        ],
        prompt: `Structural firefighter turnout coat and pants in tan fabric with yellow-silver reflective trim displayed on a mannequin without head. ${FOTO}`,
      },
      {
        slug: 'cascos-nfpa',
        titulo: 'Cascos para bomberos',
        norma: 'NFPA 1970 · 1950',
        texto: 'Cascos estructurales estilo europeo y americano, y forestales, con visor, lámpara y soporte para cámara térmica.',
        href: '/productos/cascos-nfpa/',
        cta: 'Cascos de bombero',
        imagenAlt: 'Casco estructural para bombero con visor abatible',
        icon: cat('cascos-nfpa').icon,
        accent: cat('cascos-nfpa').accent,
        hijas: [
          { label: 'Cascos MSA Gallet', href: '/productos/cascos-nfpa/msa-gallet/' },
          { label: 'Cascos Bullard', href: '/productos/cascos-nfpa/bullard/' },
          { label: 'Cascos Cairns', href: '/productos/cascos-nfpa/cairns/' },
          { label: 'Casco Rosenbauer HEROS-titan', href: '/productos/cascos-nfpa/rosenbauer-heros-titan/' },
        ],
        prompt: `Two firefighter helmets side by side: a European jet-style helmet with retractable visor and a traditional American full-brim helmet. ${FOTO}`,
      },
      {
        slug: 'equipos-scba',
        titulo: 'Equipos de respiración SCBA',
        norma: 'NFPA 1970 · NIOSH',
        texto: 'Equipos de respiración autónoma de 30, 45 y 60 minutos, con servicio técnico autorizado, prueba de flujo y prueba hidrostática.',
        href: '/productos/equipos-scba/',
        cta: 'Equipo de respiración autónoma',
        imagenAlt: 'Equipo de respiración autónoma con cilindro de fibra de carbono y máscara',
        icon: cat('equipos-scba').icon,
        accent: cat('equipos-scba').accent,
        hijas: [
          { label: 'Equipo SCBA MSA G1', href: '/productos/equipos-scba/msa-g1/' },
          { label: 'Equipo SCBA Dräger PSS 7000', href: '/productos/equipos-scba/drager-pss/' },
          { label: 'SCBA 3M Scott Air-Pak X3 Pro', href: '/productos/equipos-scba/scott-air-pak/' },
        ],
        prompt: `Firefighter SCBA breathing apparatus: carbon fiber air cylinder on harness backplate with full-face mask and pressure gauge. ${FOTO}`,
      },
      {
        slug: 'epp-bombero',
        titulo: 'Botas, guantes y capuchas',
        norma: 'NFPA 1970',
        texto: 'EPP complementario estructural: botas, guantes y capuchas con referencias Lion y Globe de MSA, más herramientas Council Tool.',
        href: '/productos/epp-bombero/',
        cta: 'Botas y guantes de bombero',
        imagenAlt: 'Botas, guantes y capucha de protección para bombero',
        icon: cat('epp-bombero').icon,
        accent: cat('epp-bombero').accent,
        hijas: [
          { label: 'Botas estructurales Lion HellFire', href: '/productos/epp-bombero/lion-hellfire-felt/' },
          { label: 'Guantes estructurales Lion Primus', href: '/productos/epp-bombero/lion-primus-guantes/' },
          { label: 'Capuchas MSA Globe Guard', href: '/productos/epp-bombero/msa-globe-guard-hood/' },
          { label: 'Barra Halligan Council Tool', href: '/productos/epp-bombero/council-tool-hal1p30/' },
        ],
        prompt: `Structural firefighter boots, gloves and protective hood arranged as a product kit on a dark studio background. ${FOTO}`,
      },
      {
        slug: 'desfibriladores',
        titulo: 'Desfibriladores (DEA)',
        norma: 'IEC 60601-2-4',
        texto: 'DEA ZOLL, Philips, Mindray y Powerheart para programas de respuesta, con consumibles y configuración por modelo.',
        href: '/productos/desfibriladores/',
        cta: 'Desfibriladores DEA',
        imagenAlt: 'Desfibrilador externo automático en gabinete de emergencia',
        icon: cat('desfibriladores').icon,
        accent: cat('desfibriladores').accent,
        hijas: [
          { label: 'Desfibrilador ZOLL AED 3', href: '/productos/desfibriladores/zoll-aed-3/' },
          { label: 'Desfibrilador Philips HeartStart FRx', href: '/productos/desfibriladores/philips-heartstart-frx/' },
          { label: 'Desfibrilador Mindray BeneHeart C1A', href: '/productos/desfibriladores/mindray-beneheart-c1a/' },
          { label: 'Desfibrilador ZOLL Powerheart G5', href: '/productos/desfibriladores/zoll-powerheart-g5/' },
        ],
        prompt: `Automated external defibrillator in a wall emergency cabinet, product-focused, no logos or text. ${FOTO}`,
      },
      {
        slug: 'herramientas-rescate',
        titulo: 'Herramientas de rescate',
        norma: 'EN 13204 · NFPA 1960',
        texto: 'Cizallas, separadores, herramientas combinadas y arietes para rescate vehicular, con demostración y capacitación de operación.',
        href: '/productos/herramientas-rescate/',
        cta: 'Herramientas de rescate',
        imagenAlt: 'Herramientas hidráulicas de rescate vehicular: cizalla, separador y ariete',
        icon: cat('herramientas-rescate').icon,
        accent: cat('herramientas-rescate').accent,
        hijas: [
          { label: 'Herramientas de rescate Holmatro', href: '/productos/herramientas-rescate/holmatro/' },
          { label: 'Herramientas de rescate Hurst', href: '/productos/herramientas-rescate/hurst/' },
          { label: 'Herramientas de rescate Weber', href: '/productos/herramientas-rescate/weber-rescue/' },
          { label: 'Cizalla Holmatro Pentheon', href: '/productos/herramientas-rescate/holmatro-pentheon-cizalla/' },
        ],
        prompt: `Battery-powered hydraulic rescue tools laid out: cutter, spreader and telescopic ram, with a damaged car door in background. ${FOTO}`,
      },
      {
        slug: 'rescate-vertical',
        titulo: 'Rescate vertical y técnico',
        norma: 'NFPA 2500 · EN según fabricante',
        texto: 'Arneses, descensores, poleas y camillas para sistemas de rescate técnico configurados por personal capacitado.',
        href: '/productos/rescate-vertical/',
        cta: 'Equipo de rescate vertical',
        imagenAlt: 'Descensor, polea, arnés y camilla para rescate vertical técnico',
        icon: cat('rescate-vertical').icon,
        accent: cat('rescate-vertical').accent,
        hijas: [
          { label: 'Arnés Petzl ASTRO BOD FAST', href: '/productos/rescate-vertical/petzl-astro-bod-fast/' },
          { label: 'Descensor Petzl MAESTRO S', href: '/productos/rescate-vertical/petzl-maestro-s/' },
          { label: 'Camilla canastilla Ferno 71', href: '/productos/rescate-vertical/ferno-model-71/' },
          { label: 'Cuerda CMC MPD 13 mm', href: '/productos/rescate-vertical/cmc-mpd-13mm/' },
        ],
        prompt: `Technical rope rescue equipment arranged in a studio: full-body harness, descent-control device, compact pulley and rescue basket, no person, no logos. ${FOTO}`,
      },
      {
        slug: 'equipo-forestal',
        titulo: 'Equipo para incendio forestal',
        norma: 'NFPA 1950 para EPP',
        texto: 'McLeod, Pulaski, rastrillos, batefuegos y bombas de mochila para líneas de control y atención forestal.',
        href: '/productos/equipo-forestal/',
        cta: 'Equipo para bomberos forestales',
        imagenAlt: 'Herramientas manuales y bomba de mochila para incendio forestal',
        icon: cat('equipo-forestal').icon,
        accent: cat('equipo-forestal').accent,
        hijas: [
          { label: 'Pulaski Council Tool 38PE136', href: '/productos/equipo-forestal/council-tool-pulaski-38pe136-nfes/' },
          { label: 'McLeod Council Tool MT48', href: '/productos/equipo-forestal/council-tool-mcleod-mt48/' },
          { label: 'McLeod Truper de 48 pulgadas', href: '/productos/equipo-forestal/truper-mcleod-mac-17891/' },
          { label: 'Bomba de mochila Indian 90G', href: '/productos/equipo-forestal/indian-90g-fp200/' },
        ],
        prompt: `Wildland firefighting hand tools arranged in a studio: McLeod, Pulaski, fire rake, fire swatter and backpack fire pump, no people, no logos. ${FOTO}`,
      },
      {
        slug: 'camaras-termicas',
        titulo: 'Cámaras térmicas',
        norma: 'NFPA 1930',
        texto: 'Cámaras de imagen térmica para búsqueda de víctimas y localización de focos en ambientes de visibilidad cero.',
        href: '/productos/camaras-termicas/',
        cta: 'Cámaras térmicas para bomberos',
        imagenAlt: 'Cámara térmica para bomberos mostrando imagen de calor en pantalla',
        icon: cat('camaras-termicas').icon,
        accent: cat('camaras-termicas').accent,
        hijas: [
          { label: 'Cámaras térmicas FLIR', href: '/productos/camaras-termicas/flir/' },
          { label: 'Cámaras térmicas MSA Evolution', href: '/productos/camaras-termicas/msa-evolution/' },
          { label: 'Cámaras térmicas Bullard', href: '/productos/camaras-termicas/bullard-txs/' },
          { label: 'Cámara térmica FLIR K75', href: '/productos/camaras-termicas/flir-k75/' },
        ],
        prompt: `Rugged handheld firefighting thermal imaging camera with large screen showing a colorful heat image, held by a gloved hand. ${FOTO}`,
      },
      {
        slug: 'hazmat',
        titulo: 'HAZMAT y detección de gases',
        norma: 'NFPA 1990',
        texto: 'Trajes de protección química nivel A y B y detectores de gas para respuesta a materiales peligrosos.',
        href: '/productos/hazmat/',
        cta: 'Trajes HAZMAT y detectores de gas',
        imagenAlt: 'Traje encapsulado de protección química nivel A y detector de gas portátil',
        icon: cat('hazmat').icon,
        accent: cat('hazmat').accent,
        hijas: [
          { label: 'Trajes HAZMAT DuPont Tychem', href: '/productos/hazmat/dupont-tychem/' },
          { label: 'Trajes Lakeland ChemMax', href: '/productos/hazmat/lakeland-chemmax/' },
          { label: 'Trajes HAZMAT Kappler', href: '/productos/hazmat/kappler/' },
          { label: 'Detectores de gas MSA', href: '/productos/hazmat/msa-deteccion/' },
          { label: 'Detectores de gas para HAZMAT', href: '/productos/hazmat/detectores-de-gas/' },
        ],
        prompt: `Yellow fully encapsulated Level A chemical protective suit with large face shield displayed upright, portable multi-gas detector beside it. ${FOTO}`,
      },
    ],
  },
];

export const lineasCatalogo = catalogo.flatMap((f) => f.lineas);
