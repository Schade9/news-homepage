import React from 'react'
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <section className='navbar'>
        <div className="image">
            <img src={logo} alt="website logo" />
        </div>
        <div className="nav-links">
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
