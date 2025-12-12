import { ContactSection } from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Contact = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <ContactSection />
            <FooterSection />
        </div>
    );
};

export default Contact;
