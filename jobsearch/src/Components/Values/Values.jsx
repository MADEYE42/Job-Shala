import React from 'react';
import { SiSimplenote } from "react-icons/si";
import { SiSimplelogin } from "react-icons/si";
import { GiPeaceDove } from "react-icons/gi";

const Values = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-semibold w-[600px] block">
        The <strong>Value</strong> that holds us true and to account
      </h1>
      <div className="grid gap-[5rem] grid-cols-3 items-center ">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv  rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]flex items-center justify-center">
              <SiSimplenote className='items-center h-[45px] w-[70%] text-blueColor hover:text-black'/>
            </div>
              <span className='font-semibold text-textColor text-[20px]'>
                Simplicity
              </span>
          </div>
          <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Thing being made beautiful simple are at the heart of everything we do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv  rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]flex items-center justify-center">
              <GiPeaceDove className='items-center h-[45px] w-[70%] text-blueColor hover:text-black'/>
            </div>
              <span className='font-semibold text-textColor text-[20px]'>
                Simplicity
              </span>
          </div>
          <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Thing being made beautiful simple are at the heart of everything we do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv  rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px]flex items-center justify-center">
              <SiSimplelogin className='items-center h-[45px] w-[70%] text-blueColor hover:text-black'/>
            </div>
              <span className='font-semibold text-textColor text-[20px]'>
                Simplicity
              </span>
          </div>
          <p className='text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Thing being made beautiful simple are at the heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Values