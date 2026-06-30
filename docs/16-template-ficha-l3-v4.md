# Template canónico ficha L3 v4 — FIREFIGHTERSMX

> Última actualización: 2026-06-25  
> Referencia canónica: `ags-01` — Heroico Cuerpo de Bomberos del Municipio de Aguascalientes  
> Commit: `08f0c92`

## ¿Qué es este documento?

Define el **gold standard** de contenido y diseño para TODAS las fichas individuales de estaciones de bomberos en `firefighters.mx/estaciones/[estado]/[slug]`. Toda estación nueva o actualizada DEBE cumplir este estándar antes de publicarse.

---

## Estructura de datos obligatoria

### Campos siempre requeridos

| Campo | Tipo | Regla |
|---|---|---|
| `id` | `'xxx-NN'` | ID único por estado |
| `nombre` | string | Nombre oficial completo |
| `slug` | string | kebab-case del nombre |
| `estado` | string | Nombre del estado |
| `ciudad` | string | Ciudad sede |
| `municipio` | string | Municipio sede |
| `tipo` | union | `'Municipal'` `'Estatal'` `'Industrial'` `'Aeropuerto'` `'PEMEX'` `'CFE'` `'Voluntarios'` |
| `telefonoEmergencias` | `'911'` | **SIEMPRE '911'** — nunca '068' |
| `servicios` | `string[]` | Mínimo 6 items granulares (ver abajo) |
| `descripcion` | string | 3 párrafos separados con `\n\n` |
| `activa` | `true` | — |
| `coordenadas` | `{ lat, lng }` | Verificadas en Google Maps |
| `fuentes` | `string[]` | Mínimo 2 URLs verificadas |
| `verificadoEl` | `'YYYY-MM-DD'` | Fecha exacta |
| `confianza` | `'alta'` `'media'` `'baja'` | — |

### Campos opcionales (añadir si verificables)

| Campo | Tipo | Cuándo |
|---|---|---|
| `direccion` | string | Solo si fuente oficial lo confirma |
| `telefono` | string | Formato `(XXX) XXX-XXXX` |
| `telefonosAdicionales` | `string[]` | Teléfonos secundarios verificados |
| `email` | string | Si aparece en sitio oficial |
| `operador` | string | Para Aeropuerto / Industrial / PEMEX / CFE |
| `elementos` | number | Personal activo total |
| `estacionesFisicas` | number | Número de cuarteles o bases |
| `unidades` | number | Vehículos de emergencia |
| `fundacion` | number | Año YYYY |
| `sitioWeb` | string | URL oficial |

---

## Estándar de `descripcion` — 3 párrafos

Separar con `\n\n` (doble salto literal). Cada párrafo tiene rol específico:

### Párrafo 1 — Identidad institucional
- Nombre oficial + tipo + dependencia jerárquica
- Año de fundación (si verificable)
- Capacidad: elementos, cuarteles
- Volumen de servicio anual o cifra relevante
- Reconocimientos o historia destacada

### Párrafo 2 — Perfil de riesgo territorial
- Tipos de incendio predominantes según uso de suelo / geografía
- Vialidades críticas (carreteras federales, autopistas)
- Zonas industriales, parques agroindustriales, gasolineras, plantas relevantes
- Riesgo agrícola/forestal si aplica
- Coordinación interinstitucional: C5/911, CEPC, SAPASMA, etc.

### Párrafo 3 — Capacidades + iniciativas
- Programas de formación o certificación NFPA
- Equipamiento especial (SCBA, ARFF, HAZMAT, cámaras)
- Convenios intermunicipales o con estado
- Escuela de voluntarios u otras iniciativas
- Para PC-sin-bomberos: rol de apoyo estatal y perspectiva

---

## Servicios por tipo

### Municipal / Estatal / Voluntarios (mínimo 6-8 items)
```
Incendios estructurales y vehiculares
Incendios de pastizal e interfaz urbano-forestal
Rescate vehicular y extrication
Rescate en altura y espacios confinados
Materiales peligrosos (HAZMAT básico)
Fugas de gas LP y enjambres
Atención prehospitalaria básica
Protección civil preventiva
```

