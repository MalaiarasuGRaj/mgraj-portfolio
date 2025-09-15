
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <MotionDiv
          className="text-center"
          type="fade"
          direction="up"
          delay={0.2}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Hi, I'm Malaiarasu G
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-purple-light max-w-2xl mx-auto mb-8">
            Building skills, taking initiative, and learning by doing.
          </p>
          <MotionButton
            className="bg-portfolio-purple text-white hover:bg-portfolio-purple-dark"
            onClick={() => window.open("https://www.linkedin.com/in/malaiarasu-g-raj-38b695252/", "_blank")}
          >
            Let's Connect
          </MotionButton>
        </MotionDiv>
        <MotionDiv
          type="fade"
          direction="up"
          delay={0.4}
        >
          <img
            src="/lovable-uploads/MGRaj.jpg"
            alt="MGRaj"
            className="w-64 h-72 md:w-80 md:h-96 rounded-lg object-cover border-4 border-portfolio-purple transition-transform hover:scale-105"
          />
        </MotionDiv>
      </div>
      <MotionDiv
        className="absolute bottom-10 w-full flex justify-center"
        delay={1}
        type="fade"
      >
        <a href="#about" className="flex flex-col items-center text-portfolio-purple-light hover:text-portfolio-purple transition-colors">
          <span className="mb-2">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </a>
      </MotionDiv>
    </section>
  );
};
