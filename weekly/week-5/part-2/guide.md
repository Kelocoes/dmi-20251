# Selección de Elementos

- `document.getElementById(id)`: Selecciona un elemento por su id.
- `document.getElementsByClassName(className)`: Selecciona todos los elementos que tienen una clase específica.
- `document.getElementsByTagName(tagName)`: Selecciona todos los elementos con un nombre de etiqueta específica.
- `document.querySelector(selector)`: Selecciona el primer elemento que coincide con el selector CSS dado.
- `document.querySelectorAll(selector)`: Selecciona todos los elementos que coinciden con el selector CSS dado.

# Manipulación de Elementos

- `element.innerHTML`: Obtiene o establece el contenido HTML de un elemento.
- `element.textContent`: Obtiene o establece el contenido de texto de un elemento.
- `element.setAttribute(attr, value)`: Establece el valor de un atributo en un elemento.
- `element.getAttribute(attr)`: Obtiene el valor de un atributo de un elemento.
- `element.removeAttribute(attr)`: Elimina un atributo de un elemento.
- `element.style.property`: Modifica el estilo CSS de un elemento (por ejemplo, `element.style.color = "red"`).
- `element.classList.add(class)`: Añade una clase a un elemento.
- `element.classList.remove(class)`: Elimina una clase de un elemento.
- `element.classList.toggle(class)`: Añade o elimina una clase de un elemento, dependiendo de si ya está presente.
- `element.classList.contains(class)`: Verifica si un elemento tiene una clase específica.

# Creación y Eliminación de Elementos

- `document.createElement(tagName)`: Crea un nuevo elemento HTML.
- `element.appendChild(child)`: Añade un elemento hijo al final de otro elemento.
- `element.insertBefore(newElement, referenceElement)`: Inserta un nuevo elemento antes de otro.
- `element.removeChild(child)`: Elimina un hijo de un elemento.
- `element.replaceChild(newChild, oldChild)`: Reemplaza un hijo de un elemento con otro.
- `element.insertAdjacentHTML(position, text)`: Inserta texto HTML en una posición específica (puede ser "beforebegin", "afterbegin", "beforeend", "afterend").

# Eventos

- `element.addEventListener(event, function)`: Añade un listener de eventos a un elemento (por ejemplo, click, mouseover, keydown, etc.).
- `element.removeEventListener(event, function)`: Elimina un listener de eventos de un elemento.
- `event.preventDefault()`: Previene el comportamiento predeterminado de un evento (como el envío de un formulario).
- `event.stopPropagation()`: Evita que el evento se propague a otros elementos.

# Navegación entre Elementos

- `element.parentNode`: Obtiene el elemento padre.
- `element.childNodes`: Obtiene una lista de los nodos hijos (incluye nodos de texto).
- `element.children`: Obtiene una lista de los hijos de tipo elemento.
- `element.firstChild`: Obtiene el primer hijo (incluye nodos de texto).
- `element.firstElementChild`: Obtiene el primer hijo de tipo elemento.
- `element.lastChild`: Obtiene el último hijo (incluye nodos de texto).
- `element.lastElementChild`: Obtiene el último hijo de tipo elemento.
- `element.nextSibling`: Obtiene el siguiente nodo en el mismo nivel.
- `element.previousSibling`: Obtiene el nodo anterior en el mismo nivel.
- `element.nextElementSibling`: Obtiene el siguiente elemento en el mismo nivel.
- `element.previousElementSibling`: Obtiene el elemento anterior en el mismo nivel.

# Dimensiones y Posición

- `element.offsetWidth` / `element.offsetHeight`: Obtiene el ancho/alto del elemento, incluyendo bordes y padding.
- `element.clientWidth` / `element.clientHeight`: Obtiene el ancho/alto del elemento sin incluir el scroll ni los bordes.
- `element.scrollWidth` / `element.scrollHeight`: Obtiene el ancho/alto total del contenido, incluyendo la parte no visible debido al scroll.
- `element.offsetTop` / `element.offsetLeft`: Obtiene la posición superior/izquierda del elemento relativo a su elemento offset padre.
- `element.scrollTop` / `element.scrollLeft`: Obtiene o establece la posición del scroll.

# Formularios

- `element.value`: Obtiene o establece el valor de un campo de entrada o textarea.
- `element.checked`: Verifica si un checkbox o radio button está seleccionado.
- `form.submit()`: Envía un formulario.
- `form.reset()`: Resetea los valores de un formulario.