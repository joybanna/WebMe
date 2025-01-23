import React from 'react'
import eduImg from '../assets/img/031-book.png'

function profile_enducate_part() {
  return (
    <div class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <div class="toppic-text-l">Education</div>
          <div class="box-personal">
            <div class="box1-1"><a class="sub-text">2011 - 2016</a></div>
            <div class="box1-2">
              <a class="sub-text"><b>Rittiyawannalai Schoo</b>l</a>
            </div>
            <div class="box2-2">
              <a class="sub-text"> Science - Math GPA 3.72</a>
            </div>
            <div class="box3-1"><a class="sub-text">2016 - 2020</a></div>
            <div class="box3-2">
              <a class="sub-text"
              ><b>King Mongkut's university of Technology Thonburi</b></a
              >
            </div>
            <div class="box4-2">
              <a class="sub-text">
                Game Development of Media Technology <br />
                GPA 3.45 (Second class honours)</a
              >
            </div>
          </div>
        </div>
        <div class="bank-3">
          <img class="icon-toppic-r" src={eduImg} />
        </div>
      </div>
    </div>
  )
}

export default profile_enducate_part