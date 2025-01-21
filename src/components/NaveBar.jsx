import React from 'react'
import '../css/componets/nav.css'

function NaveBar() {
  return (
    <div className='Nav_Bar'>
      <a className="button_Nav" href='/WebMe/profile'>Profile</a>
      <a className='button_Nav' href='/WebMe/portfolio'>Portfolio</a>
      <a className='button_Nav' href='/WebMe/contact'>Contact</a>

    </div>
  )
}

export default NaveBar