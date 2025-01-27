function ShowNav() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.getElementById('nav');
        var bar = document.createElement('div');
        bar.className = 'w3-top w3-bar w3-theme-d4';
        bar.innerHTML = `
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="02_Contact.html"style="font-size: 20px;">Contact</a>
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="01_Portfolio.html"style="font-size: 20px;">Portfolio</a>
        <a class='w3-bar-item w3-button w3-right w3-padding-16 w3-hover-theme' href="index.html"style="font-size: 20px;">Home</a>
       `;
        navBar.appendChild(bar);
    });
}
ShowNav();
