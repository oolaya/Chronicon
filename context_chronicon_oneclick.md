# Contexto OneClick — Proyecto escolar: Chronicon

## 1. Objetivo

Construir un sitio web frontend, profesional, visualmente atractivo y responsive orientado a jóvenes y adultos entre 14 y 36 años.

El proyecto será un **foro/portal informativo de historia y patrimonio** que permita:

- Descubrir lugares históricos.
- Leer contenido breve, claro y atractivo sobre cada lugar.
- Explorar datos curiosos, contexto histórico y recomendaciones de visita.
- Consultar una sección tipo foro/comunidad con comentarios simulados.
- Iniciar una **reserva simulada** para visitar un lugar histórico.
- Confirmar la reserva dentro de la misma experiencia web.

El proyecto es exclusivamente académico y debe ajustarse a los requisitos de las actividades del curso.

**No construir backend. No usar APIs. No crear base de datos. No realizar autenticación real.**

Toda la información debe existir en el frontend, usando arreglos/objetos JavaScript y, cuando se requiera conservar temporalmente una interacción, `sessionStorage` o estado en memoria del navegador.

---

## 2. Nombre sugerido del proyecto

**Chronicon**

### Eslogan

**Descubre el pasado. Vive el lugar.**

### Concepto

Chronicon es una experiencia digital para descubrir sitios históricos de Colombia de una manera moderna, visual e interactiva. El usuario puede conocer la historia de cada lugar, explorar recomendaciones de la comunidad y realizar una reserva simulada para planear una visita.

---

## 3. Público objetivo

Personas entre **14 y 36 años**, especialmente:

- Estudiantes.
- Jóvenes interesados en cultura e historia.
- Familias y viajeros jóvenes.
- Personas que buscan planes turísticos con componente cultural.
- Usuarios acostumbrados a experiencias visuales similares a redes sociales, plataformas de viajes y aplicaciones móviles.

La experiencia debe sentirse actual, dinámica, sencilla y visual.

---

## 4. Lineamientos obligatorios del trabajo académico

El desarrollo debe evidenciar claramente los temas solicitados por el profesor.

### 4.1. Estructura HTML básica

Debe existir un archivo principal:

`index.html`

El documento debe incluir:

- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<title>Chronicon</title>`
- Enlace al archivo CSS.
- Enlace al archivo JavaScript cuando aplique.

Dentro de `<body>` debe existir, al menos:

- Un título principal `<h1>` con el nombre del sitio.
- Un párrafo `<p>` explicando brevemente el propósito del proyecto.
- Una línea horizontal `<hr>`.
- Un segundo encabezado `<h2>` con el nombre de la estudiante como desarrolladora.

No eliminar estos elementos aunque después se integren dentro del diseño profesional.

---

## 5. Etiquetas semánticas obligatorias

La página principal debe utilizar correctamente las siguientes etiquetas HTML5:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

No usarlas solamente para cumplir el requisito: cada una debe representar contenido coherente.

### Uso sugerido

- `header`: hero principal e identidad de Chronicon.
- `nav`: navegación principal.
- `main`: contenido central.
- `section`: bloques de lugares, comunidad y reservas.
- `article`: cada lugar histórico o publicación.
- `aside`: datos curiosos, consejos de viaje o recomendaciones.
- `footer`: información académica, desarrolladora y enlaces.

### Pie de página obligatorio

El `<footer>` debe incluir de forma visible el texto exacto:

**Hecho por María José Olaya Suárez**

Puede acompañarse de una frase como `Proyecto académico · Chronicon`, pero el nombre completo anterior debe conservarse exactamente.

---

## 6. Stack tecnológico

Usar únicamente frontend.

### Tecnologías

- HTML5.
- CSS3.
- JavaScript Vanilla.
- Bootstrap 5 por CDN como framework de UI/UX.
- Bootstrap Icons por CDN para iconografía.
- Google Fonts únicamente si es necesario y mediante CDN.

### Restricciones

- No Angular.
- No React.
- No Vue.
- No Node.js.
- No .NET.
- No PHP.
- No backend.
- No bases de datos.
- No autenticación real.
- No consumo de APIs externas.
- No compiladores ni herramientas que dificulten que el profesor abra el proyecto.

El proyecto debe poder ejecutarse abriendo `index.html` o usando la extensión Live Server de Visual Studio Code.

---

## 7. Estructura mínima del proyecto

```text
rutas-de-historia/
│
├── index.html
├── style.css
├── script.js
│
├── pages/
│   ├── lugares.html
│   ├── detalle.html
│   ├── comunidad.html
│   └── reserva.html
│
└── assets/
    └── images/
