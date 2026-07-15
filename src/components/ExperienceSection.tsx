import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "EY GDS",
    role: "AI Engineer",
    period: "Dec 2020 - Present",
    description: "Advanced technology upskilling with focus on RAG-based LLM solutions, Azure AI, and CI/CD pipeline implementation. Building complex R Shiny dashboards and Alteryx macros for enterprise clients.",
    current: true,
  },
  {
    company: "GroupM",
    role: "Analytics Professional",
    period: "Nov 2017 - Nov 2020",
    description: "Introduction to analytics and R programming. Developed data-driven insights for media planning and optimization. Built foundational skills in statistical analysis and visualization.",
    current: false,
  },
  {
    company: "Grapes Digital",
    role: "Business Analyst",
    period: "May 2016 - Oct 2017",
    description: "Created impactful business development presentations. Analyzed market trends and client requirements to support strategic decision-making.",
    current: false,
  },
  {
    company: "To The New Digital",
    role: "Analyst",
    period: "Apr 2015 - Nov 2015",
    description: "Started career with social media data analysis. Gained experience in extracting insights from digital platforms and user behavior patterns.",
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              My Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 md:-translate-x-1/2 ${
                    exp.current
                      ? "bg-primary border-primary/30"
                      : "bg-background border-primary"
                  }`}
                />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div
                    className={`p-6 bg-background border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
