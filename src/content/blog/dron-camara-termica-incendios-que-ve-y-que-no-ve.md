---
title: "Dron con cámara térmica en incendios: qué ve, qué no ve y cómo leer la imagen"
seoTitle: "Dron con cámara térmica en incendios: qué ve y qué no ve"
description: "Cómo funciona la cámara térmica de un dron, qué es la radiometría y qué errores de lectura debe evitar el mando en incendios: vidrio, humo, reflejos y emisividad."
pubDate: 2026-09-30
category: "Drones de Emergencia"
tags: ["drones de emergencia", "dron térmico", "cámara térmica", "radiometría", "incendios"]
image:
  url: "/images/blog/portadas/dron-camara-termica-incendios-que-ve-y-que-no-ve.avif"
  alt: "Incendio forestal en una ladera visto de noche desde el aire, con líneas de fuego avanzando"
---

La cámara térmica de un dron no ve el fuego: mide radiación infrarroja y la convierte en una imagen que representa diferencias de temperatura aparente. Esa distinción parece técnica, pero es la que separa un uso útil de un error de interpretación en escena. Una ventana oscura no significa necesariamente que el cuarto esté frío, y una cubierta metálica brillante puede mostrar un calor que no tiene. Quien decide con base en la imagen térmica debe saber qué mide el sensor, qué corrige la radiometría y en qué condiciones el resultado deja de ser confiable.

Este artículo forma parte de la serie sobre [drones de emergencia](/productos/drones-emergencia/) y acompaña al análisis general sobre [por qué los drones ya son parte del equipo contra incendio](/blog/drones-para-bomberos-mexico-importancia-equipo-contra-incendio/). Aquí se detalla la imagen térmica; el [marco normativo](/blog/normativa-drones-emergencia-mexico-nom-107-afac-nfpa-2400/) y la [selección de plataformas](/blog/como-equipar-corporacion-bomberos-con-drones-plataformas-pilotos-protocolo/) tienen su propio artículo.

## Lo esencial en cinco puntos

- La cámara térmica muestra temperatura aparente de superficies, no el interior de un inmueble ni la temperatura del aire.
- Una cámara radiométrica asigna un valor de temperatura a cada píxel; una no radiométrica solo muestra contraste.
- Vidrio, metales brillantes y superficies mojadas reflejan y pueden dar lecturas engañosas.
- Lluvia, humo, humedad del aire y radiación solar modifican la imagen y las lecturas.
- La lectura responsable combina la imagen térmica con la imagen visible, un cambio de ángulo y la confirmación del personal en escena.

## Glosario básico

| Término | Qué significa |
|---|---|
| Temperatura aparente | Temperatura que la cámara calcula a partir de la radiación que recibe; puede diferir de la temperatura real de la superficie |
| Emisividad | Propiedad de una superficie que indica qué tan eficientemente emite radiación infrarroja; los materiales de baja emisividad, como el vidrio y los metales brillantes, reflejan buena parte de la radiación de su entorno |
| Radiometría | Capacidad de la cámara de asignar un valor de temperatura a cada píxel y conservar datos para ajustar la lectura después del vuelo |
| NETD | Diferencia de temperatura equivalente al ruido; expresa la sensibilidad del sensor, y un valor menor indica que distingue diferencias más pequeñas |
| Alta y baja ganancia | Modos del sensor con rangos de medición distintos: uno más estrecho y detallado, otro más amplio para zonas muy calientes |
| Cruce térmico | Condición en la que, por la radiación solar, los objetos pierden contraste térmico entre sí |

## Qué mide realmente una cámara térmica

Todo objeto emite radiación infrarroja en proporción a su temperatura y a su emisividad. El sensor de la cámara capta esa radiación y la representa con una paleta de colores o de grises. Por eso la imagen describe la temperatura aparente de la superficie, no la temperatura del aire ni de lo que hay detrás de ella.

Esto tiene tres consecuencias prácticas:

- **Solo ve superficies.** La cámara no atraviesa muros ni techos; ve la cara que tiene enfrente.
- **Materiales distintos se ven distintos.** Dos materiales a la misma temperatura pueden mostrarse diferentes si su emisividad no es igual.
- **El entorno influye.** La imagen cambia con la distancia, la humedad del aire y la radiación que la superficie refleja.

