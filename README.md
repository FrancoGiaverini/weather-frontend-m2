# Weather Frontend M3

## Descripción

Weather Frontend M3 es una app desarrollada como proyecto  utilizando HTML5, Bootstrap y JavaScript para el proyecto final del modulo 3. La aplicación permite ver información climática de distintas localidades de Chile.

Los usuarios pueden consultar el clima de cada localidad y acceder a una vista con información adicional como humedad, velocidad del viento y pronóstico semanal.

---

## Funcionalidades

* Visualización de 10 localidades de Chile.
* Tarjetas informativas con:

  * Nombre de la ciudad.
  * Temperatura actual.
  * Estado del clima.
  * Icono representativo.
* Vista de detalle para cada localidad.
* Información ampliada:

  * Temperatura.
  * Humedad.
  * Velocidad del viento.
* Pronóstico semanal.
* Diseño responsivo para dispositivos móviles y escritorio.
* Navegación mediante Navbar.


## Tecnologías Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* SASS

## Estructura Sass

base/
Variables globales.

layout/
Estructura principal de la aplicación.

components/
Componentes reutilizables como navbar, cards y footer.

## Metodología de estilos

Se utilizó la metodología BEM  para organizar y mantener los estilos CSS de forma consistente.

## Estructura del Proyecto

weather-frontend-m3/
│
├── index.html
├── detail.html
├── README.md
│
├── assets/
│   │
│   ├── css/
│   │   └── main.css
│   │
│   ├── js/
│   │   ├── data.js
│   │   ├── home.js
│   │   └── detail.js
│   │
│   └── scss/
│       │
│       ├── base/
│       │   └── _variables.scss
│       │
│       ├── layout/
│       │   └── _layout.scss
│       │
│       ├── components/
│       │   ├── _navbar.scss
│       │   ├── _place-card.scss
│       │   └── _footer.scss
│       │
│       └── main.scss

## Lógica implementada

La información climática se almacena en un arreglo de objetos (`cities`), donde cada ciudad contiene sus datos actuales y un pronóstico semanal.

La aplicación utiliza funciones para:

- Buscar una ciudad mediante su identificador.
- Calcular la temperatura mínima, máxima y promedio.
- Contar la cantidad de días por tipo de clima.
- Generar automáticamente un resumen semanal.
- Actualizar dinámicamente el contenido del DOM.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/FrancoGiaverini/weather-frontend-m2.git
```

2. Abrir la carpeta del proyecto.

3. Ejecutar `index.html` utilizando Live Server.

---

## Repositorio GitHub

https://github.com/FrancoGiaverini/weather-frontend-m2.git

## Autor

Franco Giaverini
Proyecto desarrollado para el Módulo 2.
