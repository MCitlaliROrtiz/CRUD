import { LitElement, html, css } from 'lit';
import { navigator } from 'lit-element-router';
export class InfoHome extends navigator(LitElement) {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            data: { type: Object },
        };
    }
constructor(){
    super();
    this.traerData();
}
    render() {
        return html`
        <h1 @click="${()=>{
            return this.onNavigate("/create");
        }}">click aqui para About us</h1>
        `
    }
    onNavigate(path){
     this.navigate(path)
    }
    traerData() {
      fetch('http://216.238.68.244:8080/litelement/api/usuarios')
      .then(response => response.json())  
      .then(json => console.log(json))  
    }
}
customElements.define('info-home', InfoHome);
