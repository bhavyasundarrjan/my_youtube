import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
   dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-7 cursor-pointer" alt="menu" onClick={()=> handleMenuClick()} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"></img>
        <a href='/'><img className="h-7  ml-2" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"></img>
        </a>
      </div>
        <div className='col-span-10 px-10 flex justify-center align-middle'> 
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text"/>
        <button className='border-gray-400 bg-gray-100 p-2 rounded-r-full bg-gray px-5 py-2 border border-l-0'><SearchOutlinedIcon></SearchOutlinedIcon></button>
        </div>
        <div className='col-span-1 flex justify-end'>
        <img className="h-8" alt="user" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"></img>
        </div>
    </div>
  )
}

export default Head
