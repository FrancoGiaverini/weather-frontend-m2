# Weather Frontend M5

## Descripción

Weather Frontend M4 es una aplicación web desarrollada con HTML, Bootstrap, SASS y JavaScript ES6+. 

La aplicación permite consultar información climática de distintas ciudades de Chile utilizando datos obtenidos desde una API externa de clima.

Los usuarios pueden visualizar el clima actual de diferentes localidades, acceder al detalle de una ciudad, consultar un pronóstico semanal, estadísticas climáticas y alertas generadas según las condiciones obtenidas.

---

## Funcionalidades

- Visualización de 10 ciudades de Chile.
- Consulta de clima actual mediante API.
- Tarjetas con:
  - Nombre de la ciudad.
  - Temperatura actual.
  - Humedad.
  - Velocidad del viento.
- Vista detalle de cada ciudad.
- Pronóstico semanal obtenido desde API.
- Estadísticas de la semana:
  - Temperatura mínima.
  - Temperatura máxima.
  - Temperatura promedio.
  - Cantidad de días soleados.
  - Cantidad de días lluviosos.
- Alertas climáticas:
  - Semana lluviosa.
  - Alerta de calor.
- Mensajes de carga y errores al consumir la API.
- Diseño responsivo utilizando Bootstrap.

---

## Tecnologías Utilizadas

- HTML
- CSS3
- Bootstrap 
- JavaScript ES6+
- SASS
- Fetch API
- Async/Await

---

## API utilizada

La aplicación utiliza la API de clima:

Open-Meteo API

URL base:

https://api.open-meteo.com/v1/forecast

La aplicación envía las coordenadas (latitud y longitud) de cada ciudad y obtiene:

- Temperatura actual.
- Humedad.
- Velocidad del viento.
- Pronóstico diario de 7 días.
- Códigos climáticos.

---

## Estructura de clases

### ApiClient

Clase encargada de la comunicación con la API externa.

Responsabilidades:

- Realizar peticiones mediante fetch.
- Procesar la respuesta JSON.
- Entregar los datos climáticos a la aplicación.


### WeatherApp

Clase principal de la aplicación.

Responsabilidades:

- Gestionar las ciudades.
- Solicitar datos climáticos.
- Calcular estadísticas.
- Generar alertas climáticas.

---

## Estructura del Proyecto

weather-frontend-m4/

├── index.html  
├── detail.html  
├── README.md  

├── assets/

│
├── css/

│   └── main.css

│
├── js/

│   ├── data.js
│   ├── apiClient.js
│   ├── weatherApp.js
│   ├── home.js
│   └── detail.js

│
└── scss/

    ├── base/
    ├── layout/
    ├── components/
    └── main.scss

---

## Lógica implementada

La información inicial de las ciudades se mantiene en un arreglo de objetos con sus nombres y coordenadas geográficas.

Los datos climáticos n son obtenidos desde la API mediante Fetch y programación asíncrona.

La aplicación utiliza:

- Clases ES6.
- Objetos y arreglos.
- Funciones reutilizables.
- Manipulación dinámica del DOM.
- Promesas mediante async/await.

Las estadísticas se calculan utilizando los datos del pronóstico semanal obtenido desde la API:

- Temperatura mínima, menor valor registrado.
- Temperatura máxima, mayor valor registrado.
- Temperatura promedio calculada con las temperaturas diarias.
- Conteo de días según clima.

Las alertas se generan mediante reglas :

- Si el promedio supera cierto valor → alerta de calor.
- Si existen varios días con lluvia → semana lluviosa.

---

