---
title: "Memoria de cálculo hidráulico para rociadores: qué debe incluir para que tu DRO la apruebe"
description: "Una memoria de cálculo hidráulico incompleta paraliza tu permiso de construcción. Conoce los datos mínimos que exige el DRO para rociadores NFPA 13."
pubDate: 2026-03-18
updatedDate: 2026-06-25
author: "Equipo editorial FIREFIGHTERS MX"
category: "Instalación de Sistemas CI"
tags: ["rociadores NFPA 13", "memoria de cálculo", "DRO", "sistemas contra incendio", "instalación CI"]
image:
  url: "/images/servicios/instalacion-sistemas-ci.avif"
  alt: "Memoria de cálculo hidráulico para sistema de rociadores NFPA 13 en planta industrial"
---

## La memoria que paraliza obras (y cómo evitarlo)

Un contratista general en Cuautitlán Izcalli, Estado de México, presenta los planos de rociadores de un centro de distribución al DRO. Tres semanas después llega la respuesta: rechazados. El motivo: la memoria de cálculo hidráulico no incluye el análisis del área de operación ni la curva de demanda del sistema.

Resultado: 45 días de retraso en obra, penalización al contratista principal y un rediseño de emergencia que costó más del doble que haberlo hecho bien desde el inicio.

Ocurre más de lo que se cree, sobre todo en los parques industriales del corredor Toluca-Cuautitlán y en los desarrollos verticales de la CDMX. La memoria de cálculo no es un trámite burocrático: es el documento técnico que determina si el sistema va a funcionar en una emergencia real.

Y cuando el DRO la rechaza, no rechaza un papel. Rechaza toda la lógica detrás del diseño.

## Qué es la memoria de cálculo hidráulico y qué no es

La memoria de cálculo hidráulico es el documento que demuestra, con números verificables, que el sistema de rociadores diseñado puede entregar la densidad de descarga requerida por NFPA 13 sobre el área de operación más desfavorable, con la presión disponible en el punto de conexión a la red.

No es un resumen ejecutivo. No es una lista de componentes. No es el plano isométrico de la tubería.

Es el soporte matemático completo del diseño: desde los datos de entrada hasta la verificación de que el sistema no va a colapsar hidráulicamente en el momento en que más lo necesitas.

Muchos ingenieros —sobre todo los que vienen del sector habitacional donde NFPA 13R tiene requerimientos más simples— confunden la memoria con el plano. Son documentos distintos que se complementan. El plano muestra dónde va cada elemento. La memoria demuestra por qué va ahí y cómo va a responder.

## Contenido mínimo de la memoria hidráulica según NFPA 13

Esta es la información que debe aparecer en tu memoria. Si falta cualquiera de estos puntos, el DRO tiene fundamento para rechazarla:

| Sección | Contenido requerido |
|---|---|
| Datos del proyecto | Clasificación de ocupación, dimensiones del área protegida, tipo de almacenamiento si aplica |
| Clasificación de riesgo | Riesgo ordinario, extra o especial según NFPA 13 Capítulo 5 |
| Área de operación | Superficie del área más desfavorable (mínimo 139 m² para riesgo ordinario grupo 2) |
| Densidad de diseño | Densidad en mm/min conforme a la curva de densidad/área de NFPA 13 |
| Selección de rociadores | K-factor, temperatura de operación, orientación (colgante/montante/lateral) |
| Cálculo de caudal por rociador | Q = K × √P para cada rociador en el área de operación |
| Cálculo de tubería | Velocidades, pérdidas por fricción (Hazen-Williams), pérdidas por accesorios |
| Punto de diseño | Caudal total y presión requerida en la conexión al sistema de suministro |
| Curva de demanda del sistema | Gráfica presión-caudal del sistema vs curva de suministro disponible |
| Fuente de abastecimiento | Datos de presión estática y residual de la red municipal o cisterna con bomba |
| Margen de seguridad | Verificación de que la curva de suministro supera la curva de demanda |
| Software utilizado | Nombre y versión del programa de cálculo (HydraCALC, SprinkCAD, etc.) |

Si tu proyecto está en un parque industrial del Bajío o en una nave en la zona norte del Estado de México, el DRO local puede pedir adicionalmente los datos de la red municipal de CONAGUA o la memoria de la cisterna y bombas de presurización. Tenlo listo.

## Los dos errores que más rechaza el DRO

