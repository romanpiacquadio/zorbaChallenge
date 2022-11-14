import React from 'react'
import { useState } from 'react'


const Offer = () => {
  const [show, setShow] = useState(true)
  
  return (
    show && 
    <div className='offer-container'>
        {/* <img src={png} className='h-30 w-55 bg-transparent'/> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="offer-container__image">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className='offer-container__info'>
          <p>Make your strongest offer when you buy with Opendoor</p>
          <a href='#'>{"Learn more >"}</a>
        </div>
        <button className='offer-container__button' onClick={ () => setShow(false) }>X</button>
    </div>
  )
}

export default Offer