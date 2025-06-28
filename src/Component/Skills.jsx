import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiFirebase,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMysql
} from 'react-icons/si';

const SkillItem = ({ icon, name, color }) => (
    <div className='flex flex-col items-center justify-center min-w-[100px] mx-4 px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow text-white'>
        <div style={{ color }}>{icon}</div>
        <p className='mt-2 text-sm font-medium'>{name}</p>
    </div>
);

const Skills = () => {
    const frontend = [
        { name: 'HTML', icon: <SiHtml5 size={24} />, color: '#E34F26' },
        { name: 'CSS', icon: <SiCss3 size={24} />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript size={24} />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact size={24} />, color: '#61DBFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: '#38BDF8' },
    ];

    const backend = [
        { name: 'Node.js', icon: <FaNodeJs size={24} />, color: '#3C873A' },
        { name: 'Express.js', icon: <SiExpress size={24} />, color: '#FFFFFF' },
        { name: 'Firebase Auth', icon: <SiFirebase size={24} />, color: '#FFCA28' },
    ];

    const tools = [
        { name: 'MongoDB', icon: <SiMongodb size={24} />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql size={24} />, color: '#00758F' },
        { name: 'Firebase DB', icon: <SiFirebase size={24} />, color: '#FFCA28' },
        { name: 'GitHub', icon: <FaGithub size={24} />, color: '#FFFFFF' },
    ];

    return (
        <div className='container mx-auto px-4 py-10 space-y-10'>
            {/* Section Title */}
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                <p className='text-4xl font-bold text-primary whitespace-nowrap'>&#60; Skills / &#62;</p>
                <div className='flex-1 h-[1px] border border-primary/50' />
            </div>

            {/* Marquee Sections */}
            <div>
                <h3 className='text-xl font-semibold text-primary mb-2'>&#60; Frontend / &#62;</h3>
                <Marquee speed={50} pauseOnHover gradient={false}>
                    {frontend.map((skill, i) => (
                        <SkillItem key={i} {...skill} />
                    ))}
                </Marquee>
            </div>

            <div>
                <h3 className='text-xl font-semibold text-primary mb-2'>&#60; Backend / &#62;</h3>
                <Marquee speed={50} pauseOnHover direction='right' gradient={false}>
                    {backend.map((skill, i) => (
                        <SkillItem key={i} {...skill} />
                    ))}
                </Marquee>
            </div>

            <div>
                <h3 className='text-xl font-semibold text-primary mb-2'>&#60; Database & Tools / &#62;</h3>
                <Marquee speed={50} pauseOnHover gradient={false}>
                    {tools.map((skill, i) => (
                        <SkillItem key={i} {...skill} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;
