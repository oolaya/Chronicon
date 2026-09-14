# Chronicon — Descubre el pasado. Vive el lugar.

> **Proyecto Académico de Desarrollo Web Frontend**  
> **Desarrolladora:** María José Olaya Suárez  
> **Tema:** Portal / Foro informativo de historia y patrimonio cultural de Colombia con simulación de reservas.

---

## ## Resumen de Avance

- **Fecha de actualización:** 2026-09-14
- **Estado general:** VERDE 🟢 (Iteración de Identidad, Diversidad y Galería de Emblemas completada con éxito)
- **Fase actual:** Frontend enriquecido con Paleta Diversidad LGBTQ+ y Gráficos Oficiales
- **Próximo paso:** Demostración y sustentación de la experiencia visual y funcional
- **Riesgos o bloqueos activos:** Ninguno.

---

## 🎨 Paleta de Colores Oficial (Identidad & Diversidad)

| Código Hex | Pilar Temático | Uso Principal en la Interfaz |
|---|---|---|
| `#14213D` | **Fondo Principal** | Azul noche base de banners, footer y encabezados |
| `#E63946` | **Energía** | Acentos de alta energía, botones y lugares militares |
| `#FF7A00` | **Exploración** | Badges de descubrimiento y bordes temáticos |
| `#F4C542` | **Patrimonio** | Amarillo dorado de monumentos, títulos destacados y estrellas |
| `#18A558` | **Naturaleza** | Senderos naturales y maravillas geológicas |
| `#0066CC` | **Cultura** | Museos, arqueología y enlaces principales |
| `#7B2CBF` | **Diversidad** | Inclusión, comunidad, efectos hover y fondos acentuados |
| `#F7F3EA` | **Fondos Claros** | Crema suave para descanso visual y fondos de sección |

---

## 🖼️ Recursos Gráficos Integrados (`assets/`)

- **`assets/isotipos.png`**: Colección de 4 emblemas circulares oficiales (Historia Viva, Sabiduría & Memoria, Patrimonio Monumental, Tiempo & Transformación) con anillo multicolor de diversidad.
- **`assets/isotipos2.png`**: Galería de iconos transparentes exhibida en el Hero Section para alto impacto visual y en las marcas de navegación.

---

## 🏛️ Descripción del Proyecto

**Chronicon** es una experiencia digital moderna y visualmente atractiva orientada a jóvenes y adultos entre 14 y 36 años (estudiantes, viajeros y amantes de la cultura) que permite:

1. **Explorar lugares históricos:** Catálogo con 6 destinos icónicos de Colombia (Cartagena de Indias, Castillo San Felipe, Museo del Oro, Villa de Leyva, Catedral de Sal de Zipaquirá y Quinta de Bolívar).
2. **Consultar detalles y líneas de tiempo:** Ficha histórica, datos curiosos, recomendaciones de visita y duración.
3. **Participar en la comunidad / foro simulado:** Publicaciones interactivas con sistema de "Me interesa" e ingreso de comentarios temporales en memoria.
4. **Realizar reservas demostrativas:** Formulario con validación en JavaScript, generación de comprobante y código ficticio (ej. `RH-4821`), con guardado en `sessionStorage`.

---

## 🛠️ Stack Tecnológico y Restricciones

- **HTML5 Semántico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **CSS3 Personalizado:** Variables CSS, Flexbox explícito (`display: flex`, `justify-content`, `align-items`, `flex-wrap`, `gap`), transiciones suaves, efectos hover, posicionamiento y `@media` queries para diseño responsive.
- **JavaScript Vanilla:** Manejo de datos en memoria (`lugares`, `publicaciones`, `comentarios`), manipulación del DOM y persistencia temporal en `sessionStorage`.
- **Bootstrap 5 & Bootstrap Icons (CDN):** Framework de interfaz y sistema de iconografía.
- **Google Fonts (CDN):** Tipografías *Playfair Display* (títulos) y *Poppins* (interfaz y textos).
- **Cero backend / APIs / base de datos:** El proyecto es 100% frontend estático y no requiere servidores ni instalaciones.

---

