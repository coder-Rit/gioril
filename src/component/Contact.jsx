import React, { useState } from "react";
import Bar from "./Navbar";
import Footer from "./Footer";
import { Toaster, toast } from 'sonner'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info('Sending you message...')
    try {
      const response = await fetch(
        "https://freenodemailer-server-render.onrender.com/postEmail/userMessageQuery",
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
    <div>
      <Bar />
      <div
        name="Contact"
        id="contactUs"
        className="bg-blue-600 py-4 border-t-4 border-white h-screen pt-12"
      >
        <div className="h-10 bg-blue-600"></div>
        <h1 className="text-white font-bold text-center text-3xl">
          <span className="">▐ </span>Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center mt-4 bg-white w-3/5 mx-auto p-3 rounded-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-blue-500 p-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-blue-500 p-2"
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your Phone number"
            className="w-full border border-blue-500 p-2"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            cols="20"
            rows="5"
            placeholder="Message..."
            className="w-full border border-blue-500 p-2"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
