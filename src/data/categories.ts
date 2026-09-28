export interface Category {
  slug: string;
  label: string;
  norm: string;
  /** Meta description (≤160 caracteres) */
  description: string;
  /** Descripción corta para cards (1 línea) */
  shortDesc: string;
  /** Color de acento de la card */
  accent: string;
  /** Ícono SVG inline de la card */
  icon: string;
  /** Párrafos de introducción SEO de la página de categoría */
  intro: string[];
  /** Modelos / líneas destacadas */
  items: { name: string; detail: string }[];
  /** Guía editorial de la categoría (secciones H2 con párrafos y lista opcional). */
  guia?: { titulo: string; parrafos: string[]; lista?: string[] }[];
  /** Preguntas frecuentes de la categoría (FAQPage). */
  faqs?: { q: string; a: string }[];
  /** Fuentes normativas o técnicas citadas por la guía. */
  fuentes?: { titulo: string; url: string }[];
  /** Categoría del array featuredProducts (data/products.ts) para listar productos */
  productCategory?: string;
  /** Módulo destacado (2 columnas) en el hub /productos */
  spotlight?: {
    title: string;
    highlight: string;
    paragraphs: string[];
    subsections: { name: string; detail: string }[];
    image: string;
    imageAlt: string;
  };
}

/**
 * Trajes para Bomberos tiene página estática propia
 * (src/pages/productos/trajes-bombero/) — se define aquí solo para
 * el hub /productos y el internal linking.
 */
export const trajesBombero: Category = {
  slug: 'trajes-bombero',
    shortDesc: 'Trajes estructurales y forestales certificados para protección térmica extrema.',
    accent: '#F75000',
    icon: ``,
  label: 'Trajes para Bomberos',
  norm: 'NFPA 1970 · 1950',
  description: 'Trajes estructurales, de proximidad y forestales certificados NFPA 1970 y 1950 en México: Globe, Lion, Morning Pride, Fire-Dex y Sköld, con entrega en 32 estados.',
  intro: [
    'Trajes de combate estructural de 3 capas, trajes aluminizados de proximidad para ARFF y trajes forestales ligeros — todos certificados por laboratorio acreditado bajo NFPA 1970 o NFPA 1950, con número de serie verificable con fábrica.',
    'Distribuimos Globe (MSA), Lion, Morning Pride, Fire-Dex y la mexicana Sköld, con stock permanente en CDMX. Cada conjunto incluye ficha técnica para licitación, asesoría de tallaje y acceso al programa de inspección y mantenimiento NFPA 1850.',
  ],
  items: [
    { name: 'Globe G-XTREME 3.0', detail: 'Estructural con shell PBI MAX y barrera GORE-TEX CROSSTECH Innovate' },
    { name: 'Lion V-Force', detail: 'Estructural con sistema de humedad IsoDri y mangas raglán' },
    { name: 'Trajes de proximidad', detail: 'Aluminizados para ARFF y exposición radiante' },
    { name: 'Trajes forestales NFPA 1950', detail: 'Ligeros y transpirables para incendio vegetal' },
  ],
  productCategory: 'Trajes Bombero',
  spotlight: {
    title: 'Trajes para Bomberos certificados',
    highlight: 'NFPA 1970 y NFPA 1950',
    paragraphs: [
      'El traje estructural es la última barrera entre el bombero y el fuego. Distribuimos conjuntos completos —chaquetón y pantalón— certificados por laboratorio acreditado bajo NFPA 1970 (la norma que desde 2024 absorbió a la NFPA 1971), con número de serie verificable con fábrica y ficha técnica lista para licitación o auditoría STPS.',
      'Manejamos Globe, Lion, Morning Pride, Fire-Dex y Sköld, con stock permanente de las configuraciones más demandadas y entrega en 24–48 horas en CDMX. Cada compra incluye asesoría de tallaje y el programa de inspección y mantenimiento conforme a NFPA 1850.',
    ],
    subsections: [
      { name: 'Trajes estructurales', detail: 'Combate interior de edificios. Sistema de tres capas —shell exterior, barrera de humedad y forro térmico— certificado como conjunto; el TPP y el THL dependen del compuesto elegido.' },
      { name: 'Trajes de proximidad', detail: 'Aluminizados para exposición a calor radiante: ARFF en aeropuertos, refinerías y fundiciones. Globe Proximity, Fire-Dex Proximity, Morning Pride TAILS y VIPER Proximity y Sköld Aproximación.' },
      { name: 'Trajes forestales NFPA 1950', detail: 'Ligeros y transpirables para incendio vegetal: camisola y pantalón en Nomex IIIA, diseñados para jornadas largas con golpe de calor mínimo.' },
      { name: 'Tallaje, stock y mantenimiento', detail: 'Asesoría de tallaje con prueba de ajuste, stock permanente en CDMX y programa de inspección avanzada, lavado técnico y reparación certificada NFPA 1850.' },
    ],
    image: '/images/categorias/trajes-bombero.avif',
    imageAlt: 'Ilustración técnica de traje estructural para bombero certificado NFPA 1970 con casco y bandas reflejantes',
  },
};

/**
 * Categorías del catálogo — fuente única para:
 * - Páginas /productos/[categoria]
 * - Hub /productos y grids del home
 */
