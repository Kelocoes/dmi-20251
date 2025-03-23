/* 
Estructura de una promesa

resolve: función que se ejecuta cuando la promesa se resuelve satisfactoriamente.
reject: función que se ejecuta cuando la promesa es rechazada.
new Promise((resolve, reject) => {
    flag = true

    if (flag) {
        resolve("La promesa se resolvió con éxito");
    }
    else {
        reject("Hubo un error en la promesa");
    }
}

.then: método que se ejecuta cuando la promesa se resuelve satisfactoriamente.
.catch: método que se ejecuta cuando la promesa es rechazada.
.finally: método que se ejecuta siempre, tanto si la promesa se resuelve como si es rechazada.

Promise.resolve: método que devuelve una promesa resuelta.
Promise.all: método que recibe un arreglo de promesas y devuelve una promesa que se resuelve cuando todas las promesas del arreglo se han resuelto.
Promise.race: método que recibe un arreglo de promesas y devuelve una promesa que se resuelve o rechaza cuando la primera promesa del arreglo se resuelve o rechaza.
Promise.any: método que recibe un arreglo de promesas y devuelve una promesa que se resuelve cuando al menos una de las promesas del arreglo se ha resuelto.

*/


// Ejemplo 1: Promesa resuelta
const promesaResuelta = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta con éxito");
    }, 1000);
});

promesaResuelta
    .then((resultado) => {
        console.log(resultado); // "Promesa resuelta con éxito"
    })
    .catch((error) => {
        console.error(error);
    });

// Ejemplo 2: Promesa rechazada
const promesaRechazada = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Hubo un error en la promesa");
    }, 1000);
});

promesaRechazada
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error(error); // "Hubo un error en la promesa"
    });

// Ejemplo 3: Encadenamiento de promesas
const promesaEncadenada = new Promise((resolve, reject) => {
    resolve(5);
});

promesaEncadenada
    .then((numero) => {
        console.log(`Número inicial: ${numero}`); // "Número inicial: 5"
        return numero * 2;
    })
    .then((doble) => {
        console.log(`Número doblado: ${doble}`); // "Número doblado: 10"
        return doble - 3;
    })
    .then((resultadoFinal) => {
        console.log(`Resultado final: ${resultadoFinal}`); // "Resultado final: 7"
    })
    .catch((error) => {
        console.error(error);
    });