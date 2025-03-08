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
            <style>
                div {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                p {
                    margin: 8px 0;
                    font-family: Arial, sans-serif;
                }
                img {
                    max-width: 100%;
                    border-radius: 8px;
                }
            </style>
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