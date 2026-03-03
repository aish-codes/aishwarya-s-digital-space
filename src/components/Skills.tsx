import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", tip: "Primary language for ML/AI" },
      { name: "R", tip: "Statistical computing & Shiny dashboards" },
      { name: "SQL", tip: "Data querying & manipulation" },
    ],
  },
  {
    title: "Data Processing",
    skills: [
      { name: "MS Excel", tip: "Advanced data analysis & pivot tables" },
      { name: "Alteryx", tip: "ETL & data blending workflows" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", tip: "Relational database querying" },
      { name: "Snowflake", tip: "Cloud data warehousing" },
      { name: "MS Access", tip: "Desktop database management" },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "R Shiny", tip: "Interactive web apps in R" },
      { name: "PowerBI", tip: "Business intelligence dashboards" },
      { name: "Gradio", tip: "ML model demo interfaces" },
      { name: "Streamlit", tip: "Python-based data apps" },
    ],
  },
  {
    title: "Deep Learning & Gen AI",
    skills: [
      { name: "Machine Learning", tip: "Classical ML algorithms & pipelines" },
      { name: "Deep Learning", tip: "Neural network architectures" },
      { name: "Neural Networks", tip: "CNNs, RNNs, Transformers" },
      { name: "LLMs", tip: "Large Language Models & prompt engineering" },
      { name: "RAG", tip: "Retrieval-Augmented Generation" },
      { name: "Cloud AI Stack (Azure)", tip: "Azure OpenAI, AI Search, ML Studio" },
      { name: "Model Training", tip: "Fine-tuning & training pipelines" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure DevOps", tip: "CI/CD pipelines & project management" },
      { name: "Azure AI", tip: "Azure cognitive & AI services" },
      { name: "CI/CD", tip: "Continuous integration & deployment" },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", tip: "Distributed version control" },
      { name: "Azure DevOps", tip: "Repos & branch policies" },
    ],
  },
  {
    title: "MS Power Platform",
    skills: [
      { name: "PowerBI", tip: "Data visualization & reporting" },
      { name: "Power Automate", tip: "Workflow automation" },
      { name: "Power Apps", tip: "Low-code app development" },
      { name: "CoPilot Studio", tip: "Custom AI copilot builder" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="space-y-8">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Tooltip key={skill.name + cat.title}>
                  <TooltipTrigger asChild>
                    <span className="px-3 py-1.5 text-sm rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-default">
                      {skill.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>{skill.tip}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
