function CreateFoot() {
    document.addEventListener('DOMContentLoaded', () => {
        const foot = document.getElementById('footer');
        foot.className = "w3-theme-d5 w3-container";
        foot.style.color = 'w3-theme-l5';
        foot.style.position = 'absolute';
        foot.style.width = '100%';
        foot.style.height = '10%';
        foot.innerHTML = `<div class=" w3-padding w3-bar">
        <a class="w3-bar-item w3-padding-16 w3-right">091-047-4856</a> 
         <a class="w3-bar-item w3-padding-16 w3-right">joybanna@gmail.com</a>
         <a class="w3-bar-item w3-padding-16 w3-right">Kritsana Sanepood</a>
        </div>`;
    });
}
CreateFoot();