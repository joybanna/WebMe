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
    var content = document.getElementById('carousel-content');
    var mainContent = document.createElement('div');
    mainContent.className = 'carousel-slide-container';
    data.imgs.map((img) => {
        var imgContent = document.createElement('img');
        imgContent.src = img;
        imgContent.alt = img;
        imgContent.className = 'carousel-img';
        mainContent.appendChild(imgContent);
    });
    content.appendChild(mainContent);

    var carouselDot = document.getElementById('carousel-dot');
    data.imgs.map((img, index) => {
        var dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('onclick', 'currentSlide(' + index + ')');
        carouselDot.appendChild(dot);
    });
    content.appendChild(carouselDot);

    var nextBtn = document.createElement('div');
    nextBtn.className = 'btn-right';
    nextBtn.id = 'nextBtn';
    nextBtn.innerHTML = '&#10095;';

    var prevBtn = document.createElement('div');
    prevBtn.className = 'btn-left';
    prevBtn.id = 'prevBtn';
    prevBtn.innerHTML = '&#10094;';

    content.appendChild(nextBtn);
    content.appendChild(prevBtn);
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
    var reference = document.getElementById('reference');
    reference.innerHTML = `<a href="${data.reference}">Source&Reference</a>`;
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
    });
}



WriteContent();



