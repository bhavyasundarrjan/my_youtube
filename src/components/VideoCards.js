import React from 'react';




const VideoCards = ({info}) => {
  const {snippet, statistics} = info;
  const {channelTitle , title, thumbnails} = snippet;
  return (
      <div key={info.id} className="w-64 p-2 m-2 shadow-lg">
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}></img>
        <ul>
            <li className='font-semibold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{parseInt(statistics.viewCount / 1000) > 1 ? parseInt(statistics.viewCount / 1000)+"K":parseInt(statistics.viewCount / 1000)  } views</li>
        </ul>
      </div>
  )
}

export default VideoCards
