import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RAG-Powered Document Q&A",
    description: "Built an intelligent document querying system using RAG architecture with Langchain and Azure OpenAI. Enables natural language questions over enterprise documents.",
    tech: ["Python", "Langchain", "Azure", "RAG"],
    github: "#",
    demo: "#",
  },
  {
    title: "Interactive R Shiny Dashboard",
    description: "Complex analytics dashboard for real-time data visualization and reporting. Features drill-down capabilities and automated report generation.",
    tech: ["R", "Shiny", "Plotly", "SQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Alteryx Automation Suite",
    description: "Custom Alteryx macros and workflows for automating complex ETL processes. Reduced processing time by 80% for enterprise data pipelines.",
    tech: ["Alteryx", "SQL", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "PowerBI Analytics Platform",
    description: "Comprehensive business intelligence solution with interactive dashboards, DAX measures, and automated data refresh pipelines.",
    tech: ["PowerBI", "DAX", "Power Automate"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Pipeline with Azure DevOps",
    description: "End-to-end machine learning pipeline with CI/CD integration. Automated model training, evaluation, and deployment workflows.",
    tech: ["Azure DevOps", "Python", "MLflow"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    description: "Deep learning model for analyzing sentiment in social media data. Deployed as a REST API with real-time inference capabilities.",
    tech: ["Python", "PyTorch", "FastAPI"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              What I've Built
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="View Demo"
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
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10"
            >
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
