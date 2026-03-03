import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech",
    institution: "GGSIPU",
    field: "Electronics & Communication Engineering",
    year: "2011–2015",
  },
  {
    degree: "Higher Secondary",
    institution: "CBSE",
    field: "STEM",
    year: "2011",
  },
];

const Education = () => (
  <section className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="p-6 rounded-lg border border-border"
          >
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
            <p className="text-muted-foreground text-sm">{edu.field}</p>
            <p className="text-xs text-muted-foreground mt-2">{edu.year}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Education;
