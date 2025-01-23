import React from 'react'
import '../css/componets/projectcard.css'

function ProjectCard({ data }) {
  return (
    <div className='w3-col l3 m6 w3-margin-bottom'>
      <div className='w3-display-container w3-hover-grayscale'>
        <div className='w3-display-topleft w3-black w3-padding'><a className='project-name'>{data.project}</a></div>
        <img className='project_img' src={data.thumnil} alt={data.project}  />
        <div class="w3-display-middle w3-display-hover w3-xlarge">
          <a class="w3-button w3-text-white" href={data.hf}>More detail</a>
        </div>
      </div>

    </div>
  )
}
export default ProjectCard