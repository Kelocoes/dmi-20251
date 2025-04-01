# Ejercicios de JavaScript: Promesas, Callbacks y setTimeout

## Ejercicio 1
Escribe una promesa que resuelva correctamente después de 2 segundos. ¿Está bien escrita esta promesa?
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 2000);
});
```

## Ejercicio 2
Corrige el siguiente código de una promesa mal escrita:
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta")
});
```

## Ejercicio 3
¿Qué se ejecuta primero y en qué orden?
```javascript
console.log("Inicio");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promesa");
});
console.log("Fin");
```

## Ejercicio 4
¿Está bien escrito este callback? Si no, corrígelo.
```javascript
function processData(data, callback) {
    setTimeout(() => {
        callback(data * 2);
    }, 1000);
}

processData(5, (result) => {
    console.log(result);
});
```

## Ejercicio 5
¿Qué imprime este código?
```javascript
setTimeout(() => {
    console.log("A");
}, 1000);

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

## Ejercicio 6
Escribe una función que combine `setTimeout` y una promesa para esperar 3 segundos antes de resolver.

## Ejercicio 7
¿Qué sucede si llamamos a `resolve` y `reject` en la misma promesa?
```javascript
const myPromise = new Promise((resolve, reject) => {
    resolve("Resuelto");
    reject("Rechazado");
});
myPromise.then(console.log).catch(console.error);
```

## Ejercicio 8
Corrige el siguiente código para que funcione correctamente con `async/await`:
```javascript
async function fetchData() {
    const data = await fetch("https://api.example.com/data");
    console.log(data);
}
```

## Ejercicio 9
¿Qué imprime este código?
```javascript
setTimeout(() => {
    console.log("1");
}, 0);

Promise.resolve().then(() => {
    console.log("2");
}).then(() => {
    console.log("3");
});

console.log("4");
```

## Ejercicio 10
Escribe una función que reciba un array de números y use promesas para calcular la suma de los números después de 2 segundos.

---