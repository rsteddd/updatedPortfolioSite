import { useEffect, useState, useCallback } from "react";
import Button from "./Button";

const HeroSection = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Frontend Developer";
    const me = "Motivated Frontend Developer with over 1 year of experience in building modern and responsive web applications. Proficient in React,\n" +
        "TypeScript, and JavaScript, with a strong focus on writing clean, scalable, and maintainable code. Looking to contribute to a\n" +
        "dynamic team and further enhance my skills in frontend development."

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const type = () => {
            if (index < fullText.length) {
                setTypedText(fullText.slice(0, index + 1));
                index++;
                setTimeout(type, 100);
            }
        };
        type();
    }, []);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <section className="py-24 md:py-32 relative ">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-700/20 to-blue-900/20 blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-700/20 to-purple-900/20 blur-3xl animate-float-medium"></div>

            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-fadeIn"
                >
                    {typedText}
                    <span className="animate-blink">|</span>
                </h1>
                <p
                    className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl animate-slideIn"
                    style={{ animationDelay: "0.5s" }}
                >
                    {me}
                </p>
                <div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slideIn"
                    style={{ animationDelay: "0.7s" }}
                >
                    <Button
                        onClick={() => scrollToSection("projects")}
                        className="hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => scrollToSection("experience")}
                        className="hover:shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                    >
                        My Experience
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
