export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-rag",
    title: "Getting Started with RAG Pipelines",
    date: "2026-02-15",
    excerpt:
      "A practical walkthrough of building your first Retrieval-Augmented Generation pipeline using LangChain, vector databases, and Azure OpenAI.",
    content: `Retrieval-Augmented Generation (RAG) has become the go-to pattern for grounding large language models in domain-specific knowledge. In this post, I walk through the architecture I used to deploy a production-grade RAG system at work.

## Why RAG?

Fine-tuning is expensive and hard to maintain. RAG lets you keep your LLM general-purpose while injecting relevant context at inference time through a retrieval step.

## The Stack

- **Embedding Model:** Azure OpenAI text-embedding-ada-002
- **Vector Store:** Azure AI Search
- **Orchestration:** LangChain
- **LLM:** GPT-4 via Azure OpenAI

## Key Learnings

1. **Chunk size matters.** I settled on 512 tokens with 50-token overlap after experimenting with different sizes.
2. **Metadata filtering** dramatically improves relevance when your corpus spans multiple domains.
3. **Evaluation is hard** — I ended up building a small eval harness using human-labeled question-answer pairs.

RAG isn't magic, but when done right it's incredibly powerful for enterprise use cases where data freshness and accuracy matter.`,
  },
  {
    id: "my-llm-journey",
    title: "My LLM Journey",
    date: "2026-01-20",
    excerpt:
      "From classical ML to large language models — how I navigated the rapidly evolving AI landscape while working full-time.",
    content: `When I first started in analytics, my tools were Excel pivot tables and basic SQL queries. Fast forward a few years and I'm building systems powered by billion-parameter language models. Here's how that journey unfolded.

## The Analytics Phase (2017–2020)

At GroupM, I fell in love with data. R was my first real programming language, and Alteryx made ETL feel almost fun. SQL became second nature.

## The ML Phase (2020–2023)

Joining EY was a turning point. I dove into scikit-learn, then TensorFlow and PyTorch. I built classification models, time-series forecasters, and recommendation engines.

## The LLM Phase (2023–Present)

GPT-3.5 changed everything. I started experimenting with prompt engineering, then moved to fine-tuning, and eventually to building full RAG architectures on Azure. The pace of change is relentless, but that's what makes it exciting.

## Advice for Others

- Don't try to learn everything at once. Pick one project and go deep.
- Read papers, but prioritize building things.
- The fundamentals (linear algebra, probability, SQL) never go out of style.`,
  },
  {
    id: "why-i-switched-from-r-to-python",
    title: "Why I Switched from R to Python",
    date: "2025-12-05",
    excerpt:
      "R was my first love in data science, but Python won me over. Here's the honest comparison from someone who used both professionally.",
    content: `R holds a special place in my heart. It's where I learned what a dataframe is, how to wrangle messy data, and how to build beautiful visualizations with ggplot2. But eventually, Python became my primary language. Here's why.

## What R Does Better

- **Statistical computing:** R's ecosystem for statistics is unmatched. Packages like lme4, survival, and brms are phenomenal.
- **Data visualization:** ggplot2 is still the gold standard for static plots.
- **R Shiny:** For quick interactive dashboards, Shiny is incredibly productive.

## Why Python Won

1. **ML/DL ecosystem:** scikit-learn, PyTorch, TensorFlow, Hugging Face — the Python ML ecosystem is simply larger.
2. **Production readiness:** Python integrates better with web frameworks, APIs, and cloud services.
3. **LLM tooling:** LangChain, LlamaIndex, OpenAI SDK — everything is Python-first.
4. **Community:** More tutorials, more Stack Overflow answers, more everything.

## The Verdict

I still use R occasionally for statistical analysis and Shiny dashboards. But for anything involving ML pipelines, LLMs, or production deployment, Python is the clear winner. The best language is the one that gets the job done.`,
  },
];
