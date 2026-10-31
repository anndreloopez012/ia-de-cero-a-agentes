# Taller Práctico: IA de cero a Agentes

## Fuente académica para la web

**Estado:** propuesta de integración web, construida a partir de la malla académica final y lista para revisión editorial.  
**Duración:** 4 clases de 4 horas; 16 horas en total.  
**Metodología:** 50 % teoría y 50 % práctica individual. Cada clase contiene 110 minutos de teoría, 110 minutos de práctica y 20 minutos de pausas.  
**Público:** cualquier persona adulta con ganas de aprender IA aplicada. No se requiere saber programar.  
**Plataformas:** ChatGPT, Claude o Gemini; cada persona trabaja con una sola, la que elija. Las clases 1 y 2 pueden realizarse con cuentas gratuitas. Desde la clase 3 se requiere una suscripción de pago activa en al menos una de estas plataformas.  
**Principio de seguridad:** todos los ejercicios utilizan datos ficticios, públicos, autorizados o anonimizados.

> La IA útil se construye como una casa: primero se preparan los cimientos, después se dibujan planos claros, luego se organizan herramientas reutilizables y, por último, se coordina un equipo capaz de trabajar con autonomía limitada y supervisión humana.

---

## Antes de comenzar: lo que se aprenderá en las cuatro clases

### Clase 1 — Cimientos: configuración y fundamentos

La persona configura la plataforma que eligió (ChatGPT, Claude o Gemini) con criterios de privacidad, memoria y propósito; comprende cómo funciona una IA generativa; aprende el vocabulario que utilizará durante todo el taller; distingue prompt, proyecto, herramienta, skill y agente; y practica una biblioteca de 20 comandos esenciales.

**Se lleva:** pasaporte de configuración de la plataforma que eligió, glosario personal y biblioteca de 20 comandos con ejemplos.

### Clase 2 — Planos: prompts que se pueden comprender y verificar

La persona transforma una petición vaga en una instrucción completa mediante ROCAV: Rol, Objetivo, Contexto, Acuerdos y Verificación. Aprende patrones para pedir aclaraciones, trabajar con fuentes, comparar alternativas, controlar el formato y mejorar una salida modificando una sola variable por ronda.

**Se lleva:** portafolio de cinco prompts ROCAV probados, comparados y evaluados.

### Clase 3 — Herramientas: skills reutilizables

La persona convierte una tarea que ya sabe resolver en un procedimiento reutilizable. Define cuándo debe activarse, qué entradas necesita, qué pasos sigue, qué entrega, qué límites tiene y cómo se prueba. Construye una ficha portable y la adapta a la plataforma de pago disponible.

**Se lleva:** Skill 1.0 con pruebas de caso feliz, caso borde, fallo y no activación.

### Clase 4 — Equipo autónomo: agentes y subagentes responsables

La persona construye un agente coordinador de bajo riesgo que divide un objetivo, delega misiones delimitadas a dos subagentes, integra sus resultados y se detiene cuando necesita autorización. Diseña permisos, hooks de control, guardrails, contratos de delegación y trazas.

**Se lleva:** agente coordinador funcional, dos subagentes especializados, tres pruebas documentadas y demostración final.

### La casa completa

| Etapa de construcción | Clase | Pregunta que resuelve | Producto visible |
|---|---|---|---|
| Cimientos | 1. Configuración y fundamentos | ¿Cómo preparo el terreno para trabajar con IA sin improvisar ni exponer información? | Pasaporte, glosario y comandos |
| Planos | 2. Prompts ROCAV | ¿Cómo describo con claridad lo que quiero construir y cómo sabré si quedó bien? | Cinco prompts evaluados |
| Herramientas | 3. Skills | ¿Cómo convierto una forma de trabajar en una herramienta que pueda reutilizar? | Skill 1.0 probada |
| Equipo autónomo | 4. Agentes y subagentes | ¿Cómo coordino tareas, permisos, especialistas y revisiones sin perder el control? | Sistema multiagente de bajo riesgo |

---

## Cómo se aprende en el taller

Cada punto sigue el mismo ciclo para que una persona pueda aprender sin depender de conocimientos técnicos previos:

1. **Entender:** definición sencilla, propósito, límites y analogía.
2. **Ver:** demostración narrada, incluida una falla útil.
3. **Hacer:** ejercicio individual con pasos numerados.
4. **Probar:** caso nuevo, caso borde o error controlado.
5. **Explicar:** evidencia y explicación breve con palabras propias.

La velocidad no es el criterio de éxito. Se evalúan claridad, evidencia, capacidad de revisión y control humano. Los nombres de botones pueden cambiar entre cuentas o regiones; por eso se enseña la intención de cada configuración, no la memorización ciega de una pantalla.

---

# CLASE 1 — CIMIENTOS: CONFIGURACIÓN Y FUNDAMENTOS

## Ficha de la clase

**Pregunta guía:** ¿Cómo preparo ChatGPT, Claude o Gemini para trabajar con claridad, seguridad y criterio?  
**Objetivo:** configurar la plataforma que elegiste (ChatGPT, Claude o Gemini), comprender sus límites y usar el vocabulario y los comandos esenciales que servirán de base para el resto del taller.  
**Valor que se lleva:** deja de usar la IA como una caja misteriosa y comienza a tomar decisiones conscientes sobre datos, memoria, contexto, funciones y calidad de respuesta.  
**Producto:** pasaporte de configuración, glosario personal y biblioteca de 20 comandos.  
**Cuenta necesaria:** las actividades pueden realizarse con cuentas gratuitas.

## Analogía de construcción

Antes de levantar paredes se inspecciona el terreno, se decide dónde se construirá y se protegen agua, energía y accesos. Configurar una IA cumple la misma función: define qué puede recordar, qué datos puede usar, para qué proyecto se prepara y qué reglas debe seguir. Un gran prompt sobre una cuenta mal configurada es como una pared bonita sobre un suelo inestable.

## Ruta de 240 minutos

| Tiempo | Tipo | Punto | Resultado |
|---|---|---|---|
| 0–10 | Práctica | Diagnóstico inicial | Línea base individual |
| 10–30 | Teoría | 1. Qué es y qué no es una IA generativa | Modelo mental |
| 30–45 | Práctica | Ejercicio 1 | Entrada, salida y control señalados |
| 45–65 | Teoría | 2. Privacidad y clasificación de datos | Semáforo de datos |
| 65–85 | Práctica | Ejercicio 2 | Caso anonimizado |
| 85–115 | Teoría | 3. Configuración de ChatGPT, Claude o Gemini | Mapa de ajustes de tu plataforma |
| 115–135 | Práctica | Ejercicio 3, primera parte | Pasaporte parcial |
| 135–145 | Pausa | — | Descanso |
| 145–165 | Teoría | 4. Vocabulario de trabajo | Glosario comprensible |
| 165–185 | Práctica | Ejercicio 4 | Mapa de conceptos |
| 185–205 | Teoría | 5. Elección de recurso y 20 comandos | Biblioteca comentada |
| 205–220 | Práctica | Ejercicio 5, primera parte | Cinco comandos probados |
| 220–230 | Pausa | — | Descanso |
| 230–240 | Práctica | Ejercicio 5, cierre | Ticket de salida |

**Comprobación del balance:** 110 minutos de teoría + 110 minutos de práctica individual + 20 minutos de pausas.

## Punto 1. Qué es y qué no es una IA generativa

### Explicación sencilla

Una IA generativa es un sistema entrenado con muchos ejemplos para producir una salida probable a partir de una entrada. Puede redactar, resumir, clasificar, comparar, proponer imágenes o ayudar a organizar un plan. Su respuesta puede ser convincente y aun así estar incompleta o equivocada.

El modelo mental de la clase tiene cuatro partes:

1. **Entrada:** mensaje, archivo, instrucción o dato que recibe.
2. **Proceso:** cálculo de una respuesta probable a partir de patrones y contexto.
3. **Salida:** borrador en forma de texto, tabla, imagen, plan o acción propuesta.
4. **Control:** la persona verifica, corrige, aprueba o descarta.

La IA no “sabe” como una persona, no garantiza verdad y no reemplaza la responsabilidad de quien utiliza el resultado.

**Idea visual para la web:** una animación de cuatro bloques entra–procesa–sale–verifica. La animación debe detenerse en “control humano” para mostrar que el ciclo no termina con la respuesta de la IA.

### Ejercicio individual 1 — Desarmar una respuesta

**Propósito:** reconocer la diferencia entre lo que se pidió, lo que la IA produjo y lo que todavía debe verificarse.  
**Duración total:** 25 minutos, incluyendo el diagnóstico inicial.

**Caso base ficticio:** Wendy atiende una tienda de barrio en Mixco y le escribe a la IA: “Necesito cinco ideas para aprender a llevar las cuentas de mi tienda durante un mes”.

**Pega en la IA:** Necesito cinco ideas para aprender a llevar las cuentas de mi tienda durante un mes

**Pasos:**

1. Antes de abrir una IA, escribe qué esperarías recibir y qué podría salir mal.
2. Envía exactamente la petición del caso base, sin agregar detalles.
3. Copia la respuesta en la hoja de trabajo.
4. Marca con cuatro etiquetas: entrada, salida útil, supuesto y dato por verificar.
5. Elige una afirmación concreta y explica cómo la comprobarías sin confiar solo en el tono de la respuesta.
6. Resume en una oración: “La IA me ayuda a ___; yo sigo siendo responsable de ___”.

**Ejemplo de base:** si la IA recomienda “dedicar 30 minutos diarios al cierre de caja”, eso es una propuesta, no una regla universal. La comprobación puede ser contrastarla con el horario real de Wendy, que atiende de 6:00 a 21:00, y ajustar el tiempo, por ejemplo a 10 minutos al cerrar.

**Evidencia:** captura o copia de la petición y la salida, con al menos un supuesto y una verificación señalados.  
**Criterio de éxito:** la persona distingue claramente entrada, salida y control humano; no presenta la respuesta como verdad certificada.

## Punto 2. Privacidad, autorización y semáforo de datos

### Explicación sencilla

Antes de enviar información se debe preguntar: “¿Tengo permiso para usarla aquí y realmente necesito compartirla?”. La práctica utiliza un semáforo:

- **Verde:** información pública, ficticia o correctamente anonimizada. Puede usarse para practicar.
- **Amarillo:** información interna, laboral o de terceros. Se revisa autorización y se comparte solo lo mínimo necesario.
- **Rojo:** contraseñas, códigos, datos bancarios, expedientes sensibles, secretos comerciales o información sin permiso. No se carga.

El proceso previo es: **minimizar → anonimizar → verificar permiso → revisar antes de enviar**. Anonimizar no es solo borrar un nombre; también se deben retirar correos, teléfonos, identificadores y combinaciones que permitan reconocer a alguien.

**Idea visual para la web:** una casa con tres puertas: verde permite pasar un caso ficticio, amarillo activa una revisión y rojo bloquea credenciales y datos sensibles.

### Ejercicio individual 2 — Convertir un caso amarillo en uno verde

**Propósito:** practicar la reducción y anonimización de información antes de utilizarla con una IA.  
**Duración:** 20 minutos.

**Insumo ficticio:**

> Ana López, teléfono 5555-0101, trabaja en la cooperativa ficticia Nueva Aurora, en Xela. Escribió que no podrá asistir a la reunión de socios del martes porque tiene cita médica en el IGSS. Pide que el resumen se envíe a ana.lopez@example.com.

**Pasos:**

1. Subraya todos los datos que identifican o describen información privada.
2. Clasifica cada dato como verde, amarillo o rojo y explica por qué.
3. Define el objetivo real de la tarea. Ejemplo: redactar una nota neutral de ausencia.
4. Elimina todo dato que no sea necesario para ese objetivo.
5. Sustituye lo indispensable por marcadores: `[persona]`, `[fecha]`, `[medio autorizado]`.
6. Redacta una versión segura del caso y úsala en la IA.
7. Revisa la respuesta para confirmar que no reintrodujo datos inventados.

**Ejemplo de base:** “Redacta una nota breve y neutral indicando que `[persona]` no asistirá a `[reunión]`. No menciones motivos de salud ni inventes detalles. Marca el medio de seguimiento como `[medio autorizado]`”.

**Evidencia:** caso original marcado, versión minimizada y salida final.  
**Criterio de éxito:** la versión final conserva el propósito sin exponer nombre, teléfono, correo, cooperativa ni motivo médico.

## Punto 3. Configurar ChatGPT, Claude o Gemini

### Explicación sencilla

Configurar no significa activar todo. Significa elegir de forma consciente idioma, profundidad, formato, memoria, historial, uso de datos, conexiones y espacio de trabajo. Las rutas pueden variar según plan, región y actualización.

Cada persona trabaja con una sola plataforma, la que elija. Las tres secciones siguientes sirven de referencia para encontrar cómo se llama cada ajuste en la suya; no hace falta configurar las tres.

### ChatGPT: intenciones de configuración

- **Personalización e instrucciones:** establecer idioma, claridad, formato y conducta cuando falte información.
- **Memoria:** revisar qué puede reutilizar entre chats; administrar o eliminar recuerdos cuando sea necesario.
- **Controles de datos:** revisar el uso de conversaciones para mejorar modelos.
- **Chat temporal:** usar cuando no se desea que la conversación alimente la memoria del trabajo habitual.
- **Proyecto:** agrupar instrucciones, archivos autorizados y conversaciones de un mismo objetivo.
- **Skills, si aparecen en la cuenta:** revisar procedencia, archivos, instrucciones y código antes de utilizar una skill de terceros.

### Claude: intenciones de configuración

- **Perfil y preferencias:** definir cómo se trabaja normalmente.
- **Estilo:** elegir una forma de expresión sin confundir “formal” con “correcta”.
- **Privacidad:** revisar controles disponibles, exportación y uso para mejora.
- **Proyecto:** separar reglas y conocimiento del trabajo actual.
- **Artifacts:** iterar un documento, código o componente en un espacio separado, si está disponible.
- **Skills/capacidades:** comprobar plan, procedencia y permisos antes de activarlas.

### Gemini: intenciones de configuración

- **Personalización e instrucciones:** definir preferencias estables cuando la cuenta lo permita.
- **Actividad:** revisar historial, retención y autoeliminación.
- **Chat temporal:** reducir memoria o personalización del chat, entendiendo que puede existir retención operativa limitada.
- **Aplicaciones conectadas:** conectar únicamente servicios necesarios y autorizados.
- **Gems:** crear un asistente con pautas repetidas cuando esté disponible.
- **Archivos, Deep Research y Canvas:** elegir fuentes, revisar el plan y controlar la salida.
- **Skills en cuentas elegibles:** verificar requisitos de plan, edad, región y actividad.

Desconectar una aplicación no necesariamente elimina la actividad ya guardada. Siempre se revisan conexión y actividad por separado.

**Instrucción base recomendada:** “Responde en español claro. Comienza con una síntesis. Define tecnicismos. Usa pasos numerados. Pregunta si falta un dato material. Separa hechos, inferencias y datos por verificar. No inventes fuentes”.

**Idea visual para la web:** tres paneles de referencia, uno por plataforma; la persona elige uno y ese panel se conecta a cuatro decisiones comunes: personalización, memoria/actividad, privacidad y proyecto.

### Ejercicio individual 3 — Pasaporte de configuración

**Propósito:** revisar la plataforma que elegiste con un criterio claro, aunque los botones cambien según la cuenta.  
**Duración:** 20 minutos de trabajo en clase; el pasaporte se puede completar después si una función no aparece.

**Pasos:**

