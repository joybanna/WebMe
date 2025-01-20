import React from 'react'
import '../src/css/contact.css'

function Contact() {
  return (
    <div><div class="Content">
    <a class="head_contact">Contact Me</a>
    <div class="group-contact">
      <div class="contact_type1">
        <div class="box_content">
          <a class="contact_icon"
            ><img src="img/002-google.png" class="img_icon"
          /></a>

          <a class="contact_name">Gmail</a>
          <a class="content_info">joybanna@gmail.com</a>
        </div>
      </div>
      <div class="contact_type2">
        <div class="box_content">
          <a class="contact_icon">
            <img src="img/001-facebook.png" class="img_icon"
          /></a>
          <a class="contact_name">Facebook</a>
          <a class="content_info">joybanna</a>
        </div>
      </div>
      <div class="contact_type3">
        <div class="box_content">
          <a class="contact_icon"
            ><img src="img/003-microsoft.png" class="img_icon"
          /></a>

          <a class="contact_name">Hotmail</a>
          <a class="content_info">joybanna@hotmail.com</a>
        </div>
      </div>
      <div class="contact_type4">
        <div class="box_content">
          <a class="contact_icon">
            <img src="img/004-apple.png" class="img_icon"
          /></a>

          <a class="contact_name">Tel.</a>
          <a class="content_info">091-047-4856</a>
        </div>
      </div>
      <div class="contact_type6">
        <div class="box_content">
          <a class="contact_icon">
            <img src="img/LinkedIn.png" class="img_icon"
          /></a>

          <a class="contact_name">LinkedIn</a>
          <a
            class="content_info"
            href="https://linkedin.com/in/kritsana-sanaepood-a4520b205"
            >Kritsana Sanaepood</a
          >
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="Foot">
      <div class="Contact"></div>
    </div>
  </footer></div>
  )
}

export default Contact