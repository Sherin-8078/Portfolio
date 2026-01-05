import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
const Skills = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center mb-6'>
        <h1 className="text-5xl font-bold text-white md:mb-18">Technical Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10'>
        <div className="p-4 bg-gray-800  hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80 ">
            <h2 className="text-xl font-bold text-gray-300">Frontend</h2>
            <div className='grid grid-cols-3 gap-6 mt-4 place-items-center'>
            <FaReact className="text-6xl text-blue-500" />
            <RiTailwindCssFill className="text-6xl text-blue-800" />
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" class="css-pgi4ag"><path fill-rule="evenodd" clip-rule="evenodd" fill="#0073E6" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"></path></svg>
            <FaBootstrap className="text-6xl text-[#7952B3] font-bold"  />
            <FaHtml5 className="text-6xl text-orange-600" />
            <FaCss3Alt  className="text-6xl text-blue-600" />
            </div>
        </div>
        <div className="p-4 bg-gray-800  hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <h2 className="text-xl font-bold text-gray-300">Backend</h2>
           <div className='grid grid-cols-3 gap-6 mt-4 place-items-center'>
             <FaNodeJs className="text-6xl text-green-500" />
            <SiExpress className="text-6xl text-gray-300" />
            <SiMongodb className="text-6xl text-green-600" />
            <SiMysql className="text-6xl text-blue-700" />
           </div>
        </div>
        <div className="p-4 bg-gray-800  hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <h2 className="text-xl font-bold text-gray-300">Programming Languages</h2>
            <div className='grid grid-cols-3 gap-6 mt-4 place-items-center'>
            <IoLogoJavascript className="text-6xl text-yellow-400" />
            <FaPython className="text-6xl text-blue-500" />
            <div className='max-w-16'><img src="https://img.icons8.com/color/512/c-programming.png" alt="" /></div>
            </div>
        </div>
        <div className="p-4 bg-gray-800  hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80">
            <h2 className="text-xl font-bold text-gray-300">Tools & Platforms</h2>
            <div className='grid grid-cols-3 gap-6 mt-4 place-items-center'>
            <FaGitAlt className="text-6xl text-orange-600" />
            <FaGithub className="text-6xl text-white" />
            <SiPostman className="text-6xl text-orange-500" />
            <VscVscode className="text-6xl text-blue-500" />
            <IoLogoVercel className="text-6xl text-white" />
            <SiRender className="text-6xl text-purple-600" />
            <VscAzure className="text-6xl text-blue-400" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
