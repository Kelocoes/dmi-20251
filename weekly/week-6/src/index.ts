import Card from './components/Card/Card.ts';
import RickList from './layouts/RickList/RickList.ts';

// console.log('Custom element defined');
customElements.define('rick-list', RickList);
customElements.define('custom-card', Card);