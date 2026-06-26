---
title: "FM-200 vs Novec 1230: comparativa técnica y ambiental"
description: "FM-200 (HFC-227ea) vs Novec 1230 (FK-5-1-12): concentración de diseño, GWP, toxicidad, costo y cuándo elegir cada agente limpio según NFPA 2001 para México."
pubDate: 2026-03-15
updatedDate: 2026-06-25
author: "Ing. Marco García"
category: "Sistemas CI"
tags: ["FM-200", "Novec 1230", "agente limpio", "NFPA 2001", "sistemas supresión incendio"]
image:
  url: "/images/categorias/sistemas-ci.avif"
  alt: "Comparativa FM-200 HFC-227ea vs Novec 1230 FK-5-1-12 para sistemas de agente limpio"
---

Cuando el riesgo que debes proteger no puede mojarse, ensuciarse ni llenarse de polvo —un data center, un cuarto de UPS, una bóveda de documentos, un archivo histórico— los rociadores de agua quedan descartados de entrada y los sistemas de agente limpio toman el protagonismo. Dentro de esa categoría, dos agentes dominan el mercado global y el mexicano en particular: el **FM-200** (nombre comercial del HFC-227ea, heptafluoropropano) y el **Novec 1230** (nombre comercial de 3M para el FK-5-1-12, fluorocetona).

Ambos son eficaces, ambos están listados bajo NFPA 2001, y ambos dejan el espacio limpio tras la descarga. Pero tienen diferencias técnicas, ambientales y económicas que importan mucho a la hora de diseñar un sistema, calcular el costo del ciclo de vida o anticipar la disponibilidad del agente en los próximos años. En este artículo las analizamos en detalle.

## Qué es un agente limpio y por qué importa

Un **agente limpio** es cualquier sustancia extintora que, tras su descarga, no deja residuo sólido ni acuoso sobre los equipos y materiales del espacio protegido. Actúa en fase gaseosa o de aerosol fino, extingue el fuego en segundos y se disipa sin requerir limpieza adicional. La NFPA 2001 (Standard on Clean Agent Fire Extinguishing Systems) es la norma que regula el diseño, instalación, prueba y mantenimiento de estos sistemas.

El principal campo de aplicación de los agentes limpios es la protección de activos que no toleran el agua, el polvo ni la espuma: infraestructura de tecnología de información, colecciones bibliográficas y documentales, equipos de metrología y control de procesos, instalaciones eléctricas de alta densidad y ambientes donde la continuidad operativa es crítica (centros de datos financieros, salas de control de hospitales, cuartos de telefonía).

## FM-200 (HFC-227ea): el agente establecido

### Características químicas y físicas

El FM-200 —nombre comercial registrado por Kidde / Carrier y usado genéricamente en el mercado— corresponde químicamente al **heptafluoropropano (CF₃CHFCF₃)**, clasificado como hidrofluorocarbono (HFC). Es un gas incoloro, casi inodoro, con densidad mayor al aire (se asienta en la parte baja del espacio), que se almacena en estado líquido a presión en cilindros de acero.

**Propiedades clave:**

| Propiedad | Valor |
|---|---|
| Nombre químico | Heptafluoropropano (HFC-227ea) |
| Número CAS | 431-89-0 |
| Punto de ebullición | -16.4 °C |
| Presión de vapor a 21 °C | ~390 kPa (≈57 psi) |
| Presión de almacenamiento (con N₂) | 25 bar o 42 bar según diseño |
| Densidad de líquido a 20 °C | 1,407 kg/m³ |
| GWP (Potencial de Calentamiento Global, AR6) | 3,220 |
| ODP (Potencial de Agotamiento de Ozono) | 0 |
| NOAEL (No Observed Adverse Effect Level) | 9% en volumen |
| LOAEL (Lowest Observed Adverse Effect Level) | 10.5% en volumen |

### Mecanismo de extinción del FM-200

