---
title: "NOM-002-STPS: lo que el inspector ve que tú no habías calculado"
description: "Cómo calcular la dotación de extintores según NOM-002-STPS-2010: fórmulas, clases de riesgo y errores frecuentes en verificación de cumplimiento normativo."
pubDate: 2026-03-15
updatedDate: 2026-06-25
author: "Equipo editorial FIREFIGHTERS MX"
category: "Extintores"
tags: ["NOM-002-STPS", "dotación extintores", "extintores México", "protección civil", "seguridad industrial"]
image:
  url: "/images/categorias/extintores.avif"
  alt: "Dotación de extintores según NOM-002-STPS-2010 — cálculo por área y nivel de riesgo"
---

El patrón llegó al almacén esa mañana igual que cualquier otro día. Pero la visita de la inspectora de STPS no estaba en el calendario.

Cuarenta minutos después, el acta de infracción documentaba tres hallazgos: dotación insuficiente en el área de producción, un extintor con tarjeta de mantenimiento vencida desde hacía 14 meses, y uno montado a 1.85 metros de altura — 35 centímetros por encima del límite legal. El patrón tenía extintores. Los había comprado, los había colgado. Estaba convencido de que cumplía.

Este escenario lo veo con una frecuencia que ya no me sorprende. El problema no es la ausencia total de extintores: es la dotación mal calculada, el extintor "de relleno" puesto en el pasillo para que "se vea que hay", y el instalador que nunca explicó la diferencia entre colgar un extintor y dotarlo correctamente.

La NOM-002-STPS-2010 no es complicada. Pero tiene más requisitos de los que la mayoría de los responsables de mantenimiento sabe que existen.

## Primero lo primero: clasificar el riesgo de cada área

Antes de hacer cualquier cálculo, tienes que saber a qué nivel de riesgo pertenece cada zona de tu centro de trabajo. La norma distingue tres categorías, y el criterio es simple: qué tan fácil se enciende lo que hay ahí y qué tan rápido se propagaría el fuego.

**Riesgo bajo** son las áreas donde el único combustible real es el mobiliario ordinario: madera, papel, textiles normales. Piensa en oficinas administrativas, salas de juntas, vestíbulos, auditorios. La carga de fuego es baja, la propagación es lenta. Si un conato ocurre aquí, tienes tiempo para reaccionar.

**Riesgo ordinario** abarca la mayoría de los espacios industriales y comerciales: manufactura ligera, almacenes de producto terminado no inflamable, comercios al menudeo, cocinas comerciales sin fritura intensiva, talleres de mantenimiento general. Es el nivel más frecuente en la industria nacional y donde más errores de cálculo ocurren precisamente porque parece "normal".

**Riesgo alto** es cualquier área donde hay líquidos inflamables o combustibles en cantidad relevante, procesos con calor intenso, o materiales con alta carga energética. Bodegas de pintura, talleres con solventes, plantas petroquímicas, rampas de carga con manejo de gas LP, almacenes de químicos. Aquí el fuego puede ser inmanejable en segundos si el sistema no responde correctamente.

El punto que casi siempre se pasa por alto: un solo inmueble puede tener múltiples niveles de riesgo. Las oficinas son riesgo bajo; la bodega adjunta puede ser riesgo alto. Calculas cada área por separado, no el edificio entero como si fuera homogéneo.

## La fórmula, explicada para alguien que tiene que tomar decisiones

No para ingenieros. Para el responsable de mantenimiento que tiene el plano en la mano y necesita saber cuántos extintores le piden.

Pongamos un ejemplo concreto antes de ver los números.

Tienes una bodega de 800 m² donde almacenas solventes: thinner, alcohol isopropílico, acetona. Eso es riesgo alto sin discusión. La pregunta es: ¿cuántos extintores necesitas?

La NOM-002-STPS establece que cada extintor cubre un área máxima según el nivel de riesgo. Para riesgo alto, ese límite es **93 m² por extintor**. La fórmula es:

```
Número de extintores = Área total ÷ Área máxima por extintor
```

Para tu bodega de 800 m²:

```
800 ÷ 93 = 8.6 → se redondea siempre hacia arriba → 9 extintores
```

