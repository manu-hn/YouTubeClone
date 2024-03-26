import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const ShorterSideBar = () => {
  // const { isSIdeBarOpen } = useSelector(store => store.app);
  
  return (
    <div className={`mx-2 hidden md:block mt-16 fixed`}>

      <ul className='cursor-pointer'>
        <li className=' hover:bg-gray-200 text-[0.7rem] my-8 text-left flex flex-col items-center'><MdHomeFilled className=' text-xl text-center' /> <span> Home</span></li>
        <li className=' hover:bg-gray-200 text-[0.7rem] my-8 text-left flex flex-col items-center'> <SiYoutubeshorts className=' text-xl' /> Shorts</li>
        <li className=' hover:bg-gray-200 text-[0.7rem] my-8 text-left flex flex-col items-center'><MdOutlineSubscriptions className=' text-xl' /> Subscriptions</li>
        <li className=' hover:bg-gray-200 text-[0.7rem] my-8 text-left flex flex-col items-center'><CiYoutube className=' text-xl' /> Your Videos</li>
      </ul>
    </div>
  )
}

export default ShorterSideBar