El FM-200 actúa principalmente por **interrupción química de la reacción en cadena de combustión** (inhibición de radicales libres) y secundariamente por **absorción de calor** (enfriamiento físico). Cuando el agente se descarga y se vaporiza, los radicales fluoro altamente reactivos capturan los radicales H• y OH• que sostienen la llama, interrumpiendo la cadena de oxidación antes de que genere energía suficiente para sostenerse.

El componente de enfriamiento es real pero secundario: la vaporización del agente absorbe calor del entorno, contribuyendo a bajar la temperatura de la llama. A diferencia del CO₂, el FM-200 no desplaza oxígeno de forma significativa; la concentración de diseño (7.9%) es perfectamente respirable durante la evacuación.

### Concentración de diseño

La concentración de diseño del FM-200 según NFPA 2001 es **7.9% en volumen** para la mayoría de los combustibles de Clase A y B. El NOAEL es 9%, lo que significa que las personas pueden estar expuestas a la concentración de diseño sin efectos adversos observados. Sin embargo, el protocolo estándar exige evacuación antes de la descarga o como parte del proceso de descarga; no se diseñan sistemas para operación con personas presentes de forma indefinida.

Para calcular la cantidad de agente necesaria, se usa la fórmula de NFPA 2001:

```
W = V × (C / (100 - C)) × (1 / s)
```

Donde:
- **W** = masa de agente (kg)
- **V** = volumen neto del espacio (m³)
- **C** = concentración de diseño (%)
- **s** = volumen específico del vapor del agente a la temperatura de diseño (m³/kg)

A 20 °C, el volumen específico del HFC-227ea es aproximadamente 0.1269 m³/kg, lo que da un consumo típico de **0.75 – 0.90 kg/m³** para la mayoría de los espacios bajo NFPA 2001 a concentración de diseño del 7.9%.

## Novec 1230 (FK-5-1-12): el agente de bajo impacto ambiental

### Características químicas y físicas

El Novec 1230 es el nombre comercial de 3M (ahora Chemours y otros licenciatarios) para la **fluorocetona dodecafluoro-2-metilpentan-3-ona (CF₃CF₂C(O)CF(CF₃)₂)**, clasificado como fluorocetona (FK). No es un HFC; pertenece a una familia química diferente que explica su sorprendente perfil ambiental.

**Propiedades clave:**

| Propiedad | Valor |
|---|---|
| Nombre químico | Dodecafluoro-2-metilpentan-3-ona (FK-5-1-12) |
| Número CAS | 756-13-8 |
| Punto de ebullición | 49.2 °C |
| Presión de vapor a 25 °C | 40.4 kPa (≈5.9 psi) |
| Presión de almacenamiento (con N₂) | 25 bar o 42 bar según diseño |
| Densidad de líquido a 25 °C | 1,600 kg/m³ |
| GWP (Potencial de Calentamiento Global, AR6) | 1 |
| ODP (Potencial de Agotamiento de Ozono) | 0 |
| Vida atmosférica | < 5 días |
| NOAEL | 10% en volumen |
| LOAEL | > 10% en volumen |

### Mecanismo de extinción del Novec 1230

El Novec 1230 actúa predominantemente por **enfriamiento físico** con una contribución menor de inhibición química. Su alto calor de vaporización (aproximadamente 88 kJ/kg, significativamente mayor que el FM-200) absorbe calor de la llama muy eficientemente. La molécula de fluorocetona se descompone en productos no tóxicos (CO₂, HF en trazas, fluoroacetonas secundarias que se hidrolizan rápidamente) con una vida atmosférica de menos de 5 días, lo que explica su GWP prácticamente nulo.

### Concentración de diseño

La concentración de diseño del Novec 1230 varía según el combustible:

- **Clase A (combustibles sólidos):** 4.2 – 5.9% en volumen
- **Clase B (líquidos inflamables):** 5.9% en volumen (concentración máxima permitida dentro del NOAEL)

