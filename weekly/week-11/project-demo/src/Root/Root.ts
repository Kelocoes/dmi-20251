class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

    connectedCallback() {
        this.render();
        window.addEventListener('popstate', this.handleRouteChange);
        this.handleRouteChange();
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', this.handleRouteChange);
    }

    handleRouteChange() {
        if (!this.shadowRoot) return;
        const path = window.location.pathname;
        const root = this.shadowRoot.querySelector('#root');
        if (!root) return;
        root.innerHTML = '';

        switch (path) {
            case '/flux':
                root.innerHTML = `
                    <custom-element-a></custom-element-a>
                    <custom-element-b></custom-element-b>
                    <custom-element-c></custom-element-c>
                `;
                break;
            case '/login':
                root.innerHTML = `<login-page></login-page>`;
                break;
            case '/home':
                root.innerHTML = `<home-page></home-page>`;
                break;
            default:
                root.innerHTML = `<h1>404 - Página no encontrada</h1>`;
                break;
        }
    }

    render() {
        if (!this.shadowRoot) return;
            
        this.shadowRoot.innerHTML = `
            <div id="root"></div>
        `;
    }
}

export default Root;
