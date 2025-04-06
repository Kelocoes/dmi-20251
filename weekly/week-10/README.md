# Guía semana 10

## A11Y
### Accesibilidad en JavaScript y HTML

La accesibilidad (A11Y) es un aspecto importante que deberán tener en cuenta en el desarrollo web, este aspecto busca que las aplicaciones sean utilizables por personas con discapacidades. En HTML y JavaScript (Y por ende Typescript), podemos mejorar la accesibilidad utilizando atributos ARIA (Accessible Rich Internet Applications) y buenas prácticas.

#### Uso de ARIA
ARIA proporciona atributos que ayudan a describir elementos de la interfaz para tecnologías de asistencia como lectores de pantalla.

**Ejemplo:**
```html
<button aria-label="Cerrar ventana">X</button>
```
En este ejemplo, el atributo `aria-label` proporciona una descripción accesible para el botón.

#### Roles ARIA
Los roles ARIA definen el propósito de un elemento en la interfaz.

**Ejemplo:**
```html
<div role="alert">Este es un mensaje importante.</div>
```
El rol `alert` indica que este contenido debe ser anunciado inmediatamente por el lector de pantalla.

#### Gestión del foco con JavaScript
Podemos usar JavaScript para manejar el foco y mejorar la navegación.

**Ejemplo:**
```javascript
document.getElementById('boton').focus();
```
Esto asegura que el foco se mueva al botón con el ID `boton`.

#### Navegación accesible
Asegúrate de que los elementos interactivos sean accesibles mediante teclado.

**Ejemplo:**
```html
<a href="#" role="button" tabindex="0" onclick="alert('Acción ejecutada')">Haz clic aquí</a>
```
El atributo `tabindex="0"` permite que el enlace sea navegable con el teclado.

#### Contraste y etiquetas
Asegúrate de que los textos tengan suficiente contraste y utiliza etiquetas descriptivas.

**Ejemplo:**
```html
<label for="email">Correo electrónico:</label>
<input type="email" id="email" name="email" aria-required="true">
```
El atributo `aria-required` indica que este campo es obligatorio.

**Enlaces relevantes:**
- [Guía de accesibilidad de MDN](https://developer.mozilla.org/es/docs/Learn/Accessibility)
- [Bad Accessibility Practices](https://www.accessibility-developer-guide.com/knowledge/aria/bad-practices/)

## Responsive


### Diseño Responsive

El diseño responsive permite que las aplicaciones web se adapten a diferentes tamaños de pantalla y dispositivos, mejorando la experiencia del usuario. Esto se logra utilizando técnicas como media queries, unidades relativas y diseño flexible.

#### Uso de Media Queries
Las media queries permiten aplicar estilos CSS específicos según el tamaño de la pantalla.

**Ejemplo:**
```css
/* Estilo para pantallas pequeñas */
@media (max-width: 600px) {
    body {
        font-size: 14px;
    }
}

/* Estilo para pantallas medianas */
@media (min-width: 601px) and (max-width: 1024px) {
    body {
        font-size: 16px;
    }
}

/* Estilo para pantallas grandes */
@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }
}
```

#### Diseño Flexible con Unidades Relativas
Utiliza unidades relativas como `%`, `em`, `rem` o `vw/vh` para que los elementos se ajusten dinámicamente.

**Ejemplo:**
```css
.container {
    width: 80%; /* Se ajusta al 80% del ancho del contenedor padre */
    padding: 2rem; /* Espaciado relativo al tamaño de fuente raíz, 2 rem es 32px si el tamaño de fuente raíz es 16px */
}
```

#### Uso de Flexbox y Grid
Flexbox y CSS Grid son herramientas poderosas para crear diseños responsivos.

**Ejemplo con Flexbox:**
```css
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.item {
    flex: 1 1 300px; /* Se ajusta dinámicamente con un tamaño mínimo de 300px */
}
```

**Ejemplo con Grid:**
```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}
```

#### Imágenes Responsivas
Revisa que las imágenes se adapten al tamaño del contenedor.

**Ejemplo:**
```css
img {
    max-width: 100%;
    height: auto;
}
```

**Enlaces relevantes para responsive:**

- [Guía de diseño responsive de MDN](https://www.w3schools.com/css/css3_mediaqueries.asp)
- [Tailwind](https://tailwindcss.com)
- [FlexBox CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Media query CSS Tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/)


## Flux concept

- [Flux Guía](https://carlosazaustre.es/como-funciona-flux)
- [Github ](https://github.com/LeiderCalvo/DCA/tree/15_singleSourceOfTruth)

## Single Source of Truth 