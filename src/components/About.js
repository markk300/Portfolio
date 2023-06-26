import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full  
    bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-2 mt-10">
          <p
            className="text-4xl mt-10 font-bold inline border-b-4 
          border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          As a current student pursuing a master's degree, I have a strong
          foundation in front-end development and back-end programming. Deeply
          committed to continuous learning and consistently expanding my
          knowledge in the field.
        </p>
        <br />
        <div className="text-xl">
          <p>
            In terms of <b>front-end development</b>, I possess extensive
            knowledge of HTML5, CSS, and JavaScript. I am proficient in using
            frameworks such as Bootstrap and Tailwind to create responsive and
            visually appealing websites. Additionally, I have expertise in
            React, which enables me to build interactive and dynamic user
            interfaces.
          </p>

          <p>
            On the <b>back-end</b>, I have experience with Node.js and Express,
            which allows me to develop server-side logic and APIs. I am
            proficient in working with databases such as MongoDB and MySQL,
            ensuring efficient data storage and retrieval for web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
