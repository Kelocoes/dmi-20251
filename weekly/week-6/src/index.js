import Card from './components/Card/Card.js';
import ListRickCharsComponent from './layouts/ListRickCharsComponent.js';

// console.log('Custom element defined');
customElements.define('rick-list', ListRickCharsComponent);
customElements.define('custom-card', Card);

document.querySelector('my-first-component').setAttribute('example-attribute', 'Hello World');
document.querySelector('my-first-component').removeAttribute('example-attribute');
