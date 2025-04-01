import "./card.js"
import { getData } from "./data.js"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {

        const data = getData()

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
