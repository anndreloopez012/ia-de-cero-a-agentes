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

**Propósito:** descubrir la información que el modelo está obligado a suponer.  
**Duración:** 25 minutos.

**Petición base:** Mynor, maestro de un colegio en Chimaltenango, escribe: “Hazme una presentación sobre inteligencia artificial”.

**Pega en la IA:** Hazme una presentación sobre inteligencia artificial

**Pasos:**

1. Envía la petición sin modificarla y guarda la salida.
2. Señala todas las decisiones que la IA tomó sin permiso: audiencia, propósito, duración, tono, nivel y formato.
3. Marca qué partes sí estaban explícitas y cuáles fueron supuestas.
4. Escribe cinco preguntas que reducirían la ambigüedad.
5. Redacta una segunda petición incluyendo entrada, restricción y criterio, sin usar todavía ROCAV completo.
6. Compara ambas salidas en una tabla de “controlado” y “supuesto”.

**Ejemplo de base:** “¿La presentación es para los padres de familia o para los alumnos de básicos? ¿Debe enseñar, convencer o informar? ¿Cuántas diapositivas caben en los 20 minutos de la reunión? ¿Qué fuentes pueden usarse? ¿Cómo sabrá Mynor si la entendieron?”.

**Evidencia:** salida original, lista de cinco supuestos, cinco preguntas y versión revisada.  
**Criterio de éxito:** la persona identifica que el problema no era “la IA”, sino decisiones no expresadas que el sistema tuvo que completar.

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

**Propósito:** construir un prompt completo a partir de un objetivo cotidiano.  
**Duración:** 25 minutos.

**Caso base ficticio:** Byron viaja cada día en bus de Villa Nueva a la capital y quiere aprovechar 30 minutos del trayecto, durante siete días, para aprender a usar una hoja de cálculo desde su celular.

**Pasos:**

1. Escribe el resultado esperado en una oración observable.
2. Completa una tarjeta por letra de ROCAV.
3. Revisa el contexto y elimina cualquier dato que no cambie la respuesta.
4. En “Acuerdos”, fija audiencia, formato, tono, longitud y límites.
5. En “Verificación”, incluye al menos un criterio y una conducta ante datos faltantes.
6. Une las cinco tarjetas en un solo prompt natural.
7. Pruébalo y etiqueta en la salida dónde se cumplió cada acuerdo.

**Ejemplo de base:** `R` tutor paciente; `O` plan de siete días para Byron; `C` principiante, 30 minutos diarios en el bus, solo con celular; `A` tabla con día, objetivo, práctica y señal de avance; `V` no asumir herramientas pagadas ni computadora y advertir si una actividad supera 30 minutos.

**Evidencia:** tarjetas ROCAV, prompt completo y salida etiquetada.  
**Criterio de éxito:** las cinco partes cumplen una función real, la salida puede evaluarse y los vacíos no son rellenados con datos inventados.

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

**Propósito:** evitar que la IA complete información ausente con suposiciones.  
**Duración:** 20 minutos.

**Insumo ficticio:** la ficha del taller “Vende más por WhatsApp” que organiza la municipalidad de Antigua Guatemala para emprendedores; incluye nombre, tema y fecha (sábado 14 de marzo), pero no incluye lugar ni precio.

**Pega en la IA:** FICHA DEL TALLER
Nombre: Vende más por WhatsApp
Organiza: Municipalidad de Antigua Guatemala
Tema: cómo usar el catálogo, las respuestas rápidas y las etiquetas de WhatsApp Business para emprendedores
Fecha: sábado 14 de marzo

**Pasos:**

1. Redacta un prompt que solo permita utilizar la ficha entregada.
2. Pide separar hecho, inferencia y recomendación.
3. Indica que todo dato ausente se marque como `no disponible`.
4. Solicita una pregunta de seguimiento por cada vacío material.
5. Ejecuta el prompt y revisa si aparecieron lugar o precio inventados, como “salón municipal” o “Q50”.
6. Si aparece una invención, agrega una restricción concreta y vuelve a probar.

**Ejemplo de base:** “Usa exclusivamente la ficha. No uses conocimiento externo. Separa hechos, inferencias y recomendaciones. Si el lugar o el precio no aparecen, escribe ‘no disponible’ y formula una pregunta; no supongas que es en el salón municipal ni que es gratis”.

