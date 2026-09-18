
import { TrainingSection } from "@/components/sections/TrainingSection";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const Training = () => {
    return (
        <div className="bg-portfolio-black min-h-screen">
            <Navbar />
            <TrainingSection />
            <FooterSection />
        </div>
    );
};

export default Training;
