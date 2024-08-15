const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<style>
    .footer{
        text-align: center;
    }
    h1{
        color: blue;
    }
</style>

<div>
    <div class="footer">
        <h1> Footer </h1>
    </div>
</div>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);