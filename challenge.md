# Desafíos de Programación

## El escalador novato

### Problema
Un escalador está comenzando a practicar en un muro de escalada. El muro tiene `n` agarres y el escalador solo puede moverse hacia arriba. Se le da un array `alturas` donde `alturas[i]` representa la altura del agarre `i`. El escalador comienza en el agarre 0 y quiere llegar al agarre `n-1`. Encuentra la altura mínima que debe saltar para llegar al siguiente agarre.

### Ejemplo 1
- **Entrada:** `[2, 5, 4, 6, 8]`
- **Salida:** `3` (Debe saltar una altura de 3 entre los agarres 0 y 1)

### Ejemplo 2
- **Entrada:** `[1, 3, 7, 10]`
- **Salida:** `2` (Debe saltar una altura de 2 entre los agarres 0 y 1)

---

## El jardinero astuto

### Problema
Un jardinero tiene un jardín rectangular representado por una matriz `jardin` de `m x n`. Cada celda contiene la cantidad de flores en esa celda. El jardinero quiere recoger la mayor cantidad de flores posible, comenzando desde la esquina superior izquierda y moviéndose solo hacia abajo o hacia la derecha. Devuelve la cantidad máxima de flores que puede recoger.

### Ejemplo 1
- **Entrada:** `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`
- **Salida:** `29`

### Ejemplo 2
- **Entrada:** `[[2, 3, 1], [1, 5, 1], [4, 2, 2]]`
- **Salida:** `14`

---

## El detective de números

### Problema
Un detective está investigando un caso. Tiene un array de números `pistas` donde cada número representa una pista. El detective cree que el culpable es la persona cuyo número de identificación aparece más veces en las pistas. Encuentra el número de identificación del culpable.

### Ejemplo 1
- **Entrada:** `[1, 2, 3, 2, 1, 2, 4, 2]`
- **Salida:** `2`

### Ejemplo 2
- **Entrada:** `[5, 3, 3, 2, 5, 5, 3]`
- **Salida:** `5` (Aparece 3 veces)

---

## El traductor de idiomas

### Problema
Un traductor necesita crear un programa que traduzca palabras de un idioma a otro. Se le dan dos arrays de cadenas `idioma1` e `idioma2` donde `idioma1[i]` es la palabra en el primer idioma e `idioma2[i]` es su traducción en el segundo idioma. Se le da una palabra en el primer idioma y debe devolver su traducción en el segundo idioma. Si la palabra no está en el primer idioma, devuelve 'No encontrado'.

### Ejemplo 1
- **Entrada:**
  ```json
  {
    "idioma1": ["hola", "mundo", "javascript"],
    "idioma2": ["hello", "world", "javascript"],
    "palabra": "mundo"
  }
  ```
- **Salida:** "world"


### Ejemplo 2
- **Entrada:**
  ```json
  {
    "idioma1": ["perro", "gato", "pájaro"],
    "idioma2": ["dog", "cat", "bird"],
    "palabra": "elefante"
  }
  ```
- **Salida:** "No encontrado"

---

## El organizador de tareas

### Problema
Un organizador de tareas tiene una lista de tareas representadas por un array de números `tareas`. Cada número representa la duración de una tarea. El organizador quiere realizar todas las tareas en el menor tiempo posible. Solo puede realizar una tarea a la vez. Encuentra el tiempo mínimo necesario para completar todas las tareas.

### Ejemplo 1
- **Entrada:** `[2, 5, 1, 8, 3]`
- **Salida:** `19`

### Ejemplo 2
- **Entrada:** `[1, 2, 3]`
- **Salida:** `6`

---

## El analista de datos

### Problema
Un analista de datos tiene un array de números `datos` que representan las ventas de una empresa durante un año. El analista quiere encontrar el mes con las mayores ventas. Devuelve el índice del mes con las mayores ventas (0 para enero, 1 para febrero, etc.).

### Ejemplo 1
- **Entrada:** `[100, 150, 200, 180, 250, 220, 300, 280, 350, 320, 400, 380]`
- **Salida:** `10 (Noviembre)`

### Ejemplo 2
- **Entrada:** `[50, 75, 90, 100, 85, 60, 95, 105, 110, 115, 80, 70]`
- **Salida:** `9 (Octubre)`

---

## El corrector de textos

### Problema
Un corrector de textos necesita un programa que cuente el número de palabras en un texto. Se le da un texto como una cadena y debe devolver el número de palabras en el texto. Las palabras están separadas por espacios.

### Ejemplo 1
- **Entrada:** `"Este es un texto de ejemplo"`
- **Salida:** `5`

### Ejemplo 2
- **Entrada:** `"Hola, ¿cómo estás?"`
- **Salida:** `3`

---

## El generador de contraseñas

### Problema
Un generador de contraseñas necesita crear contraseñas seguras. Se le da una longitud de contraseña y debe generar una contraseña aleatoria que contenga letras mayúsculas, letras minúsculas y números.

### Ejemplo 1
- **Entrada:** `10`
- **Salida:** `"aB3cD3EfGh"` (Una posible contraseña)

### Ejemplo 2
- **Entrada:** `8`
- **Salida:** `"Ab12Cd34"`

---

## El juego de cartas

### Problema
Un juego de cartas tiene un mazo de cartas representadas por un array de números `mazo`. Cada número representa el valor de una carta. Los jugadores deben robar cartas del mazo y sumar sus valores. El jugador con la mayor suma gana. Se le da un mazo y se le pide que simule el juego para dos jugadores. Devuelve la diferencia entre la suma de los valores de las cartas del ganador y el perdedor.

### Ejemplo 1
- **Entrada:** `[5, 2, 8, 3, 9, 1, 7, 4, 6, 10]`
- **Salida:** `15` (El jugador 1 roba 5, 8, 9, 7, 6 = 35. El jugador 2 roba 2, 3, 1, 4, 10 = 20. La diferencia es 35 - 20 = 15)

### Ejemplo 2
- **Entrada:** `[10, 5, 4, 3, 8, 6, 2]`
- **Salida:** `10`

---

## El contador de palabras

## Problema
Un escritor quiere contar cuántas veces aparece cada letra en un texto. Se te da una cadena texto y debes devolver un objeto donde las claves son las letras y los valores son la cantidad de veces que aparece cada letra. Ignora los espacios.

## Ejemplo 1
- **Entrada:** `"hola mundo"`
- **Salida:** `{ h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }`

## Ejemplo 2
- **Entrada:** `"javascript"`
- **Salida:** `{ j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }`


---

## El elevador de números

## Problema
Un matemático está trabajando con una lista de números y quiere elevar cada número al cuadrado. Se te da un array numeros y debes devolver un nuevo array donde cada número esté elevado al cuadrado.

## Ejemplo 1
- **Entrada:** `[1, 2, 3, 4, 5]`
- **Salida:** `[1, 4, 9, 16, 25]`

## Ejemplo 2
- **Entrada:** `[6, 7, 8, 9, 10]`
- **Salida:** `[36, 49, 64, 81, 100]`