**Evidencia:** prompt, salida, lista de vacíos y corrección si fue necesaria.  
**Criterio de éxito:** ningún dato ausente aparece como hecho y cada vacío material produce una marca o pregunta.

## Punto 4. Loop de mejora: cambiar una variable y aprender

### Explicación sencilla

El loop de mejora es:

**definir resultado → escribir versión 1 → probar → detectar una falla → modificar una sola variable → probar de nuevo → documentar**.

Se termina cuando la salida cumple la rúbrica o cuando falta información que exige una pregunta. Cambiar rol, contexto, formato y criterios al mismo tiempo impide saber qué produjo la mejora.

**Idea visual para la web:** dos planos transparentes superpuestos. Solo una pieza cambia de color entre la versión 0.1 y la 0.2.

### Ejercicio individual 4 — Comparación A/B controlada

**Propósito:** demostrar qué ajuste produjo una mejora observable.  
**Duración:** 25 minutos.

**Caso base:** el prompt ROCAV creado en el ejercicio 2.

**Pasos:**

1. Nombra la primera versión `0.1` y ejecútala.
2. Evalúa la salida y elige una sola falla: claridad, formato, longitud, exactitud o manejo de vacíos.
3. Formula una hipótesis: “Si cambio ___, entonces mejorará ___”.
4. Modifica únicamente una sección de ROCAV.
5. Nombra la nueva versión `0.2` y ejecútala con la misma entrada.
6. Compara ambas salidas con el mismo criterio.
7. Conserva el cambio si mejora; si no, revierte y documenta lo aprendido.

**Ejemplo de base:** hipótesis: “Si en Acuerdos pido una acción por fila y un máximo de 30 minutos por trayecto en bus, el plan de Byron será más ejecutable”. Todo lo demás permanece igual.

**Evidencia:** versiones 0.1 y 0.2, hipótesis, comparación y decisión.  
**Criterio de éxito:** se puede señalar exactamente qué cambió, qué efecto tuvo y por qué se conserva o se descarta.

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

**Propósito:** comprobar que el prompt funciona más allá del ejemplo de su autor.  
**Duración:** 15 minutos.

**Pasos:**

1. Selecciona uno de tus prompts finales.
2. Reemplaza la entrada original por un caso equivalente pero distinto.
3. Ejecuta sin explicación oral adicional.
4. Evalúa la salida con los siete lentes.
5. Marca el criterio más débil y añade una última mejora solo si es necesaria.
6. Escribe una instrucción de uso de tres líneas para otra persona.

**Ejemplo de base:** el prompt creado para que Byron aprenda hoja de cálculo en siete días se prueba con Heidy, que quiere aprender a tomar mejores fotos de sus productos para vender por WhatsApp, manteniendo el mismo tiempo y formato.

**Evidencia:** entrada nueva, salida, rúbrica y breve instrucción de uso.  
**Criterio de éxito:** otra persona puede reconocer las piezas, usar el prompt con una entrada equivalente y evaluar el resultado con los mismos criterios.

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

**Propósito:** evitar complejidad innecesaria.  
**Duración:** 20 minutos.

**Pasos:**

1. Escribe una tarea que repites al menos dos veces al mes, sin usar palabras vagas como “bien” o “profesional”.
2. Divide la tarea en entradas, pasos y salida.
3. Clasifica si se resuelve con prompt, plantilla, proyecto, herramienta, workflow, skill o agente.
4. Justifica por qué el recurso anterior sería insuficiente y por qué el siguiente sería excesivo.
5. Redacta una frase: “Necesito una skill porque ___ se repite y debe conservar ___”.

**Ejemplo de base:** convertir las notas de la reunión mensual del comité de la iglesia en acuerdos y tareas repetibles necesita una skill; no requiere un agente si no debe decidir acciones ni usar herramientas por varios ciclos.

**Evidencia:** descripción de tarea, clasificación y justificación.  
**Criterio de éxito:** la persona elige el recurso menos complejo que resuelve la necesidad y no utiliza “agente” como sinónimo de cualquier automatización.

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

**Propósito:** convertir un prompt útil en un procedimiento completo.  
**Duración:** 25 minutos.

**Caso base:** skill `Convertir notas en plan de acción`.

**Pasos:**

