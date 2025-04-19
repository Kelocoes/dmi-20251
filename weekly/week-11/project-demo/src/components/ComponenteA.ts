import { CounterActions, UserActions } from '../flux/Actions';
import { State, store } from '../flux/Store';


class ComponenteA extends HTMLElement {    
    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        this.innerHTML = `
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
        this.querySelector('#inc')?.addEventListener('click', () => {
            CounterActions.increment(1);
        });

        this.querySelector('#dec')?.addEventListener('click', () => {
            CounterActions.decrement(1);
        });

        this.querySelector('#saveUser')?.addEventListener('click', () => {
            const user = { name: 'Juan', age: 30 };
            UserActions.saveUser(user);
        });
    }
}

export default ComponenteA;