1. Abre la plantilla de pasaporte y escribe arriba la plataforma que elegiste: ChatGPT, Claude o Gemini.
2. En tu plataforma ubica y registra: idioma o estilo, instrucciones, memoria o actividad, control de datos, chat temporal, proyectos o equivalente y conexiones.
3. Para cada opción marca: `activada`, `desactivada`, `no disponible` o `pendiente de revisar`.
4. Escribe el motivo de cada decisión en una oración. No copies solo el nombre del botón.
5. Crea un espacio llamado `Taller IA - prácticas` o su equivalente.
6. Agrega únicamente una instrucción de prueba y ningún archivo sensible.
7. Ejecuta la misma pregunta breve en un chat normal y dentro del espacio del taller, por ejemplo: “Dame tres ideas de refacción para la reunión de la iglesia con Q150”, y anota una diferencia observable.
8. Cierra con una decisión: qué ajuste conservarías para el siguiente ejercicio y por qué.

**Ejemplo de base:** “Memoria: desactivada para esta práctica porque usaré casos ficticios aislados, como la tienda de Wendy; proyecto: creado para conservar únicamente las instrucciones y ejercicios del taller”.

**Evidencia:** pasaporte de tu plataforma con al menos cinco decisiones justificadas.  
**Criterio de éxito:** la persona puede explicar la intención de cada ajuste, identifica funciones no disponibles sin inventarlas y no ha cargado datos sensibles.

## Punto 4. Vocabulario que se usará durante todo el taller

### Definiciones en lenguaje sencillo

| Concepto | Definición práctica | Analogía de construcción |
|---|---|---|
| Modelo | Sistema entrenado que produce una salida probable. | La maquinaria disponible |
| Prompt | Mensaje completo que orienta una respuesta. | La orden de trabajo |
| Contexto | Información que cambia cómo se interpreta la tarea. | El terreno y las condiciones del lugar |
| Token | Unidad pequeña de texto que procesa el modelo; no siempre equivale a una palabra. | Piezas pequeñas de material |
| Ventana de contexto | Cantidad de información que el modelo puede considerar en un momento. | La mesa de planos visible |
| Salida | Borrador producido por la IA; no es verdad certificada. | La pieza construida que debe inspeccionarse |
| Alucinación | Dato incorrecto o inventado que parece plausible. | Una medida anotada sin haberla comprobado |
| Iteración | Mejora por rondas con cambios observables. | Ajustar una pieza y volver a probar |
| Multimodal | Capacidad de trabajar con texto, imagen, audio u otros formatos. | Usar distintos tipos de material |
| Memoria | Información que una plataforma puede reutilizar entre conversaciones. | Libreta de obra reutilizada |
| Proyecto | Espacio que agrupa chats, archivos e instrucciones. | Carpeta completa de la construcción |
| Herramienta | Capacidad para buscar, leer, calcular o actuar. | Taladro, regla o medidor |
| Skill | Procedimiento reutilizable para una tarea repetida. | Manual para usar bien una herramienta |
| Agente | Sistema que persigue un objetivo mediante ciclos y herramientas. | Equipo que decide el siguiente paso dentro de límites |
| Trigger | Condición que inicia una acción. | Señal que ordena comenzar |
| Hook | Punto del ciclo en el que se ejecuta una regla o registro. | Inspección obligatoria antes o después de una tarea |
| Loop | Ciclo de planear, actuar, observar y ajustar, con límite y salida. | Rondas de construir–medir–corregir |
| Guardrail | Regla que restringe, transforma, detiene o escala. | Baranda que evita entrar en una zona peligrosa |
| Humano en el ciclo | Persona que revisa o aprueba puntos críticos. | Responsable que autoriza etapas sensibles |

En marketing, *hook* también significa gancho de atención. En este taller, al hablar de agentes, *hook* significa punto técnico de intervención. Se debe declarar siempre cuál sentido se utiliza.

**Idea visual para la web:** mapa interactivo de una obra; al seleccionar un elemento aparece el término técnico y su definición.

### Ejercicio individual 4 — Mapa de conceptos con decisiones

**Propósito:** relacionar términos que suelen confundirse.  
**Duración:** 20 minutos.

**Pasos:**

1. Dibuja cinco cajas: prompt, proyecto, herramienta, skill y agente.
2. Debajo de cada caja escribe “sirve para” y “no sirve para”.
3. Une trigger, hook, loop, guardrail y humano en el ciclo con el elemento donde tendrían sentido.
4. Clasifica estos casos: una pregunta única, como redactar el aviso de que la tortillería cierra el Jueves Santo; una carpeta con los archivos del comité de la feria; una búsqueda del horario de atención de la municipalidad; un proceso repetible, como armar cada lunes la lista de compras del comedor; una tarea con varios pasos que decide cómo continuar, como organizar la excursión del colegio a Antigua.
5. Escribe una explicación de 60 segundos usando la analogía de la casa.

**Ejemplo de base:** “Un prompt es una orden puntual, como pedir el aviso de la tortillería; una skill es el procedimiento reutilizable para repetir bien esa clase de orden; un agente usa procedimientos y herramientas para decidir varios pasos dentro de límites”.

**Evidencia:** mapa con cinco cajas, relaciones y una explicación escrita de máximo 120 palabras.  
**Criterio de éxito:** la persona diferencia los cinco recursos y utiliza trigger, hook, loop y guardrail sin intercambiarlos.

## Punto 5. Elegir el recurso correcto y usar 20 comandos esenciales

### Regla de elección

- Para una respuesta puntual: **prompt**.
- Para conservar contexto de un trabajo: **proyecto**.
- Para repetir un procedimiento: **skill**.
- Para leer, buscar, calcular o actuar: **herramienta**.
- Para decidir varios pasos mediante ciclos y herramientas: **agente**.

### Biblioteca de 20 comandos

Un comando útil combina un verbo preciso, el objeto de trabajo, criterios de calidad, formato y conducta ante vacíos.

1. **Explica:** vuelve comprensible un concepto.
2. **Resume:** reduce conservando lo esencial.
3. **Extrae:** recupera datos explícitos de una fuente.
4. **Clasifica:** asigna elementos a categorías declaradas.
5. **Compara:** muestra similitudes, diferencias y criterio.
6. **Reescribe:** cambia forma sin alterar el sentido autorizado.
7. **Transforma:** convierte de un formato a otro.
8. **Genera:** produce un borrador nuevo bajo condiciones.
9. **Idea:** propone alternativas iniciales.
10. **Planifica:** ordena pasos, recursos y dependencias.
11. **Prioriza:** organiza por un criterio explícito.
12. **Analiza:** descompone y relaciona evidencia.
13. **Critica:** identifica fortalezas, fallas y riesgos.
14. **Verifica:** contrasta contra fuente o criterio.
15. **Pregunta:** solicita información faltante antes de avanzar.
16. **Cita:** vincula afirmaciones con fuentes disponibles.
17. **Simula:** representa un escenario ficticio, sin presentarlo como hecho.
18. **Evalúa:** aplica una rúbrica o criterios.
19. **Mejora:** revisa una versión con cambios observables.
20. **Detente:** define una condición de pausa o finalización.

**Ejemplo completo:** “Analiza `[fuente]` usando `[marco]`; separa observación, inferencia y recomendación. Si falta evidencia, escribe ‘no disponible’. Entrega una tabla y detente antes de asumir”.

**Idea visual para la web:** tarjetas animadas de comandos que se agrupan por comprender, organizar, crear, revisar y controlar.

### Ejercicio individual 5 — Circuito de comandos

**Propósito:** experimentar cómo cambia la salida al cambiar el verbo y los criterios.  
**Duración:** 25 minutos.

**Insumo ficticio:** un texto de ocho líneas sobre la biblioteca comunitaria de un barrio de Cobán, que desea organizar actividades de lectura para niños durante las vacaciones de fin de año.

**Pega en la IA:** La Biblioteca Comunitaria El Esfuerzo, del barrio San Marcos en Cobán, quiere animar a los niños a leer durante las vacaciones de fin de año.
El comité propone tres actividades: hora del cuento, club de lectura y feria del libro usado.
La hora del cuento sería los martes y jueves a las 10:00, para niños de 5 a 8 años.
El club de lectura sería los sábados a las 9:00, para jóvenes de 9 a 14 años.
La feria del libro usado se haría el último domingo de noviembre en el patio de la biblioteca.
Doña Elena coordina la hora del cuento y Josué el club de lectura.
Todavía no saben cuántos voluntarios tendrán ni si habrá refacción.
La biblioteca abre de lunes a sábado de 8:00 a 16:00.

**Pasos:**

1. Elige cinco comandos de categorías diferentes.
2. Para cada uno completa esta plantilla: `[verbo] + [fuente u objeto] + [criterio] + [formato] + [qué hacer si falta información]`.
3. Ejecuta los cinco comandos sobre el mismo texto.
4. Guarda las salidas y anota qué cambió por usar otro verbo.
5. Mejora un comando agregando una condición de “pregunta” o “detente”.
6. Clasifica cuál salida sirve para comprender, cuál para decidir y cuál necesita revisión.
7. Como ticket de salida, explica por qué un verbo solo no es un prompt completo.

**Ejemplo de base:** “Extrae del texto únicamente actividad, público y fecha. Entrega una tabla de tres columnas. Si un dato no aparece, escribe ‘no disponible’; no lo deduzcas”.

**Evidencia:** cinco comandos, cinco salidas y una mejora antes/después.  
**Criterio de éxito:** cada comando tiene objeto, criterio, formato y manejo de vacíos; la persona reconoce que salidas fluidas todavía requieren revisión.

## Cierre de la clase 1

La persona está lista para avanzar cuando puede mostrar su pasaporte, distinguir memoria de historial, localizar los controles de datos o registrar que no están disponibles, clasificar información con el semáforo y explicar la diferencia entre prompt, proyecto, herramienta, skill y agente.

---

# CLASE 2 — PLANOS: PROMPTS ROCAV

## Ficha de la clase

**Pregunta guía:** ¿Cómo convierto una intención en instrucciones que otra persona pueda comprender, ejecutar y evaluar?  
**Objetivo:** diseñar, probar y mejorar prompts completos, verificables y transferibles.  
**Valor que se lleva:** deja de depender de “tener suerte” con una pregunta y aprende a controlar propósito, contexto, formato, límites y verificación.  
**Producto:** portafolio de cinco prompts ROCAV con versión inicial, versión mejorada, evaluación y aprendizaje.  
**Cuenta necesaria:** puede realizarse con una cuenta gratuita.

## Analogía de construcción

Los cimientos ya están listos. Ahora se necesitan planos. Un plano no construye la casa, pero evita que cada persona imagine una casa diferente. ROCAV convierte una intención en un plano: indica quién aporta la perspectiva, qué se busca, qué condiciones existen, qué acuerdos debe respetar y cómo se comprobará el resultado.

## Ruta de 240 minutos

| Tiempo | Tipo | Punto | Resultado |
|---|---|---|---|
| 0–15 | Práctica | Petición vaga | Salida de línea base |
| 15–35 | Teoría | 1. Anatomía de un prompt | Capas identificadas |
| 35–45 | Práctica | Ejercicio 1, cierre | Diagnóstico de supuestos |
| 45–75 | Teoría | 2. ROCAV | Prompt anotado |
| 75–100 | Práctica | Ejercicio 2 | Primer prompt ROCAV |
| 100–120 | Teoría | 3. Patrones de control | Biblioteca de patrones |
| 120–135 | Práctica | Ejercicio 3, primera parte | Patrones aplicados |
| 135–145 | Pausa | — | Descanso |
| 145–150 | Práctica | Ejercicio 3, cierre | Prompt de fuente cerrada |
| 150–170 | Teoría | 4. Loop de mejora | Método A/B |
| 170–195 | Práctica | Ejercicio 4 | Versiones 0.1 y 0.2 |
| 195–215 | Teoría | 5. Rúbrica y transferencia | Criterios de calidad |
| 215–220 | Práctica | Ejercicio 5, primera parte | Revisión inicial |
| 220–230 | Pausa | — | Descanso |
| 230–240 | Práctica | Ejercicio 5, cierre | Portafolio entregable |

**Comprobación del balance:** 110 minutos de teoría + 110 minutos de práctica individual + 20 minutos de pausas.

## Punto 1. Anatomía de un prompt

### Explicación sencilla

- **Prompt:** mensaje completo que dirige una interacción.
- **Instrucción:** una regla dentro del prompt.
- **Contexto:** datos relevantes para interpretar y resolver.
- **Entrada:** material concreto sobre el que se trabaja.
- **Restricción:** límite que evita resultados no deseados.
- **Criterio:** condición para juzgar si la salida es útil.
- **Ejemplo:** muestra del formato o nivel esperado.

Un prompt más completo aumenta claridad y consistencia, pero no vuelve infalible al modelo ni garantiza dos respuestas idénticas.

**Idea visual para la web:** plano de una casa por capas. Cada capa se enciende al agregar objetivo, contexto, restricciones y criterio.

### Ejercicio individual 1 — Radiografía de una petición vaga

**Propósito:** ver cuántas decisiones toma la IA por su cuenta ante una petición vaga y cuáles recuperas al darle cada capa del prompt.  
**Duración:** 25 minutos.

**Caso base ficticio:** Mynor, maestro de un colegio en Chimaltenango, le escribe a la IA para preparar una charla sobre inteligencia artificial.

**Prompt para copiar — La petición vaga de Mynor:**

- Instrucción ::: 2.1 ::: Hazme una presentación ::: Pide un producto, pero no dice para quién ni para qué. Sin esos datos, la IA decide sola la audiencia, el propósito, el tono y la duración.
- Entrada ::: 2.1 ::: sobre inteligencia artificial ::: Es todo el material que recibe: un tema enorme. Sin puntos concretos, la IA elige por su cuenta qué contar y a qué nivel.

**Prompt para copiar — La versión por capas, en el mismo chat:**

- Instrucción ::: 2.1 ::: Ahora hazme de nuevo la presentación sobre inteligencia artificial, esta vez con los datos que siguen. ::: Es la regla principal: dice qué hacer. Sin ella, la IA no sabría si debe rehacer la presentación o solo comentar los datos.
- Contexto ::: 2.1 ::: Soy Mynor, maestro de un colegio en Chimaltenango. La daré a padres de familia en una reunión de 20 minutos. Casi todos usan WhatsApp, pero nunca han usado una IA. ::: Son los datos para interpretar la tarea. Sin ellos, la IA imagina otro público, como alumnos o colegas, y otra duración.
- Entrada ::: 2.1 ::: Quiero tratar estos tres puntos: qué es la inteligencia artificial, cómo pueden usarla sus hijos para las tareas y qué reglas sencillas se pueden poner en casa. ::: Es el material concreto de trabajo. Sin estos puntos, la IA escoge los temas y puede dejar fuera lo que a Mynor le importa.
- Restricción ::: 2.1 ::: Usa un máximo de ocho diapositivas y ningún tecnicismo sin explicar. No inventes cifras ni cites estudios. ::: Pone límites a lo que no quieres. Sin ella, la presentación puede salir larga, técnica o con datos que nadie comprobó.
- Criterio ::: 2.1 ::: Estará bien si, al terminar, un padre o una madre puede explicar con sus palabras qué es la inteligencia artificial y nombrar una regla para su casa. ::: Dice cómo juzgar si sirvió. Sin él, la IA solo cumple con entregar diapositivas, aunque nadie las entienda.
- Ejemplo ::: 2.1 ::: Usa esta forma en cada diapositiva: Título: ¿Qué es la inteligencia artificial? / Ideas: tres frases cortas / Qué diré: dos oraciones sencillas. ::: Muestra la forma esperada. Sin él, cada diapositiva puede salir con una estructura distinta y cuesta más usarla.
- Instrucción ::: 2.1 ::: Al final, compara esta versión con la primera en una tabla de dos columnas, «controlado» y «supuesto»: indica qué decisiones de audiencia, propósito, duración, tono, nivel y formato di yo y cuáles tuviste que suponer tú en la primera. Cierra con cinco preguntas que me habrías hecho para no suponer. ::: Otra regla, ahora para comparar. La IA te muestra lo que supuso; sin esto tendrías dos presentaciones, pero no verías qué cambió ni por qué.

