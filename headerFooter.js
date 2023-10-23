class WebsiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="header container">
        <a href="index.html"  alt="Insure Logo">
            <img src="assets/svg/logo.svg" />
        </a>
        <nav class="header__menu">
            <ul class="header__menu-item">
                <li><a href="#"> HOW WE WORK</a></li>
                <li><a href="#"> BLOG</a></li>
                <li><a href="#"> ACCOUNT</a></li>
            </ul>
            <a href="contact.html"
                ><button class="cta-button">CONTACT US</button></a
            >
        </nav>
        <div class="hamburger" data-btn-open>
        
        <img  src="./assets/icons/icon-hamburger.svg" />
        </div>

        <div class="overlay container">
        
        <div class="close" data-btn-close>
        <img  src="./assets/icons/icon-close.svg" />
        </div>
        
        <nav class="header__menu--responsive">
            <ul class="header__menu-item--responsive">
                <li><a href="#"> HOW WE WORK</a></li>
                <li><a href="#"> BLOG</a></li>
                <li><a href="#"> ACCOUNT</a></li>
            </ul>
            <a href="contact.html"
                ><button class="cta-button--responsive">CONTACT US</button></a
            >
        </nav>
        </div>
    </header>`;
    }
}

customElements.define('website-header', WebsiteHeader);

class WebsiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        <footer class="footer container">
        <div class="footer__logo-section">
            <a href="index.html" alt="Insure Logo">
                <img src="assets/svg/logo.svg" />
            </a>
            <div class="footer__icons">
                <a href="#">
                    <img src="./assets/icons/icon-facebook.svg" alt="" />
                </a>
                <a href="#">
                    <img src="./assets/icons/icon-instagram.svg" alt="" />
                </a>
                <a href="#">
                    <img src="./assets/icons/icon-pinterest.svg" alt="" />
                </a>
                <a href="#">
                    <img src="./assets/icons/icon-twitter.svg" alt="" />
                </a>
            </div>
        </div>
        <div class="footer__line"></div>
        <div class="footer__menu">
            <div class="footer__menu--company">
                <h6>OUR COMPANY</h6>
                <ul class="footer__menu-item">
                    <li><a href="#"> HOW WE WORK</a></li>
                    <li><a href="#"> WHY INSURE?</a></li>
                    <li><a href="#"> REVIEWS</a></li>
                </ul>
            </div>
            <div class="footer__menu--help">
                <h6>HELP ME</h6>
                <ul class="footer__menu-item">
                    <li><a href="#"> FAQ</a></li>
                    <li><a href="#"> TERMS OF USE</a></li>
                    <li><a href="#"> PRIVACY POLICY</a></li>
                </ul>
            </div>
            <div class="footer__menu--contact">
                <h6>CONTACT</h6>
                <ul class="footer__menu-item">
                    <li><a href="#"> SUPPORT</a></li>
                    <li><a href="#"> LIVE CHAT</a></li>
                    <li><a href="contact.html"> CONTACT</a></li>
                </ul>
            </div>
            <div class="footer__menu--other">
                <h6>OTHER</h6>
                <ul class="footer__menu-item">
                    <li><a href="#"> CARRIERS</a></li>
                    <li><a href="#"> LISENSES</a></li>
                </ul>
            </div>
        </div>
        <img
            class="footer__bg"
            src="./assets/svg/bg-pattern-footer-desktop.svg"
            alt=""
        />
    </footer>`;
    }
}

customElements.define('website-footer', WebsiteFooter);