Pero eso no termina el cálculo. La norma tiene un segundo criterio que opera de forma independiente: la **distancia máxima de recorrido**. Es decir, cualquier punto del área debe quedar a no más de cierta distancia del extintor más cercano. Para riesgo alto ese límite es 15 metros. Para riesgo bajo y ordinario, 23 metros.

¿Por qué importa esto? Porque puedes tener el número matemáticamente correcto de extintores pero todos agrupados en una esquina. El punto más lejano del área quedaría a 40 metros del extintor más cercano. Eso no cumple, aunque la aritmética cuadre.

La regla es siempre la más restrictiva de las dos: si el criterio de distancia te pide más extintores que el criterio de área, vas con el de distancia.

## La tabla que necesitas tener a la mano

| Nivel de riesgo | Área máxima por extintor | Distancia máxima de recorrido |
|---|---|---|
| Bajo | 279 m² | 23 metros |
| Ordinario | 139 m² | 23 metros |
| Alto | 93 m² | 15 metros |

Lo que esta tabla te dice en la práctica: en una bodega de riesgo alto, si colocas los extintores a más de 15 metros uno del otro, ya incumples — aunque tengas el número "correcto" según el área. El inspector mide distancias. Tiene una cinta. La usa.

## Qué capacidad mínima pide la norma

El número de extintores es solo una parte. La norma también establece la capacidad mínima expresada en unidades extintoras (la clasificación que ves en la etiqueta: 2-A:10-B:C, por ejemplo).

- **Riesgo bajo:** mínimo 2-A:10-B:C (extintor de 4 kg en [PQS ABC](/productos/extintores/pqs-abc), generalmente)
- **Riesgo ordinario:** mínimo 2-A:20-B:C (extintor de 6 kg)
- **Riesgo alto:** mínimo 4-A:80-B:C (extintor de 9 kg)

Un extintor de 1 kg de PQS ABC puesto en el pasillo de una bodega industrial no cumple con la clasificación requerida aunque "esté ahí". Eso es lo que llamo el extintor de relleno: unidades que existen en el plano de evacuación pero que no tienen la capacidad para el riesgo que enfrentan.

## La trampa del extintor de relleno

Es el error más frecuente que encuentro en auditorías de empresas medianas.

El responsable de mantenimiento o el instalador sabe que "faltan extintores". En vez de recalcular la dotación correctamente, añade uno o dos extintores chicos en los pasillos. El resultado visual es que "hay más extintores". Pero si esos extintores están en pasillo y el riesgo real está en el área de producción a 28 metros de distancia, no protegen nada.

La NOM-002-STPS no evalúa cuántos extintores existen en el inmueble. Evalúa si cada punto de cada área queda cubierto por el extintor correcto, con la clasificación correcta, a la distancia correcta. Un extintor en el pasillo que no cubre el área de riesgo real es, para efectos de la norma, como si no existiera.

Antes de poner más extintores, verifica que los que tienes están en la posición correcta para cubrir el área que les corresponde. Luego calcula si necesitas más.

## Altura, montaje y acceso: los detalles que generan actas

La norma es muy específica en tres puntos que con frecuencia se ignoran:

**Altura de montaje.** La parte superior (la cabeza) del extintor no puede quedar a más de 1.50 metros del piso. Parece obvio, pero muchos instaladores los montan a 1.80 o 1.90 metros "para que no estorben". Eso es infracción documentable.

**Espacio despejado.** Debe haber mínimo un metro de radio libre alrededor del extintor, sin muebles, cajas, maquinaria ni cualquier obstáculo que impida tomarlo. Un extintor detrás de una estantería, aunque esté señalizado, es hallazgo de no conformidad.

**Soporte fijo.** Los extintores deben estar montados en bracket, gancho o armario especializado que los mantenga verticales y accesibles sin herramienta. Un extintor apoyado en el suelo, recargado en la pared, no cumple — aunque esté cargado y con mantenimiento vigente.

## La señalización: más específica de lo que crees

La **NOM-003-SEGOB-2011** regula la señalización. No es un letrero cualquiera: debe ser fotoluminiscente o reflectante de alta visibilidad, en color rojo de seguridad con pictograma oficial, y con dimensiones proporcionales a la distancia desde la que debe verse.

