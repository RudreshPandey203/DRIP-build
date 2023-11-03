import React from 'react'
import './Home.css';
import Shirt1 from '../assets/Shirts/LITERACY (1).png'
import Shirt2 from '../assets/Shirts/LITERACY (2).png'
import Shirt3 from '../assets/Shirts/LITERACY (3).png'
import { useState } from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function MyHome() {
  const products = [
    { image: Shirt1, size: '7-12', colors: 'BLUE/WHITE/BLACK/GREY', details: 'mast shirt h bhai' },
    { image: Shirt2, size: '7-12', colors: 'BLUE/WHITE/BLACK/GREY', details: 'mast shirt h bhai fdf d fdfdf df df f df ds fd ffg fd gfdfd ' },
    { image: Shirt3, size: '7-12', colors: 'BLUE/WHITE/BLACK/GREY', details: 'mast shirt h bhai' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else {
      setCurrentIndex(products.length - 1);
    }
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };
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
      <div className='new-product'>
        <img className="product" src={products[currentIndex].image} alt="shirt1" />
        <br />
        <Button className='button-new left' onClick={handleNextClick} ><ArrowForwardIcon sx={{ fontSize: 20, color: 'grey' }} /></Button>
        <Button className='button-new right' onClick={handlePrevClick} ><ArrowBackIcon sx={{ fontSize: 20, color: 'grey' }} /></Button>
      </div>
      <ul className='column-new'>
        <li className='size'>
          <p className='row-1'>
            Size
          </p>
          <p className='row-2'>
            {products[currentIndex].size}
          </p>
        </li>
        <li className='Colors'>
          <p className='row-1'>
            Colors
          </p>
          <p className='row-2'>
            {products[currentIndex].colors}
          </p>
        </li>
        <li className='details'>
          <p className='detail-des'>{products[currentIndex].details}</p>
        </li>
      </ul>
    </div>

  )
}

export default MyHome