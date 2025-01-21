import React from 'react'
import '../css/componets/projectcard.css'

function ProjectCard({data}) {
  return (
    <div className='projectcard'>
      <div className='projectnaeme'>{data.project}</div>
        <img className='project_img' src={data.thumnil} alt={data.project} />
        
        <div className='overlay'>
            <a href={data.hf} className='text'>more detail</a>
        </div>
       
    </div>
  )
}

export default ProjectCard