import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../../redux/slices/appSlice';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { COMMENTS_API, MOST_LIKED_VIDEOS, SINGLE_VIDEO, } from '../../utils/Constants';
import Comments from './Comments';
// import useFetchVideos from '../../utils/useFetchVideos';
import LiveChat from './LiveChat';





const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [singleVideo, setSingleVideo] = useState([]);

  // const { fetchVideos } = useFetchVideos();

  useEffect(() => {

    dispatch(closeSideBar())
    fetchCommentsList();
    fetchSingleVideo()
    // fetchChannelList()
    fetchMostLikedVideos()

  }, []);

  const fetchCommentsList = async () => {
    try {

      const commentsResponse = await axios.get(`${COMMENTS_API}${searchParams.get('v')}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);

      setComments(commentsResponse?.data?.items)



    } catch (error) {
      console.log(error)
    }
  }
  const fetchSingleVideo = async () => {
    const response = await axios.get(`${SINGLE_VIDEO}${searchParams.get('v')}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
    setSingleVideo(response?.data?.items)


  }

  const fetchMostLikedVideos = async () => {
    const response = await axios.get(MOST_LIKED_VIDEOS);
    console.log(response)
  }




  const getTimeDifference = (startTime, endTime) => {
    const differenceInMilliseconds = new Date(endTime) - new Date(startTime);
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

    if (differenceInHours >= 24) {
      return `${Math.floor(differenceInHours / 24)} day ago`;
    } else {
      return `${Math.round(differenceInHours)} hours ago`;
    }
  };
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
    <div className='w-full px-6 sm:px-28'>
      <div className='mt-20 w-full flex justify-between '>
        <div className='w-2/3 '>
          <iframe className='rounded-xl w-[24rem] h-[14rem]  xl:w-[52rem] lg:w-[36rem] lg:h-[25rem] md:w-[26rem] md:h-[16rem] sm:w-[40rem] sm:h-[20rem]' width="850" height="450"
            src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=TJO9gFmgw92NIAN-`}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className='w-1/3 hidden md:block md:mx-6 md:w-1/3'>
          <LiveChat />
        </div>
      </div>

      <div className='w-full  lg:w-[50rem]  md:w-[26rem] sm:w-[36rem] text-justify overflow-hidden'>
        <h1 className='text-md md:text-xl font-bold my-2'>{singleVideo[0]?.snippet?.title}</h1>
        <div>
          hello
        </div>
        <p className='bg-gray-100  px-4 py-3 rounded-lg lg:h-[14rem] overflow-y-scroll'>
          <div className='flex'>
            <p className='font-semibold text-sm mr-4'>
              {formatViewCount(singleVideo[0]?.statistics?.viewCount)}

            </p>
            <p className='font-semibold text-sm mx-4'>
              {getTimeDifference(singleVideo[0]?.snippet?.publishedAt, new Date())}

            </p>
          </div>
          {

            singleVideo[0]?.snippet?.description}


        </p>
      </div>
      <div className=''>
        <h1 className='font-bold text-xl'>Comments</h1>
        {
          comments?.map((comment) => (
            <Comments key={comment?.id} info={comment} />
          ))
        }
      </div>
    </div>
  )
}

export default WatchPage;