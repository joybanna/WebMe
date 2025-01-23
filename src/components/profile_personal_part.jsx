import React from 'react'
import perImg from '../assets/img/038-id card.png'

function profile_personal_part() {
  return (
    <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-third w3-center">
          <img class="icon-toppic-l" src={perImg} />
        </div>
        <div class="w3-twothird">
          <div class="toppic-text-r">Personal Data</div>
          <div class="box-personal">
            <div class="box1-1"><a class="sub-text">Date of Birth</a></div>
            <div class="box1-2"><a class="sub-text">: 26-09-1997</a></div>
            <div class="box2-1"><a class="sub-text">Age</a></div>
            <div class="box2-2"><a class="sub-text">: 23</a></div>
            <div class="box3-1"><a class="sub-text">Height</a></div>
            <div class="box3-2"><a class="sub-text">: 175</a></div>
            <div class="box4-1"><a class="sub-text">Weight</a></div>
            <div class="box4-2"><a class="sub-text">: 60</a></div>
            <div class="box5-1"><a class="sub-text">Nationality</a></div>
            <div class="box5-2"><a class="sub-text">: Thailand</a></div>
            <div class="box6-1"><a class="sub-text">Gender</a></div>
            <div class="box6-2"><a class="sub-text">: Male</a></div>
            <div class="box7-1"><a class="sub-text">Marital Status</a></div>
            <div class="box7-2"><a class="sub-text">: Single</a></div>
            <div class="box8-1"><a class="sub-text">Military Status</a></div>
            <div class="box8-2"><a class="sub-text">: Exempted</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile_personal_part