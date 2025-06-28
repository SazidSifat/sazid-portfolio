const educationData = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "Varendra University",
        year: "2012 - 2026 (Ongoing)",
        description: "Focused on software development, algorithms, and database systems.",
    },
];

const Education = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Section Title */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <p className="text-4xl font-bold text-primary whitespace-nowrap">&#60; Education / &#62;</p>
                <div className="flex-1 h-[1px] border border-primary/50" />
            </div>

            {/* Education List */}
            <div className="space-y-8">
                {educationData.map(({ degree, school, year, description }, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
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
