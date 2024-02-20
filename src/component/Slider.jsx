import React, { useEffect } from "react";
import hero from "../assets/video.mp4";
import hero from '.'
import "../App.css";

const Hero = () => {
    
  return (
    <div
      name="Home"
      className="relative h-full md:h-full w-full overflow-hidden "
     
    >
     <video src={hero} className="w-full h-screen object-cover  transform scale-105 transition-transform duration-300 hover:scale-125" autoPlay loop />


      <div className="absolute inset-0 overlay bg-black opacity-80 bg-gradient-to-r from-blue-600 "></div>
      <div className="flex flex-col gap-2 justify-center py-4  items-center md:items-start ml-[50px] absolute inset-0"  >
        <h1  className=" text-white text-3xl md:text-6xl   font-bold text-center  font-poppins"  >
          Unlock your earning potential
        </h1>

        <p className="text-3xl md:text-6xl text-blue-600 bg-white  font-bold text-center px-2 md:p-0" >
          with JioRil
        </p>

        <p className=" text-2xl text-white text-center max-w-4xl p-2 mt-3     font-normal  " >
        Turn Your Extra Space into a Lucrative Opportunity
        </p>

      
      </div>
    </div>
  );
};

export default Hero;
