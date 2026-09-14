/* ==========================================================================
   CHRONICON - SCRIPT JAVASCRIPT PRINCIPAL
   Datos en memoria, renderizado dinámico e interactividad simulada
   Desarrollado por: María José Olaya Suárez
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATOS EN MEMORIA: LUGARES HISTÓRICOS (MÍNIMO 6 LUGARES)
// --------------------------------------------------------------------------
const lugares = [
  {
    id: 1,
    nombre: "Ciudad Amurallada de Cartagena",
    ciudad: "Cartagena de Indias, Bolívar",
    categoria: "Arquitectura Colonial",
    categoriaClase: "badge-cat-explore",
    pilarColor: "Exploración",
    badge: "Patrimonio UNESCO",
    imagen: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80",
    resumen: "Conjunto monumental de fortificaciones, murallas, baluartes y casonas coloniales con más de 400 años de historia sobre el mar Caribe.",
    historia: "Iniciada a finales del siglo XVI para defender a la ciudad de ataques corsarios y piratas, las murallas de Cartagena se consolidaron como el sistema de defensa militar más complejo de Sudamérica.",
    lineaTiempo: [
      { anio: "1533", hito: "Fundación de Cartagena de Indias por Pedro de Heredia." },
      { anio: "1586", hito: "Inicio formal de la construcción de las murallas defensivas." },
      { anio: "1984", hito: "Declarada Patrimonio de la Humanidad por la UNESCO." }
    ],
    datosCuriosos: "Mide más de 11 kilómetros de longitud y sus gruesos muros resistieron múltiples asedios históricos.",
    recomendaciones: "Recorrer las murallas durante el atardecer (5:00 p.m.) y llevar calzado cómodo para caminar sobre adoquines.",
    duracion: "3 a 4 horas",
    horario: "Acceso libre 24 horas (Monumentos específicos 8:00 a.m. - 6:00 p.m.)"
  },
  {
    id: 2,
    nombre: "Castillo San Felipe de Barajas",
    ciudad: "Cartagena de Indias, Bolívar",
    categoria: "Fortificación Militar",
    categoriaClase: "badge-cat-energy",
    pilarColor: "Energía",
    badge: "Ingeniería Militar",
    imagen: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    resumen: "Impresionante fortaleza de piedra erigida sobre el cerro de San Lázaro, famosa por su complejo laberinto de túneles subterráneos.",
    historia: "Construido en 1657 durante la época colonial española, fue ampliado sucesivamente y soportó el gran asedio de la flota inglesa comandada por el almirante Edward Vernon en 1741.",
    lineaTiempo: [
      { anio: "1657", hito: "Construcción inicial sobre la colina de San Lázaro." },
      { anio: "1741", hito: "Victoria en la Batalla de Cartagena contra las tropas británicas." },
      { anio: "1992", hito: "Catalogado entre las mayores maravillas arquitectónicas de Colombia." }
    ],
    datosCuriosos: "Sus túneles fueron diseñados con acústica especial para escuchar hasta el más mínimo paso del enemigo.",
    recomendaciones: "Llevar protector solar, hidratación y linterna pequeña para explorar los túneles subterráneos permitidos.",
    duracion: "2 horas",
    horario: "Lunes a Domingo: 8:00 a.m. a 6:00 p.m."
  },
  {
    id: 3,
    nombre: "Museo del Oro",
    ciudad: "Bogotá D.C.",
    categoria: "Cultura y Arqueología",
    categoriaClase: "badge-cat-culture",
    pilarColor: "Cultura",
    badge: "Colección Prehispánica",
    imagen: "https://images.unsplash.com/photo-1599818698501-8e7c10b27e69?auto=format&fit=crop&w=800&q=80",
    resumen: "El museo arqueológico con la colección de orfebrería prehispánica más grande del planeta, albergando la legendaria Balsa Muisca del Dorado.",
    historia: "Creado por el Banco de la República en 1939 para proteger y difundir el patrimonio arqueológico e indígena de Colombia, exhibe más de 34.000 piezas orfebres y 20.000 objetos líticos y cerámicos.",
    lineaTiempo: [
      { anio: "1939", hito: "Adquisición del Poporo Quimbaya, pieza fundacional del museo." },
      { anio: "1969", hito: "Descubrimiento y entrega de la emblemática Balsa Muisca." },
      { anio: "2008", hito: "Gran remodelación arquitectónica y curatorial internacional." }
    ],
    datosCuriosos: "La Sala de la Ofrenda utiliza un juego envolvente de luces y cánticos chamánicos que simula la ceremonia en la laguna de Guatavita.",
    recomendaciones: "Reservar boletería con anticipación para domingos y aprovechar las audioguías bilingües.",
    duracion: "2 a 3 horas",
    horario: "Martes a Sábado: 9:00 a.m. - 7:00 p.m. / Domingos: 10:00 a.m. - 5:00 p.m."
  },
  {
    id: 4,
    nombre: "Villa de Leyva",
    ciudad: "Boyacá",
    categoria: "Patrimonio Histórico",
    categoriaClase: "badge-cat-heritage",
    pilarColor: "Patrimonio",
    badge: "Pueblo Monumento",
    imagen: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    resumen: "Pueblo colonial intacto famoso por su Plaza Mayor empedrada de 14.000 m², casonas encaladas y riqueza paleontológica marina prehistórica.",
    historia: "Fundada en 1572 como villa de retiro para soldados y nobles españoles, conserva su fisonomía virreinal y fue declarada Monumento Nacional en 1954.",
    lineaTiempo: [
      { anio: "1572", hito: "Fundación de la Villa de Santa María de Leyva." },
      { anio: "1954", hito: "Declarada Monumento Nacional de Colombia." },
      { anio: "1977", hito: "Descubrimiento del fósil del Kronosaurus de más de 115 millones de años." }
    ],
    datosCuriosos: "La Plaza Mayor es una de las plazas empedradas más extensas de América y carece de estatua en su centro.",
    recomendaciones: "Disfrutar del clima fresco por las tardes, visitar los museos paleontológicos y probar dulces tradicionales.",
    duracion: "Día completo",
    horario: "Población abierta / Museos locales 9:00 a.m. a 5:00 p.m."
  },
  {
    id: 5,
    nombre: "Catedral de Sal de Zipaquirá",
    ciudad: "Zipaquirá, Cundinamarca",
    categoria: "Maravilla Subterránea",
    categoriaClase: "badge-cat-nature",
    pilarColor: "Naturaleza",
    badge: "Primera Maravilla",
    imagen: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    resumen: "Santuario monumental esculpido íntegramente en las profundidades de una mina de sal a 180 metros bajo tierra.",
    historia: "Los mineros de sal crearon una pequeña capilla en 1932 como devoción a la Virgen de Guasá. En 1995 se inauguró la nueva catedral moderna, considerada la 'Primera Maravilla de Colombia'.",
    lineaTiempo: [
      { anio: "1953", hito: "Apertura de la primera capilla subterránea de los mineros." },
      { anio: "1995", hito: "Inauguración de la majestuosa catedral subterránea actual." },
      { anio: "2007", hito: "Elegida por votación popular como la Maravilla N° 1 de Colombia." }
    ],
    datosCuriosos: "Contiene la cruz monumental tallada en roca salina más grande del mundo bajo tierra (16 metros de altura).",
    recomendaciones: "Llevar ropa abrigada ya que la temperatura interna subterránea promedia los 14 °C constantes.",
    duracion: "3 horas",
    horario: "Lunes a Domingo: 9:00 a.m. a 5:40 p.m."
  },
  {
    id: 6,
    nombre: "Quinta de Bolívar",
    ciudad: "Bogotá D.C.",
    categoria: "Monumento Histórico",
    categoriaClase: "badge-cat-diversity",
    pilarColor: "Diversidad",
    badge: "Época Republicana",
    imagen: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    resumen: "Hermosa casa campestre colonial al pie de los Cerros Orientales, residencia y refugio del Libertador Simón Bolívar en momentos clave.",
    historia: "Obsequiada al Libertador en 1820 tras las campañas de independencia. En sus jardines y corredores se planearon importantes eventos políticos y reposó Bolívar tras largas expediciones.",
    lineaTiempo: [
      { anio: "1820", hito: "El gobierno entrega la quinta como obsequio a Simón Bolívar." },
      { anio: "1830", hito: "Última estancia del Libertador antes de partir hacia Santa Marta." },
      { anio: "1922", hito: "Apertura oficial como Casa Museo Nacional." }
    ],
    datosCuriosos: "En su patio principal aún se conservan árboles que fueron plantados directamente por Bolívar y Manuelita Sáenz.",
    recomendaciones: "Caminar por los jardines botánicos nativos y visitar la sala de espadas y documentos históricos.",
    duracion: "1 hora y media",
    horario: "Martes a Domingo: 9:00 a.m. a 5:00 p.m."
  }
];

// --------------------------------------------------------------------------
// 2. DATOS EN MEMORIA: PUBLICACIONES DEL FORO / COMUNIDAD
// --------------------------------------------------------------------------
let publicaciones = [
  {
    id: 1,
    autor: "Santiago Gómez",
    avatar: "SG",
    fecha: "Hace 2 días",
    titulo: "¿Qué fue lo que más te sorprendió del Castillo San Felipe?",
    cuerpo: "La semana pasada visité los túneles del Castillo San Felipe y es increíble cómo pensaron en la acústica para escuchar los pasos a distancia. ¡Una obra maestra de ingeniería militar!",
    reacciones: 18,
    reaccionada: false,
    comentarios: [
      { autor: "Camila R.", texto: "Totalmente de acuerdo, la vista de la bahía desde la cima también es insuperable." }
    ]
  },
  {
    id: 2,
    autor: "Valentina Morales",
    avatar: "VM",
    fecha: "Hace 4 días",
    titulo: "3 datos curiosos que aprendí en el Museo del Oro",
    cuerpo: "1. Muchas piezas de oro no eran decorativas sino rituales. 2. La técnica de la 'cera perdida' requería una precisión milimétrica. 3. La Balsa Muisca es mucho más detallada de lo que se ve en fotos.",
    reacciones: 27,
    reaccionada: false,
    comentarios: [
      { autor: "Andrés P.", texto: "La sala de la ofrenda con el juego de luces es una experiencia mágica." }
    ]
  },
  {
    id: 3,
    autor: "Profesor Darío Méndez",
    avatar: "DM",
    fecha: "Hace 1 semana",
    titulo: "¿Qué lugar histórico recomendarías para una salida escolar?",
    cuerpo: "Estamos planeando la salida pedagógica de grado 9° y 10°. ¿Recomiendan más la Catedral de Sal de Zipaquirá o el centro histórico de Villa de Leyva?",
    reacciones: 14,
    reaccionada: false,
    comentarios: [
      { autor: "María José O.", texto: "¡Ambos son geniales! Para geología y minería Zipaquirá es única; para historia colonial completa, Villa de Leyva." }
    ]
  }
];

// --------------------------------------------------------------------------
// 3. INICIALIZACIÓN AL CARGAR EL DOM
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderizarLugares();
  renderizarOpcionesSelectReserva();
  cargarComentariosSessionStorage();
  renderizarPublicacionesForo();
  configurarFormularioReserva();
  comprobarReservaActivaEnSession();
});

// --------------------------------------------------------------------------
// 4. RENDERIZADO DE LUGARES HISTÓRICOS (CARDS FLEXBOX)
// --------------------------------------------------------------------------
function renderizarLugares() {
  const contenedor = document.getElementById("places-grid-container");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  lugares.forEach(lugar => {
    const article = document.createElement("article");
    article.className = "place-card-article";
    article.innerHTML = `
      <div class="place-image-box">
        <img src="${lugar.imagen}" alt="${lugar.nombre}" loading="lazy">
        <span class="floating-badge badge-category ${lugar.categoriaClase || 'badge-cat-explore'}">
          ${lugar.categoria}
        </span>
        <span class="floating-location">
          <i class="bi bi-geo-alt-fill text-warning"></i> ${lugar.ciudad}
        </span>
      </div>
      <div class="place-card-body">
        <h3 class="place-card-title">${lugar.nombre}</h3>
        <p class="place-card-summary">${lugar.resumen}</p>
        <div class="place-card-meta">
          <span class="badge-tag"><i class="bi bi-bookmark-star text-warning"></i> ${lugar.badge}</span>
          <small class="text-muted"><i class="bi bi-clock"></i> ${lugar.duracion}</small>
        </div>
        <div class="place-card-actions">
          <button class="btn btn-chronicon-outline" onclick="abrirDetalleLugar(${lugar.id})">
            <i class="bi bi-book"></i> Conocer historia
          </button>
          <button class="btn btn-chronicon-rainbow" onclick="seleccionarParaReserva(${lugar.id})">
            <i class="bi bi-calendar-check"></i> Reservar
          </button>
        </div>
      </div>
    `;
    contenedor.appendChild(article);
  });
}

// --------------------------------------------------------------------------
// 5. MODAL / DETALLE DE LUGAR HISTÓRICO
// --------------------------------------------------------------------------
function abrirDetalleLugar(id) {
  const lugar = lugares.find(l => l.id === id);
  if (!lugar) return;

  // Guardar lugar seleccionado temporalmente en sessionStorage
  sessionStorage.setItem("chronicon_lugar_detalle", JSON.stringify(lugar));

  const modalTitulo = document.getElementById("placeDetailModalLabel");
  const modalCuerpo = document.getElementById("placeDetailModalBody");
  
  if (modalTitulo && modalCuerpo) {
    modalTitulo.innerText = lugar.nombre;

    let lineaTiempoHtml = lugar.lineaTiempo.map(item => `
      <li class="mb-2">
        <strong class="text-primary">${item.anio}:</strong> ${item.hito}
      </li>
    `).join("");

    modalCuerpo.innerHTML = `
      <div class="row g-4">
        <div class="col-lg-6">
          <img src="${lugar.imagen}" alt="${lugar.nombre}" class="img-fluid rounded-3 shadow-sm mb-3 w-100" style="height: 260px; object-fit: cover;">
          <div class="p-3 bg-light rounded-3 border">
            <h6 class="fw-bold text-dark mb-2"><i class="bi bi-info-circle-fill text-warning"></i> Datos Clave</h6>
            <p class="small mb-1"><strong>Ubicación:</strong> ${lugar.ciudad}</p>
            <p class="small mb-1"><strong>Categoría:</strong> <span class="badge ${lugar.categoriaClase || 'bg-primary'}">${lugar.categoria}</span></p>
            <p class="small mb-1"><strong>Pilar Temático:</strong> <strong class="text-primary">${lugar.pilarColor || 'Patrimonio'}</strong></p>
            <p class="small mb-1"><strong>Duración sugerida:</strong> ${lugar.duracion}</p>
            <p class="small mb-0"><strong>Horario referencial:</strong> ${lugar.horario}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h5 class="fw-bold text-primary mb-2">Contexto Histórico</h5>
          <p class="text-muted small">${lugar.historia}</p>
          
          <h6 class="fw-bold text-primary mt-3 mb-2"><i class="bi bi-hourglass-split"></i> Línea de Tiempo</h6>
          <ul class="list-unstyled small text-muted ps-2 border-start border-3 border-warning">
            ${lineaTiempoHtml}
          </ul>

          <div class="alert alert-warning p-2 mt-3 small">
            <strong><i class="bi bi-lightbulb-fill text-warning"></i> Dato curioso:</strong> ${lugar.datosCuriosos}
          </div>

          <div class="mt-3">
            <h6 class="fw-bold text-primary mb-1"><i class="bi bi-compass-fill text-danger"></i> Recomendaciones de Visita:</h6>
            <p class="small text-muted mb-3">${lugar.recomendaciones}</p>
            <button class="btn btn-chronicon-rainbow w-100" onclick="cerrarModalYReservar(${lugar.id})">
              <i class="bi bi-calendar2-plus"></i> Iniciar Reserva Demostrativa para este lugar
            </button>
          </div>
        </div>
      </div>
    `;

    // Abrir modal de Bootstrap
    const detailModalEl = document.getElementById("placeDetailModal");
    if (detailModalEl && window.bootstrap) {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(detailModalEl);
      modalInstance.show();
    }
  }
}

function cerrarModalYReservar(id) {
  const detailModalEl = document.getElementById("placeDetailModal");
  if (detailModalEl && window.bootstrap) {
    const modalInstance = bootstrap.Modal.getInstance(detailModalEl);
    if (modalInstance) modalInstance.hide();
  }
  seleccionarParaReserva(id);
}

function seleccionarParaReserva(id) {
  const lugar = lugares.find(l => l.id === id);
  if (!lugar) return;

  const selectLugar = document.getElementById("booking-place");
  if (selectLugar) {
    selectLugar.value = lugar.nombre;
  }

  // Desplazarse suavemente a la sección de reserva
  const bookingSection = document.getElementById("reserva");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth" });
  }
}

// --------------------------------------------------------------------------
// 6. RENDERIZADO DEL SELECT DE LUGARES EN RESERVA
// --------------------------------------------------------------------------
function renderizarOpcionesSelectReserva() {
  const select = document.getElementById("booking-place");
  if (!select) return;

  select.innerHTML = '<option value="" selected disabled>Selecciona un lugar histórico...</option>';
  lugares.forEach(lugar => {
    const opt = document.createElement("option");
    opt.value = lugar.nombre;
    opt.textContent = `${lugar.nombre} (${lugar.ciudad})`;
    select.appendChild(opt);
  });
}

// --------------------------------------------------------------------------
// 7. SECCIÓN DE COMUNIDAD / FORO SIMULADO
// --------------------------------------------------------------------------
function renderizarPublicacionesForo() {
  const contenedor = document.getElementById("forum-posts-container");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  publicaciones.forEach(pub => {
    const card = document.createElement("div");
    card.className = "forum-post-card";
    
    let comentariosHtml = pub.comentarios.map(c => `
      <div class="p-2 mb-2 bg-white rounded border small">
        <strong>${c.autor}:</strong> ${c.texto}
      </div>
    `).join("");

    card.innerHTML = `
      <div class="forum-post-header">
        <div class="forum-author-info">
          <div class="forum-avatar">${pub.avatar}</div>
          <div>
            <p class="forum-author-name">${pub.autor}</p>
            <span class="forum-post-date">${pub.fecha}</span>
          </div>
        </div>
        <span class="badge bg-light text-dark border"><i class="bi bi-chat-left-text"></i> Debate Académico</span>
      </div>

      <h4 class="forum-post-title">${pub.titulo}</h4>
      <p class="forum-post-body">${pub.cuerpo}</p>

      <div class="forum-post-actions">
        <button class="forum-reaction-btn ${pub.reaccionada ? 'liked' : ''}" onclick="reaccionarPublicacion(${pub.id})">
          <i class="bi ${pub.reaccionada ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
          <span>${pub.reacciones} Me interesa</span>
        </button>
        <span class="small text-muted"><i class="bi bi-chat-dots"></i> ${pub.comentarios.length} comentarios</span>
      </div>

      <div class="forum-comments-box">
        <h6 class="small fw-bold text-secondary mb-2">Comentarios de la comunidad:</h6>
        <div id="comments-list-${pub.id}">
          ${comentariosHtml.length > 0 ? comentariosHtml : '<p class="small text-muted mb-0">Sé el primero en comentar durante esta sesión.</p>'}
        </div>
        <div class="comment-input-group">
          <input type="text" id="input-comment-${pub.id}" class="form-control form-control-sm" placeholder="Escribe un comentario respetuoso..." onkeypress="manejarEnterComentario(event, ${pub.id})">
          <button class="btn btn-sm btn-chronicon-primary" onclick="agregarComentario(${pub.id})">
            <i class="bi bi-send"></i> Comentar
          </button>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function reaccionarPublicacion(id) {
  const pub = publicaciones.find(p => p.id === id);
  if (!pub) return;

  if (pub.reaccionada) {
    pub.reacciones--;
    pub.reaccionada = false;
  } else {
    pub.reacciones++;
    pub.reaccionada = true;
  }
  renderizarPublicacionesForo();
}

function manejarEnterComentario(event, id) {
  if (event.key === "Enter") {
    agregarComentario(id);
  }
}

function agregarComentario(id) {
  const input = document.getElementById(`input-comment-${id}`);
  if (!input || input.value.trim() === "") return;

  const texto = input.value.trim();
  const pub = publicaciones.find(p => p.id === id);
  if (!pub) return;

  const nuevoComentario = {
    autor: "Estudiante / Visitante",
    texto: texto
  };

  pub.comentarios.push(nuevoComentario);
  input.value = "";

  // Guardar comentarios temporales en sessionStorage
  guardarComentariosEnSessionStorage();
  renderizarPublicacionesForo();
}

function guardarComentariosEnSessionStorage() {
  const datosComentarios = publicaciones.map(p => ({ id: p.id, comentarios: p.comentarios }));
  sessionStorage.setItem("chronicon_comentarios_sesion", JSON.stringify(datosComentarios));
}

function cargarComentariosSessionStorage() {
  const guardados = sessionStorage.getItem("chronicon_comentarios_sesion");
  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      parsed.forEach(item => {
        const pub = publicaciones.find(p => p.id === item.id);
        if (pub && item.comentarios) {
          pub.comentarios = item.comentarios;
        }
      });
    } catch (e) {
      console.warn("No se pudieron restaurar comentarios de la sesión", e);
    }
  }
}

// --------------------------------------------------------------------------
// 8. FORMULARIO DE RESERVA DEMOSTRATIVA
// --------------------------------------------------------------------------
function configurarFormularioReserva() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lugar = document.getElementById("booking-place").value;
    const fecha = document.getElementById("booking-date").value;
    const visitantes = document.getElementById("booking-visitors").value;
    const nombre = document.getElementById("booking-name").value.trim();
    const email = document.getElementById("booking-email").value.trim();
    const tipo = document.getElementById("booking-type").value;

    // Validación básica de campos requeridos
    if (!lugar || !fecha || !visitantes || !nombre || !email || !tipo) {
      mostrarAlertaFormulario("Por favor completa todos los campos del formulario de reserva.", "danger");
      return;
    }

    // Generar código ficticio de reserva como RH-4821
    const codigoFicticio = "RH-" + Math.floor(1000 + Math.random() * 9000);

    const reservaObj = {
      codigo: codigoFicticio,
      lugar: lugar,
      fecha: fecha,
      visitantes: visitantes,
      nombre: nombre,
      email: email,
      tipo: tipo,
      fechaCreacion: new Date().toLocaleDateString()
    };

    // Guardar temporalmente en sessionStorage
    sessionStorage.setItem("chronicon_reserva_activa", JSON.stringify(reservaObj));

    // Mostrar el voucher de confirmación visual
    mostrarVoucherReserva(reservaObj);
    form.reset();
  });
}

function mostrarVoucherReserva(reserva) {
  const voucher = document.getElementById("booking-voucher");
  const voucherCodigo = document.getElementById("voucher-code-display");
  const voucherDetalles = document.getElementById("voucher-details-display");

  if (voucher && voucherCodigo && voucherDetalles) {
    voucherCodigo.innerText = reserva.codigo;
    voucherDetalles.innerHTML = `
      <div class="row g-2 small">
        <div class="col-sm-6"><strong>Lugar:</strong> ${reserva.lugar}</div>
        <div class="col-sm-6"><strong>Fecha planeada:</strong> ${reserva.fecha}</div>
        <div class="col-sm-6"><strong>Titular:</strong> ${reserva.nombre}</div>
        <div class="col-sm-6"><strong>Visitantes:</strong> ${reserva.visitantes} persona(s)</div>
        <div class="col-sm-6"><strong>Tipo de visita:</strong> ${reserva.tipo}</div>
        <div class="col-sm-6"><strong>Correo de contacto:</strong> ${reserva.email}</div>
      </div>
    `;

    voucher.style.display = "block";
    voucher.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function comprobarReservaActivaEnSession() {
  const guardada = sessionStorage.getItem("chronicon_reserva_activa");
  if (guardada) {
    try {
      const reserva = JSON.parse(guardada);
      mostrarVoucherReserva(reserva);
    } catch (e) {
      console.warn("Error al leer reserva de la sesión", e);
    }
  }
}

function reiniciarReserva() {
  sessionStorage.removeItem("chronicon_reserva_activa");
  const voucher = document.getElementById("booking-voucher");
  if (voucher) {
    voucher.style.display = "none";
  }
  const form = document.getElementById("booking-form");
  if (form) form.reset();
}

function mostrarAlertaFormulario(mensaje, tipo) {
  const alertaDiv = document.getElementById("booking-alert");
  if (alertaDiv) {
    alertaDiv.className = `alert alert-${tipo} alert-dismissible fade show`;
    alertaDiv.innerHTML = `
      <i class="bi bi-exclamation-triangle-fill"></i> ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    alertaDiv.classList.remove("d-none");
  }
}
