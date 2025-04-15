import { memo } from "react";
import Button from "./Button";
import { Github, Linkedin, Mail ,Instagram} from "lucide-react";

const Footer = () => (
    <footer className="py-7 relative z-10 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
                <div
                    className="animate-slideIn mb-8"
                    style={{ animationDelay: "0.2s" }}
                >
                    <Button
                        className="px-8 py-3 text-lg m-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300"
                    >
                        <a href="mailto:vladislavgucci@gmail.com" className="flex  items-center gap-2">
                            <Mail size={20} />
                            <span>Get in Touch</span>
                        </a>
                    </Button>
                </div>

                <p
                    className="text-lg text-slate-300 mb-6 animate-slideIn"
                    style={{ animationDelay: "0.4s" }}
                >
                    Crafting{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            stellar web experiences
          </span>{" "}
                    with passion and code.
                </p>

                <div
                    className="flex justify-center space-x-6 mb-8 animate-slideIn"
                    style={{ animationDelay: "0.6s" }}
                >
                    {[
                        { icon: Github, href: "https://github.com", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/vladyslav-hriazin-6b9774248/", label: "LinkedIn" },
                        {icon: Instagram, href: "https://www.instagram.com/rsteddd/", label: "Instagram" },
                        { icon: Mail, href: "mailto:vladislavgucci@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }, index) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-purple-400 transition-all duration-300 group"
                            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                        >
                            <Icon
                                size={28}
                                className="group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-transform duration-300 animate-slideIn"
                            />
                            <span className="sr-only">{label}</span>
                        </a>
                    ))}
                </div>

                <div
                    className="text-sm text-slate-400 animate-fadeIn"
                    style={{ animationDelay: "1.1s" }}
                >
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
);

export default memo(Footer);
