import React, {useState} from 'react';
import Navbar  from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from "../Assets/home-banner-image.jpg";
import { FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
           {<img src={BannerBackground} alt="Banner" />}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to Soliah's Restaurant
          </h1>
          <p className="primary-text">
            Experience the best African cuisine in town with our delicious dishes and exceptional service.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          {<img src={BannerImage} alt="Banner" />}
        </div>
      </div>  
    </div>
  )
};

export default Home;