
import { MotionDiv } from "../animation/MotionDiv";
import { Code, Briefcase, Star, Image } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <MotionDiv 
      className="card bg-muted hover:bg-muted/80"
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

  return (
    <section id="services" className="section-padding bg-portfolio-black">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">What I Do</h2>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={0.2 * (index + 1)}
          />
        ))}
      </div>
    </section>
  );
};
