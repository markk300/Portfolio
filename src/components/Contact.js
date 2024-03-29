import React, { useEffect } from "react";
import Aos from "aos"

function Contact() {
  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (
    <div
      name="contact"
      className="w-full h-full pt-72 bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="flex justify-center items-center">
          <form className="flex flex-col w-ful md:w-1/2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent
                    border-2 rounded-lg text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent
                    border-2 rounded-lg text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-lg text-white
                    focus:outline-none"
            />
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-3 px-6 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300 mt-4"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
