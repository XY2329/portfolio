import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id: 1,
        title: "DREAM",
        description: "This is a project for Imagine Hackathon.",
        image: "/projects/imagine_dream.png",
        gitUrl: "https://www.canva.com/design/DAFjeHG_f0E/VjeLv0DiLaG4B0-BWrm4jg/edit"

    },
    {
        id: 2,
        title: "ZUS",
        description: "This is a project for Samsung UI/UX Hackathon.",
        image: "/projects/samsung_zus.png",
        gitUrl: "https://www.canva.com/design/DAFlwHhxywQ/0ZiA9o7TNSMBSXKklBMF1w/edit"
    },
    {
        id: 3,
        title: "AgroTech",
        description: "This is a project.",
        image: "/projects/flutter_urban.png",
        gitUrl: "https://www.canva.com/design/DAFqpeByQWE/7uCvU45yB2FZRHYMCpL-gg/edit"
    },
    {
        id: 4,
        title: "TicketWave",
        description: "This is a project for ETHKL.",
        image: "/projects/eth_ticketwave.png",
        gitUrl: "https://www.canva.com/design/DAFxOOCgBK4/bsrtjD-eRy7GxXg5Yli1eA/view"
    }, 
];

const Projects = () => {
    return (
        <div>
            <div className='text-4xl font-semibold mb-8'>MyProject</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-row-2 gap-x-8 gap-y-4 h-full'>
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />
                )
                )}
            </div>
        </div>
    )    
}
export default Projects;