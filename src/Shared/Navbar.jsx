import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/file.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className='container mx-auto sticky top-3 z-50'>
            <nav className='p-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow flex items-center justify-between'>
                <div className='flex whitespace-nowrap items-center justify-center'>
                    <img src={logo} alt="" />
                    <h2 className='text-xl sm:text-3xl font-bold text-primary'>Sazid Ahamed</h2>
                </div>

                <div className='lg:hidden flex items-center gap-3'>
                    <button className='w-full hidden md:block py-3 px-6 bg-primary text-primary-content rounded-xl'>
                        Resume
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                <div className='hidden lg:flex items-center gap-6 font-bold'>
                    <a href='#banner' onClick={(e) => { e.preventDefault(); scrollToId("banner"); }}>Home</a>
                    <a href='#about' onClick={(e) => { e.preventDefault(); scrollToId("about"); }}>About</a>
                    <a href='#skills' onClick={(e) => { e.preventDefault(); scrollToId("skills"); }}>Skills</a>
                    <a href='#education' onClick={(e) => { e.preventDefault(); scrollToId("education"); }}>Education</a>
                    <a href='#projects' onClick={(e) => { e.preventDefault(); scrollToId("projects"); }}>Project</a>
                    <a href='#contact' onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Contact</a>
                    <button className='py-2 cursor-pointer  px-4 shadow bg-primary text-primary-content rounded-xl ml-4'>
                        Resume
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className='flex flex-col absolute w-full lg:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 space-y-4 text-center font-bold'>
                    <a href='#banner' onClick={() => setIsOpen(false)}>Home</a>
                    <a href='#about' onClick={() => setIsOpen(false)}>About</a>
                    <a href='#skills' onClick={() => setIsOpen(false)}>Skills</a>
                    <a href='#education' onClick={() => setIsOpen(false)}>Education</a>
                    <a href='#projects' onClick={() => setIsOpen(false)}>Project</a>
                    <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>
                    <button className='py-2 px-4 shadow bg-primary text-primary-content rounded-xl ml-4'>
                        Resume
                    </button>

                </div>
            )}
        </div>
    );
};

export default Navbar;
