import React from 'react'
import './Promo.css';
import image1 from '../assets/Shirts/coupon1.png'
import image2 from '../assets/Shirts/coupon2.png'

function Promo() {
  return (
    <div className='promo'>
        <div className='promo-content'>
          <div className='promo-images'>
            <img className='img2' src={image2}/>
            <img className='img1' src={image1}/>
          </div>
          <div className='coupon-dets'>
            <p className='coupon-per'>30%</p>
            <p className='coupon-name'>Valuable Coupon</p>
            <p className='coupon-des'>Our new cloths are designed with cutting-edge technology and high-quality materials to provide you with the ultimate clothing experience.</p>
            <div className='promo-apply' onClick=''>Code Promo: DRIP-2023</div>
          </div>
        </div>
    </div>
  )
}

export default Promo