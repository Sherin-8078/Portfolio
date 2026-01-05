import React from 'react'
import stayelo from '../assets/stayelo.png'
import travelwings from '../assets/travelwings.png'
const Projects = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mb-6 '>
      <h1 className="text-5xl font-bold text-white md:mb-18">Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4'>
        <div className="p-4 bg-gray-800  hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-150 max-h-150">
            <img className="rounded-md max-h-60 w-full object-cover" src={stayelo} alt="stayelo" />
            <p className="text-white text-xl font-semibold ml-2 mt-4">
                Stayelo - Online Hotel Booking & Management Application
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-5">
               The Online Hotel Booking & Management System is a web-based platform that allows customers to easily browse, book, and manage hotel rooms online. It streamlines the hotel reservation process by providing real-time availability, secure payments, and instant booking confirmations. 
            </p>
            <div className='flex gap-3'>
                <a href="https://github.com/Sherin-8078/Stayelo.git"className="px-6 py-3 rounded-full
              bg-white text-black font-semibold
              shadow-[0_0_30px_6px] shadow-white/40
              hover:shadow-[0_0_40px_14px] 
              hover:bg-slate-100
              transition duration-300 ">Repo link</a>
              <a href="https://stayelo-frontend.onrender.com"className="px-6 py-3 rounded-full
              bg-white text-black font-semibold
              shadow-[0_0_30px_6px] shadow-white/40
              hover:shadow-[0_0_40px_14px] 
              hover:bg-slate-100
              transition duration-300 ">Live link</a>
            </div>
        </div>
        <div className="p-4 bg-gray-800 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-150 max-h-150">
                    <img className="rounded-md max-h-60 w-full object-cover" src={travelwings} alt="travelwings" />
            <p className="text-white text-xl font-semibold ml-2 mt-4">
                Travel wings - Kerala Tourist Helper Platform
            </p>
            <p className="text-zinc-400 text-sm/6 mt-2 ml-2 mb-5">
                The Kerala Tourist Helper Platform is a comprehensive MERN stack-based web application designed to enhance the travel experience for tourists visiting Kerala. The system connects tourists with verified local sellers who offer curated travel packages, accommodation options, and guided tours. 
            </p>
            <div className='flex gap-3'>
                <a href="https://github.com/Sherin-8078/Travel_Wings.git"className="px-6 py-3 rounded-full
              bg-white text-black font-semibold
              shadow-[0_0_30px_6px] shadow-white/40
              hover:shadow-[0_0_40px_10px] 
              hover:bg-slate-100
              transition duration-300 ">Repo link</a>
              <a href="https://travel-wings-3.onrender.com/"className="px-6 py-3 rounded-full
              bg-white text-black font-semibold
              shadow-[0_0_30px_6px] shadow-white/40
              hover:shadow-[0_0_40px_14px] 
              hover:bg-slate-100
              transition duration-300 ">Live link</a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
