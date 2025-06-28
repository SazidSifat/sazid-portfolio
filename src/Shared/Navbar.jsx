import { useState } from 'react';
import { NavLink } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='container mx-auto sticky top-3 z-50'>
            <nav className='p-4 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow flex items-center justify-between'>
                <div>
                    <h2 className='text-xl sm:text-3xl font-bold text-primary'>Sazid Ahamed</h2>
                </div>

                <div className='lg:hidden flex items-center gap-3'>
                    <button className='w-full py-3 px-6 bg-primary text-primary-content rounded-xl'>
                        Resume
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                <div className='hidden lg:flex items-center gap-6 font-bold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                    <NavLink to='/education'>Education</NavLink>
                    <NavLink to='/projects'>Project</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <button className='py-2 px-4 shadow bg-primary text-primary-content rounded-xl ml-4'>
                        Resume
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className='flex flex-col lg:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 space-y-4 text-center font-bold'>
                    <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to='/skills' onClick={() => setIsOpen(false)}>Skills</NavLink>
                    <NavLink to='/education' onClick={() => setIsOpen(false)}>Education</NavLink>
                    <NavLink to='/projects' onClick={() => setIsOpen(false)}>Project</NavLink>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
                    
                </div>
            )}
        </div>
    );
};

export default Navbar;