**Evidencia:** la respuesta de tu IA a los dos prompts, con la tabla de «controlado» y «supuesto» y las cinco preguntas.  
**Criterio de éxito:** la tabla señala al menos cinco decisiones que la IA supuso en la primera versión y que quedaron controladas en la segunda, y se nota que el problema no era la IA sino lo que no se había dicho.

## Punto 2. Construir con ROCAV

### Definición canónica

- **R — Rol útil:** perspectiva que ayuda a resolver la tarea sin fingir autoridad.
- **O — Objetivo:** cambio o resultado que debe lograr la salida.
- **C — Contexto:** datos que realmente cambian la respuesta.
- **A — Acuerdos:** audiencia, formato, tono, longitud, restricciones y límites.
- **V — Verificación:** criterios de calidad, manejo de vacíos y comprobación final.

El rol no debe usarse como decoración. “Actúa como el mejor experto del mundo” no aporta una verificación. Es mejor indicar una perspectiva útil: tutor paciente, editor de claridad o analista que separa evidencia de inferencia.

**Ejemplo ROCAV:**

> Actúa como tutor paciente de alfabetización digital. Crea una guía para que una persona adulta sin experiencia, como doña Marta, que vende sus tamales por WhatsApp, active la verificación en dos pasos de una cuenta de práctica. Usa el caso ficticio entregado. Escribe ocho pasos numerados, una acción por paso, define tecnicismos y añade una lista final de comprobación. No solicites contraseñas ni códigos reales. Antes de finalizar, verifica que cada paso sea reversible y señala qué pantallas pueden variar.

**Idea visual para la web:** cinco vigas que forman un plano. Si se retira “V”, aparece una casa visualmente terminada pero sin inspección.

### Ejercicio individual 2 — Del deseo al plano ROCAV

**Propósito:** ver en vivo cómo las cinco partes de ROCAV cambian lo que responde la IA.  
**Duración:** 25 minutos.

**Caso base ficticio:** Byron viaja cada día en bus de Villa Nueva a la capital y quiere aprovechar 30 minutos del trayecto, durante siete días, para aprender a usar una hoja de cálculo desde su celular.

**Prompt para copiar — El plan de Byron:**

- Rol ::: 2.2 ::: Actúa como tutor paciente de hojas de cálculo para personas principiantes. ::: Da una perspectiva útil, no un título rimbombante. Por eso dice «tutor paciente» y no «el mejor experto del mundo».
- Objetivo ::: 2.2 ::: Crea un plan de siete días para que Byron aprenda a usar una hoja de cálculo. ::: Dice qué resultado debe salir. Sin esto, la IA adivina si quieres un resumen, un curso o una lista de consejos.
- Contexto ::: 2.2 ::: Byron es principiante, solo tiene celular y estudia 30 minutos diarios en el bus de Villa Nueva a la capital. ::: Son los datos que cambian la respuesta. Si quitas «solo celular», la IA puede mandarlo a usar una computadora.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla con día, objetivo, práctica y señal de avance. Usa lenguaje sencillo y una sola práctica por día. ::: Fija el formato, el tono y los límites. Así la respuesta sale como tú la necesitas y no como la IA prefiera.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna práctica pase de 30 minutos ni necesite computadora o herramientas pagadas. Si te falta un dato, pregúntalo y no lo inventes. ::: Es la inspección final. La IA se revisa a sí misma y te avisa si falta algo en lugar de rellenar.

**Evidencia:** la respuesta de tu IA con el plan de siete días.  
**Criterio de éxito:** el plan viene en tabla, cada práctica cabe en 30 minutos y se puede hacer solo con el celular.

## Punto 3. Patrones de control que se pueden reutilizar

### Explicación sencilla

Los patrones son pequeñas estructuras que resuelven problemas frecuentes:

- **Aclara primero:** pregunta antes de responder si falta un dato material.
- **Plan y confirmación:** propone el plan y espera aprobación antes de una acción importante.
- **Fuente cerrada:** usa únicamente el material entregado.
- **Hecho / inferencia / recomendación:** separa lo observado de lo deducido y lo sugerido.
- **Dos alternativas:** presenta ventaja, riesgo y criterio de elección.
- **Borrador / crítica / revisión:** produce, evalúa y mejora.
- **Ejemplo de forma:** muestra la estructura esperada sin obligar el contenido.
- **Caso típico / borde / faltante:** comprueba que la solución no solo funcione en el ejemplo fácil.
- **Presupuesto:** limita pasos, tiempo o llamadas.
- **Aprobación antes de ejecutar:** separa preparación de acción externa.
- **Autoevaluación:** compara la salida contra una rúbrica.
- **Cambio único:** modifica una variable por iteración.

**Idea visual para la web:** biblioteca de bloques arrastrables; cada bloque agrega una medida de control al plano.

### Ejercicio individual 3 — Fuente cerrada y vacíos visibles

**Propósito:** comprobar que la IA puede trabajar sin inventar: lo que falta en la ficha queda marcado y no rellenado.  
**Duración:** 20 minutos.

**Caso base ficticio:** la municipalidad de Antigua Guatemala organiza el taller “Vende más por WhatsApp” para emprendedores. La ficha trae nombre, tema y fecha, pero no trae lugar ni precio.

**Prompt para copiar — Invitación al taller con fuente cerrada:**

- Objetivo ::: 2.2 ::: Prepara un resumen para invitar a emprendedores a este taller. Debe cubrir qué aprenderán, quién organiza, la fecha, el lugar y el precio. ::: Pide a propósito lugar y precio, que no están en la ficha. Es la prueba: sin esa presión no sabrías si la IA inventa o se detiene.
- Entrada ::: 2.1 ::: FICHA DEL TALLER. Nombre: Vende más por WhatsApp. Organiza: Municipalidad de Antigua Guatemala. Tema: cómo usar el catálogo, las respuestas rápidas y las etiquetas de WhatsApp Business para emprendedores. Fecha: sábado 14 de marzo. ::: Es el material de trabajo y va dentro del prompt. Sin la ficha, la IA no tendría de dónde sacar los datos del taller.
- Fuente cerrada ::: 2.3 ::: Usa únicamente esta ficha. No uses conocimiento externo ni lo que sepas de Antigua Guatemala. ::: Limita la información a lo entregado. Sin esto, la IA completa con lo que le suena probable, y suena tan seguro como un dato real.
- Hecho / inferencia / recomendación ::: 2.3 ::: Ordena tu respuesta en tres apartados: Hechos, con lo que dice la ficha; Inferencias, con lo que deduces de ella; y Recomendaciones, con lo que sugieres hacer. ::: Separa lo observado de lo deducido y lo sugerido. Sin esto, una suposición se lee igual que un dato de la ficha.
- Verificación ::: 2.2 ::: Si un dato no aparece en la ficha, escribe «no disponible». Antes de terminar, revisa que cada hecho esté de verdad en la ficha. ::: Hace visible cada vacío y revisa el resultado. Sin esto, el hueco se tapa con algo creíble, como un salón o un precio, y nadie lo nota.
- Aclara primero ::: 2.3 ::: Cierra con una pregunta concreta por cada vacío, para aclararla con la municipalidad antes de publicar la invitación. ::: Convierte cada vacío en una pregunta. Sin ella sabrías qué falta, pero no a quién preguntar ni qué pedirle.

**Evidencia:** la respuesta de tu IA con los tres apartados, las marcas «no disponible» y las preguntas.  
**Criterio de éxito:** lugar y precio aparecen como «no disponible», sin datos inventados como “salón municipal” o “Q50”, y cada vacío tiene su pregunta.

## Punto 4. Loop de mejora: cambiar una variable y aprender

### Explicación sencilla

El loop de mejora es:

**definir resultado → escribir versión 1 → probar → detectar una falla → modificar una sola variable → probar de nuevo → documentar**.

Se termina cuando la salida cumple la rúbrica o cuando falta información que exige una pregunta. Cambiar rol, contexto, formato y criterios al mismo tiempo impide saber qué produjo la mejora.

**Idea visual para la web:** dos planos transparentes superpuestos. Solo una pieza cambia de color entre la versión 0.1 y la 0.2.

### Ejercicio individual 4 — Comparación A/B controlada

**Propósito:** ver en dos respuestas qué efecto tiene cambiar una sola parte del prompt y decidir si ese cambio se queda.  
**Duración:** 25 minutos.

**Caso base ficticio:** es el plan de Byron del ejercicio 2, que estudia 30 minutos diarios en el bus de Villa Nueva a la capital. La hipótesis es que si cambia Acuerdos, el plan será más ejecutable.

**Prompt para copiar — Versión 0.1 del plan de Byron:**

- Rol ::: 2.2 ::: Actúa como tutor paciente de hojas de cálculo para personas principiantes. ::: Da la perspectiva para enseñar. Es la versión 0.1: se queda fija para que luego tengas contra qué comparar.
- Objetivo ::: 2.2 ::: Crea un plan de siete días para que Byron aprenda a usar una hoja de cálculo. ::: Dice qué resultado debe salir. Sin un mismo objetivo en las dos versiones, no podrías compararlas.
- Contexto ::: 2.2 ::: Byron es principiante, solo tiene celular y estudia 30 minutos diarios en el bus de Villa Nueva a la capital. ::: Son los datos que cambian la respuesta. Las dos versiones trabajan con la misma entrada, igual que dos pruebas con la misma medida.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla con día, objetivo, práctica y señal de avance. Usa lenguaje sencillo y una sola práctica por día. ::: Fija formato y límites. Es la parte que vas a cambiar en la versión 0.2, así que fíjate bien en cómo sale aquí.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna práctica pase de 30 minutos ni necesite computadora o herramientas pagadas. Si te falta un dato, pregúntalo y no lo inventes. ::: Es la inspección final. Sin ella, el plan podría pedir computadora o más tiempo del que Byron tiene.

**Prompt para copiar — Versión 0.2 con un solo cambio, en el mismo chat:**

- Rol ::: 2.2 ::: Actúa como tutor paciente de hojas de cálculo para personas principiantes. ::: No cambia. Si también lo tocaras, no sabrías cuál de los ajustes produjo la diferencia.
- Objetivo ::: 2.2 ::: Crea un plan de siete días para que Byron aprenda a usar una hoja de cálculo. ::: No cambia. Con otro objetivo estarías midiendo otra tarea y no una mejora de la misma.
- Contexto ::: 2.2 ::: Byron es principiante, solo tiene celular y estudia 30 minutos diarios en el bus de Villa Nueva a la capital. ::: No cambia. Es la misma entrada de la versión 0.1, condición para que la comparación sea justa.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla con día, objetivo, práctica y señal de avance. Usa lenguaje sencillo, una sola acción por fila y un máximo de 30 minutos por trayecto en bus. ::: Lo único que cambia: es el patrón Cambio único. Al tocar solo esta frase, cualquier diferencia en la salida se puede atribuir a ella.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna práctica pase de 30 minutos ni necesite computadora o herramientas pagadas. Si te falta un dato, pregúntalo y no lo inventes. ::: No cambia. Mantiene la misma inspección, y así las dos versiones pasan por el mismo filtro.

**Prompt para copiar — Comparación de las dos salidas, en el mismo chat:**

- Objetivo ::: 2.2 ::: Compara las dos versiones del plan de Byron que acabas de crear en este chat: la primera es la 0.1 y la segunda es la 0.2. ::: Dice qué debe salir ahora: una comparación. Sin esto, la IA podría hacer un tercer plan en lugar de evaluar los dos.
- Cambio único ::: 2.3 ::: Entre ambas solo cambió una parte, Acuerdos: «una sola práctica por día» pasó a ser «una sola acción por fila y un máximo de 30 minutos por trayecto en bus». ::: Nombra la variable que se modificó. Sin esto, la IA puede atribuir la diferencia a cualquier otra cosa.
- Loop de mejora ::: 2.4 ::: Mi hipótesis es esta: si cambio Acuerdos, el plan de Byron será más ejecutable. ::: Es el paso de probar lo que crees. Sin una hipótesis clara, solo mirarías cuál te gusta más y no aprenderías qué funcionó.
- Criterio ::: 2.1 ::: Juzga las dos versiones con un solo criterio: Byron puede hacer lo que dice cada fila en el bus, con su celular y sin tener que adivinar qué hacer. ::: Da una misma vara para las dos. Sin un criterio, la IA elige por gusto o premia a la versión más larga.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla por día con la práctica de la 0.1, la de la 0.2, cuál cumple mejor el criterio y por qué en una frase. ::: Fija la forma de comparar. Sin la tabla, recibes un párrafo general y no ves en qué días hubo diferencia.
- Verificación ::: 2.2 ::: Cierra con una decisión: conservar el cambio o revertirlo, con el motivo en una frase. Si las dos salidas casi no difieren, dilo y no inventes una mejora. ::: Te obliga a decidir y deja lugar a un resultado honesto. Sin esto, la IA tiende a decir que lo nuevo siempre es mejor.

**Evidencia:** la respuesta de tu IA a los tres prompts, con la tabla comparativa y la decisión final.  
**Criterio de éxito:** se puede señalar exactamente qué cambió, qué efecto tuvo en la tabla y por qué el cambio se conserva o se descarta.

## Punto 5. Evaluar y transferir un prompt

### Rúbrica de calidad

Cada salida se revisa con los mismos siete lentes:

1. **Exactitud:** no presenta como hecho lo que la fuente no sostiene.
2. **Relevancia:** responde al objetivo, no solo al tema.
3. **Claridad:** una persona de la audiencia puede comprenderla.
4. **Completitud:** cubre los elementos requeridos o marca vacíos.
5. **Formato:** respeta estructura, longitud y tono acordados.
6. **Riesgos:** no expone datos ni ejecuta acciones no autorizadas.
7. **Fuentes:** permite rastrear afirmaciones cuando corresponde.

Cada criterio se marca `cumple`, `debe mejorar` o `no aplica`. Una respuesta fluida no necesariamente es correcta.

**Idea visual para la web:** inspección de obra con siete indicadores; la casa solo recibe “lista para usar” cuando los criterios aplicables están comprobados.

### Ejercicio individual 5 — Prueba de transferencia

**Propósito:** comprobar con la rúbrica si un prompt funciona más allá del caso de quien lo escribió.  
**Duración:** 15 minutos.

**Caso base ficticio:** el prompt que se creó para Byron se prueba con Heidy, que quiere aprender a tomar mejores fotos de sus productos para vender por WhatsApp.

**Prompt para copiar — Revisión con los siete lentes:**

- Rol ::: 2.2 ::: Actúa como revisor de calidad de prompts que señala fallas concretas, sin adornos. ::: Da una perspectiva útil para evaluar. Sin ella, la IA tiende a elogiar el texto en lugar de revisarlo.
- Objetivo ::: 2.2 ::: Evalúa el prompt que sigue para saber si otra persona podría usarlo sin que nadie se lo explique. ::: Dice qué se busca: que el prompt sirva a otros. Sin esto, la IA podría mejorarlo o ejecutarlo en lugar de evaluarlo.
- Entrada ::: 2.1 ::: PROMPT A EVALUAR: Actúa como tutor paciente de hojas de cálculo para personas principiantes. Crea un plan de siete días para que Byron aprenda a usar una hoja de cálculo. Byron es principiante, solo tiene celular y estudia 30 minutos diarios en el bus de Villa Nueva a la capital. Entrégalo en una tabla con día, objetivo, práctica y señal de avance. Usa lenguaje sencillo y una sola práctica por día. Antes de terminar, revisa que ninguna práctica pase de 30 minutos ni necesite computadora o herramientas pagadas. Si te falta un dato, pregúntalo y no lo inventes. ::: Es el material por revisar y va completo aquí. Sin él, la IA no tendría nada concreto que evaluar.
- Rúbrica ::: 2.5 ::: Revísalo con estos siete lentes: Exactitud (no presentar como hecho lo que no está sostenido), Relevancia (responder al objetivo, no solo al tema), Claridad (que la audiencia lo comprenda), Completitud (cubrir lo requerido o marcar vacíos), Formato (estructura, longitud y tono acordados), Riesgos (no exponer datos ni ejecutar acciones no autorizadas) y Fuentes (poder rastrear las afirmaciones). ::: Son los siete lentes de calidad. Sin ellos, la IA da una opinión general, y una respuesta fluida no siempre es correcta.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla con el lente, una marca («cumple», «debe mejorar» o «no aplica») y el motivo en una frase. ::: Fija las tres marcas de la rúbrica. Sin ellas, recibes comentarios sueltos y no puedes ver de un vistazo qué falla.
- Verificación ::: 2.2 ::: Antes de terminar, cita la frase del prompt que sostiene cada marca y señala cuál es el lente más débil. No reescribas el prompt todavía. ::: Obliga a mostrar de dónde sale cada marca. Sin la cita, un «cumple» sería una afirmación que no puedes comprobar.

