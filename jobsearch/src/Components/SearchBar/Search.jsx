import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-grey rounded-[10px] p-4 sm:p-8">
      <form action="">
        <div className="firstDiv flex flex-col sm:flex-row justify-between items-center rounded-[8px] gap-[10px] bg-white p-4 sm:p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center w-full sm:w-auto">
            <IoSearch className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-full" placeholder='Search' />
            <IoMdCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon' />
          </div>
          <div className="flex gap-2 items-center w-full sm:w-auto mt-4 sm:mt-0">
            <FaHome className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-full" placeholder='Search' />
            <IoMdCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon' />
          </div>
          <div className="flex gap-2 items-center w-full sm:w-auto mt-4 sm:mt-0">
            <CiLocationArrow1 className='text-[25px] icon' />
            <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-full" placeholder='Search' />
            <IoMdCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-blueColor icon' />
          </div>
          <button className='bg-blueColor h-full p-3 sm:p-5 px-5 sm:px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-400 mt-4 sm:mt-0'>
            Search
          </button>
        </div>
      </form>
      <div className="secDiv flex flex-col sm:flex-row items-center gap-4 sm:gap-10 justify-center mt-10">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort By :</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option>Relevance</option>
            <option>Inclusive</option>
            <option>Starts With</option>
            <option>Contains</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2 mt-4 sm:mt-0">
          <label htmlFor="type" className="text-[#808080] font-semibold">Type :</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option>Full-time</option>
            <option>Part-Time</option>
            <option>Contract</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2 mt-4 sm:mt-0">
          <label htmlFor="level" className="text-[#808080] font-semibold">Level :</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option>Senior</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer hover:text-black mt-4 sm:mt-0'>
          Clear All
        </span>
      </div>
    </div>
  );
}

export default Search;
