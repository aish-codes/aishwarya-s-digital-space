import { motion } from "framer-motion";

const experiences = [
  {
    company: "EY GDS",
    period: "Dec 2020 – Present",
    description:
      "Upskilled heavily across ML, deep learning, LLMs, Azure, and deployed production-grade RAG-based solutions.",
  },
  {
    company: "GroupM",
    period: "Nov 2017 – Nov 2020",
    description:
      "Introduced to analytics; learnt R programming, Alteryx, and SQL on the job — the pivotal moment in the data science and AI journey.",
  },
  {
    company: "Grapes Digital",
    period: "May 2016 – Oct 2017",
    description: "Business development presentations and reporting.",
  },
  {
    company: "To The New Digital",
    period: "Apr 2015 – Nov 2015",
    description:
      "Social media data analysis, sentiment tagging, PowerPoint reporting.",
  },
];

const Experience = () => (
  <section id="experience" className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Experience</h2>
      <div className="relative border-l-2 border-border pl-8 space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {exp.period}
            </p>
            <h3 className="text-lg font-semibold mt-1">{exp.company}</h3>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
