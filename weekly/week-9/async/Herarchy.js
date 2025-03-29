console.log('1. Código sincrónico'); // Se ejecuta primero

setTimeout(() => {
    console.log('5. Callback de setTimeout'); // Task Queue
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promesa resuelta'); // Microtask Queue
});

console.log('2. Más código sincrónico'); // Se ejecuta después del primero