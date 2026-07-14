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
    const temperaturaMinima = Math.min(...pronostico.minimas);
    const temperaturaMaxima = Math.max(...pronostico.maximas);
    const suma = pronostico.maximas.reduce(
      (total, temperatura) => total + temperatura,
      0
    );
    const promedio = (suma / pronostico.maximas.length).toFixed(1);
    return {
      temperaturaMinima,
      temperaturaMaxima,
      promedio
    };
  }

  contarLluvias(codigosClima) {
    let diasLluvia = 0;
    codigosClima.forEach(codigo => {
      if (codigo >= 51 && codigo <= 67) {
        diasLluvia++;
      }
    });
    return diasLluvia;
  }

  contarEstadosClima(codigosClima) {
  let diasSoleados = 0;
  let diasLluvia = 0;

  codigosClima.forEach(codigo => {
    if (codigo <= 1) {
      diasSoleados++;
    }

    if (codigo >= 51 && codigo <= 67) {
      diasLluvia++;
    }
  });

  return {
    diasSoleados,
    diasLluvia
  };
}
  generarAlerta(promedio, diasLluvia) {
    if (promedio > 30) {
      return "🔥 Alerta de calor";
    }
    if (diasLluvia >= 3) {
      return "🌧 Semana lluviosa";
    }
    return "✅ Sin alertas climáticas";
  }
}