import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const links = [
  { label: "GitHub", url: "https://github.com/aish-codes", icon: Github },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aishwaryasharma2/", icon: Linkedin },
  { label: "Kaggle", url: "https://www.kaggle.com/aishwaryasharma1992", icon: () => <span className="text-sm font-bold">K</span> },
  { label: "HuggingFace", url: "https://huggingface.co/aishidiot", icon: () => <span className="text-sm font-bold">🤗</span> },
  { label: "Instagram", url: "https://www.instagram.com/aishidiot/", icon: Instagram },
];

const About = () => (
  <section id="about" className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        Data Scientist based in <strong className="text-foreground">Delhi, India</strong>.
        Passionate about machine learning, deep learning, and building AI-powered solutions
        that make a real impact. Currently exploring LLMs, RAG architectures, and the Azure AI stack.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {links.map(({ label, url, icon: Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
