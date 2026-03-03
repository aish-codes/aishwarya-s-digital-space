import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section id="blog" className="section-padding max-w-3xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Blog</h2>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block p-6 rounded-lg border border-border hover:border-primary transition-colors group"
          >
            <p className="text-xs text-muted-foreground">{post.date}</p>
            <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {post.excerpt}
            </p>
            <span className="inline-block mt-3 text-sm text-primary font-medium">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  </section>
);

export default BlogSection;