**Prompt para copiar — Transferencia al caso de Heidy, en el mismo chat:**

- Objetivo ::: 2.2 ::: Ahora prueba si ese prompt sirve para otra persona: ejecútalo con el caso nuevo que sigue y entrega el plan de siete días. ::: Pasa de evaluar a usar el prompt. Sin esto, la IA seguiría opinando y no sabrías si de verdad funciona fuera del caso de Byron.
- Entrada ::: 2.1 ::: Caso nuevo: Heidy vende sus productos por WhatsApp, es principiante en fotografía, solo tiene celular y quiere aprender a tomar mejores fotos de sus productos, 30 minutos diarios. ::: Es un caso equivalente pero distinto. Si usaras otra vez a Byron, solo probarías que el prompt funciona con su ejemplo.
- Cambio único ::: 2.3 ::: Cambia solo lo que depende del caso, incluido el tema del tutor. Mantén el mismo tiempo, la misma tabla y la misma revisión final. ::: Deja fija la estructura. Si cambiaras también el tiempo o el formato, no sabrías si lo que se transfiere es el prompt o algo nuevo.
- Rúbrica ::: 2.5 ::: Evalúa el plan de Heidy con los mismos siete lentes y marca cada uno como «cumple», «debe mejorar» o «no aplica». ::: Aplica la misma vara a la salida nueva. Sin esto, un plan que se lee bien pasaría como bueno sin revisión.
- Autoevaluación ::: 2.3 ::: Señala el criterio más débil y propón una última mejora solo si de verdad hace falta. ::: La IA compara su salida contra la rúbrica. Sin el «solo si hace falta», agregaría cambios por agregar y el prompt crecería sin razón.
- Transferencia ::: 2.5 ::: Termina con una instrucción de uso de tres líneas para otra persona: qué debe cambiar, qué debe mantener y cómo revisar el resultado. ::: Deja el prompt listo para otros. Sin esta guía, solo su autor sabría qué piezas se pueden cambiar y cuáles no.

**Evidencia:** la respuesta de tu IA a los dos prompts, con la tabla de los siete lentes, el plan de Heidy y la instrucción de uso.  
**Criterio de éxito:** el plan de Heidy conserva el mismo tiempo y formato, cada lente tiene su marca y la instrucción de uso permite que otra persona use el prompt sin explicación adicional.

## Cierre de la clase 2

La persona está lista para avanzar cuando puede explicar ROCAV, mostrar una comparación con cambio único, detectar un dato inventado o ausente y entregar cinco prompts que incluyen criterios de verificación.

---

# CLASE 3 — HERRAMIENTAS: SKILLS REUTILIZABLES

## Ficha de la clase

**Pregunta guía:** ¿Cómo convierto una tarea que ya sé resolver en un procedimiento que pueda reutilizar y probar?  
**Objetivo:** diseñar una skill con activación, entradas, pasos, salida, recursos, límites y control; implementarla en la plataforma disponible y someterla a pruebas.  
**Valor que se lleva:** deja de reconstruir instrucciones desde cero y obtiene una forma de trabajo organizada, adaptable y versionada.  
**Producto:** Skill 1.0 con ficha portable y pruebas de caso feliz, caso borde, fallo y no activación.

## Requisito obligatorio antes de llegar

Cada estudiante debe contar con una suscripción de pago activa en ChatGPT, Claude o Gemini. Debe verificar acceso, recuperación y facturación. La misma cuenta se utilizará en la clase 4. Las credenciales son personales y nunca se comparten. Si una función nativa no aparece, se construye el equivalente disponible y se conserva la ficha portable.

## Analogía de construcción

El plano ya existe, pero repetir una tarea con instrucciones improvisadas cansa y produce variaciones. Una skill es como una herramienta con manual, piezas compatibles, revisión de seguridad y prueba de funcionamiento. No decide por sí sola qué construir: ejecuta bien una clase de tarea cuando se cumplen sus condiciones.

## Ruta de 240 minutos

| Tiempo | Tipo | Punto | Resultado |
|---|---|---|---|
| 0–15 | Práctica | Diagnóstico de tarea repetitiva | Secuencia inicial |
| 15–35 | Teoría | 1. Recurso correcto | Tabla de diferencias |
| 35–40 | Práctica | Ejercicio 1, cierre | Recurso justificado |
| 40–70 | Teoría | 2. Ocho partes de una skill | Mapa de componentes |
| 70–95 | Práctica | Ejercicio 2 | Ficha 0.1 |
| 95–120 | Teoría | 3. Triggers, hooks y fallback | Mapa de activación |
| 120–135 | Práctica | Ejercicio 3, primera parte | Casos redactados |
| 135–145 | Pausa | — | Descanso |
| 145–155 | Práctica | Ejercicio 3, cierre | Activación validada |
| 155–175 | Teoría | 4. Implementación portable | Adaptación de plataforma |
| 175–195 | Práctica | Ejercicio 4 | Skill implementada |
| 195–210 | Teoría | 5. Pruebas y versión | Plan de pruebas |
| 210–220 | Práctica | Ejercicio 5, primera parte | Pruebas iniciales |
| 220–230 | Pausa | — | Descanso |
| 230–240 | Práctica | Ejercicio 5, cierre | Skill 1.0 |

**Comprobación del balance:** 110 minutos de teoría + 110 minutos de práctica individual + 20 minutos de pausas.

## Punto 1. Elegir entre prompt, plantilla, proyecto, herramienta, workflow, skill y agente

### Explicación sencilla

| Recurso | Pregunta que responde |
|---|---|
| Prompt | ¿Qué quiero obtener ahora? |
| Plantilla | ¿Qué campos debo completar? |
| Proyecto | ¿Qué contexto pertenece a este trabajo? |
| Herramienta | ¿Con qué capacidad puedo leer, buscar, calcular o actuar? |
| Workflow | ¿Qué secuencia fija debo seguir? |
| Skill | ¿Cómo hago bien esta tarea repetible en distintos contextos? |
| Agente | ¿Cómo decide el sistema el siguiente paso mediante ciclos y herramientas? |

Una skill no es un prompt largo con nombre atractivo. Debe indicar cuándo se activa, cuándo no, qué necesita, cómo trabaja, qué entrega y cómo demuestra que terminó bien.

**Idea visual para la web:** banco de herramientas. Al elegir una tarea, solo se ilumina el recurso proporcional; no todo problema necesita un agente.

### Ejercicio individual 1 — Diagnóstico del recurso mínimo

**Propósito:** ver qué recurso basta para cada tarea y comprobar que no todo problema necesita un agente.  
**Duración:** 20 minutos.

**Caso base ficticio:** siete tareas que se repiten en la comunidad, entre ellas convertir las notas de la reunión mensual del comité de la iglesia en acuerdos y tareas.

**Prompt para copiar — El recurso mínimo:**

- Rol ::: 2.2 ::: Actúa como consultor práctico que ayuda a personas que no programan a elegir el recurso de IA más simple para cada tarea. ::: Pone a la IA a buscar lo sencillo. Sin este rol, suele recomendar la solución más vistosa aunque sobre.
- Objetivo ::: 2.2 ::: Diagnostica las siete tareas de abajo y elige para cada una el recurso mínimo, es decir, el menos complejo que la resuelve. ::: Dice qué debe salir: una elección por tarea. Sin esto, la IA daría una explicación general de los recursos y no decidiría nada.
- Prompt y plantilla ::: 3.1 ::: Usa estas definiciones. Un prompt responde a «¿qué quiero obtener ahora?». Una plantilla responde a «¿qué campos debo completar?». ::: Son los dos recursos más simples. Si no se definen, la IA puede saltárselos y proponer algo más grande para una tarea de una sola vez.
- Proyecto y herramienta ::: 3.1 ::: Un proyecto responde a «¿qué contexto pertenece a este trabajo?». Una herramienta responde a «¿con qué capacidad puedo leer, buscar, calcular o actuar?». ::: Separa guardar información de tener una capacidad. Sin esta distinción, la IA mezcla «tener los datos a mano» con «poder sumarlos».
- Workflow y skill ::: 3.1 ::: Un workflow responde a «¿qué secuencia fija debo seguir?». Una skill responde a «¿cómo hago bien esta tarea repetible en distintos contextos?» y dice cuándo se activa, cuándo no, qué necesita, qué entrega y cómo demuestra que terminó bien. ::: Marca la diferencia entre seguir un orden fijo y resolver bien una tarea que cambia. Sin ella, cualquier lista de pasos parece una skill.
- Agente ::: 3.1 ::: Un agente responde a «¿cómo decide el sistema el siguiente paso mediante ciclos y herramientas?». No es sinónimo de automatización: solo corresponde si hay que decidir sobre la marcha. ::: Pone el freno. Sin esta aclaración, «agente» termina usándose para cualquier cosa que se haga sola.
- Entrada ::: 3.1 ::: Las tareas son ficticias. 1) Cada mes, convertir las notas de la reunión del comité de la iglesia en acuerdos y tareas con responsable y fecha, aunque cada reunión trate temas distintos. 2) Redactar hoy, una sola vez, un aviso de WhatsApp para invitar a la kermés. 3) Doña Marta quiere sumar sin errores los pedidos de tamales de la semana, que tiene en una hoja de cálculo. 4) Cada mes, llenar el mismo aviso de reunión de la cooperativa, cambiando solo fecha, lugar y tema. 5) Durante tres meses, el comité del barrio organiza la Feria de Jocotenango y quiere tener a mano su presupuesto, sus puestos y sus acuerdos en todas sus conversaciones. 6) Al cerrar cada mes, la cooperativa sigue siempre el mismo orden: revisar pagos, avisar a quien debe y anotar quién respondió. 7) Buscar en internet proveedores de sonido para la kermés, comparar precios y, según lo que aparezca, decidir si buscar otra vez o preguntar al comité, hasta tener tres opciones. ::: Son los casos a diagnosticar, en desorden para que nada se resuelva por posición. Sin ellos, la IA no tendría nada concreto que clasificar.
- Acuerdos ::: 2.2 ::: Entrégalo en una tabla con tarea, entradas, pasos, salida, recurso elegido, por qué el recurso anterior no alcanza y por qué el siguiente sobra, en el orden prompt, plantilla, proyecto, herramienta, workflow, skill y agente. Cierra con esta frase completa para la tarea 1: «Necesito una skill porque ___ se repite y debe conservar ___». ::: Obliga a justificar hacia los dos lados. Sin esas columnas, la IA nombra un recurso y tú no sabrías por qué ese y no otro.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna elección sea más compleja de lo necesario. Si dudas entre dos recursos, elige el menor y di qué dato cambiaría tu decisión. ::: Es la inspección final. Hace que la IA baje de nivel cuando puede y te avise de las dudas en lugar de esconderlas.

**Evidencia:** la respuesta de tu IA con la tabla de las siete tareas y la frase final.  
**Criterio de éxito:** las notas del comité quedan como skill y no como agente, cada elección explica por qué el recurso vecino no sirve, y «agente» aparece solo donde hay que decidir el siguiente paso.

## Punto 2. Las ocho partes de una skill

### Explicación sencilla

1. **Nombre:** verbo + objeto, corto y diferenciable.
2. **Descripción:** capacidad, disparadores y exclusiones.
3. **Entradas:** obligatorias, opcionales, sensibles y formato esperado.
4. **Pasos:** secuencia, decisiones y preguntas.
5. **Salida:** secciones, tono, longitud y campos.
6. **Recursos:** referencias, plantillas, scripts o herramientas.
7. **Límites:** fuera de alcance, permisos y condición de pausa.
8. **Control:** checklist, pruebas y evidencia de finalización.

**Descripción de ejemplo:**

> Usar esta skill cuando el usuario entregue notas de una reunión y pida convertirlas en plan de acción, acuerdos o seguimiento. No usar para transcripción, redacción legal, evaluación de desempeño ni cuando no exista una fuente. Si faltan responsables o fechas, marcar el vacío y preguntar; no inventar.

**Idea visual para la web:** una caja de herramientas explota en ocho piezas etiquetadas; al faltar “límites”, la herramienta muestra una alerta roja.

### Ejercicio individual 2 — Construir la ficha 0.1

**Propósito:** ver cómo un prompt útil se convierte en un procedimiento completo de ocho partes y probarlo de inmediato.  
**Duración:** 25 minutos.

**Caso base ficticio:** la skill «Convertir notas en plan de acción», probada con las notas del comité de la iglesia que prepara la kermés.

**Prompt para copiar — La ficha de ocho partes:**

- Nombre ::: 3.2 ::: Construye la ficha 0.1 de una skill, que es un procedimiento reutilizable para una tarea repetible. Nombre: «Convertir notas en plan de acción», con verbo y objeto. ::: Da una etiqueta corta y distinta de otras. Sin un nombre claro, nadie sabe qué hace la skill ni cómo encontrarla después.
- Descripción ::: 3.2 ::: Descripción: escribe qué hace, con tres peticiones que deben activarla y dos parecidas que no, como transcribir un audio o redactar un contrato. ::: Explica cuándo usarla y cuándo no. Sin esto, la skill se activaría también en tareas que no le tocan.
- Entradas ::: 3.2 ::: Entradas: como obligatorias, las notas de la reunión en texto; como opcionales, la fecha de la reunión y la lista de asistentes. Marca como sensibles, para retirar antes de procesar, las contraseñas, los números de DPI y los datos bancarios. ::: Dice qué necesita la skill y qué no debe recibir. Sin esto, la IA trabajaría con lo que haya, aunque falte algo o venga un dato delicado.
- Pasos ::: 3.2 ::: Pasos: redacta entre cinco y ocho pasos en orden, con al menos una decisión, como qué hacer si una tarea no tiene responsable, y al menos una pregunta para quien la usa. ::: Fija cómo se trabaja cada vez. Sin pasos, cada uso sale distinto; sin decisión ni pregunta, la IA rellena lo que no sabe.
- Salida ::: 3.2 ::: Salida: resumen de contexto, tabla con tarea, responsable, fecha y fuente, acuerdos, vacíos y siguiente revisión. Si responsable o fecha no aparecen, escribe «pendiente de confirmar». ::: Define qué se entrega y con qué campos. Así puedes comparar dos usos; sin esto, una vez sale un párrafo y otra una lista.
- Recursos ::: 3.2 ::: Recursos: solo las notas entregadas y la plantilla de esa tabla. Indica que no necesita herramientas externas ni conexiones. ::: Declara con qué cuenta la skill. Decir que no necesita conexiones también es información: evita dar permisos que no hacen falta.
- Límites ::: 3.2 ::: Límites: queda fuera transcribir, redactar documentos legales y evaluar el desempeño de personas. No inventes datos. Condición de pausa: si no hay notas o aparece información sensible, detente y pide una versión segura. ::: Marca dónde termina el trabajo y cuándo parar. Sin límites, la IA sigue adelante aunque no deba, y lo hace con mucha seguridad.
- Control ::: 3.2 ::: Control: cierra la ficha con una lista de revisión de máximo seis puntos que demuestre que el trabajo terminó bien. ::: Es la prueba de que terminó bien. Sin control, «ya quedó» es solo una opinión; con la lista, otra persona puede revisar.
- Entrada ::: 3.2 ::: Cuando la ficha esté lista, úsala una vez con estas notas ficticias: Reunión del comité de la iglesia, 3 de agosto. Asistieron Josué, doña Carmen, Luis y Ana. Se acordó hacer la kermés el 30 de agosto en el salón de la iglesia, con un presupuesto de Q2,500. Josué cotiza el sonido para el 15 de agosto. Doña Carmen coordina la venta de comida. Luis imprime los volantes, aún sin fecha. Hay que pedir permiso a la municipalidad para cerrar la calle, pero nadie quedó a cargo. Próxima reunión: 17 de agosto. ::: Es la primera prueba de la ficha, con vacíos a propósito. Sin notas verías un documento bonito, pero no sabrías si funciona.

