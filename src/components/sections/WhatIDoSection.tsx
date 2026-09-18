
import { Link } from "react-router-dom";
import { MotionDiv } from "../animation/MotionDiv";
import { Code, Briefcase, Star, Image, Mic, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard = ({ icon, title, description, delay, className }: ServiceCardProps) => {
  return (
    <MotionDiv
      className={`card group h-full flex flex-col justify-between overflow-hidden relative ${className || ''}`}
      type="scale"
      delay={delay}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-portfolio-purple/70 group-hover:text-portfolio-purple group-hover:scale-110 transition-all duration-500 mb-6 drop-shadow-md">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white/90 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed text-sm md:text-base">{description}</p>
      </div>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 auto-rows-auto">
        {/* Item 1: Public Speaking (Large Bento Box) */}
        <MotionDiv
          className="md:col-span-2 md:row-span-2 card p-0 overflow-hidden group min-h-[400px] relative"
          type="scale"
          delay={0.2}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <img
            src="/uploads/Public_Speaking.jpg"
            alt="Public Speaking"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <div className="bg-portfolio-purple/20 backdrop-blur-md border border-portfolio-purple/30 w-fit p-3 rounded-2xl mb-6 shadow-lg">
              {publicSpeakingService.icon}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{publicSpeakingService.title}</h3>
            <p className="text-gray-300 leading-relaxed max-w-xl mb-8 text-sm md:text-base">{publicSpeakingService.description}</p>
            <Link
              to="/training"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all group/link w-fit hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span>See Training Programs</span>
              <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </MotionDiv>

        {/* Item 2: AI Development */}
        <ServiceCard
          icon={services[0].icon}
          title={services[0].title}
          description={services[0].description}
          delay={0.3}
          className="md:col-span-1"
        />

        {/* Item 3: Analysis & Design (Research) */}
        <ServiceCard
          icon={services[1].icon}
          title={services[1].title}
          description={services[1].description}
          delay={0.4}
          className="md:col-span-1"
        />

        {/* Item 4: Generative AI (Wide Bento Box) */}
        <ServiceCard
          icon={services[3].icon}
          title={services[3].title}
          description={services[3].description}
          delay={0.5}
          className="md:col-span-2"
        />

        {/* Item 5: Software Engineering */}
        <ServiceCard
          icon={services[2].icon}
          title={services[2].title}
          description={services[2].description}
          delay={0.6}
          className="md:col-span-1"
        />
      </div>
    </section>
  );
};
