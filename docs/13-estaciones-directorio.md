# 13 — Directorio de Estaciones (playbook + modelo de datos + bitácora)

> Referencia maestra del directorio nacional de cuerpos de bomberos. Define el **modelo de datos**, el **estándar de calidad**, las **fuentes válidas/prohibidas**, el **proceso paso a paso** por estado, la **bitácora** de lo hecho y el **roadmap** para profesionalizar.
> Última actualización: 2026-06-23.

Relacionado: [[12-estaciones-tracking]] (tracker vivo) · [[02-arquitectura]] · [[03-plantilla-pagina]] · [[04-seo]] · [[06-interlinking]]

## Propósito

Directorio SEO geo-localizado de los cuerpos de bomberos de México (municipal, estatal, industrial, PEMEX, CFE, aeropuerto/ARFF, voluntarios). Captura búsquedas tipo "bomberos en {estado}" y posiciona a FIREFIGHTERS MX como referente; cada estado es una landing con todas sus corporaciones en cards.

## Arquitectura

| Pieza | Ruta | Rol |
|---|---|---|
| Datos | `src/data/estaciones.ts` | **Fuente única de verdad**. `estados[]` con `estaciones[]` por estado |
| Tipos | `estaciones.ts` | `EstacionBomberos`, `EstadoDirectorio`, `TipoEstacion`, `Region`, `tipoConfig` (color por tipo) |
| Índice | `/estaciones` (`index.astro`) | Cards por estado; `EstadoCard` autogenera la descripción desde los datos |
| Detalle | `/estaciones/[estado].astro` | Todas las estaciones en cards + **filtro por tipo + buscador** + badge de confianza + link a ficha + stats + marco normativo + cross-links |
| Ficha L3 | `/estaciones/[estado]/[slug].astro` | Página por corporación: contacto, **mapa**, fuentes citadas, badge de confianza, schema **FireStation** (geo) |
| Tracker | `docs/12-estaciones-tracking.md` | Estado de avance (✅/⬜) y matriz de cobertura |

Helpers en `estaciones.ts`: `totalEstaciones`, `totalEstados`, `todasLasEstaciones`, `estadoPorSlug()`, `estacionesPorTipo()`.

## Modelo de datos actual (`EstacionBomberos`)

| Campo | Oblig. | Regla |
|---|:--:|---|
| `id` | ✅ | `<abr>-NN` (p. ej. `cam-05`) |
| `nombre` | ✅ | Nombre oficial de la corporación |
| `slug` | ✅ | Derivado del nombre; único dentro del estado |
| `estado` / `ciudad` / `municipio` | ✅ | Geografía real |
| `tipo` | ✅ | `Municipal` · `Estatal` · `Industrial` · `Aeropuerto` · `PEMEX` · `CFE` · `Voluntarios` |
| `direccion` | ⚪ | Solo si es del **cuartel** y está en fuente oficial (no la del ayuntamiento) |
| `telefono` | ⚪ | Solo verificado en fuente oficial |
| `telefonoEmergencias` | ⚪ | Número local publicado; si no, `911` |
| `servicios` | ✅ | Lista específica y realista |
| `certificaciones` | ⚪ | Solo si la fuente lo **documenta** (rara vez público en MX) |
| `descripcion` | ⚪ | 1-2 frases profesionales para las corporaciones principales |
| `fundacion` | ⚪ | Año, solo verificado |
| `activa` | ✅ | `true` |
| `coordenadas` | ⚪ | `{lat,lng}` para mapa Leaflet (ver limitación de geocoding) |
| `sitioWeb` / `redes` | ⚪ | URL oficial / redes sociales |
| `fuentes` | ⚪ | URLs de fuentes oficiales que respaldan el registro |
| `verificadoEl` | ⚪ | `YYYY-MM` de la última verificación |
| `confianza` | ⚪ | `alta` · `media` · `baja` → badge editorial (`confianzaConfig`) |
| `telefonosAdicionales` | ⚪ | Otras líneas de contacto verificadas |
| `email` | ⚪ | Correo de contacto oficial (mailto en ficha) |
| `operador` | ⚪ | Organismo que opera la unidad (ARFF/puerto/PEMEX/CFE) |

