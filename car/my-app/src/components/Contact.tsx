import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='bg-black text-white h-screen flex flex-col flex-wrap justify-center items-center'>
     <div>
      <h1 className='font-bold text-md text-center'>Call us today or chat  with us online to reserve the best ride for platinum </h1>
     </div>
     <div className='bg-white h-12 mt-8 w-48 rounded-full text-center flex items-center justify-center'>
         <h1 className='text-black flex items-center'><span className='mr-2'><FaPhoneVolume /></span>00-987 654 32</h1>
     </div>
    </div>
  )
}

export default Contact
