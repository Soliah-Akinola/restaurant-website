import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Browse our menu and pick your favorite meals from our wide selection of delicious dishes."

        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Select from our variety of meals and customize them to suit your taste."

        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Enjoy your favorite meals at home with our fast and reliable delivery service."

        }
    ];
    return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h2 className="primary-heading">How It Works</h2>
            <p className="primary-text">
                Our process is simple and straightforward. First, you browse our menu and pick your favorite meals from our wide selection of delicious dishes. Next, you choose how often you want to receive your meals and customize them to suit your taste. Finally, you sit back and relax while we prepare and deliver your meals right to your doorstep with our fast and reliable delivery service. With our easy-to-use platform and exceptional customer service, enjoying delicious meals has never been easier!
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>

    </div>;
};

export default Work;