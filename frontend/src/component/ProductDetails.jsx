import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import productImage from '../assets/Shirts/LITERACY (1).png'
import { Button } from 'react-bootstrap';
function ProductDetails() {
    return (
        <div className='pruductDetails'>
            <div className='product-window'>
                <p className='shirt-path'>Shop/Shirt/CasualShirt/Utopia</p>
                <div className='product-description'>
                    <p className='product-number'>001</p>
                    <div className='product-name'>
                        <p className='product-name1'>
                            Casual Men
                        </p>
                        <p className='product-name2'>
                            Utopia
                        </p>
                    </div>
                </div>
                <div className='product-board'>
                    <div className='product-image'>
                        <img className='product-img'
                        src={productImage}
                        />

                    </div>
                    <div className='modification-window'>
                        <p className='product-dets'>
                            Yahan pr description likh dena product ki 
                        </p>
                        <p className='product-mod'>
                            Size
                        </p>
                        <div className='size bar'>
                            <p className='mod-box'>
                                6
                            </p>
                            <p className='mod-box'>
                                7
                            </p>
                            <p className='mod-box'>
                                8
                            </p>
                        </div>
                        <p className='product-mod'>
                            Color
                        </p>
                        <div className='color bar'>
                            <p className='mod-box' style={{backgroundColor:'white'}}/>
                            <p className='mod-box' style={{backgroundColor:'black'}}/>
                            <p className='mod-box' style={{backgroundColor:'blue'}}/>
                        </div>
                        <p className='price'>
                            $899
                        </p>
                        <div className='buy-option'>
                            <div className='count'>
                                <div className='sub counte'>
                                    -
                                </div>
                                <div className='iteration counte'>
                                    1
                                </div>
                                <div className='add counte'>
                                    +
                                </div>
                            </div>
                            <div className='buy-button'>
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
