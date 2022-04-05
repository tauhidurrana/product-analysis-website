import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
    const {name, picture, reviewData} = props.review;
    return (
        <div className='review-item'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Comment: {reviewData}</p>
            <p>Ratings : 
            <FontAwesomeIcon className='fa' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='fa' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='fa' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='fa' icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon className='fa' icon={faStar}></FontAwesomeIcon>

            </p>
        </div>
    );
};

export default Review;