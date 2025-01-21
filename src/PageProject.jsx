import React from 'react'
import '../src/css/pageproject.css'
import { useParams } from 'react-router'
import DataProject from './components/DataProject'

function PageProject() {

    let project = useParams();
    console.log(project);

    let personalList = DataProject(true);
    let companyList = DataProject(false);
    let list = personalList.concat(companyList);

    let projectData = list.find((data) => data.project === project.project);
    console.log(projectData.project);

    return (
       
        <div className='Content_project'>
             <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <div className='head_text'><a className='head_project'>{projectData.project}</a></div>
            <div className='project_img'>
                <img src={projectData.img} alt={projectData.project} />
            </div>
            <div className='project_info'>
                <a className='info_project'>{projectData.detail}</a>
            </div>
            <div className='project_feature'>
                <a className='feature_project'>Feature</a>
                <ul>
                    {projectData.list.map((data) => <li>{data}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default PageProject