El NOAEL del Novec 1230 es 10%, significativamente mayor que su concentración de diseño máxima, lo que proporciona un margen de seguridad mayor que el FM-200.

El consumo de agente es de aproximadamente **1.00 – 1.25 kg/m³** a concentración de diseño del 5.9%, mayor que el FM-200 en masa absoluta, pero con una molécula más pesada. En términos de número de cilindros, los sistemas Novec pueden requerir algo más de almacenamiento que los de FM-200 para el mismo volumen protegido.

## La diferencia ambiental que cambia el panorama a futuro

### GWP: 3,220 vs 1

Esta es la diferencia más importante a largo plazo. El FM-200 tiene un **GWP de 3,220** (equivalentes de CO₂ por kilogramo de agente emitido al ambiente, referencia AR6 del IPCC), lo que lo clasifica como HFC de alto GWP bajo el Protocolo de Kigali (enmienda al Protocolo de Montreal). El Novec 1230 tiene un **GWP de 1**: prácticamente neutro en términos de calentamiento global, gracias a su vida atmosférica de menos de 5 días.

Esta diferencia no es académica. El **Protocolo de Kigali**, en vigor desde 2019 y ratificado por México, establece calendarios de reducción gradual de la producción y consumo de HFCs de alto GWP. Los países desarrollados deben reducir sus HFCs en un 85% para 2036 respecto a la línea base. Los países en desarrollo (incluyendo México) tienen calendarios más laxos pero igualmente vinculantes.

En términos prácticos, esto significa que la disponibilidad de HFC-227ea (FM-200) irá reduciéndose en los próximos años, el precio irá aumentando conforme las cuotas de producción se ajusten, y los usuarios de sistemas FM-200 deberán planificar la eventual transición a alternativas de menor GWP como el Novec 1230, el HFC-125 (GWP 3,170, también en lista de restricción) u otros agentes emergentes.

### ODP: ambos en cero

A diferencia de los halones (Halon 1301, GWP 6,290; ODP 10) que fueron prohibidos por el Protocolo de Montreal en 1994, tanto el FM-200 como el Novec 1230 tienen **ODP = 0**: no dañan la capa de ozono. Este fue el criterio que impulsó su adopción masiva como sustitutos del halón en los años 90 y 2000.

## Comparativa económica

### Costo del agente

El FM-200 es históricamente **30–40% más barato** que el Novec 1230 en términos del precio del agente por kilogramo. En México, los precios de referencia (2026, sujeto a disponibilidad y tipo de cambio):

- **FM-200:** $180 – $250 USD/kg (importación, flete incluido)
- **Novec 1230:** $280 – $380 USD/kg (importación, flete incluido)

Para un cuarto de servidores de 50 m³ que requiere ~40 kg de FM-200 (a 0.8 kg/m³) vs ~60 kg de Novec 1230 (a 1.2 kg/m³), la diferencia en costo de agente puede ser de $8,000 – $15,000 USD a favor del FM-200. Esta diferencia se está reduciendo conforme las restricciones de Kigali presionan al alza el precio del FM-200.

### Costo del sistema completo

Los componentes del sistema (cilindros, válvulas, difusores, panel de control, cableado, tubería) tienen costos similares entre ambas alternativas. La diferencia principal es el agente y los cilindros de almacenamiento: los sistemas Novec pueden requerir más cilindros por el mayor volumen específico del agente a las presiones de operación.

### Costo de la recarga

La recarga post-descarga accidental o post-incendio tiene un costo similar en proporción: el mayor precio por kg del Novec 1230 se ve parcialmente compensado por la menor concentración de diseño en porcentaje volumétrico, aunque la mayor densidad del agente nivela la balanza en términos de masa.

## Certificaciones y marcos normativos

Ambos agentes están listados y aprobados bajo:

- **NFPA 2001** (Standard on Clean Agent Fire Extinguishing Systems) — la norma de diseño e instalación de referencia
- **UL 2166** (Halocarbon Clean Agent Extinguishing Systems) — certificación de listado para el sistema completo
- **FM Approvals** — aprobación FM para aplicaciones donde la aseguradora exige equipo con sello FM
- **ISO 14520** — norma internacional equivalente a NFPA 2001 para aplicaciones globales

