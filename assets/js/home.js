const citiesContainer = document.getElementById("citiesContainer");
function verDetalle(indice) {
  localStorage.setItem("ciudadSeleccionada", indice);
  window.location.href = "detail.html";
}

for (let i = 0; i < cities.length; i++) {
  citiesContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <div class="card-body text-center">
                    <h2>${cities[i].icon}</h2>
                    <h3>${cities[i].name}</h3>
                    <p>${cities[i].temp}°C</p>
                    <p>${cities[i].condition}</p>
                    <button
                        class="btn btn-primary"
                        onclick="verDetalle(${i})">
                        Ver detalle
                    </button>
                </div>
            </div>
        </div>
    `;
}
