// cobertura.ts — Estados con cobertura de entrega de FIREFIGHTERS MX
// Alimenta:
//   • /cobertura.astro        → tabla de estados con links
//   • /cobertura/[estado].astro → landing individual SEO por estado
// ─────────────────────────────────────────────────────────────────────

export interface Estado {
  /** Slug para URL: /cobertura/[slug] */
  slug: string;
  /** Nombre completo del estado */
  name: string;
  /** Capital o ciudad principal */
  capital: string;
  /** Tiempo de entrega estimado */
  dias: string;
  /** ¿Envío express disponible? */
  express: boolean;
  /** Descripción corta (card del índice ≤100 chars) */
  description: string;
  /** Párrafos de contenido para la landing individual */
  longDesc: string[];
  /** Sectores industriales destacados del estado */
  industries: string[];
  /** Cuerpos de bomberos / organismos de PC representativos */
  bomberos: string[];
}

export const estados: Estado[] = [
  // ── ZONA METROPOLITANA CDMX (Express) ──────────────────────────────
  {
    slug: 'ciudad-de-mexico',
    name: 'Ciudad de México',
    capital: 'Ciudad de México',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Servicio en sitio disponible. Sede operativa principal.',
    longDesc: [
      'La Ciudad de México es nuestra sede principal de operaciones. Entregamos equipo para bomberos en las 16 alcaldías con tiempo express de 24 a 48 horas en días hábiles. Para pedidos urgentes o licitaciones con entrega inmediata, coordinamos despacho el mismo día.',
      'La demanda de la entidad la marcan el H. Cuerpo de Bomberos de la CDMX, las brigadas industriales de Azcapotzalco e Iztapalapa, los aeropuertos Felipe Ángeles (AIFA) y Benito Juárez (AICM), y hospitales, hoteles y empresas obligadas a cumplir la NOM-002-STPS-2010. A ello se suman los organismos de Protección Civil de las 16 alcaldías, que requieren equipo de respuesta rápida.',
    ],
    industries: [
      'Cuerpos de bomberos CDMX',
      'Aeropuertos AICM y AIFA',
      'Hospitales y clínicas',
      'Hoteles y centros de convenciones',
      'Brigadas industriales Azcapotzalco',
      'Gobierno federal y del DF',
      'Licitaciones CompraNet',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de la Ciudad de México',
      'Brigada de Rescate del Metro (STCM)',
      'Cuerpos de bomberos delegacionales',
    ],
  },
  {
    slug: 'estado-de-mexico',
    name: 'Estado de México',
    capital: 'Toluca',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Zona metropolitana y corredor industrial Toluca.',
    longDesc: [
      'El Estado de México es la entidad federativa con el mayor número de municipios en México y alberga el corredor industrial más grande del país: Toluca, Lerma, Tlalnepantla, Naucalpan, Ecatepec e Ixtapaluca. Entregamos equipo para bomberos y brigadas industriales en toda la entidad con tiempo express de 24 a 48 horas.',
      'En la entidad operan cuerpos de bomberos municipales en Toluca, Ecatepec, Naucalpan, Tlalnepantla y una veintena de ayuntamientos más, además de las brigadas industriales del corredor Toluca-Lerma, el aeropuerto de Toluca (AIT) y los organismos de Protección Civil del Estado de México. Damos soporte documental para licitaciones por CompraNet y por ayuntamiento.',
    ],
    industries: [
      'Corredor industrial Toluca-Lerma',
      'Parques industriales Naucalpan y Tlalnepantla',
      'H. Cuerpos de Bomberos municipales',
      'Aeropuerto Internacional de Toluca',
      'Gobierno del Estado de México',
      'Sector automotriz',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Toluca',
      'H. Cuerpo de Bomberos de Naucalpan',
      'H. Cuerpo de Bomberos de Tlalnepantla',
      'H. Cuerpo de Bomberos de Ecatepec',
    ],
  },
  {
    slug: 'queretaro',
    name: 'Querétaro',
    capital: 'Santiago de Querétaro',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Corredor aeroespacial y automotriz.',
    longDesc: [
      'Querétaro es el estado con mayor crecimiento industrial de México y sede del corredor aeroespacial más importante del país. Sus parques industriales albergan plantas de Bombardier, Safran, Airbus y decenas de proveedores de primer nivel — todos con obligación de brigadas industriales bajo la NOM-002-STPS-2010 y estándares NFPA de sus matrices internacionales.',
      'Entregamos equipo para bomberos y brigadas industriales en Querétaro ciudad, Corregidora, El Marqués y San Juan del Río. Soporte para licitaciones del H. Ayuntamiento de Querétaro y la Secretaría de Protección Civil estatal.',
    ],
    industries: [
      'Industria aeroespacial (Bombardier, Safran, Airbus)',
      'Sector automotriz y autopartes',
      'Parques industriales El Marqués y Bernardo Quintana',
      'H. Cuerpo de Bomberos de Querétaro',
      'Logística y distribución',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Querétaro',
      'Brigadas municipales Corregidora y El Marqués',
    ],
  },
  {
    slug: 'hidalgo',
    name: 'Hidalgo',
    capital: 'Pachuca',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Corredor Pachuca-CDMX y zona minera.',
    longDesc: [
      'Hidalgo combina industria minera, química (Tula-Tepeji) y una creciente zona industrial en la región de Apan y Pachuca. La refinería de Tula y el corredor petroquímico requieren brigadas industriales con equipo HAZMAT y doble estándar NOM-002-STPS y NFPA.',
      'Entregamos equipo para bomberos y brigadas industriales en toda la entidad con tiempo express desde CDMX. Soporte para licitaciones de H. Ayuntamientos y la Secretaría de Protección Civil de Hidalgo.',
    ],
    industries: [
      'Refinería Miguel Hidalgo (Tula)',
      'Corredor petroquímico Tula-Tepeji',
      'Industria minera',
      'Parque industrial Apan',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Pachuca',
      'Brigadas PEMEX Tula',
    ],
  },
  {
    slug: 'morelos',
    name: 'Morelos',
    capital: 'Cuernavaca',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Corredor industrial y turismo.',
    longDesc: [
      'Morelos es el estado con mayor densidad poblacional de México y un importante corredor industrial en Cuautla y Jiutepec. Su cercanía con la CDMX permite entrega express en 24 a 48 horas para cuerpos de bomberos, brigadas y establecimientos turísticos que requieren cumplir con Protección Civil.',
      'La demanda local la concentran el H. Cuerpo de Bomberos de Cuernavaca, las brigadas de hoteles y centros de convenciones, y los organismos de Protección Civil municipales.',
    ],
    industries: [
      'Parque industrial Cuautla-Ayala',
      'Hoteles y turismo en Cuernavaca',
      'Brigadas industriales Jiutepec',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Cuernavaca',
      'H. Cuerpo de Bomberos de Jiutepec',
    ],
  },
  {
    slug: 'tlaxcala',
    name: 'Tlaxcala',
    capital: 'Tlaxcala de Xicohténcatl',
    dias: '24–48 hrs',
    express: true,
    description: 'Entrega express 24–48 hrs. Zona industrial textil y manufacturera.',
    longDesc: [
      'Tlaxcala alberga importantes parques industriales en San Martín Texmelucan y Xicohtzinco, con presencia de empresas del sector textil, automotriz y de manufactura. El cumplimiento NOM-002-STPS es obligatorio para todas las empresas con trabajadores.',
      'Entregamos equipo para brigadas industriales y cuerpos de bomberos en toda la entidad con tiempo express. Soporte para licitaciones municipales.',
    ],
    industries: [
      'Industria textil y confección',
      'Parques industriales San Martín Texmelucan',
      'Manufactura y autopartes',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Tlaxcala',
    ],
  },

  // ── ZONA OCCIDENTAL Y NORTE (2–3 días) ─────────────────────────────
  {
    slug: 'jalisco',
    name: 'Jalisco',
    capital: 'Guadalajara',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Segundo mercado de bomberos más grande de México.',
    longDesc: [
      'Jalisco es el estado con el segundo cuerpo de bomberos más importante de México. El H. Cuerpo de Bomberos de Guadalajara opera más de 20 estaciones y constantemente renueva equipo NFPA 1970. El corredor industrial del municipio de El Salto, el Puerto de Manzanillo (Colima, con cobertura compartida) y la industria tequilera de Los Altos generan demanda de brigadas industriales y extintores clase B y K.',
      'Entregamos equipo para bomberos y brigadas en Guadalajara, Zapopan, Tlaquepaque, Tonalá, Puerto Vallarta y toda la ZMG. Soporte para licitaciones del H. Ayuntamiento de Guadalajara, los 125 municipios de Jalisco y la Secretaría de Protección Civil estatal.',
    ],
    industries: [
      'H. Cuerpo de Bomberos de Guadalajara',
      'Industria tequilera Los Altos (HAZMAT etanol)',
      'Corredor industrial El Salto y Ocotlán',
      'Aeropuerto Internacional Miguel Hidalgo',
      'Hoteles y turismo Puerto Vallarta',
      'Sector electrónico y logístico ZMG',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Guadalajara',
      'H. Cuerpo de Bomberos de Zapopan',
      'H. Cuerpo de Bomberos de Tlaquepaque',
    ],
  },
  {
    slug: 'nuevo-leon',
    name: 'Nuevo León',
    capital: 'Monterrey',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Capital industrial de México. Empresas con auditoría NFPA.',
    longDesc: [
      'Nuevo León es la capital industrial de México y el estado donde las empresas multinacionales exigen con mayor frecuencia el doble estándar NOM-002-STPS y NFPA 1 / NFPA 10 en sus auditorías de seguros. Los parques industriales de Apodaca, Santa Catarina y General Escobedo concentran empresas de clase mundial que requieren brigadas con EPP de alto desempeño y sistemas de detección certificados.',
      'Entregamos equipo en toda la ZMM (Monterrey, Apodaca, Santa Catarina, Escobedo, García, San Pedro y más de 25 municipios conurbados). Soporte para licitaciones del H. Cuerpo de Bomberos de Monterrey, cuerpos municipales y licitaciones de organismos descentralizados del gobierno de Nuevo León.',
    ],
    industries: [
      'Parques industriales Apodaca y Santa Catarina',
      'Siderurgia (Ternium, Deacero)',
      'H. Cuerpo de Bomberos de Monterrey',
      'Aeropuerto Internacional del Norte',
      'Industria de manufactura y autopartes',
      'Auditorías NFPA de aseguradoras internacionales',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Monterrey',
      'H. Cuerpo de Bomberos de San Pedro Garza García',
      'H. Cuerpo de Bomberos de Apodaca',
    ],
  },
  {
    slug: 'puebla',
    name: 'Puebla',
    capital: 'Puebla de Zaragoza',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Industria automotriz Volkswagen y corredor Puebla-Tlaxcala.',
    longDesc: [
      'Puebla alberga la planta automotriz de Volkswagen, el mayor fabricante de autos en México, y un extenso corredor industrial en el municipio de San Martín Texmelucan y el polígono Audi en San José Chiapa. Las empresas de primer nivel automotriz exigen brigadas industriales con equipo NFPA y cumplimiento de la NOM-002-STPS-2010.',
      'Entregamos equipo para bomberos y brigadas en Puebla capital, Atlixco, Tehuacán, San Martín y toda la entidad. Soporte para licitaciones del H. Ayuntamiento de Puebla y la Secretaría de Protección Civil estatal.',
    ],
    industries: [
      'Planta Volkswagen México',
      'Planta Audi México San José Chiapa',
      'Corredor industrial Puebla-Tlaxcala',
      'H. Cuerpo de Bomberos de Puebla',
      'Industria textil y química',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de Puebla',
      'H. Cuerpo de Bomberos de San Martín Texmelucan',
    ],
  },
  {
    slug: 'guanajuato',
    name: 'Guanajuato',
    capital: 'Guanajuato',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Corredor automotriz Silao-Irapuato y minería.',
    longDesc: [
      'Guanajuato alberga el Bajío Automotriz más importante de América Latina, con plantas de General Motors en Silao, Toyota en Apaseo el Grande y Honda en Celaya, además de decenas de proveedores Tier 1 y Tier 2. Todas exigen brigadas industriales con equipo NFPA auditado por sus matrices japonesas y americanas.',
      'Entregamos equipo para brigadas industriales y cuerpos de bomberos en León, Irapuato, Celaya, Silao y toda la entidad. Soporte para licitaciones de H. Ayuntamientos y la Secretaría de Protección Civil de Guanajuato.',
    ],
    industries: [
      'Plantas automotrices GM, Toyota, Honda',
      'Bajío Automotriz — Tier 1 y Tier 2',
      'Industria del calzado León',
      'Minería en Guanajuato capital',
      'Agroindustria Irapuato',
    ],
    bomberos: [
      'H. Cuerpo de Bomberos de León',
      'H. Cuerpo de Bomberos de Irapuato',
      'H. Cuerpo de Bomberos de Celaya',
    ],
  },
  {
    slug: 'san-luis-potosi',
    name: 'San Luis Potosí',
    capital: 'San Luis Potosí',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Corredor industrial y minería.',
    longDesc: [
      'San Luis Potosí cuenta con un importante corredor industrial en la capital y en Rioverde, con presencia de empresas de manufactura, minería y logística. La zona industrial Tres Naciones alberga empresas que requieren brigadas industriales certificadas.',
      'Entregamos equipo para bomberos y brigadas en San Luis Potosí capital, Ciudad Valles, Rioverde y el resto de los municipios.',
    ],
    industries: ['Corredor industrial SLP', 'Minería', 'Manufactura y logística'],
    bomberos: ['H. Cuerpo de Bomberos de San Luis Potosí'],
  },
  {
    slug: 'michoacan',
    name: 'Michoacán',
    capital: 'Morelia',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Sector agroindustrial y acero.',
    longDesc: [
      'Michoacán destaca por el sector aguacatero, la siderurgia de Lázaro Cárdenas (ArcelorMittal) y un importante corredor agroindustrial en Uruapan y La Piedad. Las plantas de acero y agroindustria requieren brigadas industriales con doble estándar NOM-002-STPS y NFPA.',
      'Entregamos equipo en Morelia, Lázaro Cárdenas, Uruapan, Apatzingán y municipios del estado.',
    ],
    industries: ['Siderurgia Lázaro Cárdenas (ArcelorMittal)', 'Agroindustria aguacate', 'Puerto Lázaro Cárdenas'],
    bomberos: ['H. Cuerpo de Bomberos de Morelia', 'H. Cuerpo de Bomberos de Lázaro Cárdenas'],
  },
  {
    slug: 'aguascalientes',
    name: 'Aguascalientes',
    capital: 'Aguascalientes',
    dias: '2–3 días',
    express: false,
    description: 'Entrega 2–3 días. Corredor automotriz Nissan y manufactura.',
    longDesc: [
      'Aguascalientes es el estado con mayor densidad de industria automotriz por kilómetro cuadrado en México. La planta Nissan y decenas de proveedores automotrices exigen brigadas industriales auditadas con estándares japoneses (JIS) y americanos (NFPA).',
      'Entregamos equipo en Aguascalientes capital y los municipios aledaños del corredor industrial.',
    ],
    industries: ['Planta Nissan Aguascalientes', 'Proveedores automotrices', 'Manufactura textil y electrodomésticos'],
    bomberos: ['H. Cuerpo de Bomberos de Aguascalientes'],
  },

  // ── ZONA NORTE (3–4 días) ───────────────────────────────────────────
  {
    slug: 'zacatecas',
    name: 'Zacatecas',
    capital: 'Zacatecas',
    dias: '2–4 días',
    express: false,
    description: 'Entrega 2–4 días. Sector minero y agroindustrial.',
    longDesc: [
      'Zacatecas es el estado minero más importante de México: plata, zinc, plomo y oro provienen en gran parte de sus yacimientos. Las minas subterráneas y superficiales exigen equipo de rescate minero, brigadas contra incendio certificadas y equipo HAZMAT para gases en túneles.',
      'Entregamos equipo para brigadas mineras y cuerpos de bomberos en Zacatecas, Fresnillo, Guadalupe y los principales municipios mineros.',
    ],
    industries: ['Minería de plata, zinc y plomo', 'Agroindustria frijol y chile', 'Turismo Zacatecas'],
    bomberos: ['H. Cuerpo de Bomberos de Zacatecas', 'Brigadas de rescate minero'],
  },
  {
    slug: 'coahuila',
    name: 'Coahuila',
    capital: 'Saltillo',
    dias: '3–4 días',
    express: false,
    description: 'Entrega 3–4 días. Capital automotriz del norte y siderurgia.',
    longDesc: [
      'Coahuila alberga la mayor concentración de plantas automotrices del norte de México en Saltillo y Ramos Arizpe: Chrysler, General Motors y Toyota. También es el estado siderúrgico más importante del país, con AHMSA en Monclova. Todas estas plantas exigen brigadas industriales con doble estándar NOM-002-STPS y NFPA auditado por sus matrices internacionales.',
      'Entregamos equipo en Saltillo, Monclova, Torreón, Ramos Arizpe y toda la entidad.',
    ],
    industries: ['Plantas automotrices Saltillo (Chrysler, GM, Toyota)', 'Siderurgia AHMSA Monclova', 'Región Laguna (Torreón)'],
    bomberos: ['H. Cuerpo de Bomberos de Saltillo', 'H. Cuerpo de Bomberos de Torreón', 'Brigadas AHMSA'],
  },
  {
    slug: 'veracruz',
    name: 'Veracruz',
    capital: 'Xalapa',
    dias: '3–4 días',
    express: false,
    description: 'Entrega 3–4 días. Puerto de mayor movimiento en México y petroquímica.',
    longDesc: [
      'Veracruz alberga el puerto de mayor movimiento de carga de México y el Complejo Petroquímico de Pajaritos (Coatzacoalcos-Poza Rica), que concentra la mayor densidad de riesgo HAZMAT del país. Las plantas de PEMEX, gas natural y derivados exigen brigadas industriales con equipo NFPA 1990 (HAZMAT) y doble estándar.',
      'Entregamos equipo en Veracruz ciudad, Coatzacoalcos, Poza Rica, Xalapa, Córdoba y toda la entidad.',
    ],
    industries: ['Puerto de Veracruz (el mayor de México)', 'Complejo petroquímico Coatzacoalcos', 'PEMEX Poza Rica', 'Industria papelera y química'],
    bomberos: ['H. Cuerpo de Bomberos de Veracruz', 'H. Cuerpo de Bomberos de Coatzacoalcos', 'Brigadas PEMEX'],
  },
  {
    slug: 'tamaulipas',
    name: 'Tamaulipas',
    capital: 'Ciudad Victoria',
    dias: '3–4 días',
    express: false,
    description: 'Entrega 3–4 días. Industria maquiladora fronteriza y petróleo.',
    longDesc: [
      'Tamaulipas concentra la mayor industria maquiladora del noreste en Matamoros, Reynosa y Nuevo Laredo. Las matrices americanas de estas plantas exigen auditorías NFPA regulares y brigadas certificadas con EPP conforme a OSHA/NFPA.',
      'Entregamos equipo en Tampico, Matamoros, Reynosa, Nuevo Laredo y Ciudad Victoria.',
    ],
    industries: ['Maquiladoras Matamoros, Reynosa y Nuevo Laredo', 'PEMEX Tampico', 'Logística fronteriza'],
    bomberos: ['H. Cuerpo de Bomberos de Tampico', 'H. Cuerpo de Bomberos de Matamoros'],
  },
  {
    slug: 'colima',
    name: 'Colima',
    capital: 'Colima',
    dias: '3–4 días',
    express: false,
    description: 'Entrega 3–4 días. Puerto de Manzanillo y agroindustria.',
    longDesc: [
      'Colima alberga el Puerto de Manzanillo, el segundo más importante de México para contenedores. Las terminales portuarias, las plantas generadoras y la industria de Tecomán requieren brigadas industriales y equipo contra incendio certificado.',
      'Entregamos equipo en Manzanillo, Colima capital y Tecomán.',
    ],
    industries: ['Puerto de Manzanillo', 'Agroindustria limón y copra', 'Turismo Manzanillo'],
    bomberos: ['H. Cuerpo de Bomberos de Colima', 'H. Cuerpo de Bomberos de Manzanillo'],
  },

  // ── ZONA NOROESTE Y SURESTE (3–5 días) ─────────────────────────────
  {
    slug: 'baja-california',
    name: 'Baja California',
    capital: 'Mexicali',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Maquiladoras con auditorías NFPA frecuentes.',
    longDesc: [
      'Baja California es el estado fronterizo con mayor número de empresas con auditorías NFPA en México, por la cercanía con California. Tijuana y Mexicali concentran cientos de maquiladoras de electrónicos, médicos y autopartes cuyos corporativos exigen brigadas industriales con doble estándar NOM-002-STPS y NFPA / Cal-OSHA.',
      'Entregamos equipo en Tijuana, Mexicali, Ensenada y toda la entidad. Soporte para licitaciones municipales y estatales.',
    ],
    industries: ['Maquiladoras electrónicas Tijuana y Mexicali', 'Dispositivos médicos', 'Sector aeroespacial Tijuana', 'Vitivinicultura Valle de Guadalupe'],
    bomberos: ['H. Cuerpo de Bomberos de Tijuana', 'H. Cuerpo de Bomberos de Mexicali'],
  },
  {
    slug: 'chihuahua',
    name: 'Chihuahua',
    capital: 'Chihuahua',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Industria maquiladora y minería.',
    longDesc: [
      'Chihuahua es el estado más grande de México y el tercero en industria maquiladora. Ciudad Juárez concentra más de 300 maquiladoras de autopartes y electrónicos con auditorías NFPA de sus matrices americanas y japonesas. La minería en Sierra Tarahumara exige brigadas de rescate con equipo HAZMAT.',
      'Entregamos equipo en Chihuahua capital, Ciudad Juárez, Delicias y Parral.',
    ],
    industries: ['Maquiladoras Ciudad Juárez', 'Minería Sierra Tarahumara', 'Agroindustria Delicias'],
    bomberos: ['H. Cuerpo de Bomberos de Chihuahua', 'H. Cuerpo de Bomberos de Ciudad Juárez'],
  },
  {
    slug: 'sonora',
    name: 'Sonora',
    capital: 'Hermosillo',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Industria automotriz Ford y minería.',
    longDesc: [
      'Sonora alberga la planta de Ford en Hermosillo y una extensa industria minera (cobre, plata, oro) en Cananea, Nacozari y la Sierra Sonora. La planta Ford y sus proveedores exigen brigadas industriales con estándar NFPA. Las minas de cobre a tajo abierto requieren brigadas con equipo HAZMAT para gases en tiros y explosivos.',
      'Entregamos equipo en Hermosillo, Nogales, Ciudad Obregón y toda la entidad.',
    ],
    industries: ['Planta Ford Hermosillo', 'Minería de cobre Cananea y Nacozari', 'Agroindustria Valle del Yaqui'],
    bomberos: ['H. Cuerpo de Bomberos de Hermosillo', 'H. Cuerpo de Bomberos de Nogales'],
  },
  {
    slug: 'sinaloa',
    name: 'Sinaloa',
    capital: 'Culiacán',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Agroindustria y pesca industrial.',
    longDesc: [
      'Sinaloa es el estado agroindustrial más importante de México: tomate, chile, pepino y una floreciente industria pesquera en Mazatlán y Guaymas. Las plantas empacadoras y cámaras frías requieren extintores clase K y sistemas de supresión para instalaciones refrigeradas.',
      'Entregamos equipo en Culiacán, Mazatlán, Los Mochis y toda la entidad.',
    ],
    industries: ['Agroindustria y horticultura', 'Puerto de Mazatlán', 'Pesca industrial'],
    bomberos: ['H. Cuerpo de Bomberos de Culiacán', 'H. Cuerpo de Bomberos de Mazatlán'],
  },
  {
    slug: 'oaxaca',
    name: 'Oaxaca',
    capital: 'Oaxaca de Juárez',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Turismo, agroindustria y energía eólica.',
    longDesc: [
      'Oaxaca concentra la mayor instalación de parques eólicos de México en el Istmo de Tehuantepec, además de un creciente sector turístico en la capital y Costa. Los hoteles y los parques eólicos requieren brigadas industriales y extintores certificados.',
      'Entregamos equipo en Oaxaca capital, Salina Cruz, Tehuantepec y el Istmo.',
    ],
    industries: ['Parques eólicos Istmo de Tehuantepec', 'Turismo y hotelería', 'Agroindustria mezcal y café'],
    bomberos: ['H. Cuerpo de Bomberos de Oaxaca'],
  },
  {
    slug: 'yucatan',
    name: 'Yucatán',
    capital: 'Mérida',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Turismo, maquiladoras y parque industrial.',
    longDesc: [
      'Yucatán ha crecido aceleradamente en industria maquiladora y logística por su posición estratégica en el sureste. Su parque industrial en Mérida alberga empresas de manufactura con exigencias NOM-002-STPS. El sector turístico (Mérida, Uxmal, Izamal) requiere equipamiento de hoteles y centros de convenciones.',
      'Entregamos equipo en Mérida, Progreso y el resto de los municipios de Yucatán.',
    ],
    industries: ['Parque industrial Mérida', 'Maquiladoras textiles', 'Turismo cultural y de playa'],
    bomberos: ['H. Cuerpo de Bomberos de Mérida'],
  },
  {
    slug: 'quintana-roo',
    name: 'Quintana Roo',
    capital: 'Chetumal',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Turismo y hotelería Cancún-Riviera Maya.',
    longDesc: [
      'Quintana Roo es el estado turístico más importante de México. La zona hotelera de Cancún, la Riviera Maya y Tulum concentran cientos de hoteles, resorts y condominios con obligación de cumplir con Protección Civil y la normatividad de extintores, detección y señalización.',
      'Entregamos equipo en Cancún, Playa del Carmen, Tulum y Chetumal.',
    ],
    industries: ['Hotelería y turismo Cancún-Riviera Maya', 'Parques temáticos', 'Inmobiliario y construcción'],
    bomberos: ['H. Cuerpo de Bomberos de Cancún', 'H. Cuerpo de Bomberos de Playa del Carmen'],
  },
  {
    slug: 'tabasco',
    name: 'Tabasco',
    capital: 'Villahermosa',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. PEMEX y petroquímica.',
    longDesc: [
      'Tabasco es el corazón del petróleo de México: PEMEX Exploración y Producción, PEMEX Gas y la Refinería Carlos A. Madrazo están en esta entidad. Las instalaciones petroleras exigen brigadas industriales con equipo NFPA 1990 (HAZMAT), SCBA con autonomía extendida y trajes de proximidad.',
      'Entregamos equipo en Villahermosa, Comalcalco y los campos petroleros de Tabasco.',
    ],
    industries: ['PEMEX Exploración y Producción', 'Refinería y plataformas', 'Agroindustria cacao y plátano'],
    bomberos: ['H. Cuerpo de Bomberos de Villahermosa', 'Brigadas PEMEX Tabasco'],
  },
  {
    slug: 'guerrero',
    name: 'Guerrero',
    capital: 'Chilpancingo',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Turismo Acapulco e Ixtapa.',
    longDesc: [
      'Guerrero es un estado con importante industria turística en Acapulco, Ixtapa y Zihuatanejo. Los hoteles, resorts y centros de convenciones requieren extintores, señalización y sistemas de detección actualizados. La reconstrucción del estado después del huracán Otis en 2023 ha generado una demanda adicional de equipamiento contra incendio para obras y nuevos desarrollos.',
      'Entregamos equipo en Acapulco, Chilpancingo, Iguala e Ixtapa.',
    ],
    industries: ['Turismo Acapulco e Ixtapa', 'Construcción y reconstrucción post-Otis', 'Minería en Tierra Caliente'],
    bomberos: ['H. Cuerpo de Bomberos de Acapulco', 'H. Cuerpo de Bomberos de Chilpancingo'],
  },
  {
    slug: 'durango',
    name: 'Durango',
    capital: 'Victoria de Durango',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Industria forestal y minería.',
    longDesc: [
      'Durango es el estado con mayor superficie forestal de México y una importante industria minera. Las plantas de aserradero, fabricación de muebles y minería requieren brigadas contra incendio forestal y extintores de clase A y D para virutas de madera y polvo metálico.',
      'Entregamos equipo en Durango capital, Gómez Palacio y Ciudad Lerdo.',
    ],
    industries: ['Industria forestal y maderera', 'Minería', 'Región Laguna (Gómez Palacio)'],
    bomberos: ['H. Cuerpo de Bomberos de Durango'],
  },
  {
    slug: 'nayarit',
    name: 'Nayarit',
    capital: 'Tepic',
    dias: '3–5 días',
    express: false,
    description: 'Entrega 3–5 días. Turismo Riviera Nayarit y agroindustria.',
    longDesc: [
      'Nayarit concentra el turismo de la Riviera Nayarit (Sayulita, Punta de Mita, San Pancho) y una importante agroindustria tabacalera, cañera y de berries. Los hoteles y desarrollos de la Riviera requieren cumplir con Protección Civil y la normatividad de extintores y señalización.',
      'Entregamos equipo en Tepic, Bahía de Banderas y La Peñita de Jaltemba.',
    ],
    industries: ['Turismo Riviera Nayarit', 'Agroindustria tabacalera y cañera', 'Pesca comercial'],
    bomberos: ['H. Cuerpo de Bomberos de Tepic'],
  },

  // ── ZONA SUR Y YUCATÁN (4–7 días) ──────────────────────────────────
  {
    slug: 'campeche',
    name: 'Campeche',
    capital: 'San Francisco de Campeche',
    dias: '4–5 días',
    express: false,
    description: 'Entrega 4–5 días. Plataformas PEMEX en el Golfo.',
    longDesc: [
      'Campeche alberga las plataformas petroleras offshore más importantes de México en la Sonda de Campeche (Ku-Maloob-Zaap, el campo con mayor producción del país). Las brigadas de rescate y contra incendio en plataformas marinas exigen equipo NFPA 1990 de clase 3 o 4 y SCBA con autonomía extendida.',
      'Entregamos equipo en Campeche capital, Ciudad del Carmen y los puntos logísticos para abastecimiento de plataformas.',
    ],
    industries: ['Plataformas petroleras offshore PEMEX', 'Pesca de camarón', 'Puerto de Ciudad del Carmen'],
    bomberos: ['H. Cuerpo de Bomberos de Campeche', 'Brigadas PEMEX Ciudad del Carmen'],
  },
  {
    slug: 'chiapas',
    name: 'Chiapas',
    capital: 'Tuxtla Gutiérrez',
    dias: '4–6 días',
    express: false,
    description: 'Entrega 4–6 días. Hidroeléctricas y turismo.',
    longDesc: [
      'Chiapas alberga las hidroeléctricas más grandes de México (Manuel Moreno Torres-Chicoasén, Malpaso, La Angostura), que requieren brigadas industriales con equipo especializado en instalaciones eléctricas y riesgo hidroeléctrico. El turismo en San Cristóbal de las Casas, Palenque y Chiapa de Corzo también genera demanda de equipamiento de hoteles y centros de convenciones.',
      'Entregamos equipo en Tuxtla Gutiérrez, San Cristóbal de las Casas, Tapachula y Palenque.',
    ],
    industries: ['Hidroeléctricas CFE', 'Turismo San Cristóbal y Palenque', 'Agroindustria café y cacao'],
    bomberos: ['H. Cuerpo de Bomberos de Tuxtla Gutiérrez', 'H. Cuerpo de Bomberos de Tapachula'],
  },
  {
    slug: 'baja-california-sur',
    name: 'Baja California Sur',
    capital: 'La Paz',
    dias: '5–7 días',
    express: false,
    description: 'Entrega 5–7 días. Turismo Los Cabos y pesca.',
    longDesc: [
      'Baja California Sur es el estado turístico del Pacífico norte, con una concentración de hoteles de lujo en Los Cabos (Cabo San Lucas y San José del Cabo) que exigen cumplimiento con Protección Civil y los estándares internacionales de las cadenas hoteleras (NFPA 1, NFPA 72). La distancia requiere planificación anticipada del pedido.',
      'Entregamos equipo en La Paz, Cabo San Lucas, San José del Cabo y Loreto. Recomendamos anticipar el pedido al menos 5 días hábiles antes de la fecha requerida.',
    ],
    industries: ['Turismo de lujo Los Cabos', 'Pesca comercial La Paz', 'Acuicultura'],
    bomberos: ['H. Cuerpo de Bomberos de La Paz', 'H. Cuerpo de Bomberos de Los Cabos'],
  },
];