El FM-200 fue el primero en ser listado (principios de los 90) y tiene la base instalada más amplia. El Novec 1230 fue listado a principios de los 2000 y ha ganado participación de mercado consistentemente, especialmente en Europa donde las regulaciones de HFC son más restrictivas que en México.

## Tabla comparativa: FM-200 vs Novec 1230

| Parámetro | FM-200 (HFC-227ea) | Novec 1230 (FK-5-1-12) |
|---|---|---|
| Clasificación química | Hidrofluorocarbono (HFC) | Fluorocetona (FK) |
| Concentración de diseño (Clase A) | 7.9% en volumen | 4.2 – 5.9% en volumen |
| Mecanismo principal | Inhibición química | Enfriamiento físico |
| GWP (AR6) | 3,220 | 1 |
| ODP | 0 | 0 |
| Vida atmosférica | ~31–36 años | < 5 días |
| NOAEL | 9% en volumen | 10% en volumen |
| LOAEL | 10.5% en volumen | > 10% en volumen |
| Presión de almacenamiento | 25 o 42 bar | 25 o 42 bar |
| Consumo típico (kg/m³) | 0.75 – 0.90 | 1.00 – 1.25 |
| Costo del agente (USD/kg, 2026) | $180 – $250 | $280 – $380 |
| Costo relativo del sistema completo | Base (más económico) | 20–35% más caro |
| Impacto Protocolo de Kigali | Alto (restricción progresiva) | Nulo (GWP = 1) |
| Certificaciones | NFPA 2001, UL, FM, ISO 14520 | NFPA 2001, UL, FM, ISO 14520 |
| Disponibilidad en México (2026) | Alta (cuotas aún vigentes) | Media-alta |
| Perspectiva de disponibilidad futura | Decreciente | Estable o creciente |

## Cuándo elegir cada uno

### Cuándo elegir FM-200

El FM-200 sigue siendo una opción válida hoy (2026) cuando:

- **El presupuesto del proyecto es determinante** y el cliente comprende la perspectiva de disponibilidad futura.
- **El espacio a proteger es relativamente pequeño** (menos de 200 m³) y el costo diferencial con Novec es significativo en proporción al total del proyecto.
- **El horizonte de uso es de menos de 10 años** y se contempla renovación o relocación del activo antes de que las restricciones de Kigali presionen significativamente el suministro.
- **El mercado local o el instalador tiene stock de agente** y puede garantizar recarga en tiempo razonable.

### Cuándo elegir Novec 1230

El Novec 1230 es la elección estratégicamente superior cuando:

- **El activo protegido tiene un ciclo de vida largo** (más de 10–15 años): data centers corporativos, subestaciones eléctricas, archivos históricos, salas de control permanentes.
- **La organización tiene compromisos ESG o ambientales** y el GWP del agente es un criterio de selección explícito.
- **El espacio protege activos de alto valor** (colecciones de arte, documentos irreemplazables, servidores de misión crítica) donde el margen de seguridad toxicológico mayor del Novec (NOAEL 10% vs 9% FM-200) es un argumento de seguridad relevante.
- **El proyecto está sujeto a revisión por aseguradoras con políticas ESG** (creciente en el sector financiero y hospitalario).
- **La regulación local o estatal en México está avanzando** hacia restricciones de HFC: Jalisco y Ciudad de México han comenzado a incorporar criterios ambientales en sus programas de Protección Civil.

### Aplicaciones específicas y recomendación por tipo de espacio