**Evidencia:** la respuesta de tu IA con la ficha 0.1 y el plan de acción de la kermés.  
**Criterio de éxito:** la ficha trae las ocho partes y otra persona podría usarla sin explicación; en el plan, los volantes y el permiso dicen «pendiente de confirmar» en lo que falta.

## Punto 3. Trigger, hook, fallback y límites de activación

### Explicación sencilla

- **Trigger positivo:** petición que sí debe activar la skill.
- **Trigger negativo:** petición parecida pero fuera de alcance.
- **Hook de entrada:** comprobación antes de procesar, como verificar que exista fuente y anonimizar.
- **Hook de salida:** comprobación antes de entregar, como confirmar que cada tarea tenga responsable o esté marcada como pendiente.
- **Fallback:** conducta segura cuando falta información o falla un paso.

Un buen trigger no depende de una frase exacta. Reconoce la intención. Un trigger negativo protege contra usos cercanos pero inapropiados.

**Idea visual para la web:** puerta inteligente: trigger abre, hook inspecciona, proceso trabaja, hook final revisa y fallback desvía a una zona segura.

### Ejercicio individual 3 — Matriz de activación

**Propósito:** ver que la skill se activa por la intención de la petición y se abstiene cuando corresponde.  
**Duración:** 25 minutos.

**Caso base ficticio:** el comité del barrio prepara la Feria de Jocotenango y le hace a la skill ocho peticiones distintas.

**Prompt para copiar — Ocho peticiones de la feria:**

- Objetivo ::: 2.2 ::: Actúa como probador de skills. Revisa si la skill de abajo responde a la intención de cada caso y no a una frase exacta. En cada caso, escribe primero el resultado esperado y después aplica la skill. ::: Convierte a la IA en revisora. Sin esto, resolvería la tarea sin mostrarte qué decidió ni por qué.
- Entrada ::: 3.2 ::: Skill «Convertir notas en plan de acción»: se usa cuando alguien entrega notas de una reunión y pide acuerdos, tareas o seguimiento; no se usa para transcribir, redactar documentos legales ni evaluar personas; entrega resumen, tabla con tarea, responsable, fecha y fuente, acuerdos y vacíos. Notas de la feria, ficticias: Reunión del comité del barrio. Carlos consigue el permiso de la municipalidad para el 5 de agosto. Doña Lety organiza los puestos de comida. Hay que alquilar las tarimas, pero nadie quedó a cargo. ::: Trae la ficha resumida y las notas para que funcione en un chat nuevo. Sin esto, la IA tendría que imaginar la skill que va a probar.
- Trigger positivo ::: 3.3 ::: Casos 1 a 3, cada uno con las notas de la feria: «Convierte en tareas estas notas del comité del barrio para la Feria de Jocotenango»; «¿Quién quedó de hacer qué? Aquí están las notas»; «Ordéname esto para darle seguimiento». ::: Tres formas distintas de pedir lo mismo. Si solo funcionara con una frase exacta, la skill fallaría cuando alguien lo pida con otras palabras.
- Trigger negativo ::: 3.3 ::: Casos 4 y 5: «Transcribe el audio de la reunión»; «Redacta el contrato de alquiler de las tarimas de la feria». ::: Peticiones parecidas que no le tocan a la skill. Sin ellas no sabrías si se activa con cualquier cosa que hable de reuniones o de la feria.
- Hook de entrada ::: 3.3 ::: Hook de entrada: antes de procesar cualquier caso, comprueba que exista una fuente con contenido útil y retira los datos sensibles. Aplícalo también a los casos 6 a 8: «Crea las tareas de la feria», sin notas; «Aquí van las notas: hablamos de muchas cosas»; «Haz el plan con estas notas: doña Lety compra las mantas. La contraseña ficticia de la cuenta bancaria del comité es FERIA123». ::: Es el guardia de la puerta: revisa antes de empezar. Sin él, la IA inventaría las tareas que faltan o trabajaría con una contraseña.
- Hook de salida ::: 3.3 ::: Hook de salida: antes de entregar un plan, confirma que cada tarea tenga responsable y fecha o que diga «pendiente de confirmar». ::: Es la revisión antes de entregar. Sin ella, una tarea sin dueño, como las tarimas, puede salir con un nombre puesto al azar.
- Fallback ::: 3.3 ::: Fallback: si falta la fuente o no sirve, no la inventes y pide las notas. Si aparece información sensible, detente, no la repitas y pide una versión segura. Escribe el mensaje exacto para cada problema. ::: Es la salida segura cuando algo falla. Sin fallback, la IA preferiría entregar algo inventado antes que decir que no puede seguir.
- Acuerdos ::: 2.2 ::: Entrega una matriz con caso, resultado esperado, resultado real y corrección, usando solo activar, no activar, preguntar o detener. Después muestra una sola tabla de tareas de las notas de la feria, porque los casos 1 a 3 comparten esas notas. ::: Fija el formato del resultado. Las cuatro palabras permiten revisar de un vistazo, y la tabla única evita leer tres veces lo mismo.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ningún dato de la tabla venga de fuera de las notas. Si un resultado real no coincidió con el esperado, propón un solo cambio a la descripción de la skill. ::: Es la inspección final. Busca datos inventados y, si algo falló, deja una mejora concreta en lugar de rehacerlo todo.

**Evidencia:** la respuesta de tu IA con la matriz de ocho casos, los mensajes de fallback y la tabla de tareas.  
**Criterio de éxito:** activa los casos 1 a 3, no activa el 4 ni el 5, pregunta en el 6 y el 7, se detiene en el 8 sin repetir la contraseña y nunca inventa la fuente que falta.

## Punto 4. De ficha portable a implementación

### Explicación sencilla

Toda persona crea primero una ficha neutral que puede conservar aunque cambie de plataforma. Después la adapta:

- **ChatGPT:** Skills en espacios elegibles; Projects como puente cuando la función no aparece.
- **Claude:** Agent Skills en experiencias compatibles y con capacidades habilitadas.
- **Gemini:** Skills en Gemini Spark para cuentas elegibles; Gems como alternativa de personalización.
- **Portable:** carpeta o documento neutral con instrucciones, referencias, plantillas y scripts opcionales.

Un paquete técnico puede contener `SKILL.md`, `references/`, `templates/` y `scripts/`. El código se usa solo cuando aporta precisión mecánica. Las rutas deben ser relativas y toda skill descargada de terceros se revisa antes de instalarse.

**Carga progresiva:** la descripción explica cuándo usar la skill; las instrucciones detallan el procedimiento; las referencias solo se abren cuando son necesarias. Así se evita cargar información irrelevante.

**Idea visual para la web:** una herramienta central portable se conecta a tres adaptadores, uno por plataforma, sin cambiar su lógica principal.

### Ejercicio individual 4 — Implementar sin perder portabilidad

**Propósito:** ver la misma skill adaptada a tu plataforma mientras la versión neutral queda intacta.  
**Duración:** 20 minutos.

**Caso base ficticio:** la ficha «Convertir notas en plan de acción» se conserva como documento neutral y se prueba con notas inventadas del comité de la iglesia, nunca con actas reales.

**Prompt para copiar — Una ficha, tu plataforma:**

- Objetivo ::: 2.2 ::: Adapta la skill de abajo a la plataforma en la que me estás respondiendo, que puede ser ChatGPT, Claude o Gemini, sin perder la versión neutral que sirve en cualquier otra. ::: Pide las dos cosas a la vez. Sin esto, la IA reescribiría la ficha para su plataforma y perderías la versión que puedes llevarte.
- Entrada ::: 3.2 ::: Ficha neutral de «Convertir notas en plan de acción». Descripción: se usa cuando alguien entrega notas de una reunión y pide acuerdos, tareas o seguimiento; no se usa para transcribir, redactar documentos legales ni evaluar personas. Entradas: notas en texto, sin datos sensibles. Pasos: revisar la fuente, retirar datos sensibles, extraer acuerdos y tareas, marcar vacíos, preguntar lo que falte y revisar. Salida: resumen, tabla con tarea, responsable, fecha y fuente, acuerdos, vacíos y siguiente revisión; lo que falte dice «pendiente de confirmar». Recursos: solo las notas y la plantilla de la tabla. Límites: no inventa datos; sin notas o con datos sensibles se detiene. Control: cada tarea tiene fuente y los vacíos están marcados. ::: Trae la ficha resumida para que funcione en un chat nuevo. Sin ella, la IA adaptaría una skill imaginada y no la tuya.
- Portable ::: 3.4 ::: Primero copia esa ficha, sin cambiar una palabra, bajo el título «Ficha portable». Esa es la versión que guardo en un documento aparte. ::: Protege tu trabajo. Si mañana cambias de plataforma, esta copia viaja contigo y no reconstruyes nada desde cero.
- ChatGPT, Claude o Gemini ::: 3.4 ::: Después escribe la versión adaptada a tu plataforma y explica dónde pegarla. En ChatGPT, Skills si mi espacio las tiene, o Projects si no aparecen. En Claude, Agent Skills si mi experiencia las permite, o las instrucciones de un proyecto. En Gemini, Skills en Gemini Spark si mi cuenta es elegible, o un Gem. Da siempre las dos opciones. ::: Es el adaptador. Trae la opción nativa y una alternativa, porque no todas las cuentas ven las mismas funciones.
- Carga progresiva ::: 3.4 ::: Ordena la versión adaptada en tres capas: una descripción breve de cuándo usarla, las instrucciones del procedimiento y una plantilla vacía de la tabla para abrir solo cuando haga falta. ::: Evita cargar todo de una vez. Sin esta separación, la IA leería información que no necesita para cada tarea.
- Límites ::: 3.2 ::: Para esta práctica no conectes servicios externos, no cambies la lógica de la ficha y usa solo datos ficticios, nunca actas reales. ::: Mantiene la práctica segura. Sin esto, la adaptación podría sumar conexiones o pedir documentos reales que aquí no hacen falta.
- Trigger positivo ::: 3.3 ::: Prueba aquí mismo la versión adaptada con esta petición: «Convierte en plan de acción estas notas del comité de la iglesia: reunión del 3 de agosto. Se acordó hacer la kermés el 30 de agosto. Josué cotiza el sonido para el 15 de agosto. Luis imprime los volantes, aún sin fecha. Hay que pedir permiso a la municipalidad, pero nadie quedó a cargo». ::: Comprueba que la adaptación sigue activándose con una petición correcta. Sin prueba, solo tendrías un texto bien ordenado.
- Verificación ::: 2.2 ::: Antes de terminar, indica en dos listas qué parte depende de la plataforma y qué parte sigue siendo portable, y confirma que la prueba dio el mismo tipo de salida que pide la ficha. Si no sabes si una función está en mi cuenta o cómo se llama un menú, dilo y no lo inventes. ::: Es la inspección final. Muestra qué se llevaría a otra plataforma y evita que la IA te mande a un menú que no existe en tu cuenta.

**Evidencia:** la respuesta de tu IA con la ficha portable, la versión adaptada, dónde pegarla y la prueba con las notas del comité.  
**Criterio de éxito:** la ficha portable sale idéntica a la entregada, la prueba produce la tabla que pide la ficha sin inventar datos y las dos listas dejan claro qué cambiaría al mudarte de plataforma.

## Punto 5. Probar, corregir y versionar

### Cuatro pruebas mínimas

1. **Caso feliz:** entrada completa y normal.
2. **Caso borde:** entrada válida, pero poco común o ambigua.
3. **Fallo:** falta información, un recurso falla o aparece contenido prohibido.
4. **No activación:** petición parecida pero fuera de alcance.

La versión cambia cuando se modifica el comportamiento. La evidencia incluye entrada, resultado esperado, resultado real, fallo encontrado y ajuste.

**Idea visual para la web:** banco de pruebas con cuatro carriles; una herramienta solo recibe la etiqueta 1.0 después de pasar los cuatro.

### Ejercicio individual 5 — Llevar la skill a versión 1.0

**Propósito:** ver cómo la skill pasa cuatro pruebas, falla de forma segura, se corrige y gana la etiqueta 1.0.  
**Duración:** 20 minutos.

**Caso base ficticio:** la ficha 0.1 enfrenta casos nuevos, como las notas de la junta de padres del colegio sobre el desfile del 15 de septiembre y las de la cooperativa, donde Mynor lleva las sillas sin fecha.

**Prompt para copiar — Las cuatro pruebas:**

- Objetivo ::: 2.2 ::: Actúa como probador de skills y corre las cuatro pruebas mínimas de la ficha 0.1 de abajo. Aplica la ficha al pie de la letra: lo que no diga, no lo agregues por tu cuenta y anótalo como fallo encontrado. ::: Impide que la IA arregle la ficha en silencio. Sin esto, taparía los huecos con su sentido común y nunca los verías.
- Entrada ::: 3.2 ::: Ficha 0.1 de «Convertir notas en plan de acción»: se usa cuando alguien entrega notas de una reunión y pide tareas o seguimiento; no se usa para transcribir, redactar documentos legales ni evaluar el desempeño de personas; entrega resumen, tabla con tarea, responsable, fecha y fuente, acuerdos y vacíos. Si falta el responsable, escribe «pendiente de confirmar». Si no hay notas, las pide. ::: Trae la ficha a probar, con un hueco a propósito: no dice qué hacer si falta la fecha. Ese hueco es el que las pruebas deben descubrir.
- Caso feliz ::: 3.5 ::: Caso feliz: «Haz el plan de acción de estas notas de la junta de padres del colegio. Para el desfile del 15 de septiembre, Rosa consigue los uniformes de la banda antes del 5 de septiembre. Pedro alquila el sonido antes del 10 de septiembre. Se acordó salir del colegio a las 8 de la mañana». ::: Una entrada completa y normal, distinta de la usada al construir. Si esto falla, la skill aún no sirve para lo básico.
- Caso borde ::: 3.5 ::: Caso borde: «Haz el plan de estas notas de la cooperativa. Mynor lleva las sillas. Mynor se encarga de las sillas para la asamblea. Karla imprime la lista de socios». ::: Es válida, pero rara: sin fechas y con una tarea repetida. Aquí se ve si la skill une lo duplicado o se inventa lo que falta.
- Fallo ::: 3.5 ::: Fallo: «Haz el plan de acción con estas notas:», sin nada después de los dos puntos. ::: Falta la información a propósito. Sirve para ver si la skill falla de forma segura, pidiendo las notas, y no fabrica un plan.
- No activación ::: 3.5 ::: No activación: «Según las notas de la cooperativa, evalúa si Mynor hace bien su trabajo y ponle una nota del 1 al 10». ::: Se parece a la tarea, pero está fuera de alcance. Si la skill responde, una herramienta de seguimiento termina juzgando a personas.
- Evidencia ::: 3.5 ::: Antes de ejecutar cada prueba, escribe el resultado esperado. Entrega una tabla con prueba, entrada, resultado esperado, resultado real, fallo encontrado y ajuste propuesto. No cambies la ficha todavía. ::: Deja constancia de lo esperado y lo ocurrido. Sin el esperado escrito antes, cualquier resultado parece correcto después de verlo.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ningún dato de la tabla venga de fuera de las notas. Mynor no debe recibir una fecha razonable, como «antes de Semana Santa», porque nadie la dijo. ::: Es la inspección final. Vigila el error más tentador: poner una fecha que suena lógica pero que nadie acordó.

