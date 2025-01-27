// import { DataProject } from './ProjectCard.js';
// const refData = require('./ProjectCard.js');

function ReadParameterPage() {
    var params = new URLSearchParams(window.location.search);
    console.log(params);
    var name = params.get('project');
    return name;
}

function GetDataProject(projectID) {
    var list = ProjectsDetail();
    console.log("Project count : %d ,Project ID : %", list.length, projectID);
    var projectData = list.find((data) => data.id == projectID);
    var isFound = projectData !== undefined;
    console.log("Project found : %s", isFound);
    return projectData;
}

function WriteHead(data) {
    var head = document.getElementById('head_text');
    head.innerHTML = `<a class='head_project'>${data.project}</a>`;
}

function WriteImgContent(data) {
    var content = document.getElementById('slide-show');
    console.log("project img : %d", data.imgs.length);
    data.imgs.map((img) => {
        var imgContent = document.createElement('img');
        imgContent.className = 'mySlides';
        imgContent.src = img;
        imgContent.alt = img;
        imgContent.style = 'width:100%';
        content.appendChild(imgContent);
        console.log("img : %s", img);
    });

    var carouselDot = document.createElement('div');
    carouselDot.className = 'w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle w3-padding-16';
    carouselDot.style = 'width:120%';
    content.appendChild(carouselDot);

    var leftBtn = document.createElement('div');
    leftBtn.className = 'w3-left w3-hover-text-khaki w3-circle w3-button w3-theme-d3';
    leftBtn.onclick = function () { plusDivs(-1) };
    leftBtn.innerHTML = '&#10094;';
    carouselDot.appendChild(leftBtn);

    var rightBtn = document.createElement('div');
    rightBtn.className = 'w3-right w3-hover-text-khaki w3-circle w3-button w3-theme-d3';
    rightBtn.onclick = function () { plusDivs(1) };
    rightBtn.innerHTML = '&#10095;';
    carouselDot.appendChild(rightBtn);

    data.imgs.map((img, index) => {
        var dot = document.createElement('span');
        dot.className = 'w3-badge demo w3-border w3-transparent w3-hover-white';
        dot.onclick = function () { currentDiv(index + 1) };
        carouselDot.appendChild(dot);
    });
}


function WriteDescription(data) {
    var description = document.getElementById('description');
    description.innerHTML = data.description;
}

function WriteFeature(data) {
    var feature = document.getElementById('feature');
    var block = document.createElement('ul');
    data.feature.map((feature) => {
        var item = document.createElement('li');
        item.innerHTML = feature;
        block.appendChild(item);
    }
    );
    feature.appendChild(block);
}

function WriteReference(data) {
    if (data.reference == "") return;
    var reference = document.getElementById('reference');
    var text = document.createElement('a');
    text.href = data.reference;
    text.innerHTML = `Source&Reference : ${data.reference}`;
    text.style.textDecoration = 'none';
    reference.appendChild(text);
}

function WriteVideo(data) {
    if (data.video == "") return;
    var video = document.getElementById('video');
    var vBlock = document.createElement('div');
    vBlock.className = 'w3-container w3-center';
    vBlock.innerHTML = data.video;
    video.appendChild(vBlock);
}
function WriteContent() {
    document.addEventListener('DOMContentLoaded', () => {
        var projectID = ReadParameterPage();
        console.log("Projdect detail :" + projectID);

        var projectData = GetDataProject(projectID);
        console.log(projectData.project);

        WriteHead(projectData);
        WriteImgContent(projectData);
        WriteDescription(projectData);
        WriteFeature(projectData);
        WriteReference(projectData);
        WriteVideo(projectData);
        showDivs(slideIndex);
    });
}



WriteContent();

var slideIndex = 1;


function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-theme", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-theme";
}

