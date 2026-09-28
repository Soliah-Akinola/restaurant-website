import React from 'react';
import Logo from '../Assets/Logo.svg';
import {BsTwitter} from 'react-icons/bs';
import{BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const Footer = () => {
     return <div className ="footer-wrapper"> 
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-icons">
                <BsTwitter />
                <BsYoutube />
                <BsFacebook />
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>+234 913 825 8567</span>
                <span>hello@soliahsrestaurant.com</span>
                <span>Abuja, Nigeria</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
};

export default Footer;