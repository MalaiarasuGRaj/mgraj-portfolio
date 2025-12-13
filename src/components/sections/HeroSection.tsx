import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { ArrowDown, ArrowRight, Sparkles, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background Gradients for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-portfolio-purple/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">

          {/* Status Badge */}
          <MotionDiv
            type="fade"
            direction="down"
            delay={0.1}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-purple/10 border border-portfolio-purple/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-portfolio-purple-lighter">Available for AI & Product roles</span>
          </MotionDiv>

          {/* Main Title */}
          <MotionDiv type="fade" direction="up" delay={0.2} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-purple-light/80 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">Malaiarasu</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple-light to-portfolio-purple">
                G.
              </span>
            </h1>
          </MotionDiv>

          {/* Tagline */}
          <MotionDiv type="fade" direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Transforming ideas into <span className="text-white font-medium">intelligent products</span> with AI.
              I specialize in building scalable, AI-driven solutions and seamless user experiences.
            </p>
          </MotionDiv>

          {/* Buttons */}
          <MotionDiv type="fade" direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <MotionButton
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 overflow-hidden"
              onClick={() => window.open("https://www.linkedin.com/in/malaiarasu-g-raj-38b695252/", "_blank")}
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </MotionButton>

            <a href="projects" className="block w-full sm:w-auto">
              <MotionButton
                className="w-full px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-portfolio-purple-lighter" />
                <span>View My Work</span>
              </MotionButton>
            </a>
          </MotionDiv>
        </div>

        {/* Right Column: Visual */}
        <MotionDiv
          type="fade"
          direction="left"
          delay={0.5}
          className="relative flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/30 to-blue-500/30 rounded-full blur-[40px] animate-pulse" />

            {/* Image Container with organic shape or glass effect */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-2"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-portfolio-purple/20 mix-blend-overlay z-10"></div>
                <img
                  src="/lovable-uploads/MGRaj.jpg"
                  alt="Malaiarasu G"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Floating Badges/Decorations */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-10 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-purple-500/20">
                  <Brain className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs font-mono text-white/80">AI Engineer</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 bottom-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-blue-500/20">
                  <Rocket className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-mono text-white/80">Product Dev</span>
              </div>
            </motion.div>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll Down Indicator */}
      <MotionDiv
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        delay={1.5}
        type="fade"
      >
        <a href="#services" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-portfolio-purple-lighter transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 border border-white/10 rounded-full group-hover:border-portfolio-purple/50 transition-colors"
          >
            <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-portfolio-purple-light" />
          </motion.div>
        </a>
      </MotionDiv>
    </section>
  );
};
