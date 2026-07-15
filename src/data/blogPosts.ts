export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

// Vite inlines the markdown at build time, so the prerender step gets the full post
// without any runtime fetch.
const markdownFiles = import.meta.glob("./blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function getContent(id: string): string {
  const key = `./blogs/${id}.md`;
  const content = markdownFiles[key];
  if (!content) {
    throw new Error(`No markdown found for blog post "${id}" (expected ${key})`);
  }
  return content;
}

export const blogPosts: BlogPost[] = [
  {
    id: "copilot-studio-vs-custom",
    title: "Microsoft Copilot Agents vs. Custom AI Solutions: A Manager's Decision Guide",
    date: "2026-05-21",
    readTime: "27 min read",
    excerpt:
      "The single biggest mistake managers make is choosing the platform before scoring the problem.",
    content: getContent("copilot-studio-vs-custom"),
  },
];
