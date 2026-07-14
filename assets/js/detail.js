const apiClient = new ApiClient();
const weatherApp = new WeatherApp(apiClient);

const idCiudad = Number(localStorage.getItem("ciudadSeleccionada"));
const cityDetail = document.getElementById("cityDetail");
const forecastContainer = document.getElementById("forecastContainer");
const statsContainer = document.getElementById("statsContainer");

async function cargarDetalle() {
  try {
    const ciudad = cities.find((c) => c.id === idCiudad);
    const clima = await weatherApp.cargarClimaLugar(ciudad);

    cityDetail.innerHTML = `
      <div class="card mb-4">
        <div class="card-body text-center">
          <h1>${ciudad.name}</h1>
          <h3>🌡 ${clima.current.temperature_2m}°C</h3>
          <p>💧 Humedad: ${clima.current.relative_humidity_2m}%</p>
          <p>💨 Viento: ${clima.current.wind_speed_10m} km/h</p>
        </div>
      </div>
    `;

    forecastContainer.innerHTML = "";

    for (let i = 0; i < clima.daily.time.length; i++) {
      forecastContainer.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5>${clima.daily.time[i]}</h5>
              <p>Mín: ${clima.daily.temperature_2m_min[i]}°C</p>
              <p>Máx: ${clima.daily.temperature_2m_max[i]}°C</p>
              <p>Código clima: ${clima.daily.weather_code[i]}</p>
            </div>
          </div>
        </div>
      `;
    }

    const estadisticas = weatherApp.calcularEstadisticas({
      minimas: clima.daily.temperature_2m_min,
      maximas: clima.daily.temperature_2m_max,
    });

    const estadosClima = weatherApp.contarEstadosClima(
      clima.daily.weather_code,
    );
    const alerta = weatherApp.generarAlerta(
      Number(estadisticas.promedio),
      estadosClima.diasLluvia,
    );
    statsContainer.innerHTML = `
      <div class="card mt-4">
        <div class="card-body">
          <h2>Estadísticas de la semana</h2>
          <p>Temperatura mínima: ${estadisticas.temperaturaMinima}°C</p>
          <p>Temperatura máxima: ${estadisticas.temperaturaMaxima}°C</p>
          <p>Temperatura promedio: ${estadisticas.promedio}°C</p>
          <p>Días soleados: ${estadosClima.diasSoleados}</p>
<p>Días con lluvia: ${estadosClima.diasLluvia}</p>
          <hr>
          <h4>${alerta}</h4>
        </div>
      </div>
    `;
  } catch (error) {
    cityDetail.innerHTML = `
      <p class="text-danger">
        Error al cargar los datos del clima.
      </p>
    `;
    console.error(error);
  }
}

cargarDetalle();
