import { memo } from "react";
import { skills, Skill } from "../data/data";

interface SkillsSectionProps {
    skills?: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills: propsSkills = skills }) => (
    <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                My Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {propsSkills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="inline-block px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-slate-200 border border-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 animate-floatUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default memo(SkillsSection);
