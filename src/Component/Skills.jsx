import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiCanva,
    SiBootstrap,
    SiJsonwebtokens,
    SiApachenetbeanside,
    SiHtml5,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiGit,
    SiCss3,
    SiMysql
} from 'react-icons/si';
import SkillItem from './SkillItem';


const Skills = () => {
   
    const frontend = [
        { name: 'HTML', icon: <SiHtml5 size={24} />, color: '#E34F26' },
        { name: 'CSS', icon: <SiCss3 size={24} />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript size={24} />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact size={24} />, color: '#61DBFB' },
        { name: 'Next.js', icon: <SiNextdotjs size={24} />, color: '#000000' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: '#38BDF8' },
        { name: 'Bootstrap', icon: <SiBootstrap size={24} />, color: '#7952B3' },
        { name: 'Figma', icon: <SiFigma size={24} />, color: '#F24E1E' },
        { name: 'Canva', icon: <SiCanva size={24} />, color: '#00C4CC' },
    ];

    const backend = [
        { name: 'Node.js', icon: <FaNodeJs size={24} />, color: '#3C873A' },
        { name: 'Express.js', icon: <SiExpress size={24} />, color: '#FFFFFF' },
        { name: 'Firebase', icon: <SiFirebase size={24} />, color: '#FFCA28' },
        { name: 'JWT Auth', icon: <SiJsonwebtokens size={24} />, color: '#000000' },
        { name: 'REST API', icon: <SiApachenetbeanside size={24} />, color: '#6C6C6C' },
    ];

    const tools = [
        { name: 'MongoDB', icon: <SiMongodb size={24} />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql size={24} />, color: '#00758F' },
        { name: 'Firebase DB', icon: <SiFirebase size={24} />, color: '#FFCA28' },
        { name: 'GitHub', icon: <FaGithub size={24} />, color: '#FFFFFF' },
        { name: 'Git', icon: <SiGit size={24} />, color: '#F05032' },
        { name: 'Vercel', icon: <SiVercel size={24} />, color: '#000000' },
        { name: 'Netlify', icon: <SiNetlify size={24} />, color: '#00C7B7' },
    ];

    return (
        <div className='container mx-auto px-4 py-10 space-y-10' id='skills'>
          
            <div
                className='flex flex-col sm:flex-row items-center gap-4'
                data-aos='fade-up'
            >
                <p className='text-4xl font-bold text-primary whitespace-nowrap'>
                    &#60; Skills / &#62;
                </p>
                <div className='flex-1 w-full h-[1px] border border-primary/50' />
            </div>

           
            <div className='backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md space-y-8'>
              
                <div data-aos='fade-up'>
                    <h3 className='text-xl font-semibold text-primary mb-2'>Frontend</h3>
                    <Marquee speed={50} pauseOnHover gradient={false}>
                        {frontend.map((skill, i) => (
                            <SkillItem key={i} {...skill} />
                        ))}
                    </Marquee>
                </div>

                
                <div data-aos='fade-up' data-aos-delay="100">
                    <h3 className='text-xl font-semibold text-primary mb-2'>Backend</h3>
                    <Marquee speed={50} pauseOnHover direction='right' gradient={false}>
                        {backend.map((skill, i) => (
                            <SkillItem key={i} {...skill} />
                        ))}
                    </Marquee>
                </div>

                <div data-aos='fade-up' data-aos-delay="200">
                    <h3 className='text-xl font-semibold text-primary mb-2'>Database & Tools</h3>
                    <Marquee speed={50} pauseOnHover gradient={false}>
                        {tools.map((skill, i) => (
                            <SkillItem key={i} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Skills;
