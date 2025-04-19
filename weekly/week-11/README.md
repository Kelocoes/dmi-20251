# Guía de Uso: `localStorage` y `sessionStorage`

## Propósitos Principales

### `localStorage`
- **Propósito**: Almacenar datos de manera persistente en el navegador, incluso después de cerrar la pestaña o el navegador.
- **Duración**: Los datos permanecen hasta que se eliminen manualmente o mediante código.
- **Uso típico**: Guardar configuraciones de usuario, temas, o datos que deben persistir entre sesiones.

### `sessionStorage`
- **Propósito**: Almacenar datos temporalmente durante la sesión del navegador.
- **Duración**: Los datos se eliminan al cerrar la pestaña o ventana del navegador.
- **Uso típico**: Guardar datos específicos de la sesión, como formularios temporales o estados de navegación.

---

## Métodos Comunes

Ambos objetos (`localStorage` y `sessionStorage`) comparten los mismos métodos:

### 1. **Guardar datos**
```javascript
localStorage.setItem('clave', 'valor');
sessionStorage.setItem('clave', 'valor');
```

### 2. **Obtener datos**
```javascript
const valor = localStorage.getItem('clave');
const valor = sessionStorage.getItem('clave');
```

### 3. **Eliminar datos**
```javascript
localStorage.removeItem('clave');
sessionStorage.removeItem('clave');
```

### 4. **Limpiar todo**
```javascript
localStorage.clear();
sessionStorage.clear();
```

---

## Ejemplo Práctico

### Guardar y recuperar datos con `localStorage`
```javascript
// Guardar un dato
localStorage.setItem('usuario', 'Kevin');

// Recuperar el dato
const usuario = localStorage.getItem('usuario');
console.log(usuario); // Output: Kevin
```

### Guardar y recuperar datos con `sessionStorage`
```javascript
// Guardar un dato
sessionStorage.setItem('token', 'abc123');

// Recuperar el dato
const token = sessionStorage.getItem('token');
console.log(token); // Output: abc123
```

---

## Consideraciones
- **Tamaño máximo**: Ambos tienen un límite de almacenamiento de aproximadamente 5MB por dominio.
- **Seguridad**: No almacenar información sensible como contraseñas, ya que los datos no están cifrados.
- **Compatibilidad**: Ambos son compatibles con la mayoría de los navegadores modernos.
