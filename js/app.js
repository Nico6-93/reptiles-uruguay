console.log("JS funcionando");
console.log(reptiles);

const contenedor = document.getElementById("contenedor-reptiles");


const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");

const nombre = document.getElementById("modal-nombre");
const imagen = document.getElementById("modal-imagen");
const cientifico = document.getElementById("modal-cientifico");
const tipo = document.getElementById("modal-tipo");
const descripcion = document.getElementById("modal-descripcion");

reptiles.forEach(reptil => {
  const card = document.createElement("div");

  card.innerHTML = `
    <div class="card">
      <img src="${reptil.imagen}" alt="${reptil.nombre}" width="150">
      <h3>${reptil.nombre}</h3>
      <p>${reptil.tipo}</p>
    </div>
  `;

  // 👇 evento click
  card.addEventListener("click", () => {
    nombre.textContent = reptil.nombre;
    imagen.src = reptil.imagen;
    cientifico.textContent = reptil.nombreCientifico;
    tipo.textContent = reptil.tipo;
    descripcion.textContent = reptil.descripcion;

    modal.classList.remove("oculto");
  });

  contenedor.appendChild(card);
});

// cerrar modal
cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
});