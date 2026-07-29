import { Link } from "react-router-dom";
import { Clock, ArrowRight, Calendar, Camera } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { galleries, galleryPhotoCount } from "@/data/galleries";

interface Entry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  kind: "Article" | "Gallery";
  meta: string;
}

// Articles and photo galleries share the writing feed, newest first.
const entries: Entry[] = [
  ...blogPosts.map((post): Entry => ({
    id: post.id,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    kind: "Article",
    meta: post.readTime,
  })),
  ...galleries.map((gallery): Entry => ({
    id: gallery.id,
    title: gallery.title,
    date: gallery.date,
    excerpt: gallery.excerpt,
    kind: "Gallery",
    meta: `${galleryPhotoCount(gallery)} photos`,
  })),
].sort((a, b) => b.date.localeCompare(a.date));

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

          {/* Entries */}
          <div className="space-y-6">
            {entries.map((entry) => (
              <Link
                key={entry.id}
                to={`/blog/${entry.id}`}
                className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                    <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary/80 bg-primary/10 rounded px-2 py-0.5 mb-2">
                      {entry.kind}
                    </span>
                    <h3 className="text-foreground font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                      {entry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {entry.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(entry.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        {entry.kind === "Gallery" ? (
                          <Camera className="w-4 h-4" />
                        ) : (
                          <Clock className="w-4 h-4" />
                        )}
                        {entry.meta}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-sm font-medium mr-2">
                      {entry.kind === "Gallery" ? "View Gallery" : "Read More"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
