import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <article className="flex-1 w-full max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <p className="text-sm text-muted-foreground">
          {formattedDate} · {post.readTime}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-10 tracking-tight">
          {post.title}
        </h1>

        {/* The post is long-form markdown with wide tables; those scroll inside the
            wrapper rather than pushing the page sideways. */}
        <div
          className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:tracking-tight prose-headings:text-foreground
            prose-a:text-primary prose-img:rounded-lg prose-img:bg-card
            prose-table:text-sm prose-pre:bg-card prose-pre:text-foreground"
        >
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
