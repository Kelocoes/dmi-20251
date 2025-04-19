import ComponenteA from "./components/FluxComponents/ComponenteA";
import ComponenteB from "./components/FluxComponents/ComponenteB";
import ComponenteC from "./components/FluxComponents/ComponenteC";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Root from "./Root/Root";

customElements.define('custom-element-a', ComponenteA);
customElements.define('custom-element-b', ComponenteB);
customElements.define('custom-element-c', ComponenteC);

customElements.define('root-element', Root);

customElements.define('login-page', LoginPage);
customElements.define('home-page', HomePage);