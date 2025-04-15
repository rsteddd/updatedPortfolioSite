import { memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutSection = () => (
    <section id="about" className="py-20 relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-700/10 to-purple-900/10 blur-3xl animate-float-medium"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-pink-700/10 to-purple-900/10 blur-3xl animate-float-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fadeIn">
                About Me
            </h2>

            <div className="max-w-2xl mx-auto text-center">
                <p
                    className="text-lg text-slate-300 mb-6 animate-slideIn"
                    style={{ animationDelay: "0.2s" }}
                >
                    Hey there! I’m a passionate{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Frontend Developer
          </span>{" "}
                    who loves crafting responsive and interactive web apps.
                </p>
                <p
                    className="text-lg text-slate-300 mb-6 animate-slideIn"
                    style={{ animationDelay: "0.4s" }}
                >
                    My journey kicked off with HTML, CSS, and JavaScript, and now I’m deep into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            React
          </span>{" "}
                    and modern frameworks, building clean and user-friendly interfaces.
                </p>
                <p
                    className="text-lg text-slate-300 mb-8 animate-slideIn"
                    style={{ animationDelay: "0.6s" }}
                >
                    I’m always learning, chasing the latest trends, and aiming to make the web a more{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
            beautiful place
          </span>
                    .
                </p>

                <div className="flex justify-center space-x-6">
                    {[
                        { icon: Github, href: "https://github.com/rsteddd?tab=overview&from=2024-01-01&to=2024-01-31", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/vladyslav-hriazin-6b9774248/", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:vladislavgucci@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }, index) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-purple-400 transition-all duration-300 group animate-slideIn"
                            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                        >
                            <Icon
                                size={28}
                                className="group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-transform duration-300"
                            />
                            <span className="sr-only">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default memo(AboutSection);
