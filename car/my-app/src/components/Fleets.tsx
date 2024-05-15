import React from 'react'
import blackTOYO from '../assets/blackTOYO.webp'
import cementTOYO from '../assets/cementTOYO.webp'
import purpleTOYO from '../assets/purpleTOYo.webp'
import { Link } from 'react-router-dom'

const Fleets = () => {
  return (
  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4">
  <img className="w-full" src= {blackTOYO} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-center">Lincoln MKT Limousine</div>
    <p className="text-gray-700 text-base">
      Ready to begin your journey with style?Call us today and <br />let us plan your trip
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <div className='bg-black text-white p-3 rounded-3xl lg:block flex items-center w-40 text-center'>
           <Link to='/reserve'><h1 className='text-white font-bold text-lg hover:underline text-center ml-4'>Reserve Now</h1></Link>
  </div>
  </div>
</div>
<div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4">
  <img className="w-full" src= {cementTOYO} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2"></div>
    <p className="text-gray-700 text-base">
    Ready to begin your journey with style?Call us today and <br />let us plan your trip
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <div className='bg-black text-white p-3 rounded-3xl lg:block flex items-center w-40 text-center'>
           <Link to='/reserve'><h1 className='text-white font-bold text-lg hover:underline text-center ml-4'>Reserve Now</h1></Link>
  </div>
  </div>
</div>
<div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg m-4">
  <img className="w-full" src= {purpleTOYO} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Luxury XUV</div>
    <p className="text-gray-700 text-base">
    Ready to begin your journey with style?Call us today and <br />let us plan your trip
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <div className='bg-black text-white p-3 rounded-3xl lg:block flex items-center w-40 text-center'>
           <Link to='/reserve'><h1 className='text-white font-bold text-lg hover:underline text-center ml-4'>Reserve Now</h1></Link>
  </div>
  </div>
</div>
</div>
  )
}

export default Fleets
