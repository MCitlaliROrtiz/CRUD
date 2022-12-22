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
        
            users:{type:Object},
        };
    }
    constructor(){
        super();
        this.users=[];
      
    }
    render() {
        return html`
        <button @click="${()=>
             this.onNavigate("/create")
        }">Registrar usuarios</button>
        <div>${this.users.map(e=>
        html`
        ${console.log(this.users,"estoy pintando")}
    <h3> ${e.nombre}</h3>
    <p>${e.apellidoPaterno}</p>
    <p>${e.apellidoMaterno}</p>
    <button @click="${()=>{
            return this.onNavigate("/update");
        }}">edit</button>
    <button @click="${()=>{
            return this.onNavigate("/delete");
        }}">delete</button>
    `
    )}</div>
        `
    }
    onNavigate(path){
     this.navigate(path)
    }
    
    
}
customElements.define('info-home', InfoHome);
