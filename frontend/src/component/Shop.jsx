

import React, { useEffect } from 'react';
import './Shop.css';
import { Button } from 'react-bootstrap';
import background from '../assets/backgrounds/background1.png';

function Shop() {
  const [activeNav, setActiveNav] = useState(null);

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <div className='shop'>
      <div className='shop-cards'>
        <div className='cloth-rack'>
          <Button className='shop-nav'>Trending</Button>
          <Button className='shop-nav'>Featured</Button>
          <Button className='shop-nav'>New</Button>
          <Button className='shop-nav'>Reviews</Button>
          <Button className='shop-nav'>Stuff Picks</Button>
          <Button className='shop-nav'>More</Button>
        </div>
        <div className='cards'>
          <img className='back-img' src={background} />
          <img className='back-img' src={background} />
          <img className='back-img' src={background} />
          <img className='back-img' src={background} />
          <img className='back-img' src={background} />
          <img className='back-img' src={background} />
        </div>
      </div>
    </div>
  );
}

export default Shop;




