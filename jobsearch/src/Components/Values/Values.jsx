import React from "react";
import { SiSimplenote, SiSimplelogin } from "react-icons/si";
import { GiPeaceDove } from "react-icons/gi";

const Values = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] px-4 sm:px-8 lg:px-0">
      <h1 className="text-textColor text-[25px] sm:text-[30px] lg:text-[35px] py-[2rem] pb-[3rem] font-semibold w-full sm:w-[600px] block">
        The <strong>Value</strong> that holds us true and to account
      </h1>
      <div className="grid gap-[5rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <SiSimplenote className="h-[30px] w-[30px] text-blueColor hover:text-black" />
            </div>
            <span className="font-semibold text-textColor text-[20px]">Simplicity</span>
          </div>
          <p className="text-[15px] sm:text-[20px] lg:text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, non?
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <GiPeaceDove className="h-[30px] w-[30px] text-blueColor hover:text-black" />
            </div>
            <span className="font-semibold text-textColor text-[20px]">Peace</span>
          </div>
          <p className="text-[15px] sm:text-[20px] lg:text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, et.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeeef7] p-[1.5rem] outline-double">
          <div className="flex items-center gap-3">
            <div className="imgDiv rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <SiSimplelogin className="h-[30px] w-[30px] text-blueColor hover:text-black" />
            </div>
            <span className="font-semibold text-textColor text-[20px]">Privacy</span>
          </div>
          <p className="text-[15px] sm:text-[20px] lg:text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, necessitatibus.
          </p>
        </div>
      </div>
      <div className="card mt-[2rem] flex flex-col sm:flex-row justify-between bg-blueColor p-[2rem] sm:p-[5rem] rounded-[10px] outline-black outline-[10px]">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-white text-[20px] sm:text-[25px] lg:text-[30px] font-bold">
            Ready to switch a career?
          </h1>
          <h2 className="text-textColor text-[18px] sm:text-[20px] lg:text-[25px] font-bold">
            Let's get started
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[20px] sm:px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Values;
