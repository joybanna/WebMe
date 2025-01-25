import React from 'react'
import DataExperiece from './DataExperiece'
import expImg from '../assets/img/013-layers.png'

function profile_experiece_part() {
  const data = DataExperiece();
  const listExp = data.map((data) =>
    <div class="w3-row">

      <div class="w3-col s6 w3-margin-bottom w3-margin-top w3-left-align">
        <a class="sub-text">{data.date}</a>
      </div>

      <div class="w3-col s6 w3-margin-bottom w3-margin-top">

        <a class="sub-text-title"><b>{data.title}</b> </a>

        <div className='w3-margin-bottom w3-margin-top'>
          <a class="sub-text-title-a ">{data.position}</a>
        </div>

        <a className='sub-text'>
          <ul>
            {data.list.map((list) => <li>{list}</li>)}
          </ul>
        </a>

      </div>

    </div>
  );

  return (
    <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-third w3-center">
          <img class="icon-toppic-l " src={expImg} />
        </div>
        <div class="w3-twothird">
          <div class="toppic-text-r">Experiece</div>
          {listExp}
        </div>
      </div>
    </div>
  )
}

export default profile_experiece_part