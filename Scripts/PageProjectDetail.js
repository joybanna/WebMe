// import { DataProject } from './ProjectCard.js';

function ReadParameterPage() {
    var params = new URLSearchParams(window.location.search);
    console.log(params);
    var name = params.get('project');
    console.log(name);
    return name;
}

function GetDataProject() {
    let project = ReadParameterPage();
    console.log("get data project : " + project);
    let refData = require('./ProjectCard.js');
    let personalList = refData.DataProject(true);
    let companyList = refData.DataProject(false);
    let list = personalList.concat(companyList);
    let projectData = list.find((data) => {
        var newNames = data.project.replace(' ', '');
        newNames === project
    });
    console.log(projectData.project);
    return projectData;
}

// function ListImgProject(data) {
// var imgs = data.imgs;
// var imgList = imgs.map((img) => {
//     return `<img src="${img}" alt="${img}">`;
// }

function WriteContent() {
    document.addEventListener('DOMContentLoaded', () => {
        var projectData = GetDataProject();
        var head = document.getElementById('head_text');
        var text = document.createElement('a');
        text.innerHTML = projectData.project;
        head.appendChild(text);
        // head.innerHTML = `<a class='head_project'>${projectData.project}</a>`;
        // let imgs = document.getElementById('img_project');


    });
}

WriteContent();