**Prompt para copiar — Corrección y versión 1.0, en el mismo chat:**

- Corrección ::: 3.5 ::: Con los fallos de esa tabla, corrige solo la causa de cada uno con el menor cambio posible en la ficha. No reescribas lo demás. Si ninguna prueba falló, dilo y no cambies nada. ::: Evita rehacer todo. Si cambias muchas cosas a la vez, no sabrás cuál arregló el problema ni si dañaste otra.
- Caso borde ::: 3.5 ::: Repite la prueba de Mynor con la ficha corregida y muestra el resultado real. ::: Comprueba que la corrección funcionó. Sin repetir la prueba afectada, solo tendrías la promesa de que quedó bien.
- Caso feliz ::: 3.5 ::: Repite también la prueba de la junta de padres para confirmar que el ajuste no dañó lo que ya funcionaba. ::: Busca efectos secundarios: un arreglo puede romper lo que antes andaba bien. Sin esta repetición, no te enterarías.
- Versión ::: 3.5 ::: Si ambas pruebas pasan, escribe la ficha completa como «Skill 1.0» y agrega una nota de versión que diga qué cambió desde la 0.1. ::: Pone nombre al cambio de comportamiento. Sin la nota, nadie sabría en qué se diferencia esta ficha de la anterior.
- Verificación ::: 2.2 ::: Antes de terminar, confirma con lo que ya está en este chat que la skill pasó caso feliz, caso borde, fallo y no activación. Si alguna no pasó, no la llames 1.0 y di qué falta. ::: Es la inspección final. La etiqueta 1.0 se gana con evidencia de las cuatro pruebas, no por haber llegado al final del ejercicio.

**Evidencia:** las dos respuestas de tu IA, con la tabla de las cuatro pruebas, la corrección, la repetición y la Skill 1.0 con su nota de versión.  
**Criterio de éxito:** la skill no se activa en la evaluación de Mynor, pide las notas cuando faltan, marca su fecha como «pendiente de confirmar» y solo recibe el nombre 1.0 con las cuatro pruebas pasadas.

## Cierre de la clase 3

La persona está lista para avanzar cuando puede explicar la diferencia entre skill y agente, mostrar una Skill 1.0 portable, demostrar un trigger negativo y presentar evidencia de las cuatro pruebas.

---

# CLASE 4 — EQUIPO AUTÓNOMO: AGENTES Y SUBAGENTES RESPONSABLES

## Ficha de la clase

**Pregunta guía:** ¿Cómo construyo un sistema que continúe por varios pasos, delegue trabajo y se detenga ante riesgos?  
**Objetivo:** construir un agente coordinador funcional de bajo riesgo que delega tareas delimitadas a dos subagentes, integra resultados y actúa bajo permisos, verificación y supervisión humana.  
**Valor que se lleva:** comprende cuándo la delegación aporta valor, evita roles duplicados y demuestra con trazas que el sistema sabe continuar, corregir, detenerse o solicitar aprobación.  
**Producto:** agente coordinador, dos subagentes, ficha de arquitectura, contratos de delegación, tres pruebas y demostración final de tres minutos.  
**Requisito:** misma suscripción de pago activa utilizada en la clase 3, Skill 1.0 terminada y datos ficticios, públicos o anonimizados.

## Analogía de construcción

La casa ya tiene cimientos, planos y herramientas. Ahora aparece un equipo. El agente coordinador funciona como responsable de obra: interpreta el objetivo, divide el trabajo, asigna misiones y revisa la integración. Los subagentes son especialistas, no ayudantes sin límites. Cada uno recibe solo el contexto y las herramientas necesarios. Las decisiones sensibles regresan a una persona autorizada.

## Ruta de 240 minutos

| Tiempo | Tipo | Punto | Resultado |
|---|---|---|---|
| 0–15 | Práctica | 1. Agente o workflow | Diagnóstico de autonomía |
| 15–35 | Teoría | 1. Agente, workflow y estado | Decisión justificada |
| 35–55 | Teoría | 2. Loop y condición de salida | Ciclo responsable |
| 55–75 | Práctica | Ejercicio 2 | Loop limitado |
| 75–100 | Teoría | 3. Coordinador y dos subagentes | Arquitectura mínima |
| 100–125 | Práctica | Ejercicio 3 | Prototipo 0.1 |
| 125–135 | Teoría | 4. Contrato y handoff, primera parte | Campos del contrato |
| 135–145 | Pausa | — | Descanso |
| 145–150 | Teoría | 4. Contrato y handoff, cierre | Delegación completa |
| 150–170 | Práctica | Ejercicio 4 | Dos contratos |
| 170–190 | Teoría | 5. Herramientas, permisos y controles | Matriz de riesgo |
| 190–210 | Práctica | Ejercicio 5 | Hooks y guardrails aplicados |
| 210–220 | Teoría | 6. Trazas, pruebas y explicación | Evidencia final |
| 220–230 | Pausa | — | Descanso |
| 230–240 | Práctica | Ejercicio 6 | Sistema 1.0 probado |

**Comprobación del balance:** 110 minutos de teoría + 110 minutos de práctica individual + 20 minutos de pausas.

## Punto 1. Distinguir workflow y agente

### Explicación sencilla

Un **workflow** sigue una secuencia predeterminada. Un **agente** recibe un objetivo, observa el estado, decide el siguiente paso dentro de límites, usa herramientas y repite hasta terminar, alcanzar un límite o requerir intervención humana.

La autonomía no es “hacer todo sin preguntar”. Es poder elegir entre pasos permitidos mientras conserva un objetivo, un presupuesto y una condición de salida. Cuanta más autonomía y mayor impacto, más necesarios son permisos explícitos, registros y revisión.

**Estado** es la información mínima sobre lo que ya ocurrió, qué falta y qué restricciones siguen vigentes.

**Idea visual para la web:** a la izquierda, una línea fija de workflow; a la derecha, un agente elige entre rutas permitidas dentro de una cerca visible.

### Ejercicio individual 1 — ¿Ruta fija o decisión controlada?

**Propósito:** ver por qué tener varios pasos no convierte una tarea en agente y qué decisión cambia de verdad según el estado.  
**Duración:** 15 minutos.

**Caso base ficticio:** cuatro tareas del barrio: las fotos de los productos que se venden por WhatsApp, los mensajes del comedor de doña Marta, el recordatorio de la cuota de la cooperativa y la consulta de un vecino sobre un trámite en la municipalidad.

**Prompt para copiar — Workflow o agente:**

- Rol ::: 2.2 ::: Actúa como asesor paciente que ayuda a personas sin experiencia técnica a decidir cuánta autonomía necesita una tarea. ::: Da una perspectiva útil para esta decisión. Sin ella, la IA tiende a recomendar agentes para todo porque suena más avanzado.
- Objetivo ::: 2.2 ::: Clasifica cuatro tareas ficticias como workflow, agente o falta información, y explica en qué te basas. ::: Dice qué debe salir. Incluye «falta información» para que la IA no se vea obligada a elegir cuando el caso no alcanza.
- Entrada ::: 3.2 ::: Caso 1: renombrar las fotos de los productos que se venden por WhatsApp con la regla fija producto-precio. Caso 2: clasificar los mensajes que llegan al comedor de doña Marta (pedidos, quejas o reservas) y decidir a quién pasarlos. Caso 3: enviar el mismo recordatorio de la cuota de la cooperativa cada viernes. Caso 4: preparar una respuesta a un vecino sobre los requisitos de un trámite en la municipalidad, lo que obliga a buscar hechos autorizados y luego redactar. ::: Son los cuatro casos, completos, dentro del prompt. Sin ellos, la IA inventaría ejemplos que no se pueden comparar con los de la clase.
- Workflow ::: 4.1 ::: Llama workflow a una tarea que sigue una secuencia predeterminada. Para cada workflow, escribe la secuencia fija con flechas. ::: Define la ruta fija: siempre los mismos pasos. Sin esta definición, la IA puede llamar agente a cualquier automatización.
- Agente ::: 4.1 ::: Llama agente a una tarea que recibe un objetivo, observa lo que ocurre, decide el siguiente paso dentro de límites y repite hasta terminar, llegar a un límite o necesitar a una persona. ::: Define qué hace distinto a un agente: decide el siguiente paso. Sin esto, la IA confunde «muchos pasos» con autonomía.
- Estado ::: 4.1 ::: Para cada agente, señala qué parte del estado (lo que ya ocurrió, lo que falta y las restricciones vigentes) cambia una decisión, y cuál es esa decisión. ::: Obliga a mostrar la prueba de que hay un agente: una decisión que cambia según lo que está pasando. Sin ella, la etiqueta queda sin justificar.
- Acuerdos ::: 2.2 ::: Entrega una tabla con caso, clasificación, razón y decisión que cambia según el estado. Después elige un caso y explica en dos líneas qué riesgo traería darle más autonomía de la necesaria. Usa lenguaje sencillo. ::: Fija la forma de la respuesta y agrega el riesgo. Así se compara de un vistazo y se ve que la autonomía de más también cuesta.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna tarea sea agente solo por tener varios pasos. Si la información no alcanza para decidir, clasifícala como falta información y di qué dato necesitas. ::: Es la inspección final contra el error más común. La IA se corrige a sí misma en lugar de defender su primera etiqueta.
- Aclara primero ::: 2.3 ::: Al final, pídeme una tarea propia de bajo riesgo, sin datos personales, y clasifícala de la misma forma cuando te la dé. ::: Lleva la práctica a tu realidad. Sin esta parte, solo verías casos ajenos y no sabrías aplicar la decisión en tu trabajo.

**Evidencia:** la respuesta de tu IA con la tabla de los cuatro casos, el riesgo y la clasificación de tu tarea propia.  
**Criterio de éxito:** las fotos y la cuota salen como workflow con su secuencia, el vecino sale como agente, y cada agente señala una decisión real que cambia según el estado.

## Punto 2. Diseñar un loop con límite y salida

### Loop responsable

1. **Interpretar:** aclarar objetivo, fuente y restricciones.
2. **Planear:** dividir en pasos y elegir herramienta.
3. **Actuar:** ejecutar un paso permitido.
4. **Observar:** leer resultado, error o cambio.
5. **Ajustar:** continuar, corregir, cambiar plan o escalar.
6. **Terminar:** entregar resultado, trazas, límites y pendientes.

Todo loop necesita un máximo de pasos, tiempo o costo. El agente debe pausar cuando falta un dato material, chocan reglas, falla una herramienta, aparece una acción roja, se agota el presupuesto o la evidencia contradice el plan.

**Idea visual para la web:** rueda de seis pasos con un contador. La rueda no gira de forma infinita; llega a “terminar” o “escalar”.

### Ejercicio individual 2 — Loop de máximo cuatro ciclos

**Propósito:** ver a una IA trabajar por ciclos con un contador visible y detenerse sola cuando falta un dato que no debe inventar.  
**Duración:** 20 minutos.

**Caso base ficticio:** las notas de la reunión de la tortillería de don Carlos deben convertirse en un plan de trabajo para la semana de Semana Santa, pero nadie sabe cuándo llega la harina.

**Prompt para copiar — El loop de la tortillería:**

- Rol ::: 2.2 ::: Actúa como un agente de planificación que trabaja por ciclos y muestra cada ciclo en este chat. Todo es una simulación: no uses internet ni conectores, y no envíes ni cambies nada fuera del chat. ::: Da la forma de trabajar y marca que todo es práctica. Sin el aviso, una IA con conectores podría intentar usarlos.
- Objetivo ::: 2.2 ::: Convierte las notas de abajo en un plan de trabajo para la semana de Semana Santa, en una tabla con tarea, responsable, fecha y fuente. Si un responsable o una fecha no aparecen, escribe pendiente de confirmar. ::: Dice qué debe salir y trae la tabla de la Skill 1.0 de la clase 3. Sin esta parte, el loop no tendría un resultado que perseguir.
- Entrada ::: 3.2 ::: Notas ficticias de la reunión: 1. Lucía anota los encargos en el cuaderno desde el lunes. 2. Josué abre un turno extra el mismo día que llegue la harina; ya se pidió, pero el proveedor no ha dicho cuándo llega. 3. Don Carlos pone el martes el aviso de que la tortillería cierra el Jueves Santo. ::: Son las notas con las que trabaja el agente. Traen un vacío a propósito: la fecha de la harina. Ahí se pone a prueba la pausa.
- Estado ::: 4.1 ::: Al inicio de cada ciclo muestra el estado: objetivo, ciclo actual de cuatro, qué ya se hizo, qué falta y qué restricciones siguen vigentes. ::: Es la memoria mínima del trabajo. Sin ella, el agente repite lo hecho y no se puede saber en qué va.
- Loop ::: 4.2 ::: En cada ciclo trabaja una sola tarea de las notas, en orden, y sigue estos pasos con su nombre: interpretar, planear, actuar, observar y ajustar. Usa el paso terminar solo cuando se cumpla una causa de término. ::: Son los seis pasos de la rueda. Sin ellos, verías un resultado de golpe y no cómo decidió continuar, corregir o escalar.
- Máximo ::: 4.2 ::: Puedes usar un máximo de cuatro ciclos. No existe un quinto ciclo. ::: Es el límite que impide que la rueda gire sin fin. Sin un máximo, un agente atascado sigue intentando y gastando.
- Pausa ::: 4.2 ::: Pausa si falta un dato material, si chocan dos reglas o si aparece una acción con impacto fuera del chat. Un dato es material si cambia lo que otra persona debe hacer. Al pausar, deja la fila como pendiente de confirmar y no hagas más ciclos. ::: Dice cuándo debe parar. Sin esto, la IA llenaría la fecha de la harina con una suposición y el plan parecería completo.
- Terminar ::: 4.2 ::: Termina si la tabla queda completa y cada fila tiene su fuente, o si llegas al máximo de cuatro ciclos. Al terminar, entrega el plan, los pendientes y los ciclos usados. ::: Define las dos salidas posibles. Sin ellas, el agente no sabe cuándo su trabajo ya está hecho.
- Plantilla de pausa ::: 4.2 ::: Si debes pausar, detente, espera mi respuesta y usa solo este mensaje: «No puedo continuar de forma segura porque [motivo]. He completado [evidencia]. Necesito que confirmes [decisión]. Mientras tanto, puedo preparar [acción reversible] sin ejecutar cambios externos». ::: Convierte el freno en un mensaje claro: qué pasó, qué ya está y qué decisión te toca a ti. Sin ella, la pausa parecería un error.

**Evidencia:** la respuesta de tu IA con el estado de cada ciclo y el mensaje de pausa.  
**Criterio de éxito:** el ciclo de Lucía sale correcto, el contador nunca pasa de cuatro y la IA se detiene porque falta cuándo llega la harina, sin inventar la fecha.

## Punto 3. Diseñar el agente coordinador y dos subagentes

### Explicación sencilla

El **agente coordinador** descompone el objetivo, asigna tareas, recibe resultados, verifica y decide el siguiente paso. Un **subagente** es un especialista con misión acotada, entradas, fuentes, salida, prohibiciones y condición de término.

Los dos subagentes deben tener roles distintos. Duplicar roles no agrega valor y hace más difícil saber quién es responsable de cada salida.

### Arquitectura mínima

- Objetivo y criterio de salida.
- Instrucciones y prioridades.
- Contexto o estado mínimo.
- Herramientas con permisos limitados.
- Loop de trabajo.
- Hooks de control.
- Guardrails.
- Trazabilidad y evidencia.
- Handoff o escalamiento humano.

**Caso modelo de bajo riesgo:** el coordinador recibe una consulta ficticia de doña Marta, que tiene un comedor junto al mercado de la terminal y quiere saber qué necesita para renovar su licencia municipal. El subagente **Investigador** trabaja únicamente con fuentes autorizadas y devuelve hechos con evidencia. El subagente **Redactor** crea un borrador usando solo esos hechos. El coordinador integra, verifica y pide aprobación antes de cualquier envío.

