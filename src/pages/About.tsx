import { AboutSection } from "@/components/sections/AboutSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const About = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <AboutSection />
            <FooterSection />
        </div>
    );
};

export default About;
