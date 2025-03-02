class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['id', 'name', 'status', 'image'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div>
                <p>ID: ${this.getAttribute('id')}</p>
                <p>Name: ${this.getAttribute('name')}</p>
                <p>Status: ${this.getAttribute('status')}</p>
                <img src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
            </div>
        `;
    }
}

export default Card;