```

Si OneClick considera que una estructura todavía más simple es conveniente para el nivel académico, puede mantener varias secciones dentro de `index.html`, pero debe conservar una organización clara.

---

## 8. Funcionalidades

### 8.1. Inicio

Objetivo: presentar el sitio y permitir descubrir rápidamente contenido.

Debe incluir:

- Navbar responsive.
- Logo o identidad visual tipográfica.
- Hero de alto impacto visual.
- Título principal.
- Texto de introducción.
- Botones:
  - `Explorar lugares`
  - `Planear visita`
- Una imagen destacada relacionada con patrimonio/historia.
- Una sección de lugares recomendados.
- Una sección "¿Por qué visitar lugares históricos?".
- Un bloque tipo dato curioso.
- Footer.

---

### 8.2. Explorar lugares

Mostrar mínimo **6 lugares históricos**.

Usar contenido ficticio o educativo seguro y fácilmente editable.

Ejemplos de lugares que pueden usarse:

- Ciudad Amurallada de Cartagena.
- Castillo San Felipe de Barajas.
- Museo del Oro.
- Villa de Leyva.
- Catedral de Sal de Zipaquirá.
- Quinta de Bolívar.

Cada lugar debe mostrarse en una tarjeta con:

- Imagen.
- Nombre.
- Ciudad.
- Categoría.
- Breve descripción.
- Etiqueta o badge.
- Botón `Conocer historia`.
- Botón `Reservar visita`.

Las tarjetas deben organizarse con **Flexbox** y ser responsive.

---

### 8.3. Detalle de un lugar

Debe incluir:

- Imagen principal.
- Nombre del lugar.
- Ubicación.
- Breve introducción.
- Historia.
- Línea de tiempo resumida.
- Datos curiosos.
- Recomendación para visitantes.
- Duración aproximada de la visita.
- Botón destacado `Reservar visita`.
- Un `aside` con información complementaria.

No es necesario cargar el contenido desde servidor.

Puede manejarse con información estática o mediante parámetros simples en JavaScript.

---

### 8.4. Comunidad / Foro informativo

Crear una experiencia visual tipo foro, pero **sin backend**.

Debe incluir varias publicaciones simuladas como:

- "¿Qué fue lo que más te sorprendió del Castillo San Felipe?"
- "3 datos curiosos que aprendí en el Museo del Oro".
- "¿Qué lugar histórico recomendarías para una salida escolar?"

Cada publicación puede mostrar:

- Avatar genérico.
- Nombre ficticio.
- Fecha ficticia.
- Título.
- Mensaje.
- Número de reacciones.
- Botón `Me interesa`.
- Botón `Comentar`.

Los comentarios que escriba el usuario durante la sesión pueden agregarse mediante JavaScript al DOM.

No guardar datos en servidores.

---

### 8.5. Reserva simulada

Crear una página o sección dedicada exclusivamente a la reserva.

Campos:

- Lugar histórico.
- Fecha de visita.
- Número de visitantes.
- Nombre.
- Correo electrónico.
- Tipo de visita:
  - Individual.
  - Familiar.
  - Escolar.

### Comportamiento

- Validación básica en JavaScript.
- Mensajes claros por campo.
- Al enviar, mostrar una confirmación visual.
- Generar un código ficticio de reserva, por ejemplo: `RH-4821`.
- Guardar temporalmente la reserva en `sessionStorage` o en memoria.
- Permitir botón `Volver al inicio`.

Aclarar visualmente:

**"Reserva demostrativa — no genera pagos ni una reserva real."**

No implementar pasarela de pago.

---

## 9. Navegación

Menú principal:

- Inicio
- Lugares
- Comunidad
- Reservar
- Acerca del proyecto

En dispositivos móviles utilizar menú hamburguesa de Bootstrap.

El menú debe permanecer limpio, accesible y fácil de entender.

---

## 10. Diseño UI/UX

La experiencia debe sentirse juvenil, cultural y moderna.

### Dirección visual

Mezclar:

- Estética editorial.
- Fotografía histórica/turística.
- Tarjetas modernas.
- Jerarquía tipográfica fuerte.
- Secciones amplias.
- Bordes redondeados.
- Sombras suaves.
- Animaciones discretas.

### Paleta sugerida

- Azul noche: `#14213D`
- Dorado cálido: `#E9B949`
- Terracota: `#C96A4A`
- Crema: `#F7F3EA`
- Blanco: `#FFFFFF`
- Gris texto: `#4B5563`

