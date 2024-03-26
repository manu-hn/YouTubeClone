import React from 'react'
import SideBar from './elements/SideBar';
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex   '>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body