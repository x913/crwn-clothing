import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
// import SVG (scalable vector graphic) as ReactComponent with special React syntax
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contacts" className="option">CONTACT</Link>
        </div>
    </div>
)

export default Header;