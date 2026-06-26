# Directorio de Estaciones — Seguimiento de completitud

> DATOS en `src/data/estaciones.ts`. Pase = datos reales verificados al estándar v3 (coords, fuentes citadas, confianza, email/operador, elementos, estacionesFisicas, unidades, descripciones 150-200 palabras).
> Última actualización: 2026-06-25 (Veracruz cargado — 30/32).

## Estándar

Campos verificables con fuente oficial; `confianza` (alta/media/baja); `coordenadas` (reales o centroide de ciudad); `fuentes[]` citadas por estación. Se descartan agregadores fabricados (bombero.mx, firefighter.mx). **v3 (jun 2026):** nuevos campos opcionales `elementos`, `estacionesFisicas`, `unidades`; descripciones 150-200 palabras con contexto histórico, operativo y de cobertura; proceso con 12 agentes en 3 capas (investigación + verificación cruzada + editorial).

## Resumen

- Estados homologados v3: **30/32** · Estaciones: **499** · Pendientes: **2**

## Matriz por estado

| ✓ | Estado | Región | Est. | Mun. | % Fuentes | % Coords | Pase v2 |
|:--:|---|---|--:|--:|--:|--:|:--:|
| ✅ | Aguascalientes | Centro-Norte | 13 | 11 | 100% | 100% | ✅ |
| ✅ | Baja California | Noroeste | 32 | 6 | 100% | 100% | ✅ |
| ✅ | Baja California Sur | Noroeste | 7 | 5 | 100% | 100% | ✅ |
| ✅ | Campeche | Peninsular | 19 | 13 | 100% | 100% | ✅ |
| ✅ | Chiapas | Sur | 13 | 11 | 100% | 100% | ✅ |
| ✅ | Chihuahua | Norte | 31 | 12 | 100% | 100% | ✅ |
| ✅ | Ciudad de México | Centro | 24 | 16 | 100% | 100% | ✅ |
| ✅ | Coahuila | Norte | 39 | 20 | 100% | 100% | ✅ |
| ✅ | Colima | Centro-Occidente | 18 | 10 | 100% | 100% | ✅ |
| ✅ | Durango | Norte | 17 | 14 | 100% | 100% | ✅ |
| ✅ | Guanajuato | Centro | 12 | 8 | 100% | 100% | ✅ |
| ✅ | Guerrero | Sur | 6 | 4 | 100% | 100% | ✅ |
| ✅ | Hidalgo | Centro | 7 | 5 | 100% | 100% | ✅ |
| ✅ | Jalisco | Centro-Occidente | 34 | 27 | 100% | 100% | ✅ |
| ✅ | Estado de México | Centro | 42 | 35 | 100% | 100% | ✅ v2 |
| ✅ | Michoacán | Centro-Occidente | 21 | 14 | 100% | 100% | ✅ v2 |
| ✅ | Morelos | Centro | 15 | 12 | 100% | 100% | ✅ v3 |
| ✅ | Nayarit | Centro-Occidente | 7 | 5 | 100% | 100% | ✅ v3 |
| ✅ | Nuevo León | Noreste | 12 | 9 | 100% | 100% | ✅ v3 |
| ✅ | Oaxaca | Sur | 13 | 11 | 100% | 100% | ✅ v3 |
| ✅ | Puebla | Centro | 14 | 12 | 100% | 100% | ✅ v3 |
| ✅ | Querétaro | Centro | 7 | 5 | 100% | 100% | ✅ v3 |
| ✅ | Quintana Roo | Peninsular | 12 | 9 | 100% | 100% | ✅ v3 |
| ✅ | San Luis Potosí | Centro-Norte | 5 | 4 | 100% | 100% | ✅ v3 |
| ✅ | Sinaloa | Noroeste | 9 | 6 | 100% | 100% | ✅ v3 |
| ✅ | Sonora | Noroeste | 12 | 9 | 100% | 100% | ✅ v3 |
| ✅ | Tabasco | Sur | 5 | 3 | 100% | 100% | ✅ v3 |
| ✅ | Tamaulipas | Noreste | 12 | 10 | 100% | 100% | ✅ v3 |
| ✅ | Tlaxcala | Centro | 1 | 1 | 100% | 100% | ✅ v3 |
| ✅ | Veracruz | Sur | 12 | 10 | 100% | 100% | ✅ v3 |
| ⬜ | Yucatán | Peninsular | 2 | 2 | – | – | 🔴 |
| ⬜ | Zacatecas | Centro-Norte | 1 | 1 | – | – | 🔴 |

## Checklist

- [x] **Aguascalientes** (AGS) — 13 est. / 11 mun. ✅ v2
- [x] **Baja California** (BC) — 32 est. / 6 mun. ✅ v2
- [x] **Baja California Sur** (BCS) — 7 est. / 5 mun. ✅ v2
- [x] **Campeche** (CAM) — 19 est. / 13 mun. ✅ v2
- [x] **Chiapas** (CHIS) — 13 est. / 11 mun. ✅ v2
- [x] **Chihuahua** (CHIH) — 31 est. / 12 mun. ✅ v2
- [x] **Ciudad de México** (CDMX) — 24 est. / 16 mun. ✅ v2
- [x] **Coahuila** (COAH) — 39 est. / 20 mun. ✅ v2
- [x] **Colima** (COL) — 18 est. / 10 mun. ✅ v2
- [x] **Durango** (DGO) — 17 est. / 14 mun. ✅ v2
- [x] **Guanajuato** (GTO) — 12 est. / 8 mun. ✅ v2
- [x] **Guerrero** (GRO) — 6 est. / 4 mun. ✅ v2
- [x] **Hidalgo** (HGO) — 7 est. / 5 mun. ✅ v2
- [x] **Jalisco** (JAL) — 34 est. / 27 mun. ✅ v2
- [x] **Estado de México** (MEX) — 42 est. / 35 mun. ✅ v2
- [x] **Michoacán** (MICH) — 21 est. / 14 mun. ✅ v2
- [x] **Morelos** (MOR) — 15 est. / 12 mun. ✅ v3
- [x] **Nayarit** (NAY) — 7 est. / 5 mun. ✅ v3
- [x] **Nuevo León** (NL) — 12 est. / 9 mun. ✅ v3
- [x] **Oaxaca** (OAX) — 13 est. / 11 mun. ✅ v3
- [x] **Puebla** (PUE) — 14 est. / 12 mun. ✅ v3
- [x] **Querétaro** (QRO) — 7 est. / 5 mun. ✅ v3
- [x] **Quintana Roo** (QROO) — 12 est. / 9 mun. ✅ v3
- [x] **San Luis Potosí** (SLP) — 5 est. / 4 mun. ✅ v3
- [x] **Sinaloa** (SIN) — 9 est. / 6 mun. ✅ v3
- [x] **Sonora** (SON) — 12 est. / 9 mun. ✅ v3
- [x] **Tabasco** (TAB) — 5 est. / 3 mun. ✅ v3
- [x] **Tamaulipas** (TAMPS) — 12 est. / 10 mun. ✅ v3
- [x] **Tlaxcala** (TLAX) — 1 est. / 1 mun. ✅ v3
- [x] **Veracruz** (VER) — 12 est. / 10 mun. ✅ v3
- [ ] **Yucatán** (YUC) — 2 est. / 2 mun.
- [ ] **Zacatecas** (ZAC) — 1 est. / 1 mun.
