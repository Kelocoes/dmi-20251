class Noticia extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['id', 'title', 'description'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: #f1f1f1;
                    border: 1px solid #e5e5e5;
                    border-radius: 5px;
                    margin: 10px;
                    padding: 10px;
                }
            </style>
            <div>
                <p>ID: ${this.getAttribute('id')}</p>
                <p>Name: ${this.getAttribute('title')}</p>
                <p>Status: ${this.getAttribute('description')}</p>
            </div>
        `;
    }
}

export default Card;