import { LitElement, html, css } from 'lit';
import { router } from 'lit-element-router';
import "./principal-outlet.js";
import "./componentes/info-home.js";
import "./componentes/about-us.js";
export class PrimarioRouter extends router(LitElement) {
    static get properties() {
        return {
          route: { type: String },
          params: { type: Object },
          query: { type: Object }
        };
      }

static get routes() {
    return [
        {name:"home",
        pattern:""},
        {name:"aboutUs",
        pattern:"aboutUs"}
    ]
    
}
constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }
 
  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }
    render() {
        return html`
        <componete-principal-outlet active-route=${this.route}>
        <info-home route="home"></info-home>
        <about-us route="aboutUs"></about-us>
        </componete-principal-outlet>`;
    }
}
customElements.define('primario-router',PrimarioRouter);
