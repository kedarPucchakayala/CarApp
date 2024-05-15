import React from 'react';
import air1 from '../assets/air1.avif';
import air2 from '../assets/air2.webp';
import air3 from '../assets/air3.jpg';
import air4 from '../assets/air4.jpg';
import air5 from '../assets/air5.webp';
import bugati3 from '../assets/bugati3.jpg';

const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
      {/* Upper part */}
      <div className="flex flex-col items-center">
        <img src={air1} alt="Airport Transportation" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Airport Transportation</h1>
        <p className="text-center mb-2 text-black text-md">Travel to and from the airport without a hassle</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={air2} alt="Limo Service" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Limo Service</h1>
        <p className="text-center  mb-2 text-black text-md">Afford yourself the joy of luxury.</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={air3} alt="Private Car Services" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Private Car Services</h1>
        <p className="text-center">Arrange your private travels the way you want</p>
      </div>

      {/* Lower part */}
      <div className="flex flex-col items-center">
        <img src={air4} alt="Point to Point Car Service" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Point to Point Car Service</h1>
        <p className="text-center">Reach your desired location at a time that suits.</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={air5} alt="Corporate Transportation" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Corporate Transportation</h1>
        <p className="text-center">Want to pick up your CEO? Need luxury cars.</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={bugati3} alt="Party Limousine" className="w-56 h-56 mb-4 rounded-lg" />
        <h1 className="font-bold text-xl mb-2 text-center text-black">Party Limousine</h1>
        <p className="text-center">Arrive at your next party with style and maximize.</p>
      </div>
    </div>
  );
};

export default Services;
