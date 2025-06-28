import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto lg:px-4 py-10'>
            <div className='flex flex-col sm:flex-row items-center gap-4 mb-2 lg:mb-8'>
                <p className='text-5xl  font-black text-primary whitespace-nowrap'>&#60; About Me / &#62;</p>
                <div className='flex-1 h-[1px] border border-primary/50' />
            </div>

            <div className='shadow-lg '>
                <p className='text-lg sm:text-lg md:text-xl  text-gray-200 text-justify'>
                    Hello! I'm <span className='text-primary font-semibold '>Sazid Ahamed Sifat</span>, a passionate and dedicated <strong>MERN Stack Developer</strong> with a deep enthusiasm for creating fast, responsive, and user-friendly web applications. I specialize in building full-stack applications using <span className='text-primary font-semibold'>MongoDB, Express.js, React, and Node.js</span>. My development process always centers around clean code, great user experience, and efficient backend logic.</p>

                <p className='text-base sm:text-lg md:text-xl  hidden lg:block text-gray-200 mt-4 text-justify'>
                    I love learning new technologies, solving complex problems, and contributing to innovative projects. Whether it’s frontend interaction or backend architecture, I enjoy working across the stack to bring ideas to life.
                </p>
            </div>
        </div>

    );
};

export default About;