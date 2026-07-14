class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.lugares = [];
  }

  async cargarLugares() {
    this.lugares = cities;
    return this.lugares;
  }

  async cargarClimaLugar(lugar) {
    const clima = await this.apiClient.obtenerClima(
      lugar.latitude,
      lugar.longitude
    );

    return clima;
  }

  calcularEstadisticas(pronostico) {
    let temperaturaMinima = Math.min(...pronostico.minimas);
    let temperaturaMaxima = Math.max(...pronostico.maximas);

    let promedio =
      pronostico.maximas.reduce((total, temperatura) => total + temperatura, 0) /
      pronostico.maximas.length;

    return {
      temperaturaMinima,
      temperaturaMaxima,
      promedio: promedio.toFixed(1),
    };
  }

  generarAlerta(promedio, diasLluvia) {
    if (promedio > 30) {
      return "🔥 Alerta de calor";
    }

    if (diasLluvia >= 3) {
      return "🌧 Semana lluviosa";
    }

    return "Sin alertas climáticas";
  }
}