import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { FaCarSide } from 'react-icons/fa6';
import { PiNotebookFill } from 'react-icons/pi';
import { HiOutlineHandThumbUp } from 'react-icons/hi2';

const Reserve = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center h-screen'>
      <div className='text-center'>
        <h1 className='font-bold text-4xl'>Reserving your limo hasn't been easier</h1>
        <p className='mt-4 font-bold text-xl'>Book your favorite vehicle in four simple steps and get ready to immerse in an unending luxury</p>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-20'>
        <div className='bg-white rounded-full text-black text-center h-20 w-20 flex justify-center items-center mb-4'>
          <FaRegCalendarCheck size={24} />
        </div>
        <h1 className='text-white font-bold text-xl ml-2 mb-4'>Choose your date and location</h1>

        <div className='bg-white rounded-full text-black text-center h-20 w-20 ml-20 flex justify-center items-center mb-4'>
          <FaCarSide size={24} />
        </div>
        <h1 className='text-white font-bold text-xl ml-2 mb-4'>Pick your favorite car</h1>

        <div className='bg-white rounded-full text-black text-center h-20 w-20 ml-20 flex justify-center items-center mb-4'>
          <PiNotebookFill size={24}/>
        </div>
        <h1 className='text-white font-bold text-xl ml-2 mb-4'>Make A Booking</h1>

        <div className='bg-white rounded-full text-black text-center h-20 w-20 ml-20 flex justify-center items-center mb-4'>
          <HiOutlineHandThumbUp size={24}/>
        </div>
        <h1 className='text-white font-bold text-xl ml-2 mb-4'>Enjoy Your Ride!</h1>
      </div>

      <div className='mt-6 bg-white text-black text-center p-3 w-60 items-center h-16 rounded-3xl'>
        <h1 className='font-bold'>Reserve Now</h1>
      </div>
    </div>
  );
}

export default Reserve;
