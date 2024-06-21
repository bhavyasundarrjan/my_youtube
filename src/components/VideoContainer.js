import React , {useEffect, useState} from 'react';
import { YOUTUBE_API } from '../constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])
  useEffect(() =>{
   getVideos();
  },[])

  const getVideos = async() => {
    const data =  await fetch(YOUTUBE_API);
    const videoList = await data.json();
    setVideos(videoList.items);
    console.log(videoList.items)

  }

  if(videos.length < 0)
    return null;
  return (
    <div className='flex flex-wrap'>
     {
      videos.map((videoInfo) => 
        <Link key={videoInfo.id} to={"/watch?v="+videoInfo.id}><VideoCards info={videoInfo}></VideoCards> </Link>
      )
      
     }
      
    </div>
  )
}

export default VideoContainer
