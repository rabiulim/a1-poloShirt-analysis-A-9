import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blog'>
            <h1 className='text-3xl'>What is contex API</h1>
            <p className='text-xl'>The Context API is a React cool system that enables you to exchange  details and helps in solving prop-drilling from all levels of your application.Contex api system make our coding life esiar.Context provides a way to share values like these between components without having to separately  pass a prop through every level of the tree.So we can say Contex API is a great system that replace boring props drilling system . </p>
            <h1 className="text-3xl">
                What is Semantic Tag
            </h1>
            <p className='text-xl'>
                A semantic tag clearly describes its meaning to both the browser and the developer.The semantic tag help to HTML stems from what should be the driving goal of any web page.Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.Using semantic tags gives you many more hooks for styling your content too.By using semantic tags, you create code  more informative than those that simply HTML. So our should use semantic tags.
            </p>
        </div>
    );
};

export default Blogs;