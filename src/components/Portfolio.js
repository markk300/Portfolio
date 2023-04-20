import React from 'react'
import portfolioimg1 from "../assets/portfolio/web1.png"
import portfolioimg2 from "../assets/portfolio/web2.png"
import portfolioimg3 from "../assets/portfolio/web3.png"
import portfolioimg4 from "../assets/portfolio/web4.png"
import portfolioimg5 from "../assets/portfolio/web5.png"
import portfolioimg6 from "../assets/portfolio/web6.png"

function Portfolio() {
    const portfolios=[
        {
            id:1,
            src: portfolioimg1,
            titles:"Md Design",
            href:"https://mddesign.ba/"
            
        },
        {
            id:2,
            src: portfolioimg2,
            titles:"Item Store",
            href:"https://itemstore12.netlify.app/"
        },
        {
            id:3,
            src: portfolioimg3,
            titles:"FoodApp",
            href:"https://foodorderapp12.netlify.app/"
        },
        {
            id:4,
            src: portfolioimg4,
            titles:"Gardy",
            href:""
        },
        {
            id:5,
            src: portfolioimg5,
            titles:"Aim",
            href:""
        },
        {
            id:6,
            src: portfolioimg6,
            titles:"Book Shop ",
            href:"https://booksite12.netlify.app/"
        },
    ]
  return (
    <div name="portfolio" className='w-full bg-gradient-to-b from-black
     to-gray-700 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-48'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='pt-10'>Check out some of my work here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src,titles,href})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-2xl'>
            <a href={href}><img src={src} alt="Developer" className="  rounded-lg 
            hover:scale-105 duration-200  " /></a>
            <h1 className='text-2xl items-center p-4 flex 
            justify-center text-gray-500'>{titles}</h1>
        </div>

            ))}
                
            </div>

        </div>
    </div>
  )
}

export default Portfolio