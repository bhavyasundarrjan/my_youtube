import React from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const menuVisiblity = useSelector((store) => store.app.isMenuOpen)
  if(!menuVisiblity)
    return null;
  else
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Watch</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Cources</li>
        <li>Fashion & Beauty</li>
        <li>Podcasts</li>
      </ul>
    </div>
  )
}

export default SideBar
