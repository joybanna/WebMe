function CreateFoot() {
    document.addEventListener('DOMContentLoaded', () => {
        const foot = document.getElementById('footer');
        foot.style.backgroundColor = 'black';
        foot.style.color = 'white';
        foot.style.gridArea = 3 / 1;
        foot.style.width = '100%';
        foot.style.height = '20%';
        foot.innerHTML = `<div class="Contact w3-content w3-padding w3-right-align">
        <a class="w3-padding">Kritsana Sanepood</a> <a class="w3-padding">joybanna@gmail.com</a> <a class="w3-padding">091-047-4856</a> 
        </div>`;
    });
}
CreateFoot();