## Estándar de calidad — "verificable-only"

1. **Exactitud sobre completitud.** Campo sin fuente confiable = **omitido**, nunca inventado.
2. **Nunca fabricar** direcciones, teléfonos, años de fundación ni certificaciones.
3. **Cobertura real ampliada**: todos los municipios con corporación + unidades especializadas reales (ARFF, PEMEX/CFE, industrial).
4. **Tipos correctos** según jurisdicción real (p. ej. en Campeche el servicio es **estatal**, no municipal; en Los Cabos es **voluntario**).
5. **Niveles de confianza** por estación: *alta* (fuente oficial directa) · *media* (prensa/fuente oficial sin datos de contacto) · *baja* (existencia confirmada, datos por validar).

## Fuentes

**Válidas:** sitios `.gob.mx` municipales y estatales, Protección Civil estatal/municipal (SEPROCI, etc.), GAP / ASUR / ASA / Grupo Aeroportuario de la Marina / SEDENA (aeropuertos), PEMEX (estructura de respuesta), prensa local confiable (POSTA, El Independiente, BCS Noticias, La Jornada Maya, etc.).

**PROHIBIDAS — datos fabricados:** `bombero.mx` y `firefighter.mx`. Son tiendas con "directorios" autogenerados para SEO: inventan estaciones, teléfonos en secuencia, fundaciones y equipo. **Descartar siempre** salvo que una fuente oficial independiente corrobore el dato.

**Trampas detectadas:** teléfonos que circulan en notas son a veces del **periódico** (no de bomberos); "direcciones" de directorios municipales suelen ser del **ayuntamiento**, no del cuartel; cifras agregadas ("X bomberos en el estado") no son verificables por corporación.

## Proceso paso a paso (por estado)

1. **Investigar** con subagente (prompt plantilla más abajo): cobertura amplia, datos verificables, fuentes citadas, confianza por estación.
2. **Revisar y descartar** fabricados; corregir tipos; quedarse solo con lo defendible.
3. **Cargar** con script node *serializer* que reemplaza el bloque `estaciones: [...]` por *anchor* `slug: '<estado>',` (asigna `id` `<abr>-NN` y `slug`).
4. **Build + verificación**: build en `/tmp` ([[ffmx-sandbox-build-workaround]] en memoria) + link-check y huérfanas de [[04-seo]] (0 rotos / 0 huérfanas).
5. **Actualizar** `docs/12-estaciones-tracking.md` + la bitácora de abajo + la memoria del proyecto.
6. **Reportar** a Frank: qué se cargó, hallazgos, correcciones y pendientes por validar.

### Prompt plantilla del subagente de investigación

> "Investigador de datos. Directorio profesional y verificable de los cuerpos de bomberos de **{ESTADO}**. Fuentes oficiales (.gob.mx, Protección Civil, GAP/ASUR/ASA, PEMEX) y prensa confiable. ADVERTENCIA: `bombero.mx`/`firefighter.mx` fabrican datos — descartarlos. Cobertura: capital + municipios principales + ARFF/PEMEX/industrial reales. Por estación: nombre, ciudad, municipio, tipo, direccion, telefono, telefonoEmergencias (o 911), servicios, certificaciones (solo si documentadas), fundacion, descripcion (principales), **sitioWeb/redes**, **fuentes[] (URLs)**, **coordenadas {lat,lng}** (si aparecen en fuente oficial o Google Maps; si no, omitir), y **confianza** (alta/media/baja) por estación. OMITIR lo no verificable; no inventar. Entregar JSON + FUENTES (URLs) + nota de no-verificado."

## Bitácora por estado

