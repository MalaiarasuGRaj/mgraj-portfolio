
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Services = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <ServicesSection />
            <FooterSection />
        </div>
    );
};

export default Services;
