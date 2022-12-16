import { LitElement, html, css } from 'lit';

export class DeleteUser extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <p>delete</p>`;
    }
}
customElements.define('delete-user', DeleteUser);