La imagen es una aproximación útil, no una medición directa de cada punto.

## Radiométrica y no radiométrica: la diferencia que importa en la ficha técnica

Una cámara térmica no radiométrica produce una imagen de contraste: muestra qué zona está más caliente que otra, pero no asigna un valor de temperatura a cada píxel. Una cámara radiométrica sí lo hace, de modo que el operador puede apuntar a un punto y leer su temperatura, y puede ajustar después parámetros como la emisividad, la distancia, la temperatura reflejada y la humedad. Según la guía de Heliguy, distribuidor de DJI, sin radiometría no hay posibilidad de realizar una evaluación posterior de la imagen.

| Aspecto | Cámara radiométrica | Cámara no radiométrica |
|---|---|---|
| Qué muestra | Imagen con un valor de temperatura por píxel | Imagen de contraste entre zonas más y menos calientes |
| Lectura de un punto | Se puede medir la temperatura de un punto | No hay valor de temperatura |
| Ajuste posterior | Permite ajustar emisividad, distancia, temperatura reflejada y humedad | No permite evaluación posterior |
| Uso en emergencias | Medir un punto caliente, comparar su evolución y conservar datos para el informe | Identificar diferencias visibles durante el vuelo |
| Qué exigir en la ficha | Indicar que el sensor es radiométrico y los rangos de medición | Confirmar qué no mide |

Para emergencias, la diferencia se traduce en tres usos: medir un punto caliente con un valor y no solo verlo, comparar la evolución de una zona a lo largo de una intervención y conservar datos que puedan revisarse en el informe posterior.

## Plataformas de referencia y sus datos declarados

Las plataformas de emergencia de referencia declaran radiometría con rangos definidos.

| Plataforma | Sensor térmico | Rangos de medición declarados | Fuente |
|---|---|---|---|
| DJI Matrice 4T | 640×512, píxel de 12 µm, NETD ≤50 mK | −20 a 150 °C (alta ganancia) y 0 a 550 °C (baja ganancia) | Especificaciones DJI |
| DJI Matrice 30T | 640×512 en modo normal y 1280×1024 en superresolución | −20 a 150 °C (alta ganancia) y 0 a 500 °C (baja ganancia) | Especificaciones DJI |
| DJI Mavic 3 Thermal | 640×512, radiométrico | Consultar la ficha de la [plataforma](/productos/drones-emergencia/dji-enterprise/mavic-3-thermal/) | Catálogo |

### Alta ganancia y baja ganancia

Los dos rangos existen porque el sensor cambia de sensibilidad. Elegir el modo equivocado para la escena produce una imagen saturada o sin contraste, igual que ocurre con la sensibilidad de una [cámara térmica de mano](/blog/nfpa-1801-camaras-termicas-bomberos/).

| Modo | Rango de medición (Matrice 4T) | Para qué sirve | Riesgo de elegirlo mal |
|---|---|---|---|
| Alta ganancia | −20 a 150 °C | Distinguir diferencias pequeñas de temperatura, por ejemplo personas en terreno o puntos calientes moderados | Saturación si hay zonas muy calientes en la escena |
| Baja ganancia | 0 a 550 °C | Escenas con temperaturas altas, como un incendio activo | Menos detalle en diferencias pequeñas de temperatura |

## Cómo interpretar la resolución y la sensibilidad

La resolución térmica de 640×512 píxeles que publican las plataformas de emergencia de referencia es muy inferior a la de una cámara visible de 48 megapíxeles. Por eso las plataformas combinan sensores: la cámara térmica detecta el calor y las cámaras de gran angular y zoom (la Matrice 4T declara tres cámaras de 48 MP, además del sensor térmico) permiten identificar lo que el calor señala.

- **Zoom digital.** La ficha de la Matrice 4T declara un zoom digital de 28× en la cámara térmica; ese zoom amplía la imagen pero no agrega detalle, de modo que conviene volar más cerca antes que confiar en el zoom digital.
- **Sensibilidad (NETD).** Un NETD de 50 mK o menos, como el declarado por la Matrice 4T, es un dato que conviene comparar entre fichas técnicas, siempre con la misma metodología de medición.
- **Superresolución.** La Matrice 30T declara 1280×1024 en modo de superresolución; debe confirmarse en la ficha si ese modo aplica a la operación que se necesita.

## Lo que la imagen térmica no muestra

