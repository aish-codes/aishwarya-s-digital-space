export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const markdownFiles = import.meta.glob("./blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function getContent(id: string): string {
  const key = `./blogs/${id}.md`;
  return markdownFiles[key] ?? "";
}

export const blogPosts: BlogPost[] = [
  {
    id: "copilot-studio-vs-custom",
    title: "Microsoft Copilot Agents vs. Custom AI Solutions:A Manager's Decision Guide",
    date: "2026-05-21",
    excerpt:
      "The single biggest mistake managers make is choosing the platform before scoring the problem.",
    content: getContent("copilot-studio-vs-custom"),
  },
  {
    id: "getting-started-with-rag",
    title: "Getting Started with RAG Pipelines",
    date: "2026-02-15",
    excerpt:
      "A practical walkthrough of building your first Retrieval-Augmented Generation pipeline using LangChain, vector databases, and Azure OpenAI.",
    content: getContent("getting-started-with-rag"),
  },
  {
    id: "my-llm-journey",
    title: "My LLM Journey",
    date: "2026-01-20",
    excerpt:
      "From classical ML to large language models — how I navigated the rapidly evolving AI landscape while working full-time.",
    content: getContent("my-llm-journey"),
  },
  {
    id: "why-i-switched-from-r-to-python",
    title: "Why I Switched from R to Python",
    date: "2025-12-05",
    excerpt:
      "R was my first love in data science, but Python won me over. Here's the honest comparison from someone who used both professionally.",
    content: getContent("why-i-switched-from-r-to-python"),
  },
];
