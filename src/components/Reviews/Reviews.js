import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            {
                reviews.map(review => <ReviewCard review={review} key={review.id}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;