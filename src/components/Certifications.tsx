import { motion } from "framer-motion";

const certs = [
  "Linear Algebra Lectures by Rachel Howard",
  "Neural Networks by Andrej Karpathy",
];

const Certifications = () => (
  <section className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Certifications</h2>
      <ul className="space-y-3">
        {certs.map((cert) => (
          <li key={cert} className="flex items-start gap-3 text-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {cert}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground italic mt-6">
        I'll keep adding more certificates going forward.
      </p>
    </motion.div>
  </section>
);

export default Certifications;
