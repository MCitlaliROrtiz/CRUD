import { LitElement, html, css } from 'lit';

export class AboutUs extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <p>hey!!</p>`;
    }
}
customElements.define('about-us', AboutUs);
