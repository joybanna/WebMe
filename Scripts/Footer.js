function CreateFoot() {
    document.addEventListener('DOMContentLoaded', () => {
        const foot = document.getElementById('footer');
        foot.innerHTML = `<p>&copy; 2021 Kritsana Sanaepood</p>`;
    });
}
CreateFoot();