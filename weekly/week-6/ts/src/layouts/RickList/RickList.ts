type CharacterType = {
    id: string | number;
    name: string;
    status: string;
    species: string;
    image: string;
}

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

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <style>
                ${styles}
                </style>
                <ul>
                ${chars.map((char: CharacterType)  => `
                    <custom-card class="char" id="${char.id}" name="${char.name}" status="${char.status}" species="${char.species}" image="${char.image}"></custom-card>
                `).join('')}
                </ul>
                }`;
            }
        } catch (error) {
            console.error(error);
        }
    }

}

export default RickList;