function ProjectsDetail() {
    const monopoly = {
        id: 101,
        project: "Monopoly Prototype",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        description: "Monopoly Prototype is a thrilling turn-based multiplayer game powered by Photon Network, reimagining the classic Monopoly experience. Players select unique characters with special abilities and navigate a dynamic map riddled with random traps, aiming to be the first to reach the final destination. The game features randomized player order and character-specific dice rolls, creating an unpredictable and exciting gameplay experience."
        ,
        feature: ["Multiplayer game", "Multiplayer systems powered by Photon Network", "Turnbase game", "Semi rogelike style"],
        reference: "",
    }
    const stealth = {
        id: 102,
        project: "Stealth Prototype",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        description: "Stealth Prototype is a challenging stealth game where players must guide a green box through a hazardous environment, remaining undetected by vigilant enemies. Utilize the scroll mouse to navigate the terrain and carefully observe enemy movements to avoid detection. Successfully evade enemies and overcome obstacles to reach your objective and claim victory in this thrilling stealth experience."
        ,
        feature: ["Stealth game", "Challenge to play"],
        reference: "",
    }
    const help = {
        id: 103,
        project: "Help Me plz !!!!",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D Shooting Side Scroll game", "Simple to play"],
        description: "Help Me, Please!!! is a thrilling 2D side-scrolling shooting game where players shoot the red ball. Navigate the map, strategically striking objects to accumulate points and progress toward the ultimate objective. "
    }
    const typingTyohoon = {
        id: 104,
        project: "Typing Typhoon (NSC)",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D Typing game", "Pixel art", "Simple to play"],
        description: "Typing Typhoon is an exciting 2D typing game developed with support from NECTEC, designed to motivate students and pupils to improve their software development skills through engaging and interactive typing practice. This dynamic game transforms typing into a fun and challenging experience"
    }
    const desir = {
        id: 105,
        project: "De'sir The fragment of Memory (Thesis)",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D Semi idle Heroes collection Game", "PC and Mobile platforms", "Inventory systems", "Turnbase game", "Auto and manual mode", "Resource management", "Upgrade systems", "Resource time", "Storyline"],
        description: "Desir is a captivating 2D semi-idle and turn-base game where players collect and strategically utilize a diverse roster of heroes. Engage in thrilling battles using both auto and manual modes. In auto mode, plan your team's actions before the battle commences, while manual mode grants you direct control during the fight. Continuously upgrade your heroes to enhance their strength and conquer increasingly challenging battles in this engaging and dynamic game."
    }
    const theLost = {
        id: 106,
        project: "The Lost Treasure",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D plazzle platform Game", "Third-person camera", "Interactive NPC", "Enemy use navmesh agent", "Storyline"],
        description: "The Lost Treasure is an immersive 3D puzzle-platformer where players embark on an exciting adventure. Interact with engaging NPCs for clues and guidance as you navigate challenging 3D platforms, overcoming obstacles and solving intricate puzzles to uncover the location of the long-lost treasure."
    }
    const skyShooter = {
        id: 107,
        project: "Sky Shooting",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D Shooting Game", "Mobile platforms", "AR system powered by Vuforia", "Customize AR markers", "Aerial combat", "Castle defense"],
        description: "Sky Shooting is an exhilarating 3D Augmented Reality (AR) shooting game powered by the Vuforia engine. Players can customize their own AR markers to trigger immersive gameplay. Once a marker is detected, captivating in-game objects appear on the player's device. Engage in thrilling aerial combat, shooting down enemies to rack up points and valiantly defend your castle in this dynamic and immersive AR experience."
    }
    const findMe = {
        id: 108,
        project: "Find Me",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D Hide and Seek Game", "Multiplayer systems powered by Unet", "Third-person shooting", "Side arm camera", "Character transformation"],
        description: "Find Me is a thrilling 3D multiplayer Hide and Seek game powered by the robust Unet system. Players are divided into two factions: the cunning Hiders who can conceal themselves within objects, and the vigilant Hunters armed with deadly guns. The game culminates in a tense standoff where Hunters must eliminate all Hiders before time expires, or risk a victory for the elusive Hiders who successfully evade capture."
    }

    //##############################################################################################################
    const towerDefence = {
        id: 201,
        project: "Kingdom castle",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D Tower Defence game", "Resource management", "Upgrade systems", "Storyline", "Enemy wave", "Hero system", "Building system", "Resource time", "Firebsae API (Storage,Function,AB Test,Event)", "Inapp purchase", "Admob"],
        description: "Kingdom Castle is a thrilling tower defense game where players become valiant defenders, strategically positioning heroes and constructing fortified buildings to withstand waves of monstrous attacks. Through careful upgrades and resource management, players must fortify their kingdom, adapt to evolving threats, and ultimately safeguard their castle from impending doom. This engaging blend of strategy and action provides a challenging and rewarding gameplay experience."
    }
    const popit = {
        id: 202,
        project: "Popit",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D Popit simulation game", "Create Pop It fidget toys", "Play with Pop It fidget toys", "Trade Pop It fidget toys", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Pop It is a popular simulation game based on the physical fidget toy of the same name. In the game, players can Create Pop It fidget toys: Design and customize their own Pop Its with various shapes, colors, and patterns.Play with Pop It fidget toys: Simulate the satisfying popping action of the toy on the screen.Trade Pop It fidget toys: Exchange their creations with bot, expanding their collections."
    }
    const stealGame = {
        id: 203,
        project: "Steal Game",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D puzzle game", "A lot of levels", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Steal Game is a captivating puzzle game where players strategically guide a character, often with limited movement, to collect valuable objects scattered across a level. Players must carefully drag a hand character around obstacles and avoid detection to successfully .Steal their targets and progress through increasingly challenging puzzles. The game's unique hand-based control scheme adds a layer of intuitive interaction, making the gameplay both challenging and rewarding."
    }
    const drawpuzzle = {
        id: 204,
        project: "Draw Puzzle",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D puzzle game", "A lot of levels", "Draw & Remove obejct", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Draw Puzzle is an ingenious puzzle game where players must creatively solve challenges by strategically drawing and erasing objects within a confined space. This unique gameplay mechanic encourages players to think outside the box, experiment with different approaches, and experience the satisfaction of overcoming seemingly impossible obstacles.  "
    }
    const pathpuzzle = {
        id: 205,
        project: "Path Puzzle",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D puzzle game", "A lot of levels", "Draw path", "Match color", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Path Puzzle is a challenging game that combines drawing and matching mechanics. Players must strategically draw lines to guide characters of the same color to their homes, while carefully avoiding obstacles and ensuring that characters do not collide with each other. This complex puzzle game requires careful planning, creative problem-solving, and precise execution."
    }
    const superslime = {
        id: 206,
        project: "Super Slime",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D slime simulation game", "Create slime", "Play with slime", "Paint slime", "Custom Shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Super Slime is a captivating slime simulator that allows players to dive into the world of gooey creations. Players can instantly enjoy a variety of pre-made slime presets or unleash their creativity by designing and customizing their own unique slimes with a vast array of textures, colors, and additives. This immersive experience brings the joy of playing with slime to the digital world, offering endless possibilities for experimentation and imaginative play."
    }
    const monsterdraft = {
        id: 207,
        project: "Monster Draft",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D running game", "Collect coins", "Collect cards", "Battle with cards", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Monster Draft is a fast-paced hyper-casual game where players must skillfully navigate a challenging obstacle course, collecting valuable coins and powerful cards scattered throughout. These collected cards are then used to assemble a battle deck for a thrilling showdown. Victory in the battle unlocks the next level, presenting increasingly difficult challenges."
    }
    const mergehero = {
        id: 208,
        project: "Merge Hero",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D merge game", "Merge system", "Battle with monster", "Auto level generate", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Merge Hero is an engaging merge game where players strategically place and combine identical heroes to upgrade their power and create formidable warriors. These powerful heroes then take to the battlefield to defend against waves of monstrous enemies, with each successful wave unlocking new challenges and opportunities for further hero evolution."
    }
    const savethedog = {
        id: 209,
        project: "Save The Dog",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D puzzle game", "A lot of levels", "Draw line to protect dog", "Tile map", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Save the Dog is a heartwarming and challenging drawing puzzle game. Players must creatively draw lines and shapes to construct protective barriers, shielding a helpless dog from a swarm of angry bees. This engaging puzzle game encourages strategic thinking and innovative solutions as players strive to keep the adorable canine safe from harm."
    }
    const watersort = {
        id: 210,
        project: "Water Sort",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D sorting puzzle game", "Auto level generate", "Color sorting", "Water pouring shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Water Sort is a captivating sorting puzzle game where players must strategically pour colored water between various tubes. The objective is to successfully separate all the colors of water into individual tubes, requiring careful planning and logical thinking to overcome each challenging level."
    }
    const hairsalon = {
        id: 211,
        project: "Hair Salon",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D hair salon simulation game", "Hair styling", "Hair coloring", "Accessories", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Hair Salon is an immersive simulation and dress-up game that allows players to step into the shoes of a talented stylist. Players can unleash their creativity by experimenting with a variety of hairstyles, colors, and accessories, transforming their virtual clients into fashion icons. This engaging game offers a fun and interactive experience for aspiring stylists and fashion enthusiasts alike."
    }
    const parkescape = {
        id: 212,
        project: "Park Escape",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["3D escape puzzle game", "A lot of levels", "Match-three mechanics", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        description: "Park Escape is a delightful match-three puzzle game where players strategically select and move units across the board. The goal is to guide units of the same color towards their corresponding buses, solving each level by ensuring all units reach their designated transportation. This engaging game blends match-three mechanics with strategic unit movement, providing a challenging and rewarding puzzle-solving experience."
    }
    const findit = {
        id: 213,
        project: "Find It",
        imgs: [
            "https://loremflickr.com/200/200?random=1",
            "https://loremflickr.com/200/200?random=2",
            "https://loremflickr.com/200/200?random=3",
            "https://loremflickr.com/200/200?random=4"
        ],
        reference: "",
        feature: ["2D find the objects in game", "A lot of game mode", "Custom shader", "Unity addressable", "Firebsae API (Storage,Event)", "Inapp purchase", "Admob"],
        description: "Find It is an engaging search and collect game where players embark on exciting journeys through expansive maps to locate hidden goal objects. With a diverse range of maps and exciting game modes, Find It offers endless hours of exploration, discovery, and rewarding challenges as players hone their observation skills and uncover hidden treasures."
    }


    const projectList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe, 
        towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, parkescape, findit];
    return projectList;
}
