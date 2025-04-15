import Footer from "./components /Footer.tsx";
import Header from "./components /Header.tsx"
import BackgroundCanvas from "./components /BackgroundCanvas.tsx";
import HeroSection from "./components /HeroSection.tsx";
import AboutSection from "./components /AboutSection.tsx";
import SkillsSection from "./components /SkillsSection.tsx";
import ProjectsSection from "./components /ProjectsSection.tsx";
import ExperienceSection from "./components /ExperienceSection.tsx";




const App = () => (
    <div className="min-h-screen flex flex-col relative text-white overflow-hidden">
        <BackgroundCanvas />
        <Header />
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
        </main>
        <Footer />
    </div>
);

export default App;
