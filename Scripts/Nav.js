function ShowNav() {
    document.addEventListener('DOMContentLoaded', () => {
        const navBar = document.getElementById('nav');
        navBar.innerHTML = `
           <ul>
               <li><a href="../Pages/Profile.html">Home</a></li>
               <li><a href="../Pages/Protfolio.html">Portfolio</a></li>
               <li><a href="../Pages/Contact.html">Contact</a></li>
           </ul>
       `;
    });
}
ShowNav();
