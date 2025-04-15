import { memo } from "react";
import { experiences, Experience } from "../data/data";
import { Briefcase } from "lucide-react";

interface ExperienceSectionProps {
    experiences?: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences: propsExperiences = experiences }) => (
    <section id="experience" className="py-20 relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-700/10 to-purple-900/10 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Work Experience
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full hidden md:block"></div>

                {propsExperiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center mb-12 animate-slideIn ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Card */}
                        <div
                            className={`w-full md:w-5/12 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 ${
                                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                            }`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3">
                                    <Briefcase size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                                    <h4 className="text-md text-purple-400">{exp.company}</h4>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 mb-4">{exp.description}</p>
                            <div className="text-sm text-slate-400 mb-4">{exp.period}</div>
                            <div className="text-sm">
                                {/*<h5 className="text-purple-400 font-medium mb-2">Key Achievements:</h5>*/}
                                {/*<ul className="list-disc pl-5 text-slate-300">*/}
                                {/*    {exp.achievements.map((achievement, idx) => (*/}
                                {/*        <li key={idx}>{achievement}</li>*/}
                                {/*    ))}*/}
                                {/*</ul>*/}
                            </div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="hidden md:flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-slate-900 absolute left-1/2 -translate-x-1/2">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>

                        {/* Spacer for alignment */}
                        <div className="hidden md:block w-5/12"></div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default memo(ExperienceSection);
