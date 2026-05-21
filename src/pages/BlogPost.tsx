import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Markdown from "react-markdown";

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <article className="flex-1 max-w-2xl mx-auto section-padding">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <p className="text-xs text-muted-foreground">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{post.title}</h1>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
