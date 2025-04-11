import React from 'react'
import './Header.scss'
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <header>
            <div className="logo">
                <span className='colo'>COLO</span>
                <span className='shop'>SHOP</span>
            </div>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>PROMOTION</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
                <div className="icons">
                <FaSearch className='icon'/>
                <FaUserCircle className='icon'/>
                <div className='shopCart'>
                <FaShoppingCart className='icon'/>
                </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header