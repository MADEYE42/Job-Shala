import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full footer p-4 sm:p-8 lg:p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start m-auto items-center justify-center'>
      <div className="mb-4 lg:mb-0">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]"><strong>Job</strong>Shala</h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and find the best candidates.
        </p>
      </div>
      <div className="grid mb-4 lg:mb-0">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid mb-4 lg:mb-0">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact Us</li>
        </div>
      </div>
      <div className="grid mb-4 lg:mb-0">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Us
        </span>
        <div>
          <small className='text-[14px] text-white'>
            gmadye13@gmail.com
          </small>
          <div className="icon flex gap-4 py-[1rem]">
            <AiFillInstagram className='bg-white text-blueColor icon w-[35px] h-[35px]' />
            <FaFacebook className='bg-white text-blueColor icon w-[35px] h-[35px] rounded-full' />
            <FaGithub className='bg-white text-blueColor icon w-[35px] h-[35px] rounded-full' />
            <FaLinkedin className='bg-white text-blueColor icon w-[35px] h-[35px]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
