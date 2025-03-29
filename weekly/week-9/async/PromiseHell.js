// Ejemplo de Promise Hell
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${data} processed`), 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${data} saved`), 1000);
    });
}

// Promise Hell: Anidación excesiva de promesas
fetchData()
    .then((data) => {
        console.log(data);
        processData(data)
            .then((processedData) => {
                console.log(processedData);
                saveData(processedData)
                    .then((savedData) => {
                        console.log(savedData);
                    })
                    .catch((err) => console.error("Error saving data:", err));
            })
            .catch((err) => console.error("Error processing data:", err));
    })
    .catch((err) => console.error("Error fetching data:", err));


// Solucion usar async y await
async function handleData() {
    try {
        const data = await fetchData();
        console.log(data);

        const processedData = await processData(data);
        console.log(processedData);

        const savedData = await saveData(processedData);
        console.log(savedData);
    } catch (err) {
        console.error("Error:", err);
    }
}

handleData();