import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();
    const handleRoute = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <div className='flex'>
                <div>
                    <h1 className='text-5xl my-16 text-orange-400 font-bold'>A1 POLO Shirt Analysis</h1>
                    <p className='text-2xl'>Hi, you are wellcome my reveiws site. Here you find all analysis about A1 polo shirt.So if you interested about my analysis ,plz keep exploring the website </p>
                </div>
                <div className=''>
                    <img src="https://www.elevenworkwear.com.au/Images/ProductImages/Medium/E1424_BLCK_F1.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-semibold my-12'>Customer Reviews (3)</h1>

                <div className="flex g-4 mt-5">
                    {
                        reviews?.slice(0, 3).map(review => <ReviewCard
                            review={review}
                        ></ReviewCard>)
                    }
                </div>
                <div>
                    <button onClick={handleRoute} className='click-btn m-5 rounded-full bg-red-600 px-4 py-2 text-white text-xl'>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;