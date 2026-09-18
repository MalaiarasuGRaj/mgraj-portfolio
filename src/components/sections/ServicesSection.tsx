
import { MotionDiv } from "../animation/MotionDiv";
import { Code, Sparkles, ExternalLink } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <MotionDiv
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-portfolio-purple/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group h-full flex flex-col"
      type="scale"
      delay={delay}
    >
      <div className="text-portfolio-purple mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-portfolio-purple transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      <a
        href="https://wa.me/918270484867"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-portfolio-purple hover:text-white transition-colors group/link w-fit font-semibold"
      >
        <span>Connect on WhatsApp</span>
        <ExternalLink size={18} className="transition-transform group-hover/link:translate-x-1" />
      </a>
    </MotionDiv>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles size={44} />,
      title: "AI Application Development",
      description: "Building intelligent, production-ready applications powered by LLMs, NLP, and generative AI — from prototype to deployment.",
    },
    {
      icon: <Code size={44} />,
      title: "Freelance Development",
      description: "End-to-end product and software development services. I build scalable, high-performance web applications and AI-integrated solutions.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv type="fade" direction="up">
          <span className="block text-portfolio-purple font-medium mb-2 text-center">HOW I CAN HELP</span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-center mb-6">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            AI application development and engineering services for teams building with AI.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