Los límites son conocidos y aparecen con consistencia en las guías de servicios contra incendio. El Servicio Rural de Incendios de Nueva Gales del Sur (Australia) advierte en su guía sobre cámaras térmicas que los objetos de baja emisividad, como el vidrio, no dan lecturas exactas por su naturaleza reflectante, que la cámara no puede ver a través de las paredes ni leer superficies reflectantes, que tiene una percepción de profundidad limitada y que nunca debe usarse como única fuente de información.

### Comportamiento por tipo de superficie

| Superficie | Qué ocurre | Efecto en la lectura |
|---|---|---|
| Vidrio | Refleja la radiación del entorno y no deja pasar la del interior | No sirve para ver qué ocurre dentro de un cuarto ni para leer su temperatura |
| Metales brillantes | Baja emisividad: reflejan en vez de emitir | Pueden aparentar más frío o más calor del real |
| Superficies mojadas | Reflejan la radiación del entorno | Lecturas poco confiables |
| Paredes y techos | La cámara ve la cara exterior | Un muro caliente indica calor en esa superficie, no la ubicación exacta del fuego detrás |
| Superficies mate no metálicas | En general, emisividad más alta | En general, lecturas más confiables que en las anteriores |

### Condiciones ambientales que modifican la imagen

Heliguy señala varios factores que afectan la transmisión infrarroja y la lectura.

| Factor | Efecto descrito por la fuente |
|---|---|
| Lluvia, humo, nieve y viento fuerte | Reducen la transmisión infrarroja |
| Aire cálido y húmedo | Hace que las lecturas parezcan más frías de lo real |
| Radiación solar | Puede producir un cruce térmico en el que los objetos pierden contraste |

## Cómo leer la imagen en escena

La lectura responsable combina la imagen térmica con un segundo dato antes de tomar una decisión. La tabla resume tres casos frecuentes; son criterios de lectura derivados de los límites anteriores, no un procedimiento operativo, que cada corporación debe definir en su protocolo.

| Lo que se observa | Qué puede significar | Qué verificar antes de decidir |
|---|---|---|
| Zona muy brillante en una cubierta metálica | Punto caliente o reflejo de la radiación solar o de otra fuente | Comparar con la cámara visible y cambiar el ángulo del dron para ver si el punto se mueve |
| Ventana oscura o uniforme | Vidrio que refleja el entorno, no necesariamente un cuarto frío | No inferir temperatura interior; confirmar con el personal en escena |
| Muro caliente en una fachada | Calor en la superficie exterior, sin ubicar el origen | Recorrer el perímetro y confirmar el acceso con la cámara de mano |

### Prácticas de lectura que reducen errores

- **Contrastar siempre con la imagen visible.** La cámara térmica señala; la cámara visible identifica.
- **Cambiar el ángulo del dron.** Los reflejos dependen de la posición del observador, mientras que un punto caliente real no cambia al mover la cámara.
- **Elegir el modo de ganancia según la escena.** Un rango inadecuado satura la imagen o elimina el contraste.
- **Acercarse en vez de ampliar.** El zoom digital no agrega detalle térmico.
- **Considerar el clima y la hora.** La radiación solar y la humedad modifican el contraste y las lecturas.
- **Confirmar antes de actuar.** Una imagen térmica no debe ser la única fuente de información para una decisión operativa.

Esta práctica requiere que el piloto tenga entrenamiento en lectura térmica, no solo en vuelo.

## Errores frecuentes de interpretación

- Tomar una ventana oscura como evidencia de que el interior está frío.
- Confundir el reflejo de una cubierta metálica con un punto caliente.
- Inferir el origen del fuego a partir de la temperatura de un muro.
- Usar baja ganancia en una búsqueda de personas y perder el contraste.
- Confiar en una lectura de temperatura sin considerar emisividad, distancia y humedad.
- Basar la decisión únicamente en la imagen térmica.

## El dron complementa a la cámara térmica de mano

El dron ofrece la vista amplia y exterior; la cámara del servicio de bomberos acompaña a quien entra. La primera ayuda al mando a decidir dónde y cómo intervenir, y la segunda ayuda al equipo a orientarse, buscar y confirmar.

