import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import {Link} from "react-scroll"
function NavBar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "expirience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center
     bg-black w-full h-20 px-4 text-white fixed"
    >
      <div>
        <h1 className="text-3xl font-signature ml-2">MMark0</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
             text-gray-500 hover:scale-110 duration-200"
          >
            {" "}
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400"
      >
        {nav ? <FaTimes size={33} /> : <GoThreeBars size={33} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-screen 
        bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize text-4xl px-4 py-6">
              {" "}
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}> {link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
