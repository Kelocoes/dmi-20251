### Laboratorio 2: Creación de Página Web con Web Components

#### 1. Objetivos
- Implementar una página web estática utilizando Web Components.
- Modularizar la estructura de la página a través de la creación de componentes reutilizables.
- Diseñar y crear componentes Card y otros estructurales a partir de `HTMLElement`.

#### 2. Descripción del Laboratorio
El objetivo de este laboratorio es que los estudiantes creen una página web estática, tomando como referencia el diseño proporcionado en el siguiente enlace: [Plantilla Blog - Material UI](https://mui.com/material-ui/getting-started/templates/blog/).

La página debe componerse mediante Web Components, prestando especial atención a la reutilización y modificabilidad de los elementos. Se recomienda una organización modular que facilite futuras modificaciones.

##### Componentes Requeridos
A continuación, se especifican los componentes mínimos que deben ser implementados:

<sub><i>*Hint*: Desde el blog hacia abajo.</i></sub>
- **Header**: Contiene el título principal de la página y un menú de navegación.
- **Búsqueda**: Incluye un campo de texto y un botón que permite realizar búsquedas.
- **Card**: Muestra la información completa de una noticia.
- **News**: Resumen de una noticia que será listado en la sección de "Latest".
- **Dial**: Un elemento interactivo tipo dial que permite la selección de la página deseada.

##### Recomendaciones:

Aunque el laboratorio pide estos componentes mínimos, se recomienda generar otros componentes más específicos y reutilizables según sea necesario para mejorar la estructura del código y facilitar el mantenimiento.

#### 3. Entrega
El proyecto deberá ser subido a un repositorio de GitHub, manteniendo las convenciones de código y gestión de repositorios vistas en clase. Es importante que el trabajo colaborativo de los estudiantes sea equitativo y que cada contribución sea visible en el historial del repositorio.

El proyecto debe ser organizado  en carpetas modulares como se ha visto en clase, ejemplo de esto es el siguiente:

```plaintext
lab2-web-components
│   README.md
|   index.html
|   package.json
|   package-lock.json
|   src/
    |  index.js
    |  components/
        |   card/
            |   card.js
            |   card.css (optional)
        |   dial/
            |   dial.js
            |   dial.css (optional)
        |   header/
            |   header.js
            |   header.css (optional)
        |   news/
            |   news.js
            |   news.css (optional)
        |   search/
            |   search.js
            |   search.css (optional)
    |   utils/ (optional)
```

#### 4. Requisitos Específicos
- El proyecto debe ser entregado en la fecha y hora límite `(14/03/2025 5:00 p.m.)`  
Puntos clave para la entrega:
- El código debe ser limpio y organizado.
- Uso correcto de Web Components y su encapsulamiento.
- Modularización adecuada.
- Cumplimiento de las convenciones de uso de Git.