export const profile = {
  name: "Sayandip Bar",
  role: "AI Engineer",
  tagline: "Engineering Intelligence, One Algorithm at a Time",
  location: "Kolkata, West Bengal, India",
  email: "sayandipbar@example.com",
  social: {
    github: "https://github.com/Sayandip05",
    linkedin: "https://linkedin.com/in/sayandipbar2005",
    twitter: "https://twitter.com/Sayandip05"
  },
  about: "AI Engineer with hands-on experience in building production-ready agentic AI systems and RAG pipelines. Proven track record of delivering scalable solutions that reduce operational costs by 60-80% and improve system accuracy to 90%+ through internships and real-world projects. Specialized in multi-agent architectures, NLP, and LLM integration with expertise in Python, LangChain, and AWS deployment.",
  highlights: [
    { label: "Production AI Systems", value: "3+" },
    { label: "Cost Reduction", value: "60-80%" },
    { label: "System Accuracy", value: "90%+" },
    { label: "Internship Exp", value: "Yes" }
  ]
};

export const skills = {
  "AI/ML & Specialized": [
    "LangChain", "LangGraph", "Transformers", "BERT", "DistilBERT", "RAG Pipelines", "Agentic AI", "NLP", "TensorFlow", "PyTorch"
  ],
  "Programming": [
    "Python (Advanced)", "FastAPI", "Flask", "HTML/CSS/JS", "Bash", "SQL"
  ],
  "Cloud & DevOps": [
    "AWS Lambda", "AWS EC2", "AWS S3", "Docker", "Kubernetes", "Git", "GitHub", "CI/CD"
  ],
  "Databases & Tools": [
    "MongoDB", "MySQL", "Pinecone", "ChromaDB", "FAISS", "VS Code", "Cursor AI", "Postman"
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI Shopping Assistant",
    category: "Agentic AI",
    description: "Advanced agentic AI shopping system featuring 1 master orchestrator and 6 specialized worker agents with RAG-based product recommendations.",
    tech: ["Python", "LangGraph", "MongoDB", "AWS", "OpenAI"],
    stats: ["<2s Response", "15% Conv. Rate", "60% Cost Red."],
    links: { github: "#", demo: "#" }
  },
  {
    id: 2,
    title: "BERT QA System",
    category: "NLP",
    description: "Intelligent question-answering system using BERT/DistilBERT with an integrated RAG retrieval layer for precise span extraction.",
    tech: ["Python", "Hugging Face", "FastAPI", "FAISS", "Docker"],
    stats: ["90% F1 Score", "500+ QPS", "Custom Retrieval"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 3,
    title: "AI Loan Sales Assistant",
    category: "Agentic AI",
    description: "Comprehensive 5-agent loan automation system handling sales, KYC verification, underwriting, and document generation.",
    tech: ["Python", "LangGraph", "MySQL", "AWS", "PDF Gen"],
    stats: ["80% Less Manual", "<30min Approval", "Auto Sanction"],
    links: { github: "#", demo: "#" }
  }
];