### Aeropuerto ARFF (mínimo 6 items)
```
Salvamento y extinción de incendios de aeronaves (ARFF)
Respuesta a emergencias en área de movimiento y terminal
Evacuación de aeronaves con pasajeros
Control de derrames de combustible jet y fugas de hidrocarburo
Coordinación con Torre de Control (TWR/ATC) y administración aeroportuaria
Apoyo a emergencias médicas y búsqueda en zona de accidente
```

### Industrial / PEMEX / CFE (mínimo 6 items)
```
Control de incendios industriales (hidrocarburos y gases inflamables)
Atención de derrames y emergencias HAZMAT nivel II/III
Rescate industrial en espacios confinados y altura
Combate de incendios en pozos, ductos o instalaciones eléctricas
Brigadas de primeros auxilios y evacuación de instalaciones
Inspección preventiva y simulacros en instalaciones industriales
```

---

## Diseño de página — 7 secciones H2

Ver `src/pages/estaciones/[estado]/[slug].astro` commit `08f0c92`.

| Sección | Etiqueta | Condicional |
|---|---|---|
| Hero | Grid 2col: badges+H1+stats+CTAs / eyebrow+2 párrafos | Siempre |
| §1 | `Perfil institucional` | Siempre |
| §2 | `Capacidad operativa` | Si elementos/cuarteles/unidades existen |
| §3 | `Servicios de emergencia` | Siempre |
| §4 | `Normativa y estándares aplicables` | Siempre |
| §5 | `Equipamiento certificado NFPA` | Siempre |
| §6 | `Infraestructura y ubicación` | Si coordenadas existen |
| §7 | `Fuentes oficiales` | Si fuentes[] no vacío |

---

## Reglas que NO se violan nunca

1. **NUNCA inventar** direcciones, teléfonos, elementos ni fechas sin fuente oficial
2. **Descartar bombero.mx y firefighter.mx** — publican datos fabricados
3. Fuentes válidas: `.gob.mx`, CEPC, GAP/ASUR, PEMEX, SENEAM, IATA, ICAO
4. `telefonoEmergencias` siempre `'911'`
5. `descripcion` siempre `\n\n` entre párrafos (no `<br>`, no `\n`)
6. `servicios` siempre granulares — prohibido "Atención de emergencias y protección civil municipal" como único item
7. `verificadoEl` siempre fecha exacta `'YYYY-MM-DD'`
8. `coordenadas` siempre verificadas (no copiar lat/lng del estado sin verificar)

---

## Homologación AGS — status jun 2026

| ID | Estación | Status |
|---|---|---|
| ags-01 | Heroico Cuerpo de Bomberos Aguascalientes | ✅ CANÓNICA v3 |
| ags-02 | Coordinación Estatal PC Aguascalientes | ✅ v3 2026-06-25 |
| ags-03 | CREI Aeropuerto Aguascalientes | ✅ v3 2026-06-25 |
| ags-04 | PC y Bomberos Jesús María | ✅ v3 2026-06-25 |
| ags-05 | PC y Bomberos Calvillo | ✅ v3 2026-06-25 |
| ags-06 | PC y Bomberos Pabellón de Arteaga | ✅ v3 2026-06-25 |
| ags-07 | PC y Bomberos Rincón de Romos | ✅ v3 2026-06-25 |
| ags-08 | PC y Bomberos San Francisco de los Romo | ✅ v3 2026-06-25 |
| ags-09 | PC Asientos | ✅ v3 2026-06-25 |
| ags-10 | PC Cosío | ✅ v3 2026-06-25 |
| ags-11 | PC Tepezalá | ✅ v3 2026-06-25 |
| ags-12 | PC y Bomberos El Llano | ✅ v3 2026-06-25 |
| ags-13 | PC y Bomberos San José de Gracia | ✅ v3 2026-06-25 |
