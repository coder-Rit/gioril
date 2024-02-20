import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // Change the delay to 5000 for 5 seconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm ${showForm ? 'block' : 'hidden'} z-20   rounded-lg shadow-md shadow-black`}>
      <div className="bg-white p-8 rounded shadow-md">
        <div className="flex justify-end mb-2">
          <button onClick={handleCloseForm} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className='flex flex-col gap-4'>
        <input type="text" placeholder='Enter your name' className='border-2 border-black p-2' />
        <input type="email" placeholder='Enter your Email' className='border-2 border-black p-2' />
        <input type="phnumber" placeholder='Enter your phone number' className='border-2 border-black p-2' />
        <input type="text" placeholder='Enter your Location' className='border-2 border-black p-2' />
        <button className='bg-blue-600 p-2 text-white font-bold'>Submit</button>
        </div>
        
       
      </div>
    </div>
  );
};

export default ContactForm;


