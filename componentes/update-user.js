import { LitElement, html, css } from 'lit';

export class UpdateUser extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <p>update</p>`;
    }
}
customElements.define('update-user', UpdateUser);