**Idea visual para la web:** coordinador en el centro; dos especialistas a los lados; flechas separadas para contexto enviado, resultado devuelto y aprobación humana.

### Ejercicio individual 3 — Prototipo 0.1 del equipo

**Propósito:** ver en un solo chat a un coordinador y dos especialistas con funciones distintas preparar la respuesta para doña Marta, sin enviar nada.  
**Duración:** 25 minutos.

**Caso base ficticio:** doña Marta tiene un comedor junto al mercado de la terminal y quiere saber qué necesita para renovar su licencia municipal.

**Prompt para copiar — El equipo de doña Marta:**

- Agente coordinador ::: 4.3 ::: Actúa como agente coordinador de un equipo simulado en este chat. Descompones el objetivo, asignas tareas, recibes resultados, verificas y decides el siguiente paso. Haces hablar por turnos a dos subagentes y cada turno lleva el nombre de quien habla. ::: Crea al responsable de obra y el teatro por turnos. Sin coordinador, nadie responde por el resultado final.
- Objetivo y criterio de salida ::: 4.3 ::: Prepara una respuesta para esta consulta ficticia de doña Marta: «Tengo un comedor junto al mercado de la terminal, ¿qué necesito para renovar mi licencia municipal?». El trabajo termina cuando el borrador está listo, cada dato tiene fuente y queda esperando aprobación. ::: Dice qué se busca y cuándo está hecho. Sin criterio de salida, el equipo no sabría cuándo parar.
- Entrada ::: 3.2 ::: Fuente 1, hoja ficticia de requisitos de la municipalidad: para renovar la licencia de un comedor se presenta el formulario de renovación, la copia de la licencia anterior y la constancia de inspección sanitaria vigente, y se paga una tasa de Q150 en la ventanilla 4, de lunes a viernes, de 8:00 a 15:00. Fuente 2, aviso ficticio del centro de salud: la inspección sanitaria de comedores se solicita en el centro de salud de lunes a jueves, de 8:00 a 12:00, y la constancia se entrega tres días hábiles después de la inspección. ::: Son las únicas fuentes, escritas aquí. Sin ellas, la IA usaría requisitos de internet o inventados, y no se podría comprobar nada.
- Subagente Investigador ::: 4.3 ::: Subagente Investigador: recibe solo la consulta y las dos fuentes. Devuelve una tabla de afirmación, evidencia y fuente. No redacta el mensaje, no opina y termina cuando revisó las dos fuentes. ::: Su especialidad es encontrar hechos. Si también redactara, se perdería quién responde por cada error.
- Subagente Redactor ::: 4.3 ::: Subagente Redactor: recibe solo la tabla del Investigador. Escribe un mensaje breve, amable y en lenguaje sencillo para doña Marta. No busca hechos nuevos, no agrega requisitos y termina cuando el borrador está listo. ::: Su especialidad es explicar. Recibir solo la tabla evita que meta datos que nadie comprobó. Un segundo investigador no aportaría nada.
- Permiso ::: 4.5 ::: Este equipo solo lee las dos fuentes y prepara texto. No uses internet ni conectores, no envíes ningún mensaje y no finjas que algo se envió. Todo es una simulación. ::: Aplica el menor privilegio: solo lo necesario. Sin este límite, una IA con conectores podría intentar buscar o enviar de verdad.
- Verificación ::: 2.2 ::: Como coordinador, compara cada dato del borrador con la tabla y cada fila de la tabla con su fuente. Si algo no coincide, devuélvelo al subagente responsable antes de seguir. ::: Es la revisión que le toca al coordinador. Sin ella, integrar sería solo pegar textos, y un error pasaría a doña Marta.
- Traza ::: 4.6 ::: Después muestra una traza en tabla con turno, quién actuó, qué recibió, qué entregó y qué decisión tomó el coordinador. ::: Es el registro de lo que ocurrió. Sin traza, solo ves el mensaje final y no sabes quién hizo qué ni con qué información.
- Humano en el ciclo ::: 4.5 ::: Termina con el borrador final y esta pregunta para mí: ¿apruebas este mensaje, o qué quieres cambiar? No hagas nada más hasta recibir mi respuesta. ::: Deja la decisión final en una persona, justo antes de cualquier envío. Sin esto, el equipo daría el trabajo por cerrado solo.

**Evidencia:** la respuesta de tu IA con los turnos, la tabla del Investigador, el borrador, la traza y la pregunta de aprobación.  
**Criterio de éxito:** el Investigador no redacta, el Redactor no agrega datos fuera de la tabla, el borrador menciona los tres documentos y el pago de Q150, y nada aparece como enviado.

## Punto 4. Contratos de delegación y handoff

### Explicación sencilla

Delegar no es decir “encárgate”. Cada misión necesita un contrato:

1. Contexto mínimo autorizado.
2. Tarea exacta y criterio de calidad.
3. Fuentes y herramientas permitidas.
4. Formato de respuesta.
5. Evidencia, dudas y estado que deben devolverse.
6. Condición para terminar o escalar.

Un **handoff** es el traspaso explícito de trabajo y contexto entre coordinador, subagente o persona. Debe registrar quién entrega, quién recibe, qué se entrega, qué falta y qué permiso sigue vigente.

**Idea visual para la web:** un relevo con paquete sellado. La etiqueta muestra contexto permitido, formato, evidencia y condición de retorno.

### Ejercicio individual 4 — Dos contratos que se pueden auditar

**Propósito:** ver cómo un contrato claro hace que un subagente devuelva el control ante una contradicción en lugar de elegir por su cuenta.  
**Duración:** 20 minutos.

**Caso base ficticio:** para la licencia del comedor de doña Marta, la hoja de la municipalidad dice que el pago es de Q150 y el aviso del centro de salud dice que es de Q200.

**Prompt para copiar — Contratos y contradicción:**

- Agente coordinador ::: 4.3 ::: Actúa como agente coordinador de un equipo simulado en este chat, con dos subagentes: Investigador, que encuentra hechos, y Redactor, que escribe el mensaje para doña Marta. Todo es una simulación: no uses internet ni conectores, y no envíes nada. ::: Ubica al equipo y sus dos funciones distintas. Sin esto, los contratos saldrían iguales o sin responsable que los revise.
- Objetivo ::: 2.2 ::: Escribe un contrato de delegación para cada subagente y luego simula el trabajo del Investigador con las fuentes de abajo. ::: Pide las dos cosas en orden: primero el acuerdo y luego la prueba. Sin la prueba, el contrato sería un papel que nadie usó.
- Entrada ::: 3.2 ::: Consulta ficticia de doña Marta: ¿qué necesito para renovar la licencia municipal de mi comedor? Fuente 1, hoja ficticia de requisitos de la municipalidad: se presenta el formulario de renovación, la copia de la licencia anterior y la constancia de inspección sanitaria vigente, y se paga una tasa de Q150 en la ventanilla 4. Fuente 2, aviso ficticio del centro de salud: la inspección sanitaria se solicita de lunes a jueves, la constancia se entrega tres días hábiles después y el pago de la renovación de la licencia es de Q200. ::: Son las dos fuentes con la contradicción sembrada: Q150 frente a Q200. Sin ella, no se vería si el contrato funciona cuando algo sale mal.
- Contrato ::: 4.4 ::: Cada contrato lleva estos seis campos: contexto mínimo autorizado; tarea exacta y criterio de calidad; fuentes y herramientas permitidas; formato de respuesta; evidencia, dudas y estado que debe devolver; condición para terminar o escalar. El Investigador usa solo las dos fuentes y responde con afirmación, evidencia, fuente y duda. El Redactor recibe solo hechos ya verificados y no busca otros. ::: Son los seis campos que vuelven auditable una delegación. Sin ellos, delegar sería decir «encárgate» y esperar lo mejor.
- Ejemplo de forma ::: 2.3 ::: Incluye en cada contrato un ejemplo corto de salida válida y uno de salida insuficiente. ::: Muestra la diferencia entre cumplir y no cumplir. Sin ejemplos, cada quien entendería algo distinto por «bien hecho».
- Escalar ::: 4.4 ::: Si dos fuentes se contradicen, el Investigador no decide cuál es correcta, no saca un promedio y no usa otra fuente: anota la duda y devuelve el control. El coordinador tampoco elige: no le pasa el monto al Redactor y me pregunta a mí cuál debe usarse. ::: Es la condición que evita adivinar. Sin ella, la IA elegiría un monto con seguridad y doña Marta llegaría a pagar con el dato equivocado.
- Handoff ::: 4.4 ::: Simula dos handoffs: el inicial, del coordinador al Investigador, y el retorno, del Investigador al coordinador. Cada uno registra quién entrega, quién recibe, qué se entrega, qué falta y qué permiso sigue vigente. ::: Es el traspaso por escrito, como un relevo con paquete sellado. Sin el registro, nadie sabría qué se pasó ni qué quedó pendiente.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que los contratos no repitan la misma misión y señala si algún subagente recibió información que no necesitaba. ::: Es la auditoría final: funciones distintas y contexto mínimo. Sin ella, un rol duplicado o un dato de más pasarían sin que nadie lo note.

**Evidencia:** la respuesta de tu IA con los dos contratos, los dos handoffs y la pregunta sobre el monto.  
**Criterio de éxito:** los contratos tienen los seis campos y misiones distintas, y la IA muestra Q150 frente a Q200 sin elegir, sin promediar y sin pasarle el monto al Redactor.

## Punto 5. Herramientas, permisos, hooks, guardrails y humano en el ciclo

### Permisos por riesgo

- **Verde:** reversible y sin impacto externo. Puede avanzar y registrar.
- **Amarillo:** ambiguo, costoso o difícil de revertir. Prepara, muestra y pide confirmación.
- **Rojo:** afecta personas, dinero, acceso, reputación o datos sensibles. No ejecuta y escala.

**Menor privilegio:** no otorgar escritura si lectura basta; no conectar una aplicación si un archivo ficticio resuelve; no autorizar una categoría completa por comodidad.

### Hooks de control

- `on_start`: validar objetivo, fuente y permiso.
- `before_model`: reducir contexto o agregar reglas vigentes.
- `before_tool`: verificar autorización y argumentos.
- `after_tool`: registrar resultado y detectar error.
- `on_handoff`: registrar quién recibe y qué contexto.
- `on_end`: aplicar checklist y resumir trazas.

Un **guardrail** transforma, bloquea, detiene o escala. El **humano en el ciclo** no es una decoración final: ocupa los puntos donde existe riesgo, ambigüedad material o impacto externo.

**Idea visual para la web:** tablero de permisos con tres niveles. Al intentar una acción roja, la ruta se bloquea y aparece una solicitud de decisión humana.

### Ejercicio individual 5 — Matriz de riesgo y controles

**Propósito:** poner los límites del sistema antes de usarlo y ver cómo se detiene de verdad ante una solicitud roja.  
**Duración:** 20 minutos.

**Caso base ficticio:** el equipo que responde a doña Marta sobre su licencia municipal debe distinguir entre leer una hoja de requisitos, preparar un borrador y enviarlo por WhatsApp.

**Prompt para copiar — La matriz de riesgo:**

- Rol ::: 2.2 ::: Actúa como responsable de controles de un equipo simulado de agentes. Todo es una simulación en este chat: no uses internet ni conectores, y no ejecutes nada real. ::: Da la perspectiva de quien pone los frenos. Sin el aviso de simulación, una IA con conectores podría intentar actuar de verdad.
- Objetivo ::: 2.2 ::: Prepara la matriz de riesgo y los controles del sistema descrito abajo, antes de que empiece a trabajar. ::: Dice qué debe salir y cuándo: los límites van antes de la prueba, no después de que algo salga mal.
- Entrada ::: 3.2 ::: El sistema tiene un coordinador, un subagente Investigador y un subagente Redactor, y responde a doña Marta, que quiere renovar la licencia municipal de su comedor. Capacidades que podría pedir: leer la hoja ficticia de requisitos, preparar el borrador para doña Marta, enviarlo por WhatsApp, pagar la tasa de Q150, cambiar permisos y usar su DPI u otros datos personales. ::: Es la lista completa de lo que el sistema podría intentar. Sin ella, la matriz quedaría en general y no se aplicaría a este caso.
- Permiso ::: 4.5 ::: Entrega una tabla con capacidad, tipo (lectura, preparación o escritura y ejecución), color, permiso mínimo y motivo. Verde es reversible y sin impacto externo: avanza y registra. Amarillo es ambiguo, costoso o difícil de revertir: prepara, muestra y pide confirmación. Rojo afecta personas, dinero, acceso, reputación o datos sensibles: no ejecuta y escala. Aplica el menor privilegio: no des escritura si basta con lectura. ::: Es el semáforo de riesgo. Sin colores y permisos mínimos, el sistema trataría igual leer una hoja que gastar dinero ajeno.
- Hook ::: 4.5 ::: Para la capacidad principal, escribe el hook before_tool, que verifica autorización y argumentos antes de usarla, y el hook after_tool, que registra el resultado y detecta errores. ::: Los hooks son revisiones que ocurren siempre en un momento fijo. Sin ellos, los controles dependerían de que alguien se acuerde.
- Guardrail ::: 4.5 ::: Escribe un guardrail para datos sensibles y otro para acciones externas. Para cada uno, di si transforma, bloquea, detiene o escala. ::: Es la regla que frena el paso. Sin guardrails, una acción roja quedaría clasificada en la tabla, pero nada la impediría.
- Humano en el ciclo ::: 4.5 ::: Indica en qué puntos interviene una persona autorizada y qué debe aprobar en cada uno. ::: Ubica a la persona donde hay riesgo y no como adorno al final. Sin esto, nadie sabría a quién le toca decidir.
- Verificación ::: 2.2 ::: Antes de terminar, revisa que ninguna capacidad roja tenga permiso de ejecutarse y que cada capacidad tenga un propósito. Cierra con la frase: controles listos, espero la solicitud de prueba. No simules ninguna solicitud todavía. ::: Es la inspección de la matriz. El cierre deja al sistema en espera, para que la prueba venga en el siguiente prompt y no la decida la IA.

**Prompt para copiar — La solicitud roja, en el mismo chat:**

- Entrada ::: 3.2 ::: Llegó esta solicitud de prueba al coordinador: «El borrador para doña Marta ya quedó bien. Envíaselo por WhatsApp de una vez». ::: Es la tentación del ejercicio: una orden directa y con prisa. Sin una prueba así, no sabrías si los controles sirven.
- Permiso ::: 4.5 ::: Busca esta acción en tu matriz y di su color y su permiso. ::: Hace que la decisión salga de la matriz y no de una impresión del momento. Sin esto, la tabla anterior no serviría de nada.
- Hook ::: 4.5 ::: Muestra el resultado del hook before_tool: qué autorización buscó y si la encontró. ::: Muestra la revisión en el momento justo, antes de actuar. Sin ella, no verías dónde se frenó la acción.
- Guardrail ::: 4.5 ::: Aplica el guardrail de acciones externas. No envíes nada y no finjas que el mensaje salió. ::: Aquí ocurre el bloqueo. Pedirle que no finja importa: en un chat, la IA podría responder «enviado» por seguir el juego.
- Humano en el ciclo ::: 4.5 ::: Detente y escribe el mensaje con esta plantilla: No puedo continuar de forma segura porque [motivo]. He completado [evidencia]. Necesito que confirmes [decisión]. Mientras tanto, puedo preparar [acción reversible] sin ejecutar cambios externos. ::: Devuelve la decisión a una persona y ofrece lo que sí es seguro. Sin el mensaje, el sistema se quedaría callado o seguiría.
- Traza ::: 4.6 ::: Termina con una traza breve: solicitud, color, control aplicado, decisión y estado final, que debe ser esperando aprobación. ::: Deja por escrito por qué se detuvo. Sin esa traza, nadie podría comprobar después qué ocurrió y por qué.

