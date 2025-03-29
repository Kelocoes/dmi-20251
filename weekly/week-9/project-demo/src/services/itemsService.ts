import axios from 'axios';

function getItemsUsingFetch() {
    return fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(data => data);
}

function getItemsUsingAxios() {
    return axios.get('http://localhost:3000/rick')
        .then(response => response.data)
        .catch(error => console.error(error));
}


export { getItemsUsingFetch, getItemsUsingAxios };