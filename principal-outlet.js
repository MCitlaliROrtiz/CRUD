import { LitElement, html, css } from 'lit';
import {outlet} from 'lit-element-router'
import "./componentes/info-home.js";
import "./componentes/about-us.js";
export class PrincipalOutlet extends outlet (LitElement) {
    

    render() {
        return html`
        <slot>
            
        </slot>`;
    }
}
customElements.define('principal-outlet',PrincipalOutlet);
