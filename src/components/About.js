import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen 
    bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 
          border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Graduated engineer for computer science and informatics. I have a good
          knowledge of front-end, and I am also versed in back-end.
        </p>
        <br />
        <p className="text-xl">
          I am highly motivated to continuously learn and expand my knowledge.
          Well-versed in various programming languages and frameworks including
          HTML5, CSS, JavaScript, Bootstrap,TailWind, React, Node.js, Python, Java, and
          MySQL. I am also familiar with a variety of software such as Adobe
          Photoshop CC, Adobe Illustrator CC, Adobe InDesign CC, Adobe Premier
          Pro CC.
        </p>\
        
      </div>
    </div>
  );
}

export default About;
