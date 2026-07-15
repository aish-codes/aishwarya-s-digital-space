import { Code, Database, BarChart3, Brain, Cloud, GitBranch, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["R", "Python", "SQL"],
  },
  {
    icon: Layers,
    title: "Data Processing",
    skills: ["MS Excel", "Alteryx Expert"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["SQL", "Snowflake", "MS Access"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    skills: ["R Shiny", "PowerBI"],
  },
  {
    icon: Brain,
    title: "Deep Learning & Gen AI",
    skills: ["Machine Learning", "Neural Networks", "LLMs", "RAG Solutions", "Langchain", "Langsmith", "Azure AI"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    skills: ["Azure DevOps", "Azure AI"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git"],
  },
  {
    icon: Layers,
    title: "MS Power Platforms",
    skills: ["PowerBI", "Power Automate", "Power Apps"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              What I Work With
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Skills & Technologies
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-3 py-1 bg-secondary/20 text-muted-foreground rounded-full hover:bg-secondary/40 transition-colors duration-200"
                    >
                      {skill}
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
