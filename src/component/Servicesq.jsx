import React from "react";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Rooftops Mobile Tower Service",
      img:"https://mobiletowerexperts.online/images/services-1.jpg",
      p: "Our rooftop solutions are designed to cover regions that are highly inhabited. We work with property owners in all three island groups to deliver the best possible coverage and capacity reach.",
    },
    {
      id: 2,
      title: "Ground Based Mobile Tower Service",
      img:"https://mobiletowerexperts.online/images/services-2.jpg",
      p: "In order to offer better coverage in terms of both reach and quality, our ground-based towers are erected on terrain with a solid foundation and a high load bearing capability.",
    },
    {
      id: 3,
      title: "Repairing & Maintenance Service",
      img:"https://mobiletowerexperts.online/images/services-3.jpg",
      p: "Our organization offers tower repair services for broken towers from other companies. Our tower company operates, and our corporate team is within a phone call away.",
    },
  ];

  return (
    <div name="Services" className="w-full h-full  bg-gradient-to-b from-blue-600 to-blue-400 mt-6 py-5">
      <h1 className="text-white font-bold  text-center text-3xl p-3">
        <span>▐ </span>Our services
      </h1>

      <div className=" flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-4 mt-4">
      {data.map(({ id, title, p,img }) => (
        <div key={id} className="bg-white flex flex-col w-[300px]  rounded-[50px]">
          <img src={img} alt="" className="w-full p-3 rounded-[50px]" />
          <p className="font-bold text-center">{title}</p>
          <p className="p-4">{p}</p>
        </div>
      ))}
      </div>

      
    </div>
  );
};

export default Services;
