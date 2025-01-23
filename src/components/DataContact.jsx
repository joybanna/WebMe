import React from 'react'
import gmailIcon from '../assets/img/002-google.png'
import facebookIcon from '../assets/img/001-facebook.png'
import hotmailIcon from '../assets/img/003-microsoft.png'
import telIcon from '../assets/img/004-apple.png'
import linkedinIcon from '../assets/img/LinkedIn.png'

function DataContact() {
    const gmail ={
        name: "Gmail",
        img: gmailIcon,
        info: "joybanna@gmail.com",
        hf: ""
    }
    const facebook ={
        name: "Facebook",
        img: facebookIcon,
        info: "joybanna",
        hf: ""
    }
    const hotmail ={
        name: "Hotmail",
        img: hotmailIcon,
        info: "joybanna@hotmail.com",
        hf: ""}
    const tel ={
        name: "Tel.",
        img: telIcon,
        info: "091-047-4856",
        hf: ""
    }
    const linkedin ={
        name: "LinkedIn",
        img: linkedinIcon,
        info: "Kritsana Sanaepood",
        hf: "https://linkedin.com/in/kritsana-sanaepood-a4520b205"
    }
    const contacts = [gmail, facebook, hotmail, tel, linkedin]
  return contacts
   
  
}

export default DataContact