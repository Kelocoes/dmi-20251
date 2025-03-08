class MyFirstComponent extends HTMLElement {
    constructor() {
        super();
        // Element created
        console.log('Component created');
    }

    connectedCallback() {
        //Added to the DOM
        console.log('Component connected to the DOM');
    }

    disconnectedCallback() {
        //Removed from the DOM
        console.log('Component disconnected from the DOM');
    }

    adoptedCallback() {
        //Moved to a new document
        console.log('Component adopted into a new document');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //Attributes changed
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }

    // Static because it is a getter
    static get observedAttributes() {
        // Specify the attributes to observe
        return ['example-attribute'];
    }
}

export default MyFirstComponent;
