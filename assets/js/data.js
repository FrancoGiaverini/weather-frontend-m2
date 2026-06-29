const cities = [
  {
    id: 1,
    name: "Santiago",
    tempActual: 24,
    humidity: 60,
    wind: 15,
    estadoActual: "Soleado",
    icon: "☀️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 15, max: 23, estado: "Nublado" },
      { dia: "Miércoles", min: 17, max: 25, estado: "Soleado" },
      { dia: "Jueves", min: 18, max: 26, estado: "Soleado" },
      { dia: "Viernes", min: 16, max: 24, estado: "Lluvioso" },
      { dia: "Sábado", min: 17, max: 25, estado: "Soleado" },
      { dia: "Domingo", min: 18, max: 27, estado: "Soleado" }
    ]
  },

  {
    id: 2,
    name: "Valparaíso",
    tempActual: 20,
    humidity: 70,
    wind: 10,
    estadoActual: "Nublado",
    icon: "☁️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 20, estado: "Nublado" },
      { dia: "Martes", min: 14, max: 19, estado: "Nublado" },
      { dia: "Miércoles", min: 15, max: 21, estado: "Soleado" },
      { dia: "Jueves", min: 16, max: 22, estado: "Soleado" },
      { dia: "Viernes", min: 15, max: 20, estado: "Lluvioso" },
      { dia: "Sábado", min: 14, max: 19, estado: "Nublado" },
      { dia: "Domingo", min: 15, max: 21, estado: "Soleado" }
    ]
  },

  {
    id: 3,
    name: "Concepción",
    tempActual: 18,
    humidity: 80,
    wind: 12,
    estadoActual: "Lluvioso",
    icon: "🌧️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 12, max: 18, estado: "Lluvioso" },
      { dia: "Martes", min: 13, max: 19, estado: "Lluvioso" },
      { dia: "Miércoles", min: 11, max: 17, estado: "Nublado" },
      { dia: "Jueves", min: 12, max: 18, estado: "Lluvioso" },
      { dia: "Viernes", min: 13, max: 19, estado: "Soleado" },
      { dia: "Sábado", min: 12, max: 18, estado: "Lluvioso" },
      { dia: "Domingo", min: 11, max: 17, estado: "Nublado" }
    ]
  },

  {
    id: 4,
    name: "Temuco",
    tempActual: 17,
    humidity: 85,
    wind: 14,
    estadoActual: "Lluvioso",
    icon: "🌧️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 17, estado: "Lluvioso" },
      { dia: "Martes", min: 11, max: 18, estado: "Lluvioso" },
      { dia: "Miércoles", min: 9, max: 16, estado: "Nublado" },
      { dia: "Jueves", min: 10, max: 17, estado: "Lluvioso" },
      { dia: "Viernes", min: 11, max: 18, estado: "Lluvioso" },
      { dia: "Sábado", min: 10, max: 17, estado: "Nublado" },
      { dia: "Domingo", min: 9, max: 16, estado: "Soleado" }
    ]
  },

  {
    id: 5,
    name: "Arica",
    tempActual: 27,
    humidity: 45,
    wind: 8,
    estadoActual: "Soleado",
    icon: "☀️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 22, max: 28, estado: "Soleado" },
      { dia: "Martes", min: 23, max: 29, estado: "Soleado" },
      { dia: "Miércoles", min: 22, max: 28, estado: "Soleado" },
      { dia: "Jueves", min: 23, max: 30, estado: "Soleado" },
      { dia: "Viernes", min: 22, max: 29, estado: "Soleado" },
      { dia: "Sábado", min: 23, max: 30, estado: "Soleado" },
      { dia: "Domingo", min: 22, max: 29, estado: "Soleado" }
    ]
  },

  {
    id: 6,
    name: "Iquique",
    tempActual: 25,
    humidity: 50,
    wind: 9,
    estadoActual: "Soleado",
    icon: "☀️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 20, max: 26, estado: "Soleado" },
      { dia: "Martes", min: 20, max: 27, estado: "Soleado" },
      { dia: "Miércoles", min: 21, max: 28, estado: "Soleado" },
      { dia: "Jueves", min: 20, max: 26, estado: "Nublado" },
      { dia: "Viernes", min: 21, max: 27, estado: "Soleado" },
      { dia: "Sábado", min: 20, max: 26, estado: "Soleado" },
      { dia: "Domingo", min: 21, max: 28, estado: "Soleado" }
    ]
  },

  {
    id: 7,
    name: "Antofagasta",
    tempActual: 23,
    humidity: 55,
    wind: 10,
    estadoActual: "Parcialmente nublado",
    icon: "⛅",
    pronosticoSemanal: [
      { dia: "Lunes", min: 18, max: 24, estado: "Nublado" },
      { dia: "Martes", min: 19, max: 25, estado: "Soleado" },
      { dia: "Miércoles", min: 18, max: 24, estado: "Soleado" },
      { dia: "Jueves", min: 19, max: 25, estado: "Nublado" },
      { dia: "Viernes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Sábado", min: 19, max: 25, estado: "Soleado" },
      { dia: "Domingo", min: 18, max: 24, estado: "Nublado" }
    ]
  },

  {
    id: 8,
    name: "La Serena",
    tempActual: 21,
    humidity: 58,
    wind: 7,
    estadoActual: "Parcialmente nublado",
    icon: "⛅",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 22, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Soleado" },
      { dia: "Miércoles", min: 16, max: 22, estado: "Nublado" },
      { dia: "Jueves", min: 17, max: 23, estado: "Soleado" },
      { dia: "Viernes", min: 16, max: 22, estado: "Nublado" },
      { dia: "Sábado", min: 17, max: 23, estado: "Soleado" },
      { dia: "Domingo", min: 16, max: 22, estado: "Soleado" }
    ]
  },

  {
    id: 9,
    name: "Puerto Montt",
    tempActual: 15,
    humidity: 88,
    wind: 16,
    estadoActual: "Lluvioso",
    icon: "🌧️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 8, max: 15, estado: "Lluvioso" },
      { dia: "Martes", min: 9, max: 16, estado: "Lluvioso" },
      { dia: "Miércoles", min: 8, max: 15, estado: "Nublado" },
      { dia: "Jueves", min: 9, max: 16, estado: "Lluvioso" },
      { dia: "Viernes", min: 8, max: 15, estado: "Lluvioso" },
      { dia: "Sábado", min: 9, max: 16, estado: "Nublado" },
      { dia: "Domingo", min: 8, max: 15, estado: "Soleado" }
    ]
  },

  {
    id: 10,
    name: "Punta Arenas",
    tempActual: 10,
    humidity: 75,
    wind: 25,
    estadoActual: "Ventoso",
    icon: "🌬️",
    pronosticoSemanal: [
      { dia: "Lunes", min: 4, max: 10, estado: "Nublado" },
      { dia: "Martes", min: 3, max: 9, estado: "Lluvioso" },
      { dia: "Miércoles", min: 4, max: 11, estado: "Nublado" },
      { dia: "Jueves", min: 5, max: 10, estado: "Ventoso" },
      { dia: "Viernes", min: 4, max: 9, estado: "Lluvioso" },
      { dia: "Sábado", min: 3, max: 8, estado: "Ventoso" },
      { dia: "Domingo", min: 4, max: 10, estado: "Nublado" }
    ]
  }
];
