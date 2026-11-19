# Agencia de Viajes - Solis Carolina (Sumativa 2)

**Sitio web en vivo (GitHub Pages):** [https://carosolis45.github.io/viajes-solis-carolina-DRY7123/](https://carosolis45.github.io/viajes-solis-carolina-DRY7123/)

**Enlace al repositorio:** [https://github.com/carosolis45/viajes-solis-carolina-DRY7123](https://github.com/carosolis45/viajes-solis-carolina-DRY7123)

Este es un proyecto desarrollado para la asignatura **Frontend II** (Sigla: DRY7123), correspondiente a la Sumativa 2.

## Descripción
Aplicación web para una agencia de viajes que permite explorar destinos y consultar alternativas de vuelos y hoteles. El proyecto integra una **API REST Mock** para el listado de destinos y una **API GraphQL Mock** para la consulta de vuelos y hoteles según el destino seleccionado.

## Funcionalidades
* **API REST Mock:** Listado de 4 destinos (París, Tokio, Río de Janeiro y Nueva York) con información del país y actividades populares.
* **API GraphQL Mock:** Consulta dinámica de vuelos y hoteles según el destino seleccionado, mostrando precios, fechas y disponibilidad.
* **React Router:** Navegación fluida entre el catálogo de destinos y el detalle, incluyendo una ruta comodín (404) para páginas no encontradas.
* **Manejo de estado:** Uso de `useState` y `useEffect` para la carga de datos, manejo de errores con `try/catch/finally`, botón de reintento y control de respuestas atrasadas.
* **Diseño responsivo:** Estilizado con **Tailwind CSS** en modo oscuro, adaptable a distintos dispositivos.
* **Modularidad:** Separación de la lógica de acceso a datos (`services/`) de los componentes de presentación (`components/` y `pages/`).

## Tecnologías utilizadas
* React
* React Router
* Tailwind CSS
* Vite

## Instalación y ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/carosolis45/viajes-solis-carolina-DRY7123.git
