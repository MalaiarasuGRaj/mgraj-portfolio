
import { MotionDiv } from "../animation/MotionDiv";
import { GraduationCap, Cpu, Users, ExternalLink, ArrowRight, ThumbsUp } from "lucide-react";
import teachingSession from "@/image/my-images/DSC03749.jpg";
import necTalk from "@/image/my-images/bd6b38e0-3ef1-45ed-ab6c-e47479078922.jpg";
import qrSessionTalk from "@/image/my-images/image (1).png";
import selfRelianceTalk from "@/image/my-images/image (2).png";
import profileTalk from "@/image/my-images/image.png";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProgramCard = ({ icon, title, description, delay }: ProgramCardProps) => {
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
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed flex-grow">
        {description}
      </p>
    </MotionDiv>
  );
};

const programs = [
  {
    icon: <GraduationCap size={44} />,
    title: "Placement Mentoring",
    description: "One-to-one personalized career guidance and interview preparation specifically designed for college students aiming for top-tier placements.",
  },
  {
    icon: <Cpu size={44} />,
    title: "AI Fluency Mentoring",
    description: "Personalized coaching to help you become AI-fluent. Learn to leverage LLMs, prompt engineering, and AI tools to 10x your productivity.",
  },
  {
    icon: <Users size={44} />,
    title: "Corporate & College AI Training",
    description: "Bridging the AI skill gap through structured workshops and training programs tailored for educational institutions and corporate teams.",
  },
];

const audiences = [
  {
    icon: <GraduationCap size={32} />,
    title: "College Students",
    description: "Placement prep and interview coaching to land top-tier roles.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Working Professionals",
    description: "AI fluency coaching to work faster and stay ahead with AI tools.",
  },
  {
    icon: <Users size={32} />,
    title: "Institutions & Corporate Teams",
    description: "Structured workshops that bring an entire group up to speed on AI.",
  },
];

const galleryPhotos = [
  { src: necTalk, caption: "Speaking at National Engineering College" },
  { src: qrSessionTalk, caption: "Delivering a Tech Talk Session" },
  { src: selfRelianceTalk, caption: "Talk on Self-Reliance & Mindset" },
  { src: profileTalk, caption: "Engaging with the Audience" },
];

// Real testimonials/numbers go here once available — intentionally not rendered until then.
const testimonials: { quote: string; name: string; role: string }[] = [];

export const TrainingSection = () => {
  return (
    <section className="section-padding relative overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv type="fade" direction="up">
          <span className="block text-portfolio-purple font-medium mb-2 text-center">TEACH · MENTOR · INSPIRE</span>
          <h1 className="text-4xl md:text-6xl font-black text-white text-center mb-6">
            Training &amp; <span className="gradient-text">Mentoring</span>
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Helping students, professionals, and teams become AI-fluent through mentoring, workshops, and hands-on training.
          </p>
        </MotionDiv>

        {/* Featured: Public Speaking & Mentoring */}
        <MotionDiv
          className="card p-0 overflow-hidden group min-h-[360px] relative max-w-6xl mx-auto mb-8"
          type="scale"
          delay={0.1}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
          <img
            src={teachingSession}
            alt="Mentoring a group of students"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <div className="bg-portfolio-purple/20 backdrop-blur-md border border-portfolio-purple/30 w-fit p-3 rounded-2xl mb-6 shadow-lg">
              <ThumbsUp size={40} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Public Speaking &amp; Mentoring</h3>
            <p className="text-gray-300 leading-relaxed max-w-xl mb-8 text-sm md:text-base">
              I am passionate about fostering growth and innovation within the tech community. I actively share my knowledge by delivering engaging tech talks on cutting-edge topics such as AI, Machine Learning, and Generative AI. My goal is to demystify complex concepts and inspire others to explore the potential of these technologies. Additionally, I find great fulfillment in mentoring aspiring developers and students.
            </p>
            <a
              href="https://wa.me/918270484867"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all group/link w-fit hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span>Connect on WhatsApp</span>
              <ExternalLink size={18} className="transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </MotionDiv>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* Photo Gallery */}
        <MotionDiv type="fade" direction="up" className="max-w-6xl mx-auto mb-24">
          <h2 className="subheading text-center mb-2">Training in Action</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Real sessions with real students and institutions — a few moments from the room.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <MotionDiv
                key={photo.caption}
                type="scale"
                delay={index * 0.1}
                className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-portfolio-purple/50 aspect-[3/4] group transition-colors duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 shadow-[inset_0_-40px_50px_-15px_rgba(0,0,0,0.7)] group-hover:shadow-[inset_0_-20px_40px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500" />
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Who it's for */}
        <MotionDiv type="fade" direction="up" className="max-w-6xl mx-auto mb-24">
          <h2 className="subheading text-center mb-12">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <MotionDiv
                key={audience.title}
                type="fade"
                direction="up"
                delay={index * 0.1}
                className="flex flex-col items-center text-center gap-3 px-4"
              >
                <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple">
                  {audience.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{audience.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{audience.description}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {testimonials.length > 0 && (
          <MotionDiv type="fade" direction="up" className="max-w-6xl mx-auto mb-24">
            <h2 className="subheading text-center mb-12">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="card">
                  <p className="text-gray-300 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        )}

        {/* CTA */}
        <MotionDiv
          type="fade"
          direction="up"
          className="max-w-4xl mx-auto text-center card py-16 px-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to bring AI training to your team or classroom?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether it's a college workshop, a corporate training program, or one-to-one mentoring — let's talk.
          </p>
          <a
            href="https://wa.me/918270484867"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <span>Connect on WhatsApp</span>
            <ArrowRight size={18} />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};
