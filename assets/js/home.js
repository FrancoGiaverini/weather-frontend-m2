const citiesContainer = document.getElementById("citiesContainer");
const apiClient = new ApiClient();
const weatherApp = new WeatherApp(apiClient);

function verDetalle(id) {
  localStorage.setItem("ciudadSeleccionada", id);
  window.location.href = "detail.html";
}

async function cargarHome() {
  try {
    citiesContainer.innerHTML = `
      <p class="text-center">Cargando datos del clima...</p>
    `;
    const ciudades = await weatherApp.cargarLugares();
    citiesContainer.innerHTML = "";
    for (const ciudad of ciudades) {
      const clima = await weatherApp.cargarClimaLugar(ciudad);
      citiesContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h3>${ciudad.name}</h3>
              <p>
                🌡 Temperatura:
                ${clima.current.temperature_2m}°C
              </p>
              <p>
                💧 Humedad:
                ${clima.current.relative_humidity_2m}%
              </p>
              <p>
                💨 Viento:
                ${clima.current.wind_speed_10m} km/h
              </p>
              <button
                class="btn btn-primary"
                onclick="verDetalle(${ciudad.id})">
                Ver detalle
              </button>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    citiesContainer.innerHTML = `
      <p class="text-danger text-center">
        Error al cargar los datos del clima.
      </p>
    `;
    console.error(error);
  }
}

cargarHome();