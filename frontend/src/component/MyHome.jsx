import React from 'react'
import './Home.css';
import Shirt1 from '../assets/Shirts/LITERACY (2).png'

function MyHome() {
  return (
    <div className='home'>
      <div className='description-text'>
        <p className='description'>
          NOW Available
        </p>
        <p className='description'>
          NEW Drip series
        </p>
      </div>
      <img className="product" src={Shirt1} alt="shirt1" />
    </div>
  )
}

export default MyHome