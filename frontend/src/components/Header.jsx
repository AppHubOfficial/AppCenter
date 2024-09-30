import React from "react";
import { Outlet } from 'react-router-dom';
import '../assets/styles/Header.css';
import AppCenterLogo from '../assets/images/AppCenterLogo.jsx';

const Header = () => {
    return (
        <div className="headerContainer">
            <AppCenterLogo></AppCenterLogo>
            <nav className="headerNav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
