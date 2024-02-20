import React from "react";
import img1 from "../assets/expert.webp";
import img2 from "../assets/mechanical-engineering.webp";
import img3 from "../assets/signal-tower-.webp";
const Why = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-bold text-3xl text-center mt-2">Why choose us?</h1>
      <p className="text-center mt-4 p-2">
        If you have a mobile tower or other communication devices that are used
        in mobile towers, it is important to know how frequently you should have
        your equipment inspected.
      </p>

      <div className="flex flex-col md:flex-row gap-[80px] mt-[30px] mx-auto items-center justify-center ">
        <div className="flex flex-col items-center">
          <img src={img1} alt="" className="w-[70px]" />
          <p>Clients Satisfaction</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={img2} alt="" />
          <p>Value Engineering</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={img3} alt="" />
          <p>Experienced & Equipped</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
