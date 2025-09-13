import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import avtar3 from "../../assets/avtar3.webp"



const About = () => {
    return (
        <div id='About' className='text-white md:flex overflow-hidden item-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div><h2 className='text-2xl md:text-4xl font-bold text-left'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row'>
                    <img className='md:h-80 transition-transform duration-700 ease-in-out hover:scale-125' src={avtar3} alt="About img" />
                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Data Entry Specialist</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                   I provide professional data entry services in Excel with 100% accuracy and efficiency. From data cleaning and formatting to reports and spreadsheets, I help businesses save time and stay organized. My focus is on delivering quick, error-free, and well-structured data that supports smooth business operations.

                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>WordPress Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                I specialize in WordPress customization, theme development, plugin integration, and website optimization to deliver a smooth user experience and professional online presence. My goal is to help businesses and individuals build websites that are both visually appealing and highly functional.

                                </p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className="mt-1" />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>website related knowledge</h1>
                                <p className='text-sm md:text-md leading-tight'>
                                  Along with development services, I also provide guidance and knowledge about websites and WordPress. From understanding how websites work to learning WordPress features, plugins, and customization, I help individuals and businesses gain the right knowledge to manage and grow their online presence with confidence.

                                </p>
                            </span>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default About