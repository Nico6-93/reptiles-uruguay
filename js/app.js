console.log("JS funcionando");
console.log(reptiles);

const contenedor = document.getElementById("contenedor-reptiles");

reptiles.forEach(reptil => {
    
    const card = document.createElement("div");

    card.innerHTML = `
    <div class="card">
      <img src="${reptil.imagen}" alt="${reptil.nombre}" width="150">
      <h3>${reptil.nombre}</h3>
      <p>${reptil.tipo}</p>
    </div>
  `;

  contenedor.appendChild(card);

});