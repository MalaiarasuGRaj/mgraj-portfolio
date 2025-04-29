
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding relative">
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
          onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'})}
        >
          Let's Talk
        </MotionButton>
      </MotionDiv>
      
      <MotionDiv
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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

import { motion } from "framer-motion";
