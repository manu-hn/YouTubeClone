

export const LIMIT_LIVE_CHAT = 25;

export const MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=`;

export const BUTTON_LIST = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Computer programming'
    },
    {
        id: 3,
        name: 'Music'
    },
    {
        id: 4,
        name: 'Mixes'
    },
    {
        id: 5,
        name: 'Live'
    },
    {
        id: 6,
        name: 'Stocks'
    },
    {
        id: 7,
        name: 'News'
    },
    {
        id: 8,
        name: 'Super biking'
    },
    {
        id: 9,
        name: 'Comedy'
    },
    {
        id: 10,
        name: 'Motorcycling'
    },
    {
        id: 11,
        name: 'Recently uploaded'
    },
    {
        id: 12,
        name: 'New to you'
    },
]

export const MINI_YOUTUBE_LOGO = `https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg`



export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=`

export const MOST_LIKED_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`

export const SINGLE_VIDEO = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

// export const YOUTUBE_KEYWORD_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YOUTUBE_API_KEY}`;
export const YOUTUBE_KEYWORD_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;

export const YOUTUBE_LOCATION_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=12.971599%2C77.594566&locationRadius=10mi&q=Indian&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

export const YOUTUBE_EVENTS_VIDEO = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=news&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

// export const YOUTUBE_CHANNEL_DETAIL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY] `
export const YOUTUBE_CHANNEL_DETAIL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`