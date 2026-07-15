import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Hireability Analyzer",
    description:
      "LLM-powered tool that scores hireability and estimates market value from a resume, GitHub and Kaggle profile. Parses PDF/DOCX resumes, collects profile signals, and prompts an LLM with Pydantic-validated structured outputs to produce a weighted 0–100 score, salary estimate and targeted recommendations. Containerised and deployed as a Hugging Face Space.",
    tech: ["Python", "Groq", "Pydantic", "Gradio", "PyMuPDF", "Playwright", "Docker"],
    github: "https://github.com/aish-codes/Hireability-Analyzer",
    demo: "https://huggingface.co/spaces/aishidiot/resume_analyzer2",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              What I've Built
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Projects */}
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
