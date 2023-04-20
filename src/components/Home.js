import React from "react";
import dev from "../assets/developer.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Home() {

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/marko-mrda-a2011321b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/markk300",
    },
    {
      id: 3,
      child: (
        <>
         <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mrdamarkomm@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
           <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "./Mrda Marko cv111.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am Web Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Web developer with almost three years of experience in
            maintaining and building web pages/applications. Seeking for new
            opportunities and challenges that will expand my skill set.
            Proficient with Html/CSS and JS Frameworks, with extensive knowledge
            of UX and user psychology.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}  className="group text-white w-fit px-6 py-3 flex items-center 
            rounded-md bg-gradient-to-r mb-5 from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
                </span  >
            </Link>
          </div>
        </div>
        <div>
            <img src={dev} alt="developer img" className="rounded-2xl mx-auto w-2/3 
            md:w-full "  />
        </div>
        <div>
        <ul className="md:hidden flex justify-between gap-3 pt-10">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className="flex justify-between items-center  h-14
       px-4 bg-gray-500 rounded-xl hover:scale-110 duration-200  "
          >
            <a
              href={href}
              className="flex justify-between items-center w-full
           text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
