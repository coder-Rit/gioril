import React, { useState, useEffect } from "react";
import { Toaster, toast } from 'sonner'

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pinCode: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // Change the delay to 5000 for 5 seconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        toast.info('Sending you message...')



    try {
      const response = await fetch(
        "https://freenodemailer-server-render.onrender.com/postEmail/visitedUserDetail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success(data.msg)

      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm ${
        showForm ? "block" : "hidden"
      } z-20   rounded-lg shadow-md shadow-black`}
    >
      
      <div className="bg-white p-8 rounded shadow-md">
        <div className="flex justify-end mb-2">
          <button
            onClick={handleCloseForm}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="border-2 border-black p-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              placeholder="Enter your Email"
              className="border-2 border-black p-2"
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              required
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="border-2 border-black p-2"
            />
            <input
              type="number"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter your pin code"
              required
              className="border-2 border-black p-2"
            />
            <button
              type="submit"
              className="bg-blue-600 p-2 text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
