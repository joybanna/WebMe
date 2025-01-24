import React from 'react'
import '../css/componets/contactCard.css'

function contactCard({ name, img, info, hf }) {
  return (
    <div class="contact_type">
      <div class="box_content">
        <a class="contact_icon"><img src={img} class="img_icon" /></a>
        <a class="contact_name">{name}</a>
        <a class="content_info" href={hf}>{info}</a>
      </div>
    </div>
  )
}

export default contactCard