| Estado | Antes→Ahora | Notas / correcciones clave |
|---|:--:|---|
| Aguascalientes | 2 → 7 | Capital (fund. **1972**, corregido), PC Estatal, Calvillo, Jesús María, Pabellón, Rincón de Romos, ARFF. |
| Baja California | 3 → 25 | Red completa de Tijuana (central + 16 estaciones con dir/tel), Mexicali, Ensenada (1946), Maneadero, San Quintín, Tecate, Rosarito + ARFF TIJ/MXL. `bombero.mx` inventaba una "estación San Luis Río Colorado" (¡está en Sonora!). |
| Baja California Sur | 2 → 8 | SJC y Cabo San Lucas son **Voluntarios** (no municipales); SJC opera 4 estaciones (jun-2026). Pendiente: brigada salinera ESSA Guerrero Negro y ARFF La Paz. |
| Campeche | 2 → 18 | **Servicio estatal centralizado** (Heroico Cuerpo de Bomberos del Estado / SEPROCI), PC municipal de primer nivel, PEMEX Sonda de Campeche, 2 ARFF. Direcciones municipales omitidas (eran del ayuntamiento). |
| Chiapas | 2 → 13 | **Centralizado en el IBECH** (7 estaciones estatales con dir+tel oficial, fuente al 16-feb-2026), + Cacahoatán/Ocosingo/Arriaga, 2 ARFF (TGZ Grupo Aeroportuario de Chiapas / Tapachula ASUR), PEMEX Cactus-Reforma. CFE: 0 verificadas. bombero.mx decía "18 est./788 bomberos" y teléfonos falsos → descartado. Primer estado cargado al modelo v2 (fuentes+confianza+coords). |
| Colima | 2 → 18 | **Los 7 tipos representados**. Solo 3 cuerpos funcionales (Colima 1969, Manzanillo A.C. 2001, Tecomán); resto = UMPC con función de bomberos + UEPC estatal. Especializadas reales: ASIPONA puerto Manzanillo (Industrial), ARFF Playa de Oro (GAP), PEMEX TAD Tapeixtles, CFE Termoeléctrica (baja conf.). Coords reales en 4. Estrena campos `email`, `telefonosAdicionales`, `operador`. |
| Chihuahua | 3 → 31 | Capital (fund. 1923, 8 estaciones) + Cd. Juárez 10 estaciones con coords oficiales del IMIP + 9 municipios + 2 ARFF (OMA). |
| Ciudad de México | 5 → 24 | HCBCDMX cuerpo único (1873) — 23 instalaciones con dirección, teléfonos y coords reales de las fichas oficiales `bomberos.cdmx.gob.mx` + SSEI AICM. Lote de mayor calidad. |
| Coahuila | 3 → 39 | Saltillo + Torreón central+6 subestaciones + frontera + región carbonífera + MIMOSA rescate minero (Premio Nacional PC 2021) + GM/Peñoles + 2 CFE carboeléctricas + 3 ARFF. |
| Durango | 1 → 17 | Capital + Gómez Palacio/Lerdo (La Laguna) + El Salto (voluntarios 1983) + 9 municipios + ARFF + brigadas forestales CONAFOR/estatales (estado más forestal del país). |
| Guanajuato | 3 → 12 | León (fund. 1930, corregido de 1956, 9 estaciones, OBA 2024), SIMUB Guanajuato capital (est. nueva zona sur ene-2024), Celaya 3 estaciones (Central/Industrial/Galaxias, dir+tel oficiales), Irapuato (38 bomberos, cmd. Basurto, nueva motobomba 2025), Salamanca (coord. con PEMEX Refinería A. M. Amor, incendio TADA abr-2026), San Miguel de Allende (voluntarios 1983, unidad 355 abr-2025), Silao (training ARFF por GAP), Puerto Interior GPI (industrial), CREI-BJX GAP (Aeropuerto, base 2021, STRIKER 15m), Dolores Hidalgo (voluntarios, baja conf.). Asociación Estatal integra 36 corporaciones. |
| Guerrero | 2 → 6 | CGPCYB Acapulco (post-Otis Cat.5 oct-2023, tel oficial 744-440-7031), H. Bomberos Chilpancingo (tel 747-472-2280 de chilpancingo.gob.mx/portal/contact/), SGIRPC Guerrero (estatal, bomberos propios + uniformes ene-2025), H. Bomberos Zihuatanejo (tel 755-554-7551 del pie oficial, 2 unidades + subestación Ixtapa vía comodato estatal), CREI ACA/OMA (2 pistas, 24h), CREI ZIH/OMA (733k pax 2025). 4 municipios. |
| Hidalgo | 2 → 7 | Dir. PC y Bomberos Pachuca (cuartel Pino Suárez 903, Col. Cubitos, tel 771-714-1522 — CONAMER+SEPH), Subsecretaría PC Estatal (Profra. Laura Lugo 115, tel 771-714-8802, proteccioncivil@hidalgo.gob.mx — directorio UEPC federal 2025), H. Bomberos Voluntarios Tulancingo A.C. (tel 775-753-0131/7231, transparencia 2024 confirma Dirección de Bomberos y PC municipal), Dir. PC y Bomberos Tula de Allende (coord. activa con PEMEX Refinería + monitoreo Río Tula — tula.gob.mx directorio 2024-2027), CREI PEMEX Refinería Miguel Hidalgo (330k bpd, más productiva MX; explosión Unidad 400 feb-2024, incidente Hidrodesulfurización abr-2026), H. Bomberos Ixmiquilpan (tel 759-723-0074, Valle del Mezquital — FB oficial SSPYTM), Pro Bomberos Huejutla de Reyes A.C. (mayor municipio Hidalgo, Huasteca, conf. baja). 5 municipios. |
| **Homologación v2** | 4 estados | AGS, BC, BCS y Campeche reinvestigados al estándar v2 (fuentes citadas + confianza + coords): cierra el P1 del estudio. Los 10 estados quedan al 100% de fuentes citadas. |

