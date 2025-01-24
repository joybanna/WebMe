function ShowNav() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.getElementById('nav');
        navBar.innerHTML = `
        <a class='button_Nav' href="../Pages/Profile.html">Home</a>
        <a class='button_Nav' href="../Pages/Protfolio.html">Portfolio</a>
        <a class='button_Nav' href="../Pages/Contact.html">Contact</a>
       `;
    });
}
ShowNav();