function ProjectsDetail() {
    const monopoly = {
        id: 101,
        project: "Monopoly Prototype",
        imgs: [
            "img/pic_pro_1/mono_01.png",
            "img/pic_pro_1/mono_02.png",
            "img/pic_pro_1/mono_03.png",
            "img/pic_pro_1/mono_04.png",
            "img/pic_pro_1/mono_05.png",
            "img/pic_pro_1/mono_06.png",
            "img/pic_pro_1/mono_07.png",
        ],
        description: "Monopoly Prototype is a thrilling turn-based multiplayer game powered by Photon Network, reimagining the classic Monopoly experience. Players select unique characters with special abilities and navigate a dynamic map riddled with random traps, aiming to be the first to reach the final destination. The game features randomized player order and character-specific dice rolls, creating an unpredictable and exciting gameplay experience."
        ,
        feature: ["Multiplayer game", "Multiplayer systems powered by Photon Network", "Turnbase game", "Semi rogelike style"],
        reference: "https://github.com/joybanna/MonopolyGame.git",
        video: "",
    }
    const stealth = {
        id: 102,
        project: "Stealth Prototype",
        imgs: [
            "img/pic_pro_2/stealth_01.PNG",
            "img/pic_pro_2/stealth_02.PNG",
            "img/pic_pro_2/stealth_03.PNG",
            "img/pic_pro_2/stealth_04.PNG",
            "img/pic_pro_2/stealth_05.PNG",
        ],
        description: "Stealth Prototype is a challenging stealth game where players must guide a green box through a hazardous environment, remaining undetected by vigilant enemies. Utilize the scroll mouse to navigate the terrain and carefully observe enemy movements to avoid detection. Successfully evade enemies and overcome obstacles to reach your objective and claim victory in this thrilling stealth experience."
        ,
        feature: ["Stealth game", "Challenge to play"],
        reference: "https://github.com/joybanna/Sthealth_prototype.git",
        video: "",
    }
    const help = {
        id: 103,
        project: "Help Me plz !!!!",
        imgs: [
            "img/pic_pro_3/help_01.PNG",
            "img/pic_pro_3/help_02.PNG",
            "img/pic_pro_3/help_03.PNG",
            "img/pic_pro_3/help_04.PNG",
            "img/pic_pro_3/help_05.PNG",
            "img/pic_pro_3/help_06.PNG",
        ],
        reference: "https://github.com/joybanna/2DShooting.git",
        video: "",
        feature: ["2D Shooting Side Scroll game", "Simple to play"],
        description: "Help Me, Please!!! is a thrilling 2D side-scrolling shooting game where players shoot the red ball. Navigate the map, strategically striking objects to accumulate points and progress toward the ultimate objective. "
    }
    const typingTyohoon = {
        id: 104,
        project: "Typing Typhoon (NSC)",
        imgs: [
            "img/pic_pro_4/typing_01.PNG",
            "img/pic_pro_4/typing_02.PNG",
            "img/pic_pro_4/typing_03.PNG",
            "img/pic_pro_4/typing_04.PNG",
            "img/pic_pro_4/typing_05.PNG",
            "img/pic_pro_4/typing_06.PNG",
            "img/pic_pro_4/typing_07.PNG",
            "img/pic_pro_4/typing_08.PNG",
            "img/pic_pro_4/typing_09.PNG",
        ],
        reference: "",
        video: "",
        feature: ["2D Typing game", "Pixel art", "Simple to play"],
        description: "Typing Typhoon is an exciting 2D typing game developed with support from NECTEC, designed to motivate students and pupils to improve their software development skills through engaging and interactive typing practice. This dynamic game transforms typing into a fun and challenging experience"
    }
    const desir = {
        id: 105,
        project: "De'sir The fragment of Memory (Thesis)",
        imgs: [
            "img/pic_pro_5/de_01.PNG",
            "img/pic_pro_5/de_02.PNG",
            "img/pic_pro_5/de_03.PNG",
            "img/pic_pro_5/de_04.PNG",
            "img/pic_pro_5/de_05.PNG",
            "img/pic_pro_5/de_06.PNG",
            "img/pic_pro_5/de_07.PNG",
            "img/pic_pro_5/de_08.PNG",
            "img/pic_pro_5/de_09.PNG",
            "img/pic_pro_5/de_10.PNG",
            "img/pic_pro_5/de_11.PNG",
            "img/pic_pro_5/de_12.PNG",
            "img/pic_pro_5/de_13.PNG",
            "img/pic_pro_5/de_14.PNG",
            "img/pic_pro_5/de_15.PNG",
            "img/pic_pro_5/de_16.PNG",
            "img/pic_pro_5/de_17.PNG",
            "img/pic_pro_5/de_18.PNG",
        ],
        reference: "",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s78SPl3FBVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D Semi idle Heroes collection Game", "PC and Mobile platforms", "Inventory systems", "Turnbase game", "Auto and manual mode", "Resource management", "Upgrade systems", "Resource time", "Storyline"],
        description: "Desir is a captivating 2D semi-idle and turn-base game where players collect and strategically utilize a diverse roster of heroes. Engage in thrilling battles using both auto and manual modes. In auto mode, plan your team's actions before the battle commences, while manual mode grants you direct control during the fight. Continuously upgrade your heroes to enhance their strength and conquer increasingly challenging battles in this engaging and dynamic game."
    }
    const theLost = {
        id: 106,
        project: "The Lost Treasure",
        imgs: [
            "img/pic_pro_6/the_01.PNG",
            "img/pic_pro_6/the_02.PNG",
            "img/pic_pro_6/the_03.PNG",
            "img/pic_pro_6/the_04.PNG",
        ],
        reference: "https://github.com/joybanna/The_Lost_Treasure.git",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FiDc8XmJOSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["3D plazzle platform Game", "Third-person camera", "Interactive NPC", "Enemy use navmesh agent", "Storyline"],
        description: "The Lost Treasure is an immersive 3D puzzle-platformer where players embark on an exciting adventure. Interact with engaging NPCs for clues and guidance as you navigate challenging 3D platforms, overcoming obstacles and solving intricate puzzles to uncover the location of the long-lost treasure."
    }
    const skyShooter = {
        id: 107,
        project: "Sky Shooting",
        imgs: [
            "img/pic_pro_7/sky_01.PNG",
            "img/pic_pro_7/sky_02.PNG",
            "img/pic_pro_7/sky_03.PNG",
            "img/pic_pro_7/sky_04.PNG",
            "img/pic_pro_7/sky_05.PNG",
            "img/pic_pro_7/sky_06.PNG",
        ],
        reference: "https://github.com/joybanna/skyshooterAR.git",
        video: "",
        feature: ["3D Shooting Game", "Mobile platforms", "AR system powered by Vuforia", "Customize AR markers", "Aerial combat", "Castle defense"],
        description: "Sky Shooting is an exhilarating 3D Augmented Reality (AR) shooting game powered by the Vuforia engine. Players can customize their own AR markers to trigger immersive gameplay. Once a marker is detected, captivating in-game objects appear on the player's device. Engage in thrilling aerial combat, shooting down enemies to rack up points and valiantly defend your castle in this dynamic and immersive AR experience."
    }
    const findMe = {
        id: 108,
        project: "Find Me",
        imgs: [
            "img/pic_pro_8/find_01.PNG",
            "img/pic_pro_8/find_02.PNG",
            "img/pic_pro_8/find_03.PNG",
            "img/pic_pro_8/find_04.PNG",
            "img/pic_pro_8/find_05.PNG",
            "img/pic_pro_8/find_06.PNG",
            "img/pic_pro_8/find_07.PNG",
            "img/pic_pro_8/find_08.PNG",

        ],
        reference: "https://github.com/joybanna/Find_Me.git",
        video: "",
        feature: ["3D Hide and Seek Game", "Multiplayer systems powered by Unet", "Third-person shooting", "Side arm camera", "Character transformation"],
        description: "Find Me is a thrilling 3D multiplayer Hide and Seek game powered by the robust Unet system. Players are divided into two factions: the cunning Hiders who can conceal themselves within objects, and the vigilant Hunters armed with deadly guns. The game culminates in a tense standoff where Hunters must eliminate all Hiders before time expires, or risk a victory for the elusive Hiders who successfully evade capture."
    }

    //##############################################################################################################
    const towerDefence = {
        id: 201,
        project: "Kingdom castle",
        imgs: [
            "img/KindomCastle/KC_001.png",
            "img/KindomCastle/KC_002.png",
            "img/KindomCastle/KC_003.png",
            "img/KindomCastle/KC_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=com.td.castle.tower.defense&hl=th",
        video: '<iframe width="315" height="560" src="https://www.youtube.com/embed/qU-U4KBW2yE?si=H-vPj_idG2LMQf28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D Tower Defence game", "Resource management", "Upgrade systems", "Storyline", "Enemy wave", "Hero system", "Building system", "Resource time", "Firebsae API (Storage,Function,AB Test,Event)", "Inapp purchase", "Admob"],
        description: "Kingdom Castle is a thrilling tower defense game where players become valiant defenders, strategically positioning heroes and constructing fortified buildings to withstand waves of monstrous attacks. Through careful upgrades and resource management, players must fortify their kingdom, adapt to evolving threats, and ultimately safeguard their castle from impending doom. This engaging blend of strategy and action provides a challenging and rewarding gameplay experience."
    }
    const popit = {
        id: 202,
        project: "Popit",
        imgs: [
            "img/PopIt/PI_001.png",
            "img/PopIt/PI_002.png",
            "img/PopIt/PI_003.png",
            "img/PopIt/PI_004.png",
            "img/PopIt/PI_005.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=popit.magic.fidget.toy.antistress",
        video: '<iframe width="315" height="560" src="https://www.youtube.com/embed/Dzn-IdZh-UI?si=cD13J0xZrWaTnTV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["3D Popit simulation game", "Create Pop It fidget toys", "Play with Pop It fidget toys", "Trade Pop It fidget toys", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Pop It is a popular simulation game based on the physical fidget toy of the same name. In the game, players can Create Pop It fidget toys: Design and customize their own Pop Its with various shapes, colors, and patterns.Play with Pop It fidget toys: Simulate the satisfying popping action of the toy on the screen.Trade Pop It fidget toys: Exchange their creations with bot, expanding their collections."
    }
    const stealGame = {
        id: 203,
        project: "Steal Game",
        imgs: [
            "img/StealGame/SG_001.png",
            "img/StealGame/SG_002.png",
            "img/StealGame/SG_003.png",
            "img/StealGame/SG_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=stickman.thief.brain.puzzle",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/Pk4pX-ceYcU?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D puzzle game", "A lot of levels", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Steal Game is a captivating puzzle game where players strategically guide a character, often with limited movement, to collect valuable objects scattered across a level. Players must carefully drag a hand character around obstacles and avoid detection to successfully .Steal their targets and progress through increasingly challenging puzzles. The game's unique hand-based control scheme adds a layer of intuitive interaction, making the gameplay both challenging and rewarding."
    }
    const drawpuzzle = {
        id: 204,
        project: "Draw Puzzle",
        imgs: [
            "img/DrawPuzzle/DP_001.png",
            "img/DrawPuzzle/DP_002.png",
            "img/DrawPuzzle/DP_003.png",
            "img/DrawPuzzle/DP_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=com.draw.puzzle.draw.one.part",
        video: '<iframe width="315" height="560" src="https://www.youtube.com/embed/nC7XgYlXWiU?si=5CTjuNQsZcy0CXlT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D puzzle game", "A lot of levels", "Draw & Remove obejct", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Draw Puzzle is an ingenious puzzle game where players must creatively solve challenges by strategically drawing and erasing objects within a confined space. This unique gameplay mechanic encourages players to think outside the box, experiment with different approaches, and experience the satisfaction of overcoming seemingly impossible obstacles.  "
    }
    const pathpuzzle = {
        id: 205,
        project: "Path Puzzle",
        imgs: [
            "img/PathPuzzle/PP_001.png",
            "img/PathPuzzle/PP_002.png",
            "img/PathPuzzle/PP_003.png",
            "img/PathPuzzle/PP_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=doge.rush.race.toilet.rescue.puzzle",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/_4hDSVZaKFg?si=oUCqDuv-0b8SNUUH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D puzzle game", "A lot of levels", "Draw path", "Match color", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Path Puzzle is a challenging game that combines drawing and matching mechanics. Players must strategically draw lines to guide characters of the same color to their homes, while carefully avoiding obstacles and ensuring that characters do not collide with each other. This complex puzzle game requires careful planning, creative problem-solving, and precise execution."
    }
    const superslime = {
        id: 206,
        project: "Super Slime",
        imgs: [
            "img/Slime/S_001.png",
            "img/Slime/S_002.png",
            "img/Slime/S_003.png",
            "img/Slime/S_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=superdiy.slime.simulator.asmr.art",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/BBmc143mSOU?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["3D slime simulation game", "Create slime", "Play with slime", "Paint slime", "Custom Shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Super Slime is a captivating slime simulator that allows players to dive into the world of gooey creations. Players can instantly enjoy a variety of pre-made slime presets or unleash their creativity by designing and customizing their own unique slimes with a vast array of textures, colors, and additives. This immersive experience brings the joy of playing with slime to the digital world, offering endless possibilities for experimentation and imaginative play."
    }
    const monsterdraft = {
        id: 207,
        project: "Monster Draft",
        imgs: [
            "img/MonsterDraft/MD_001.png",
            "img/MonsterDraft/MD_002.png",
            "img/MonsterDraft/MD_003.png",
            "img/MonsterDraft/MD_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=monster.battle.run.fight",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/EBTJlSeb9CQ?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["3D running game", "Collect coins", "Collect cards", "Battle with cards", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Monster Draft is a fast-paced hyper-casual game where players must skillfully navigate a challenging obstacle course, collecting valuable coins and powerful cards scattered throughout. These collected cards are then used to assemble a battle deck for a thrilling showdown. Victory in the battle unlocks the next level, presenting increasingly difficult challenges."
    }
    const mergehero = {
        id: 208,
        project: "Merge Hero",
        imgs: [
            "img/MergeHero/MH_001.png",
            "img/MergeHero/MH_002.png",
            "img/MergeHero/MH_003.png",
            "img/MergeHero/MH_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=merge.master.hero.monster.battle",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/5jXyZ7WQRRA?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D merge game", "Merge system", "Battle with monster", "Auto level generate", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Merge Hero is an engaging merge game where players strategically place and combine identical heroes to upgrade their power and create formidable warriors. These powerful heroes then take to the battlefield to defend against waves of monstrous enemies, with each successful wave unlocking new challenges and opportunities for further hero evolution."
    }
    const savethedog = {
        id: 209,
        project: "Save The Dog",
        imgs: [
            "img/SaveTheDog/STD_001.png",
            "img/SaveTheDog/STD_002.png",
            "img/SaveTheDog/STD_003.png",
            "img/SaveTheDog/STD_004.png",
            "img/SaveTheDog/STD_005.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=savepet.rescue.protect.draw.dog",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/98QfuuXuBCM?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D puzzle game", "A lot of levels", "Draw line to protect dog", "Tile map", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Save the Dog is a heartwarming and challenging drawing puzzle game. Players must creatively draw lines and shapes to construct protective barriers, shielding a helpless dog from a swarm of angry bees. This engaging puzzle game encourages strategic thinking and innovative solutions as players strive to keep the adorable canine safe from harm."
    }
    const watersort = {
        id: 210,
        project: "Water Sort",
        imgs: [
            "img/WaterSort/WS_001.png",
            "img/WaterSort/WS_002.png",
            "img/WaterSort/WS_003.png",
            "img/WaterSort/WS_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=water.sort.ball.bubble.soda.puzzle",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/4d9SwRUQd5I?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D sorting puzzle game", "Auto level generate", "Color sorting", "Water pouring shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Water Sort is a captivating sorting puzzle game where players must strategically pour colored water between various tubes. The objective is to successfully separate all the colors of water into individual tubes, requiring careful planning and logical thinking to overcome each challenging level."
    }
    const hairsalon = {
        id: 211,
        project: "Hair Salon",
        imgs: [
            "img/HairSalon/HS_002.png",
            "img/HairSalon/HS_003.png",
            "img/HairSalon/HS_004.png",
            "img/HairSalon/HS_005.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=hairsalon.makeup.dressup.artist.princess",
        video: '<iframe width="315" height="560" src="https://youtube.com/embed/-UcFjtm-0ZA?si=RBPfDhS3WhUyAit8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["3D hair salon simulation game", "Hair styling", "Hair coloring", "Accessories", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Hair Salon is an immersive simulation and dress-up game that allows players to step into the shoes of a talented stylist. Players can unleash their creativity by experimenting with a variety of hairstyles, colors, and accessories, transforming their virtual clients into fashion icons. This engaging game offers a fun and interactive experience for aspiring stylists and fashion enthusiasts alike."
    }
    const parkescape = {
        id: 212,
        project: "Park Escape",
        imgs: [
            "img/ParkEscape/PE_001.png",
            "img/ParkEscape/PE_002.png",
            "img/ParkEscape/PE_003.png",
            "img/ParkEscape/PE_004.png",
        ],
        reference: "",
        video: "",
        feature: ["3D escape puzzle game", "A lot of levels", "Match-three mechanics", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Park Escape is a delightful match-three puzzle game where players strategically select and move units across the board. The goal is to guide units of the same color towards their corresponding buses, solving each level by ensuring all units reach their designated transportation. This engaging game blends match-three mechanics with strategic unit movement, providing a challenging and rewarding puzzle-solving experience."
    }
    const findit = {
        id: 213,
        project: "Find It",
        imgs: [
            "img/FindIt/FI_001.png",
            "img/FindIt/FI_002.png",
            "img/FindIt/FI_003.png",
            "img/FindIt/FI_004.png",
        ],
        reference: "https://play.google.com/store/apps/details?id=find.difference.hidden.object.scavenger",
        video: '<iframe width="315" height="560" src="https://www.youtube.com/embed/Vs2OTyFyHYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        feature: ["2D find the objects in game", "A lot of game mode", "Custom shader", "Unity addressable", "Firebsae API (Storage,Event)", "Inapp purchase", "Admob"],
        description: "Find It is an engaging search and collect game where players embark on exciting journeys through expansive maps to locate hidden goal objects. With a diverse range of maps and exciting game modes, Find It offers endless hours of exploration, discovery, and rewarding challenges as players hone their observation skills and uncover hidden treasures."
    }


    const projectList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe,
        towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, parkescape, findit];
    return projectList;
}
