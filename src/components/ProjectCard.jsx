import React from 'react'

function ProjectCard({data}) {
  return (
    <div className='projectcard'>
        <div className='projectcard_img'>
            <img className='project_img' src={data.thumnil} alt={data.project} />
        </div>
        <div className='project_more'>
            <div className='projectcard_name'>{data.project}</div>
            <a href={data.hf} className='projectcard_link'>more detail</a>
        </div>
       
    </div>
  )
}

export default ProjectCard