import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Linear Algebra Lectures",
    instructor: "Rachel Howard",
    description: "Comprehensive course covering fundamental linear algebra concepts essential for machine learning.",
    link: "#",
  },
  {
    title: "Neural Networks: Zero to Hero",
    instructor: "Andrej Karpathy",
    description: "Deep dive into neural network architecture, backpropagation, and modern deep learning techniques.",
    link: "#",
  },
  {
    title: "CS 25: Transformers United",
    instructor: "Stanford University",
    description: "Cutting-edge course on transformer architectures and their applications in NLP and beyond.",
    link: "#",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              Continuous Learning
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Certifications & Learning
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm mb-3">{cert.instructor}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <a
                  href={cert.link}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  View Certificate
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
