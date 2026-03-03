import { motion } from "framer-motion";

const Hero = () => {
  const navItems = ["About", "Skills", "Experience", "Blog", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center section-padding text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
      >
        Aishwarya Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-4 text-lg md:text-xl text-primary font-medium"
      >
        Data Scientist
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-3 text-muted-foreground italic text-base"
      >
        "Balancing AI and life."
      </motion.p>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-muted-foreground"
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="hover:text-primary transition-colors"
          >
            {item}
          </button>
        ))}
      </motion.nav>
    </section>
  );
};

export default Hero;
