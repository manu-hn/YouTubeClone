import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserSquareLight } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { CiTrophy } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { useSelector } from 'react-redux';
import ShorterSideBar from './ShortSideBar';
import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {
  const { isSideBarOpen } = useSelector(store => store.app);
  const style = isSideBarOpen && "w-10 text-xs md:w-48 md:text-sm sm:w-36";
  const location = useLocation();
 
  return (
    <>
      {
        isSideBarOpen ? (
          <div className={ `bg-white mx-4 cursor-pointer fixed sm:mr-28 mt-[4.25rem]  hidden ${style} md:block text:xs md:text-sm overflow-y-scroll`} >
            <div className='border-b border-gray-300'>

              <ul>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><Link className='flex' to={'/'}><MdHomeFilled className='mr-6 text-xl' />  Home</Link></li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'> <SiYoutubeshorts className='mr-6 text-xl' /> Shorts</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><MdOutlineSubscriptions className='mr-6 text-xl' /> Subscriptions</li>
              </ul>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <h1 className='px-3 py-2 w-full hover:bg-gray-200 rounded-lg'>You </h1>
              <ul>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><PiUserSquareLight className='mr-6 text-xl' />  Your Channel</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'> <GoHistory className='mr-6 text-xl' /> History</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><CiYoutube className='mr-6 text-xl' /> Your Videos</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><MdOutlineWatchLater className='mr-6 text-xl' /> Watch Later</li>

              </ul>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <h1 className='px-3 py-2 w-full hover:bg-gray-200 rounded-lg'>Explore </h1>
              <ul>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><BsFire className='mr-6 text-xl' />  Trending</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'> <MdOutlineShoppingBag className='mr-6 text-xl' /> Shopping</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><IoMusicalNoteOutline className='mr-6 text-xl' /> Music</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><PiFilmSlate className='mr-6 text-xl' /> Films</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><CgMediaLive className='mr-6 text-xl' /> Live</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><SiYoutubegaming className='mr-6 text-xl' /> Gaming</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><FaRegNewspaper className='mr-6 text-xl' /> News</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><CiTrophy className='mr-6 text-xl' /> Sport</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><HiOutlineLightBulb className='mr-6 text-xl' /> Learning</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><GiHanger className='mr-6 text-xl' /> Fashion & beauty</li>
                <li className='flex items-center px-3 py-2 hover:bg-gray-200 rounded-lg'><MdOutlinePodcasts className='mr-6 text-xl' /> Podcasts</li>

              </ul>
            </div>
          </div>
        ) : (location?.pathname === '/watch' || <ShorterSideBar />)
      }
    </>
  )
}

export default SideBar