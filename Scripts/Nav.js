function ShowNav() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.getElementById('nav');
        navBar.className = 'w3-top w3-bar w3-theme-d4';
        navBar.innerHTML = `
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="Contact.html"style="font-size: 20px;">Contact</a>
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="Protfolio.html"style="font-size: 20px;">Portfolio</a>
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="index.html"style="font-size: 20px;">Home</a>
       `;
    });
}
ShowNav();
