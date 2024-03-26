import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { SINGLE_VIDEO } from '../../utils/Constants';

const VideoCard = ({ info }) => {

    const { isSideBarOpen } = useSelector(store => store.app);
    const style = isSideBarOpen ? "  m-1 " : "  m-2";
    const videoWidth = isSideBarOpen ? "w-[26rem]" : "w-[20rem]";

    const { snippet } = info;
    const { channelTitle, thumbnails, title, publishedAt } = snippet;
    const { viewCount } = info?.statistics;

    const formatViewCount = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M views';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K views';
        } else {
            return count + ' views';
        }
    };

    return (
        <div className={` cursor-pointer  pr-16 sm:pr-0`}>
            <div className={`w-full lg:${videoWidth} md:w-[19rem] sm:w-[14rem]`}>
                <img className='w-full  rounded-lg'
                    src={thumbnails?.medium?.url} alt={title} />
            </div>
            <div className='mx-2 my-2'>
                <ul>
                    <li className='font-semibold  w-80 lg:w-[19rem] md:w-[16rem] sm:w-40'>{title}</li>
                    <li>{channelTitle}</li>
                    <li>{formatViewCount(viewCount)}</li>
                </ul>
            </div>
        </div>
    )
}

export default VideoCard
