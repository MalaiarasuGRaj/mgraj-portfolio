
import { MotionDiv } from "../animation/MotionDiv";
import { Trophy, Award, Crown, Medal } from "lucide-react";

export const AchievementsSection = () => {
    const achievements = [
        {
            title: "Top Scorer",
            event: "Google Gen AI Exchange Hackathon",
            description: "Secured top scores in Weekly Quiz Challenges 4, 5, and 6, demonstrating expertise in Generative AI concepts.",
            icon: <Trophy className="w-6 h-6 text-yellow-500" />,
            delay: 0.1
        },
        {
            title: "Winner",
            event: "Hybrid Hack - SRM Institute",
            description: "Emerging victorious in a competitive hackathon at SRM Institute of Science and Technology.",
            icon: <Crown className="w-6 h-6 text-portfolio-purple" />,
            delay: 0.2
        },
        {
            title: "Winner",
            event: "DigitalT3 Hackathon",
            description: "Secured a prestigious internship offer by winning the DigitalT3 Hackathon solution challenge.",
            icon: <Award className="w-6 h-6 text-blue-400" />,
            delay: 0.3
        },
        {
            title: "Winner",
            event: "Google Hunt",
            description: "Won the national level technical hunt competition at National Engineering College.",
            icon: <Medal className="w-6 h-6 text-emerald-400" />,
            delay: 0.4
        }
    ];

    return (
        <section id="achievements" className="section-padding relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <MotionDiv type="fade" direction="up">
                <h2 className="heading text-center">Achievements</h2>
                <p className="subheading text-center mb-12">Recognition & Hackathon Wins</p>
            </MotionDiv>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((item, index) => (
                    <MotionDiv
                        key={index}
                        type="scale"
                        delay={item.delay}
                        className="card bg-white/5 backdrop-blur-md border border-white/10 hover:border-portfolio-purple/50 p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="mb-4 p-3 bg-portfolio-black/40 rounded-full w-fit border border-white/5">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <span className="text-xs uppercase tracking-wider text-portfolio-purple mb-3 block">{item.event}</span>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </MotionDiv>
                ))}
            </div>
        </section>
    );
};