| Tipo de espacio | Recomendación | Justificación |
|---|---|---|
| Data center corporativo (> 200 m²) | Novec 1230 | Ciclo de vida largo, activos de alto valor, cumplimiento ESG |
| Cuarto de servidores pequeño (< 50 m²) | FM-200 o Novec | Costo diferencial aceptable; elegir según horizonte de vida |
| Sala de UPS y baterías | FM-200 o Novec | Ambos son adecuados; Novec si el ciclo es > 10 años |
| Bóveda bancaria y custodia de valores | Novec 1230 | Ciclo de vida largo, activos irreemplazables, imagen institucional |
| Archivo histórico y biblioteca patrimonial | Novec 1230 | Materiales únicos, larga vida útil del espacio |
| Cuarto de telefonía y nodo de red | FM-200 | Costo-eficiente para espacios pequeños con ciclo < 10 años |
| Subestación eléctrica media tensión | Novec 1230 | Infraestructura de largo plazo, exposición ambiental |
| Sala de control de proceso industrial | Novec 1230 | Continuidad operativa crítica, ciclo de vida largo |

## La situación en México: importación, cuotas y agotamiento de HFC

México es signatario del Protocolo de Kigali desde 2018. La **SEMARNAT** (Secretaría de Medio Ambiente y Recursos Naturales) administra las cuotas de importación de HFCs, incluyendo el HFC-227ea (FM-200). El calendario de reducción para México como país en desarrollo (Artículo 5 del Protocolo de Montreal) establece una reducción del 10% de la línea base para 2029, y del 30% para 2035.

En términos prácticos:

- La importación de HFC-227ea no está prohibida hoy, pero el sistema de cuotas SEMARNAT limita los volúmenes disponibles.
- Los distribuidores de agente en México reportan (2025–2026) que los precios del FM-200 han aumentado entre 18% y 35% respecto a 2022 como consecuencia directa de la reducción de cuotas de producción global.
- Los proyectistas que especifican FM-200 en contratos con entrega a 18–24 meses deben incluir cláusulas de precio variable o alternativa de agente para protegerse de la volatilidad.
- El Novec 1230, aunque históricamente más caro, tiene un precio más estable y no está sujeto a restricciones de importación bajo el Protocolo de Kigali porque su GWP es 1.

La recomendación para proyectos nuevos que inician diseño en 2026 es clara: si el horizonte de uso del sistema es superior a 8 años, el Novec 1230 presenta menor riesgo de disponibilidad y menor exposición a escaladas de precio por restricciones regulatorias. El ahorro inicial del FM-200 puede verse erosionado en la primera recarga post-descarga o en la primera actualización de inventario a mitad del ciclo de vida del sistema.

## Consideraciones de diseño y mantenimiento

Independientemente del agente elegido, los sistemas de agente limpio bajo NFPA 2001 comparten los siguientes requisitos de mantenimiento:

- **Inspección semestral:** verificación de presión de cilindros, estado de válvulas, integridad de tuberías y difusores, funcionalidad del panel de control y detectores.
- **Prueba anual del sistema de alarma y detección:** activación de detectores, verificación de señales en el panel, prueba de la secuencia de pre-descarga.
- **Pesaje de cilindros:** al menos una vez al año; si la pérdida de agente supera el 5% del peso de carga, el cilindro debe recargarse.
- **Prueba de estanqueidad del espacio protegido (door fan test):** NFPA 2001 requiere verificar que el espacio mantenga la concentración de diseño durante el tiempo de retención (típicamente 10 minutos). Grietas, perforaciones en muros o ductos no sellados pueden hacer que el agente se disipe antes de que el fuego sea controlado.
- **Documentación:** bitácora de mantenimiento con fecha, tipo de servicio, técnico responsable y resultados de pruebas, disponible para inspección de la aseguradora y de Protección Civil.

La decisión entre FM-200 y Novec 1230 no debe tomarse únicamente en función del precio del agente por kilogramo. El análisis correcto considera el costo total del ciclo de vida —incluyendo recargas, mantenimiento y el riesgo de disponibilidad futura— junto con el valor e irreemplazabilidad de los activos protegidos y los compromisos ambientales de la organización. Con esos factores sobre la mesa, la elección es técnica, no solo económica.
