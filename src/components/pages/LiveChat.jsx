import React, { useEffect, useState } from 'react'
import ChatMessage from '../elements/LiveChatMessage';
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../redux/slices/chatSlice';
import random from 'random-key-generator';
import { generate } from "random-words";
import { generateRandomName, randomEmojiGenerator } from '../../utils/Helper';
import { IoSend } from "react-icons/io5";


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const { messages } = useSelector((store) => store.chat);

    useEffect(() => {

        const clearTime = setInterval(() => {

            dispatch(addMessage({
                id: random.getRandom(10, 'droid', '*', 'black'),
                username: generateRandomName(),
                message: generate({ minLength: 5, maxLength: 10, min: 1, max: 3 }) + randomEmojiGenerator(),
            }))

        }, 2000);

        return () => clearInterval(clearTime);
    }, []);



    const sendLiveMessage = () => {
        dispatch(addMessage({
            id: random.getRandom(10, 'droid', '*', 'black'),
            username: 'Manu H N',
            message: liveMessage,
        }));
        setLiveMessage('')
    }


    return (
        <>
            <div className='border border-gray-300 w-full overflow-hidden 
            rounded-t-xl h-[14rem] 2 xl:w-[24rem] lg:w-[17rem] lg:h-[22rem] md:w-[16rem] md:ml-10 overflow-y-scroll flex flex-col-reverse'>
                <div className=''>

                    {
                        messages.map((message) => {
                            return <ChatMessage key={message.id} message={message.message} username={message.username} />

                        })
                    }
                </div>
            </div>
            <form className='border w-full xl:w-[24rem] lg:w-[17rem] md:w-[16rem] md:px-3 md:ml-10  border-gray-300 py-3 px-8 rounded-b-xl flex justify-between' onSubmit={(e) => {
                e.preventDefault();
                sendLiveMessage();
                
            }}>
                <input type="text" name="" id=""
                    placeholder='Enter'
                    onChange={(e) => setLiveMessage(e.target.value)}
                    value={liveMessage}
                    className='px-4 outline-none ' />
                <button type='submit'>
                    <IoSend className='text-blue-800 text-xl' />
                </button>
            </form>

        </>
    )
}

export default LiveChat