- Hasta 10 metros de distancia de observación: formato A (20 × 30 cm mínimo)
- Hasta 20 metros: formato B (30 × 45 cm)
- Más de 20 metros: formato C (45 × 60 cm)

La señal va **sobre** el extintor, visible desde el pasillo de acceso principal. Una señal desteñida, ilegible o de tamaño incorrecto es hallazgo de no conformidad en inspección.

¿Por qué importa tanto la señalización? Porque en un incendio real, con humo, con caos, la persona que busca el extintor no recuerda dónde está. Necesita verlo. La señalización no es burocracia: es la diferencia entre que alguien lo encuentre en 8 segundos o no lo encuentre.

## La bitácora: el documento que el inspector pide primero

Antes de revisar los extintores físicamente, el inspector de STPS generalmente pide la bitácora de mantenimiento. Si no está disponible, ya hay hallazgo.

La norma exige:

- **Inspección mensual visual** realizada por el responsable del área: manómetro en zona verde, seguro y precinto intactos, boquilla libre, señal legible, acceso despejado. Se registra con firma y fecha.
- **Mantenimiento anual** por técnico certificado: inspección del recipiente, válvula, manguera y agente; pesaje o verificación de carga; reemplazo de precinto y tarjeta.
- **Prueba hidrostática** cada 5 años (acero al carbón) o cada 12 años (algunos modelos de aluminio).

El número de serie de cada extintor debe estar en la bitácora. La tarjeta de mantenimiento colgada del extintor no sustituye la bitácora del patrón; es complementaria.

Un extintor con tarjeta de mantenimiento vencida es hallazgo crítico. Genera acta de infracción independientemente de si el extintor funciona o no. La norma no te pregunta si crees que el agente todavía sirve.

## Lo que le cuesta a tu empresa incumplir

Las sanciones se expresan en UMAs (Unidad de Medida y Actualización; valor 2026: $108.57 pesos/día). El régimen sancionador está en el **Reglamento Federal de Seguridad y Salud en el Trabajo** y los **artículos 994 y siguientes de la Ley Federal del Trabajo**.

| Tipo de infracción | Rango de sanción | Monto aproximado 2026 |
|---|---|---|
| No contar con extintores en el área | 250 – 5,000 UMA | $27,000 – $543,000 |
| Dotación insuficiente (menos unidades de las requeridas) | 100 – 1,000 UMA | $10,857 – $108,570 |
| Extintores con mantenimiento vencido | 50 – 500 UMA | $5,429 – $54,285 |
| Acceso bloqueado al extintor | 50 – 500 UMA | $5,429 – $54,285 |
| Señalización ausente o ilegible | 50 – 500 UMA | $5,429 – $54,285 |
| Falta de bitácora o registros | 50 – 250 UMA | $5,429 – $27,143 |
| Reincidencia | Hasta el doble de la sanción original | Variable |

El monto sube hacia el extremo superior del rango cuando el establecimiento tiene más de 100 trabajadores o maneja materiales peligrosos. La reincidencia puede derivar en clausura temporal del área de riesgo.

El costo del cumplimiento — comprar los extintores correctos, darles mantenimiento anual, llevar una bitácora — es una fracción de la sanción mínima por dotación insuficiente. Esa aritmética debería ser el argumento que convence a cualquier patrón.

## Dos ejemplos que puedes replicar en tu empresa

### Ejemplo 1: oficina administrativa de 500 m²

Actividad: oficinas (computadoras, mobiliario, papel). Nivel de riesgo: **bajo**.

```
N = 500 m² ÷ 279 m² = 1.79 → 2 extintores
```

Verificación de distancia: en un espacio de 25 × 20 metros, con dos extintores en extremos opuestos del pasillo central, el punto más alejado queda a menos de 15 metros. Cumple el criterio de 23 metros.

**Dotación mínima: 2 extintores PQS ABC de 4 kg (clasificación 2-A:10-B:C)**

Recomendación práctica: si hay un área de servidores o UPS, sustituye uno de los extintores de PQS por uno de [CO₂](/productos/extintores/co2) de 5 kg. El PQS deja residuo abrasivo que daña el hardware; el CO₂ no deja nada.

### Ejemplo 2: bodega de solventes de 1,000 m²

Actividad: almacenamiento de thinner, acetona, alcohol isopropílico en tambos de 200 L. Nivel de riesgo: **alto**.

