import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Home = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <HeroSection />
            <WhatIDoSection />
            <FooterSection />
        </div>
    );
};

export default Home;
