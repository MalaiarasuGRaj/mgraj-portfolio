import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Projects = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <ProjectsSection />
            <FooterSection />
        </div>
    );
};

export default Projects;
