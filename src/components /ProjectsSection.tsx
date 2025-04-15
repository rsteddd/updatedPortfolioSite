import { memo, useState, useCallback } from "react";
import Button from "./Button";
import { Github, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { projects, Project } from "../data/data";

interface ProjectsSectionProps {
    projects?: Project[];
    projectsPerPage?: number;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
                                                             projects: propsProjects = projects,
                                                             projectsPerPage = 3,
                                                         }) => {
    const [currentProjectPage, setCurrentProjectPage] = useState(0);
    const totalPages = Math.ceil(propsProjects.length / projectsPerPage);

    const displayedProjects = propsProjects.slice(
        currentProjectPage * projectsPerPage,
        (currentProjectPage + 1) * projectsPerPage,
    );

    const nextPage = useCallback(() => {
        setCurrentProjectPage((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const prevPage = useCallback(() => {
        setCurrentProjectPage((prev) => (prev - 1 + totalPages) % totalPages);
    }, [totalPages]);

    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-pink-700/20 to-purple-900/20 blur-3xl animate-float-slow"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:translate-y-[-5px] group"
                        >
                            {/*<div className="relative overflow-hidden">*/}
                            {/*    <img*/}
                            {/*        src={project.image || "/placeholder.svg"}*/}
                            {/*        alt={project.title}*/}
                            {/*        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"*/}
                            {/*    />*/}
                            {/*    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>*/}
                            {/*</div>*/}
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                                <p className="text-slate-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={18} className="mr-1" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:text-purple-400 transition-colors"
                                    >
                                        <ExternalLink size={18} className="mr-1" />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 space-x-4">
                    <Button
                        onClick={prevPage}
                        variant="outline"
                        disabled={currentProjectPage === 0}
                        className="flex items-center"
                    >
                        <ChevronLeft size={16} className="mr-1" />
                        Previous
                    </Button>
                    <div className="flex items-center space-x-2">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                    currentProjectPage === idx
                                        ? "bg-purple-500 text-white"
                                        : "bg-slate-800/50 text-slate-300 hover:bg-purple-500/30"
                                }`}
                                onClick={() => setCurrentProjectPage(idx)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
                    <Button
                        onClick={nextPage}
                        variant="outline"
                        disabled={currentProjectPage === totalPages - 1}
                        className="flex items-center"
                    >
                        Next
                        <ChevronRight size={16} className="ml-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default memo(ProjectsSection);
