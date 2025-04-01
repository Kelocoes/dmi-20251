import { logDePrueba } from "./utils/prueba";
import { getItemsUsingAxios, getItemsUsingFetch } from "./services/itemsService";

console.log('Hello, World!');
logDePrueba();

getItemsUsingFetch().then(data => console.log(data));
getItemsUsingAxios().then(data => console.log(data));