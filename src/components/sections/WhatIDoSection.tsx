
import { MotionDiv } from "../animation/MotionDiv";
import { Code, Briefcase, Star, Image, Mic } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <MotionDiv 
      className="card bg-muted hover:bg-muted/80 h-full"
      type="scale"
      delay={delay}
    >
      <div className="text-portfolio-purple mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-portfolio-purple-light">{description}</p>
    </MotionDiv>
  );
};

export const WhatIDoSection = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "AI Development",
      description: "Building intelligent applications using NLP, Machine Learning, and AI frameworks to solve complex problems.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Research & Development",
      description: "Exploring cutting-edge technologies and implementing solutions for real-world applications.",
    },
    {
      icon: <Star size={40} />,
      title: "Software Engineering",
      description: "Creating robust, scalable software solutions with clean code and best practices.",
    },
    {
      icon: <Image size={40} />,
      title: "Generative AI",
      description: "Developing generative AI models and applications for innovative business solutions.",
    },
  ];

  const publicSpeakingService = {
    icon: <Mic size={40} />,
    title: "Public Speaking & Mentoring",
    description: "I am passionate about fostering growth and innovation within the tech community. I actively share my knowledge by delivering engaging tech talks on cutting-edge topics such as AI, Machine Learning, and Generative AI. My goal is to demystify complex concepts and inspire others to explore the potential of these technologies. Additionally, I find great fulfillment in mentoring aspiring developers and students.",
  };

  return (
    <section id="services" className="section-padding bg-portfolio-black">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">What I Do</h2>
      </MotionDiv>

      <div className="max-w-4xl mx-auto mt-12">
        <MotionDiv
            className="bg-muted rounded-lg overflow-hidden hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500"
            type="scale"
            delay={0.2}
        >
            <div className="grid md:grid-cols-2 items-center">
                <div className="overflow-hidden h-full">
                    <img 
                        src="lovable-uploads/Public_Speaking.jpg" 
                        alt="Public Speaking" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6 self-center">
                    <div className="text-portfolio-purple mb-4">{publicSpeakingService.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{publicSpeakingService.title}</h3>
                    <p className="text-portfolio-purple-light">{publicSpeakingService.description}</p>
                </div>
            </div>
        </MotionDiv>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={0.2 * (index + 2)}
          />
        ))}
      </div>
    </section>
  );
};
