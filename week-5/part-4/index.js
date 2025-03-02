import Card from "./Card.js";
import ListRickCharsComponent from "./ListRickCharsComponent.js";
import MyFirstComponent from "./MyFirstComponent.js";
import SecondComponent from "./SecondComponent.js";

console.log('Custom element defined');
customElements.define('my-first-component', MyFirstComponent);
customElements.define('second-component', SecondComponent);
customElements.define('rick-list', ListRickCharsComponent);
customElements.define('custom-card', Card);

document.querySelector('my-first-component').setAttribute('example-attribute', 'Hello World');
document.querySelector('my-first-component').removeAttribute('example-attribute');


// setTimeout(() => {
//     console.log('Element added to the DOM', document.querySelector('my-first-component'));
//     document.querySelector('my-first-component').remove();
// }, 5000)