### Tipografía

Puede utilizarse una combinación como:

- Títulos: `Playfair Display` o similar.
- Interfaz y textos: `Inter`, `Poppins` o similar.

No usar más de dos familias tipográficas.

---

## 11. Requisitos CSS obligatorios del profesor

El archivo `style.css` debe evidenciar de forma clara el uso de:

- `background-color`
- `color`
- `font-family`
- `font-size`
- `margin`
- `padding`
- `border`
- `border-radius`
- `box-shadow`
- Espaciado entre secciones.

### Flexbox obligatorio

Debe existir al menos una sección principal que utilice:

```css
display: flex;
justify-content: ...;
align-items: ...;
flex-wrap: wrap;
gap: ...;
```

Esto debe usarse de forma real, por ejemplo en:

- Tarjetas de lugares.
- Barra de navegación.
- Bloques de contenido.
- Footer.

Aunque Bootstrap utilice Flexbox internamente, también debe existir CSS propio del proyecto utilizando explícitamente estas propiedades para que el aprendizaje sea evidente.

---

## 12. Interacciones y efectos obligatorios

Agregar transiciones a:

- Botones.
- Tarjetas.
- Imágenes.
- Enlaces.

Ejemplo conceptual:

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

En hover:

- Tarjetas pueden elevarse ligeramente.
- Imágenes pueden hacer un pequeño zoom.
- Botones pueden cambiar de tono.

Utilizar también, cuando tenga sentido:

- `position: relative`
- `position: absolute`
- `overflow: hidden`

Ejemplo: una etiqueta flotante sobre la imagen de una tarjeta.

No exagerar animaciones.

---

## 13. Responsive Design

La página debe funcionar correctamente en:

- Celulares.
- Tablets.
- Portátiles.
- Monitores de escritorio.

Puntos mínimos a verificar:

- Menú hamburguesa en móvil.
- Tarjetas en una columna en pantallas pequeñas.
- Dos columnas en tablets cuando haya espacio.
- Tres columnas o más en escritorio.
- Imágenes fluidas.
- Textos sin desbordamiento.
- Botones fáciles de tocar.
- Márgenes adecuados.
- No debe aparecer scroll horizontal.

Usar:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Además de Bootstrap, crear al menos un `@media` query propio para evidenciar responsive design aprendido en clase.

---

## 14. Accesibilidad básica

- Todas las imágenes deben tener `alt`.
- Contraste suficiente.
- Formularios con `<label>`.
- Botones con texto comprensible.
- Navegación por teclado visible.
- No depender exclusivamente del color.
- Usar encabezados con jerarquía lógica.

---

## 15. Datos en memoria

Crear en `script.js` arreglos como:

```javascript
const lugares = [];
const publicaciones = [];
const comentarios = [];
```

La aplicación debe renderizar o manipular información desde estos objetos cuando sea útil.

Puede utilizarse `sessionStorage` exclusivamente para:

- Reserva actual.
- Comentarios agregados durante la sesión.
- Lugar seleccionado temporalmente.

No usar `localStorage` salvo que sea estrictamente necesario.

No almacenar datos sensibles.

---

## 16. Contenido inicial sugerido

### Hero

**Título:**  
Historias que no solo se leen, se visitan.

**Texto:**  
Descubre lugares que marcaron nuestra historia, conoce sus secretos y planea tu próxima visita.

**CTA principal:**  
Explorar lugares

**CTA secundario:**  
Reservar una visita

---

### Introducción académica

Debe existir un texto breve como:

"Chronicon es un sitio web informativo creado para acercar a estudiantes, jóvenes y viajeros a lugares de valor histórico mediante contenido visual, datos curiosos y una experiencia de reserva demostrativa."

---

### Datos curiosos

Agregar pequeños bloques tipo:

- `+400 años de historia`
- `6 lugares para descubrir`
- `Una experiencia educativa y cultural`

Son elementos visuales, no estadísticas oficiales.

---

## 17. Sección "Acerca del proyecto"

