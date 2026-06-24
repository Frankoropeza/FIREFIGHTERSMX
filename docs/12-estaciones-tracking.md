# Directorio de Estaciones — Seguimiento de completitud

> DATOS en `src/data/estaciones.ts`. Pase = datos reales verificados al estándar v2 (coords, fuentes citadas, confianza, email/operador).
> Última actualización: 2026-06-24.

## Estándar

Campos verificables con fuente oficial; `confianza` (alta/media/baja); `coordenadas` (reales o centroide de ciudad); `fuentes[]` citadas por estación. Se descartan agregadores fabricados (bombero.mx, firefighter.mx).

## Resumen

- Estados homologados v2: **13/32** · Estaciones: **284** · Pendientes: **20**

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
| ⬜ | Jalisco | Centro-Occidente | 3 | 3 | – | – | 🔴 |
| ⬜ | Estado de México | Centro | 4 | 4 | – | – | 🔴 |
| ⬜ | Michoacán | Centro-Occidente | 2 | 2 | – | – | 🔴 |
| ⬜ | Morelos | Centro | 1 | 1 | – | – | 🔴 |
| ⬜ | Nayarit | Centro-Occidente | 2 | 2 | – | – | 🔴 |
| ⬜ | Nuevo León | Noreste | 3 | 3 | – | – | 🔴 |
| ⬜ | Oaxaca | Sur | 1 | 1 | – | – | 🔴 |
| ⬜ | Puebla | Centro | 2 | 2 | – | – | 🔴 |
| ⬜ | Querétaro | Centro | 2 | 1 | – | – | 🔴 |
| ⬜ | Quintana Roo | Peninsular | 3 | 3 | – | – | 🔴 |
| ⬜ | San Luis Potosí | Centro-Norte | 1 | 1 | – | – | 🔴 |
| ⬜ | Sinaloa | Noroeste | 2 | 2 | – | – | 🔴 |
| ⬜ | Sonora | Noroeste | 3 | 3 | – | – | 🔴 |
| ⬜ | Tabasco | Sur | 2 | 2 | – | – | 🔴 |
| ⬜ | Tamaulipas | Noreste | 3 | 3 | – | – | 🔴 |
| ⬜ | Tlaxcala | Centro | 1 | 1 | – | – | 🔴 |
| ⬜ | Veracruz | Sur | 3 | 3 | – | – | 🔴 |
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
- [ ] **Jalisco** (JAL) — 3 est. / 3 mun.
- [ ] **Estado de México** (MEX) — 4 est. / 4 mun.
- [ ] **Michoacán** (MICH) — 2 est. / 2 mun.
- [ ] **Morelos** (MOR) — 1 est. / 1 mun.
- [ ] **Nayarit** (NAY) — 2 est. / 2 mun.
- [ ] **Nuevo León** (NL) — 3 est. / 3 mun.
- [ ] **Oaxaca** (OAX) — 1 est. / 1 mun.
- [ ] **Puebla** (PUE) — 2 est. / 2 mun.
- [ ] **Querétaro** (QRO) — 2 est. / 1 mun.
- [ ] **Quintana Roo** (QROO) — 3 est. / 3 mun.
- [ ] **San Luis Potosí** (SLP) — 1 est. / 1 mun.
- [ ] **Sinaloa** (SIN) — 2 est. / 2 mun.
- [ ] **Sonora** (SON) — 3 est. / 3 mun.
- [ ] **Tabasco** (TAB) — 2 est. / 2 mun.
- [ ] **Tamaulipas** (TAMPS) — 3 est. / 3 mun.
- [ ] **Tlaxcala** (TLAX) — 1 est. / 1 mun.
- [ ] **Veracruz** (VER) — 3 est. / 3 mun.
- [ ] **Yucatán** (YUC) — 2 est. / 2 mun.
- [ ] **Zacatecas** (ZAC) — 1 est. / 1 mun.
