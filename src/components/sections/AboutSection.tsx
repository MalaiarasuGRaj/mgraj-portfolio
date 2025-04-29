
import { MotionDiv } from "../animation/MotionDiv";
import { Calendar, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">About Me</h2>
      </MotionDiv>

      <div className="max-w-4xl mx-auto">
        <MotionDiv 
          className="mb-12 text-lg text-portfolio-purple-light"
          type="fade"
          direction="up"
          delay={0.2}
        >
          <p className="mb-6">
            I am a dedicated AI and software engineering professional with a passion for solving real-world problems through technology.
            Currently focused on gaining hands-on experience through internships and projects in AI, 
            machine learning, and software development.
          </p>
        </MotionDiv>

        <div className="space-y-12">
          <MotionDiv 
            type="fade"
            delay={0.4}
          >
            <h3 className="subheading">My Journey</h3>
            <div className="relative border-l-2 border-portfolio-purple-light pl-8 space-y-12">
              {/* Experience 1 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-portfolio-purple-light bg-portfolio-black"></div>
                <div className="card bg-muted hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-2">
                    <Calendar size={18} />
                    <span>May 2024 - August 2024</span>
                  </div>
                  <h4 className="text-xl font-semibold text-portfolio-purple mb-1">
                    Research Intern
                  </h4>
                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-4">
                    <Briefcase size={18} />
                    <span>Indian Institute of Information Technology, Kottayam</span>
                  </div>
                  <p className="text-portfolio-purple-light">
                    Developed an Automated Question and Answer Generation System using various 
                    Natural Language Processing (NLP) techniques as part of an AI-powered hiring 
                    solution for a multinational company (MNC).
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-portfolio-purple-light bg-portfolio-black"></div>
                <div className="card bg-muted hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-2">
                    <Calendar size={18} />
                    <span>October 2023 - March 2024</span>
                  </div>
                  <h4 className="text-xl font-semibold text-portfolio-purple mb-1">
                    Generative AI Intern
                  </h4>
                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-4">
                    <Briefcase size={18} />
                    <span>DigitalT3 Software Solutions Pvt. Ltd., USA</span>
                  </div>
                  <p className="text-portfolio-purple-light">
                    Contributed to the development of Generative AI-based Proof of Concepts (PoCs) 
                    addressing real-world business problems. Gained hands-on experience in software 
                    development, as well as manual and automated testing, throughout the internship.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
