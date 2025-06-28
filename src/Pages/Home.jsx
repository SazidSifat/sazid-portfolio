import React from 'react';
import Banner from '../Component/Banner';
import About from '../Component/About';
import topo from '../assets/topo.svg'
import Skills from '../Component/Skills';
import Education from '../Component/Education';

const Home = () => {
    return (
        <div>
            <div className='mt-3 py-6 min-h-screen bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]'>
                <div className='flex container mx-auto items-center justify-center h-full'>
                    <Banner />
                </div>
            </div>


            <div className={`bg-[url('${topo}')] bg-cover bg-center max-w-11/12 mx-auto rounded-2xl mt-6 `}>
                <div className='py-10 container mx-auto px-6 md:px-10   backdrop-blur-md space-y-6'>
                    <About />
                    <Skills />
                    <Education />
                </div>
            </div>
        </div>

    );
};

export default Home;