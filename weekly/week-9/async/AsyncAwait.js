// Creación de una promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia a false para probar el caso de error
            if (exito) {
                resolve("Datos obtenidos correctamente");
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Función con async y await
async function usarDatos() {
    try {
        const resultado = await obtenerDatos();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

// Llamada a la función
usarDatos();