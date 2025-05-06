import { State } from "../flux/Store";


function fetchStateMockLocal(): Promise<State> {
    // Simulate an API call with fake data
    console.log("Fetching state from local mock API...");
    return new Promise((resolve) => {
        setTimeout(() => {
            const myState: State = {
                count: Math.floor(Math.random() * 100),
                user: {
                    name: "John Doe",
                    age: 20
                },
            };
            resolve(myState);
        }, 1000);
    });
}

export { fetchStateMockLocal }