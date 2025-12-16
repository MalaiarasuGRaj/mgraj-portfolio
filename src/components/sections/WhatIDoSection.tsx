
import { MotionDiv } from "../animation/MotionDiv";
import { Code, Briefcase, Star, Image, Mic, ExternalLink } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <MotionDiv
      className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-portfolio-purple/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 group h-full"
      type="scale"
      delay={delay}
    >
      <div className="text-portfolio-purple transition-transform duration-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-portfolio-purple transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{description}</p>
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
    <section id="services" className="section-padding relative">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">What I Do</h2>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        {/* Item 1: Public Speaking (Big - Spans 2 rows) */}
        <MotionDiv
          className="md:row-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-portfolio-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 group min-h-[350px] md:min-h-[500px] relative"
          type="scale"
          delay={0.2}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-portfolio-black/60 to-portfolio-black/90 z-10" />
          <img
            src="lovable-uploads/Public_Speaking.jpg"
            alt="Public Speaking"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-8">

            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{publicSpeakingService.title}</h3>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">{publicSpeakingService.description}</p>
            <a
              href="https://topmate.io/mgraj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-portfolio-purple hover:text-white transition-colors group/link w-fit"
            >
              <span className="font-semibold">Book a Session</span>
              <ExternalLink size={18} className="transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </MotionDiv>

        {/* Item 2: AI Development */}
        <ServiceCard
          icon={services[0].icon}
          title={services[0].title}
          description={services[0].description}
          delay={0.3}
        />

        {/* Item 3: Analysis & Design (Research) */}
        <ServiceCard
          icon={services[1].icon}
          title={services[1].title}
          description={services[1].description}
          delay={0.4}
        />

        {/* Item 4: Software Engineering */}
        <ServiceCard
          icon={services[2].icon}
          title={services[2].title}
          description={services[2].description}
          delay={0.5}
        />

        {/* Item 5: Generative AI */}
        <ServiceCard
          icon={services[3].icon}
          title={services[3].title}
          description={services[3].description}
          delay={0.6}
        />
      </div>
    </section>
  );
};
