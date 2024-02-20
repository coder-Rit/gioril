import React from 'react'
import hero from "../assets/video.mp4";

const Hero = () => {
  return (
    <div name="Home" className=' h-screen bg-blue-500'>
    <video src={hero} autoPlay loop muted className='w-full h-screen' />
  </div>
  
  )
}

export default Hero
