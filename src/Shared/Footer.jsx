import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router';
import logo from '../assets/file.svg'


const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer container mx-auto sm:footer-horizontal  text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <img src={logo} alt="" className='md:w-[60px]' />
                    <p className='text-base'>© {new Date().getFullYear()} -Sazid Ahamed Sifat All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to='https://github.com/SazidSifat' target='_blank' rel='noopener noreferrer'>
                        <div className='bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition'>
                            <FiGithub color='white' size={20} />
                        </div>
                    </Link>
                    <Link to='https://www.linkedin.com/in/sazidsifat/' target='_blank' rel='noopener noreferrer'>
                        <div className='bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition'>
                            <FaLinkedinIn color='white' size={20} />
                        </div>
                    </Link>
                    <Link to='https://x.com/SazidSifat14576' target='_blank' rel='noopener noreferrer'>
                        <div className='bg-gray-500 p-3 rounded hover:bg-gray-500/50 transition'>
                            <FaXTwitter color='white' size={20} />
                        </div>
                    </Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;