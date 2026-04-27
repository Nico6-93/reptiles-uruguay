const contenedor = document.getElementById("contenedor-reptiles");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

// Elementos internos del modal
const nombre = document.getElementById("modal-nombre");
const imagenElemento = document.getElementById("modal-imagen");
const cientifico = document.getElementById("modal-cientifico");
const tipo = document.getElementById("modal-tipo").querySelector("span");
const descripcion = document.getElementById("modal-descripcion");

// Botones carrusel
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Variables de estado del carrusel
let fotosActuales = [];
let indiceImagen = 0;

// Crear las tarjetas al cargar
reptiles.forEach(reptil => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${reptil.imagenes[0]}" alt="${reptil.nombre}">
        <h3>${reptil.nombre}</h3>
        <p>${reptil.tipo}</p>
    `;

    card.addEventListener("click", () => {
        fotosActuales = reptil.imagenes;
        indiceImagen = 0;
        mostrarReptilEnModal(reptil);
    });

    contenedor.appendChild(card);
});

function mostrarReptilEnModal(reptil) {
    nombre.textContent = reptil.nombre;
    cientifico.textContent = reptil.nombreCientifico;
    tipo.textContent = reptil.tipo;
    descripcion.textContent = reptil.descripcion;
    
    actualizarFoto();
    modal.classList.remove("oculto");
}

function actualizarFoto() {
    imagenElemento.src = fotosActuales[indiceImagen];
}

// Eventos del carrusel
btnNext.addEventListener("click", () => {
    indiceImagen = (indiceImagen + 1) % fotosActuales.length;
    actualizarFoto();
});

btnPrev.addEventListener("click", () => {
    indiceImagen = (indiceImagen - 1 + fotosActuales.length) % fotosActuales.length;
    actualizarFoto();
});

// Cerrar Modal
const cerrarModal = () => modal.classList.add("oculto");
cerrar.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModal(); });