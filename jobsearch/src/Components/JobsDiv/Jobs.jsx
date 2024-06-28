import React from 'react';
import { MdOutlineAccessTime } from "react-icons/md";
import logo1 from '../../Assets/1.png';
import logo2 from '../../Assets/2.png';
import logo3 from '../../Assets/3.png';
import logo4 from '../../Assets/4.png';
import logo5 from '../../Assets/5.png';
import logo6 from '../../Assets/6.png';
import logo7 from '../../Assets/7.png';
import logo8 from '../../Assets/8.png';

const Data = [
  {
    id:1,
    image:logo1,
    title:'Web Developer',
    time:'Now',
    location:'Mumbai',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Mahindra Industry.Ltd'
  },
  {
    id:2,
    image:logo2,
    title:'UI/UX Designer',
    time:'24Hrs',
    location:'Chennai',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Pepsi .Co'
  },
  {
    id:3,
    image:logo3,
    title:'Flutter Developer',
    time:'5Hrs',
    location:'Delhi',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Apple .Co'
  },
  {
    id:4,
    image:logo4,
    title:'Software Developer',
    time:'2Days',
    location:'Bangalore',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Levis. Co'
  },
  {
    id:5,
    image:logo5,
    title:'Software Developer',
    time:'2Days',
    location:'Bangalore',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Levis. Co'
  },
  {
    id:6,
    image:logo6,
    title:'Software Developer',
    time:'2Days',
    location:'Bangalore',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Levis. Co'
  },
  {
    id:7,
    image:logo7,
    title:'Software Developer',
    time:'2Days',
    location:'Bangalore',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Levis. Co'
  },
  {
    id:8,
    image:logo8,
    title:'Software Developer',
    time:'2Days',
    location:'Bangalore',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic.',
    company:'Levis. Co'
  }
  
]
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id,image,title,time,location,desc,company})=>{
            return(
              <div key={id}className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grey hover:shadow-lg  ">
              <span className='flex justify-between items-center gap-4'><h1 className="text-[16px] font-semibold group-hover:text-white ">{title}</h1>
                <span className='flex items-center text-[#ccc]'>
                  <MdOutlineAccessTime className='mr-1'/>{time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>
              <div className="company flex items-center gap-2 ">
                <img src={image} alt="" className='rounded-[10px]  w-[10%]'/>
                <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
              </div>
            <button className='text-[15px] w-full font-semibold bg-blueColor p-2 rounded-[10px] text-white hover:bg-white hover:text-blueColor'>Apply Now</button>
          </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs