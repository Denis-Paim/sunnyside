import React from "react";
import "./header.css";
import imgLogo from '../images/logo.svg';
import imgArrow from '../images/icon-arrow-down.svg';
import iconBurguer from '../images/icon-hamburger.svg'

const NavBar = () => {

    function toggleMenu(){
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
    }

    
    return (
        <div className="header-container">
            <div className="nav-container">
                <div className="nav-image">
                    <img className="nav-logo" src={imgLogo} alt="logo" />
                </div>
                <div id="nav" className="nav-list">
                    <ul id="menu">
                        <li><a className="nav-list-item" href="">About</a></li>
                        <li><a className="nav-list-item" href="">Services</a></li>
                        <li><a className="nav-list-item" href="">Projects</a></li>
                        <li><a className="list-button" href="">CONTACT</a></li>
                    </ul>
                    <img onClick={toggleMenu} id="burger" className="img-burger" src={iconBurguer} alt="" />
                </div>
            </div>
            
           <div className="header-we-are">
                <h1>WE ARE CREATIVES</h1>
           </div>
           <div className="header-arrow-down">
                <img src={imgArrow} alt="img-arrow" />
           </div>
        </div>               
    )
}

export default NavBar;