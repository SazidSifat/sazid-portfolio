import Project from "./Project";

const projects = [
  {
    image: "https://i.ibb.co/XZ48S4wq/Screenshot-2025-06-30-155140.png",
    title: "Historical Artifacts Tracker",
    description:
      "The Historical Artifacts Tracker is a full-stack MERN web application that lets users explore, add, and manage historical artifacts. Features include Firebase auth, JWT-secured routes, responsive UI, artifact likes, and personalized dashboards. Ideal for showcasing full-stack development and CRUD operations.",
    tech: ["React", "MongoDB", "Node.js", "Express", "JWT"],
    liveLink: "https://historical-artifacts-5b376.web.app",
    codeLink: "https://github.com/SazidSifat/antiques-artifacts-website-client",
    serverLink: "https://github.com/SazidSifat/antiques-artifacts-website-client",
  },
  {
    image: "https://i.ibb.co/LdKvkJ5j/Screenshot-2025-06-30-155801.png",
    title: "Freelance Task Marketplace",
    description:
      "Lancr is a MERN stack-based web application where users can post freelance tasks and freelancers can bid on them. It features secure authentication with Firebase, responsive design, task CRUD operations, and real-time updates",
    tech: ["React", "Firebase", "Tailwind", "Lottie", "Vercel"],
    liveLink: "https://freelance-task-8f223.web.app",
    codeLink: "https://github.com/SazidSifat/Lancr-freelanching-website-client",
    serverLink: "https://github.com/SazidSifat/Lancr-freelanching-website-server"
  },
  {
    image: "https://i.ibb.co/6cwNYRJ7/Screenshot-2025-06-30-160003.png",
    title: "Job-Tracking website",
    description:
      "JobTrack is a modern job-hunting platform that connects users with job opportunities across multiple companies. It offers an easy-to-use interface to browse companies, explore job listings, and apply directly. Built with React, Firebase, and Tailwind CSS, JobTrack features private routes, responsive design, dynamic routing.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://jobtrack-ae487.web.app/",
    codeLink: "https://github.com/SazidSifat/job-portal-with-react",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 container mx-auto px-6">

      <div className='flex flex-col sm:flex-row items-center gap-4 mb-8'>
        <p className='text-4xl font-bold text-primary whitespace-nowrap'>
          &#60; Projects / &#62;
        </p>
        <div className='flex-1 w-full h-[1px] border border-primary/50' />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cente mb-12">My Projects</h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Project project={project} key={index} id={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
