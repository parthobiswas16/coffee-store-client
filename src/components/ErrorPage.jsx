import React from 'react';
import { Link } from 'react-router';



const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F4F1] text-[#331A15] px-4">

      {/* Coffee Image */}
      <img
        src="https://i.ibb.co.com/Pv83jWBs/404-error-writing-cup-coffee-260nw-300219491.jpg"
        alt="Coffee not found"
        className="w-72 rounded-2xl mb-6 animate-bounce"
      />

      

      {/* Message */}
      <p className="text-xl text-center mb-6 max-w-md">
        Oops! The coffee you are looking for is not brewed yet ☕  
        Let’s go back home and grab a fresh cup.
      </p>

      {/* Back Home Button */}
      <Link to="/">
        <button className="px-7 py-3 rounded-full bg-[#6d4c45] text-white 
        hover:bg-[#57342d] transition duration-300 shadow-lg">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
    );
};

export default ErrorPage;