1. Nombra la skill con verbo y objeto.
2. Escribe una descripción que incluya tres peticiones que deben activarla y dos que no.
3. Define entradas obligatorias y opcionales; marca cualquier entrada sensible que deba excluirse.
4. Redacta entre cinco y ocho pasos. Incluye al menos una decisión y una pregunta.
5. Diseña la salida con campos observables.
6. Enumera recursos permitidos. Si no necesita una herramienta, indícalo.
7. Declara límites y una condición de pausa.
8. Cierra con una lista de control de máximo seis ítems.

**Ejemplo de salida:** resumen de contexto, tabla `tarea | responsable | fecha | fuente` (por ejemplo `Cotizar el sonido para la kermés | Josué | 15 de agosto | acta del comité`), acuerdos, vacíos y siguiente revisión. Si responsable o fecha no aparecen, usar `pendiente de confirmar`.

**Evidencia:** ficha con las ocho partes completas.  
**Criterio de éxito:** una persona distinta puede entender cuándo usarla, qué entregar y cuándo detenerse sin explicación oral del autor.

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

**Propósito:** demostrar que la skill se activa por intención y se abstiene cuando corresponde.  
**Duración:** 25 minutos.

**Pasos:**

1. Escribe tres formas distintas de pedir la tarea correcta.
2. Escribe dos peticiones muy parecidas que deben quedar fuera de alcance.
3. Diseña un caso con fuente incompleta.
4. Diseña un caso con información sensible que debe retirarse.
5. Define el mensaje de fallback para cada problema.
6. Prueba los ocho casos y registra `activar`, `no activar`, `preguntar` o `detener`.
7. Ajusta la descripción si una decisión fue incorrecta.

**Ejemplo de base:** “Convierte en tareas estas notas del comité del barrio para la Feria de Jocotenango” activa; “transcribe el audio de la reunión” no activa; “crea las tareas de la feria” sin notas pregunta por la fuente; notas que incluyen la contraseña de la cuenta bancaria del comité detienen y solicitan una versión segura.

**Evidencia:** matriz de casos, resultado esperado, resultado real y corrección.  
**Criterio de éxito:** activa los casos pertinentes, rechaza los negativos y nunca inventa la fuente que falta.

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

**Propósito:** adaptar la ficha a la plataforma disponible manteniendo una versión independiente.  
**Duración:** 20 minutos.

**Pasos:**

1. Guarda la ficha 0.1 en un documento neutral.
2. Identifica la función disponible en tu cuenta: skill nativa, proyecto, Gem u otra personalización equivalente.
3. Copia únicamente las instrucciones y recursos necesarios.
4. No conectes servicios externos ni cargues datos sensibles para esta práctica.
5. Ejecuta una petición positiva y revisa que siga el procedimiento.
6. Registra qué parte depende de la plataforma y qué parte sigue siendo portable.
7. Si la función no está disponible, implementa el equivalente con instrucciones de proyecto y documenta la diferencia.

**Ejemplo de base:** la ficha `Convertir notas en plan de acción` permanece como documento neutral; en un proyecto se agregan las instrucciones y una plantilla vacía, no actas reales del comité de la iglesia ni notas reales de una empresa.

**Evidencia:** enlace o captura de implementación y ficha portable intacta.  
**Criterio de éxito:** el procedimiento produce el mismo tipo de salida y puede trasladarse a otra plataforma sin reconstruirse desde cero.

## Punto 5. Probar, corregir y versionar

### Cuatro pruebas mínimas

1. **Caso feliz:** entrada completa y normal.
2. **Caso borde:** entrada válida, pero poco común o ambigua.
3. **Fallo:** falta información, un recurso falla o aparece contenido prohibido.
4. **No activación:** petición parecida pero fuera de alcance.

La versión cambia cuando se modifica el comportamiento. La evidencia incluye entrada, resultado esperado, resultado real, fallo encontrado y ajuste.

**Idea visual para la web:** banco de pruebas con cuatro carriles; una herramienta solo recibe la etiqueta 1.0 después de pasar los cuatro.

### Ejercicio individual 5 — Llevar la skill a versión 1.0

**Propósito:** comprobar que funciona en casos nuevos y falla de forma segura.  
**Duración:** 20 minutos.

**Pasos:**

1. Diseña un caso feliz distinto al usado durante la construcción, como las notas de la junta de padres del colegio sobre el desfile del 15 de septiembre.
2. Diseña un borde: notas sin fechas o con tareas duplicadas.
3. Diseña un fallo: fuente vacía o archivo ilegible.
4. Diseña un caso de no activación.
5. Antes de ejecutar, escribe el comportamiento esperado.
6. Ejecuta y registra el comportamiento real.
7. Corrige solo la causa del fallo; no cambies todo el procedimiento.
8. Repite la prueba afectada y una prueba anterior para evitar regresiones.
9. Nombra la versión estable `Skill 1.0` y escribe qué cambió desde 0.1.

