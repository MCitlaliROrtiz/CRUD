import { LitElement, html, css } from 'lit';
import { router } from 'lit-element-router';
import "./principal-outlet.js";
import "./componentes/info-home.js";
import "./componentes/create-user";
import "./componentes/update-user";
import "./componentes/delete-user";
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
        {name:"createUser",
        pattern:"create"},
        {name:"updateUser",
        pattern:"update"},
        {name:"deleteUser",
        pattern:"delete"}
        
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
        <principal-outlet active-route=${this.route}>
        <info-home route="home"></info-home>
        <create-user route="createUser"></create-user>
        <update-user route="updateUser"></update-user>
        <delete-user route="deleteUser"></delete-user>
        </principal-outlet>`;
    }
}
customElements.define('primario-router',PrimarioRouter);
