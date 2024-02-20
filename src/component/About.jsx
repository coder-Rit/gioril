import React from "react";
import about from "../assets/about.webp";

const About = () => {
  return (
    <div name="About" className="max-w-5xl  mx-auto bg-white">
      <h1 className="text-blue-600 font-bold  text-center text-3xl mt-[20px]">
        <span className="">▐ </span>About us
      </h1>
      <div className="flex  md:flex-row flex-col  items-center mt-[40px]">
        <div className="md:w-1/2 w-full p-3 md:p-0 ">
          <img src={about} alt="" className="h-[520px]" />
        </div>

        <div className="md:w-1/2 w-full p-3 md:p-0">
          <p>
            A fictitious corporation called Mobile Tower Service specializes in
            tower installation. Tall towers owned and operated by the World Wide
            Tower Group are regularly used for various reasons.
          </p>
          <p>
            as for communications, broadcasting, monitoring, or even as
            somewhere to go on vacation. The company's main goal is to offer
            these towers' expert installation services.
          </p>
          <p>
            In addition, our team of tower experts fixes old and broken towers.
            If you have the room, you may also work with our team to get a new
            tower installed for free.
          </p>
          <p>
            Please get in touch with our staff at any time to set up a free
            installation or maintenance of the tower.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
