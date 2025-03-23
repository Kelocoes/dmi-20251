// Ejemplo 1: Función que simula una llamada a una API
async function fetchData() {
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => resolve("Datos recibidos de la API"), 2000);
        });
        console.log(response);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

fetchData();

// Ejemplo 2: Uso de async/await con múltiples funciones
async function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Kevin" }), 1000);
    });
}

async function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([`Post 1 del usuario ${userId}`, `Post 2 del usuario ${userId}`]), 1500);
    });
}

async function showUserPosts() {
    try {
        const user = await getUser();
        console.log("Usuario:", user);

        const posts = await getPosts(user.id);
        console.log("Posts del usuario:", posts);
    } catch (error) {
        console.error("Error al obtener los posts:", error);
    }
}

showUserPosts();