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

    render() {
        return html`
        <h1 @click="${()=>{
            return this.onNavigate("/aboutUs");
        }}">click aqui para About us</h1>
        `
    }
    onNavigate(path){
     this.navigate(path)
    }
}
customElements.define('info-home', InfoHome);
