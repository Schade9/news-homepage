import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import menuOpen from '../assets/icon-menu.svg'
import menuClose from '../assets/icon-menu-close.svg'

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section className='navbar'>
        <div className="image">
            <img src={logo} alt="website logo" />
        </div>
        <div className='side-buttons' onClick={()=>setShowSidebar(true)}>
            <img src={menuOpen} alt="" />
        </div>
        <div className={showSidebar ? "nav-links-MobileMenu" : "nav-links"}>
            <button className='side-buttons' onClick={()=>setShowSidebar(false)}>
                <img src={menuClose} alt="" />
            </button> 
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">New</a>
                </li>
                <li>
                    <a href="#">Popular</a>
                </li>
                <li>
                    <a href="#">Trending</a>
                </li>
                <li>
                    <a href="#">Categories</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Navbar
