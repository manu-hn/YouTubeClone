
import { useEffect, useState } from 'react';
import {
  MOST_POPULAR_VIDEOS,

} from "../utils/Constants.jsx";
import VideoCard from './elements/VideoCard.jsx';
import { Link } from 'react-router-dom';
import useFetchVideos from '../utils/useFetchVideos.jsx';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const { fetchVideos } = useFetchVideos();
  const { isSideBarOpen } = useSelector(store => store.app);

  const style = isSideBarOpen ? "ml-10 sm:ml-56" : "ml-10"

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      // const response = await axios.get(MOST_POPULAR_VIDEOS)
      const response = await fetchVideos(MOST_POPULAR_VIDEOS + import.meta.env.VITE_YOUTUBE_API_KEY);
      // const data = await fetchVideos(`${YOUTUBE_KEYWORD_VIDEOS}devotion&key=${YOUTUBE_API_KEY}`);
      // const locationData = await fetchVideos(YOUTUBE_LOCATION_VIDEOS);
      // const eventsData = await fetchVideos(YOUTUBE_EVENTS_VIDEO);

      setVideos(response?.items);

      // setVideos([...videos, data.items])

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={`mt-20 md:mt-36 ${style} sm:mt-32 -z-30`}>
      <div className='flex flex-wrap justify-center lg:flex lg:justify-evenly lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap sm:justify-evenly  '>
        {
          videos?.map((video) => (
            <Link key={video?.id} to={'/watch?v=' + video?.id}>
              <VideoCard info={video} />
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default VideoContainer