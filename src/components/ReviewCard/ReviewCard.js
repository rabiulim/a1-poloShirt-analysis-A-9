import React from 'react';
import './ReviewCard.css'
const ReviewCard = (props) => {
    const { name, ratings, review, image } = props.review;
    return (
        <div className="containers ">
            <div className="photo">
                <img className='data' src={image} alt="" />
            </div>
            <div className="info">
                <h1 className='text-2xl font-semibold py-4'>{name}</h1>
                <p className='text-xl p-2'>{review.slice(0, 120) + "..."}</p>
                <p className='text-2xl text-2xl pt-2'>Ratting: <small className='text-orange-700 text-3xl'>{ratings}</small></p>
            </div>
        </div>
    );
};

export default ReviewCard;