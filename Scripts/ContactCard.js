function CreateContactCard(data) {
    var card = document.createElement('div');
    card.className = 'contact-card';
    card.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.img}" alt="${data.name}">
        <a href =${data.hf}>${data.info}</a>`;
    return card;
}
function DataContact() {
    const gmail = {
        name: "Gmail",
        img: '../src/assets/img/002-google.png',
        info: "joybanna@gmail.com",
        hf: ""
    }
    const facebook = {
        name: "Facebook",
        img: '../src/assets/img/001-facebook.png',
        info: "joybanna",
        hf: ""
    }
    const hotmail = {
        name: "Hotmail",
        img: '../src/assets/img/003-microsoft.png',
        info: "joybanna@hotmail.com",
        hf: ""
    }
    const tel = {
        name: "Tel.",
        img: '../src/assets/img/004-apple.png',
        info: "091-047-4856",
        hf: ""
    }
    const linkedin = {
        name: "LinkedIn",
        img: '../src/assets/img/LinkedIn.png',
        info: "Kritsana Sanaepood",
        hf: "https://linkedin.com/in/kritsana-sanaepood-a4520b205"
    }
    const contacts = [gmail, facebook, hotmail, tel, linkedin]
    return contacts
}

function ShowContactCard() {
    document.addEventListener('DOMContentLoaded', () => {
        const contactCard = document.getElementById('contact-card');
        const list = DataContact();
        console.log(list.length);
        list.map(data => {
            console.log(data.name);
            var card = CreateContactCard(data);
            contactCard.appendChild(card);
        });
    }
    );
}
ShowContactCard();


