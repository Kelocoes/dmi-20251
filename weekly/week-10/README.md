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

## Flux concept

## Single Source of Truth 