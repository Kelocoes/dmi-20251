class RickList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {
            const response = await fetch('../src/assets/rick.json');
            const Characters = await response.json();
            const chars = Characters.characters;

            const styleResponse = await fetch('../src/layouts/RickList/RickList.css');
            const styles = await styleResponse.text();

            this.shadowRoot.innerHTML = `
            <style>
            ${styles}
            </style>
            <ul>
            ${chars.map(char => `
                <custom-card class="char" id="${char.id}" name="${char.name}" status="${char.status}" species="${char.species}" image="${char.image}"></custom-card>
            `).join('')}
            </ul>
        `;
        } catch (error) {
            console.error(error);
        }
    }

}

export default RickList;