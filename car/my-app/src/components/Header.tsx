import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex flex-wrap justify-between bg-black text-white '> 
     <div className='ml-20 h-12 font-bold flex items-center'>
     <FaRegEnvelope/>
     <h1 className='text-md font-bold items-center ml-1'>info@platinumluxurylimoservice.com</h1>
     <h1 className='ml-4 flex items-center font-bold mr-3'><span className='mr-1'><MdOutlineWifiCalling3 /></span>00-987 654 32</h1>
     </div>
     <div className='ml-26 flex items-center font-bold'>
     <FaRegClock /><span className='ml-2 mr-28'>Monday - Sunday 24 Hours</span>
     </div>
      
    </div>
  )
}

export default Header
