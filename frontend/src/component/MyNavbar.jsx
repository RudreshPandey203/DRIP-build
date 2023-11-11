import './Navbar.css'
import Logo from '../assets/dripLogo.png'
import { Link, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
function MyNavbar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(()=>{
        setActiveTab(location.pathname);
    },[location.pathname])
    return (
        <div fill variant="tabs" className='brand-nav ' defaultActiveKey="/">
            <img className="brand-image" src={Logo} alt="Logo" />

            <Link to="/"
                className={`navItem ${activeTab === '/' ? 'active' : ''}`}
                onClick={() => handleTabClick('/')}><p className='nav-opt'>NEW</p></Link>

            <Link
                to="/shop"
                className={`navItem ${activeTab === '/shop' ? 'active' : ''}`}
                onClick={() => handleTabClick('/shop')}
            >
                <p className='nav-opt'>SHOP</p>
            </Link>

            <Link
                to="/promo"
                className={`navItem ${activeTab === '/promo' ? 'active' : ''}`}
                onClick={() => handleTabClick('/promo')}
            >
                <p className='nav-opt'>PROMO</p>
            </Link>

            <input className='searchBox' placeholder='Search your DRIP'>

            </input>
            <Link
                to="/search"
                className='searchIcon' >
                <SearchIcon sx={{ fontSize: 35, color: 'grey' }} />

            </Link>

            <Link
                to="/cart"
                className={`navItem ${activeTab === '/cart' ? 'active' : ''}`}
                onClick={() => handleTabClick('/cart')}
            >
                <p className='nav-opt'>CART(0)</p>
            </Link>

        </div>
    );
}

export default MyNavbar;