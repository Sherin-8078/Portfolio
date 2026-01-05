import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mb-6'>
        <h1 className="text-5xl font-bold text-white md:mb-18">About Me</h1>
    <div className='w-full p-4'>
        <div className="mt-6 flex float-left w-full md:w-1/2 flex-col p-4 text-2xl space-y-4 text-slate-300 text-center">
        <p>
            I’m a Full-Stack Developer specializing in the MERN stack, focused on
            building scalable and user-friendly web applications.
          </p>
          <p>
            I enjoy working across the full development cycle — from designing
            RESTful APIs and implementing secure authentication to crafting
            responsive and modern user interfaces.
          </p>

          <p>
            My tech stack includes MongoDB, Express, React, Node.js, JWT, REST
            APIs, Tailwind CSS, and Git. I focus on writing clean, maintainable
            code and building applications that are performant and easy to
            scale.
          </p>

          <p className="text-fuchsia-400 font-medium">
            I’m currently open to full-time, internship, or freelance
            opportunities where I can contribute and continue growing as a
            developer.
          </p>
      </div>
      <div className="flex flex-col items-center  px-6 ">
        <h2 className="text-3xl font-bold text-white underline underline-offset-8 mb-6">
            Education & Experience
        </h2>

        <ul className="flex flex-col gap-6 text-slate-300 text-lg">
            <li className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 bg-fuchsia-500 rounded-full"></span>
                <div className="flex flex-col">
                <span className="font-semibold text-white">B.Tech - Computer Science and Engineering</span>
                <span className="text-slate-400 text-sm">
                    Sree Buddha College of Engineering | [2021 OCT - 2025 APR]
                </span>
                </div>
            </li>
            <li className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 bg-fuchsia-500 rounded-full"></span>
                <div className="flex flex-col">
                <span className="font-semibold text-white">Full-Stack Development - MERN</span>
                <span className="text-slate-400 text-sm">
                    ICT Academy of Kerala | [2025 JUN - 2025 OCT]
                </span>
                </div>
            </li>
            <li className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 bg-fuchsia-500 rounded-full"></span>
                <div className="flex flex-col">
                <span className="font-semibold text-white">Full-Stack Developer Intern </span>
                <span className="text-slate-400 text-sm">
                    TrackGenesis | [2025 OCT - 2025 NOV]
                </span>
                </div>
            </li>
            </ul>

        </div>

      </div>
      
    </div>
  )
}

export default About
