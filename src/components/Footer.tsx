import { Download } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 md:px-12 lg:px-24">
    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aishwarya Sharma
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </a>
    </div>
  </footer>
);

export default Footer;
