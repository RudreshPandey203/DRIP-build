import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './Shop.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background1 from '../assets/Shirts/LITERACY (1).png';
import background2 from '../assets/Shirts/LITERACY (2).png';
import background3 from '../assets/Shirts/LITERACY (3).png';
import background4 from '../assets/Shirts/LITERACY (4).png';
import back from '../assets/backgrounds/background1.png';



function Shop() {
  const [activeNav, setActiveNav] = useState(localStorage.getItem('activeNav') || 'Trending');

  useEffect(() => {
    localStorage.setItem('activeNav', activeNav);
  }, [activeNav]);

  const shop = [
    {
      id: 1,
      head: 'Trending',
      details: [
        {
          image: background1,
          num: '01',
          category: 'Casual Men',
          name: 'Utopia',
          price: 899,
          size: ['XS','S','M','L','XL'],
          color: ['red', 'blue', 'white', 'black', 'grey'],
          desciption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          image: background2,
          num: '02',
          category: 'Casual Men',
          name: 'Utopia',
          price: 899
        },
        {
          image: background3,
          num: '03',
          category: 'Casual Men',
          name: 'Utopia',
          price: 899
        },
        {
          image: background4,
          num: '04',
          category: 'Casual Men',
          name: 'Utopia',
          price: 899
        }
      ]
    },
    {
      id: 2,
      head: 'Featured',
      details: [
        {
          num: 1,
          category: 'Casual Men',
          name: 'death',
          price: 899
        },
        {
          num: 2,
          category: 'Casual Men',
          name: 'death',
          price: 899
        },
        {
          num: 3,
          category: 'Casual Men',
          name: 'death',
          price: 899
        }
      ]
    },
    {
      id: 3,
      head: 'New',
      details: []
    },
    {
      id: 4,
      head: 'Reviews',
      details: []
    },
    {
      id: 5,
      head: 'Stuff Picks',
      details: []
    },
    {
      id: 6,
      head: 'More',
      details: []
    }
  ];

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <div className="shop">
      <div className="shop-cards">
        <div className="cloth-rack">
          {shop.map((item) => (
            <Button
              key={item.id}
              className={`shop-nav ${activeNav === item.head ? 'active-shop' : ''}`}
              onClick={() => handleNavClick(item.head)}
            >
              {item.head}
            </Button>
          ))}
        </div>
        <div className="cards">
          {shop
            .find((item) => item.head === activeNav)
            ?.details.map((item) => (
              <Link to={`/shop/product/`} key={item.id}>
              <div
                className="card-list"
                style={{
                  backgroundImage: `url(${back})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '60vh',
                  position: 'relative', 
                  scrollSnapAlign: 'center',
                }}
              >
                <div className="corner-text top-left">
                  <p>{item.num}</p>
                </div>
                <div className="corner-text top-right">
                  <p>{item.category}</p>
                </div>
                <div className="corner-text bottom-left">
                  <p>{item.name}</p>
                </div>
                <div className="corner-text bottom-right">
                  <p>${item.price}</p>
                </div>

                <img className="shirt-img" key={item.num} src={item.image} />
              </div>
              </Link>
            ))
          }


        </div>

      </div>
    </div>
  );
}

export default Shop;
