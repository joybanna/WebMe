function CreateContactCard(data) {
    var card = document.createElement('div');
    card.className = 'contact-card w3-card-4';
    card.style.width = '350px';
    card.style.height = '450px';
    card.style.backgroundColor = 'white';
    card.style.display = 'grid';
    card.style.gridTemplateRows = 'auto auto auto';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.borderRadius = '10px';
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
    info.className = 'w3-xlarge';
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
        img: 'imgs/002-google.png',
        info: "joybanna@gmail.com",
        hf: ""
    }
    const facebook = {
        name: "Facebook",
        img: 'imgs/001-facebook.png',
        info: "joybanna",
        hf: ""
    }
    const hotmail = {
        name: "Hotmail",
        img: 'imgs/003-microsoft.png',
        info: "joybanna@hotmail.com",
        hf: ""
    }
    const tel = {
        name: "Tel.",
        img: 'imgs/004-apple.png',
        info: "091-047-4856",
        hf: ""
    }
    const linkedin = {
        name: "LinkedIn",
        img: 'imgs/LinkedIn.png',
        info: "Kritsana Sanaepood",
        hf: "https://linkedin.com/in/kritsana-sanaepood-a4520b205"
    }
    const contacts = [gmail, facebook, hotmail, tel, linkedin]
    return contacts
}

function ShowContactCard() {
    document.addEventListener('DOMContentLoaded', () => {
        const contactCard = document.getElementById('contact-card');
        // contactCard.style.minHeight = '90vh';
        const box = document.createElement('div');
        box.className = "w3-center w3-padding-32";
        // box.style.margin = 'auto';
        // box.style.width = '60%';
        // box.style.height = '50%';
        box.style.display = 'grid';
        box.style.gridTemplateColumns = 'repeat(auto-fit, minmax(325px, 1fr))';
        box.style.gridGap = '40px';
        box.style.justifyContent = 'center';
        // box.style.alignItems = 'center';
        box.style.paddingLeft = '7%';
        contactCard.appendChild(box);
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


