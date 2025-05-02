
import { MotionDiv } from "../animation/MotionDiv";
import { MotionButton } from "../animation/MotionButton";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "MarQ",
    description: "MarQ is an AI-powered marks analysis tool that offers subject-wise insights, student-wise reports, and auto-generated summaries. All from a simple drag-and-drop mark statement.",
    tags: ["APIs", "MicroSaaS", "Automation", "Visualization"],
    liveLink: "https://comforting-kangaroo-6f5fa8.netlify.app/",
  },
  {
    title: "MongoChat",
    description: "Database chat agent that enables natural language interaction with MongoDB databases.",
    tags: ["LLM", "Agentic AI", "MongoDB", "Flask"],
    githubLink: "https://github.com/MalaiarasuGRaj/MongoChat.git",
  },
  {
    title: "Quizenius",
    description: "A personalized AI Learning Platform that leverages artificial intelligence to generate personalized quizzes and learning materials.",
    tags: ["GenAI", "Prompt Engineering", "Python", "Streamlit"],
    githubLink: "https://github.com/MalaiarasuGRaj/DigitalT3-PromptEngineering",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <MotionDiv type="fade" direction="up">
        <h2 className="heading text-center">Projects</h2>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
        {projects.map((project, index) => (
          <MotionDiv 
            key={project.title}
            className="card bg-muted hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-500"
            type="scale"
            delay={0.2 * (index + 1)}
          >
            <div className="h-40 bg-gradient-to-br from-portfolio-purple/30 to-portfolio-purple-light/10 rounded-t-lg mb-6"></div>
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
                  Live Demo
                </MotionButton>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
