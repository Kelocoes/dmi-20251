class ResponsivePage extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM to the custom element
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                    padding: 16px;
                    box-sizing: border-box;
                }

                .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 16px;
                }

                .item {
                    background-color: #f0f0f0;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 600px) {
                    .item {
                        font-size: 14px;
                    }
                }

                @media (min-width: 601px) {
                    .item {
                        font-size: 16px;
                    }
                }
            </style>
            <div class="container">
                ${Array.from({ length: 10 }, (_, i) => `<div class="item">Item ${i + 1}</div>`).join('')}
            </div>
            <div class="responsive-element">
                <p>This is a responsive element that adjusts its layout based on the screen size.</p>
            </div>
        `;

    }

    connectedCallback() {
        window.addEventListener('resize', this.updateBackgroundColor);
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this.updateBackgroundColor);
    }

    updateBackgroundColor = () =>  {
        const responsiveElement = this.shadowRoot?.querySelector<HTMLDivElement>('.responsive-element');
        if (responsiveElement) {
            console.log('Window width:', window.innerWidth);
            responsiveElement.style.backgroundColor = window.innerWidth > 1000 ? 'blue' : 'red';
        }
    }
}

export default ResponsivePage;