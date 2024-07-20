import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navBar flex justify-between items-center p-4 sm:p-8 bg-white shadow-lg'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor"><strong>Job</strong>Shala</h1>
      </div>
      <div className="menu hidden sm:flex gap-8">
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Contact</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Register</li>
      </div>
      <div className="hamburgerMenu sm:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-[25px] text-blueColor" /> : <FaBars className="text-[25px] text-blueColor" />}
      </div>
      {isOpen && (
        <div className="mobileMenu absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-8 py-8 sm:hidden">
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Companies</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">About</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Contact</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Login</li>
          <li className="menuList list-none text-[#6f6f6f] hover:text-blueColor">Register</li>
        </div>
      )}
    </div>
  );
};

export default NavBar;
