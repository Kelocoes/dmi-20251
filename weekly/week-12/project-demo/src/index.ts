import Root from "./Root/Root";

import ComponenteA from "./components/ComponenteA";
import ComponenteB from "./components/ComponenteB";
import ComponenteC from "./components/ComponenteC";

customElements.define('root-element', Root);

customElements.define('custom-element-a', ComponenteA);
customElements.define('custom-element-b', ComponenteB);
customElements.define('custom-element-c', ComponenteC);