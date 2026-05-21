Retrieval-Augmented Generation (RAG) has become the go-to pattern for grounding large language models in domain-specific knowledge. In this post, I walk through the architecture I used to deploy a production-grade RAG system at work.

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

RAG isn't magic, but when done right it's incredibly powerful for enterprise use cases where data freshness and accuracy matter.
