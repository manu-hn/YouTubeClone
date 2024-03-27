import  { useEffect, useState } from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import {  YOUTUBE_SEARCH_API, MINI_YOUTUBE_LOGO } from '../utils/Constants';
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../redux/slices/appSlice';
// import SearchBar from './elements/SearchBar';
import axios from 'axios';
import { SlMagnifier } from 'react-icons/sl';
import { cacheResults } from '../redux/slices/searchSlice';
import YOUTUBE_LOGO from "../images/YOUTUBE_LOGO.png";
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store => store.search);
  
  useEffect(() => {
    const timer = setTimeout(() =>{

      if(searchCache[searchQuery]){
        setShowSuggestions(searchCache[searchQuery])
      }else{

        getSearchSuggestions()
      }    
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await axios.get(YOUTUBE_SEARCH_API + searchQuery);
    setSuggestions(response.data[1]);
    dispatch(cacheResults({
      [searchQuery] : response?.data[1]
    }))
   
  }


  const clearSearchText = async () => {
    setSearchQuery('')
   
  
  }
  const toggleMenuHandler = () => {
    dispatch(toggleSideBar())
  }

  return (
    <header className=' py-4 px-5   h-[4.25rem] bg-white w-full fixed z-10  border-black  flex justify-between items-center md:w-full md:grid md:grid-flow-col '>

      <section className='w-12  md:w-[30%] md:flex md:items-center md:col-span-1  h-14  fixed '>
        <span className='hover:bg-gray-200 hover:rounded-full px-3 py-1 rounded-full cursor-pointer hidden md:block'>
          <RxHamburgerMenu className='h-8  text-xl ' onClick={toggleMenuHandler} />
        </span>
       
        <img className='w-32 h-8 mix-blend-multiply mx-2 hidden md:block' src={YOUTUBE_LOGO} alt="YOUTUBE_LOGO" />
        <img src={MINI_YOUTUBE_LOGO} alt="MINI_YOUTUBE_LOGO"  className='block w-24 h-12   md:hidden'/>
      </section>
      <section className=' w-56 mx-16 z-10 md:w-full md:col-span-10 flex flex-col items-center justify-center'>

        <div className='w-full flex justify-center items-center '>
          <span className='flex items-center border w-full justify-center sm:justify-between h-8 sm:h-11  border-[#d8d6d6] rounded-l-full  py-2 px-4  sm:w-3/6'>
            {
              showSuggestions && (
                <GoSearch className='text-lg font-extralight ' />

              )
            }
            <input type="text" name="search" id="search" placeholder='Search' value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              className=' outline-none h-full   w-full px-3 ' />

            {
              suggestions.length > 0 && <RxCross1  onClick={clearSearchText} className='cursor-pointer' />
            }

          </span>
          <button className=' w-14 py-2 border-l flex justify-center 
                        items-center bg-[#F0F0F0] border h-8 sm:h-11 border-[#d8d6d6] rounded-r-full opacity-60 hover:opacity-100'>
            <GoSearch className='text-2xl font-extralight' />
          </button>
        </div>
        {
          showSuggestions && (
            <div className='bg-white w-[43rem] px-6 md:mr-12 z-10 rounded-lg shadow-xl'>
              {
               ( suggestions.length > 0 && showSuggestions) ? (
                  // <section className='bg-white  border w-[42rem] mr-12 my-1 z-50 rounded-lg shadow-lg px-4 py-2'>
                  <ul className=' rounded-lg' >
                    {suggestions?.map((suggest) => (

                      <li key={suggest} className='flex items-center my-2 hover:bg-gray-300 px-2 py-1 rounded-lg'><SlMagnifier className='text-sm' /><span className='mx-2'>{suggest}</span></li>

                    ))}
                  </ul>
                  // </section>
                ) : null
              }
            </div>
          )
        }
      </section>
      <section className='md:col-span-1 flex items-center h-8 justify-end fixed right-5'>
        <FaUserCircle className='text-2xl md:text-3xl cursor-pointer' />
      </section>
    </header>
  )
}

export default Header