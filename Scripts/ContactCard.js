function CreateContactCard(data) {
    var card = document.createElement('div');
    card.className = 'contact-card w3-third';
    card.style.width = '325px';
    card.style.height = '325px';
    card.style.backgroundColor = 'white';
    card.style.margin = '1vw';
    card.style.padding = '10px';
    card.style.textAlign = 'center';
    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    // card.style.transition = '0.3s';
    card.style.alignItems = 'center';
    card.style.display = 'grid';
    card.style.gridTemplateRows = 'auto auto auto';
    card.innerHTML = `<h2>${data.name}</h2>`;
    var icon = document.createElement('img');
    icon.src = data.img;
    icon.alt = data.name;
    icon.style.width = '100px';
    icon.style.height = '100px';
    icon.style.justifyContent = 'center';
    icon.style.alignItems = 'center';
    icon.style.display = 'flex';
    icon.style.margin = '0 auto';
    icon.style.padding = '0';
    card.appendChild(icon);
    var info = document.createElement('a');
    info.href = data.hf;
    info.style.textDecoration = 'none';
    info.innerHTML = data.info;
    card.appendChild(info);

    // <img class='max-w-36' src="${data.img}" alt="${data.name}" >
    // <a href =${data.hf}>${data.info}</a>`;
    return card;
}
function DataContact() {
    const gmail = {
        name: "Gmail",
        img: 'img/002-google.png',
        info: "joybanna@gmail.com",
        hf: ""
    }
    const facebook = {
        name: "Facebook",
        img: 'img/001-facebook.png',
        info: "joybanna",
        hf: ""
    }
    const hotmail = {
        name: "Hotmail",
        img: 'img/003-microsoft.png',
        info: "joybanna@hotmail.com",
        hf: ""
    }
    const tel = {
        name: "Tel.",
        img: 'img/004-apple.png',
        info: "091-047-4856",
        hf: ""
    }
    const linkedin = {
        name: "LinkedIn",
        img: 'img/LinkedIn.png',
        info: "Kritsana Sanaepood",
        hf: "https://linkedin.com/in/kritsana-sanaepood-a4520b205"
    }
    const contacts = [gmail, facebook, hotmail, tel, linkedin]
    return contacts
}

function ShowContactCard() {
    document.addEventListener('DOMContentLoaded', () => {
        const contactCard = document.getElementById('contact-card');
        contactCard.style.minHeight = '90vh';
        const box = document.createElement('div');
        box.className = "w3-row w3-padding-32 w3-center w3-margin";
        // box.style.minHeight = '75vh';
        // box.style.paddingTop = '100px';
        // box.style.paddingLeft = '1vw';
        contactCard.appendChild(box);
        // contactCard.style.display = 'grid';
        // contactCard.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
        // contactCard.style.justifyContent = 'center';
        // contactCard.style.padding = '10%';
        const list = DataContact();
        console.log(list.length);
        list.map(data => {
            console.log(data.name);
            var card = CreateContactCard(data);
            box.appendChild(card);
        });
    }
    );
}
ShowContactCard();