## Roadmap de profesionalización — estado

**A. Modelo de datos enriquecido — ✅ implementado.** Campos v2 en `EstacionBomberos`: `coordenadas`, `sitioWeb`, `redes`, `fuentes[]`, `verificadoEl`, `confianza` (+ `Confianza`, `Coordenadas`, `confianzaConfig`).

**B. Página L3 por estación — ✅ implementado.** `/estaciones/[estado]/[slug].astro`: contacto, mapa Leaflet (si hay coords), fuentes citadas, badge de confianza, schema **FireStation** (geo+address+telephone+areaServed). No colisiona con `[estado].astro`.

**C. UX del directorio — 🟡 casi.** Filtro por tipo + buscador en la página de estado ✅. **Mapa por estado ✅** (Leaflet, una marca por ciudad) y **mapa en ficha L3 ✅**, con coordenadas a nivel localidad (centroides de ciudad). Pendientes: mapa nacional en `/estaciones` y filtro por servicio.

**D. Confianza editorial — ✅ implementado.** Badge `Verificado`/`Confirmado`/`Por confirmar` (`confianzaConfig`) + `verificadoEl` en cards y ficha.

**E. Normalización — pendiente:** taxonomía controlada de `servicios` y formato único de teléfonos.

### ⚠️ Limitación de geocoding (coordenadas)

`web_fetch` **no puede** consumir Nominatim/OSM (requiere header User-Agent propio; devuelve cuerpo vacío) y está prohibido usar `curl`/`python` para esquivarlo. **Decisión adoptada (Frank): centroides de ciudad** — catálogo `ciudad → [lat,lng]` aplicado por script, precisión a nivel localidad, etiquetado "aproximado" en la UI. Para precisión calle-por-calle a futuro: API key de geocoding (Google/Mapbox/LocationIQ). Al ampliar estados, agregar al catálogo de centroides las ciudades nuevas.

## QA checklist por estado

- [ ] Cobertura real (todos los municipios con corporación + especializadas)
- [ ] Tipos correctos según jurisdicción
- [ ] Cero datos de agregadores prohibidos
- [ ] `direccion`/`telefono` solo verificados (cuartel, no ayuntamiento)
- [ ] Descripciones profesionales en las corporaciones principales
- [ ] Slugs únicos dentro del estado
- [ ] Build 0 rotos / 0 huérfanas
- [ ] Tracker + bitácora + memoria actualizados
