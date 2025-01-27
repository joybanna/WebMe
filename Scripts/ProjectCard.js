function ProjectCard(data) {
    var card = document.createElement('div');
    var href = CreateHref(data);
    card.className = 'w3-col l3 m6 w3-margin-bottom';
    card.innerHTML = `
    <div class="w3-card-4 w3-section" >

    <div class="w3-container w3-theme w3-padding-top-24" style="height: 90px;">
      <a class="w3-large ">${data.project}</a>
    </div>
    <img className='project_img' src=${data.thumnil} href=${href} alt=${data.project} style="width:100%"  />
    <a class="w3-button w3-padding w3-hover-theme" href=${href} style="width:100%">More detail</a>
  </div>`;
    console.log(data);
    return card;
}

function CreateHref(data) {
    var mainPath = '03_ProjectDetail.html?project=';
    return mainPath + data.id;
}

function CreateProjectCards() {
    var feild = document.getElementById('project-card');
    const personal = DataProjectPersonal();
    const company = DataProjectCompany();
    console.log("Personal Project : %d", personal.length);
    console.log("Company Project : %d", company.length);

    GroupCards(feild, 'Prototype', personal);
    GroupCards(feild, 'Company', company);
}

function GroupCards(feild, header, projects) {
    const title = document.createElement('div');
    title.className = 'w3-padding-32';
    title.innerHTML = ` <h1 class="w3-border-theme w3-bottombar w3-padding-16 w3-left-align">${header}</h1>`;

    feild.appendChild(title);
    feild.appendChild(Cards(projects));
}

function Cards(projects) {
    const groupRow = document.createElement('div');
    groupRow.className = 'w3-row-padding';
    projects.map(data => {
        var card = ProjectCard(data);
        groupRow.appendChild(card);
    });
    return groupRow;
}

CreateProjectCards();


function DataProjectPersonal() {
    const monopoly = {
        id: 101,
        project: "Monopoly Prototype",
        thumnil: 'img/pic_pro_1/mono_icon.PNG',
    }
    const stealth = {
        id: 102,
        project: "Stealth Prototype",
        thumnil: 'img/pic_pro_2/stealth_icon.PNG',
    }
    const help = {
        id: 103,
        project: "Help Me plz !!!!",
        thumnil: 'img/pic_pro_3/help_icon.PNG',
    }
    const typingTyohoon = {
        id: 104,
        project: "Typing Typhoon (NSC)",
        thumnil: 'img/pic_pro_4/typing_icon.PNG',
    }
    const desir = {
        id: 105,
        project: "De'sir The fragment of Memory (Thesis)",
        thumnil: 'img/pic_pro_5/de_icon.PNG',
    }
    const theLost = {
        id: 106,
        project: "The Lost Treasure",
        thumnil: 'img/pic_pro_6/the_icon.PNG',
    }
    const skyShooter = {
        id: 107,
        project: "Sky Shooting",
        thumnil: 'img/pic_pro_7/sky_icon.PNG',
    }
    const findMe = {
        id: 108,
        project: "Find Me",
        thumnil: 'img/pic_pro_8/find_icon.PNG',
    }
    const personalList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe]
    return personalList;
}

function DataProjectCompany() {
    const towerDefence = {
        id: 201,
        project: "Kingdom castle",
        thumnil: 'img/KindomCastle/KC_icon.PNG',
    }
    const popit = {
        id: 202,
        project: "Popit",
        thumnil: 'img/Popit/PI_icon.PNG',
    }
    const stealGame = {
        id: 203,
        project: "Steal Game",
        thumnil: 'img/StealGame/SG_icon.PNG',
    }
    const drawpuzzle = {
        id: 204,
        project: "Draw Puzzle",
        thumnil: 'img/DrawPuzzle/DP_icon.PNG',
    }
    const pathpuzzle = {
        id: 205,
        project: "Path Puzzle",
        thumnil: 'img/PathPuzzle/PP_icon.PNG',
    }
    const superslime = {
        id: 206,
        project: "Super Slime",
        thumnil: 'img/Slime/S_icon.PNG',
    }
    const monsterdraft = {
        id: 207,
        project: "Monster Draft",
        thumnil: 'img/MonsterDraft/MD_icon.PNG',
    }
    const mergehero = {
        id: 208,
        project: "Merge Hero",
        thumnil: 'img/MergeHero/MH_icon.PNG',
    }
    const savethedog = {
        id: 209,
        project: "Save The Dog",
        thumnil: 'img/SaveTheDog/STD_icon.PNG',
    }
    const watersort = {
        id: 210,
        project: "Water Sort",
        thumnil: 'img/WaterSort/WS_icon.PNG',
    }
    const hairsalon = {
        id: 211,
        project: "Hair Salon",
        thumnil: 'img/HairSalon/HS_icon.PNG',
    }
    const parkescape = {
        id: 212,
        project: "Park Escape",
        thumnil: "https://loremflickr.com/300/300?random=1",
    }
    const findit = {
        id: 213,
        project: "Find It",
        thumnil: 'img/FindIt/FI_icon.PNG',
    }


    const companyList = [towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, findit]
    return companyList;
}


