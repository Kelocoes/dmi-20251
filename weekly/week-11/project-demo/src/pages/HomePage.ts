class HomePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const isLogged = localStorage.getItem('isLogged') === 'true';
        const username = localStorage.getItem('username');

        if (!isLogged) {
            window.location.href = '/login';
            return;
        }

        this.render(username);
        this.applyDarkMode();
    }

    applyDarkMode() {
        const darkMode = sessionStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            this.shadowRoot!.querySelector('.container')!.classList.add('dark');
        } else {
            this.shadowRoot!.querySelector('.container')!.classList.remove('dark');
        }
    }

    render(username: string | null) {
        this.shadowRoot!.innerHTML = `
            <style>
                .container {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    transition: background-color 0.3s, color 0.3s;
                }
                .container.dark {
                    background-color: #121212;
                    color: white;
                }
                .logout-button, .dark-mode-button {
                    position: absolute;
                    top: 10px;
                    padding: 10px 20px;
                    background-color: #f44336;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .logout-button {
                    right: 10px;
                }
                .dark-mode-button {
                    left: 10px;
                    background-color: #4CAF50;
                }
                .dark-mode-button:hover {
                    background-color: #388E3C;
                }
                .logout-button:hover {
                    background-color: #d32f2f;
                }
            </style>
            <div class="container">
                <button class="logout-button">Logout</button>
                <button class="dark-mode-button">Toggle Dark Mode</button>
                <div class="welcome">
                    <h1>Bienvenido${username ? `, ${username}` : ''}!</h1>
                </div>
            </div>
        `;

        const logoutButton = this.shadowRoot!.querySelector('.logout-button') as HTMLButtonElement;
        logoutButton.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = '/login';
        });

        const darkModeButton = this.shadowRoot!.querySelector('.dark-mode-button') as HTMLButtonElement;
        darkModeButton.addEventListener('click', () => {
            const darkMode = sessionStorage.getItem('darkMode') === 'true';
            sessionStorage.setItem('darkMode', (!darkMode).toString());
            this.applyDarkMode();
        });
    }
}

export default HomePage;