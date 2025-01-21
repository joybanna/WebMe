import React from 'react'
import '../src/css/contact.css'
import DataContact from './components/DataContact'
import ContactCardItem from '../src/components/contactCard'

function Contact() {
  return (
    <div><div class="Content_contact">
      <a class="head_contact">Contact Me</a>
      <div class="group-contact">
        {DataContact().map((data) => <ContactCardItem name={data.name} img={data.img} info={data.info} hf={data.hf} />)}
      </div>
    </div>
    </div>
  )
}

export default Contact