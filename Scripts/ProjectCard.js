function ProjectCard(data) {
    var card = document.createElement('div');
    var href = CreateHref(data);
    card.className = 'w3-col l3 m6 w3-margin-bottom';
    card.innerHTML = `
        <div class='w3-display-container w3-hover-grayscale'>
            <div class='w3-display-topleft w3-black w3-padding'><a className='project-name'>${data.project}</a></div>
            <img className='project_img' src=${data.thumnil} alt=${data.project} />
            <div class="w3-display-middle w3-display-hover w3-xlarge">
                <a class="w3-button w3-text-white" href=${href}>More detail</a>
            </div>
        </div>`;
    return card;
}

function CreateHref(data) {
    var mainPath = '../Pages/ProjectDetail.html?project=';
    return mainPath + data.id;
}

function CreateProjectCards() {
    var feild = document.getElementById('project-card');
    const personal = DataProject(true);
    const company = DataProject(false);
    console.log(personal.length);
    console.log(company.length);
    const personalTitle = document.createElement('div');
    personalTitle.className = 'w3-padding-16';
    personalTitle.innerHTML = `<a className='grouup-type'>Prototype</a>`;
    feild.appendChild(personalTitle);
    const personalRow = document.createElement('div');
    personalRow.className = 'w3-row-padding';
    personal.map(data => {
        var card = ProjectCard(data);
        personalRow.appendChild(card);
    });

    feild.appendChild(personalRow);

    const companyTitle = document.createElement('div');
    companyTitle.className = 'w3-padding-16';
    companyTitle.innerHTML = `<a className='grouup-type'>Company</a>`;
    feild.appendChild(companyTitle);
    const companyRow = document.createElement('div');
    companyRow.className = 'w3-row-padding';
    company.map(data => {
        var card = ProjectCard(data);
        companyRow.appendChild(card);
    });

    feild.appendChild(companyRow);

}

CreateProjectCards();


function DataProject(isPersonal) {
    const monopoly = {
        id: 101,
        project: "Monopoly Prototype",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const stealth = {
        id: 102,
        project: "Stealth Prototype",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const help = {
        id: 103,
        project: "Help Me plz !!!!",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const typingTyohoon = {
        id: 104,
        project: "Typing Typhoon (NSC)",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const desir = {
        id: 105,
        project: "De'sir The fragment of Memory (Thesis)",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const theLost = {
        id: 106,
        project: "The Lost Treasure",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const skyShooter = {
        id: 107,
        project: "Sky Shooting",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const findMe = {
        id: 108,
        project: "Find Me",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const personalList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe]

    const towerDefence = {
        id: 201,
        project: "Kingdom castle",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const popit = {
        id: 202,
        project: "Popit",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const stealGame = {
        id: 203,
        project: "Steal Game",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const drawpuzzle = {
        id: 204,
        project: "Draw Puzzle",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const pathpuzzle = {
        id: 205,
        project: "Path Puzzle",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const superslime = {
        id: 206,
        project: "Super Slime",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const monsterdraft = {
        id: 207,
        project: "Monster Draft",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const mergehero = {
        id: 208,
        project: "Merge Hero",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const savethedog = {
        id: 209,
        project: "Save The Dog",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const watersort = {
        id: 210,
        project: "Water Sort",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const hairsalon = {
        id: 211,
        project: "Hair Salon",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const parkescape = {
        id: 212,
        project: "Park Escape",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }
    const findit = {
        id: 213,
        project: "Find It",
        thumnil: "https://loremflickr.com/200/200?random=1",
    }


    const companyList = [towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, findit]
    return isPersonal ? personalList : companyList;

}

