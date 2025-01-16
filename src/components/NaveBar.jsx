import React from 'react'

function NaveBar({color}) {
  return (
    <div id='Nav_Bar'>
       <a className="button_Nav" href='#'>Home</a>
         <a className='button_Nav' href='#'>About</a>
            <a className='button_Nav' href='#'>Contact</a>

    </div>
  )
}

export default NaveBar