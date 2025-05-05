import { store } from '../flux/Store';

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        store.load();
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
            .container {
                display: flex;
                align-items: center;
            }
            .divider {
                width: 1px;
                background-color: #ccc;
                margin: 0 10px;
            }
            </style>
            <div class="container">
            <firebase-component></firebase-component>
            <div class="divider"></div>
            <supabase-component></supabase-component>
            </div>
        `;
    }
}

export default Root;