
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/toyota.jpg';

const Banner = () => {
  return (
    <div className='relative bg-cover bg-center h-screen sm:bg-top md:bg-top lg:bg-cover' style={{ backgroundImage: `url(${banner})` }}>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className='text-white italic text-5xl font-bold'>Platinum</h1>
      <p className='text-white mt-3 text-xl font-semibold sm:text-lg md:text-xl lg:text-xl xl:text-2xl'>
        Luxury Limo Services <br />
        Travelling is all about getting extraordinary comfort. Elevate your travel experience and take your comfort to the next level with Platinum <br />
        Luxury Limo Services we're an elite transportation agency in New York helping you reach your destination with utmost convenience.
      </p>
      <Link to='/reserve' className='text-black bg-white p-6 sm:p-8 flex flex-col items-center rounded-3xl h-18 w-72 sm:w-80 mt-4 pt-3 pb-8 font-bold text-center'>
        Make Your Reservation Now <br />
        Call 00-987 654 32
      </Link>
    </div>
  </div>
  
  );
}

export default Banner;
