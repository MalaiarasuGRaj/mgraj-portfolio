
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
            I’m an AI enthusiast driven by innovation and the future of technology. With a strong interest in long-term investing, I enjoy exploring ideas that create lasting impact. Passionate about public speaking and mentoring, I strive to inspire and guide the next generation of changemakers.
            <span className="block font-handwriting text-3xl mt-4 text-right text-portfolio-purple">- Malaiarasu</span>
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
                <div className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-portfolio-purple/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-2">
                    <Calendar size={18} />
                    <span>October 2024 - Present</span>
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
                    addressing real-world business problems. Worked across the development lifecycle, including implementing features and verifying functionality through systematic testing workflows.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-portfolio-purple-light bg-portfolio-black"></div>
                <div className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-portfolio-purple/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
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
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
