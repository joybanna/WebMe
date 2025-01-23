import React from 'react'

function DataExperiece() {
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
        position: "Unity Developer {Internship}",
        date: "August 2019 - December 2019",
        list: [
            "Developed the Mutant Party project for a multiplayer game utilizing the Unity engine and C# programming language.",
            "Proficiency in scripting and version control systems.",
            "Experienced in working shader development, and physics simulations."
        ]
    }
    const questzy = {
        title: "Questzy",
        position: "Unity Developer {mid-level}",
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

export default DataExperiece

