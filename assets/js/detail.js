function buscarCiudad(id) {
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].id == id) {
      return cities[i];
    }
  }
}
function calcularEstadisticas(pronostico) {
  let temperaturaMinima = pronostico[0].min;
  let temperaturaMaxima = pronostico[0].max;
  let sumaTemperaturas = 0;
  let diasSoleados = 0;
  let diasNublados = 0;
  let diasLluviosos = 0;

  for (let i = 0; i < pronostico.length; i++) {
    if (pronostico[i].min < temperaturaMinima) {
      temperaturaMinima = pronostico[i].min;
    }
    if (pronostico[i].max > temperaturaMaxima) {
      temperaturaMaxima = pronostico[i].max;
    }
    sumaTemperaturas += (pronostico[i].min + pronostico[i].max) / 2;
    if (pronostico[i].estado === "Soleado") {
      diasSoleados++;
    } else if (
      pronostico[i].estado === "Nublado" ||
      pronostico[i].estado === "Parcialmente nublado"
    ) {
      diasNublados++;
    } else {
      diasLluviosos++;
    }
  }
  let promedio = (sumaTemperaturas / pronostico.length).toFixed(1);
  let resumen = "";
  if (diasSoleados > diasNublados && diasSoleados > diasLluviosos) {
    resumen = "Semana mayormente soleada.";
  } else if (diasLluviosos > diasSoleados && diasLluviosos > diasNublados) {
    resumen = "Semana fría con varias lluvias.";
  } else {
    resumen = "Semana con clima variable.";
  }
  return {
    temperaturaMinima,
    temperaturaMaxima,
    promedio,
    diasSoleados,
    diasNublados,
    diasLluviosos,
    resumen,
  };
}

const idCiudad = localStorage.getItem("ciudadSeleccionada");
const city = buscarCiudad(idCiudad);
const cityDetail = document.getElementById("cityDetail");

cityDetail.innerHTML = `
<div class="card mb-4">
    <div class="card-body text-center">
        <h1>${city.icon} ${city.name}</h1>
        <h3>${city.tempActual}°C</h3>
        <p><strong>Estado:</strong> ${city.estadoActual}</p>
        <p><strong>Humedad:</strong> ${city.humidity}%</p>
        <p><strong>Viento:</strong> ${city.wind} km/h</p>
    </div>
</div>
`;

const forecastContainer = document.getElementById("forecastContainer");

for (let i = 0; i < city.pronosticoSemanal.length; i++) {
  forecastContainer.innerHTML += `
    <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
            <div class="card-body text-center">
                <h5>${city.pronosticoSemanal[i].dia}</h5>
                <p>${city.icon}</p>
                <p>Mín: ${city.pronosticoSemanal[i].min}°C</p>
                <p>Máx: ${city.pronosticoSemanal[i].max}°C</p>
                <p>${city.pronosticoSemanal[i].estado}</p>
            </div>
        </div>
    </div>
    `;
}

const estadisticas = calcularEstadisticas(city.pronosticoSemanal);
const statsContainer = document.getElementById("statsContainer");

statsContainer.innerHTML = `
<div class="card mt-4">
    <div class="card-body">
        <h2 class="mb-4">Estadísticas de la semana</h2>
        <p><strong>Temperatura mínima:</strong> ${estadisticas.temperaturaMinima}°C</p>
        <p><strong>Temperatura máxima:</strong> ${estadisticas.temperaturaMaxima}°C</p>
        <p><strong>Temperatura promedio:</strong> ${estadisticas.promedio}°C</p>
        <hr>
        <p><strong>Días soleados:</strong> ${estadisticas.diasSoleados}</p>
        <p><strong>Días nublados:</strong> ${estadisticas.diasNublados}</p>
        <p><strong>Días lluviosos:</strong> ${estadisticas.diasLluviosos}</p>
        <hr>
        <p><strong>Resumen:</strong> ${estadisticas.resumen}</p>
    </div>
</div>
`;
