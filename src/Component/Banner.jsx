import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-transparent   p-6 w-full lg:w-[70%] border border-white/20 shadow shadow-primary/80 mt-10 rounded-2xl backdrop-blur-md mx-auto'>
            <div className='flex flex-col gap-6 items-center justify-center min-h-[60vh] text-center'>
                {/* Profile Image */}
                <div className='rounded-full w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-accent flex items-center justify-center p-2'>
                    <img
                        src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                        alt="Profile"
                        className='rounded-full w-full h-full object-cover'
                    />
                </div>

                {/* Text Info */}
                <div className='space-y-2'>
                    <div className='space-y-2 px-2'>
                        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                            Hi, I'm <span className='text-primary'>Sazid</span>
                        </h1>
                        <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>
                            Passionate about <span className='text-primary/90 font-bold'><Typewriter loop words={["Development", "Technology"]} cursor /></span>
                        </p>
                    </div>

                    <p className='text-lg sm:text-xl md:text-2xl font-bold'>MERN Stack Developer.</p>
                </div>

                {/* Buttons and Socials */}
                <div className='w-full sm:w-[60%] md:w-[40%] lg:w-[30%] p-1 flex  sm:flex-row gap-4 items-center justify-center'>
                    <button className='w-full sm:flex-1 bg-primary hover:bg-primary/70 py-3 px-6 rounded-xl text-white font-semibold transition'>
                        Resume
                    </button>
                    <div className='flex gap-3'>
                        <Link to='https://github.com/SazidSifat' target='_blank' rel='noopener noreferrer'>
                            <div className='bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition'>
                                <FiGithub color='white' size={20} />
                            </div>
                        </Link>
                        <Link to='#' target='_blank' rel='noopener noreferrer'>
                            <div className='bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition'>
                                <FaLinkedinIn color='white' size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;