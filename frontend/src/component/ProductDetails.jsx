import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import productImage from '../assets/Shirts/LITERACY (1).png'
import { Button } from 'react-bootstrap';
function ProductDetails() {
    const [activeSize, setActiveSize] = useState(null);

    const handleSizeSelection = (selectedSize) => {
        setActiveSize(selectedSize);
    };
    const [activeColor, setActiveColor] = useState(null);
    const handleColorSelection= (selectedColor) =>{
        setActiveColor(selectedColor);
    }
    const product =
    {
        category: 'Casual Men',
        prodName: 'Utopia',
        price: '899',
        number: '001',
        description: 'Yahan pr description likh dena product ki',
        size: [
            'S', 'M', 'L', 'XL'
        ],
        color: ['blue', 'white', 'grey']
    }

    const [currentNum, setcurrentNum] = useState(1);
    const handleincrement = () => {
        if (currentNum == 10) {
            alert("Too much request");
        }
        else {
            setcurrentNum(currentNum + 1);
        };
    }
    const handledecrement = () => {
        if (currentNum == 0) {
            alert("Cant be negative");
        }
        else {
            setcurrentNum(currentNum - 1);
        }
    }
    return (
        <div className='pruductDetails'>
            <div className='product-window'>
                <p className='shirt-path'>Shop/Shirt/CasualShirt/Utopia</p>
                <div className='product-description'>
                    <p className='product-number'>001</p>
                    <div className='product-name'>
                        <p className='product-name1'>
                            {product.category}
                        </p>
                        <p className='product-name2'>
                            {product.prodName}
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
                            {product.description}
                        </p>
                        <p className='product-mod'>
                            Size
                        </p>
                        <div className='size bar'>

                            {product.size.map((size) => (
                                <p 
                                key={size}
                                onClick={()=>handleSizeSelection(size)}
                                className={`mod-box ${activeSize === size ? 'activeSizebox' : ''}`}>
                                    {size}
                                </p>

                            ))}
                        </div>

                        <p className='product-mod'>
                            Color
                        </p>
                        <div className='color bar'>
                            {product.color.map((color)=>(
                                <p 
                                key = {color}
                                className={`mod-box ${activeColor===color?'activeColorbox':''}`}
                                onClick={()=>handleColorSelection(color)}
                                 style={{ backgroundColor: color }} />
                            ))}
                        </div>
                        <p className='price'>
                            {product.price}
                        </p>
                        <div className='buy-option'>
                            <div className='count'>
                                <div className='sub counte' onClick={handledecrement}>
                                    -
                                </div>
                                <div className='iteration counte'>
                                    {currentNum}
                                </div>
                                <div className='add counte' onClick={handleincrement}>
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
