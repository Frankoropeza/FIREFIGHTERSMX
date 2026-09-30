---
title: "Dron con cámara térmica en incendios: qué ve, qué no ve y cómo leer la imagen"
seoTitle: "Dron con cámara térmica en incendios: qué ve y qué no ve"
description: "Cómo funciona la cámara térmica de un dron, qué es la radiometría y qué errores de lectura debe evitar el mando en incendios: vidrio, humo, reflejos y emisividad."
pubDate: 2026-09-30
category: "Drones de Emergencia"
tags: ["drones de emergencia", "dron térmico", "cámara térmica", "radiometría", "incendios"]
image:
  url: "/images/categorias/drones-emergencia.avif"
  alt: "Imagen térmica capturada por un dron sobre una estructura con puntos de calor"
---

La cámara térmica de un dron no ve el fuego: mide radiación infrarroja y la convierte en una imagen que representa diferencias de temperatura aparente. Esa distinción parece técnica, pero es la que separa un uso útil de un error de interpretación en escena. Una ventana oscura no significa necesariamente que el cuarto esté frío, y una cubierta metálica brillante puede mostrar un calor que no tiene. Quien decide con base en la imagen térmica debe saber qué mide el sensor, qué corrige la radiometría y en qué condiciones el resultado deja de ser confiable.

Este artículo forma parte de la serie sobre [drones de emergencia](/productos/drones-emergencia/) y acompaña al análisis general sobre [por qué los drones ya son parte del equipo contra incendio](/blog/drones-para-bomberos-mexico-importancia-equipo-contra-incendio/). Aquí se detalla la imagen térmica; el [marco normativo](/blog/normativa-drones-emergencia-mexico-nom-107-afac-nfpa-2400/) y la [selección de plataformas](/blog/como-equipar-corporacion-bomberos-con-drones-plataformas-pilotos-protocolo/) tienen su propio artículo.

## Qué mide realmente una cámara térmica

Todo objeto emite radiación infrarroja en proporción a su temperatura y a una propiedad de su superficie llamada emisividad. El sensor de la cámara capta esa radiación y la representa con una paleta de colores o de grises. Por eso la imagen describe la temperatura aparente de la superficie, no la temperatura del aire ni de lo que hay detrás de ella.

Hay tres consecuencias prácticas. La primera es que la cámara solo ve la superficie que tiene enfrente: no atraviesa muros ni techos. La segunda es que dos materiales a la misma temperatura pueden verse distintos si su emisividad es diferente. La tercera es que la imagen cambia con la distancia, la humedad del aire y la radiación que la superficie refleja del entorno. La imagen es una aproximación útil, no una medición directa de cada punto.

## Radiométrica y no radiométrica: la diferencia que importa en la ficha técnica

Una cámara térmica no radiométrica produce una imagen de contraste: muestra qué zona está más caliente que otra, pero no asigna un valor de temperatura a cada píxel. Una cámara radiométrica sí lo hace, de modo que el operador puede apuntar a un punto y leer su temperatura, y puede ajustar después parámetros como la emisividad, la distancia, la temperatura reflejada y la humedad. Según la guía de Heliguy, distribuidor de DJI, sin radiometría no hay posibilidad de realizar una evaluación posterior de la imagen.

Para emergencias, la diferencia se traduce en tres usos: medir un punto caliente con un valor y no solo verlo, comparar la evolución de una zona a lo largo de una intervención y conservar datos que puedan revisarse en el informe posterior. Las plataformas de referencia para bomberos declaran radiometría con rangos definidos.

| Plataforma | Sensor térmico | Rangos de medición declarados | Fuente |
|---|---|---|---|
| DJI Matrice 4T | 640×512, píxel de 12 µm, NETD ≤50 mK | −20 a 150 °C (alta ganancia) y 0 a 550 °C (baja ganancia) | Especificaciones DJI |
| DJI Matrice 30T | 640×512 en modo normal y 1280×1024 en superresolución | −20 a 150 °C (alta ganancia) y 0 a 500 °C (baja ganancia) | Especificaciones DJI |
| DJI Mavic 3 Thermal | 640×512, radiométrico | Consultar la ficha de la [plataforma](/productos/drones-emergencia/dji-enterprise/mavic-3-thermal/) | Catálogo |

Los dos rangos existen porque el sensor cambia de sensibilidad. La alta ganancia resuelve diferencias pequeñas en un rango estrecho de temperaturas; la baja ganancia amplía el rango para zonas muy calientes a costa de menos detalle. Elegir el modo equivocado para la escena produce una imagen saturada o sin contraste, igual que ocurre con la sensibilidad de una [cámara térmica de mano](/blog/nfpa-1801-camaras-termicas-bomberos/).

## Cómo interpretar la resolución y la sensibilidad

La resolución térmica de 640×512 píxeles que publican las plataformas de emergencia de referencia es muy inferior a la de una cámara visible de 48 megapíxeles. Por eso las plataformas combinan sensores: la cámara térmica detecta el calor y las cámaras de gran angular y zoom (la Matrice 4T declara tres cámaras de 48 MP, además del sensor térmico) permiten identificar lo que el calor señala. La ficha de la Matrice 4T también declara un zoom digital de 28× en la cámara térmica; ese zoom amplía la imagen pero no agrega detalle, de modo que conviene volar más cerca antes que confiar en el zoom digital.

El NETD (siglas en inglés de diferencia de temperatura equivalente al ruido) expresa la sensibilidad del sensor: cuanto menor es el valor, menor es la diferencia de temperatura que puede distinguir. Un NETD de 50 mK o menos, como el declarado por la Matrice 4T, es un dato que conviene comparar entre fichas técnicas, siempre con la misma metodología de medición.

