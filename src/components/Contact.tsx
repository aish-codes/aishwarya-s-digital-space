import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Contact</h2>
      <p className="text-muted-foreground mb-4">
        Feel free to reach out for collaborations or data science discussions!
      </p>
      <a
        href="mailto:aishmooc@gmail.com"
        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
      >
        <Mail className="w-4 h-4" />
        aishmooc@gmail.com
      </a>
    </motion.div>
  </section>
);

export default Contact;
