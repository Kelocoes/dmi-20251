function fetchData(simulateError = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) {
                reject("Ocurrió un error al obtener los datos.");
            } else {
                resolve("Datos obtenidos exitosamente.");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Éxito:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operación finalizada.");
    });