## Lo que la imagen térmica no muestra

Los límites son conocidos y aparecen con consistencia en las guías de servicios contra incendio. El Servicio Rural de Incendios de Nueva Gales del Sur (Australia) advierte en su guía sobre cámaras térmicas que los objetos de baja emisividad, como el vidrio, no dan lecturas exactas por su naturaleza reflectante, que la cámara no puede ver a través de las paredes ni leer superficies reflectantes, que tiene una percepción de profundidad limitada y que nunca debe usarse como única fuente de información.

Esas advertencias se traducen en situaciones concretas en un incendio:

- **Vidrio.** Una ventana refleja la radiación del entorno y no deja pasar la del interior, por lo que no sirve para ver qué ocurre dentro de un cuarto.
- **Metales brillantes y superficies mojadas.** Reflejan en vez de emitir, y pueden aparentar más frío o más calor del real.
- **Paredes y techos.** La cámara ve la temperatura de la cara exterior; un muro caliente indica calor en esa superficie, no la ubicación exacta del fuego detrás.
- **Clima.** Heliguy señala que lluvia, humo, nieve y viento fuerte reducen la transmisión infrarroja, que el aire cálido y húmedo hace que las lecturas parezcan más frías y que la radiación solar puede producir un cruce térmico en el que los objetos pierden contraste.

## Cómo leer la imagen en escena

La lectura responsable combina la imagen térmica con un segundo dato antes de tomar una decisión. La tabla resume tres casos frecuentes; son criterios de lectura derivados de los límites anteriores, no un procedimiento operativo, que cada corporación debe definir en su protocolo.

| Lo que se observa | Qué puede significar | Qué verificar antes de decidir |
|---|---|---|
| Zona muy brillante en una cubierta metálica | Punto caliente o reflejo de la radiación solar o de otra fuente | Comparar con la cámara visible y cambiar el ángulo del dron para ver si el punto se mueve |
| Ventana oscura o uniforme | Vidrio que refleja el entorno, no necesariamente un cuarto frío | No inferir temperatura interior; confirmar con el personal en escena |
| Muro caliente en una fachada | Calor en la superficie exterior, sin ubicar el origen | Recorrer el perímetro y confirmar el acceso con la cámara de mano |

El cambio de ángulo es una práctica sencilla con valor real: los reflejos dependen de la posición del observador, mientras que un punto caliente real no cambia al mover la cámara. Esa comprobación requiere que el piloto tenga entrenamiento en lectura térmica, no solo en vuelo.

## El dron complementa a la cámara térmica de mano

El dron ofrece la vista amplia y exterior; la cámara del servicio de bomberos acompaña a quien entra. La primera ayuda al mando a decidir dónde y cómo intervenir, y la segunda ayuda al equipo a orientarse, buscar y confirmar. Para comparar equipos de mano, consulta la [comparativa de cámaras FLIR, MSA y Bullard](/blog/flir-vs-msa-vs-bullard-camaras-termicas/) y el [catálogo de cámaras térmicas](/productos/camaras-termicas/).

## Qué pedir en la ficha técnica de un dron térmico

Al evaluar propuestas conviene pedir por escrito si el sensor es radiométrico, su resolución y su modo de superresolución si existe, los rangos de medición y su precisión declarada, la sensibilidad (NETD), la cámara visible integrada y los zooms, y el software para revisar las imágenes después del vuelo. La ficha del fabricante de la Matrice 30T en el catálogo declara una precisión radiométrica de ±2 °C o ±2 %. Esos datos deben coincidir con la hoja oficial del modelo cotizado; el artículo sobre [fichas técnicas para licitaciones](/blog/fichas-tecnicas-compranet-equipo-contra-incendio/) explica cómo documentar esa coincidencia.

## Preguntas frecuentes

### ¿Puede un dron ver a través del humo con cámara térmica?

La cámara térmica capta radiación infrarroja, que atraviesa el humo con menos dificultad que la luz visible, pero no de forma ilimitada: el humo denso, la lluvia y la humedad del aire reducen la señal. Por eso conviene contrastar la imagen térmica con la imagen visible.

### ¿Un dron puede ver dentro de un edificio con cámara térmica?

No. La cámara térmica ve la temperatura de la superficie que tiene enfrente y no atraviesa paredes, techos ni vidrio. Puede mostrar calor en la cara exterior de un muro, pero no ubicar con exactitud el fuego detrás.

### ¿Qué es una cámara térmica radiométrica?

Es una cámara que asigna un valor de temperatura a cada píxel y conserva los datos para ajustar después parámetros como emisividad, distancia, temperatura reflejada y humedad. Una cámara no radiométrica solo muestra contraste entre zonas más o menos calientes.

### ¿Basta con una cámara térmica de 640×512 en un dron de bomberos?

Es la resolución que declaran las fichas de las plataformas de emergencia de referencia (Matrice 4T, Matrice 30T y Mavic 3 Thermal). Como la imagen térmica por sí sola no identifica lo que señala el calor, esas plataformas la combinan con cámaras visibles de gran angular y zoom.

## Fuentes

- [DJI Enterprise: especificaciones de la Matrice 4 Series](https://enterprise.dji.com/matrice-4-series/specs)
- [DJI Enterprise: especificaciones de la Matrice 30 Series](https://enterprise.dji.com/matrice-30/specs)
- [Heliguy: guía de termografía con drones](https://www.heliguy.com/blogs/posts/guide-to-thermal-imaging)
- [NSW Rural Fire Service: Thermal imaging cameras (Volume 37, No. 2)](https://www.rfs.nsw.gov.au/__data/assets/pdf_file/0014/33125/Vol-37-No-2-Liftout-Thermal-Imaging-cameras-for-website.pdf)
