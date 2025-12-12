
import { MotionDiv } from "../animation/MotionDiv";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-5 bg-portfolio-black border-t border-portfolio-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 text-center md:text-left">
          {/* CTA & Brand */}
          <MotionDiv type="fade" direction="up">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to build something?</h3>
            <p className="text-portfolio-purple-light">Let's turn your ideas into reality.</p>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv
            type="fade"
            direction="up"
            delay={0.1}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link to="/" className="text-gray-400 hover:text-portfolio-purple transition-colors">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-portfolio-purple transition-colors">About</Link>
            <Link to="/projects" className="text-gray-400 hover:text-portfolio-purple transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-400 hover:text-portfolio-purple transition-colors">Contact</Link>
          </MotionDiv>

          {/* Social Icons */}
          <MotionDiv
            type="fade"
            direction="up"
            delay={0.2}
            className="flex gap-4 justify-center md:justify-end"
          >
            <a
              href="https://www.linkedin.com/in/mgraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-portfolio-purple/20 hover:text-portfolio-purple transition-all text-gray-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/malaiarasuGRaj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-portfolio-purple/20 hover:text-portfolio-purple transition-all text-gray-400"
            >
              <Github size={20} />
            </a>
          </MotionDiv>
        </div>

        <MotionDiv
          className="text-center text-portfolio-purple-light/60 text-sm border-t border-white/5 pt-8"
          type="fade"
          direction="up"
          delay={0.3}
        >
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Malaiarasu G Raj. All rights reserved.
          </p>
          <p className="italic">
            "Building the future, one line of code at a time."
          </p>
        </MotionDiv>
      </div>
    </footer>
  );
};
