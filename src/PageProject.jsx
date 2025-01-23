import React from 'react'
import '../src/css/pageproject.css'
import { useParams } from 'react-router'
import DataProject from './components/DataProject'
// import  '../src/scripts/pictureslide.js'
// import { Scripts } from 'react-router'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useState } from 'react';

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
            <div className='head_text'><a className='head_project'>{projectData.project}</a></div>
            <div className='carousel-container'>
                <div class="carousel-slide-container">
                    <img class="carousel-img" src="https://loremflickr.com/200/200?random=1" />
                    <img class="carousel-img" src="https://loremflickr.com/200/200?random=1" />
                    <img class="carousel-img" src="https://loremflickr.com/200/200?random=1" />
                </div>

                <div class="carousel-dot">
                    <span data-item="0" class="dot active"></span>
                    <span data-item="1" class="dot"></span>
                    <span data-item="2" class="dot"></span>
                    <span data-item="3" class="dot"></span>
                </div>

                <div id="nextBtn" class="btn-right " >
                    &#10095;
                </div>
                <div id="prevBtn" class="btn-left" >
                    &#10094;
                </div>

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