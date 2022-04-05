import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, picture, reviewData} = props.review;
    return (
        <div className='review-item'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Comment: {reviewData}</p>
        </div>
    );
};

export default Review;