Después de revisar decenas de memorias rechazadas —propias y ajenas— los dos problemas que concentran la mayoría de los rechazos son siempre los mismos.

**Primero: el área de operación no se justifica.** El ingeniero escoge un área, hace los cálculos y entrega el documento. Pero no explica por qué ese es el área más desfavorable hidráulicamente. El DRO no puede asumir que el diseñador lo sabe: necesita verlo documentado. La selección del área de operación debe incluir el razonamiento: distancia al punto de suministro, elevación, cantidad de rociadores activos y distribución de la tubería.

**Segundo: la curva de demanda no aparece o está mal construida.** Este fue exactamente el caso del centro de distribución en Cuautitlán. El cálculo de los rociadores estaba bien hecho, pero el ingeniero no graficó la curva del sistema ni la comparó contra la curva de suministro disponible. Sin esa gráfica, es imposible demostrar que el sistema tiene el margen de seguridad requerido. El DRO no aprueba lo que no puede verificar.

Ambos errores tienen el mismo origen: confundir el cálculo con la memoria. Hacer los números en una hoja de cálculo es solo la mitad del trabajo. Documentar la lógica detrás de cada decisión es la otra mitad, y es la que aprueba el DRO.

## Cómo presentar la curva de demanda correctamente

La curva de demanda del sistema es la representación gráfica de la relación entre el caudal total que requiere el sistema y la presión necesaria en el punto de conexión para entregarlo.

Se construye calculando el punto de diseño (Q total, P en conexión) y luego generando puntos adicionales variando el caudal. La curva resultante sube de izquierda a derecha: a mayor caudal requerido, mayor presión necesaria.

Sobre esa curva se traza la curva de suministro disponible: los datos de presión estática y residual de la fuente de agua, que típicamente baja de izquierda a derecha. La intersección entre ambas curvas define la capacidad máxima del sistema.

Para que el DRO apruebe, la curva de suministro debe quedar por encima y a la derecha del punto de diseño del sistema. Si se cruzan antes, el sistema no tiene agua suficiente para operar correctamente.

En proyectos con red municipal —frecuente en desarrollos habitacionales en CDMX y en algunos parques industriales con toma directa— los datos de presión los debe proporcionar SACMEX o la empresa operadora local. No uses datos asumidos. El DRO los va a verificar.

## Antes de entregar: lista de verificación del ingeniero

Antes de firmar y entregar la memoria al DRO, revisa que puedas responder sí a cada uno de estos puntos:

- [ ] ¿Está documentada la clasificación de riesgo con referencia al capítulo de NFPA 13?
- [ ] ¿Se justifica por qué el área de operación seleccionada es la más desfavorable?
- [ ] ¿Aparece el cálculo individual de cada rociador en el área activa?
- [ ] ¿Las pérdidas en tubería usan el coeficiente C de Hazen-Williams correcto para el material?
- [ ] ¿Están incluidas las pérdidas por accesorios (codos, tés, válvulas)?
- [ ] ¿El punto de diseño (Q, P) está claramente identificado?
- [ ] ¿La curva de demanda está graficada y confrontada contra la curva de suministro?
- [ ] ¿Los datos de suministro (presión estática y residual) tienen fuente verificable?
- [ ] ¿El software de cálculo está identificado con versión?
- [ ] ¿La memoria lleva sello y firma del ingeniero responsable con número de cédula?

Si hay una sola casilla sin marcar, no entregues todavía. El tiempo que tardas en completarla es una fracción del tiempo que perderás si te regresan el expediente.

---

## Artículos relacionados

- [NFPA 13 vs 13R vs 13D: cuál aplica a tu proyecto de rociadores](/blog/nfpa-13-vs-13r-vs-13d-rociadores)
- [Detección vs alarma vs supresión: tres sistemas que no deben instalarse como si fueran uno](/blog/deteccion-alarma-supresion-nfpa-72-2001)
- [FM-200 vs Novec 1230: cuál agente limpio elegir para tu cuarto de servidores](/blog/fm200-vs-novec-1230-agente-limpio)

## Instalación de Sistemas CI en FIREFIGHTERS MX

¿Necesitas que tu memoria de cálculo hidráulico pase el DRO sin contratiempos? En FIREFIGHTERS MX diseñamos e instalamos sistemas de rociadores NFPA 13 con toda la documentación técnica requerida para trámites en CDMX, Estado de México y los principales parques industriales del Bajío.

[Servicio de Instalación de Sistemas CI](/servicios/instalacion-sistemas-ci)
