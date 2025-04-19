export const getApiDogs = async () => {
    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds")
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}