Debe explicar claramente que:

- Es un proyecto académico.
- Busca promover el interés por la historia y el patrimonio.
- La función de reservas es demostrativa.
- No representa a los lugares turísticos mostrados.

Incluir:

`Hecho por María José Olaya Suárez`

Este texto debe aparecer de forma visible en el pie de página (`footer`) y no debe reemplazarse por otro nombre.

---

## 18. Uso de imágenes

Las imágenes deben reforzar la identidad histórica y turística.

Preferencias:

- Arquitectura colonial.
- Museos.
- Plazas.
- Fortificaciones.
- Patrimonio colombiano.
- Jóvenes explorando espacios culturales.

Evitar imágenes irrelevantes.

Si OneClick no puede descargar imágenes, utilizar URLs remotas confiables o placeholders elegantes y dejar comentarios claros para reemplazarlas.

No incrustar imágenes gigantes en base64.

---

## 19. Criterios de aceptación académicos

El proyecto se considera correcto si:

1. Existe `index.html`.
2. El `<title>` está personalizado.
3. Se utiliza `<h1>`.
4. Se utiliza `<p>`.
5. Se utiliza `<hr>`.
6. Se utiliza `<h2>` para la desarrolladora.
7. Existen `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
8. Existe contenido relacionado con el proyecto en cada etiqueta semántica.
9. El diseño utiliza color de fondo.
10. Existen colores personalizados para títulos y textos.
11. Se utiliza tipografía definida.
12. Se utilizan márgenes.
13. Se utiliza padding.
14. Se utilizan bordes.
15. Se utilizan bordes redondeados.
16. Se utilizan sombras.
17. Existe espaciado consistente entre secciones.
18. Se usa Flexbox explícitamente.
19. Se usan `justify-content`.
20. Se usa `align-items`.
21. Se usa `flex-wrap`.
22. Se usa `gap`.
23. Existen transiciones.
24. Existen estados hover.
25. Se utiliza `position` u `overflow` en algún componente útil.
26. Existe una imagen representativa.
27. El sitio es responsive.
28. La navegación funciona.
29. El formulario de reserva funciona de manera simulada.
30. No existe backend.
31. El proyecto puede ejecutarse localmente.
32. El resultado final se percibe organizado, coherente y profesional.

---

## 20. Reglas para OneClick

### Antes de construir

1. Revisar completamente este contexto.
2. No modificar archivos existentes de otros proyectos.
3. Si la carpeta está vacía, crear únicamente la estructura necesaria.
4. Explicar brevemente qué archivos se van a generar.
5. Mantener el alcance escolar: profesional visualmente, pero técnicamente comprensible para una estudiante.

### Durante la construcción

- Mantener HTML legible.
- Usar nombres de clases descriptivos.
- Separar HTML, CSS y JavaScript.
- Agregar comentarios breves solamente donde ayuden al aprendizaje.
- Evitar código innecesariamente complejo.
- No agregar dependencias que requieran instalación.
- No introducir backend.
- No agregar login.
- No agregar pagos.
- No agregar panel administrativo.
- No convertir el proyecto en SPA compleja.
- Priorizar claridad y funcionamiento.

### Validación

Realizar solamente validación funcional manual:

- Abrir `index.html`.
- Verificar navegación.
- Verificar responsive.
- Verificar botones.
- Verificar formulario.
- Verificar que la reserva genere confirmación.
- Verificar que comentarios simulados se agreguen durante la sesión.
- Verificar que no existan errores visibles en consola.

---

## 21. Resultado esperado

El entregable debe sentirse como una mini plataforma turística-cultural moderna, no como un ejercicio visual básico.

Debe ser suficientemente llamativo para una audiencia de 14 a 36 años, pero continuar demostrando con claridad los conceptos vistos en clase:

- HTML semántico.
- CSS.
- Flexbox.
- Responsive Design.
- Hover.
- Transiciones.
- Organización visual.
- Interacción básica con JavaScript.

El resultado debe ser fácil de explicar por la estudiante frente al profesor.

---

## 22. Prioridad final

Si existe cualquier conflicto entre "hacerlo más sofisticado" y "cumplir claramente con los temas de clase", priorizar **cumplir los temas de clase**.

La sofisticación debe venir del diseño, la organización, la experiencia de usuario y la calidad visual, no de agregar arquitectura o tecnologías innecesarias.
