
import { MotionDiv } from "../animation/MotionDiv";
import { BadgeCheck, ExternalLink } from "lucide-react";

export const CertificationsSection = () => {
    const certifications = [
        {
            name: "OCI Generative AI Professional",
            issuer: "Oracle University",
            year: "2024",
            color: "border-red-500/20 text-red-400"
        },
        {
            name: "OCI AI Foundations Associate",
            issuer: "Oracle University",
            year: "2025",
            color: "border-red-500/20 text-red-400"
        },
        {
            name: "Google Data Analytics Professional",
            issuer: "Google / Coursera",
            year: "2023",
            color: "border-blue-500/20 text-blue-400"
        },
        {
            name: "Agile Project Management",
            issuer: "HP Life",
            year: "2024",
            color: "border-green-500/20 text-green-400"
        }
    ];

    return (
        <section id="certifications" className="section-padding bg-portfolio-black/30">

            <MotionDiv type="fade" direction="up">
                <h2 className="heading text-center">Certifications</h2>
            </MotionDiv>

            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 mt-10">
                {certifications.map((cert, index) => (
                    <MotionDiv
                        key={index}
                        type="fade"
                        delay={index * 0.1}
                        direction="up"
                        className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-sm border ${cert.color} hover:bg-white/10 transition-colors cursor-default`}
                    >
                        <BadgeCheck className="w-5 h-5" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-white">{cert.name}</span>
                            <span className="text-xs text-gray-400">{cert.issuer} • {cert.year}</span>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </section>
    );
};
