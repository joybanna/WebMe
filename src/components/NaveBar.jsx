import React from 'react'
import '../css/componets/nav.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function NaveBar() {
  return (

    <div className='Nav_Bar'>
      <HashRouter>
        <Link to='/WebMe/' className='button_Nav'>Profile</Link>
        <Link to='/WebMe/portfolio' className='button_Nav'>Portfolio</Link>
        <Link to='/WebMe/contact'className='button_Nav' >Contact</Link>
      </HashRouter>
    </div>

  )
}

export default NaveBar