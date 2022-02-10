const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
            <div class="footer-content">
                <img src="public/img/light-logo.png" class="logo" alt="Light Logo">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">men</li>
                        <li><a href="#" class="footer-link">t-shirt</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watches</a></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">women</li>
                        <li><a href="#" class="footer-link">t-shirt</a></li>
                        <li><a href="#" class="footer-link">sweatshirts</a></li>
                        <li><a href="#" class="footer-link">shirts</a></li>
                        <li><a href="#" class="footer-link">jeans</a></li>
                        <li><a href="#" class="footer-link">trousers</a></li>
                        <li><a href="#" class="footer-link">shoes</a></li>
                        <li><a href="#" class="footer-link">casuals</a></li>
                        <li><a href="#" class="footer-link">formals</a></li>
                        <li><a href="#" class="footer-link">sports</a></li>
                        <li><a href="#" class="footer-link">watches</a></li>
                    </ul>
                </div>
        </div>
        <p class="footer-title">About</p>
        <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos iure ad dolorem delectus, asperiores exercitationem dolore? Libero tempora corporis magni. Reiciendis ut sed magnam aliquam maxime voluptate, corrupti sapiente debitis.</p>
        <p class="info">Email us at: clothing@emailus.com</p>
        <p class="info">telephone: 00 1100 00001</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms and conditions</a>
                <a href="#" class="social-link">privacy policy</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
    `;
}
createFooter();