## 📁 Estructura de Archivos del Proyecto

```text
Chronicon/
├── index.html                   # Página principal con todas las secciones integradas
├── style.css                    # Estilos CSS con Flexbox, variables, transiciones y responsive
├── script.js                    # Lógica JS con datos en memoria, foro interactivo y reservas
├── pages/                       # Páginas complementarias para navegación modular
│   ├── lugares.html             # Vista dedicada del catálogo de lugares
│   ├── detalle.html             # Ficha técnica histórica ampliada
│   ├── comunidad.html           # Foro interactivo de discusión escolar
│   └── reserva.html             # Formulario exclusivo de reserva simulada
├── assets/
│   └── images/                  # Directorio para recursos visuales
├── .oneclick/
│   ├── document-structure.json  # Manifiesto de estructura y arquitectura
│   └── workflow-state.json      # Estado y seguimiento del flujo de trabajo OneClick
├── context_chronicon_oneclick.md# Especificación académica de requerimientos
└── README.md                    # Documentación del proyecto y resumen de avance
```

---

## 🚀 Instrucciones de Ejecución

1. **Opción 1 (Directa en navegador):**  
   Hacer doble clic en el archivo [index.html](index.html) para abrirlo en Google Chrome, Edge, Safari o Firefox.

2. **Opción 2 (Extensión Live Server en VS Code):**  
   - Abrir la carpeta del proyecto en VS Code.
   - Hacer clic derecho en [index.html](index.html) y seleccionar **"Open with Live Server"**.
   - La aplicación se abrirá en `http://127.0.0.1:5500/index.html`.

---

## ✅ Cumplimiento de Criterios Académicos

| # | Criterio Requerido | Estado | Evidencia en el Código |
|---|---|:---:|---|
| 1 | Archivo `index.html` presente | ✅ | [index.html](index.html) |
| 2 | `<title>` personalizado | ✅ | `<title>Chronicon \| Descubre el pasado. Vive el lugar.</title>` |
| 3 | Título `<h1>` principal | ✅ | `<h1>Chronicon</h1>` en banner institucional |
| 4 | Párrafo `<p>` de propósito | ✅ | `<p class="purpose-text">` en banner |
| 5 | Línea `<hr>` | ✅ | `<hr class="academic-divider">` |
| 6 | Encabezado `<h2>` para la desarrolladora | ✅ | `<h2>Desarrollado por María José Olaya Suárez</h2>` |
| 7 | Etiquetas semánticas HTML5 completas | ✅ | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` |
| 8 | Contenido relacionado y coherente | ✅ | Textos y fichas culturales de Colombia |
| 9 | `background-color` y colores personalizados | ✅ | Paleta: Azul noche, Dorado cálido, Terracota, Crema |
| 10 | Tipografías Google Fonts | ✅ | *Playfair Display* & *Poppins* |
| 11 | Margen, padding, bordes, border-radius, box-shadow | ✅ | Declarados en [style.css](style.css) |
| 12 | **Flexbox explícito** (`flex`, `justify`, `align`, `wrap`, `gap`) | ✅ | `.places-flex-grid`, `.stats-flex-container`, `.hero-content-wrapper` |
| 13 | Transiciones y estados `:hover` | ✅ | Efecto elevación en tarjetas, zoom en imágenes y botones |
| 14 | `position` y `overflow` | ✅ | Badges flotantes absolutas y tarjetas con `overflow: hidden` |
| 15 | Responsive Design con `@media` query | ✅ | Adaptable a móviles, tablets y escritorio |
| 16 | Mínimo 6 lugares históricos | ✅ | 6 lugares con imágenes, historia, tips y línea de tiempo |
| 17 | Foro simulado sin backend | ✅ | Comentarios interactivos persistidos en `sessionStorage` |
| 18 | Reserva simulada con código ficticio | ✅ | Código `RH-XXXX` y voucher visual |
| 19 | Firma obligatoria en `<footer>` | ✅ | **"Hecho por María José Olaya Suárez"** |
| 20 | Sin backend, bases de datos ni APIs externas | ✅ | 100% Vanilla JS en memoria |
