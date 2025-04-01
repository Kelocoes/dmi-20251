// Ejemplo 1: Callback en una función de suma
function suma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

suma(5, 3, function(resultado) {
    console.log("El resultado de la suma es:", resultado);
});

// Ejemplo 2: Callback con setTimeout
function mensajeConRetraso(mensaje, callback) {
    setTimeout(function() {
        console.log(mensaje);
        callback();
    }, 2000);
}

mensajeConRetraso("Hola, este mensaje tiene un retraso de 2 segundos", function() {
    console.log("El mensaje ha sido mostrado.");
});

// Ejemplo 3: Callback para filtrar un arreglo
function filtrarArreglo(arreglo, callback) {
    const resultado = arreglo.filter(callback);
    console.log("Arreglo filtrado:", resultado);
}

const numeros = [1, 2, 3, 4, 5, 6];
filtrarArreglo(numeros, function(numero) {
    return numero % 2 === 0; // Filtrar números pares
});