```
N = 1,000 m² ÷ 93 m² = 10.75 → 11 extintores
```

Verificación de distancia (límite 15 m): en un rectángulo de 40 × 25 metros, distribuyendo los extintores en cuadrícula de 3 × 4, la separación entre unidades es aproximadamente 13 × 8 metros. El punto más lejano de cualquier extintor queda a unos 9 metros. Cumple con margen.

**Dotación mínima: 11 extintores PQS ABC de 9 kg (clasificación 4-A:80-B:C)**

Recomendación adicional: en bodegas con más de 400 litros de líquidos Clase B, complementa con al menos un [extintor especializado](/productos/extintores/especializados) sobre ruedas de 50 kg para ataque inicial de derrames grandes. Para concentraciones mayores, evalúa un sistema fijo de espuma AFFF.

## Tabla resumen por nivel de riesgo

| Parámetro | Riesgo bajo | Riesgo ordinario | Riesgo alto |
|---|---|---|---|
| Ejemplos de áreas | Oficinas, auditorios | Manufactura ligera, comercios | Bodegas de químicos, petroquímica |
| Área máxima por extintor | 279 m² | 139 m² | 93 m² |
| Distancia máxima de recorrido | 23 m | 23 m | 15 m |
| Capacidad mínima recomendada | 4 kg / 2-A:10-B:C | 6 kg / 2-A:20-B:C | 9 kg / 4-A:80-B:C |
| Altura máxima de montaje (cabeza) | 1.50 m | 1.50 m | 1.50 m |
| Mantenimiento anual obligatorio | Sí | Sí | Sí |
| Prueba hidrostática | Cada 5 años | Cada 5 años | Cada 5 años |

## El camino más corto para poner tu empresa en orden

Si partes de cero, o de una dotación que sabes que no está bien calculada, el proceso tiene ocho pasos:

1. **Recupera el plano** del centro de trabajo con dimensiones reales.
2. **Recorre el inmueble** y clasifica cada zona por nivel de riesgo según los materiales presentes.
3. **Aplica la fórmula** N = A ÷ Am para cada zona. Verifica también el criterio de distancia.
4. **Selecciona el agente correcto** para cada área: PQS ABC para uso general, CO₂ para electrónica, Tipo K para cocinas.
5. **Compra [extintores](/productos/extintores) con certificación NOM-154-SCFI**: verifica la etiqueta de fábrica con número de lote, fecha y clasificación.
6. **Instala en soportes fijos**, a la altura correcta, con espacio despejado de 1 metro alrededor.
7. **Coloca señalización NOM-003-SEGOB** del tamaño correcto según la distancia de observación.
8. **Abre la bitácora**: número de serie, fecha de instalación, técnico responsable, calendario de mantenimiento.

El inspector de STPS que llega sin aviso no viene a encontrarte en falta. Pero si encuentra incumplimientos, los va a documentar. Y el acta no distingue entre "no sabía" y "no lo hice".

La dotación correcta de extintores es el sistema de protección contra incendio más simple, más barato y más fiscalizado que existe en México. No es complicado cumplir. Lo que sí es caro es no haberlo hecho cuando el inspector llegó.

---

## Artículos relacionados

- [PQS ABC vs CO₂ vs Tipo K: Elegir el Extintor Equivocado Puede Empeorar el Incendio](/blog/pqs-abc-vs-co2-vs-tipo-k-extintores) — cómo seleccionar el agente correcto para cada tipo de riesgo
- [Tipos de Extintores en México](/blog/tipos-de-extintores-mexico) — panorama completo de agentes, clases de fuego y aplicaciones prácticas
- [NOM-002-STPS Guía Completa](/blog/nom-002-stps-guia-completa) — referencia técnica extendida con todos los requisitos de la norma

---

## Catálogo Extintores en FIREFIGHTERS MX

Contamos con extintores PQS ABC, CO₂ y Tipo K certificados NOM-154-SCFI para todos los niveles de riesgo requeridos por la NOM-002-STPS. Ofrecemos asesoría de cálculo de dotación, instalación y servicio de mantenimiento anual para mantener tu bitácora en orden ante cualquier inspección.

[Catálogo completo de Extintores](/productos/extintores) · [Solicitar cotización](/cotizacion)
