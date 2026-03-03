import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Certifications />
    <BlogSection />
    <Contact />
    <Footer />
  </div>
);

export default Index;
