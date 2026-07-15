import { Download, Instagram, Twitter, Youtube, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/aishidiot", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/AishIdiot", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@aishidiot", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryasharma2/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/aish-codes", label: "GitHub" },
];

// Custom icons for platforms not in Lucide
const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.339" />
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const HuggingFaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 3.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S10 5.828 10 5s.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5S7.328 6.5 6.5 6.5 5 5.828 5 5s.672-1.5 1.5-1.5zm11 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S16 5.828 16 5s.672-1.5 1.5-1.5zM12 8c3.314 0 6 2.239 6 5 0 2.762-2.686 5-6 5s-6-2.238-6-5c0-2.761 2.686-5 6-5zm-2.5 3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
  </svg>
);

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-widest uppercase animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight animate-fade-in">
            Aishwarya
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-6 animate-fade-in">
            AI Engineer
          </h2>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in">
            Delhi, IN • Moves fast and breaks things
          </p>

          {/* CTA Button */}
          <div className="mb-12 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <a href="/resume.pdf" download="Aishwarya-AI-Engineer-Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 md:gap-6 animate-fade-in">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="https://www.kaggle.com/aishwaryasharma1992"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="Kaggle"
            >
              <KaggleIcon />
            </a>
            <a
              href="https://medium.com/@aishidiot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="Medium"
            >
              <MediumIcon />
            </a>
            <a
              href="https://huggingface.co/aishidiot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-full transition-all duration-300 hover:-translate-y-1"
              aria-label="Hugging Face"
            >
              <HuggingFaceIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
