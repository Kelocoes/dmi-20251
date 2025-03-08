# Teoría de TypeScript

### ¿Qué es?
TypeScript es un lenguaje de programación que extiende JavaScript añadiendo **tipos estáticos**. Esto permite que el código sea más predecible y que se detecten errores antes de tiempo, durante el desarrollo.

### Ejemplo:
```typescript
let nombre: string = "Juan";
// nombre = 123; // Esto causará un error porque 'nombre' debe ser un string.
```

### Tipos
TypeScript introduce tipos que te permiten definir qué tipo de valor debería tener una variable, parámetro o función. Algunos de los tipos básicos son:

- `string`: Para cadenas de texto.
- `number`: Para números (enteros o decimales).
- `boolean`: Para valores true/false.
- `array`: Para listas de valores.

### Ejemplo:
```typescript
let edad: number = 25;
let esEstudiante: boolean = true;
let nombres: string[] = ["Juan", "María", "Carlos"];
```

### Uniones
Las **uniones** (`union types`) permiten que una variable tenga más de un tipo. Es útil cuando una variable puede aceptar varios tipos de datos.

### Ejemplo:
```typescript
let id: number | string;
id = 123; // Válido
id = "ABC123"; // También válido
```

### Interfaces
Las **interfaces** se usan para definir la estructura que deben seguir los objetos. Son muy útiles para trabajar con objetos complejos, asegurándose de que siempre tengan los mismos campos y tipos.

### Ejemplo:
```typescript
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante?: boolean; // El signo de interrogación indica que es opcional
}

const persona: Persona = {
    nombre: "Ana",
    edad: 30
};
```

### Signatures (Firmas)
Las **firmas de funciones** o **signatures** te permiten definir el tipo de entrada y salida de una función. Esto asegura que una función solo reciba y retorne los tipos correctos.

### Ejemplo:
```typescript
function suma(a: number, b: number): number {
    return a + b;
}

suma(10, 20); // Válido
// suma(10, "20"); // Error: el segundo argumento debe ser un número
```

### Enums
Los **enums** te permiten definir un conjunto de valores predefinidos, lo que facilita el uso de opciones fijas en lugar de strings o números dispersos por el código.

### Ejemplo:
```typescript
enum Colores {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Colores = Colores.Rojo;
```

### Diferencia entre `type` e `interface`

En TypeScript, tanto `type` como `interface` se utilizan para definir tipos.

#### `type`
- Permite definir tipos primitivos, uniones, intersecciones y tipos complejos.
- Puede utilizarse para crear alias de tipos.
- No se puede extender ni implementar.

#### `interface`
- Se utiliza principalmente para definir la estructura de los objetos.
- Puede extender otras interfaces y ser extendida por otras interfaces.
- Puede ser implementada por clases.

### ¿Por qué `type` es mejor?
- **Flexibilidad**: `type` permite definir tipos más complejos y combinaciones de tipos.
- **Alias**: Puedes crear alias para cualquier tipo, lo que puede hacer el código más legible.
- **Uniones e Intersecciones**: Facilita la creación de tipos que pueden ser una combinación de otros tipos.

### Ejemplo de `type`:
```typescript
type ID = number | string;
type Persona = {
    nombre: string;
    edad: number;
    esEstudiante?: boolean;
};
```

### Ejemplo de `interface`:
```typescript
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante?: boolean;
}
```
