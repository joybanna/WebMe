import React from 'react'
import skillImg from '../assets/img/096-idea.png'
function profile_skill_part() {
  return (
    <div class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <div class="toppic-text-l">Expertise</div>
          <div class="box-personal">
            <div class="box1-1">
              <a class="sub-text"><b>Unity Engine</b> </a>
            </div>
            <div class="box1-2">
              <a class="sub-text">
                <ul>
                  <li>Develop both 2D and 3D games for offline and online platforms.</li>
                  <li>Create an augmented reality (AR) game.</li>
                  <li>Manage and optimize game assets and code.</li>
                  <li>Develop plugins to support the team’s efforts.
                    Integrate with the Firebase API.</li>
                  <li>Create shaders using either a shader graph or scripting.</li>
                </ul>
              </a>
            </div>
            <div class="box2-1">
              <a class="sub-text"><b>C#</b> </a>
            </div>
            <div class="box2-2">
              <a class="sub-text">
                <ul>
                  <li>Object-Oriented Programming (OOP) organizes code into reusable components through objects and classes, enhancing modularity and maintenance.</li>
                  <li>Optimize script for software.</li>
                  <li>Data structures for managing data.</li>
                  <li>Pattern designs such as Singleton, Factory, and Observer help developers write maintainable and extensible code, ensuring long-term project success.</li>
                </ul>
              </a>
            </div>
            <div class="box3-1">
              <a class="sub-text"><b>HTML/CSS</b> </a>
            </div>
            <div class="box3-2">
              <a class="sub-text">
                <ul>
                  <li>Develop a foundational website.</li>
                  <li>Enhance the website's design using CSS.</li>
                </ul>
              </a>
            </div>
            <div class="box4-1">
              <a class="sub-text"><b>Maya </b> </a>
            </div>
            <div class="box4-2">
              <a class="sub-text">
                <ul>
                  <li>Develop a basic 3D model</li>
                  <li>Create a UV map texture for the model</li>
                  <li>Apply the texture to the model </li>
                  <li>Rig the basic model</li>
                  <li>Execute basic animation</li>
                </ul>
              </a>
            </div>
            <div class="box5-1">
              <a class="sub-text"><b>Version control</b> </a>
            </div>
            <div class="box5-2">
              <a class="sub-text">
                <ul>
                  <li>GitHub</li>
                  <li>Source tree</li>
                  <li>Bitbucket</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
        <div class="w3-third w3-center">
          <img class="icon-toppic-r" src={skillImg} />
        </div>
      </div>
    </div>
  )
}

export default profile_skill_part