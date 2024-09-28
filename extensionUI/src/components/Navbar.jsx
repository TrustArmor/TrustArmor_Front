import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <div className="text-white font-bold">Designflow</div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded ml-auto">Use Now</button>
    </nav>
  );
};

export default Navbar;
