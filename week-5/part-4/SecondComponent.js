class SecondComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            header {
                background-color: cyan;
                padding: 10px;
                text-align: center;
            }
            button {
                margin: 5px;
                padding: 10px;
                border: none;
                cursor: pointer;
            }
            </style>
            <header>
            <button id="home">Home</button>
            <button id="about">About Me</button>
            <button id="contact">Contact</button>
            </header>
        `;

        this.shadowRoot.querySelector('#home').onclick = () => console.log('Home button clicked');
        this.shadowRoot.querySelector('#about').onclick = () => console.log('About Me button clicked');
        this.shadowRoot.querySelector('#contact').onclick = () => console.log('Contact button clicked');
    }
}

export default SecondComponent;