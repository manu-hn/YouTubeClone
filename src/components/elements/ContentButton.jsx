import React from 'react'

const ContentButton = ({name}) => {
  return (
    <div>
          <button className='bg-gray-200 px-3 py-1 rounded-lg text-xs m-2 md:text-sm font-semibold opacity-80 hover:opacity-100'>{name}</button>

    </div>
  )
}

export default ContentButton;

