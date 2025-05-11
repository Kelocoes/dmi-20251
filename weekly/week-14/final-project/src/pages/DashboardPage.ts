import { State, store } from "../flux/Store";

class DashboardPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        store.subscribe((state: State) => {this.render(state)});
    }

    connectedCallback() {
        this.render();
    }

    render(state = store.getState()) {
        if (!state || !state.isAuthenticated) {
            this.shadowRoot!.innerHTML = `<h1>Acceso denegado</h1>`;
            return;
        }
        if (!this.shadowRoot) return;
        console.log('Holi');
        this.shadowRoot.innerHTML = `
            <style>
                #dashboard-page {
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                }
                h1 {
                    color: #333;
                }
            </style>
            <div id="dashboard-page">
                <slot></slot>
            </div>
        `;
    }
}

export default DashboardPage;