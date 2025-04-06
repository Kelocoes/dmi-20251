import ComponenteA from "./components/ComponenteA";
import ComponenteB from "./components/ComponenteB";
import ComponenteC from "./components/ComponenteC";
import Landing from "./pages/Landing";
import ResponsivePage from "./pages/ResponsivePage";

customElements.define('custom-landing', Landing);
customElements.define('custom-responsive', ResponsivePage);
customElements.define('custom-element-a', ComponenteA);
customElements.define('custom-element-b', ComponenteB);
customElements.define('custom-element-c', ComponenteC);