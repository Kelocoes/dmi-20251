class Landing extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Set innerHTML for the header with a UL and 3 options
        shadow.innerHTML = `
            <style>
                header {
                    background-color: #f4f4f4;
                    padding: 10px;
                    text-align: center;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    justify-content: space-around;
                }

                li {
                    cursor: pointer;
                    font-weight: bold;
                }

                .collapsible-container {
                    margin: 20px;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    text-align: left;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-bottom: 5px;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #0056b3;
                }

                p {
                    margin: 0;
                    padding: 10px;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    display: none;
                }
            </style>
            <header>
                <ul role="navigation">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </header>
            <div class="collapsible-container">
                <button
                    aria-expanded="false"
                    aria-controls="content1"
                >
                    Button 1
                </button>
                <p id="content1" role="region">
                    Text for Button 1
                </p>
                <button
                    aria-expanded="false"
                    aria-controls="content2"
                >
                    Button 2
                </button>
                <p id="content2" role="region">
                    Text for Button 2
                </p>
                <button
                    aria-expanded="false"
                    aria-controls="content3"
                >
                    Button 3
                </button>
                <p id="content3" role="region">
                    Text for Button 3
                </p>
            </div>
        `;

        const buttons = shadow.querySelectorAll('button');
        const paragraphs = shadow.querySelectorAll('p');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
            const paragraph = paragraphs[index];
            const isVisible = paragraph.style.display === 'block';
            paragraphs.forEach((p, i) => {
                p.style.display = 'none';
                buttons[i].setAttribute('aria-expanded', 'false');
            });
            paragraph.style.display = isVisible ? 'none' : 'block';
            button.setAttribute('aria-expanded', isVisible ? 'false' : 'true');
            });
        });
    }
}

export default Landing