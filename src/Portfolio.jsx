import React from 'react'
import '../src/css/port.css'
import DataProject from '../src/components/DataProject'
import PC from '../src/components/ProjectCard'

export default function Portfolio() {
  return (
    <div>
  <div class="Content_Portfolio">
    <div class="head-text">Portfolio</div>
    <div class="box-project">
      <div class="head-text-type">Prototype</div>
      <div class="box-content">
      {DataProject(true).map((data) => <PC data={data} />)}
      </div></div>
      <div class="box-project">
        <div class="head-text-type">Company</div>
        <div class="box-content">
      {DataProject(false).map((data) => <PC data={data} />)}
      </div></div>
  </div>
  </div>
  )
}
