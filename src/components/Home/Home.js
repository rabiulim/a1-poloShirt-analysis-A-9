import React from 'react';
// import useReviews from '../../hooks/useReviews';

const Home = () => {
    // const [reviews, setReviews] = useReviews();
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
                {/* {
                    homeReviews.map(review => (<li>{review.name}</li>))
                } */}
                <button className='rounded-full bg-red-600 px-6 py-3 text-white text-xl'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;