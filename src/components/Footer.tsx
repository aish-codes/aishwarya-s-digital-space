import { Mail, Instagram, Twitter, Youtube, Linkedin, Github, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/aishidiot", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/AishIdiot", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@aishidiot", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryasharma2/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/aish-codes", label: "GitHub" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-primary-foreground/70 mb-6">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <a
              href="mailto:aishmooc@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              aishmooc@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
              <p>© {currentYear} Aishwarya. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-destructive" /> in Delhi, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
