import { useState } from "react";
import React from "react";
import { useEffect } from 'react';






  
 



  
const FAQ = () => {

  const [acc, setAcc] = useState({});

  const qa = [
    {
      id: 1,
      ques: "What is tower installation?",
      ans: "Tower installation involves the process of setting up mobile network towers on properties to enhance network coverage and capacity. Our company specializes in facilitating this process by connecting property owners with mobile network operators seeking suitable locations for tower installation.",
    },
    {
      id: 2,
      ques: "How can I earn money by leasing my space for tower installation?",
      ans: "By leasing your extra space for tower installation, you can earn passive income from mobile network operators. Our team handles negotiations and agreements to ensure you receive fair compensation for leasing your space for tower installation.",
    },
    {
      id: 3,
      ques: "What are the benefits of leasing my space for tower installation?",
      ans: "Leasing your space for tower installation offers several benefits, including passive income generation, maximizing the value of your property, and contributing to the expansion of vital communication networks.",
    },
    {
      id: 4,
      ques: "How long does the tower installation process take?",
      ans: "The timeline for tower installation can vary depending on factors such as site preparation, permits, and equipment installation. Our team manages the process efficiently to minimize downtime and ensure timely completion.",
    },
    {
      id: 5,
      ques: "Is my property suitable for tower installation?",
      ans: "Our experts conduct thorough assessments to determine the suitability of your property for tower installation. Factors such as location, accessibility, and zoning regulations are taken into consideration to ensure optimal placement of the tower.",
    },
  ];

  const toggleAccordion = (id) => {
    setAcc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div name="FAQ" className="w-full h-full  bg-gradient-to-r from-blue-600  to-blue-400 py-6 border-t-4 border-white">
      <h1 className="text-white text-xl md:text-3xl font-bold  text-center" data-aos="fade-up">
      <span className="text-white mr-2">▐</span>
        Frequently asked questions
      </h1>
      {qa.map(({ id, ques, ans }) => (
        <div
          key={id}
          data-aos="fade-up"
          className="p-4 bg-white w-5/6 mx-auto rounded-lg shadow-sm shadow-black   mt-[15px]"
        >
          <div className="py-[4px] ">
            <button
              onClick={() => toggleAccordion(id)}
              className="flex justify-between w-full text-left md:text-center"
            >
              <span>{ques}</span>
              <span className="font-bold text-2xl">{acc[id] ? "-" : "+"}</span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in text-slate-600 text-sm ${
                acc[id]
                  ? " grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className=" overflow-hidden">{ans}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
