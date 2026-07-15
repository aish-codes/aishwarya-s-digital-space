import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "GGSIPU",
    period: "2011 - 2015",
  },
  {
    degree: "Higher Secondary (STEM)",
    institution: "CBSE",
    period: "2011",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              Get To Know
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                A 'jack of all trades' whose journey spans digital analytics and sales, eventually
                evolving into data science and AI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise and experience spans from traditional data analytics and mining to cutting-edge
                AI solutions. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on building LLM solutions and automations that drive efficiency and innovation.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Delhi, India</span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full" />
                    <h4 className="text-foreground font-medium mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
