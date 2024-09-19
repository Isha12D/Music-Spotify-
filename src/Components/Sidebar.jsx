import React from 'react';
import {assets} from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 gap-2 flex-col text-white hidden lg:flex'>

        {/* Mobile toggle button
      <div className='lg:hidden p-4'>
        <button onClick={toggleSidebar}>
          <img className='w-6' src={assets.menu_icon} alt="Menu" />
        </button>
      </div> */}

        {/* grey part */}
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            {/* Home icon */}
            <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            {/* Search icon */}
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        {/* library part */}
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                {/* Stack icon */}
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-bold'>Your Library</p>
                </div>
                {/* arrow icon */}
                <div className='flex items-center gap-3'>
                    <img className='w-4 m-2' src={assets.plus_icon} alt="" />
                    <img className='w-4' src={assets.arrow_icon} alt="" />
                </div>
            </div>
            {/* create playlist content */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>it's easy, we will help you</p>
                <button className='rounded-full px-4 py-1.5 bg-white text-15x text-black mt-4'>Create Playlist</button>
            </div>
            {/* podcasts recommendations */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1>Let's find some podcasts to follow</h1>
                <p className='font-light'>we'll keep you updated on new episodes</p>
                <button className='rounded-full px-4 py-1.5 bg-white text-15x text-black mt-4'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