**Ejemplo de base:** si las notas de la cooperativa dicen “Mynor lleva las sillas” sin fecha, la skill debe marcar `pendiente de confirmar`, no asignar “antes de Semana Santa” ni otra fecha razonable por su cuenta.

**Evidencia:** tabla de cuatro pruebas, corrección, repetición y nota de versión.  
**Criterio de éxito:** la skill se activa correctamente, no se activa fuera de alcance, produce una salida verificable y maneja el fallo sin inventar datos.

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

**Propósito:** decidir si una tarea realmente necesita un agente.  
**Duración:** 15 minutos.

**Casos ficticios:** renombrar las fotos de los productos que se venden por WhatsApp con la regla fija `producto-precio`; clasificar los mensajes que llegan al comedor de doña Marta (pedidos, quejas o reservas) y decidir a quién pasarlos; enviar el mismo recordatorio de la cuota de la cooperativa cada viernes; preparar una respuesta a un vecino sobre los requisitos de un trámite en la municipalidad, que requiere buscar hechos autorizados y luego redactar.

**Pasos:**

1. Clasifica cada caso como workflow, agente o “falta información”.
2. Para los agentes, subraya qué decisión cambia según el estado.
3. Para los workflows, dibuja la secuencia fija.
4. Elige un caso y explica cuál sería el riesgo de agregar autonomía innecesaria.
5. Define un caso propio de bajo riesgo y justifica la elección.

**Ejemplo de base:** renombrar las fotos por una regla estable es workflow; decidir si la consulta del vecino necesita investigación antes de redactarse puede justificar un agente.

**Evidencia:** clasificación de cuatro casos y justificación propia.  
**Criterio de éxito:** la persona no confunde “varios pasos” con agente y puede señalar una decisión real basada en estado.

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

**Propósito:** diseñar autonomía limitada y explicable.  
**Duración:** 20 minutos.

**Caso base:** convertir las notas de la reunión de la tortillería de don Carlos en un plan de trabajo para la semana de Semana Santa, usando la Skill 1.0 de la clase anterior.

**Pasos:**

1. Define objetivo y criterio observable de salida.
2. Escribe qué información forma parte del estado.
3. Diseña los seis pasos del loop.
4. Fija un máximo de cuatro ciclos.
5. Agrega tres causas de pausa y dos causas de finalización.
6. Simula un ciclo correcto y uno donde falta información.
7. Redacta el mensaje de pausa que vería la persona.

**Plantilla de pausa:** “No puedo continuar de forma segura porque `[motivo]`. He completado `[evidencia]`. Necesito que confirmes `[decisión]`. Mientras tanto, puedo preparar `[acción reversible]` sin ejecutar cambios externos”.

**Evidencia:** diagrama del loop, límites y dos simulaciones.  
**Criterio de éxito:** el ciclo tiene máximo explícito, conserva estado y termina o escala sin repetirse indefinidamente.

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

**Propósito:** construir una arquitectura con funciones no duplicadas.  
**Duración:** 25 minutos.

**Pasos:**

1. Elige una tarea de bajo riesgo: plan de estudio, agenda, clasificación ficticia, borrador de comunicación, organización de notas o checklist.
2. Define el resultado final y qué no forma parte del alcance.
3. Escribe la misión del coordinador en una oración.
4. Divide el trabajo en dos especialidades realmente diferentes.
5. Define para cada subagente: entrada, tarea, salida, prohibiciones y condición de término.
6. Dibuja qué información pasa a cada especialista y qué información no necesita recibir.
7. Decide cómo el coordinador verificará y combinará ambos resultados.
8. Agrega un punto de revisión humana antes de cualquier acción externa.

**Ejemplo de base:** Investigador devuelve una tabla de hechos y fuentes sobre los requisitos ficticios de la licencia municipal; Redactor recibe solo esa tabla y produce un borrador de respuesta para doña Marta. No busca nuevos hechos ni envía el mensaje.

**Evidencia:** diagrama de arquitectura y fichas de tres roles.  
**Criterio de éxito:** los dos subagentes aportan capacidades diferentes, reciben contexto mínimo y el coordinador conserva la responsabilidad de integrar y verificar.

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

