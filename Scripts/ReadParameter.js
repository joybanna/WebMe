function ReadParameterPage() {
    var params = new URLSearchParams(window.location.search);
    console.log(params);
    var name = params.get('project');
    console.log(name);
    return name;
}



function TestContent() {
    document.addEventListener('DOMContentLoaded', () => {
        var name = ReadParameterPage();
        var show = document.getElementById('paramDisplay');
        var content = document.createElement('div');
        content.innerHTML = `<h1>${name}</h1>`;
        show.appendChild(content);
    });
}

TestContent();