import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='review-heading'>Customers Feedback</h1>
            <div className='review-container'>
               {
                   reviews.map(review=> <Review
                    key={review._id}
                    review = {review}
                   ></Review>)
               }
            </div>
        </div>
    );
};

export default Reviews;