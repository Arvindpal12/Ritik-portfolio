import React from 'react';
import avtar from "../../assets/avtar.png"
import { FaCss3, FaGithub,FaFigma,FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { UserIcon } from '@heroicons/react/24/solid'
import { FaFileExcel, FaFileWord } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import { FaWordpress, FaPhp } from "react-icons/fa";

// Removed import of SiMicrosoftexcel because it does not exist in react-icons/si package
// import { FaGoogle } from "react-icons/fa";

// import { RiNetflixFill } from "@remixicon/react";
// import { FaAmazon } from "react-icons/fa";


const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
      <div className='flex flex-wrap item-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-20 py-10'>
         <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaFileWord color="#2B579A" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaFileExcel color="#217346" size={50} />
          </span>
           <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaWordpress color="#00749C" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaCss3 color="#1572b6" size={50} />
          </span>
           <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaJs color="#F7DF1E" size={50} />
          </span>
           <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaFigma color="#F24E1E" size={50} />
          </span>
           
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className='p-3 bg-zinc-950 flex item-center rounded-2xl transition-transform duration-200 ease-in-out hover:scale-125'>
            <SiTailwindcss color="#3b82f6" size={50} />
          </span>
          
         
         
        </div>
        <div >
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center '>
            {/* <FaGoogle color='#4285FA' size={50} /> */}
            <div className=' flex flex-wrap group [perspective:1000px] w-100 h-100' >
              <img className='w-100 h-auto transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]' src={avtar} alt="" />
            </div>
            <span className='text-white'>
              <div className='pr-4'>
                <h2 className='leading-tight text-center text-lg md:text-xl'>Qualification</h2>
                <p className='text-sm leading-tight font-thin'>
                   ADCA  : Advance Diploma in Computer Application
                </p>
                <ul className='text-sm p-2'>
                <li>1.  12th from HBSE Board :- G.M.Sr.Sec.School</li>
                  <li>2.  Graduatetion prasentage are (70%)
                  </li>
                </ul>
              </div>
            </span>
          </div>
          {/*<div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-200 ease-in-out hover:scale-125'>
            <RiNetflixFill color='#E50914' size={50} />
            <span className='text-white'>
              <h2 className='leading-tight'>Softwere Engineer,Google</h2>
              <p className='text-sm leading-tight font-thin'>
                Sept 2023 - Present
              </p>
              <ul className='text-sm p-2'>
                <li>work as softwere devloper</li>
                <li>work as SDE devloper</li>
              </ul>
            </span>
          </div>
          <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center transition-transform duration-200 ease-in-out hover:scale-125'>
            <FaAmazon color='#FF9900' size={50} />
            <span className='text-white'>
              <h2 className='leading-tight'>Softwere Engineer,Google</h2>
              <p className='text-sm leading-tight font-thin'>
                Sept 2023 - Present
              </p>
              <ul className='text-sm p-2'>
                <li>work as softwere devloper</li>
                <li>work as SDE devloper</li>
              </ul>
            </span>
          </div>
        </div> */}
          {/* <div>
            <div className=' flex flex-wrap group [perspective:1000px] w-100 h-100' >
              <img className='w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]' src={avtar} alt="" />
            </div>

          </div> */}


        </div>
      </div >
    </div>
  )
}


export default Skills
