import React from 'react';
import './Home.css';
import image from '../../Images/watch.png';

const Home = () => {
    return (
        <div className='home'>
            <div className='heading-main-part'>
                <h1>Your next <span className='h-color-1'>Smart Watch</span></h1>
                <h1><span className='h-color-2'>Your best Watch</span></h1>
                <p className='heading-info'>Perfect smart gadget for your daily life. It has 20 sports mood with dedicated heart rate monitoring. 15 days battery life will help you more energetic in your busy life.</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>

    );
};

export default Home;