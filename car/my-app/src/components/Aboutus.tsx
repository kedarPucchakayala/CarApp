import React from 'react'
import bugati from '../assets/bugati.jpg'

const Aboutus = () => {
  return (
    <>
    <h1 className='text-gray-600 mt-6 font-bold ml-20'>WHO WE ARE</h1>
     <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-4 lg:mx-auto">
  
  <div className="lg:w-1/2 lg:mr-6 mb-6 lg:mb-0">
    <h2 className="text-3xl font-bold mb-4 ml-20 text-center lg:text-left">Platinum Luxury Limo <br /> Service with a wide range <br /> of Vehicles</h2>
    <p className="text-gray-700 text-center lg:text-left">
      <ul className='list-disc pl-6 mb-4'>
       <li className='text-xl font-sans mb-1 ml-20'>Redefining the way you move around!</li>
       <li className='text-xl font-sans mb-1 ml-20'>Transforming your journey one car at a time!</li>
      </ul>
      <p className='text-xl font-sans mb-1 ml-20'>When you're travelling having the right balance of flexibilty , luxury, and local insight <br /> insight is challenging .And that's why platinum Luxury Limo exists, bringing a whole new frontier of <br />luxury 
      cars that make your journey and unforgettable one.Whether its an urgent meeting <br /> picinic, medical appointment, wedding or any other event where you want to reach on <br />time, our best in-class drivers are ready to give you a travelling experience you'd always  be proud of  </p>
    </p>
    <div className='mt-6 ml-20 bg-black text-white p-3 w-44 text-center rounded-3xl'>
     <h1 className='font-bold text-center'>Learn More</h1>
    </div>
  </div>
  
  {/* Image Container */}
  <div className="lg:w-1/2 lg:ml-6 mt-6 lg:mt-0">
    <img
      src={bugati}
      alt="About Us"
      className="w-48 md:w-full h-auto"
    />
  </div>
</div>
    </>
   

  )
}

export default Aboutus
