import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    }, []);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl  border-purple-500/20 animate-slideDown">
            <div className="container mx-auto px-4 py-5 flex justify-center items-center relative">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center items-center space-x-4">
                    {["about", "skills", "projects", "experience"].map((section, index) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="relative px-5 py-2 text-slate-100 font-medium rounded-full bg-transparent border border-transparent hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 transition-all duration-300 group animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="relative z-10 capitalize">{section}</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 group-hover:animate-glow"></div>
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden absolute right-4 text-slate-100 hover:text-purple-400 transition-colors"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-slate-900/95 backdrop-blur-xl min-h-screen flex items-center justify-center animate-scaleIn">
                    <div className="flex flex-col space-y-6 px-4">
                        {["about", "skills", "projects", "experience"].map((section, index) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="px-6 py-3 text-xl text-slate-100 font-medium rounded-lg bg-transparent hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300 capitalize animate-fadeIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
