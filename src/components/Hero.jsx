import React from 'react'
import cv from '../assets/sherin_cv.pdf';
const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
        <div className='text-center'>
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-yellow-200">
          Hi, I’m <span className=" gradient-text">Sherin Shibu</span> 
        </h1>

        <h2 className="mt-3 text-xl md:text-2xl text-slate-300">
          Full-Stack Developer specializing in the 
          <span className="text-white font-medium"> MERN stack</span>
        </h2>
        <p className="mt-6 text-slate-400 leading-relaxed">
          I build scalable, end-to-end web applications with clean APIs,
          secure authentication, and modern user interfaces.
        </p>
       <div className='flex gap-4 justify-center mt-8'>
         <a href={cv} download>
          <button className="px-6 py-3 rounded-full
              bg-white text-black font-semibold
              shadow-[0_0_30px_6px] shadow-white/40
              hover:shadow-[0_0_40px_14px]
              hover:bg-slate-100
              transition duration-300">
          Download CV
        </button>
            </a>
        <button className="px-6 py-3 rounded-full
              border border-white/30 text-white font-medium
              hover:border-white
              hover:shadow-[0_0_14px_4px] hover:shadow-white/50
              transition duration-300">
          Contact Me
        </button>
       </div>

    </div>
    </div>
  )
}

export default Hero
