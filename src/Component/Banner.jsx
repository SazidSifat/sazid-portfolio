import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Banner = () => {

    return (
        <div
            className="bg-transparent p-6 w-full lg:w-[70%] border border-white/20 shadow shadow-primary/80 my-10 rounded-2xl backdrop-blur-md mx-auto"
            data-aos="fade-up"
        >
            <div className="flex flex-col gap-6 items-center justify-center min-h-[60vh] text-center">
                <div
                    className="rounded-full w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-accent flex items-center justify-center p-2"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <img
                        src="https://i.ibb.co/rRnqyHNz/IMG-20231013-135627.jpg"
                        alt="Profile of Sazid Ahamed Sifat"
                        className="rounded-full w-full h-full object-cover object-center"
                    />
                </div>

             
                <div className="space-y-2 px-2" data-aos="fade-right" data-aos-delay="400">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Hi, I'm <span className="text-primary">Sazid</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold">MERN Stack Developer.</p>
                    <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
                        Passionate about{' '}
                        <span className="text-primary/90 font-bold">
                            <Typewriter loop words={['Development', 'Technology']} cursor />
                        </span>
                    </p>
                </div>

                <div
                    className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] p-1 flex sm:flex-row gap-4 items-center justify-center"
                    data-aos="fade-left"
                    data-aos-delay="600"
                >
                    <a
                        href="/path/to/your_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="w-full sm:flex-1 bg-primary hover:bg-primary/70 py-3 px-6 rounded-xl text-white font-semibold text-center transition"
                    >
                        Resume
                    </a>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/SazidSifat"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition"
                        >
                            <FiGithub color="white" size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sazidsifat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition"
                        >
                            <FaLinkedinIn color="white" size={20} />
                        </a>
                        <a
                            href="https://x.com/SazidSifat14576"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X Twitter Profile"
                            className="bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition"
                        >
                            <FaTwitter color="white" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
