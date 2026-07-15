import { Clock, ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Building RAG Applications with Langchain and Azure",
    excerpt: "A comprehensive guide to creating Retrieval-Augmented Generation solutions for enterprise document processing.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "Mastering Alteryx: Advanced Macro Development",
    excerpt: "Deep dive into creating reusable Alteryx macros that can transform your data workflows and boost productivity.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    link: "#",
  },
  {
    title: "From Electronics to AI Engineering: My Career Journey",
    excerpt: "Sharing my transition from Electronics Engineering to becoming an AI Engineer at a Big 4 consulting firm.",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "R Shiny Best Practices for Enterprise Dashboards",
    excerpt: "Lessons learned from building complex R Shiny applications for enterprise clients with thousands of users.",
    date: "Sep 5, 2024",
    readTime: "10 min read",
    link: "#",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              Thoughts & Writings
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest Blog Posts
            </h2>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-sm font-medium mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View all posts on Medium
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
