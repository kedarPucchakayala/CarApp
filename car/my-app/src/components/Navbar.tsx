import React, { useEffect } from 'react'
import Logo from '../assets/platinumLogo.webp'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  },[]);



  const toggleMenu = ()=>{
   setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <div className={`flex items-center justify-between h-20 bg-white ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
    
      <div className='flex items-center h-20 bg-white'>
        <img src={Logo} className='h-10 ml-20'/>
        <Link to='/'><div className='ml-1'>
        <span className='text-black text-3xl w-18 h-16 font-bold'>Platinum</span>
         <br />
         <span className='text-xl text-gray-500 mt-2'>Luxury limo Service</span>
        </div></Link>
        <div className={`lg:flex items-center space-x-6 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to='/' className=' ml-36 text-black tet-xl font-bold hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none' onClick={closeMenu}>Home</Link>
          <Link to='/about' className='text-black tet-xl font-bold ml-6 hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none' onClick={closeMenu}>About Us</Link>
          <Link to='/fleets' className='text-black tet-xl font-bold ml-6 hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none' onClick={closeMenu}>Fleets</Link>
          <Link to='/Services' className='text-black tet-xl font-bold ml-6 hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none flex items-center' onClick={closeMenu}>Services <span className='ml-2'><MdKeyboardArrowDown /></span></Link>
          <Link to='/Blogs' className='text-black tet-xl font-bold ml-6 hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none' onClick={closeMenu}>Blog</Link>
          <Link to='/contact' className='text-black tet-xl font-bold ml-6 hover:underline hover:border-b-5  hover:border-black mb-6 cursor-pointer list-none' onClick={closeMenu}>Contact</Link>
        </div>
        <div className='lg:flex hidden'>
         <div className='bg-black text-white p-3 rounded-3xl lg:block flex items-center w-40 ml-96'>
           <Link to='/reserve'><h1 className='text-white font-bold text-lg hover:underline text-center ml-4'>Reserve Now</h1></Link>
         </div>
        </div>
        <div className='lg:hidden' >
          <button className='text-black hover:text-gray-500 focus:outline-none ml-12' onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
  
    </div>
  )
}

export default Navbar
