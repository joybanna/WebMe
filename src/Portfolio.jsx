import React from 'react'
import '../src/css/port.css'
import DataProject from '../src/components/DataProject'
import PC from '../src/components/ProjectCard'

export default function Portfolio() {
  return (
    <div >
      <div class="w3-content w3-padding">
        <div class="head-text">Portfolio</div>
        <div class="box-project">
          <div class="  w3-padding-16"><a className='grouup-type'>Prototype</a></div>
          <div class="w3-row-padding">
            {DataProject(true).map((data) => <PC data={data} />)}
          </div>
        </div>

        <div class="box-project">
          <div class="w3-padding-16"><a className='grouup-type'>Company</a></div>
          <div class="w3-row-padding">
            {DataProject(false).map((data) => <PC data={data} />)}
          </div>
        </div>

      </div>
    </div>
  )
}
