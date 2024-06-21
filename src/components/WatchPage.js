import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import {YOUTUBE_EACH_VIDEO_API} from '../constants'

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"))
  useEffect(()=>{
   getExactVideo();
   dispatch(closeMenu())
  },[])

  const getExactVideo = async()=>{
    const data = await fetch(YOUTUBE_EACH_VIDEO_API+"&id="+params.get("v"));
    const json = await data.json();
    console.log(json)
  }
  return (
    <div>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+params.get("v")}
       title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
