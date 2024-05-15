import React from 'react'
import Logo from '../assets/platinumLogo.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-white h-96 w-screen flex flex-wrap'>
     <div className='flex'>
      <img src={Logo} alt="logo" className='h-12 w-12 ml-20 mt-16' />
      <div className='flex flex-col ml-3'>
        <h1 className='h-8 w-12 text-3xl mt-16 font-bold'>Platinum</h1>
        <span className='text-gray-200 h-5 font-bold'>Luxury Limo Service</span>
      </div>
      <div className='flex text-white gap-2 mt-44 h-18 mr-52'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
      </div>
     </div>
      <div>
        <h1 className='mt-16 text-xl font-bold h-8'>Quick Links</h1>
        <Link to='/'><h1 className='text-gray-200 mt-6 text-md'>Home</h1></Link>
        <Link to='/about'><h1 className='text-gray-200 text-md mt-2'>About Us</h1></Link>
        <Link to='/fleets'><h1 className='text-gray-200 text-md mt-2'>Fleets</h1></Link>
        <Link to='/services'><h1 className='text-gray-200 text-md mt-2'>Services</h1></Link>
        <Link to='/reserve'><h1 className='text-gray-200 text-md mt-2'>Reserve</h1></Link>
        <Link to='/contact'><h1 className='text-gray-200 text-md mt-2'>Contact</h1></Link>
      </div>
      <div className='ml-32'>
        <h1 className='text-xl font-bold h-8 mt-16'>Our Services</h1>
        <h1 className='text-gray-200 text-md mt-6'>Corporate Transportation</h1>
        <h1 className='text-gray-200 text-md mt-2'>Airport Transportation</h1>
        <h1 className='text-gray-200 text-md mt-2'>Limo Service</h1>
        <h1 className='text-gray-200 text-md mt-2'>point to Point Service</h1>
        <h1 className='text-gray-200 text-md mt-2'>party Limousine</h1>
      </div>
      <div className='ml-32'>
        <h1 className='text-xl font-bold mt-16'>Contact Info</h1>
        <h1 className='text-gray-200 text-md mt-6 font-bold'>29,Main St.Road,New York,AA <br />567890</h1>
        <h1 className='text-gray-200 text-md mt-2 font-bold'>00-987 654 32</h1>
        <h1  className='text-gray-200 text-md mt-2 font-bold'>info@platinumluxurylimoservice.com</h1>
      </div>
      <h1 className=' text-white font-bold text-center ml-96'>&copy; 2022 Platinum Luxury Limo Service</h1>
    </div>
  )
}

export default Footer