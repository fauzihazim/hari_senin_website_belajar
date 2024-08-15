const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" type="text/css" media="screen" href="navbar/style/navbar.css" />

<header>
    <nav>
        <div class="logo">
            <img src="src/logo.png" alt="logo video belajar">
        </div>
        <div class="nav-items">
            <ul class="account">
                <li class="login"><a href="index.html">Login</a></li>
                <li class="register"><a href="register.html">Register</a></li>
            </ul>
        </div>
    </nav>
</header>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);