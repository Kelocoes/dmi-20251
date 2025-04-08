export const adaptSingleDog = (apiDog) => {
    return {
        name: apiDog.attributes.name,
        x: apiDog.attributes.hypoallergenic
    }
}

export const apiDogsToDog = (dogs) => {
    return dogs.map(adaptSingleDog)
}

export const apiToDogs = (api) => {
    return apiDogsToDog(api.data)
}