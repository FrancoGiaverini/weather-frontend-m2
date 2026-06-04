const indice = localStorage.getItem("ciudadSeleccionada");
const city = cities[indice];
const cityDetail = document.getElementById("cityDetail");

cityDetail.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h1>${city.name}</h1>
            <h2>${city.icon} ${city.temp}°C</h2>
            <p>Humedad: ${city.humidity}%</p>
            <p>Viento: ${city.wind} km/h</p>
            <p>${city.condition}</p>
        </div>
    </div>
`;

const forecastContainer = document.getElementById("forecastContainer");
const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

for (let i = 0; i < days.length; i++) {
  forecastContainer.innerHTML += `
        <div class="col-6 col-lg-3 mb-3">
            <div class="card">
                <div class="card-body text-center">
                    <h5>${days[i]}</h5>
                    <p>${city.icon}</p>
                    <p>${city.temp}°C</p>
                </div>
            </div>
        </div>
    `;
}