export const categories: Category[] = [
  {
    slug: 'detectores-de-humo',
    label: 'Detectores de humo',
    norm: 'NFPA 72 · UL 217',
    description: 'Detector de humo autónomo para vivienda: opciones Kidde a batería, cableadas e interconectables, con referencias UL 217 y NFPA 72.',
    shortDesc: 'Alarmas autónomas Kidde para detección local de humo y monóxido de carbono.',
    accent: '#F5A623',
    icon: '',
    intro: [
      'Un detector de humo autónomo avisa en el lugar donde está instalado. Para vivienda, la elección depende del sensor, la alimentación y la posibilidad de enlazar unidades compatibles. Su objetivo es advertir para que las personas evacúen y activen la respuesta de emergencia; no sustituye un plan familiar ni la atención de un incendio.',
      'Esta categoría reúne alarmas autónomas. No equivale a un sistema direccionable con panel, módulos, circuitos de iniciación y notificación para un inmueble: esa arquitectura debe evaluarse como Sistema Contra Incendio. Antes de comprar, revise el manual del modelo para montaje, prueba, limpieza, condiciones ambientales y reemplazo.',
    ],
    items: [
      { name: 'Kidde P9050', detail: 'Detector fotoeléctrico autónomo con batería de 9 V.' },
      { name: 'Kidde 30CUAR-VRF', detail: 'Alarma cableada de humo/CO con respaldo AA e interconexión inalámbrica.' },
      { name: 'Kidde 20SAR-VRF', detail: 'Detector de humo cableado con respaldo AA e interconexión inalámbrica.' },
      { name: 'Kidde P4010ACSAQ-WF', detail: 'Detector fotoeléctrico cableado con respaldo sellado y monitor de calidad de aire.' },
    ],
    productCategory: 'Detectores de Humo',
    guia: [
      {
        titulo: '¿Qué es un detector de humo y qué riesgo cubre?',
        parrafos: [
          'Un detector de humo autónomo, también llamado alarma de humo, es un equipo que percibe condiciones de humo en su cámara y genera una señal audible local. Su función práctica es dar aviso temprano a quienes están dentro para que abandonen el área y pidan ayuda. No extingue el fuego, no abre rutas de salida y no reemplaza la supervisión de una instalación eléctrica o de aparatos de combustión.',
          'La palabra “detector” se usa para dos familias distintas. Una alarma de una o varias estaciones opera como unidad de aviso local y puede alimentarse con batería, corriente alterna o ambas. Un detector para sistema de alarma contra incendio se integra a un panel, tiene criterios de diseño, programación, supervisión y notificación propios. UL distingue ambas aplicaciones: UL 217 corresponde a alarmas de humo y UL 268 a detectores usados en sistemas de alarma contra incendio.',
          'En una vivienda o un espacio pequeño, una alarma autónoma puede ser parte de la estrategia de aviso. En un edificio, negocio o proyecto que requiere panel, dispositivos direccionables, planos y señales de notificación, no conviene extrapolar la ficha de una alarma residencial. El alcance debe definirse con el responsable del inmueble y el proyecto de Sistemas Contra Incendio.',
        ],
        lista: [
          'Alarma autónoma: avisa localmente y se instala conforme al manual del fabricante.',
          'Sistema de detección: requiere diseño, panel y componentes compatibles como conjunto.',
          'Ambos: requieren mantenimiento, una ruta de evacuación y respuesta ante la alarma.',
        ],
      },
      {
        titulo: 'Tipos de detector de humo: fotoeléctrico, humo y monóxido, cableado e inalámbrico',
        parrafos: [
          'El tipo de sensor publicado es el primer filtro. El Kidde P9050 y el P4010ACSAQ-WF se describen como fotoeléctricos; esa especificación debe leerse junto con su manual, listado y ambiente previsto. Una etiqueta o una ficha de un equipo no autoriza a inferir que todos los productos de una marca usan el mismo principio ni que responden igual en todas las condiciones de incendio.',
          'Una alarma combinada de humo y monóxido de carbono cubre dos peligros diferentes con componentes definidos para ello. El Kidde KN-COPE-D combina detección fotoeléctrica de humo con sensor de CO. UL explica que la alarma de humo se evalúa bajo UL 217 y la alarma de CO bajo UL 2034; un equipo combinado debe cumplir los requisitos aplicables de ambas funciones. El monóxido no es humo ni gas combustible, por lo que una alarma de CO tampoco sustituye un detector para gas natural.',
          'La alimentación cambia la logística de instalación y continuidad. El P9050 usa batería de 9 V. Los Kidde 20SAR-VRF y 30CUAR-VRF son referencias cableadas con respaldo de baterías e interconexión inalámbrica compatible. El P4010ACSAQ-WF es una referencia cableada con respaldo sellado y funciones Wi-Fi publicadas. Compare exactamente la variante, el manual y los accesorios: “interconectable” no significa que cualquier alarma pueda enlazarse con cualquier otra.',
        ],
      },
      {
        titulo: '¿Dónde instalar un detector de humo?',
        parrafos: [
          'NFPA indica instalar alarmas conforme a NFPA 72 y a las instrucciones del fabricante. Como el humo y el calor ascienden, su material público señala montaje en techo o en la parte alta del muro. También muestra condiciones de ubicación que cambian con la geometría del plafón, la escalera y el tipo de espacio. Por ello, el plano real y el manual prevalecen sobre una regla memorizada.',
          'La ubicación debe permitir que el humo alcance la cámara sin exponer el equipo a condiciones fuera de su diseño. NFPA advierte sobre vapores de cocción, regaderas, polvo, ventiladores, calefacción y cambios de temperatura. Evite convertir una molestia recurrente en motivo para retirar la batería o deshabilitar la alarma; si hay activaciones no deseadas, revise la localización, el ambiente y el modelo con base en las instrucciones publicadas.',
          'En áreas abiertas, una cocina integrada, techos inclinados o recintos con circulación de aire poco evidente merecen revisión específica. NFPA 72 contiene distancias y excepciones ligadas a cocción y a equipos listados para resistir fuentes comunes de alarmas no deseadas. No copie una distancia aislada si no corresponde al plano, a la edición aplicable o a la clasificación del producto.',
        ],
        lista: [
          'Ubique el equipo donde el manual y el plan de protección lo indiquen.',
          'Compruebe que el montaje no quede obstruido por elementos arquitectónicos o aire forzado.',
          'Defina rutas de salida y un punto de reunión antes de depender de la alarma.',
        ],
      },
      {
        titulo: 'Cómo elegir una alarma autónoma para vivienda o área pequeña',
        parrafos: [
          'Empiece por el uso y el inmueble, no por una función aislada. Identifique si se requiere aviso de humo, una unidad combinada de humo y CO, alimentación con batería o circuito existente, enlace entre alarmas y necesidades de accesibilidad. Después confirme la documentación de cada modelo, el listado aplicable y las instrucciones de compatibilidad. Si el proyecto exige señalización o supervisión centralizada, cambie el alcance hacia un sistema contra incendio.',
          'Para una alarma básica con sensor fotoeléctrico y batería, el P9050 es la referencia de este catálogo. Para humo y CO con avisos de voz, el KN-COPE-D es la opción combinada publicada. Cuando el proyecto contempla alimentación cableada e interconexión inalámbrica compatible, revise los 20SAR-VRF y 30CUAR-VRF. El P4010ACSAQ-WF combina alimentación AC, respaldo sellado y funciones de conectividad descritas por el fabricante.',
          'Pida el número de modelo completo, manual, fecha de fabricación cuando sea relevante, tipo de alimentación, condiciones de operación y consumibles. No elija por color, carcasa o por la promesa de que un detector “sirve para todo”. Una lista UL, cuando el producto la declara, es evidencia sobre un alcance específico de evaluación; no sustituye la instalación correcta.',
        ],
      },
      {
        titulo: 'Normas de referencia en México: NFPA 72, UL 217 y UL 268',
        parrafos: [
          'NFPA 72 es la referencia internacional para códigos de alarma y señalización de incendio. Su material público sobre alarmas de humo insiste en que la instalación y el mantenimiento deben respetar las instrucciones del fabricante. En México, los requisitos concretos también pueden provenir del reglamento de construcción, protección civil, aseguradora, contrato o autoridad competente del sitio. Confirme cuál aplica antes de especificar un equipo.',
          'UL 217 es el estándar citado para alarmas de humo de una o varias estaciones. UL 268 corresponde a detectores destinados a sistemas de alarma de incendio. Esta diferencia importa al comparar una alarma autónoma con un detector direccionable: tener sensores parecidos no vuelve intercambiables las aplicaciones, el cableado, la supervisión ni el desempeño del conjunto.',
          'La edición y el alcance de una certificación se validan en el producto, su empaque o la documentación del fabricante. Para una unidad combinada, revise además la función de CO. Para un sistema de detección en edificio, solicite el diseño del sistema y sus componentes compatibles en vez de sumar alarmas autónomas sin una ingeniería de integración.',
        ],
      },
      {
        titulo: 'Instalación, interconexión y primera prueba',
        parrafos: [
          'La instalación debe seguir el manual del modelo exacto. Antes de fijar una alarma, confirme la fuente de energía, el tipo de caja o base, el ambiente, la posición permitida y la accesibilidad para prueba y servicio. En modelos cableados, un técnico competente debe verificar la alimentación y la interconexión según las instrucciones. No improvise empalmes ni mezcle familias de productos porque ambas “parecen” compatibles.',
          'La interconexión permite que unidades compatibles avisen de forma coordinada cuando una detecta una condición de alarma. En este catálogo, el 20SAR-VRF publica compatibilidad de enlace inalámbrico y el 30CUAR-VRF combina humo/CO con el mismo concepto de familia. Valide qué alarmas, accesorios y versiones admite el fabricante. Una red inalámbrica doméstica y la interconexión de alarmas son funciones distintas aunque el producto tenga conectividad.',
          'Una vez montada, haga la prueba indicada por el fabricante y confirme que los ocupantes reconocen el sonido, saben evacuar y conocen el punto de reunión. La prueba no reproduce todos los escenarios de incendio ni sustituye una inspección. Registre modelo, ubicación, fecha de instalación, responsable y resultado de las revisiones para no depender de la memoria de una persona.',
        ],
      },
      {
        titulo: 'Mantenimiento, prueba y reemplazo',
        parrafos: [
          'Toda alarma requiere atención durante su vida de servicio. Consulte el manual para saber cómo probarla, qué significa cada indicador, qué tipo de batería acepta, cómo limpiar la carcasa y cuándo reemplazarla. La frecuencia de prueba, el método de limpieza y la fecha de fin de vida varían por modelo; no hay una única rutina que pueda asignarse sin consultar sus instrucciones.',
          'Una bitácora sencilla evita omisiones: ubicación, modelo, alimentación, fecha de instalación, revisiones, cambio de batería cuando corresponda, limpieza, evento de activación y fecha de reemplazo indicada por el fabricante. Si la alarma presenta una señal de falla, daño físico, contaminación que el manual no permite resolver o comportamiento inconsistente, retírela del servicio conforme al procedimiento aplicable y repóngala por una unidad compatible.',
          'No pinte el equipo, no cubra sus entradas y no use aerosoles, humo improvisado o calor para “forzar” una respuesta salvo que el fabricante lo autorice. Esas prácticas pueden contaminar el sensor o dar una falsa impresión de verificación. La prueba autorizada y la inspección visual son el punto de partida; un sistema de edificio exige además el programa correspondiente al sistema completo.',
        ],
      },
      {
        titulo: 'Errores comunes al comprar detectores de humo',
        parrafos: [
          'El primer error es llamar “sistema de alarma” a una alarma autónoma. Una vivienda puede requerir alarmas de una o varias estaciones; un inmueble con exigencias de detección centralizada puede necesitar ingeniería y un panel. Elegir el dispositivo equivocado deja sin resolver la supervisión, la notificación y la documentación que el proyecto puede requerir.',
          'También es frecuente confundir humo, CO y gas combustible. El KN-COPE-D ofrece las funciones de humo y CO descritas en su ficha, pero no debe presentarse como detector de gas combustible. Otro error es asumir que la palabra “inalámbrico” resuelve toda la cobertura: primero hay que verificar compatibilidad, alcance del enlace, alimentación y la ubicación real de cada unidad.',
          'Por último, comprar sin plan de mantenimiento convierte la alarma en un objeto pasivo. Elija modelos cuya alimentación, servicio y reemplazo pueda administrar el responsable del inmueble. Guarde manuales, registre pruebas y revise la fecha de reemplazo. Si el sitio requiere un alcance mayor, consulte Sistemas Contra Incendio en vez de forzar una alarma residencial a una función que no declara.',
          'Una decisión de compra útil se puede documentar en una matriz breve: espacio protegido, riesgo que se busca advertir, tipo de alarma, alimentación, interconexión autorizada, responsable, manual y fecha de siguiente revisión. Esa matriz permite detectar huecos antes de instalar y evita que un cambio de personal deje unidades sin atender. Si el inmueble crece, cambia su distribución, instala fuentes nuevas de cocción o modifica su ocupación, revise de nuevo el alcance. La alarma es una capa de aviso; el plan de evacuación, las rutas despejadas, la comunicación familiar y la respuesta de emergencia siguen siendo capas separadas. Mantenga claro el propósito de cada una para no atribuirle al detector una protección que no ofrece.',
        ],
      },
    ],
    faqs: [
      { q: '¿Un detector de humo detecta monóxido de carbono?', a: 'No necesariamente. Una alarma de humo y una alarma de CO cubren peligros distintos; el modelo combinado debe declarar ambas funciones. El Kidde KN-COPE-D es la referencia combinada de esta categoría.' },
      { q: '¿Dónde debo instalar un detector de humo?', a: 'Siga el manual del fabricante y el criterio de ubicación aplicable de NFPA 72. La ubicación debe considerar techo, circulación de aire, cocción, vapor, ventiladores y el plano del inmueble.' },
      { q: '¿Un detector autónomo sustituye un sistema contra incendio?', a: 'No. Una alarma autónoma emite aviso local; un sistema de detección integra panel, dispositivos, supervisión y notificación. Para ese alcance, revise la categoría de Sistemas Contra Incendio.' },
      { q: '¿Qué detector Kidde tiene humo y CO?', a: 'El Kidde KN-COPE-D combina sensor fotoeléctrico de humo y sensor de CO según su ficha. Verifique siempre el manual y el listado de la unidad que vaya a adquirir.' },
      { q: '¿Puedo interconectar cualquier alarma de humo?', a: 'No. La interconexión depende de la familia, versión y accesorios que el fabricante publique como compatibles. Los 20SAR-VRF y 30CUAR-VRF deben verificarse con esa documentación antes de instalarlos juntos.' },
      { q: '¿Cada cuándo debo cambiar un detector de humo?', a: 'Respete la fecha y el procedimiento de reemplazo del fabricante. La batería, la limpieza y la vida de servicio no son iguales para todos los modelos.' },
    ],
    fuentes: [
      { titulo: 'NFPA — Smoke Alarm Installation and Maintenance', url: 'https://www.nfpa.org/-/media/project/storefront/catalog/files/safety-tip-sheets/easy-to-read/smoke-alarms/smoke-alarm-installation-guide.pdf' },
      { titulo: 'NFPA 72 — requisitos públicos de ubicación', url: 'https://docinfofiles.nfpa.org/files/AboutTheCodes/72/72_A2024_SIG_HOU_SD_pcsubmittals.pdf' },
      { titulo: 'UL Solutions — certificación de dispositivos de humo y gas', url: 'https://www.ul.com/services/fire-smoke-and-gas-device-certification-services' },
      { titulo: 'UL Solutions — alarmas de CO y combinadas', url: 'https://www.ul.com/thecodeauthority/knowledge/carbon-monoxide-alarm-codes' },
    ],
  },
  {
    slug: 'desfibriladores',
    label: 'Desfibriladores (DEA)',
    norm: 'IEC 60601-2-4',
    description: 'Desfibrilador externo automático (DEA) para programas de respuesta: selección, consumibles y mantenimiento por modelo en México.',
    shortDesc: 'DEA para respuesta a paro cardiaco, con consumibles y accesorios por modelo.',
    accent: '#34D399',
    icon: '',
    intro: [
      'Un desfibrilador externo automático (DEA) analiza determinados ritmos cardiacos y guía al respondiente mediante las indicaciones del equipo. Forma parte de la respuesta ante un posible paro cardiaco; no sustituye activar el servicio médico de emergencias, la capacitación certificada en RCP/DEA ni las instrucciones de uso del fabricante.',
      'La compra responsable incluye un programa: responsable del equipo, ubicación accesible, señalización, revisiones documentadas y reposición oportuna de electrodos y batería. Para un dispositivo médico en México, solicite al proveedor el registro sanitario COFEPRIS vigente del modelo antes de decidir; esta página no afirma que un modelo del catálogo cuente con él.',
    ],
    items: [
      { name: 'ZOLL AED Plus', detail: 'DEA con Real CPR Help, electrodos CPR-D-padz e índice IP55.' },
      { name: 'ZOLL AED 3', detail: 'DEA con pantalla a color, modo infantil integrado y análisis RapidShock.' },
      { name: 'Philips HeartStart FRx', detail: 'DEA con indicaciones de voz y opción de llave pediátrica.' },
      { name: 'Mindray BeneHeart C1A', detail: 'DEA disponible en versiones semiautomática y automática.' },
    ],
    productCategory: 'Desfibriladores DEA',
    guia: [
      {
        titulo: '¿Qué es un desfibrilador externo automático o DEA?',
        parrafos: [
          'Un DEA es un dispositivo portátil que analiza el ritmo cardiaco y, cuando identifica un ritmo para el que está diseñado, guía la respuesta mediante instrucciones visuales o de voz. American Heart Association describe al DEA como parte de la atención de un paro cardiaco junto con RCP y la activación de emergencias. El equipo no diagnostica enfermedades, no reemplaza al servicio médico y no convierte a una persona sin formación en profesional de la salud.',
          'DEA es la sigla de desfibrilador externo automático. Algunas fichas también usan DESA o modalidad semiautomática para la variante en la que el dispositivo indica cuándo una descarga es aconsejada y la acción final sigue el flujo del fabricante. La diferencia relevante al comprar es la configuración declarada, la interfaz, los electrodos, las guías de voz y las condiciones de uso, no una etiqueta genérica.',
          'Ante una emergencia real, el respondiente debe seguir el protocolo de su organización, activar el sistema de emergencias y obedecer las instrucciones del DEA y de personal capacitado. Esta guía no da una secuencia clínica alternativa. AHA recomienda capacitación en RCP y DEA; una compra sin entrenamiento, responsable operativo y mantenimiento documentado deja incompleto el programa de respuesta.',
        ],
      },
      {
        titulo: '¿Cómo funciona un DEA durante una emergencia?',
        parrafos: [
          'El DEA guía al usuario una vez encendido y analiza el ritmo para decidir si aconseja una descarga. AHA explica que las compresiones se interrumpen únicamente cuando el propio equipo lo indica, por ejemplo durante el análisis o la descarga. Ese flujo es una razón para no improvisar procedimientos ni alterar los mensajes del dispositivo.',
          'Los electrodos son parte esencial del sistema, no un accesorio intercambiable por apariencia. Llevan la información de colocación y son específicos por marca, modelo o configuración. El ZOLL AED Plus publica electrodos CPR-D-padz; Philips HeartStart FRx publica SMART Pads II; cada referencia debe revisarse con sus consumibles autorizados. Al cotizar, confirme qué consumible requiere exactamente la unidad y cómo se gestiona su vigencia.',
          'Algunos modelos integran ayuda para RCP, metrónomo, imágenes o selección pediátrica publicada. Esas funciones acompañan el protocolo del equipo, pero no sustituyen formación ni autorización clínica. ZOLL AED 3 publica Real CPR Help y modo infantil integrado; el FRx publica llave pediátrica opcional; Mindray BeneHeart C1A publica modo adulto/niño. La decisión se toma según el programa del sitio y el manual, no sólo por una lista de funciones.',
        ],
      },
      {
        titulo: 'Tipos de DEA: automático, semiautomático, adulto y pediátrico',
        parrafos: [
          'La modalidad automática o semiautomática debe confirmarse para el equipo y configuración ofertados. Mindray publica BeneHeart C1A en ambas modalidades. ZOLL Powerheart G5 también aparece en configuraciones automática o semiautomática. No conviene asumir que un nombre comercial define el modo operativo: pida la ficha correspondiente, la versión de software cuando aplique y el manual en el idioma disponible para el programa.',
          'La atención de adultos y población pediátrica depende de las indicaciones del fabricante, los electrodos o el modo autorizado y la capacitación del personal. AHA publica orientación sobre electrodos según edad, pero el responsable del programa debe conservar el instructivo específico de cada DEA. Nunca adapte electrodos, energía o configuración de un modelo con base en información de otro dispositivo.',
          'La protección ambiental, el gabinete y la portabilidad también importan. AED Plus, AED 3, HeartStart FRx, BeneHeart C1A y Powerheart G5 publican protección IP55 en sus fichas de catálogo, pero esa clasificación no elimina las condiciones de instalación, temperatura, humedad, resguardo y limpieza que exige cada fabricante. Consulte el manual antes de instalar el equipo en exterior, vehículos o áreas industriales.',
        ],
      },
      {
        titulo: 'Cómo elegir un desfibrilador para una empresa, escuela o instalación',
        parrafos: [
          'Primero defina el programa, no el gabinete. Identifique horarios de operación, personas presentes, rutas de acceso, posibles zonas de respuesta y quién tomará responsabilidad del equipo. AHA recomienda que la ubicación permita acceso rápido, se señalice y permanezca disponible durante las actividades. Una unidad encerrada sin responsable ni acceso no resuelve el objetivo de disponibilidad.',
          'Después compare la configuración de cada referencia. ZOLL AED Plus ofrece Real CPR Help y CPR-D-padz; ZOLL AED 3 incorpora pantalla a color, RapidShock y modo infantil integrado según su ficha. Philips HeartStart FRx ofrece instrucciones de voz, metrónomo y llave pediátrica opcional. BeneHeart C1A y Powerheart G5 son alternativas cuya modalidad y accesorios deben confirmarse al cotizar.',
          'Incluya desde el inicio electrodos de reposición, batería o consumible correspondiente, gabinete compatible, señalización, capacitación certificada y una persona responsable. Solicite el registro sanitario COFEPRIS vigente del modelo al proveedor y conserve la evidencia dentro del expediente de compra. No declare cumplimiento regulatorio por la sola presencia de una marca, una fotografía o un certificado de otro mercado.',
        ],
      },
      {
        titulo: 'Normas y requisitos para DEA en México',
        parrafos: [
          'IEC 60601-2-4 es la referencia técnica que aparece en las fichas de esta categoría para desfibriladores cardiacos. Indica un marco de requisitos para el equipo médico, pero no reemplaza obligaciones de comercialización, instalación, capacitación, mantenimiento o respuesta de una organización. Revise el documento que corresponda al modelo específico y no traslade la declaración de un producto a otro.',
          'En México, antes de adquirir un dispositivo médico, pida al proveedor el registro sanitario COFEPRIS vigente que corresponda al modelo. También conviene solicitar razón social del titular, documentación de importación o distribución cuando proceda, manual, garantía, consumibles autorizados y servicio. La verificación documental protege al comprador y permite rastrear el equipo durante su vida útil.',
          'AHA ofrece recursos para implementar programas de DEA, incluidos ubicación, mantenimiento, roles y capacitación. Esas referencias son útiles para construir el programa interno, pero no reemplazan las obligaciones locales ni la evaluación de riesgos del inmueble. Consulte al responsable médico, protección civil, jurídico o autoridad competente cuando el tipo de instalación lo requiera.',
        ],
      },
      {
        titulo: 'Ubicación, señalización y acceso al DEA',
        parrafos: [
          'El sitio debe poder localizar el DEA y acceder a él cuando se necesita. AHA recomienda un lugar claramente marcado, de acceso rápido y no cerrado en una oficina. El número de equipos y su posición se determinan por el plano, la actividad y el tiempo de recuperación previsto por el programa; no existe una cantidad universal para todos los inmuebles.',
          'El gabinete debe proteger sin volver inaccesible el dispositivo. Revise las condiciones ambientales del manual, la fijación, la señalización, la visibilidad y si el área mantiene operación fuera de horario. Para sedes con actividades nocturnas, deportivas o abiertas al público, el responsable necesita revisar la accesibilidad dentro de su protocolo, no sólo durante la jornada administrativa.',
          'Documente en un plano la ubicación, ruta de acceso y responsable. Incorpore la información a inducciones, simulacros y capacitación en RCP/DEA. Un equipo correctamente elegido pierde valor si nadie sabe dónde está, si sus consumibles están vencidos o si el gabinete impide llegar a él. La planeación debe probarse en el contexto real del sitio.',
        ],
      },
      {
        titulo: 'Mantenimiento, consumibles y bitácora de un programa DEA',
        parrafos: [
          'AHA recomienda revisar y mantener cada DEA de acuerdo con su manual de operación y conservar un registro de las actividades. Nombre a una persona o función responsable de vigilar el estado operativo. La revisión no es un trámite: debe comprobar el indicador del equipo, integridad del gabinete, presencia de consumibles correctos, fechas de vigencia y cualquier alerta que el manual señale.',
          'Baterías y electrodos tienen periodos de servicio indicados por el fabricante. No use una fecha de un modelo para definir la de otro ni espere a una emergencia para comprobar el contenido del estuche. Registre referencia, lote cuando aplique, fecha de instalación, fecha indicada de sustitución y acción realizada. Mantenga el inventario alineado con los accesorios autorizados para esa unidad.',
          'Después de uso, alerta, impacto, exposición ambiental o servicio técnico, siga el procedimiento del fabricante y restablezca el programa antes de declarar el equipo disponible. Guarde los reportes que el DEA genere conforme a la política del sitio y a la atención médica correspondiente. La limpieza, almacenamiento y actualización de software sólo deben hacerse por los métodos y personas que el fabricante autorice.',
        ],
      },
      {
        titulo: 'Errores de compra que debilitan un programa de desfibrilación',
        parrafos: [
          'Comprar un DEA sin capacitación certificada, plan de respuesta y responsable definido es el error principal. El equipo es sólo un componente. AHA plantea un programa que incorpora acceso, mantenimiento y entrenamiento; una organización debe adaptar esos elementos a su operación y mantenerlos vigentes.',
          'Otro error es comparar únicamente el precio de la unidad. Deben considerarse los electrodos autorizados, baterías, gabinete, señalización, servicio, disponibilidad de manuales y reposición. Tampoco se debe prometer modo pediátrico, conectividad o grado de protección sin cotejar la configuración exacta que se cotiza.',
          'Evite afirmar que un equipo está autorizado en México sin haber recibido el registro sanitario COFEPRIS vigente del modelo por parte del proveedor. Exija documentos antes de formalizar la compra y archive la información. La trazabilidad protege al programa cuando llegue el momento de reemplazar consumibles, solicitar soporte o revisar el cumplimiento documental.',
          'La evaluación debe cerrar con una prueba de operación del programa, no con la entrega del equipo. Defina quién llama a emergencias, quién trae el DEA, quién acompaña al respondiente, qué sucede si el lugar está cerrado y dónde se conserva la bitácora. Revise esas decisiones en simulacros y capacitación impartida por instituciones o instructores certificados. Cuando cambia el plano, el horario, la población atendida o la persona responsable, actualice ubicación, señalización y protocolo. Conserve los manuales y las alertas de seguridad del fabricante junto con el expediente del dispositivo. Este nivel de organización permite que las características de AED Plus, AED 3, HeartStart FRx, BeneHeart C1A o Powerheart G5 se usen dentro de la configuración que verdaderamente se adquirió, en lugar de depender de memoria, publicidad o improvisación durante una situación crítica.',
          'La revisión anual de la política interna es una oportunidad para depurar contactos, planos, funciones y entrenamiento. Compruebe que el gabinete siga visible después de remodelaciones, que las rutas estén señaladas y que el personal de nuevo ingreso conozca el protocolo. Revise comunicaciones con seguridad, recepción, mantenimiento y servicios médicos. La bitácora debe mostrar tanto revisiones rutinarias como ausencias temporales de equipo, cambios de electrodos y cualquier servicio. Si se modifica la configuración del dispositivo, actualice el inventario y la capacitación. Un programa confiable conserva evidencia y corrige hallazgos antes de que ocurra una emergencia.',
          'Antes de renovar consumibles, compare fecha, referencia y compatibilidad con el equipo instalado. Mantenga una persona sustituta para el responsable principal y un canal para reportar alertas o daños. Estas medidas evitan que el programa dependa de una sola persona o de información dispersa.',
          'También confirme que la capacitación vigente corresponde al público y al lugar donde se usará el dispositivo. Una sesión de inducción debe explicar cómo localizar el DEA, a quién avisar y dónde encontrar el protocolo, sin reemplazar la formación certificada. Mantenga esa información accesible en cada turno.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué significa DEA?', a: 'DEA significa desfibrilador externo automático. Es un equipo portátil que analiza determinados ritmos y guía la respuesta conforme a sus instrucciones.' },
      { q: '¿Un DEA sustituye la capacitación en RCP?', a: 'No. AHA recomienda entrenamiento en RCP y DEA como parte del programa. El usuario debe seguir el protocolo de emergencia y las indicaciones del dispositivo.' },
      { q: '¿Qué DEA tiene modo pediátrico?', a: 'ZOLL AED 3 publica modo infantil integrado, Philips HeartStart FRx publica llave pediátrica opcional y Mindray BeneHeart C1A publica modo adulto/niño. Confirme consumibles e instrucciones para el modelo exacto.' },
      { q: '¿Cada cuándo se revisa un DEA?', a: 'Revíselo conforme al manual del fabricante y documente la actividad. AHA recomienda conservar un registro de mantenimiento y asignar una persona responsable.' },
      { q: '¿Debo pedir registro sanitario COFEPRIS?', a: 'Sí, solicite al proveedor el registro sanitario COFEPRIS vigente correspondiente al modelo antes de comprar. La presencia de un DEA en catálogo no equivale a una afirmación de registro.' },
      { q: '¿Cuál es la diferencia entre DEA automático y semiautomático?', a: 'La modalidad debe verificarse en el manual y la configuración del equipo. Mindray BeneHeart C1A y Powerheart G5 se publican en opciones automática o semiautomática según versión.' },
    ],
    fuentes: [
      { titulo: 'American Heart Association — implementación de programas DEA', url: 'https://cpr.heart.org/en/training-programs/aed-implementation' },
      { titulo: 'American Heart Association — ubicación, instalación y mantenimiento', url: 'https://cpr.heart.org/en/-/media/CPR-Files/Training-Programs/2025-CERP/CERP-Editable-Template-Guide042025.pdf' },
      { titulo: 'American Heart Association — qué es un DEA', url: 'https://www.heart.org/en/news/2026/09/08/what-is-an-aed-how-to-use-one-during-a-cardiac-arrest' },
      { titulo: 'AHA — tratamiento del paro cardiaco', url: 'https://www.heart.org/en/health-topics/cardiac-arrest/emergency-treatment-of-cardiac-arrest' },
    ],
  },
  {
    slug: 'epp-bombero',
    label: 'Botas, guantes y capuchas para bombero',
    norm: 'NFPA 1970',
    description: 'Botas de bombero, guantes, capuchas y herramientas de entrada forzada: selección de EPP estructural con referencia NFPA 1970.',
    shortDesc: 'Protección complementaria y herramientas manuales para la dotación bomberil.',
    accent: '#F75000',
    icon: '',
    intro: [
      'Botas de bombero, guantes y capucha trabajan como interfaces entre traje, casco, SCBA y la tarea asignada. La etiqueta, el manual y la documentación del artículo adquirido son la evidencia para confirmar su alcance; accesorios, materiales o configuración pueden modificarlo.',
      'Defina el riesgo, las tallas y compatibilidades antes de comprar. Tras uso, limpieza o exposición, inspeccione costuras, barreras, suelas, cierres y herrajes según el procedimiento aplicable. Las hachas y barras de entrada forzada son herramientas operativas que sólo deben emplearse con entrenamiento específico.',
    ],
    items: [
      { name: 'Lion Battalion', detail: 'Bota de cuero para incendio estructural, proximidad y salpicadura líquida.' },
      { name: 'Lion Primus', detail: 'Guante estructural certificado NFPA 1970 con CROSSTECH y Kovenex.' },
      { name: 'Globe Guard Hood', detail: 'Capucha con barrera de partículas para cabeza y cuello.' },
      { name: 'Council Tool FE6', detail: 'Hacha plana de entrada forzada compatible con barra Halligan.' },
    ],
    productCategory: 'EPP Bombero',
    guia: [
      {
        titulo: '¿Qué incluye el EPP de un bombero estructural?',
        parrafos: [
          'El equipo de protección personal de bombero no se elige como piezas aisladas. Botas, guantes, capucha, traje, casco, protección respiratoria y otros elementos deben responder a la tarea y a los riesgos identificados. Una bota estructural no convierte un conjunto de trabajo ordinario en protección para incendio; del mismo modo, un guante diseñado para una operación no debe atribuirse a otra sin revisar su etiqueta y documentación.',
          'La NOM-017-STPS-2024 establece en México requisitos mínimos para selección, uso y manejo de EPP en centros de trabajo. Su enfoque parte del riesgo, la actividad y las regiones anatómicas que requieren protección. Para una corporación o empresa, eso implica documentar el análisis de puesto, entregar el equipo adecuado, capacitar a las personas usuarias y definir revisión, limpieza, resguardo, reemplazo y disposición final.',
          'Esta categoría agrupa componentes y herramientas reales del catálogo. Lion Battalion Tri-Certified y Lion HellFire Felt son botas; Lion Primus son guantes estructurales; MSA Globe Guard Hood es una capucha con barrera de partículas. Council Tool FE6-36 y HAL1P30 son herramientas de entrada forzada. Cada una responde a una función distinta y ninguna sustituye el conjunto completo.',
        ],
      },
      {
        titulo: 'Cómo elegir botas de bombero para combate estructural',
        parrafos: [
          'La selección de botas comienza por el escenario de uso: incendio estructural, proximidad, salpicadura, rescate o una labor distinta. Después se valida talla, ancho, movilidad con el pantalón, tracción, puntera, protección frente a perforación y el alcance normativo que declara el fabricante. La comodidad es importante, pero no debe utilizarse para omitir la evaluación de riesgo ni la compatibilidad del conjunto.',
          'Lion Battalion Tri-Certified publica construcción de cuero, punta de acero, soporte Lock-Fit y protección Pierce-Protect, además de referencias NFPA 1970 y NFPA 1992 en la configuración descrita. Lion HellFire Felt publica construcción de caucho, forro de fieltro, placa antiperforación y puntera de acero. Compare la ficha completa de la variante disponible, porque un nombre de línea no confirma por sí solo todos los materiales o certificaciones.',
          'Pruebe las botas con el sistema que se usará en operación y documente talla y responsable. Revise que no exista daño en suela, costuras, unión, cierre o puntera antes de cada uso conforme al procedimiento de la organización. Si un componente está deteriorado, contaminado o fuera de las condiciones permitidas por el fabricante, no lo resuelva con una reparación improvisada.',
        ],
      },
      {
        titulo: 'Guantes para bombero: protección, destreza y compatibilidad',
        parrafos: [
          'Los guantes estructurales protegen las manos, pero también afectan el agarre, la destreza y la interfaz con manga, herramienta y protección respiratoria. La selección debe considerar el riesgo térmico, mecánico y de humedad previsto, además de las tareas que efectivamente realiza la cuadrilla. No use la palabra “bombero” como una certificación general: revise la aplicación, la norma declarada y la etiqueta del artículo.',
          'Lion Primus se publica como guante estructural NFPA 1970 con diseño 3D, barrera CROSSTECH con película, protección Kovenex y almohadilla de nudillos. Esos datos sirven para comparar el modelo, no para inferir que ofrece la misma protección ante toda sustancia, temperatura, corte o operación. Consulte sus instrucciones de limpieza, inspección y limitaciones antes de incorporarlo a una dotación.',
          'El puño debe funcionar con la manga y el resto del conjunto sin dejar una interfaz expuesta durante los movimientos reales. Haga pruebas de talla con el equipo asignado, no sólo una prueba estática. Guantes endurecidos, rotos, con costuras abiertas, barrera dañada o contaminación que no pueda tratarse conforme al fabricante deben retirarse del servicio y evaluarse por el responsable competente.',
        ],
      },
      {
        titulo: 'Capucha o monja para bombero: cómo revisar la interfaz de cuello',
        parrafos: [
          'La capucha de bombero, llamada también monja, ayuda a cubrir cabeza y cuello dentro del conjunto estructural. Su elección depende de la compatibilidad con casco, máscara de SCBA, cuello del chaquetón y talla de la persona usuaria. Una capucha bien especificada no sustituye la protección respiratoria ni autoriza exposición fuera de los límites operativos del conjunto.',
          'MSA Globe Guard Hood se publica con barrera de partículas DuPont Nomex Nano Flex en cabeza y cuello, paneles ergonómicos y babero amplio, con referencia NFPA 1970 en la ficha. Confirme la etiqueta del producto entregado, la versión vigente y la forma de colocación indicada por MSA. El desempeño declarado de una barrera no elimina la necesidad de inspección, descontaminación y cuidado adecuados.',
          'Durante la revisión, busque cortes, costuras dañadas, deformación, contaminación visible y desgaste en las zonas de contacto. La interfaz debe comprobarse con el casco, la máscara y el chaquetón configurados para la persona. No recorte, altere ni añada materiales a la capucha sin autorización técnica: modificarla puede afectar ajuste, trazabilidad y desempeño.',
        ],
      },
      {
        titulo: 'NFPA 1970, NOM-017-STPS-2024 y verificación de conformidad',
        parrafos: [
          'NFPA 1970 es una referencia internacional para componentes de EPP estructural de bombero. La norma identifica requisitos de diseño, desempeño, ensayo y certificación para aplicaciones definidas. No es una frase publicitaria: la conformidad se revisa sobre el artículo, su etiqueta, la configuración y los documentos del fabricante. Una declaración que aparece en un catálogo debe corroborarse antes de una licitación o compra.',
          'La NOM-017-STPS-2024 no reemplaza a una norma de producto como NFPA 1970. Regula la selección, uso y manejo del EPP en centros de trabajo a partir de los riesgos. Su aplicación práctica requiere definir actividades, regiones anatómicas a proteger, instrucciones de uso, limitaciones, inspección, mantenimiento y reposición. Para una dotación, conviene conservar esos registros junto con fichas y manuales.',
          'Al recibir equipo, valide modelo, talla, número de serie si aplica, etiqueta, manual, fecha o lote cuando corresponda y condición física. Pida la documentación que sustente la conformidad declarada para la variante ofrecida. Evite pedir “certificación NFPA” como texto genérico: especifique producto, aplicación, edición requerida por el proceso y evidencia aceptada.',
        ],
      },
      {
        titulo: 'Uso, inspección y mantenimiento del EPP',
        parrafos: [
          'El uso correcto empieza con capacitación sobre límites, colocación, ajuste y retiro. La persona usuaria necesita saber qué señales obligan a informar daño o sacar una pieza de servicio. La organización debe tener una ruta para evaluar exposición, descontaminar, limpiar, registrar y reponer. El manual de cada fabricante manda sobre métodos de lavado, secado, reparación o almacenamiento.',
          'La STPS señala que la gestión de EPP considera revisión, mantenimiento, reemplazo, resguardo y disposición final. Lleve una bitácora por artículo o conjunto con identificación, asignación, inspecciones, incidencias, limpieza y decisión de servicio. No establezca una vida útil o frecuencia universal si el fabricante no la publica: el uso, contaminación, mantenimiento y condiciones de almacenamiento alteran el estado del equipo.',
          'No continúe usando una bota con suela desprendida, un guante con barrera comprometida o una capucha con daño visible porque “todavía sirve”. Detenga el uso, informe al responsable y siga el criterio técnico autorizado. En EPP de seguridad, una reparación no documentada puede quitar trazabilidad y crear una falsa percepción de protección.',
        ],
      },
      {
        titulo: 'Hacha de bombero y barra Halligan: herramientas, no EPP',
        parrafos: [
          'La hacha Council Tool FE6-36 y la barra Halligan Council Tool HAL1P30 pertenecen a la dotación de entrada forzada, pero no son equipo de protección personal. Se seleccionan por la técnica, el riesgo, el tipo de acceso y el entrenamiento de la cuadrilla. El hacha FE6-36 publica acero alto carbono, mango de nogal y ranura de acoplamiento Halligan; la HAL1P30 publica diseño Halligan de treinta pulgadas.',
          'Antes de usar herramientas manuales, revise mango, cabeza, unión, filos, superficies de golpeo y deformaciones. Mantenga la zona de trabajo controlada y no intente técnicas para las que no exista entrenamiento. La capacidad de una barra o hacha no elimina riesgos de electricidad, colapso, materiales peligrosos, vidrio, proyección de fragmentos o fallo de una puerta.',
          'Transporte y resguarde herramientas con el filo protegido y sin poner en peligro al personal. No modifique la herramienta ni use una pieza con fisuras, mango flojo o deformación relevante. El mantenimiento y afilado deben seguir la política de la organización y las indicaciones del fabricante, con una inspección posterior antes de reincorporarla.',
        ],
      },
      {
        titulo: 'Errores al comprar botas, guantes o capuchas de bombero',
        parrafos: [
          'Un error habitual es elegir por apariencia o por una norma mencionada sin revisar la etiqueta de la configuración ofrecida. Pida modelo exacto, talla, ficha, manual y evidencia aplicable. No suponga que una bota de cuero, un guante con aramida o una capucha de Nomex cubren idénticos peligros por compartir material.',
          'También falla la compra cuando se ignoran interfaces. Una capucha incompatible con máscara, un guante que no funciona con la manga o una bota que no permite el movimiento necesario puede comprometer el uso del conjunto. Involucre a quien gestiona seguridad y a usuarios capacitados en la evaluación de tallaje y compatibilidad.',
          'Finalmente, no presupuestar inspección, limpieza, reposición y trazabilidad vuelve frágil la dotación. Especifique desde la adquisición cómo se conservarán los manuales y registros. Para trajes completos o cascos, use las categorías dedicadas; esta página no pretende sustituir sus guías ni resolver la selección integral de protección respiratoria.',
          'Un expediente de recepción debe relacionar cada pieza con el usuario, la talla, la aplicación, el manual y las restricciones conocidas. Incluya una verificación de ajuste con movimientos habituales de la labor y deje evidencia de la capacitación para colocación, retiro, inspección y reporte de daños. Este control no es burocracia: permite decidir si el guante, bota o capucha sigue apto, requiere limpieza autorizada, debe evaluarse o necesita reemplazo. Cuando una pieza cambia de dueño o de estación, actualice el registro para que no se pierda su historial. La compra del EPP termina cuando el equipo está integrado, entendido y disponible en condiciones documentadas; no cuando se abre la caja. Mantenga por separado las herramientas Council Tool y su control operativo, pues su condición y mantenimiento no sustituyen ni se evalúan igual que los componentes de protección personal.',
          'La supervisión debe incluir observación en entrenamiento y retroalimentación de quienes usan el conjunto. Si el personal reporta pérdida de movilidad, presión anormal, incompatibilidad con la máscara o dificultad para accionar herramientas, documente el hallazgo y revise talla o configuración. No resuelva problemas de ajuste con modificaciones caseras. La continuidad del programa requiere existencias de reemplazo, custodia adecuada y criterios claros para suspender uso. Así se evita que una necesidad operativa lleve a conservar una pieza cuya condición ya no es verificable.',
          'La jefatura debe revisar también cambios de puesto, clima, turnos y tareas que modifiquen la exposición prevista. Cuando el riesgo cambia, la selección inicial puede necesitar actualización. Comunicar esa decisión evita que el personal use una pieza para una operación que ya no corresponde a su alcance.',
          'Al cerrar cada ciclo de inspección, compare el inventario físico contra los registros y corrija faltantes. La administración debe asegurar que existan manuales en español o información comprensible para las personas usuarias. Un programa de EPP efectivo requiere acceso real a instrucciones, no sólo archivos guardados por compras.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué norma aplica a botas de bombero estructurales?', a: 'NFPA 1970 es la referencia declarada para las botas estructurales de esta categoría. Confirme la etiqueta y documentación de la configuración exacta antes de comprar.' },
      { q: '¿Las botas Lion Battalion y HellFire Felt son iguales?', a: 'No. Battalion publica construcción de cuero y HellFire Felt construcción de caucho con forro de fieltro. Compare aplicación, talla, materiales y documentos de cada variante.' },
      { q: '¿Qué es una monja para bombero?', a: 'Es la capucha que ayuda a cubrir cabeza y cuello dentro del conjunto. Debe comprobarse con casco, máscara de SCBA y chaquetón, conforme a las instrucciones del fabricante.' },
      { q: '¿Cómo reviso los guantes de bombero?', a: 'Siga el manual del fabricante y revise daño visible, costuras, barreras, contaminación y ajuste. Si hay una condición que comprometa su uso, repórtela y retírelos del servicio según el procedimiento.' },
      { q: '¿El hacha Halligan es EPP?', a: 'No. La hacha FE6 y la barra Halligan son herramientas de entrada forzada. Requieren inspección y capacitación específica.' },
      { q: '¿La NOM-017-STPS-2024 sustituye NFPA 1970?', a: 'No. La NOM regula selección, uso y manejo del EPP en centros de trabajo; NFPA 1970 es una referencia técnica de producto. Ambas se revisan dentro de su alcance.' },
    ],
    fuentes: [
      { titulo: 'DOF — NOM-017-STPS-2024', url: 'https://dof.gob.mx/normasOficiales/9496/stps/stps.html' },
      { titulo: 'STPS — identificación y control de EPP', url: 'https://www.stps.gob.mx/gobmx/masinfo/STPS_05_056.html' },
      { titulo: 'NFPA — NFPA 1970, desarrollo de la norma', url: 'https://www.nfpa.org/codes-and-standards/nfpa-1970-standard-development/1970' },
      { titulo: 'Lion — sitio oficial del fabricante', url: 'https://lionprotects.com/' },
      { titulo: 'MSA Safety — sitio oficial del fabricante', url: 'https://us.msasafety.com/' },
    ],
  },
  {
    slug: 'cascos-nfpa',
    shortDesc: 'Cascos de combate y forestales con protección facial integrada y suspensión avanzada.',
    accent: '#F75000',
    icon: ``,
    label: 'Cascos NFPA',
    norm: 'NFPA 1970 · 1950',
    description: 'Cascos para bomberos certificados NFPA 1970 y 1950 en México: MSA Gallet, Bullard y Cairns. Estructurales, forestales y de rescate. Cotización en 24 h.',
    intro: [
      'El casco es la primera línea de protección craneal en combate estructural. Todos los modelos que distribuimos están certificados bajo NFPA 1970 (estructural) o NFPA 1950 (forestal) por laboratorios acreditados, con número de serie verificable con fábrica.',
      'Manejamos configuraciones con protector facial integrado, goggles, lámparas y soportes para cámara térmica. Stock permanente de los modelos más demandados con entrega en 24–48 h en CDMX.',
    ],
    items: [
      { name: 'MSA Gallet F1 XF', detail: 'Casco europeo integral con visor retráctil y protección nucal' },
      { name: 'Bullard UST / USTM y UST LowRider', detail: 'Casco tradicional americano de fibra de vidrio' },
      { name: 'Cairns N6A Houston', detail: 'Casco de cuero clásico para cuerpos con tradición' },
      { name: 'Cascos forestales NFPA 1950', detail: 'Ligeros, ventilados, compatibles con goggles y capucha' },
    ],
    productCategory: 'Cascos NFPA',
    spotlight: {
      title: 'Cascos para Bomberos certificados',
      highlight: 'NFPA 1970 y NFPA 1950',
      paragraphs: [
        'El casco protege contra impacto, penetración, calor radiante y descarga eléctrica — y la NFPA 1970 exige que cada componente lo demuestre en laboratorio acreditado. Distribuimos MSA Gallet, Bullard y Cairns con certificado de conformidad, número de serie verificable y ficha técnica lista para licitación.',
        'Te asesoramos en la configuración correcta según tu operación: protector facial o goggles, lámpara integrada, soporte para cámara térmica y protección nucal. Stock permanente de los modelos más demandados con entrega en 24–48 horas en CDMX.',
      ],
      subsections: [
        { name: 'Estilo europeo integral', detail: 'MSA Gallet F1 XF: visor retráctil interno, protección nucal integrada, módulo de lámpara y comunicación. El estándar en cuerpos metropolitanos y ARFF.' },
        { name: 'Estilo americano tradicional', detail: 'Bullard UST/USTM, UST LowRider y Cairns N6A Houston: fibra de vidrio termoendurecida o cuero, ala completa contra escurrimientos y escudo frontal personalizable.' },
        { name: 'Cascos forestales NFPA 1950', detail: 'Ligeros y ventilados para incendio vegetal: compatibles con goggles, capucha y protección auditiva en jornadas largas.' },
        { name: 'Accesorios y refacciones', detail: 'Visores, goggles, lámparas, escudos frontales personalizados y suspensiones de repuesto — todo original de fábrica para conservar la certificación.' },
      ],
      image: '/images/categorias/cascos-nfpa.avif',
      imageAlt: 'Ilustración técnica de casco estructural para bombero certificado NFPA 1970 con visor abatible y banda reflejante',
    },
  },
  {
    slug: 'equipos-scba',
    shortDesc: 'Equipos de respiración autónoma de circuito abierto para atmósferas inmediatamente peligrosas.',
    accent: '#F5A623',
    icon: ``,
    label: 'Equipos SCBA',
    norm: 'NFPA 1970 · NIOSH',
    description: 'Equipos de respiración autónoma SCBA certificados NFPA 1970 y NIOSH: MSA G1, Dräger PSS y 3M Scott Air-Pak. Cilindros 30/45/60 min. Servicio autorizado.',
    intro: [
      'El equipo de respiración autónoma es el componente más crítico — y el más regulado — del EPP de un bombero. Distribuimos SCBA certificados NFPA 1970 (antes NFPA 1981) con aprobación NIOSH CBRN, en configuraciones de 30, 45 y 60 minutos con cilindros de fibra de carbono de 4,500 psi.',
      'Además de la venta, somos servicio técnico autorizado: prueba hidrostática de cilindros, mantenimiento de reguladores, pruebas de flujo anuales y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo.',
    ],
    items: [
      { name: 'MSA G1 SCBA', detail: 'Electrónica integrada, telemetría opcional, EOSTI integrado' },
      { name: 'Dräger PSS 7000', detail: 'Arnés ergonómico profesional para uso intensivo' },
      { name: '3M Scott Air-Pak X3 Pro', detail: 'Certificado NFPA 1970 (2025) por SEI con aprobación NIOSH' },
      { name: 'Cilindros y refacciones', detail: 'Cilindros 4500 psi, máscaras, reguladores y repuestos originales' },
    ],
    productCategory: 'Equipos SCBA',
    spotlight: {
      title: 'Equipos SCBA certificados',
      highlight: 'NFPA 1970 y NIOSH CBRN',
      paragraphs: [
        'El equipo de respiración autónoma incluye MSA G1, Dräger PSS 7000 y 3M Scott Air-Pak X3 Pro. El X3 Pro está certificado NFPA 1970 (2025) por SEI con aprobación NIOSH.',
        'Somos servicio técnico autorizado: prueba hidrostática de cilindros, pruebas de flujo anuales, mantenimiento de reguladores y refacciones originales. Tu inversión queda protegida durante toda la vida útil del equipo, con bitácora lista para auditoría.',
      ],
      subsections: [
        { name: 'Configuraciones 30 / 45 / 60 min', detail: 'Cilindros de fibra de carbono a 4,500 psi según el perfil de tu operación: estructural, industrial o HAZMAT con autonomía extendida.' },
        { name: 'Electrónica integrada', detail: 'EOSTI, alarma PASS, telemetría y localizador en cabina de mando — visibilidad total del aire y la posición de cada elemento.' },
        { name: 'Máscaras y reguladores', detail: 'Piezas faciales full-face con ajuste certificado, reguladores de presión positiva y adaptadores para comunicación.' },
        { name: 'Servicio técnico autorizado', detail: 'Prueba hidrostática, prueba de flujo anual, refacciones originales y bitácora de mantenimiento para tu expediente.' },
      ],
      image: '/images/categorias/equipos-scba.avif',
      imageAlt: 'Ilustración técnica de equipo de respiración autónoma SCBA con cilindro de 4500 psi, máscara y manómetro',
    },
  },
  {
    slug: 'herramientas-rescate',
    shortDesc: 'Sistemas hidráulicos de excarcelación y rescate vehicular de alto rendimiento.',
    accent: '#F75000',
    icon: ``,
    label: 'Herramientas de Rescate',
    norm: 'EN 13204 · NFPA 1960',
    description: 'Herramientas hidráulicas de rescate (quijadas de la vida): cizallas, separadores, combinadas y arietes Holmatro, Hurst y Weber. Rescate vehicular y estructural. Demostración y capacitación incluidas.',
    intro: [
      'Para extracción vehicular y rescate urbano, distribuimos herramientas Holmatro, Hurst y Weber con clasificación EN 13204: cizallas, separadores, herramientas combinadas y arietes telescópicos, en versiones con manguera y batería (Pentheon).',
      'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Ofrecemos también mantenimiento preventivo anual con refacciones originales para mantener la certificación del equipo.',
    ],
    items: [
      { name: 'Holmatro Pentheon', detail: 'Cizalla, separador, combinada y ariete a batería' },
      { name: 'Hurst eDRAULIC 3.0 y Weber E-FORCE3', detail: 'Herramientas a batería para vehículos de acero de alta resistencia' },
      { name: 'Arietes telescópicos', detail: 'Empuje de tablero y estabilización de cargas' },
      { name: 'Línea Pentheon (batería)', detail: 'Sin mangueras: despliegue en segundos, sin unidad de poder' },
    ],
    productCategory: 'Herramientas Rescate',
    spotlight: {
      title: 'Herramientas de Rescate certificadas',
      highlight: 'EN 13204',
      paragraphs: [
        'En extracción vehicular cada minuto cuenta. Distribuimos herramientas Holmatro, Hurst y Weber con clasificación EN 13204: cizallas, separadores, herramientas combinadas y arietes telescópicos con fuerzas de corte de más de 1,000 kN, capaces de abrir los aceros endurecidos de los vehículos modernos.',
        'Cada venta institucional incluye demostración en sitio y capacitación básica de operación. Damos mantenimiento preventivo anual con refacciones originales para conservar la certificación y el rendimiento del equipo.',
      ],
      subsections: [
        { name: 'Cizallas y separadores', detail: 'Holmatro Pentheon, Hurst eDRAULIC 3.0 y Weber E-FORCE3: alto tonelaje para postes B reforzados y aceros al boro de vehículos recientes.' },
        { name: 'Línea Pentheon a batería', detail: 'Sin mangueras ni unidad de poder: despliegue en segundos, velocidad bajo carga y operación silenciosa para triage.' },
        { name: 'Arietes y estabilización', detail: 'Arietes telescópicos para empuje de tablero, calzas y puntales de estabilización para vehículos y estructuras.' },
        { name: 'Demostración y capacitación', detail: 'Demo en tu estación con escenarios reales, capacitación de operación y mantenimiento preventivo anual certificado.' },
      ],
      image: '/images/categorias/herramientas-rescate.avif',
      imageAlt: 'Ilustración técnica de separador hidráulico de rescate vehicular de clasificación EN 13204',
    },
  },
  {
    slug: 'extintores',
    shortDesc: 'Extintores portátiles y sobre ruedas para fuegos clase A, B, C, D y K.',
    accent: '#F5A623',
    icon: ``,
    label: 'Extintores',
    norm: 'NOM-100-STPS · NOM-102-STPS · NFPA 10',
    description: 'Extintores PQS ABC (NOM-100-STPS), CO₂ (NOM-102-STPS), tipo K y agente limpio bajo NFPA 10. Venta, recarga y mantenimiento NOM-154-SCFI',
    intro: [
      'Distribuimos extintores portátiles y móviles para todo tipo de riesgo: polvo químico seco ABC (NOM-100-STPS) para uso general, CO₂ (NOM-102-STPS) para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos.',
      'El servicio no termina en la venta: recargamos todos los tipos de agente con collar de garantía, etiqueta de inspección vigente y reporte para tu expediente de Protección Civil, conforme al programa anual que exige la NOM-002-STPS.',
    ],
    items: [
      { name: 'PQS ABC 4.5 / 6 / 9 kg', detail: 'El estándar para oficinas, comercios y bodegas' },
      { name: 'CO₂ 4.5 / 10 kg Clase BC', detail: 'Sin residuo: tableros eléctricos, servidores, laboratorios' },
      { name: 'Tipo K 6 L', detail: 'Aceites y grasas en cocinas industriales' },
      { name: 'Agente limpio HFC-227ea', detail: 'Protección de equipo electrónico sensible' },
    ],
    productCategory: 'Extintores',
    spotlight: {
      title: 'Extintores y servicio',
      highlight: 'PQS NOM-100-STPS · CO₂ NOM-102-STPS · NFPA 10',
      paragraphs: [
        'El extintor correcto depende del fuego que vas a combatir: PQS ABC (NOM-100-STPS) para uso general, CO₂ (NOM-102-STPS) para tableros y electrónica, Tipo K para cocinas industriales y agentes limpios para centros de datos. El servicio de recarga y mantenimiento se realiza conforme a NOM-154-SCFI.',
        'El servicio no termina en la venta: recargamos todos los tipos de agente con collar de garantía y reporte para tu expediente de Protección Civil, conforme al programa anual que exige la NOM-002-STPS. También programamos la prueba hidrostática obligatoria de tus cilindros.',
      ],
      subsections: [
        { name: 'PQS ABC multiuso', detail: 'El estándar para oficinas, comercios y bodegas: 4.5, 6 y 9 kg, portátiles y móviles sobre ruedas para áreas industriales.' },
        { name: 'CO₂ y agentes limpios', detail: 'Sin residuo: tableros eléctricos, servidores y laboratorios. HFC-227ea para activos electrónicos de alto valor.' },
        { name: 'Tipo K para cocinas', detail: 'Acetato de potasio para aceites y grasas en cocinas industriales — el complemento obligado del sistema de campana.' },
        { name: 'Recarga y mantenimiento', detail: 'Recarga certificada con collar de garantía, etiqueta de inspección, reporte documental y prueba hidrostática programada.' },
      ],
      image: '/images/categorias/extintores.avif',
      imageAlt: 'Ilustración técnica de extintor PQS ABC con manómetro y collar de garantía',
    },
  },
  {
    slug: 'sistemas-ci',
    shortDesc: 'Rociadores automáticos, paneles de detección y agentes limpios para instalaciones críticas.',
    accent: '#34D399',
    icon: ``,
    label: 'Sistemas Contra Incendio',
    norm: 'NFPA 13 · 72 · 2001',
    description: 'Sistemas contra incendio NFPA: rociadores, detección y alarma, supresión con agente limpio FM-200/Novec. Diseño, instalación y memoria de cálculo en México.',
    intro: [
      'Diseñamos e instalamos sistemas fijos de protección: rociadores automáticos NFPA 13, detección y alarma NFPA 72 con tableros FACP, y supresión por agente limpio NFPA 2001 (FM-200, Novec 1230) para activos críticos.',
      'Cada proyecto incluye memoria de cálculo hidráulico, planos as-built, puesta en marcha documentada y capacitación al personal de mantenimiento — el expediente completo que pide tu aseguradora y la autoridad.',
    ],
    items: [
      { name: 'Rociadores Tyco / Viking', detail: 'Diseño NFPA 13 por densidad de riesgo' },
      { name: 'Paneles Honeywell / Notifier', detail: 'Detección direccionable NFPA 72' },
      { name: 'FM-200 / Novec 1230', detail: 'Supresión limpia para data centers y archivos' },
      { name: 'Redes hidráulicas y bombas', detail: 'Bombas certificadas y tableros NFPA 20' },
    ],
    productCategory: 'Sistemas CI',
    spotlight: {
      title: 'Sistemas Contra Incendio',
      highlight: 'NFPA 13, 72 y 2001',
      paragraphs: [
        'Un sistema fijo bien diseñado detecta, alerta y suprime antes de que el fuego tome el edificio. Diseñamos e instalamos rociadores automáticos NFPA 13, detección y alarma NFPA 72 con tableros FACP direccionables, y supresión por agente limpio NFPA 2001 para activos críticos.',
        'Cada proyecto entrega memoria de cálculo hidráulico, planos as-built, puesta en marcha documentada y capacitación al personal — el expediente completo que piden tu aseguradora, tu DRO y la autoridad.',
      ],
      subsections: [
        { name: 'Rociadores automáticos NFPA 13', detail: 'Diseño por densidad de riesgo con Tyco y Viking: oficinas, naves industriales, almacenes de gran altura y estacionamientos.' },
        { name: 'Detección y alarma NFPA 72', detail: 'Paneles Honeywell/Notifier direccionables, detectores de humo y calor, notificación audible y visible por zonas.' },
        { name: 'Supresión con agente limpio', detail: 'FM-200 y Novec 1230 para data centers, archivos y salas eléctricas — extinción sin daño al equipo.' },
        { name: 'Redes hidráulicas y bombas', detail: 'Bombas certificadas, tableros NFPA 20, hidrantes y tomas siamesas con memoria de cálculo y pruebas de aceptación.' },
      ],
      image: '/images/categorias/sistemas-ci.avif',
      imageAlt: 'Ilustración técnica de rociador automático contra incendio y panel de detección FACP conforme NFPA 13 y 72',
    },
  },
  {
    slug: 'camaras-termicas',
    shortDesc: 'Cámaras de imagen térmica para búsqueda y rescate en ambientes de visibilidad cero.',
    accent: '#F5A623',
    icon: ``,
    label: 'Cámaras Térmicas',
    norm: 'NFPA 1930',
    description: 'Cámaras térmicas para bomberos certificadas NFPA 1930: FLIR, MSA Evolution y Bullard. Búsqueda y rescate, sobrehaul y HAZMAT. Demostración sin costo.',
    intro: [
      'La imagen térmica reduce dramáticamente los tiempos de búsqueda y localización de víctimas. Manejamos cámaras certificadas NFPA 1930 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate.',
      'Desde cámaras personales de bolsillo hasta equipos de mando con telemetría, te asesoramos según presupuesto y uso: estructural, HAZMAT, inspección industrial o búsqueda y rescate.',
    ],
    items: [
      { name: 'FLIR K75 / K85-N', detail: 'Línea estructural con FSX y transmisión Wi-Fi' },
      { name: 'MSA Evolution 6000 y G1 iTIC', detail: 'Cámara de mano e imagen térmica integrada al SCBA G1' },
      { name: 'Bullard TXS / NXT', detail: 'Ligeras, intuitivas, alta resolución' },
      { name: 'Cámaras personales', detail: 'Una cámara por bombero: decisión táctica inmediata' },
    ],
    productCategory: 'Cámaras Térmicas',
    spotlight: {
      title: 'Cámaras Térmicas certificadas',
      highlight: 'NFPA 1930',
      paragraphs: [
        'En visibilidad cero, la imagen térmica es la diferencia entre buscar y encontrar. Distribuimos cámaras FLIR, MSA Evolution y Bullard certificadas NFPA 1930 — el estándar que garantiza legibilidad, durabilidad e interfaz uniforme en condiciones de combate real.',
        'Te asesoramos según uso y presupuesto: desde cámaras personales de bolsillo para cada elemento hasta equipos de mando con grabación y telemetría. Demostración en sitio sin costo para que tu brigada las pruebe antes de decidir.',
      ],
      subsections: [
        { name: 'Búsqueda y rescate', detail: 'Localización de víctimas en humo denso: sensores de alta sensibilidad con paletas de color para identificar fuentes de calor.' },
        { name: 'Sobrehaul y puntos calientes', detail: 'Verificación de extinción total tras el ataque: detecta combustión oculta en muros, techos y entrepisos.' },
        { name: 'Cámaras personales', detail: 'Una cámara por bombero cambia la táctica: decisión inmediata en el interior sin esperar al equipo de mando.' },
        { name: 'Integración y accesorios', detail: 'Cámara integrada al SCBA (MSA G1 iTIC), grabación de incidentes, cargadores vehiculares y fundas de despliegue rápido.' },
      ],
      image: '/images/categorias/camaras-termicas.avif',
      imageAlt: 'Ilustración técnica de cámara térmica para bomberos certificada NFPA 1930 con silueta de calor en pantalla',
    },
  },
  {
    slug: 'hazmat',
    shortDesc: 'Trajes de protección química Nivel A y B para respuesta a materiales peligrosos.',
    accent: '#F75000',
    icon: ``,
    label: 'Equipos HAZMAT',
    norm: 'NFPA 1990',
    description: 'Trajes HAZMAT Nivel A y B certificados NFPA 1990, detección multi-gas y descontaminación. Equipamiento para materiales peligrosos en México.',
    intro: [
      'Para respuesta a materiales peligrosos equipamos brigadas con trajes encapsulados Nivel A y trajes salpicadura Nivel B/C (ambos NFPA 1990), detección multi-gas, kits de descontaminación y sellado de fugas.',
      'El equipo HAZMAT exige compatibilidad química documentada: te entregamos las tablas de permeación del fabricante y asesoramos la selección según las sustancias específicas de tu operación — crítico para refinerías, química y logística.',
    ],
    items: [
      { name: 'Nivel A encapsulado', detail: 'Protección total a vapor con SCBA interno' },
      { name: 'Nivel B splash', detail: 'Protección a salpicadura con SCBA externo' },
      { name: 'DuPont Tychem 10000', detail: 'Barrera química de amplio espectro' },
      { name: 'Detección multi-gas', detail: 'O₂, LEL, CO, H₂S y tóxicos específicos' },
    ],
    productCategory: 'Equipos HAZMAT',
    spotlight: {
      title: 'Equipos HAZMAT certificados',
      highlight: 'NFPA 1990',
      paragraphs: [
        'La respuesta a materiales peligrosos exige protección absoluta y compatibilidad química documentada. Equipamos brigadas con trajes encapsulados Nivel A y trajes de salpicadura Nivel B/C certificados NFPA 1990, detección multi-gas y kits de descontaminación.',
        'Cada traje se entrega con las tablas de permeación del fabricante y asesoría de selección según las sustancias específicas de tu operación — crítico para refinerías, plantas químicas, logística y respuesta municipal.',
      ],
      subsections: [
        { name: 'Nivel A encapsulado', detail: 'Protección total a gas y vapor con SCBA interno: la máxima barrera para atmósferas desconocidas o tóxicas.' },
        { name: 'Nivel B y C de salpicadura', detail: 'DuPont Tychem y equivalentes para líquidos y aerosoles, con SCBA externo o respirador purificador según el riesgo.' },
        { name: 'Detección multi-gas', detail: 'Monitores de O₂, LEL, CO, H₂S y tóxicos específicos con certificación para atmósferas explosivas.' },
        { name: 'Descontaminación y sellado', detail: 'Regaderas portátiles, tinas de contención, kits de sellado de fugas y bolsas de recuperación para el cierre del incidente.' },
      ],
      image: '/images/categorias/hazmat.avif',
      imageAlt: 'Ilustración técnica de traje HAZMAT Nivel A encapsulado certificado NFPA 1990 con visor y guantes químicos',
    },
  },
  {
    slug: 'rescate-vertical',
    label: 'Rescate vertical y técnico',
    norm: 'NFPA 2500 · EN según fabricante',
    description: 'Equipo de rescate vertical: arneses, cuerdas, descensores, poleas y camillas con selección por sistema y manual del fabricante.',
    shortDesc: 'Equipo de cuerda, control de descenso y transporte de paciente para rescate técnico.',
    accent: '#F5A623',
    icon: '',
    intro: [
      'El equipo de rescate vertical se configura como un sistema: arnés, cuerda, anclajes, control de descenso, aseguramiento, ventaja mecánica y empaque del paciente. La compatibilidad depende del modelo, diámetro, conectores y manuales; piezas visualmente parecidas no son automáticamente intercambiables.',
      'Petzl publica arneses, descensores y poleas; CMC ofrece dispositivos y camillas; Ferno aporta camillas canastilla. La capacitación, el análisis de riesgo, la autoridad de mando y un plan de rescate son condiciones previas al despliegue. Esta guía ayuda a especificar, no a improvisar técnicas de cuerda.',
    ],
    items: [
      { name: 'Petzl MAESTRO S', detail: 'Descensor con polea bloqueadora integrada para descenso e izado.' },
      { name: 'CMC MPD', detail: 'Control de descenso, belay y polea en un solo dispositivo.' },
      { name: 'CMC Titanium Split-Apart', detail: 'Canastilla desmontable con puntos StratLoad.' },
      { name: 'Ferno Model 71', detail: 'Camilla canastilla con carcasa de polietileno y bastidor de aluminio.' },
    ],
    productCategory: 'Rescate Vertical',
    guia: [
      {
        titulo: '¿Qué es el equipo de rescate vertical?',
        parrafos: [
          'El equipo de rescate vertical reúne componentes para acceder, asegurar, descender, elevar, transferir y trasladar en incidentes donde existe un desnivel o una condición técnica de rescate. No es una bolsa de productos independientes. Su desempeño depende del diseño del sistema, la condición de los anclajes, la compatibilidad entre elementos, la carga prevista, la comunicación y la competencia del equipo de respuesta.',
          'NFPA 2500 es la referencia para operaciones, entrenamiento y equipo de búsqueda y rescate técnico de emergencia. La norma sitúa el equipo dentro de capacidades organizacionales; no basta con adquirir una cuerda, un arnés o una camilla. La organización debe definir qué puede hacer, con qué personal, bajo qué procedimientos, cómo inspecciona sus recursos y cuándo debe pedir apoyo especializado.',
          'Un sistema puede incluir arnés, cuerda, conectores, anclajes, descensor, línea de aseguramiento, poleas, camilla y elementos de empaque. La composición exacta surge de una evaluación técnica, no de esta lista. Para rescate en espacio confinado, estructuras, taludes, torres o industria, agregue los peligros particulares y el plan operativo antes de seleccionar artículos.',
        ],
      },
      {
        titulo: 'Componentes de un sistema de rescate con cuerda',
        parrafos: [
          'El arnés conecta a la persona usuaria con el sistema dentro de los usos autorizados. Petzl ASTRO BOD FAST publica puntos para acceso por cuerda, punto ventral abrible y bloqueador CROLL L integrado; sus referencias EN 361, EN 358, EN 813 y EN 12841 tipo B corresponden a funciones definidas. Confirme talla, versión y manual del arnés que realmente se asignará.',
          'La cuerda se selecciona por su construcción, diámetro permitido, condición, identificación y compatibilidad con los equipos que la reciben. Un descensor no acepta cualquier cuerda. Petzl publica MAESTRO S para un rango concreto de diámetro, mientras CMC publica MPD de 13 mm para una cuerda específica. El diámetro nominal no es una licencia para mezclar marcas, generaciones o tipos de cuerda sin revisión documental.',
          'Los conectores, anclajes, descensores y poleas constituyen enlaces críticos. Revise orientación, cierre, compatibilidad de radios, carga y uso previsto. Una polea mejora la configuración de un sistema pero no elimina la necesidad de aseguramiento, gestión de bordes y control de la carga. Un diseño debe ser revisado por personal competente conforme al procedimiento de la organización.',
        ],
      },
      {
        titulo: 'Arnés de rescate: talla, puntos de conexión y compatibilidad',
        parrafos: [
          'La talla se verifica con ajuste real, no con una estimación por estatura o ropa. El arnés debe colocarse como indica su manual y evaluarse con los accesorios necesarios para la operación. Cintas torcidas, hebillas mal cerradas, puntos cargados fuera de su uso previsto o elementos conectados a un punto incorrecto son fallas que el entrenamiento y una revisión cruzada deben detectar antes de entrar al sistema.',
          'ASTRO BOD FAST se relaciona en el catálogo con acceso por cuerda, progresión con CROLL L y posicionamiento. Ese alcance no autoriza convertirlo en un arnés universal para cualquier maniobra de rescate. Lea la información técnica de Petzl sobre sus puntos de conexión, accesorios compatibles, inspección y vida de servicio. Mantenga el historial de asignación y eventos de cada pieza.',
          'Evite conectar componentes sólo porque el mosquetón entra físicamente. Los manuales fijan límites de orientación, usos y combinaciones. Si el conjunto necesita un punto específico para descenso, aseguramiento, izado o evacuación, valide ese punto y el sistema completo con quien diseña la maniobra. El ajuste personal y la compatibilidad del sistema son decisiones separadas, pero ambas son indispensables.',
        ],
      },
      {
        titulo: 'Cuerda de rescate, descensores y poleas: cómo elegirlos',
        parrafos: [
          'El descensor controla movimiento, por lo que debe coincidir con cuerda, carga y aplicación que el fabricante declara. Petzl MAESTRO S combina descensor y polea bloqueadora para descenso e izado bajo sus instrucciones. CMC MPD integra polea, control de descenso y belay según su diseño. La elección exige revisar ficha técnica, manual, rango de cuerda, clasificación declarada y el tipo de sistema que opera la organización.',
          'Petzl RESCUE S es una polea compacta para sistemas de rescate y publica referencias EN 12278 y NFPA Technical Use. Una polea no es un anclaje ni un sustituto de un plan de ventaja mecánica. Confirme qué cuerda, conectores, cargas, anclajes y dirección de trabajo admite el sistema completo. Nunca sobreponga datos de resistencia de productos distintos para fabricar una capacidad de conjunto.',
          'La cuerda necesita identificación y protección frente a bordes, contaminantes, calor, abrasión y manipulación indebida. Petzl señala que la persona responsable de gestión e inspección debe conocer la historia completa del equipo, condiciones de uso y eventos relevantes. Si se desconoce el historial, se debe aplicar el criterio de retiro o evaluación del procedimiento institucional, no asumir que la apariencia externa es suficiente.',
        ],
      },
      {
        titulo: 'Camilla de rescate: transporte, empaque y aparejo',
        parrafos: [
          'Una camilla de rescate sirve para trasladar a una persona lesionada dentro de un sistema definido. Su selección debe considerar acceso, terreno, método de izado o descenso, restricciones, protección frente a bordes y compatibilidad con el empaque clínico. La camilla no reemplaza valoración médica, inmovilización o decisiones de un equipo de atención prehospitalaria competente.',
          'CMC Titanium Split-Apart publica construcción desmontable, puntos StratLoad y clasificación UL para estándares NFPA en su ficha. Ferno Model 71 publica carcasa de polietileno de alta densidad y bastidor de aluminio. Compare el modelo, accesorios, restricciones, bridle, puntos de elevación y manual. No conecte una camilla a un aparejo por un punto no autorizado ni use un accesorio de otro fabricante sin autorización.',
          'El empaque, la transición de borde y el control de la camilla requieren práctica conjunta. La persona dentro del sistema, rescatistas, líneas y obstáculos deben estar contemplados en el plan. Antes de una operación, revise cierres, rieles, red, correas, uniones y accesorios. Después de un impacto, carga inusual o contaminación, siga el criterio del fabricante y responsable técnico antes de devolverla a servicio.',
        ],
      },
      {
        titulo: 'Normas aplicables: NFPA 2500, EN y documentación del fabricante',
        parrafos: [
          'NFPA 2500 integra temas de operaciones y capacitación de rescate técnico, así como cuerdas y equipos de seguridad para servicios de emergencia. Su presencia en una ficha orienta a un campo de uso, pero no certifica el plan de rescate de una organización ni sustituye capacitación. Determine la edición y el alcance requeridos por el contrato, autoridad competente o procedimiento interno.',
          'Las normas EN presentes en productos Petzl describen funciones concretas; por ejemplo, EN 361, EN 358, EN 813, EN 12841, EN 341 y EN 12278. Deben leerse con el manual y declaración de conformidad del producto. No use una norma como atajo para deducir una aplicación no indicada. La clasificación NFPA de un componente tampoco convierte automáticamente todos los accesorios conectados en un sistema equivalente.',
          'Para México, además de requisitos contractuales o de protección civil, la organización debe evaluar EPP y riesgos laborales conforme a la regulación aplicable. Mantenga un expediente con manuales, identificación, inspecciones, formación, incidentes y decisiones de retiro. La evidencia de un sistema seguro es documental y operativa; no depende de una sola marca o de una lista de compras.',
        ],
      },
      {
        titulo: 'Inspección, mantenimiento y retiro de servicio',
        parrafos: [
          'Antes de usar, la persona capacitada debe realizar la inspección que indica el fabricante. Revise cuerda, costuras, cintas, conectores, poleas, descensores, levas, placas, gatillos, etiquetas y suciedad o daño visible. Petzl recomienda inspecciones regulares y gestión basada en la historia del equipo. La inspección previa no sustituye las revisiones periódicas que la organización y el fabricante establezcan.',
          'Registre identificación, fecha de incorporación, responsable, revisiones, condiciones de uso, limpieza, reparaciones autorizadas, golpes, sobrecargas y retiro. Evite lavar, lubricar, marcar o reparar un componente sin autorización escrita. Productos con incertidumbre de historial, daño, calor, agente químico o comportamiento anormal deben aislarse hasta que una persona competente aplique el procedimiento de evaluación.',
          'El almacenamiento protege tanto como la inspección. Mantenga los equipos limpios, secos cuando el manual lo indique, identificados y separados de fuentes de calor, contaminantes, aristas y uso no autorizado. No se debe devolver un artículo a servicio sólo porque “no se ve roto”. La trazabilidad documentada es clave para tomar decisiones seguras de continuidad o retiro.',
        ],
      },
      {
        titulo: 'Errores comunes al comprar equipo de rescate vertical',
        parrafos: [
          'El error más peligroso es comprar componentes y dejar para después el sistema y la formación. La técnica, roles, anclajes, comunicaciones y plan de rescate deben estar definidos antes de desplegar el equipo. Tampoco confunda equipo para trabajo con cuerda con una capacidad institucional completa de rescate técnico.',
          'Otro error es mezclar cuerda y descensor por diámetro aproximado. Compruebe modelo, edición, estado, rango autorizado y manual. Verifique también conectores, anclajes, poleas y puntos de unión. El hecho de que dos piezas se acoplen físicamente no demuestra compatibilidad ni capacidad operativa.',
          'No compre una camilla sin pensar en restricciones, aparejo, empaque y entrenamiento. Para este catálogo, compare Petzl ASTRO BOD FAST, MAESTRO S y RESCUE S; CMC MPD y Titanium Split-Apart; y Ferno Model 71 dentro de un sistema diseñado. No asigne cargas, técnicas o frecuencias de inspección no publicadas por sus fabricantes.',
          'Antes de aprobar una compra, convierta la necesidad en una configuración verificable: tipo de incidente, entorno, personal disponible, normas o contrato aplicable, cuerdas aceptadas, anclajes existentes, conectores, transporte, inspección y entrenamiento. Pida manuales vigentes, declaraciones de conformidad y fichas de cada componente, no sólo un folleto del conjunto. Determine quién será la persona competente que lleve inventario, inspecciones periódicas y decisiones de retiro. Practique el sistema bajo supervisión antes de exponerlo a una emergencia y registre las lecciones que impliquen cambios de procedimiento. Cuando una operación no coincide con la capacidad entrenada o el equipo no tiene historial verificable, la decisión segura puede ser no desplegarlo y solicitar recursos especializados. La capacidad real de rescate se demuestra por el sistema, las personas y la preparación conjunta, no por acumular productos certificados individualmente.',
          'Prepare además un mecanismo de revisión posterior a cada práctica o activación. Documente incompatibilidades, equipos que no se localizaron con rapidez, cambios en el anclaje disponible y necesidades de capacitación. Mantenga los manuales accesibles para el equipo técnico y revise alertas de seguridad del fabricante. Ningún catálogo puede anticipar la geometría, el clima, la contaminación o los recursos de un incidente particular. El juicio de mando y la capacidad demostrada delimitan cuándo se puede intervenir y cuándo es necesario esperar apoyo de una unidad especializada.',
          'Las compras futuras deben corregir hallazgos documentados, no repetir configuraciones por costumbre. Si cambia una generación de producto, revise compatibilidad con inventario existente. Conserve identificaciones legibles y retire etiquetas que ya no permitan rastrear un componente dentro de la bitácora de seguridad.',
          'Mantenga una ruta de consulta técnica con los fabricantes o distribuidores autorizados cuando surjan dudas de compatibilidad. No resuelva un caso nuevo con videos, fotografías o consejos de campo sin respaldo. La documentación oficial, la formación y el procedimiento de la organización son los controles adecuados para decisiones de equipo.',
          'Archive también las respuestas técnicas que modifiquen una decisión de compra o de uso.',
        ],
      },
    ],
    faqs: [
      { q: '¿Qué incluye un equipo de rescate vertical?', a: 'Puede incluir arnés, cuerda, anclajes, conectores, control de descenso, aseguramiento, poleas y camilla. La combinación debe diseñarse y verificarse para la operación concreta.' },
      { q: '¿Puedo usar cualquier cuerda con un descensor?', a: 'No. El descensor debe usarse sólo con los diámetros, tipos y condiciones que indique su fabricante. Revise además los demás componentes del sistema.' },
      { q: '¿Para qué sirve el Petzl MAESTRO S?', a: 'Petzl lo publica para operaciones de rescate con descenso e izado y polea bloqueadora integrada. Consulte el manual para cuerda compatible, configuración y límites.' },
      { q: '¿Qué norma se usa como referencia para rescate técnico?', a: 'NFPA 2500 es una referencia para operaciones, entrenamiento y equipo de rescate técnico de emergencia. Las normas EN de cada artículo se revisan junto con su documentación.' },
      { q: '¿Cómo inspecciono una cuerda de rescate?', a: 'Siga el procedimiento del fabricante y mantenga el historial completo de uso, condiciones y eventos. Si hay daño o incertidumbre, aíslela y aplique el criterio de evaluación autorizado.' },
      { q: '¿Una camilla canastilla puede izarse con cualquier bridle?', a: 'No. Use sólo puntos, aparejos y accesorios autorizados para el modelo y el sistema. El empaque y el izado requieren formación específica.' },
    ],
    fuentes: [
      { titulo: 'NFPA — NFPA 2500, desarrollo de la norma', url: 'https://www.nfpa.org/codes-and-standards/nfpa-2500-standard-development/2500' },
      { titulo: 'Petzl — inspección de cuerda', url: 'https://www.petzl.com/FI/en/Professional/News/2020-3-6/How-To-Inspect-Your-Rope' },
      { titulo: 'Petzl — MAESTRO S', url: 'https://www.petzl.com/ES/es/Profesional/Descensores/MAESTRO-S' },
      { titulo: 'CMC — MPD', url: 'https://www.cmcpro.com/equipment/mpd/' },
      { titulo: 'Ferno — Model 71 Basket Stretcher', url: 'https://www.ferno.com/us/product/model-71-basket-stretcher?hl=en-us' },
    ],
  },
  {
    slug: 'equipo-forestal',
    label: 'Equipo para incendio forestal',
    norm: 'NFPA 1950 para EPP · herramientas por fabricante',
    description: 'Herramientas forestales para brigadas: batefuegos, McLeod, Pulaski y bomba de mochila, con selección y cuidado por tarea.',
    shortDesc: 'Herramientas forestales, bombas de mochila y acceso al EPP para combate de vegetación.',
    accent: '#34D399',
    icon: '',
    intro: [
      'Las herramientas forestales permiten construir líneas, mover combustible y atender puntos con agua de mochila. La dotación manual no reemplaza análisis de terreno, comportamiento del fuego, clima, comunicaciones, rutas de escape, zonas seguras, mando de incidentes ni capacitación de brigada.',
      'También es el hub del EPP forestal publicado: Lion ENgage Wildland, Fire-Dex Wildland, Sköld Forestal, Bullard Wildfire y MSA Gallet F2XR. Para prendas y cascos, confirme etiqueta, talla, compatibilidad y alcance de NFPA 1950 o EN aplicable al modelo.',
    ],
    items: [
      { name: 'Council Tool McLeod MT48', detail: 'Herramienta de azadón y rastrillo para líneas de control.' },
      { name: 'Council Tool Pulaski 38PE136', detail: 'Hacha y azadón para corte y excavación.' },
      { name: 'Truper MAC', detail: 'McLeod para limpieza de áreas y líneas corta fuego.' },
      { name: 'Indian 90G', detail: 'Bomba de mochila de acero galvanizado de cinco galones.' },
    ],
    productCategory: 'Equipo Forestal',
    guia: [
      {
        titulo: '¿Qué son las herramientas forestales y para qué se usan?',
        parrafos: [
          'Las herramientas forestales son implementos manuales destinados a apoyar labores de prevención, construcción de líneas, remoción de combustible, control de puntos y remate en incendios de vegetación. Su uso se integra a la estrategia de la brigada y a la evaluación constante del incidente. No son sustituto de una motobomba, una línea de agua, una aeronave, un vehículo ni una decisión de mando.',
          'CONAFOR describe la azahacha Pulaski para apertura y ampliación de líneas de defensa, corte, apeo, descuaje, excavado y raspado hasta suelo mineral, entre otros usos operativos. Esa descripción ilustra que una sola herramienta puede apoyar tareas diferentes, pero la técnica, el momento y el límite de exposición corresponden al personal capacitado y al plan del incidente.',
          'Esta página distingue herramientas de EPP. McLeod, Pulaski, rastrillo y batefuegos realizan trabajo sobre combustible o llama superficial; botas, casco, guantes, ropa forestal y protección ocular protegen a la persona. Una compra responsable considera ambos grupos, comunicaciones, hidratación, primeros auxilios, transporte y el procedimiento local, sin prometer que una herramienta aislada controla un incendio.',
        ],
      },
      {
        titulo: 'McLeod: rastrillar, excavar y preparar líneas de control',
        parrafos: [
          'El McLeod combina rastrillo y azadón. Sirve para mover material vegetal, raspar y trabajar el suelo dentro de la técnica definida por la brigada. Council Tool MT48 FSS publica cabeza de acero, mango de fresno y función de rastrillo/azadón. Truper MAC 17891 publica cabeza de acero, filo templado y el mismo concepto de herramienta combinada. Compare la configuración y la documentación de cada referencia.',
          'La elección entre McLeod y otra herramienta se relaciona con tipo de combustible, suelo, acceso, peso que la persona puede manejar, distancia de traslado y tarea asignada. No deduzca que una herramienta más pesada o con más dientes es siempre la adecuada. El jefe de brigada debe definir técnica y progresión de trabajo según el comportamiento del fuego y el entorno.',
          'Antes de salir, inspeccione cabeza, filo, dientes, remaches, uniones y mango. Un mango agrietado, una cabeza floja o dientes deformados pueden proyectar piezas o perder control durante la operación. Tras limpieza, seque y resguarde el implemento conforme a las recomendaciones del fabricante. No afile o modifique una cabeza sin un procedimiento autorizado.',
        ],
      },
      {
        titulo: 'Pulaski: hacha y azadón para trabajo forestal',
        parrafos: [
          'La Pulaski combina una hoja de hacha con una azada. CONAFOR la identifica como herramienta de doble propósito para ataque directo, aporte de tierra y apertura o ampliación de líneas. Council Tool Pulaski 38PE136 NFES publica cabeza de acero 1080 forjado, mango de nogal y configuración de hacha/azadón. Su ficha debe usarse para reconocer el modelo, no para sustituir la instrucción práctica.',
          'La herramienta requiere espacio de trabajo, comunicación y distancia segura entre operadores. Antes de cortar o excavar, observe personas, combustible, rocas, raíces, cables y dirección de la herramienta. No trabaje al alcance de otra persona ni en una postura inestable. La maniobra correcta depende de entrenamiento y supervisión; esta guía no presenta técnica de golpeo.',
          'Proteja el filo durante transporte y almacenamiento. Revise el asiento de la cabeza, la integridad del mango y cualquier deformación antes y después de servicio. Retire del uso una Pulaski con cabeza floja, cabo partido o daño que pueda afectar el control. Una reparación de campo sólo debe realizarla quien esté autorizado por la organización y por el procedimiento aplicable.',
        ],
      },
      {
        titulo: 'Batefuegos: cuándo se usa y cuáles son sus límites',
        parrafos: [
          'El batefuegos es una herramienta manual con pala flexible destinada a sofocar llama superficial en combustibles ligeros dentro de una operación controlada. Council Tool FS15 publica pala de caucho masticado y estructura de acero. Su función debe entenderse dentro de la estrategia de ataque o remate indicada por el mando; no permite aproximarse a una propagación que exceda la capacidad y entrenamiento de la brigada.',
          'La técnica busca no dispersar material encendido ni crear exposición innecesaria. Si cambian viento, combustible, pendiente, visibilidad, intensidad o rutas de salida, la decisión corresponde a la evaluación del incidente. No use un batefuegos contra objetos rígidos ni como palanca, y no lo emplee para situaciones que requieren agente extintor, equipo especializado o retiro inmediato.',
          'Inspeccione pala, férula, pernos y mango antes de cada turno. El caucho cuarteado, una unión floja o un mango dañado justifican retirar la herramienta hasta una evaluación. Límpiela sin productos que el fabricante prohíba y guárdela de manera que la pala no se deforme. Mantenerla disponible no significa dejarla sin identificación ni responsable.',
        ],
      },
      {
        titulo: 'Bomba de mochila forestal y disponibilidad de agua',
        parrafos: [
          'Una bomba de mochila transporta agua para aplicaciones manuales en el terreno. Indian 90G con FP200 publica tanque de acero galvanizado de cinco galones, bomba de dos cilindros de latón y boquilla que cambia entre chorro y abanico. La capacidad publicada no define cuánta carga debe transportar una persona en todo momento: el responsable debe considerar condición física, terreno, distancia, hidratación y operación segura.',
          'Antes de asignarla, revise tanque, tapa, correas, bomba, manguera, filtro, juntas y boquilla. Una fuga reduce disponibilidad y puede desequilibrar a quien la porta. Llene, transporte, descargue y limpie conforme al manual. No introduzca aditivos, espumas u otros agentes salvo que el fabricante, el plan del incidente y la autoridad correspondiente los contemplen.',
          'El agua disponible, la recarga y el abastecimiento se planean antes de entrar al área. Una mochila no garantiza control de un frente ni reemplaza otras tácticas. Mantenga comunicación con la brigada y suspenda la tarea si cambian las condiciones o se comprometen rutas de escape. El equipo debe regresar limpio, inspeccionado y resguardado después de su uso.',
        ],
      },
      {
        titulo: 'Cómo armar una dotación de herramientas para brigada',
        parrafos: [
          'La dotación se arma desde el análisis de misión. Identifique vegetación, terreno, accesos, clima, agua disponible, transporte, periodo operativo, número de brigadistas y apoyo previsto. Después asigne herramientas con funciones claras y redundancia razonada. Un conjunto puede incluir McLeod para rastrillo y suelo, Pulaski para corte y excavación, rastrillo forestal para material superficial, batefuegos para remate apropiado y bomba de mochila donde haya agua y táctica autorizada.',
          'En este catálogo, Council Tool MT48 FSS y Truper MAC 17891 son opciones McLeod; Council Tool 38PE136 es Pulaski; Council Tool LW12-60 es rastrillo forestal; Council Tool FS15 es batefuegos; e Indian 90G es bomba de mochila. No presente estas referencias como una lista obligatoria: confirme el modelo, disponibilidad, manual y adecuación a la tarea antes de adquirir.',
          'Añada EPP forestal conforme al riesgo y con tallas reales. La NFPA 1950 se cita para EPP de incendio forestal y de interfaz urbano-forestal; herramientas manuales tienen especificaciones de fabricante distintas. Esta categoría no sustituye las guías de trajes, cascos o protección respiratoria. El responsable de seguridad debe documentar selección, entrega, mantenimiento y reposición de todos los componentes.',
        ],
      },
      {
        titulo: 'Normas, capacitación y seguridad en México',
        parrafos: [
          'Para EPP de incendio forestal, NFPA 1950 es una referencia publicada en esta categoría. Para herramientas, el criterio principal es el manual, la especificación del fabricante y el procedimiento de brigada. CONAFOR aporta referencias operativas sobre herramientas y prevención de incendios forestales, pero cada entidad debe seguir las reglas, autorizaciones, mando y protocolos que correspondan a su jurisdicción.',
          'La capacitación debe incluir reconocimiento de peligros, uso seguro de herramienta, comunicación, hidratación, prevención de lesiones, rutas de escape y zonas seguras. El equipo no habilita a una persona no entrenada para combatir fuego. Evite asignar tareas según la disponibilidad de una herramienta sin evaluar la experiencia, aptitud y condiciones del momento.',
          'La NOM-017-STPS-2024 orienta la gestión de EPP en centros de trabajo; compleméntela con el análisis de riesgo y disposiciones específicas de la operación. Mantenga inventario, responsables, registros de inspección y criterios de baja. No proclame certificación de una herramienta si su fabricante sólo publica una especificación distinta o si no hay evidencia del modelo ofrecido.',
        ],
      },
      {
        titulo: 'Mantenimiento y errores frecuentes de compra',
        parrafos: [
          'Inspeccione cada herramienta antes y después del uso. Busque cabezas flojas, filos dañados, dientes doblados, uniones desgastadas, mangos con grietas, corrosión o contaminación. Limpie y resguarde sin ocultar defectos. Registre los artículos que requieren servicio y sepárelos de la dotación disponible para que nadie los tome por error.',
          'Un error común es adquirir sólo herramientas y olvidar EPP, entrenamiento, comunicaciones o supervisión. Otro es usar una Pulaski como herramienta universal, un batefuegos en condiciones que exceden su aplicación o una bomba de mochila sin plan de recarga. El catálogo aporta referencias de producto; la selección final corresponde al análisis de riesgos de la brigada.',
          'No compre por nombre genérico. Solicite número de modelo, material, configuración, manual, accesorios y piezas de reemplazo. Consejo adicional: determine quién inspecciona, afila cuando se autorice, almacena y reporta daño. Una brigada conoce el estado de sus herramientas antes del incidente; no descubre fallas durante la primera intervención.',
          'Un control de inventario útil separa herramientas disponibles, en mantenimiento y retiradas de servicio. Registre modelo, número de identificación interno, condición del mango, cabeza o pala, responsable, último uso y observaciones. Haga una inspección de salida antes de movilizar y otra al retorno para limpiar, reportar daño y reponer accesorios. La planeación también debe prever cómo se transportan las herramientas sin que los filos o mangos creen riesgos dentro del vehículo o para la cuadrilla. En operaciones prolongadas, reasigne tareas según fatiga, terreno y supervisión, no sólo porque exista una Pulaski o un McLeod libre. Si el análisis operativo identifica fuego de comportamiento peligroso, combustibles complejos, visibilidad reducida o pérdida de rutas de escape, la prioridad es retirarse y comunicar la condición al mando. Una herramienta manual no compensa una situación que ha superado la capacidad táctica de la brigada.',
          'Las prácticas de pretemporada permiten revisar asignación, ergonomía, transporte, comunicación y mantenimiento sin presión de un incidente. Durante ellas, el responsable puede detectar si faltan protectores de filo, correas, repuestos o identificación. Mantenga una zona clara para resguardo de herramientas sucias y otra para material listo. La disciplina de devolver cada artículo a condición conocida reduce pérdidas y evita que un desperfecto pequeño se convierta en lesión. La seguridad del brigadista tiene prioridad sobre la productividad de una línea o la rapidez con que se mueve combustible.',
          'En cada movilización, comunique el responsable de inventario y el método para reportar una pérdida o daño. Una herramienta sin identificación no debe circular entre cuadrillas como si estuviera inspeccionada. La entrega ordenada facilita la reposición y permite conservar la trazabilidad de cada artículo durante toda la temporada.',
          'Revise que las herramientas elegidas correspondan a la tarea de ese día y no a una lista genérica. La combinación cambia con combustible, acceso, disponibilidad de agua y objetivo operativo. Consultar al mando antes de reasignar un implemento evita duplicación de esfuerzos y exposición innecesaria de la cuadrilla.',
          'Ajuste el plan si el escenario cambia durante el periodo operativo.',
          'Registre esa modificación y comuníquela a todas las personas involucradas.',
        ],
      },
    ],
    faqs: [
      { q: '¿Para qué sirve una herramienta McLeod?', a: 'Combina rastrillo y azadón para mover combustible superficial y trabajar suelo dentro de la técnica de brigada. Los modelos MT48 FSS y MAC 17891 publicados aquí deben revisarse con su ficha.' },
      { q: '¿Qué es una Pulaski?', a: 'Es una azahacha con hoja de hacha y azadón. CONAFOR la describe para labores como apertura de líneas, corte, excavación y remate, realizadas por personal capacitado.' },
      { q: '¿Cuándo se usa un batefuegos?', a: 'Se usa para sofocar llama superficial en condiciones adecuadas y bajo mando operativo. No debe emplearse cuando la propagación o el riesgo superan su aplicación.' },
      { q: '¿La bomba de mochila lleva sólo agua?', a: 'Use el contenido y procedimiento que autoricen el fabricante y el plan del incidente. No agregue agentes o sustancias sin esa validación.' },
      { q: '¿Qué EPP se necesita para incendio forestal?', a: 'La selección depende del análisis de riesgos y la tarea. Esta categoría enlaza con el EPP forestal disponible; confirme etiqueta, talla y norma del artículo específico.' },
      { q: '¿Qué herramientas forestales incluye el catálogo?', a: 'Incluye McLeod Council Tool y Truper, Pulaski, rastrillo forestal, batefuegos Council Tool y bomba de mochila Indian 90G. Revise modelo y manual antes de especificar.' },
    ],
    fuentes: [
      { titulo: 'CONAFOR — azahacha tipo Pulaski', url: 'https://conafor.gob.mx/biblioteca/documentos/DESCUBREME.pdf' },
      { titulo: 'Council Tool — McLeod MT48 FSS', url: 'https://counciltool.com/shop/firefighting/wildland-firefighting/mcleod-tool-48-wooden-handle/' },
      { titulo: 'Council Tool — Pulaski 38PE136 NFES', url: 'https://counciltool.com/shop/firefighting/fire-axes-firefighting/pulaski-axes-fire-axes-firefighting/3-75-pulaski-axe-fss-version/' },
      { titulo: 'Council Tool — Fire Swatter FS15', url: 'https://counciltool.com/shop/firefighting/wildland-firefighting/fire-swatter-60-wooden-handle/' },
      { titulo: 'Truper — McLeod MAC 17891', url: 'https://www.truper.com/ficha_tecnica/Rastrillo-McLeod-con-mango-de-madera-de-48-Truper.html?code=17891' },
    ],
  },
  {
    slug: 'drones-emergencia',
    shortDesc: 'Drones con cámara térmica para evaluación aérea, búsqueda y reconocimiento HAZMAT.',
    accent: '#34D399',
    icon: ``,
    label: 'Drones de Emergencia',
    norm: 'Certificación AFAC',
    description: 'Drones para bomberos y protección civil: térmicos DJI Matrice, búsqueda y rescate, evaluación de incendios. Capacitación de piloto y trámite AFAC incluidos.',
    intro: [
      'El dron se volvió herramienta estándar de la respuesta a emergencias: evaluación aérea de incendios estructurales y forestales, búsqueda de personas con cámara térmica, y reconocimiento HAZMAT sin exponer personal.',
      'Entregamos soluciones completas: aeronave con cámara térmica radiométrica, baterías de ciclo extendido, capacitación de piloto y acompañamiento en el registro ante AFAC para operación institucional.',
    ],
    items: [
      { name: 'DJI Matrice con térmica', detail: 'Plataforma institucional con cámara radiométrica' },
      { name: 'Drones compactos térmicos', detail: 'Despliegue en menos de 2 minutos' },
      { name: 'Accesorios de misión', detail: 'Altavoces, luces de búsqueda, lanzadores' },
      { name: 'Capacitación y AFAC', detail: 'Formación de piloto y registro institucional' },
    ],
    spotlight: {
      title: 'Drones de Emergencia con',
      highlight: 'cámara térmica y registro AFAC',
      paragraphs: [
        'El dron se volvió herramienta estándar de la primera respuesta: evaluación aérea de incendios estructurales y forestales, búsqueda de personas con cámara térmica radiométrica y reconocimiento HAZMAT sin exponer personal en la zona caliente.',
        'Entregamos soluciones completas listas para operar: aeronave DJI Matrice con sensor térmico, baterías de ciclo extendido, capacitación de piloto y acompañamiento en el registro ante AFAC para operación institucional legal.',
      ],
      subsections: [
        { name: 'Evaluación de incendios', detail: 'Vista cenital del avance del fuego, puntos calientes y rutas de ataque en estructural y forestal — en minutos, no horas.' },
        { name: 'Búsqueda y rescate térmico', detail: 'Sensor radiométrico que detecta firmas de calor humanas de noche, entre vegetación o en estructuras colapsadas.' },
        { name: 'Reconocimiento HAZMAT', detail: 'Lectura visual de fugas, derrames y placas de identificación a distancia segura antes de comprometer al equipo.' },
        { name: 'Capacitación y registro AFAC', detail: 'Formación de piloto institucional, protocolos de operación y trámite completo ante la autoridad aeronáutica.' },
      ],
      image: '/images/categorias/drones-emergencia.avif',
      imageAlt: 'Ilustración técnica de dron cuadricóptero con gimbal térmico detectando a una persona en búsqueda y rescate',
    },
  },
  {
    slug: 'senalizacion-emergencia',
    shortDesc: 'Señalamientos de seguridad, lámparas de emergencia y botiquines de primeros auxilios para centros de trabajo.',
    accent: '#34D399',
    icon: ``,
    label: 'Señalización y Emergencia',
    norm: 'NOM-026-STPS · NOM-003-SSPC · UL 924',
    description: 'Señalamientos de seguridad NOM-026 y NOM-003-SSPC, lámparas de emergencia UL 924 y botiquines de primeros auxilios para empresas en México.',
    intro: [
      'Señalización, iluminación de emergencia y primeros auxilios completan la protección contra incendio: permiten que las personas identifiquen el riesgo, encuentren la salida y reciban la primera atención.',
      'Suministramos señalamientos industriales y de protección civil (incluida la señalización fotoluminiscente Brady), lámparas de emergencia Lithonia y letreros de salida Sure-Lites listados UL 924, y botiquines First Aid Only conforme a ANSI/ISEA Z308.1.',
    ],
    items: [
      { name: 'Señalamientos de seguridad', detail: 'Señalización industrial y de protección civil, incluida la señalización fotoluminiscente Brady.' },
      { name: 'Lámparas de emergencia', detail: 'Lámparas Lithonia y letreros de salida Sure-Lites listados UL 924.' },
      { name: 'Botiquines de primeros auxilios', detail: 'Botiquines First Aid Only conforme a ANSI/ISEA Z308.1.' },
    ],
    productCategory: 'Señalización y Emergencia',
  },
];

/** Catálogo completo (incluye trajes-bombero) — para el hub /productos */
export const allCategories: Category[] = [trajesBombero, ...categories];
