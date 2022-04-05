import React from 'react';
import './Home.css';
import image from '../../Images/watch.png';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            <div className='home'>
                <div className='heading-main-part'>
                    <h1>Your next <span className='h-color-1'>Smart Watch</span></h1>
                    <h1><span className='h-color-2'>Your best Watch</span></h1>
                    <p className='heading-info'>Perfect smart gadget for your daily life. It has 20 sports mood with dedicated heart rate monitoring. 15 days battery life will help you energetic in your busy life.</p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

            <div>
                <h1 className='review-heading'>Customer Reviews</h1>
                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>

            <div className='container'>
                <button onClick={()=>navigate('/reviews')} className='review-button' >See all Reviews</button>
            </div>
        </div>

    );
};

export default Home;