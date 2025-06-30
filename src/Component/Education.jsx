import React from 'react';


const educationData = [
    {
        degree: "BSc in Computer Science & Engineering",
        school: "Varendra University",
        year: "2022 - 2026 (Ongoing)",
        description: "Focused on software development, algorithms, and database systems.",
    },
    {
        degree: "Higher Secondary Certificate",
        school: "Naogaon Govt. College",
        year: "2018 - 2020",
        description: "Studied foundational subjects including physics, chemistry, mathematics, and computer basics.",
    },
];

const Education = () => {
  
    return (
        <div className="container mx-auto px-4 py-10" id="education">
           
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8" data-aos="fade-up">
                <p className="text-4xl font-bold text-primary whitespace-nowrap">&#60; Education /&#62;</p>
                <div className="flex-1 w-full h-[1px] border border-primary/50" />
            </div>

            
            <div className="space-y-8">
                {educationData.map(({ degree, school, year, description }, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} 
                    >
                        <h3 className="text-2xl font-semibold text-primary">{degree}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-300">{school}</p>
                        <p className="mt-1 text-sm text-gray-400 italic">{year}</p>
                        <p className="mt-4 text-gray-200 leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
