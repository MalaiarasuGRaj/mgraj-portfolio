
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  demoLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Diffusion-LLM POC",
    description: "A proof-of-concept for a PDF summarizer with visual analysis capabilities, demonstrating the power of diffusion models and LLMs.",
    tags: ["GenAI", "Diffusion LLM (dLLM)", "Streamlit", "POC"],
    image: "lovable-uploads/Diffusion-LLM.png",
    githubLink: "https://github.com/MalaiarasuGRaj/dLLM-Mercury",
    liveLink: "https://diff-llm.streamlit.app",
  },
  {
    title: "Agile Copilot",
    description: "Built Agile Copilot, a full-stack app integrating Jira REST API for streamlined project management, bulk data handling, and issue management.",
    tags: ["Next.js", "React", "Server Actions", "Jira REST API"],
    image: "lovable-uploads/Agile-Copilot.png",
    githubLink: "https://github.com/MalaiarasuGRaj/jira-integration-firebase",
    liveLink: "https://agile-copilot.vercel.app",
  },
  {
    title: "MongoChat",
    description: "Database chat agent that enables natural language interaction with MongoDB databases.",
    tags: ["LLM", "Agentic AI", "MongoDB", "Flask"],
    githubLink: "https://github.com/MalaiarasuGRaj/MongoChat.git",
    demoLink: "https://drive.google.com/file/d/1GgoN224DRq37ljKpkCkU8iH3hAtk7s49/view?usp=drive_link",
    image: "lovable-uploads/MongoChat.png",
  },
  {
    title: "MarQ",
    description: "MarQ is an AI-powered marks analysis tool that offers subject-wise insights, student-wise reports, and auto-generated summaries. All from a simple drag-and-drop mark statement.",
    tags: ["APIs", "MicroSaaS", "Automation", "Visualization"],
    liveLink: "https://comforting-kangaroo-6f5fa8.netlify.app/",
    image: "lovable-uploads/MarQ.png",
  },
  {
    title: "Quizenius",
    description: "A personalized AI Learning Platform that leverages artificial intelligence to generate personalized quizzes and learning materials.",
    tags: ["GenAI", "Prompt Engineering", "Python", "Streamlit"],
    githubLink: "https://github.com/MalaiarasuGRaj/DigitalT3-PromptEngineering",
    demoLink: "https://drive.google.com/file/d/1fm8TFoUsveF3u6dJTJ0BxundQVqP2hfl/view?usp=sharing",
    image: "lovable-uploads/Quizenius.png",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">Projects</h2>
      </MotionDiv>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mt-12">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.title}
            className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-portfolio-purple/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] transform hover:-translate-y-2 group"
            type="scale"
            delay={0.2 * (index + 1)}
          >
            <div className="h-40 rounded-t-lg mb-6 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-portfolio-purple/30 to-portfolio-purple-light/10 flex items-center justify-center">
                  <span className='text-portfolio-purple-light'>Image Coming Soon</span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-portfolio-purple-light mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple-light text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubLink && (
                <MotionButton
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-portfolio-purple/50 text-portfolio-purple-light hover:bg-portfolio-purple hover:text-white"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github size={16} />
                  GitHub
                </MotionButton>
              )}

              {project.liveLink && (
                <MotionButton
                  size="sm"
                  className="flex items-center gap-2 bg-portfolio-purple text-white hover:bg-portfolio-purple-dark"
                  onClick={() => window.open(project.liveLink, "_blank")}
                >
                  <ExternalLink size={16} />
                  See It Live
                </MotionButton>
              )}

              {project.demoLink && (
                <MotionButton
                  size="sm"
                  className="flex items-center gap-2 bg-portfolio-purple text-white hover:bg-portfolio-purple-dark"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <ExternalLink size={16} />
                  Play Demo
                </MotionButton>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
