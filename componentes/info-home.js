import { LitElement, html, css } from 'lit';

export class InfoHome extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>hola</h1>`;
    }
}
customElements.define('info-home', InfoHome);
