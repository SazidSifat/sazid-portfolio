import React from 'react';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { VscServer } from "react-icons/vsc";
import { techColors } from '../colors/color';

import { motion } from 'motion/react';



const Project = ({ project, id }) => {
    console.log(id)
    return (
        <div
            data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
            className={`flex flex-col md:flex-row items-center justify-center border border-base-300 p-6 rounded-2xl gap-6 ${id ? "md:flex-row-reverse" : ""
                }`}
        >


            <div className="flex items-center justify-center w-full md:w-1/2">
                <motion.img initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.07 }} src={project.image} alt={project.title} className=" w-[90%]  md:w-[90%] rounded-lg shadow" />
            </div>

            
            <div className="w-full md:w-1/2 rounded-2xl p-6 bg-base-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-base-content mb-2">{project.title}</h3>
                <p className="text-base-content/80 mb-4">{project.description}</p>

              
                <div className="flex flex-wrap gap-2 mb-6">
                    {
                        project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className={`text-sm px-2 py-1 rounded-lg ${techColors[tech] || techColors.default
                                    } `}
                            >
                                {tech}
                            </span>
                        ))
                    }

                </div>


                <div className="flex flex-wrap gap-3">
                    <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2.5 px-6 bg-primary text-primary-content font-medium rounded-xl hover:bg-primary/60 shadow transition "
                    >
                        <FiExternalLink size={18} />
                        Live
                    </a>
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2.5 px-6 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-700 shadow transition"
                    >
                        <FaGithub size={18} />
                        GitHub
                    </a>
                    <a
                        href={project.serverLink || project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2.5 px-6 bg-accent/60 text-black font-medium rounded-xl hover:brightness-110 shadow transition"
                    >
                        <VscServer size={18} />
                        Server
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;