| Criterio | Cámara térmica del dron | Cámara térmica de mano |
|---|---|---|
| Perspectiva | Aérea y exterior | Desde el interior o el perímetro, con el personal |
| Quién la usa | Piloto y observador, con el mando | Personal de intervención |
| Función principal | Reconocimiento, puntos calientes, búsqueda en terreno abierto y documentación | Orientación, búsqueda y confirmación dentro del inmueble |
| Limitaciones principales | Viento, autonomía, regulación aérea | Alcance al interior, exposición del usuario |

Para comparar equipos de mano, consulta la [comparativa de cámaras FLIR, MSA y Bullard](/blog/flir-vs-msa-vs-bullard-camaras-termicas/) y el [catálogo de cámaras térmicas](/productos/camaras-termicas/).

## Qué pedir en la ficha técnica de un dron térmico

Al evaluar propuestas conviene pedir por escrito los datos de la tabla. La ficha del fabricante de la Matrice 30T en el catálogo declara una precisión radiométrica de ±2 °C o ±2 %. Esos datos deben coincidir con la hoja oficial del modelo cotizado.

| Parámetro | Por qué importa | Qué pedir |
|---|---|---|
| Radiometría | Determina si se puede medir y revisar la temperatura | Confirmación de que el sensor es radiométrico |
| Resolución térmica y modos | Define el detalle de la imagen | Resolución nativa y, si existe, modo de superresolución |
| Rangos de medición | Determinan en qué escenas es útil | Rangos de alta y baja ganancia y su precisión declarada |
| Sensibilidad (NETD) | Indica la diferencia mínima de temperatura que distingue | Valor declarado, comparable entre fichas |
| Cámaras visibles y zoom | Permiten identificar lo que el calor señala | Resolución, campo de visión y zoom |
| Software de revisión | Permite analizar las imágenes después del vuelo | Programa incluido y formato de los archivos |

El artículo sobre [fichas técnicas para licitaciones](/blog/fichas-tecnicas-compranet-equipo-contra-incendio/) explica cómo documentar esa coincidencia entre ficha, cotización y modelo entregado.

## Preguntas frecuentes

### ¿Puede un dron ver a través del humo con cámara térmica?

La cámara térmica capta radiación infrarroja, que atraviesa el humo con menos dificultad que la luz visible, pero no de forma ilimitada: el humo denso, la lluvia y la humedad del aire reducen la señal. Por eso conviene contrastar la imagen térmica con la imagen visible.

### ¿Un dron puede ver dentro de un edificio con cámara térmica?

No. La cámara térmica ve la temperatura de la superficie que tiene enfrente y no atraviesa paredes, techos ni vidrio. Puede mostrar calor en la cara exterior de un muro, pero no ubicar con exactitud el fuego detrás.

### ¿Qué es una cámara térmica radiométrica?

Es una cámara que asigna un valor de temperatura a cada píxel y conserva los datos para ajustar después parámetros como emisividad, distancia, temperatura reflejada y humedad. Una cámara no radiométrica solo muestra contraste entre zonas más o menos calientes.

### ¿Basta con una cámara térmica de 640×512 en un dron de bomberos?

Es la resolución que declaran las fichas de las plataformas de emergencia de referencia (Matrice 4T, Matrice 30T y Mavic 3 Thermal). Como la imagen térmica por sí sola no identifica lo que señala el calor, esas plataformas la combinan con cámaras visibles de gran angular y zoom.

### ¿Cuándo usar alta ganancia y cuándo baja ganancia?

La alta ganancia resuelve diferencias pequeñas en un rango estrecho de temperaturas y sirve para distinguir personas o puntos calientes moderados; la baja ganancia amplía el rango para escenas con temperaturas altas, a costa de detalle. El piloto debe cambiar de modo según la escena.

## Fuentes

- [DJI Enterprise: especificaciones de la Matrice 4 Series](https://enterprise.dji.com/matrice-4-series/specs)
- [DJI Enterprise: especificaciones de la Matrice 30 Series](https://enterprise.dji.com/matrice-30/specs)
- [Heliguy: guía de termografía con drones](https://www.heliguy.com/blogs/posts/guide-to-thermal-imaging)
- [NSW Rural Fire Service: Thermal imaging cameras (Volume 37, No. 2)](https://www.rfs.nsw.gov.au/__data/assets/pdf_file/0014/33125/Vol-37-No-2-Liftout-Thermal-Imaging-cameras-for-website.pdf)
