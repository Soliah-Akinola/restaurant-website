import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from 'react-icons/ai';


const Testimonials = () => {
    return <div className="testimonials-section-wrapper">
        <div className="testimonial-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h2 className="primary-heading">What Our Customers Say</h2>
            <p className="primary-text">
                We take pride in providing our customers with the best dining experience possible, and we're thrilled to hear that our efforts have paid off. Our customers are at the heart of everything we do, and we're grateful for their support and feedback. We look forward to continuing to serve our customers with delicious food, exceptional service, and a welcoming atmosphere that keeps them coming back for more.
            </p>
        </div>
        <div className = "testimonial-section-bottom">
            <img src={ProfilePic} alt="Profile" />
            <p className="primary-text">
                "I had an amazing dining experience at Soliah's Restaurant! The food was delicious and the service was exceptional. I highly recommend this restaurant to anyone looking for authentic African cuisine."
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
        </div>
    </div>
};

export default Testimonials;