
function WriteExperience() {
    document.addEventListener('DOMContentLoaded', () => {

        GetExperience();
    });
}

WriteExperience();

function GetExperience() {
    var feild = document.getElementById("experiences-feild");
    var box = document.createElement("div");
    box.className = "w3-padding-top-48";
    feild.appendChild(box);
    var data = DataExperience();
    data.forEach(element => {
        box.appendChild(ExperienceCard(element));
    });
}

function ExperienceCard(data) {
    var card = document.createElement("div");
    card.className = "w3-row";
    card.appendChild(DateExperience(data));
    card.appendChild(TitleExperience(data));
    card.appendChild(PositionExperience(data));
    card.appendChild(ListExperience(data));
    return card;

}

function DateExperience(data) {
    var dateBox = document.createElement("div");
    dateBox.className = "w3-col s6 w3-margin-bottom w3-margin-top";
    var date = document.createElement("a");
    date.className = "sub-text w3-xlarge";
    date.innerHTML = data.date;
    dateBox.appendChild(date);
    return dateBox;
}

function TitleExperience(data) {
    var titleBox = document.createElement("div");
    titleBox.className = "w3-col s6 w3-margin-bottom w3-margin-top";
    var title = document.createElement("a");
    title.className = "sub-text-title w3-xlarge";
    title.innerHTML = "<b>" + data.title + "</b>";
    titleBox.appendChild(title);
    return titleBox;
}

function PositionExperience(data) {
    var position = document.createElement("div");
    position.className = "w3-col s6 w3-margin-bottom w3-margin-top";
    var positionText = document.createElement("a");
    positionText.className = "sub-text-title-a w3-xlarge";
    positionText.innerHTML = "<b>" + data.position + "</b>";
    position.appendChild(positionText);
    return position;
}

function ListExperience(data) {
    var list = document.createElement("a");
    list.className = "w3-col s6 sub-text w3-xlarge";
    var ul = document.createElement("ul");
    data.list.forEach(element => {
        var li = document.createElement("li");
        li.className = "sub-text w3-large";
        li.innerHTML = element;
        ul.appendChild(li);
    });
    list.appendChild(ul);
    return list;
}


function DataExperience() {

    const NSC = {
        title: "The Twenty-first national Software Contest : NSC 2019",
        position: "Unity Developer",
        date: "August 2018 - October 2018",
        list: [
            "Designed a gameplay mechanic for the Typing Typhoon project.",
            "Developed the Typing Typhoon project, a typing game, utilizing the Unity engine and C# programming language.",
            "Proficiency in scripting."
        ]
    }
    const Varisoft = {
        title: "Varisoft",
        position: "Unity Developer (Internship)",
        date: "August 2019 - December 2019",
        list: [
            "Developed the Mutant Party project for a multiplayer game utilizing the Unity engine and C# programming language.",
            "Proficiency in scripting and version control systems.",
            "Experienced in working shader development, and physics simulations."
        ]
    }
    const questzy = {
        title: "Questzy",
        position: "Unity Developer (intermediate / mid-level)",
        date: "March 2021 - January 2025",
        list: [
            "Developed over ten mobile games for the Android platform utilizing the Unity engine and C# programming language.",
            "Proficient in scripting, performance optimization, asset management, and version control systems.",
            "Experienced in working with shaders, physics, and the Firebase API.",
            "Successfully implemented key game features, including in-app purchases (IAP), leaderboards, and monetization strategies.",
            "Contributed to enhancing game performance, resolving critical bugs, and integrating new game mechanics.",
            "Passionate about game development with a focus on creating engaging and innovative experiences for players."
        ]
    }
    const data = [questzy, Varisoft, NSC]
    return data;

}