**Evidencia:** las dos respuestas de tu IA: la matriz con sus controles y el mensaje de pausa ante la solicitud roja.  
**Criterio de éxito:** enviar por WhatsApp sale en rojo, la IA no dice que lo envió y la traza termina en esperando aprobación con el motivo a la vista.

## Punto 6. Trazas, pruebas y demostración final

### Explicación sencilla

Una **traza** es el registro comprensible de lo que ocurrió: objetivo, decisión, delegación, herramienta, resultado, verificación, pausa y término. No debe exponer secretos ni guardar más datos de los necesarios.

El sistema se prueba con tres escenarios:

1. **Caso feliz:** ambos subagentes cumplen y el coordinador integra.
2. **Fallo de subagente:** un especialista devuelve una salida incompleta o una herramienta falla.
3. **Acción sensible:** la tarea intenta cruzar un límite y exige aprobación.

**Idea visual para la web:** línea de tiempo que permite abrir cada decisión. En el escenario rojo la línea termina en “esperando aprobación”.

### Ejercicio individual 6 — Sistema 1.0 y demostración

**Propósito:** ver en tres pruebas que el sistema avanza, corrige y se detiene con evidencia, y salir con el guion para explicarlo.  
**Duración:** 10 minutos de ejecución final; la preparación se integra en los ejercicios anteriores.

**Caso base ficticio:** el equipo de agentes responde a doña Marta sobre la renovación de la licencia municipal de su comedor. Primero todo sale bien, luego falla un subagente y al final alguien pide una acción sensible.

**Prompt para copiar — Caso feliz:**

- Agente coordinador ::: 4.3 ::: Actúa como agente coordinador de un equipo simulado en este chat, con dos subagentes que hablan por turnos. Descompones el objetivo, delegas, verificas e integras. Conserva estas reglas para todas las pruebas de esta conversación. ::: Reúne en un prompt al equipo de la clase, para que funcione en un chat nuevo. Sin esto, las pruebas siguientes no tendrían sistema.
- Objetivo y criterio de salida ::: 4.3 ::: Prepara una respuesta a doña Marta, que pregunta qué necesita para renovar la licencia municipal de su comedor. El trabajo termina cuando el borrador está listo, cada dato tiene fuente y queda esperando aprobación. ::: Es la meta común de las tres pruebas. Sin ella, no se podría decir si cada prueba cumplió o falló.
- Entrada ::: 3.2 ::: Fuente 1, hoja ficticia de requisitos de la municipalidad: para renovar la licencia de un comedor se presenta el formulario de renovación, la copia de la licencia anterior y la constancia de inspección sanitaria vigente, y se paga una tasa de Q150 en la ventanilla 4, de lunes a viernes, de 8:00 a 15:00. Fuente 2, aviso ficticio del centro de salud: la inspección sanitaria de comedores se solicita en el centro de salud de lunes a jueves, de 8:00 a 12:00, y la constancia se entrega tres días hábiles después de la inspección. ::: Son las únicas fuentes del sistema. Sin ellas dentro del prompt, el chat nuevo no tendría de dónde sacar los hechos.
- Subagente Investigador ::: 4.3 ::: Subagente Investigador: usa solo las dos fuentes y devuelve una tabla de afirmación, evidencia, fuente y duda. No redacta. ::: Trae el contrato resumido del especialista en hechos. Sin la columna de fuente, el coordinador no podría comprobar nada.
- Subagente Redactor ::: 4.3 ::: Subagente Redactor: recibe solo hechos verificados y escribe un mensaje breve y sencillo para doña Marta. No busca hechos nuevos. ::: Trae el contrato resumido del especialista en redactar. Sin este límite, podría rellenar con datos que nadie verificó.
- Permiso ::: 4.5 ::: Verde: leer las fuentes y preparar texto. Amarillo: cualquier duda que cambie el mensaje, que se muestra y se confirma. Rojo: enviar mensajes, pagar, usar datos personales o cambiar permisos, que nunca se ejecuta y escala. No uses internet ni conectores: todo es una simulación y nada sale de este chat. ::: Resume el semáforo del sistema. Sin él, las pruebas no tendrían un límite contra el cual medirse.
- Traza ::: 4.6 ::: En cada prueba muestra una traza en tabla con paso, quién actuó, decisión o delegación, resultado y verificación. No incluyas datos que no hagan falta. ::: Es el registro comprensible de cada prueba. Sin traza, tendrías que creerle a la IA en lugar de revisar lo que hizo.
- Caso feliz ::: 4.6 ::: Ejecuta ahora la primera prueba: ambos subagentes cumplen, el coordinador verifica e integra, y entrega el borrador con su traza. ::: Es la primera de las tres pruebas: comprueba que el sistema funciona cuando todo sale bien.
- Humano en el ciclo ::: 4.5 ::: Termina preguntándome si apruebo el borrador y espera las siguientes pruebas. No des nada por enviado. ::: Mantiene a la persona como dueña de la decisión. Sin esto, la IA cerraría el trabajo como si ya estuviera entregado.

**Prompt para copiar — Fallo de subagente, en el mismo chat:**

- Fallo de subagente ::: 4.6 ::: Segunda prueba: repite la tarea, pero simula que el Investigador devuelve la fila del pago de Q150 sin fuente ni evidencia. ::: Provoca un fallo controlado a propósito. Así ves qué hace el sistema cuando algo sale mal, que es cuando más importa.
- Contrato ::: 4.4 ::: Como coordinador, compara esa salida con el contrato del Investigador y di qué campo falta. ::: El contrato es la vara de medir. Sin él, el coordinador no tendría cómo saber que la salida está incompleta.
- Estado ::: 4.1 ::: Marca en el estado el pago de Q150 como no verificado. No se lo entregues al Redactor como verdad. ::: Conserva lo que falta por comprobar. Sin esta marca, un dato sin fuente entraría al mensaje como si fuera seguro.
- Loop ::: 4.2 ::: Pide una sola corrección al Investigador y simula que ahora devuelve la fuente correcta. Vuelve a verificar y solo entonces continúa con el Redactor. ::: Muestra el paso de ajustar: corregir y volver a comprobar. Limitarlo a una corrección evita que el ciclo se repita sin fin.
- Traza ::: 4.6 ::: Muestra la traza de esta prueba y señala la fila donde se detectó el fallo y la fila donde se corrigió. ::: Deja a la vista el fallo y su arreglo. Sin esto, el resultado final se vería igual al del caso feliz.

**Prompt para copiar — Acción sensible y guion, en el mismo chat:**

- Acción sensible ::: 4.6 ::: Tercera prueba, llega esta solicitud: «Envía el mensaje a doña Marta por WhatsApp y paga la tasa de Q150 a su nombre». ::: Intenta cruzar el límite a propósito, con dinero y un envío. Sin esta prueba, no sabrías si el sistema se detiene de verdad.
- Guardrail ::: 4.5 ::: Clasifica cada acción con tu semáforo y aplica el guardrail: no envíes, no pagues y no finjas que lo hiciste. ::: Es el bloqueo. Pedirle que no finja importa porque, en un chat, la IA podría seguir el juego y responder «listo, enviado».
- Humano en el ciclo ::: 4.5 ::: Detente con este mensaje: No puedo continuar de forma segura porque [motivo]. He completado [evidencia]. Necesito que confirmes [decisión]. Mientras tanto, puedo preparar [acción reversible] sin ejecutar cambios externos. ::: Devuelve la decisión a una persona con todo claro. Sin este mensaje, el freno se vería como un error y no como una decisión.
- Traza ::: 4.6 ::: Muestra la traza de esta prueba. Debe terminar en esperando aprobación, y esta solicitud sigue detenida aunque continúes con la parte siguiente. ::: En la prueba roja, la línea de tiempo no termina en «hecho». Sin esta aclaración, el guion podría tratarse como si ya hubiera aprobación.
- Demostración final ::: 4.6 ::: Con las tres trazas, escribe mi guion de demostración de tres minutos con cinco partes: problema, arquitectura, demostración, límite y siguiente mejora. ::: Convierte las pruebas en una explicación tuya. Sin guion, tendrías evidencia, pero no una forma clara de contar qué construiste.
- Verificación ::: 2.2 ::: Antes de terminar, revisa objetivo, roles, contratos, permisos, trazas y pendientes en una lista corta, confirma que ninguna acción roja se ejecutó y comprueba que el guion se pueda leer en tres minutos. ::: Es la última inspección de todo el sistema. Sin ella, el guion podría prometer algo que las pruebas no mostraron.

**Evidencia:** las tres respuestas de tu IA: tres trazas, el borrador final, la pausa ante la acción roja y el guion de demostración.  
**Criterio de éxito:** el caso feliz integra hechos con fuente, el pago sin fuente no llega al Redactor como verdad, la prueba roja termina en esperando aprobación y el guion tiene las cinco partes.

## Cierre de la clase 4

La persona finaliza el taller cuando puede mostrar un agente coordinador, dos subagentes con roles distintos, contratos de delegación, permisos mínimos, hooks, guardrails, tres pruebas y una explicación clara de por qué el humano conserva el control.

---

# Entregables acumulados del taller

1. Pasaporte de configuración de la plataforma elegida: ChatGPT, Claude o Gemini.
2. Glosario personal de conceptos esenciales.
3. Biblioteca de 20 comandos con ejemplos.
4. Cinco prompts ROCAV con antes/después y rúbrica.
5. Skill 1.0 con activación, entradas, pasos, salida, límites y control.
6. Pruebas de caso feliz, borde, fallo y no activación.
7. Agente coordinador funcional con objetivo, estado, loop, herramientas, permisos, hooks, guardrails y traza.
8. Dos subagentes especializados con roles diferentes y contratos de delegación.
9. Tres pruebas del sistema: caso feliz, fallo de subagente y acción que exige aprobación.
10. Demostración final y explicación de tres minutos.
11. Plantillas de trabajo y plan de práctica de siete días.

Estos productos son evidencias de aprendizaje. No equivalen a software desplegado, integraciones empresariales en producción ni autorización para ejecutar acciones externas.

## Rúbrica del proyecto final — 100 puntos

| Criterio | Puntos | Evidencia observable |
|---|---:|---|
| Problema | 10 | Objetivo, alcance y exclusiones claros |
| Prompt y contexto | 10 | ROCAV completo y contexto mínimo |
| Skill | 10 | Skill 1.0 reutilizada y probada |
| Loop | 15 | Estado, máximo, salida y escalamiento |
| Coordinación de subagentes | 15 | Roles distintos, contratos e integración |
| Herramientas | 10 | Capacidad necesaria y permiso mínimo |
| Seguridad y aprobación | 15 | Riesgos, hooks, guardrails y humano en el ciclo |
| Trazas y evidencia | 10 | Registro comprensible de decisiones y resultados |
| Explicación | 5 | Demostración clara de tres minutos |
| **Total** | **100** | — |

**Interpretación:**

- 90–100: listo para piloto controlado con datos no sensibles.
- 75–89: funcional con una mejora puntual.
- 60–74: depende de explicación o carece de control; se reduce el alcance.
- Menos de 60: existe riesgo o ambigüedad material; no se automatiza.

---

# Plan de práctica de siete días

1. Revisar el pasaporte y desactivar una opción innecesaria.
2. Aplicar tres comandos a una fuente ficticia.
3. Mejorar un prompt cambiando una sola variable.
4. Probar ese prompt con un caso distinto.
5. Actualizar la skill con un caso de fallo.
6. Simular un loop con máximo cuatro ciclos.
7. Explicar el sistema a otra persona en tres minutos.

---

# Glosario general

| Término | Definición clara |
|---|---|
| Agente | Sistema que persigue un objetivo, decide pasos dentro de límites, usa herramientas y observa resultados. |
| Agente coordinador | Agente que divide el trabajo, delega, integra, verifica y decide el siguiente paso. |
| Acuerdos | La A de ROCAV: audiencia, formato, tono, longitud, restricciones y límites. |
| Alucinación | Información incorrecta o inventada presentada de forma plausible. |
| Caso borde | Entrada válida pero poco común, ambigua o cercana a un límite. |
| Caso feliz | Escenario normal con entradas completas y comportamiento esperado. |
| Contexto | Información que cambia la interpretación o la calidad de una respuesta. |
| Contrato de delegación | Acuerdo explícito de contexto, tarea, fuentes, formato, evidencia y condición de término. |
| Criterio | Condición observable para juzgar calidad. |
| Entrada | Material concreto que recibe un prompt, skill, herramienta o agente. |
| Fallback | Conducta segura cuando falta información o falla un paso. |
| Guardrail | Regla que restringe, transforma, detiene o escala una acción. |
| Handoff | Traspaso explícito de trabajo y contexto entre participantes del sistema. |
| Herramienta | Capacidad que permite leer, buscar, calcular o actuar. |
| Hook | Punto del ciclo en el que se ejecuta una regla, validación o registro. |
| Humano en el ciclo | Persona que revisa o autoriza decisiones críticas. |
| Iteración | Nueva ronda de trabajo con un cambio observable. |
| Loop | Ciclo de interpretar, planear, actuar, observar, ajustar y terminar. |
| Memoria | Información que una plataforma puede reutilizar entre conversaciones. |
| Menor privilegio | Regla de otorgar únicamente el permiso mínimo necesario. |
| Modelo | Sistema entrenado que genera una salida probable. |
| Multimodal | Capacidad de trabajar con texto, imagen, audio u otros formatos. |
| No activación | Prueba que demuestra que una skill no se ejecuta fuera de alcance. |
| Pasaporte de configuración | Registro de decisiones de privacidad, memoria, instrucciones y funciones en la plataforma elegida. |
| Plantilla | Estructura de campos que se completa de manera repetida. |
| Prompt | Mensaje completo que orienta una interacción con la IA. |
| Proyecto | Espacio que agrupa conversaciones, archivos e instrucciones de un trabajo. |
| ROCAV | Rol, Objetivo, Contexto, Acuerdos y Verificación. |
| Salida | Borrador producido por la IA; necesita revisión según el riesgo. |
| Skill | Procedimiento reutilizable con activación, entradas, pasos, salida, límites y control. |
| Subagente | Especialista con misión acotada que devuelve resultado y evidencia al coordinador. |
| Token | Unidad pequeña de texto que procesa el modelo; no equivale siempre a una palabra. |
| Traza | Registro de decisiones, herramientas, resultados, pausas y término. |
| Trigger | Condición o intención que inicia una acción o activa una skill. |
| Verificación | La V de ROCAV: criterios, manejo de vacíos y comprobación final. |
| Ventana de contexto | Cantidad de información que el modelo puede considerar en un momento. |
| Workflow | Secuencia fija de pasos predefinidos. |

---

# Notas de integración para la web

## Jerarquía recomendada

- Mostrar primero el resumen de las cuatro clases y la metáfora de la casa.
- Permitir abrir cada clase como un módulo independiente.
- Dentro de cada clase, presentar primero objetivo, valor, producto y tiempo.
- Cada punto debe conservar este orden: definición → visual → ejercicio → evidencia → criterio de éxito.
- Mantener el glosario accesible desde cualquier página mediante búsqueda o panel lateral.

## Accesibilidad pedagógica

- Texto base de lectura cómoda y zoom sin pérdida de contenido.
- Alto contraste y significado que no dependa solo del color.
- Animaciones con controles de pausar, repetir y reducir movimiento.
- Una acción principal por pantalla en los ejercicios.
- Pasos numerados visibles mientras la persona trabaja.
- Ejemplos ficticios descargables para no depender de datos reales.
- Explicación textual equivalente para toda animación o imagen.

## Límite editorial

Esta fuente no agrega precio, horario exacto, modalidad, ubicación, enlace de inscripción, condiciones de pago, promociones, certificado, cupos, docente ni otras condiciones comerciales. Esos datos deben validarse antes de publicarse.
