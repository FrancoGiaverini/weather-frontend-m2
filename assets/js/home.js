const citiesContainer = document.getElementById("citiesContainer");

function verDetalle(id) {
  localStorage.setItem("ciudadSeleccionada", id);
  window.location.href = "detail.html";
}

for (let i = 0; i < cities.length; i++) {
  citiesContainer.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h2>${cities[i].icon}</h2>
          <h3>${cities[i].name}</h3>
          <p>${cities[i].tempActual}°C</p>
          <p>${cities[i].estadoActual}</p>
          <button
            class="btn btn-primary"
            onclick="verDetalle(${cities[i].id})">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  `;
}