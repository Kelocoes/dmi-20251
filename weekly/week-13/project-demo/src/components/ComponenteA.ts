import { CounterActions, StoreActions, UserActions } from '../flux/Actions';
import { State, store } from '../flux/Store';
import { fetchStateMockLocal } from '../services/ApiMock';
import { isStateValid } from '../utils/StateCheck';

class ComponenteA extends HTMLElement {
    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        // Cache first: Primero miro si en el store ya hay datos. Si no, pido a la API y actualizo el store."
        // Qué pasa si quito el !, o sea que siempre hago la llamada a la API?
        if (!isStateValid(state)) {
            // Then check API
            fetchStateMockLocal()
                .then((data) => {
                    StoreActions.loadState(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }

        this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-family: Arial, sans-serif;
                    border: 1px solid #ccc;
                    padding: 16px;
                    border-radius: 8px;
                    max-width: 300px;
                    margin: 16px auto;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                h3 {
                    color: #333;
                    text-align: center;
                }
                p {
                    color: #555;
                    margin: 8px 0;
                }
                button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    margin: 4px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div>
                <h3>Mi componente A</h3>
                <p> Información sobre el usuario </p>
                <p> Nombre: ${state.user?.name} </p>
                <p> Edad: ${state.user?.age} </p>
                <p> Contador: ${state.count} </p>
                <button id="inc">Incrementar</button>
                <button id="dec">Decrementar</button>
                <button id="saveUser">Guardar usuario</button>
            </div>
        `;
        this.shadowRoot.querySelector('#inc')?.addEventListener('click', () => {
            CounterActions.increment(1);
        });

        this.shadowRoot.querySelector('#dec')?.addEventListener('click', () => {
            CounterActions.decrement(1);
        });

        this.shadowRoot.querySelector('#saveUser')?.addEventListener('click', () => {
            const user = { name: 'Juan', age: 30 };
            UserActions.saveUser(user);
        });
    }
}

export default ComponenteA;