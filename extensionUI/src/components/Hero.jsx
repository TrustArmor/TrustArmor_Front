import React from 'react';

const Hero = () => {
  return (
    <section className="text-center p-10 bg-dark text-white">
      <h1 className="text-4xl text-black font-bold">SAFEGUARD YOUR ONLINE EXPERIENCE WITH OUR TRUSTARMOR AI!</h1>
      <p className="mt-4 text-gray-500 text-lg">
        TrustArmor AI enhances your online safety by detecting fraudulent links and verifying image sources. Stay protected from scams and misinformation while browsing, ensuring a secure and trustworthy internet experience.
      </p>
      <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center">
        <button className="bg-purple-600 rounded text-white flex items-center justify-center px-8 w-48 h-12 md:h-14">
          Book A Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
