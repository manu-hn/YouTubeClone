import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { generateRandomColor } from '../../utils/Helper';


const LiveChatMessage = ({ username, message }) => {



    return (
        <div className='flex items-center px-4 py-1 border-b border-gray-100 '>
            <div className=''>
            <FaUserCircle className={`text-2xl ${generateRandomColor()} `} />
            </div>
            <div className='w-96 overflow-hidden'>
                <span className='font-semibold px-2 text-sm'>{username}</span>
                <span className='text-sm '>{message}</span>
            </div>
        </div>
    )
}

export default LiveChatMessage;