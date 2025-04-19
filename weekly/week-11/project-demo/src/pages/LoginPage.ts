class LoginPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render () {
        if(!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f0f0f0;
                    margin: 0;
                }
                .card {
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                h1 {
                    color: #333;
                    margin-bottom: 1rem;
                }
                input {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                button {
                    width: 100%;
                    padding: 0.5rem;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1rem;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <h1>Login Page</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button id="login">Login</button>
            </div>
        `;

        this.shadowRoot.querySelector('#login')?.addEventListener('click', () => {
            const username = this.shadowRoot?.querySelector<HTMLInputElement>('input[type="text"]')?.value;
            const password = this.shadowRoot?.querySelector<HTMLInputElement>('input[type="password"]')?.value;

            if (username && password && username === 'admin' && password === 'admin') {
                alert('Login successful!');
                localStorage.setItem('isLogged', 'true');
                localStorage.setItem('username', username);
                window.history.pushState({}, '', '/home');
                window.dispatchEvent(new Event('popstate'));
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
}

export default LoginPage;