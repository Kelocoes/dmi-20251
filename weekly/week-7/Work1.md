## Ejercicio 1: Tipado Básico
### Descripción:
Tienes una función en JavaScript que suma dos números. Cámbiala a TypeScript agregando los tipos adecuados para los parámetros y el retorno.

### Código en JavaScript:
```javascript
function suma(a, b) {
    return a + b;
}
```

### Requisitos:
- Tipar los parámetros como `number`.
- Tipar el retorno de la función como `number`.

## Ejercicio 2: Definiendo Interfaces
### Descripción:
Tienes un objeto que representa a una persona, con propiedades de nombre y edad. Cámbialo a TypeScript creando una interfaz que defina la estructura del objeto.

### Código en JavaScript:
```javascript
const persona = {
    nombre: "Juan",
    edad: 25
};

function saludar(persona) {
    return `Hola, ${persona.nombre}`;
}
```

### Requisitos:
- Crea una interfaz llamada `Persona` que defina las propiedades `nombre` (string) y `edad` (number).
- Aplica la interfaz `Persona` a la variable `persona` y al parámetro de la función `saludar`.

## Ejercicio 3: Funciones Genéricas
### Descripción:
Tienes una función que intercambia dos valores y funciona bien con cualquier tipo de dato. Cámbiala a TypeScript usando una función genérica.

### Código en JavaScript:
```javascript
function intercambiar(val1, val2) {
    return [val2, val1];
}
```

### Requisitos:
- Usa generics para tipar la función de manera que acepte cualquier tipo de dato y retorne una tupla con los valores intercambiados.

## Ejercicio 4: Clases y Herencia
### Descripción:
Tienes una clase en JavaScript que representa un Animal. Extiende esa clase para crear una subclase `Perro`, y cámbiala a TypeScript con los tipos apropiados.

### Código en JavaScript:
```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Ladrido");
    }
}

const miPerro = new Perro("Fido");
miPerro.hacerSonido();
```

### Requisitos:
- Define la clase `Animal` con una propiedad `nombre` de tipo string.
- Define la subclase `Perro` que extienda de `Animal`.
- Asegúrate de tipar adecuadamente tanto los parámetros del constructor como los métodos.

## Ejercicio 5: Tipos de Unión y Alias
### Descripción:
Tienes una función que retorna una respuesta basada en el estado de una operación. Usa tipos de unión y alias para definir los posibles estados y mensajes de error.

### Código en JavaScript:
```javascript
function obtenerEstado(codigo) {
    if (codigo === 200) {
        return "Éxito";
    } else if (codigo === 404) {
        return "No encontrado";
    } else {
        return "Error desconocido";
    }
}
```

### Requisitos:
- Crea un alias de tipo `Estado` que permita los valores: "Éxito", "No encontrado" y "Error desconocido".
- Asegura que la función `obtenerEstado` retorne uno de esos tres valores posibles utilizando tipos de unión.
