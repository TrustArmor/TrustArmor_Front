import React from 'react';

const Hero = () => {
  return (
    <section className="text-center p-10 bg-dark text-white">
      <h1 className="text-4xl text-black font-bold">All-in-one Finance App you always wanted</h1>
      <p className="mt-4 text-gray-300 text-lg font-['Roboto']">
        Say Goodbye To Juggling Multiple Apps And Platforms. With Our Intuitive Interface And Powerful Features, Financial Clarity And Control Are Now At Your Fingertips.
      </p>
      <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
        <button className="bg-purple-600 rounded text-white flex-1 h-12 md:h-14 flex items-center justify-center px-6">
          Book A Demo
        </button>
        <button className="bg-transparent border-2 border-purple-600 rounded text-purple-600 flex-1 h-12 md:h-14 flex items-center justify-center px-6">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Hero;
