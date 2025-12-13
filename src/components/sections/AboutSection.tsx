import { MotionDiv } from "../animation/MotionDiv";
import { Calendar, Briefcase, Trophy, Award, Crown, Medal, BadgeCheck } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    {
      title: "Top Scorer",
      event: "Google Gen AI Exchange Hackathon",
      description: "Secured top scores in Weekly Quiz Challenges 4, 5, and 6, demonstrating expertise in Generative AI concepts.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      delay: 0.1
    },
    {
      title: "Winner",
      event: "Hybrid Hack - SRM Institute",
      description: "Emerging victorious in a competitive hackathon at SRM Institute of Science and Technology.",
      icon: <Crown className="w-6 h-6 text-portfolio-purple" />,
      delay: 0.2
    },
    {
      title: "Winner",
      event: "DigitalT3 Hackathon",
      description: "Secured a prestigious internship offer by winning the DigitalT3 Hackathon solution challenge.",
      icon: <Award className="w-6 h-6 text-blue-400" />,
      delay: 0.3
    },
    {
      title: "Winner",
      event: "Google Hunt",
      description: "Won the national level technical hunt competition at National Engineering College.",
      icon: <Medal className="w-6 h-6 text-emerald-400" />,
      delay: 0.4
    }
  ];

  const certifications = [
    {
      name: "OCI Generative AI Professional",
      issuer: "Oracle University",
      year: "2024",
      color: "border-red-500/20 text-red-400"
    },
    {
      name: "OCI AI Foundations Associate",
      issuer: "Oracle University",
      year: "2025",
      color: "border-red-500/20 text-red-400"
    },
    {
      name: "Google Data Analytics Professional",
      issuer: "Google / Coursera",
      year: "2023",
      color: "border-blue-500/20 text-blue-400"
    },
    {
      name: "Agile Project Management",
      issuer: "HP Life",
      year: "2024",
      color: "border-green-500/20 text-green-400"
    }
  ];

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
            <div className="relative space-y-12 mb-16">
              {/* Timeline Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-portfolio-purple via-purple-400 to-transparent opacity-30"></div>

              {/* Experience 1 */}
              <MotionDiv
                className="relative pl-8 md:pl-12"
                type="fade"
                delay={0.1}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] top-2 h-4 w-4 rounded-full bg-portfolio-purple shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 ring-4 ring-black/50"></div>

                <div className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-portfolio-purple transition-colors">
                      Generative AI Intern
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple-light text-xs font-medium border border-portfolio-purple/20">
                      <Calendar size={12} />
                      Oct 2024 - Present
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-4 text-sm font-medium">
                    <Briefcase size={16} className="text-portfolio-purple" />
                    <span>DigitalT3 Software Solutions Pvt. Ltd., USA</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    Contributed to the development of Generative AI-based Proof of Concepts (PoCs)
                    addressing real-world business problems. Worked across the development lifecycle, including implementing features and verifying functionality through systematic testing workflows.
                  </p>
                </div>
              </MotionDiv>

              {/* Experience 2 */}
              <MotionDiv
                className="relative pl-8 md:pl-12"
                type="fade"
                delay={0.2}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] top-2 h-4 w-4 rounded-full bg-portfolio-purple shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 ring-4 ring-black/50"></div>

                <div className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-portfolio-purple transition-colors">
                      Research Intern
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple-light text-xs font-medium border border-portfolio-purple/20">
                      <Calendar size={12} />
                      May 2024 - Aug 2024
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-portfolio-purple-light mb-4 text-sm font-medium">
                    <Briefcase size={16} className="text-portfolio-purple" />
                    <span>Indian Institute of Information Technology, Kottayam</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    Developed an Automated Question and Answer Generation System using various
                    Natural Language Processing (NLP) techniques as part of an AI-powered hiring
                    solution for a multinational company (MNC).
                  </p>
                </div>
              </MotionDiv>
            </div>

            {/* Divider */}
            <div className="border-t border-portfolio-purple/20 my-16"></div>

            {/* Achievements Section Integrated */}
            <div className="mb-16">
              <h3 className="subheading mb-8">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <MotionDiv
                    key={index}
                    type="scale"
                    delay={item.delay}
                    className="card bg-white/5 backdrop-blur-md border border-white/10 hover:border-portfolio-purple/50 p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="mb-4 p-3 bg-portfolio-black/40 rounded-full w-fit border border-white/5">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <span className="text-xs uppercase tracking-wider text-portfolio-purple mb-3 block">{item.event}</span>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-portfolio-purple/20 my-16"></div>

            {/* Certifications Section Integrated */}
            <div>
              <h3 className="subheading mb-8">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <MotionDiv
                    key={index}
                    type="fade"
                    delay={index * 0.1}
                    direction="up"
                    className={`group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border ${cert.color} hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      <BadgeCheck className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col h-full justify-between z-10 relative">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-white mb-2 pr-8 group-hover:text-portfolio-purple transition-colors">
                          {cert.name}
                        </h4>
                        <div className="h-0.5 w-12 bg-white/10 group-hover:bg-portfolio-purple/50 transition-colors mb-3"></div>
                        <p className="text-portfolio-purple-light text-sm font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <span className="text-xs font-mono text-gray-400 bg-black/20 px-2 py-1 rounded">
                          {cert.year}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                          Verified
                        </span>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
