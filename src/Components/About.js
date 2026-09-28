import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill} from 'react-icons/bs';

const About = () => {
  return <div className='about-section-container'>
        <div className="about-background-image-container">
           <img src={AboutBackground} alt="Background" />
        </div> 

        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="Background" /> 
            <div className="about-section-text-container">
                <p className ="primary-subheading">About Us.</p>
                <h1 className="primary-heading">We are a team of passionate chefs dedicated to bringing you the best African flavors.Experience the BEST of African Cuisine</h1>
                <p className="primary-text">
                    At Soliah's Restaurant, we are passionate about bringing the rich and diverse flavors of African cuisine to our customers. Our team of experienced chefs is dedicated to creating delicious and authentic dishes that showcase the unique ingredients and cooking techniques of Africa. We believe that food is not just about sustenance, but also about culture, community, and connection. That's why we strive to create a warm and welcoming atmosphere where our customers can come together to enjoy great food and good company. Whether you're a fan of spicy stews, savory grilled meats, or sweet desserts, we have something for everyone at Soliah's Restaurant. Come join us on a culinary journey through Africa and experience the best of our cuisine!
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">
                        Learn More
                    </button>
                    <button className= "watch-video-button">< BsFillPlayCircleFill />Watch Video</button>
                </div>
            </div>
        </div>    
   </div>
    
};

export default About;