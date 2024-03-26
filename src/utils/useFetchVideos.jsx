import axios from 'axios';


const useFetchVideos = () => {

    async function fetchVideos(url) {

        const response = await axios.get(url);

        return response.data;

    }

    return { fetchVideos }
}

export default useFetchVideos