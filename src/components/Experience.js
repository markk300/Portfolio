import React from "react";
import htmlimg from "../assets/html.png";
import cssimg from "../assets/css.png";
import javascriptimg from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import githubimg from "../assets/github.png";
import tailwindimg from "../assets/tailwind.png";
import bootstrapimg from "../assets/bootstrap.png";
import mysqlimg from "../assets/mysqlimg.png"
import java from "../assets/java.png"
import node from "../assets/node.png"
import nextjs from "../assets/nextjs.png"




import python from "../assets/python.png"

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
      style:"shadow-sky-300"
    },
    {
      id:5,
      src:githubimg,
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
    {
      id:8,
      src:mysqlimg,
      title:"MySql",
      style:"shadow-sky-600"
    },
    {
      id:9,
      src:python,
      title:"Python",
      style:"shadow-yellow-500"
    },
    {
      id:10,
      src:java,
      title:"Java",
      style:"shadow-red-500"
    },
    {
      id:11,
      src:node,
      title:"NodeJs",
      style:"shadow-green-400"
    },
    {
      id:12,
      src:nextjs,
      title:"NextJs",
      style:"shadow-sky-100"
    },
  ]
  return (
    <div name="expirience"
      className="bg-gradient-to-b
      from-gray-700 to-black
      w-full h-screen "
    >
      <div className="max-w-screen-lg pt-40 mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
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
