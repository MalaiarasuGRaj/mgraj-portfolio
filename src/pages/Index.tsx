
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navbar } from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="bg-portfolio-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
