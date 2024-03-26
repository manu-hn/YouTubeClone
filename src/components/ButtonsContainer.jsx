import React from 'react';
import Button from './elements/ContentButton';
import { BUTTON_LIST } from '../utils/Constants';
import { useSelector } from 'react-redux';


const ButtonsContainer = () => {
  const { isSideBarOpen } = useSelector(store => store.app);
  const style = isSideBarOpen ? ` md:flex md:ml-56 md:mb-28` : `ml-0 md:ml-20`
  return (
    <div className={`fixed w-full mt-[4.25rem]  ml-36 hidden   bg-white  md:flex   md:${style} `}>
      {
        BUTTON_LIST.map((btn) => {

          return <Button name={btn?.name} key={btn?.id} />
        })
      }
    </div>
  )
}

export default ButtonsContainer;