function DataProject(isPersonal) {
    const monopoly = {
        id: 101,
        project: "Monopoly Prototype",
        thumnil: 'img/pic_pro_1/mono_icon.PNG',
    }
    const stealth = {
        id: 102,
        project: "Stealth Prototype",
        thumnil: 'img/pic_pro_2/stealth_icon.PNG',
    }
    const help = {
        id: 103,
        project: "Help Me plz !!!!",
        thumnil: 'img/pic_pro_3/help_icon.PNG',
    }
    const typingTyohoon = {
        id: 104,
        project: "Typing Typhoon (NSC)",
        thumnil: 'img/pic_pro_4/typing_icon.PNG',
    }
    const desir = {
        id: 105,
        project: "De'sir The fragment of Memory (Thesis)",
        thumnil: 'img/pic_pro_5/de_icon.PNG',
    }
    const theLost = {
        id: 106,
        project: "The Lost Treasure",
        thumnil: 'img/pic_pro_6/the_icon.PNG',
    }
    const skyShooter = {
        id: 107,
        project: "Sky Shooting",
        thumnil: 'img/pic_pro_7/sky_icon.PNG',
    }
    const findMe = {
        id: 108,
        project: "Find Me",
        thumnil: 'img/pic_pro_8/find_icon.PNG',
    }
    const personalList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe]

    const towerDefence = {
        id: 201,
        project: "Kingdom castle",
        thumnil: 'img/KindomCastle/kc_icon.PNG',
    }
    const popit = {
        id: 202,
        project: "Popit",
        thumnil: 'img/Popit/PI_icon.PNG',
    }
    const stealGame = {
        id: 203,
        project: "Steal Game",
        thumnil: 'img/StealGame/SG_icon.PNG',
    }
    const drawpuzzle = {
        id: 204,
        project: "Draw Puzzle",
        thumnil: 'img/DrawPuzzle/DP_icon.PNG',
    }
    const pathpuzzle = {
        id: 205,
        project: "Path Puzzle",
        thumnil: 'img/PathPuzzle/PP_icon.PNG',
    }
    const superslime = {
        id: 206,
        project: "Super Slime",
        thumnil: 'img/Slime/S_icon.PNG',
    }
    const monsterdraft = {
        id: 207,
        project: "Monster Draft",
        thumnil: 'img/MonsterDraft/MD_icon.PNG',
    }
    const mergehero = {
        id: 208,
        project: "Merge Hero",
        thumnil: 'img/MergeHero/MH_icon.PNG',
    }
    const savethedog = {
        id: 209,
        project: "Save The Dog",
        thumnil: 'img/SaveTheDog/STD_icon.PNG',
    }
    const watersort = {
        id: 210,
        project: "Water Sort",
        thumnil: 'img/WaterSort/WS_icon.PNG',
    }
    const hairsalon = {
        id: 211,
        project: "Hair Salon",
        thumnil: 'img/HairSalon/HS_icon.PNG',
    }
    const parkescape = {
        id: 212,
        project: "Park Escape",
        thumnil: "https://loremflickr.com/300/300?random=1",
    }
    const findit = {
        id: 213,
        project: "Find It",
        thumnil: 'img/FindIt/FI_icon.PNG',
    }


    const companyList = [towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, findit]
    return isPersonal ? personalList : companyList;

}

