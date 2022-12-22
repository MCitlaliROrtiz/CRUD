import { LitElement, html, css } from 'lit';

export class CreateUser extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            userData:        { type:Object },
            name:            { type:String },
            apellidoPaterno: { type:String },
            apellidoMaterno: { type:String }
        };
    }
    constructor(){
        super();
        this.userData=[];
        this.nombre="";
        this.apellidoPaterno="";
        this.apellidoMaterno="";
    }

    render() {
        return html`
        <div>
        <p>Nombre:</p>
        <input type="text" id="name" placeholder="Ingresa tu nombre">
        <p>Apellido paterno:</p>
        <input type="text" id="paterno" placeholder="apellido paterno">
        <p>apellido materno</p>
        <input type="text" id="materno" placeholder="Ingresa tu apellido materno">
        <button @click="${this.reunirData}">crear</button>
        </div>`;
    }
    reunirData(){
        this.nombre=this.shadowRoot.getElementById("name").value;
        this.apellidoPaterno=this.shadowRoot.getElementById("paterno").value;
        this.apellidoMaterno=this.shadowRoot.getElementById("materno").value;
        console.log(this.nombre,this.apellidoPaterno,this.apellidoMaterno);
        this.requestUpdate();
        this.userData.push({
        nombre:this.nombre,
        apellidoPaterno:this.apellidoPaterno,
        apellidoMaterno:this.apellidoMaterno,
})
console.log(this.userData);
this.dispatchEvent(new CustomEvent("updateValue",{
    detail:{
      value:this.userData
    },
    bubbles:true,
    composed:true,
}))
    }
}
customElements.define('create-user', CreateUser);

