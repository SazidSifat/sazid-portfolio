import React    from 'react';
import AOS from 'aos';


const About = () => {
   
    return (
        <div id='about' className='container mx-auto px-4 py-10'>
            <div
                className='flex flex-col sm:flex-row items-center gap-4 mb-2 lg:mb-8'
                data-aos='fade-up'
            >
                <p className='text-4xl lg:text-5xl font-bold text-primary whitespace-nowrap'>
                    &#60; About Me / &#62;
                </p>
                <div className='flex-1 w-full h-[1px] border border-primary/50' />
            </div>

            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-6'>
                {/* Text */}
                <div
                    className='w-full lg:w-[70%] lg:px-6 text-justify lg:text-start'
                    data-aos='fade-right'
                >
                    <p className="text-lg">
                        Hi! I'm <span className="font-semibold text-primary">Sazid Ahamed Sifat</span>, a passionate and dedicated full-stack developer with a love for building clean, efficient, and user-friendly web applications. My programming journey started with curiosity during my early college days, and over the years, it has turned into a full-blown passion.
                    </p>
                    <p className="mt-6 text-lg">
                        I specialize in working with the <span className="font-medium text-primary">MERN stack</span> — MongoDB, Express.js, React, and Node.js — and I genuinely enjoy bringing ideas to life in the browser. From solving logical backend problems to designing beautiful frontends, I thrive in full-stack development.
                    </p>
                    <p className="mt-6 text-lg">
                        I believe that technology should not only work — it should feel great to use. That's why I pay close attention to both functionality and user experience. I'm always learning, improving, and challenging myself to grow as a developer and as a person.
                    </p>
                </div>

                <div
                    className='flex items-center justify-center p-6'
                    data-aos='fade-left'
                >
                    <img
                        src="https://i.ibb.co/zVJL5xCm/1621003111627k.jpg"
                        alt="Sazid Ahamed Sifat"
                        className='w-[60%] rounded-2xl border-3 border-accent'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
