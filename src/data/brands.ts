export interface Brand {
  slug: string; name: string; emoji: string; description: string; country?: string;
  longDesc: string[]; products: { name: string; detail: string }[]; norms: string[];
  categoryLinks: string[]; website?: string;
}

export const brands: Brand[] = [
  {
    slug: 'msa-safety', name: 'MSA Safety', emoji: '️', country: 'Estados Unidos',
    description: 'SCBA, cascos, cámaras térmicas y detección de gases para respuesta a emergencias.',
    longDesc: ['MSA Safety fabrica protección respiratoria, cascos y tecnología para respuesta a emergencias. El catálogo incluye el SCBA MSA G1 en configuraciones estructural, industrial y CBRN, además del Gallet F1 XF, Gallet F2XR y Gallet F2 X-TREM. También reúne las cámaras Evolution 6000 y G1 iTIC, integrada al módulo de control del equipo respiratorio. Globe Manufacturing forma parte de MSA desde 2017, aunque sus trajes se presentan en su propia página de marca.', 'INPROSEG FIRE entrega esta línea como distribuidor autorizado, con stock en CDMX y entrega estimada de 24 a 48 horas. Puede integrar el dossier de licitación y canalizar el servicio técnico autorizado para el equipo seleccionado.'],
    products: [{ name: 'SCBA MSA G1 Estructural', detail: 'Equipo respiratorio autónomo con electrónica integrada para operación estructural.' }, { name: 'SCBA MSA G1 Industrial 60 min', detail: 'Configuración G1 para industria, túneles y espacios confinados.' }, { name: 'Casco MSA Gallet F1 XF', detail: 'Casco europeo para combate estructural, rescate técnico y emergencias viales.' }, { name: 'Cámara Térmica MSA Evolution 6000', detail: 'Cámara de la línea Evolution para búsqueda y rescate.' }, { name: 'Cámara Térmica Integrada MSA G1 iTIC', detail: 'Cámara que usa la pantalla y energía del SCBA G1.' }],
    norms: ['NFPA 1970', 'EN 443:2008', 'EN 16471:2014', 'EN 16473:2014'], categoryLinks: ['equipos-scba', 'cascos-nfpa'],
  },
  {
    slug: 'drager', name: 'Dräger', emoji: '', country: 'Alemania',
    description: 'Equipos respiratorios autónomos y detección de gases para bomberos e industria.',
    longDesc: ['Dräger desarrolla tecnología de seguridad y medicina desde Lübeck. En el catálogo de INPROSEG FIRE aparece el PSS 7000, equipo respiratorio autónomo disponible en versión certificada NFPA para el mercado americano. Su plataforma incorpora placa dorsal ajustable y Sentinel 7000; la configuración concreta debe verificarse en la etiqueta y documentación del equipo. La marca también fabrica instrumentos de detección de gases para uso industrial y de respuesta a emergencias.', 'Como distribuidor autorizado, INPROSEG FIRE mantiene inventario en CDMX para entrega de 24 a 48 horas según disponibilidad. Aporta el dossier requerido en licitación y coordina servicio técnico autorizado para el conjunto respiratorio solicitado.'],
    products: [{ name: 'SCBA Dräger PSS 7000 Estructural', detail: 'Configuración estructural del PSS 7000 con Sentinel 7000.' }, { name: 'SCBA Dräger PSS 7000 Industrial 60 min', detail: 'Configuración para industria pesada, petroquímica y túneles.' }, { name: 'SCBA Dräger PSS 7000 versión NFPA', detail: 'Versión del PSS 7000 certificada NFPA para América.' }, { name: 'SCBA Dräger PSS 7000 RIT / Rescate', detail: 'Configuración de intervención basada en el PSS 7000.' }],
    norms: ['EN 137:2006 Tipo 2'], categoryLinks: ['equipos-scba'],
  },
  {
    slug: '3m-scott', name: '3M Scott', emoji: '', country: 'Estados Unidos',
    description: 'SCBA Air-Pak para protección respiratoria en combate estructural y rescate.',
    longDesc: ['Scott Safety forma parte de 3M y fabrica equipos respiratorios autónomos para respuesta a incendios. La ficha vigente del catálogo es el SCBA 3M Scott Air-Pak X3 Pro, certificado conforme a NFPA 1970 edición 2025 y aprobado por NIOSH. El modelo combina bastidor de aleación, sistema Snap-Change y conectividad Bluetooth/ePAR. No se presentan modelos Air-Pak retirados ni se atribuyen prestaciones de configuraciones que el fabricante no publique para esta versión.', 'INPROSEG FIRE lo suministra como distribuidor autorizado de la marca, desde su stock en CDMX con ventana de entrega de 24 a 48 horas. La compra puede acompañarse de dossier de licitación y atención de servicio técnico autorizado.'],
    products: [{ name: 'SCBA 3M Scott Air-Pak X3 Pro — NFPA 1970', detail: 'SCBA Air-Pak X3 Pro certificado conforme a NFPA 1970 edición 2025.' }, { name: 'Air-Pak X3 Pro', detail: 'Plataforma respiratoria con bastidor de aleación y sistema Snap-Change.' }, { name: 'Accesorios Air-Pak X3 Pro', detail: 'Configuración y componentes compatibles según la documentación de 3M Scott.' }],
    norms: ['NFPA 1970 (2025)', 'NIOSH'], categoryLinks: ['equipos-scba'],
  },
  {
    slug: 'globe-manufacturing', name: 'Globe Manufacturing', emoji: '', country: 'Estados Unidos',
    description: 'Trajes estructurales y de proximidad Globe, parte de MSA Safety.',
    longDesc: ['Globe Manufacturing, parte de MSA Safety desde 2017, fabrica ropa de protección para bomberos. En el catálogo están Globe G-XTREME 3.0, ATHLETIX, CLASSIX, G-XCEL y Proximity. G-XTREME 3.0 puede configurarse para uso estructural y de proximidad; ATHLETIX publica shell PBI Stretch XT con Kevlar, mientras CLASSIX y G-XCEL se presentan como prendas estructurales conformes a NFPA 1970. Globe Proximity usa un shell de tejido PBI con película aluminizada laminada.', 'Para esta marca, INPROSEG FIRE opera como distribuidor autorizado con existencias en CDMX y entrega de 24 a 48 horas. Prepara documentación para concurso, además de gestionar el servicio técnico autorizado que corresponda al pedido.'],
    products: [{ name: 'Globe G-XTREME 3.0', detail: 'Traje configurable para aplicación estructural o de proximidad.' }, { name: 'Globe ATHLETIX', detail: 'Traje estructural con barrera GORE-TEX CROSSTECH Innovate.' }, { name: 'Globe CLASSIX', detail: 'Traje estructural certificado bajo NFPA 1970.' }, { name: 'Globe G-XCEL', detail: 'Traje estructural certificado bajo NFPA 1970.' }, { name: 'Globe Proximity', detail: 'Traje de proximidad con shell PBI y película aluminizada.' }],
    norms: ['NFPA 1970'], categoryLinks: ['trajes-bombero'],
  },
  {
    slug: 'holmatro', name: 'Holmatro', emoji: '️', country: 'Países Bajos',
    description: 'Herramientas de rescate a batería Pentheon: cizalla, separador, combinada y ariete.',
    longDesc: ['Holmatro fabrica herramientas hidráulicas para rescate vehicular y operaciones de emergencia. La familia Pentheon del catálogo comprende la cizalla PCU50, el separador PSP50, la herramienta combinada PCT50 y el ariete PRA50, todos a batería. Son cuatro funciones distintas para corte, apertura, separación y creación de espacio; la selección debe responder al escenario de rescate y al procedimiento del cuerpo. Los modelos citados sustituyen las denominaciones heredadas que no correspondían a la línea Pentheon vigente.', 'INPROSEG FIRE distribuye Holmatro de forma autorizada, con stock en CDMX y entregas de 24 a 48 horas cuando aplique. Incluye el expediente para licitación y brinda acceso al servicio técnico autorizado después de la compra.'],
    products: [{ name: 'Cizalla Holmatro Pentheon PCU50', detail: 'Cizalla de excarcelación a batería de la línea Pentheon.' }, { name: 'Separador Holmatro Pentheon PSP50', detail: 'Separador a batería para apertura y empuje.' }, { name: 'Herramienta Combinada Holmatro Pentheon PCT50', detail: 'Herramienta combinada a batería para corte y separación.' }, { name: 'Ariete Holmatro Pentheon PRA50', detail: 'Ariete a batería para empuje y creación de espacio.' }],
    norms: ['EN 13204:2025', 'NFPA 1960'], categoryLinks: ['herramientas-rescate'],
  },
  {
    slug: 'bullard', name: 'Bullard', emoji: '️', country: 'Estados Unidos',
    description: 'Cascos estructurales, forestales y cámaras de imagen térmica para bomberos.',
    longDesc: ['Bullard fabrica protección de cabeza y cámaras térmicas para cuerpos de bomberos. El catálogo incorpora los cascos USTM, UST LowRider, USRX, Wildfire FH911C, FX, PX, LT y AX, además de las cámaras TXS, QXT Pro, NXT Pro y DXT. UST LowRider, USRX, FX, PX y AX publican conformidad con NFPA 1970 edición 2025; Wildfire FH911C corresponde a NFPA 1950. En imagen térmica, NXT Pro publica certificación NFPA 1930:2025.', 'La distribución autorizada de Bullard se respalda con stock en CDMX y un plazo de entrega de 24 a 48 horas según inventario. INPROSEG FIRE prepara dossier para licitaciones y pone a disposición servicio técnico autorizado.'],
    products: [{ name: 'Casco Bullard USTM', detail: 'Casco tradicional Thermoglas con acabado mate.' }, { name: 'Casco Bullard UST LowRider', detail: 'Casco tradicional de compuesto de fibra de vidrio y resina termofija.' }, { name: 'Casco Bullard USRX', detail: 'Casco estructural con sistema M-Pact y piezas Nomex lavables.' }, { name: 'Cámara Térmica Bullard NXT Pro', detail: 'Cámara térmica para búsqueda y rescate certificada NFPA 1930.' }, { name: 'Cámara Térmica Bullard QXT Pro', detail: 'Cámara térmica personal para búsqueda y rescate.' }],
    norms: ['NFPA 1970 (2025)', 'NFPA 1950 (2025)', 'NFPA 1930:2025'], categoryLinks: ['cascos-nfpa'],
  },
  {
    slug: 'honeywell', name: 'Honeywell', emoji: '', country: 'Estados Unidos',
    description: 'Paneles, detectores y dispositivos de notificación Notifier para sistemas de alarma.',
    longDesc: ['Honeywell reúne soluciones de detección y alarma contra incendio bajo la marca Notifier. En el catálogo se encuentran los paneles NFS2-3030 y NFS2-640, los detectores direccionables FSP-951 y FST-951R, la sirena-estrobo System Sensor PC2RL y el módulo FMM-1. Estas fichas se enfocan en equipos para sistemas compatibles y en la integración de dispositivos de campo; la selección final debe respetar la arquitectura, compatibilidad y diseño aprobado del sistema.', 'INPROSEG FIRE es distribuidor autorizado de las marcas del catálogo y puede despachar desde CDMX en 24 a 48 horas. Para proyectos de alarma entrega expediente de licitación y ofrece la ruta de servicio técnico autorizado.'],
    products: [{ name: 'Panel FACP Notifier NFS2-3030 Direccionable Alta Capacidad', detail: 'Panel de alarma direccionable de la línea Notifier.' }, { name: 'Panel FACP Notifier NFS2-640 Direccionable Mediana Capacidad', detail: 'Panel de alarma direccionable para edificios de mediana complejidad.' }, { name: 'Detector Fotoeléctrico Direccionable Notifier FSP-951', detail: 'Detector fotoeléctrico para paneles compatibles FlashScan.' }, { name: 'Detector Térmico Direccionable Notifier FST-951R', detail: 'Detector térmico direccionable para sistemas compatibles.' }, { name: 'Módulo Monitor Notifier FMM-1 — Supervisión de Válvulas y Flujo NFPA 72', detail: 'Módulo para supervisión de puntos de entrada en lazo SLC.' }],
    norms: ['NFPA 72'], categoryLinks: ['herramientas-rescate'],
  },
  {
    slug: 'kidde-utc', name: 'Kidde Fenwal', emoji: '', country: 'Estados Unidos',
    description: 'Sistemas Kidde Fenwal de agente limpio, CO₂ y control de liberación para riesgos especiales.',
    longDesc: ['Kidde Fenwal integra las marcas Kidde Fire Systems, Fenwal Controls y Kidde Fire Protection para detección, supresión y control. En el catálogo están la plataforma ADS con HFC-227ea, el sistema Fluoro-K FK-5-1-12, el panel ARIES-MLX, el conjunto ADS de cilindro y válvula y el sistema industrial de CO₂ a alta presión. Cada solución se define mediante cálculo y diseño del recinto; no se presenta como un equipo de cobertura universal.', 'INPROSEG FIRE suministra la línea como distribuidor autorizado, con existencias en CDMX y entrega usual de 24 a 48 horas. Integra el dossier de concurso y coordina servicio técnico autorizado para sistemas seleccionados por proyecto.'],
    products: [{ name: 'Sistema Fijo FM-200 Kidde Fenwal (HFC-227ea) NFPA 2001', detail: 'Sistema de agente limpio ADS impulsado por nitrógeno.' }, { name: 'Sistema Kidde Fluoro-K FK-5-1-12', detail: 'Sistema de agente limpio para protección de activos críticos.' }, { name: 'Panel de Liberación Kidde ARIES-MLX', detail: 'Panel para detección, alarma y liberación coordinada.' }, { name: 'Conjunto Kidde ADS de Cilindro y Válvula', detail: 'Conjunto para una plataforma ADS dimensionada por proyecto.' }, { name: 'Sistema de Supresión CO₂ Alta Presión Kidde Fenwal NFPA 12', detail: 'Sistema industrial para inundación total o aplicación local.' }],
    norms: ['NFPA 2001', 'NFPA 72', 'NFPA 12'], categoryLinks: [],
  },
  {
    slug: 'ansul', name: 'Ansul', emoji: '', country: 'Estados Unidos',
    description: 'Sistemas de supresión para cocinas, maquinaria y riesgos especiales.',
    longDesc: ['Ansul, marca del grupo Johnson Controls, fabrica sistemas de supresión para riesgos específicos. Sus líneas oficiales incluyen R-102 para cocinas comerciales, CHECKFIRE para equipos móviles y maquinaria, e INERGEN como agente limpio gaseoso. La configuración de boquillas, agente, detección y controles depende del riesgo y de la ingeniería del proyecto. El catálogo publica fichas de R-102 y K-Guard con sus fuentes oficiales; la partida final debe conservar la configuración aplicable.', 'Para pedidos Ansul, INPROSEG FIRE actúa como distribuidor autorizado y confirma disponibilidad desde CDMX para entrega en 24 a 48 horas. La propuesta incorpora dossier de licitación y la atención de servicio técnico autorizado correspondiente al sistema.'],
    products: [{ name: 'Ansul R-102', detail: 'Sistema de supresión para cocinas comerciales.' }, { name: 'Ansul CHECKFIRE', detail: 'Sistema de detección y supresión para maquinaria y equipos móviles.' }, { name: 'Ansul INERGEN', detail: 'Sistema de supresión con agente limpio gaseoso para riesgos especiales.' }],
    norms: ['NFPA 17A', 'NFPA 96', 'NFPA 2001'], categoryLinks: [],
  },
  {
    slug: 'naffco', name: 'NAFFCO', emoji: '️', country: 'Emiratos Árabes Unidos',
    description: 'Extintores, gabinetes, rociadores y vehículos para protección contra incendio.',
    longDesc: ['NAFFCO fabrica equipos para protección contra incendio y respuesta a emergencias desde Emiratos Árabes Unidos. Su portafolio oficial abarca extintores portátiles, gabinetes y mangueras, rociadores, bombas y vehículos contra incendio. El catálogo incorpora la ficha del extintor NP 2.5L con datos publicados por NAFFCO; cada propuesta debe definir capacidad, listado y compatibilidad con el proyecto. La marca también ofrece soluciones para instalaciones de agua, espuma y otros sistemas fijos.', 'INPROSEG FIRE comercializa NAFFCO como distribuidor autorizado, con inventario en CDMX y entrega de 24 a 48 horas cuando el producto esté disponible. Incluye documentación de licitación y respaldo de servicio técnico autorizado en la solicitud.'],
    products: [{ name: 'Extintores portátiles NAFFCO', detail: 'Línea de extintores para aplicaciones contra incendio.' }, { name: 'Gabinetes y mangueras NAFFCO', detail: 'Componentes para redes interiores diseñadas por proyecto.' }, { name: 'Rociadores NAFFCO', detail: 'Rociadores para sistemas de agua contra incendio.' }, { name: 'Vehículos contra incendio NAFFCO', detail: 'Unidades de respuesta configuradas según la operación.' }],
    norms: ['NFPA 10', 'NFPA 13'], categoryLinks: [],
  },
  {
    slug: 'tyco-johnson-controls', name: 'Tyco / Johnson Controls', emoji: '', country: 'Irlanda',
    description: 'Rociadores Tyco para sistemas hidráulicos contra incendio diseñados conforme a NFPA 13.',
    longDesc: ['Tyco Fire Protection Products forma parte de Johnson Controls y fabrica componentes para sistemas de rociadores. El catálogo incluye los rociadores Tyco TY-B colgante, TY-B vertical, TY315, TY3131 y RFII TY3531 oculto. Son modelos de cobertura estándar definidos por su orientación, respuesta y factor K; su uso se selecciona con el cálculo hidráulico, riesgo de ocupación y documentación del fabricante. El catálogo no atribuye a estas fichas equipos de detección o supresión ajenos a las líneas verificadas.', 'Como distribuidor autorizado, INPROSEG FIRE ofrece suministro desde CDMX con entrega de 24 a 48 horas de acuerdo con existencias. Complementa la cotización con dossier para licitación y soporte de servicio técnico autorizado.'],
    products: [{ name: 'Rociador Tyco TY-B Colgante (Pendant) Respuesta Estándar', detail: 'Rociador de la serie TY-B para sistemas diseñados conforme a NFPA 13.' }, { name: 'Rociador Tyco TY-B Vertical (Upright) Respuesta Estándar', detail: 'Rociador vertical de la serie TY-B.' }, { name: 'Rociador Tyco TY315 Vertical K-5.6 de Respuesta Estándar', detail: 'Rociador vertical K-5.6 de cobertura y respuesta estándar.' }, { name: 'Rociador Tyco TY3131 Vertical K-5.6 de Respuesta Rápida', detail: 'Rociador vertical de respuesta rápida de la serie TY-FRB.' }, { name: 'Rociador Tyco RFII TY3531 Oculto Colgante K-5.6', detail: 'Rociador oculto colgante de respuesta rápida.' }],
    norms: ['NFPA 13'], categoryLinks: [],
  },
  {
    slug: 'rosenbauer', name: 'Rosenbauer', emoji: '', country: 'Austria',
    description: 'Vehículos, cascos, monitores y tecnología de espuma para cuerpos de bomberos.',
    longDesc: ['Rosenbauer fabrica vehículos y equipos para bomberos desde Austria. Sus líneas oficiales comprenden los vehículos aeroportuarios PANTHER, los camiones municipales AT, cascos HEROS-titan, monitores y tecnología de espuma. El catálogo publica las fichas HEROS Titan y HEROS H10 con sus normas EN; vehículos y sistemas de espuma se cotizan contra una especificación de operación. La configuración exige definir escenario, norma aplicable y equipo complementario.', 'INPROSEG FIRE representa la marca como distribuidor autorizado, con atención desde CDMX y plazo de 24 a 48 horas para artículos disponibles. Para adquisiciones institucionales facilita dossier de licitación y acceso a servicio técnico autorizado.'],
    products: [{ name: 'Rosenbauer PANTHER', detail: 'Vehículo aeroportuario para respuesta contra incendio.' }, { name: 'Rosenbauer AT', detail: 'Vehículo contra incendio configurable para operación municipal.' }, { name: 'Rosenbauer HEROS-titan', detail: 'Línea de cascos para bomberos.' }, { name: 'Tecnología de espuma Rosenbauer', detail: 'Sistemas y componentes para aplicación de espuma.' }],
    norms: [], categoryLinks: [],
  },
  {
    slug: 'lion-apparel', name: 'Lion Apparel', emoji: '', country: 'Estados Unidos',
    description: 'Trajes estructurales, de proximidad y forestales LION para bomberos.',
    longDesc: ['LION fabrica ropa de protección para bomberos, desde conjuntos estructurales hasta prendas forestales. Las fichas de esta marca son LION V-Force, RedZone, V-Force EVO, Super-Deluxe y ENgage Wildland. V-Force publica mangas raglán e IsoDri; RedZone integra interfaces de protección y V-Force EVO usa construcción de dos vías en sus zonas articuladas. ENgage Wildland se ofrece con sarga de aramida resistente a la flama y la marca publica EN 15614 para esa línea.', 'INPROSEG FIRE distribuye LION de forma autorizada y conserva stock en CDMX para entregas de 24 a 48 horas según disponibilidad. El suministro puede incorporar dossier de licitación y el servicio técnico autorizado solicitado por la institución.'],
    products: [{ name: 'Lion V-Force', detail: 'Traje estructural con sistema de humedad IsoDri y mangas raglán.' }, { name: 'Lion RedZone', detail: 'Traje estructural con interfaces Core, Arm, Closure y Leg Guard.' }, { name: 'Lion V-Force EVO', detail: 'Evolución de V-Force con zonas articuladas.' }, { name: 'Lion Super-Deluxe', detail: 'Traje estructural con diseño Freedom e IsoDri.' }, { name: 'Lion ENgage Wildland', detail: 'Traje forestal de sarga de aramida resistente a la flama.' }],
    norms: ['EN 15614'], categoryLinks: ['trajes-bombero'],
  },
  {
    slug: 'cairns-helmets', name: 'Cairns Helmets', emoji: '️', country: 'Estados Unidos',
    description: 'Cascos Cairns de cuero, compuestos y termoplásticos; marca de MSA Safety.',
    longDesc: ['Cairns es una marca de MSA Safety dedicada a cascos para bomberos. El catálogo contiene los modelos N6A Houston, 1836, XF1, 880, Invader 664, 360S y 660C Metro. N6A Houston es un casco de cuero conforme a NFPA 1971 edición 2018; 1836 usa fibra de vidrio compuesta y los demás modelos cubren configuraciones tradicionales, modernas y tipo jet. Las certificaciones se revisan por modelo, país y etiqueta, especialmente cuando una edición normativa cambia.', 'INPROSEG FIRE entrega cascos Cairns como distribuidor autorizado, con existencias en CDMX y despacho estimado de 24 a 48 horas. Para compras públicas proporciona dossier de licitación y seguimiento de servicio técnico autorizado.'],
    products: [{ name: 'Casco Cairns N6A Houston', detail: 'Casco de cuero para combate estructural.' }, { name: 'Casco Cairns 1836', detail: 'Casco de fibra de vidrio compuesta con visor Defender articulado.' }, { name: 'Casco Cairns XF1', detail: 'Casco tipo jet para combate estructural y rescate técnico.' }, { name: 'Casco Cairns 880', detail: 'Casco tradicional termoplástico de perfil bajo.' }, { name: 'Casco Cairns 660C Metro', detail: 'Casco moderno de fibra de vidrio compuesta.' }],
    norms: ['NFPA 1970 (2025)', 'NFPA 1971 (2018)'], categoryLinks: ['cascos-nfpa'],
  },
  {
    slug: 'flir-teledyne', name: 'FLIR / Teledyne', emoji: '', country: 'Estados Unidos',
    description: 'Cámaras térmicas FLIR para búsqueda, rescate e inspección industrial.',
    longDesc: ['FLIR forma parte de Teledyne y fabrica cámaras de imagen térmica. El catálogo incorpora FLIR K75 y K85-N para búsqueda y rescate, además de T560 para inspección industrial. K75 publica sensor de 320 × 240 y transmisión Wi-Fi a FLIR Responder; K85-N cuenta con 640 × 480 y certificación NFPA 1930:2025. T560 se identifica expresamente como cámara industrial, por lo que no se presenta como equipo de combate estructural.', 'INPROSEG FIRE distribuye FLIR de forma autorizada desde CDMX, con entrega prevista en 24 a 48 horas cuando exista inventario. También incluye el dossier de licitación y la atención por servicio técnico autorizado para la cámara seleccionada.'],
    products: [{ name: 'Cámara Térmica FLIR K75', detail: 'Cámara para búsqueda y rescate estructural.' }, { name: 'Cámara Térmica FLIR K85-N', detail: 'Cámara térmica certificada conforme a NFPA 1930:2025.' }, { name: 'Cámara Térmica FLIR T560 Inspección', detail: 'Cámara industrial para inspección y mantenimiento predictivo.' }],
    norms: ['NFPA 1930:2025'], categoryLinks: [],
  },
  {
    slug: 'dji-enterprise', name: 'DJI Enterprise', emoji: '', country: 'China',
    description: 'Drones con cámara térmica y estaciones remotas para búsqueda, rescate e inspección.',
    longDesc: ['DJI Enterprise fabrica plataformas aéreas para seguridad, inspección y respuesta a emergencias. Las fichas del catálogo incluyen Matrice 30T, Mavic 3 Thermal y Dock 2. Matrice 30T integra cámara térmica radiométrica, cámaras visuales, telémetro láser y protección IP55; Mavic 3 Thermal combina cámara térmica radiométrica con cámaras gran angular y teleobjetivo. Dock 2 opera exclusivamente con Matrice 3D y 3TD, no con Matrice 30T. Cada operación debe cumplir la regulación aeronáutica mexicana aplicable.', 'INPROSEG FIRE es distribuidor autorizado de DJI Enterprise y cuenta con stock en CDMX para entrega de 24 a 48 horas de unidades disponibles. Aporta el expediente para licitación y acompaña el servicio técnico autorizado del equipo adquirido.'],
    products: [{ name: 'DJI Matrice 30T', detail: 'Dron Enterprise con cámara térmica radiométrica, cámaras visuales y telémetro láser.' }, { name: 'DJI Mavic 3 Thermal', detail: 'Dron compacto con cámara térmica radiométrica.' }, { name: 'DJI Dock 2', detail: 'Estación remota para operaciones con Matrice 3D y 3TD.' }],
    norms: ['NOM-107-SCT3-2019'], categoryLinks: [],
  },
];
