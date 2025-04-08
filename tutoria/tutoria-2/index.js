import "./card.js"
import { data } from "./data.js"
import { apiToDogs } from "./src/adapters/dog.js";
import { getApiDogs } from "./src/services/dog.js";

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {

        const apiResponse = await getApiDogs()
        const dogs = apiToDogs(apiResponse)
        console.log("perritos", dogs);



        this.shadowRoot.innerHTML = `
            <p>hola mundo</p>
            ${data.map((plan) => `<app-card
                id = "${plan.id}"
                destino = "${plan.destino}"
                duracion = "${plan.duracion}"
                costo = "${plan.costo}"
                descripcion = "${plan.descripcion}"
                actividades = "${plan.actividades}"
                reservado = "${plan.reservado}"
                imagen = "${plan.imagen}"
                calificacion = "${plan.calificacion}"
                alojamiento = "${plan.alojamiento}"
                guia_incluido = "${plan.guia_incluido}"
                >
            </app-card>`).join("")}
        `
    }

}

customElements.define("app-container", AppContainer)
