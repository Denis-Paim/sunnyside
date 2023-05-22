import React from "react";
import imgLogo from '../images/logo copy.svg';
import "./footer.css"
import {FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa"


const Footer = () => {
    return(
        <div className="footer-container">
        
            <img className="img-logo" src={imgLogo} alt="" />
            <div >
                <ul className="footer-list" >
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </div>
            <div>
                <ul className="footer-icons">
                
                    <li><a href=""><FaFacebookSquare /></a></li>
                    <li><a href=""><FaInstagram/></a></li>
                    <li><a href=""><FaTwitter/></a></li>
                    <li><a href=""><FaPinterest/></a></li>
                </ul>
            </div>
            <div></div>
        </div>
    );
}

export default Footer;