**Propósito:** impedir delegaciones vagas o ilimitadas.  
**Duración:** 20 minutos.

**Pasos:**

1. Completa los seis campos del contrato para el subagente 1.
2. Repite para el subagente 2 sin copiar la misma misión.
3. Incluye un ejemplo de salida válida y uno de salida insuficiente.
4. Define qué duda obliga al subagente a devolver el control.
5. Simula el handoff inicial y el retorno al coordinador.
6. Revisa si se compartió información que el especialista no necesitaba.

**Ejemplo de base:** el Investigador puede usar solo dos fuentes entregadas (la hoja ficticia de requisitos de la municipalidad y el aviso ficticio del centro de salud), devuelve `afirmación | evidencia | fuente | duda`; si una dice que el pago es de Q150 y la otra de Q200, no decide cuál es correcta y escala.

**Evidencia:** dos contratos completos y dos registros de handoff.  
**Criterio de éxito:** cada subagente sabe cuándo terminar, qué no puede hacer y qué evidencia debe devolver.

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

**Propósito:** limitar las acciones del sistema antes de probarlo.  
**Duración:** 20 minutos.

**Pasos:**

1. Enumera todas las herramientas o capacidades que el sistema podría usar.
2. Para cada una marca si requiere lectura, preparación o escritura/ejecución.
3. Clasifica tres acciones como verde, amarillo o rojo.
4. Otorga solo el permiso mínimo necesario.
5. Asigna un hook antes y después de la herramienta principal.
6. Escribe un guardrail para datos sensibles y otro para acciones externas.
7. Indica dónde interviene una persona y qué debe aprobar.
8. Simula una solicitud roja y comprueba que el sistema se detenga.

**Ejemplo de base:** leer la hoja ficticia de requisitos es verde; preparar el borrador para doña Marta es verde o amarillo según el contexto; enviarlo por WhatsApp, pagar la tasa de Q150, cambiar permisos o usar su DPI u otros datos personales es rojo en este prototipo y debe escalar.

**Evidencia:** matriz de riesgo, permisos, hooks, guardrails y mensaje de pausa.  
**Criterio de éxito:** ninguna acción roja se ejecuta, cada herramienta tiene propósito y el registro muestra por qué continuó o se detuvo.

## Punto 6. Trazas, pruebas y demostración final

### Explicación sencilla

Una **traza** es el registro comprensible de lo que ocurrió: objetivo, decisión, delegación, herramienta, resultado, verificación, pausa y término. No debe exponer secretos ni guardar más datos de los necesarios.

El sistema se prueba con tres escenarios:

1. **Caso feliz:** ambos subagentes cumplen y el coordinador integra.
2. **Fallo de subagente:** un especialista devuelve una salida incompleta o una herramienta falla.
3. **Acción sensible:** la tarea intenta cruzar un límite y exige aprobación.

**Idea visual para la web:** línea de tiempo que permite abrir cada decisión. En el escenario rojo la línea termina en “esperando aprobación”.

### Ejercicio individual 6 — Sistema 1.0 y demostración

**Propósito:** demostrar que el sistema avanza, corrige y se detiene con evidencia.  
**Duración en clase:** 10 minutos de ejecución final; la preparación se integra en los ejercicios anteriores.

**Pasos:**

1. Ejecuta el caso feliz y guarda la traza completa.
2. Provoca un fallo controlado en uno de los subagentes.
3. Comprueba que el coordinador no integre información defectuosa como si fuera válida.
4. Introduce una acción roja, por ejemplo “envía el mensaje a doña Marta por WhatsApp” o “usa esta lista de comerciantes del mercado con sus teléfonos”.
5. Comprueba que el sistema se detenga y solicite aprobación.
6. Revisa objetivo, roles, contratos, permisos, trazas y pendientes.
7. Prepara una explicación de tres minutos: problema, arquitectura, demostración, límite y siguiente mejora.

**Ejemplo de base:** si el Investigador no devuelve la fuente del pago de Q150, el coordinador marca el hecho como no verificado y solicita corrección; no lo entrega al Redactor como verdad.

**Evidencia:** tres trazas, resultado final, pausa ante acción roja y guion de demostración.  
**Criterio de éxito:** el sistema funciona dentro de permisos, integra resultados verificables, registra decisiones, maneja el fallo y se detiene ante riesgo o información faltante.

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
