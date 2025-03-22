import React from 'react'
import bannerImg from "../../assets/about/banner.jpg";

const Banner = () => {
  return (
    <>
       <div className='flex items-center justify-center h-[90vh] relative'>
          <img className='h-full w-full object-cover absolute top-0 left-0' src={bannerImg} alt="" />
          <div className='h-full w-full absolute bg-black top-0 opacity-50'/>
          <div className='relative z-10'>
            <h1 className='text-[75px] text-center text-white font-bitter'>About Us</h1>
            <p className='text-lg text-center text-white'>Discover our mission, values, and the impact that Lightlife has had on our community.</p>
          </div>
       </div>
    </>
  )
}

export default Banner