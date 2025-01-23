document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.createElement('nav');
    navBar.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    document.body.prepend(navBar);
});