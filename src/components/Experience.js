import React from "react";
import htmlimg from "../assets/html.png";
import cssimg from "../assets/css.png";
import javascriptimg from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import githubmg from "../assets/html.png";
import tailwindimg from "../assets/tailwind.png";
import bootstrapimg from "../assets/bootstrap.png";

function Experience() {
  const skils=[
    {
      id:1,
      src:htmlimg,
      title:"Html",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:cssimg,
      title:"Css",
      style:"shadow-blue-500"
    },
    {
      id:3,
      src:javascriptimg,
      title:"JavaScript",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:reactimg,
      title:"React",
      style:"shadow-orange-600"
    },
    {
      id:5,
      src:githubmg,
      title:"GitHub",
      style:"shadow-gray-500"
    },
    {
      id:6,
      src:bootstrapimg,
      title:"BootStrap",
      style:"shadow-violet-500 "
    },
    {
      id:7,
      src:tailwindimg,
      title:"TailWind",
      style:"shadow-sky-400"
    },
  ]
  return (
    <div name="experience"
      className="bg-gradient-to-b
      from-gray-700 to-black
      w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-8">These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            
            {skils.map(({id,src,title,style})=>(
             <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
             <img src={src} alt="imgg" className="w-20 mx-auto"/>
             <p className="mt-4">{title}</p>
           </div>

            ))}

          
        </div>
      </div>
    </div>
  );
}

export default Experience;
