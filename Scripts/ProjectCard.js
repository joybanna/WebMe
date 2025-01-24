function ProjectCard(data) {
    var card = document.createElement('div');
    card.className = 'w3-col l3 m6 w3-margin-bottom';
    card.innerHTML = `
        <div class='w3-display-container w3-hover-grayscale'>
            <div class='w3-display-topleft w3-black w3-padding'><a className='project-name'>${data.project}</a></div>
            <img className='project_img' src=${data.thumnil} alt=${data.project} />
            <div class="w3-display-middle w3-display-hover w3-xlarge">
                <a class="w3-button w3-text-white" href=${data.hf}>More detail</a>
            </div>
        </div>`;
    return card;
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
        project: "Monopoly Prototype",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=MonopolyPrototype",
        list: ["Multiplayer game", "Multiplayer systems powered by Photon Network", "Turnbase game", "Semi rogelike style"],
        detail: "Monopoly Prototype is a thrilling turn-based multiplayer game powered by Photon Network, reimagining the classic Monopoly experience. Players select unique characters with special abilities and navigate a dynamic map riddled with random traps, aiming to be the first to reach the final destination. The game features randomized player order and character-specific dice rolls, creating an unpredictable and exciting gameplay experience."
    }
    const stealth = {
        project: "Stealth Prototype",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=StealthPrototype",
        list: ["Stealth game", "Challenge to play"],
        detail: "Stealth Prototype is a challenging stealth game where players must guide a green box through a hazardous environment, remaining undetected by vigilant enemies. Utilize the scroll mouse to navigate the terrain and carefully observe enemy movements to avoid detection. Successfully evade enemies and overcome obstacles to reach your objective and claim victory in this thrilling stealth experience."
    }
    const help = {
        project: "Help Me plz !!!!",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=HelpMeplz!!!!",
        list: ["2D Shooting Side Scroll game", "Simple to play"],
        detail: "Help Me, Please!!! is a thrilling 2D side-scrolling shooting game where players shoot the red ball. Navigate the map, strategically striking objects to accumulate points and progress toward the ultimate objective. "
    }
    const typingTyohoon = {
        project: "Typing Typhoon (NSC)",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=TypingTyphoon(NSC)",
        list: ["2D Typing game", "Pixel art", "Simple to play"],
        detail: "Typing Typhoon is an exciting 2D typing game developed with support from NECTEC, designed to motivate students and pupils to improve their software development skills through engaging and interactive typing practice. This dynamic game transforms typing into a fun and challenging experience"
    }
    const desir = {
        project: "De'sir The fragment of Memory (Thesis)",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=DesirThefragmentofMemory(Thesis)",
        list: ["2D Semi idle Heroes collection Game", "PC and Mobile platforms", "Inventory systems", "Turnbase game", "Auto and manual mode", "Resource management", "Upgrade systems", "Resource time", "Storyline"],
        detail: "Desir is a captivating 2D semi-idle and turn-base game where players collect and strategically utilize a diverse roster of heroes. Engage in thrilling battles using both auto and manual modes. In auto mode, plan your team's actions before the battle commences, while manual mode grants you direct control during the fight. Continuously upgrade your heroes to enhance their strength and conquer increasingly challenging battles in this engaging and dynamic game."
    }
    const theLost = {
        project: "The Lost Treasure",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=TheLostTreasure",
        list: ["3D plazzle platform Game", "Third-person camera", "Interactive NPC", "Enemy use navmesh agent", "Storyline"],
        detail: "The Lost Treasure is an immersive 3D puzzle-platformer where players embark on an exciting adventure. Interact with engaging NPCs for clues and guidance as you navigate challenging 3D platforms, overcoming obstacles and solving intricate puzzles to uncover the location of the long-lost treasure."
    }
    const skyShooter = {
        project: "Sky Shooting",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=SkyShooting",
        list: ["3D Shooting Game", "Mobile platforms", "AR system powered by Vuforia", "Customize AR markers", "Aerial combat", "Castle defense"],
        detail: "Sky Shooting is an exhilarating 3D Augmented Reality (AR) shooting game powered by the Vuforia engine. Players can customize their own AR markers to trigger immersive gameplay. Once a marker is detected, captivating in-game objects appear on the player's device. Engage in thrilling aerial combat, shooting down enemies to rack up points and valiantly defend your castle in this dynamic and immersive AR experience."
    }
    const findMe = {
        project: "Find Me",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=FindMe",
        list: ["3D Hide and Seek Game", "Multiplayer systems powered by Unet", "Third-person shooting", "Side arm camera", "Character transformation"],
        detail: "Find Me is a thrilling 3D multiplayer Hide and Seek game powered by the robust Unet system. Players are divided into two factions: the cunning Hiders who can conceal themselves within objects, and the vigilant Hunters armed with deadly guns. The game culminates in a tense standoff where Hunters must eliminate all Hiders before time expires, or risk a victory for the elusive Hiders who successfully evade capture."
    }
    const personalList = [monopoly, stealth, help, typingTyohoon, desir, theLost, skyShooter, findMe]

    const towerDefence = {
        project: "Kingdom castle",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=Kingdomcastle",
        list: ["2D Tower Defence game", "Resource management", "Upgrade systems", "Storyline", "Enemy wave", "Hero system", "Building system", "Resource time", "Firebsae API (Storage,Function,AB Test,Event)", "Inapp purchase", "Admob"],
        detail: "Kingdom Castle is a thrilling tower defense game where players become valiant defenders, strategically positioning heroes and constructing fortified buildings to withstand waves of monstrous attacks. Through careful upgrades and resource management, players must fortify their kingdom, adapt to evolving threats, and ultimately safeguard their castle from impending doom. This engaging blend of strategy and action provides a challenging and rewarding gameplay experience."
    }
    const popit = {
        project: "Popit",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=Popit",
        list: ["3D Popit simulation game", "Create Pop It fidget toys", "Play with Pop It fidget toys", "Trade Pop It fidget toys", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Pop It is a popular simulation game based on the physical fidget toy of the same name. In the game, players can Create Pop It fidget toys: Design and customize their own Pop Its with various shapes, colors, and patterns.Play with Pop It fidget toys: Simulate the satisfying popping action of the toy on the screen.Trade Pop It fidget toys: Exchange their creations with bot, expanding their collections."
    }
    const stealGame = {
        project: "Steal Game",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=StealGame",
        list: ["2D puzzle game", "A lot of levels", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Steal Game is a captivating puzzle game where players strategically guide a character, often with limited movement, to collect valuable objects scattered across a level. Players must carefully drag a hand character around obstacles and avoid detection to successfully .Steal their targets and progress through increasingly challenging puzzles. The game's unique hand-based control scheme adds a layer of intuitive interaction, making the gameplay both challenging and rewarding."
    }
    const drawpuzzle = {
        project: "Draw Puzzle",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=DrawPuzzle",
        list: ["2D puzzle game", "A lot of levels", "Draw & Remove obejct", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Draw Puzzle is an ingenious puzzle game where players must creatively solve challenges by strategically drawing and erasing objects within a confined space. This unique gameplay mechanic encourages players to think outside the box, experiment with different approaches, and experience the satisfaction of overcoming seemingly impossible obstacles.  "
    }
    const pathpuzzle = {
        project: "Path Puzzle",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=PathPuzzle",
        list: ["2D puzzle game", "A lot of levels", "Draw path", "Match color", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Path Puzzle is a challenging game that combines drawing and matching mechanics. Players must strategically draw lines to guide characters of the same color to their homes, while carefully avoiding obstacles and ensuring that characters do not collide with each other. This complex puzzle game requires careful planning, creative problem-solving, and precise execution."
    }
    const superslime = {
        project: "Super Slime",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=SuperSlime",
        list: ["3D slime simulation game", "Create slime", "Play with slime", "Paint slime", "Custom Shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Super Slime is a captivating slime simulator that allows players to dive into the world of gooey creations. Players can instantly enjoy a variety of pre-made slime presets or unleash their creativity by designing and customizing their own unique slimes with a vast array of textures, colors, and additives. This immersive experience brings the joy of playing with slime to the digital world, offering endless possibilities for experimentation and imaginative play."
    }
    const monsterdraft = {
        project: "Monster Draft",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=MonsterDraft",
        list: ["3D running game", "Collect coins", "Collect cards", "Battle with cards", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Monster Draft is a fast-paced hyper-casual game where players must skillfully navigate a challenging obstacle course, collecting valuable coins and powerful cards scattered throughout. These collected cards are then used to assemble a battle deck for a thrilling showdown. Victory in the battle unlocks the next level, presenting increasingly difficult challenges."
    }
    const mergehero = {
        project: "Merge Hero",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=MergeHero",
        list: ["2D merge game", "Merge system", "Battle with monster", "Auto level generate", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Merge Hero is an engaging merge game where players strategically place and combine identical heroes to upgrade their power and create formidable warriors. These powerful heroes then take to the battlefield to defend against waves of monstrous enemies, with each successful wave unlocking new challenges and opportunities for further hero evolution."
    }
    const savethedog = {
        project: "Save The Dog",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=SaveTheDog",
        list: ["2D puzzle game", "A lot of levels", "Draw line to protect dog", "Tile map", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Save the Dog is a heartwarming and challenging drawing puzzle game. Players must creatively draw lines and shapes to construct protective barriers, shielding a helpless dog from a swarm of angry bees. This engaging puzzle game encourages strategic thinking and innovative solutions as players strive to keep the adorable canine safe from harm."
    }
    const watersort = {
        project: "Water Sort",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=WaterSort",
        list: ["2D sorting puzzle game", "Auto level generate", "Color sorting", "Water pouring shader", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Water Sort is a captivating sorting puzzle game where players must strategically pour colored water between various tubes. The objective is to successfully separate all the colors of water into individual tubes, requiring careful planning and logical thinking to overcome each challenging level."
    }
    const hairsalon = {
        project: "Hair Salon",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=HairSalon",
        list: ["3D hair salon simulation game", "Hair styling", "Hair coloring", "Accessories", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Hair Salon is an immersive simulation and dress-up game that allows players to step into the shoes of a talented stylist. Players can unleash their creativity by experimenting with a variety of hairstyles, colors, and accessories, transforming their virtual clients into fashion icons. This engaging game offers a fun and interactive experience for aspiring stylists and fashion enthusiasts alike."
    }
    const parkescape = {
        project: "Park Escape",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=ParkEscape",
        list: ["3D escape puzzle game", "A lot of levels", "Match-three mechanics", "Firebsae API (Event)", "Inapp purchase", "Admob"],
        detail: "Park Escape is a delightful match-three puzzle game where players strategically select and move units across the board. The goal is to guide units of the same color towards their corresponding buses, solving each level by ensuring all units reach their designated transportation. This engaging game blends match-three mechanics with strategic unit movement, providing a challenging and rewarding puzzle-solving experience."
    }
    const findit = {
        project: "Find It",
        thumnil: "https://loremflickr.com/200/200?random=1",
        hf: "../Pages/ProjectDetail.html?project=FindIt",
        list: ["2D find the objects in game", "A lot of game mode", "Custom shader", "Unity addressable", "Firebsae API (Storage,Event)", "Inapp purchase", "Admob"],
        detail: "Find It is an engaging search and collect game where players embark on exciting journeys through expansive maps to locate hidden goal objects. With a diverse range of maps and exciting game modes, Find It offers endless hours of exploration, discovery, and rewarding challenges as players hone their observation skills and uncover hidden treasures."
    }


    const companyList = [towerDefence, popit, stealGame, drawpuzzle, pathpuzzle, superslime, monsterdraft, mergehero, savethedog, watersort, hairsalon, findit]
    return isPersonal ? personalList : companyList;

}

// module.exports.DataProject = DataProject;

export { DataProject };
