import React, { useEffect } from 'react';
import Banner from '../Component/Banner';
import About from '../Component/About';
import topo from '../assets/topo.svg'
import Skills from '../Component/Skills';
import Education from '../Component/Education';
import Contact from '../Component/Contact';
import Projects from '../Component/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <div>
            <div className='mt-3 py-6  bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]'>
                <div className='flex container mx-auto items-center px-4 lg:px-0 justify-center'>
                    <section id='banner' className='w-full py-6' >
                        <Banner />
                    </section>
                </div>
            </div>


            <div className={`bg-[url('${topo}')] bg-cover bg-center  mx-auto rounded-2xl mt-6 `}>
                <div className='py-10    backdrop-blur-md space-y-6'>
                    <section id='about ' className='bg-base-200' >
                        <About />
                    </section>
                    <section id='skills' >
                        <Skills />
                    </section>
                    <section id='education' >
                        <Education />
                    </section>
                    <section id='projects' >
                        <Projects />
                    </section>
                    <section id='contact'>
                        <Contact />
                    </section>
                </div>
            </div>
        </div>

    );
};

export default Home;