class AppCard extends HTMLElement {

    static get observedAttributes() {
        return ["id",
            "destino",
            "duracion",
            "costo",
            "descripcion",
            "actividades",
            "reservado",
            "imagen",
            "calificacion",
            "alojamiento",
            "guia_incluido"]
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if (oldValue !== newValue) this[prop] = newValue
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        let strellas = ""
        for (let i = 0; i < Number(this.calificacion); i++) {
            strellas += `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>`
        }

        this.shadowRoot.innerHTML = `<div style="margin: 100px 20px; position: relative;">
            <p>${this.id}</p>
            <p>${this.destino}</p>
            <p>${this.duracion}</p>
            <p>${this.costo}</p>
            <p>${this.descripcion}</p>
            <p>${this.actividades}</p>
            <p>${this.reservado}</p>
            <img src="https://picsum.photos/seed/${this.imagen}/200/300"></img>
            <p>${this.calificacion}</p>
            <p>${this.alojamiento}</p>
            <p>${this.guia_incluido}</p>
            <button>${this.reservado === "true" ? "reservado" : "no reservado"}</button>
            
            ${this.reservado === "true" ? `<article
        style="background-color: aqua; position: absolute; color: #00f; top: 0; bottom: 0; left:200px; right: 0; width: 0; height: 100px;">
        soy un
        p</article>` : ""}
            
           
        </div>`

        const btn = this.shadowRoot.querySelector("button")
        btn.addEventListener("click", () => {
            console.log(btn.innerText)
            this.setAttribute("reservado", this.reservado === "true" ? "false" : "true")
            btn.innerText = btn.innerText === "no reservado" ? "reservado" : "no reservado"

            this.render()
        })
    }

}

customElements.define("app-card", AppCard)


