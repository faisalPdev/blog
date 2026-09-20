export type Project = {
  slug: string;
  index: string;
  title: string;
  client?: string;
  summary: string;
  problem: string;
  architecture: string[];
  outcome: string;
  stack: string[];
  featuredTags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'edtech-llm-workflow',
    index: '001',
    title: 'GCC-Based EdTech Platform — LLM Workflow Automation',
    client: 'GCC-based EdTech platform',
    summary:
      'An LLM-powered approval workflow that applies business rules and returns structured, auditable decisions inside existing backend APIs.',
    problem:
      'Certain business requests and subject-specific workflows on the platform required consistent, rule-based approval or rejection decisions that were previously handled manually, creating a bottleneck as request volume grew.',
    architecture: [
      'Designed and implemented an LLM-powered decision workflow using Python and LangChain.',
      'The system ingests the relevant request and context, applies defined business rules and instructions, and generates structured outcomes usable directly by downstream systems.',
      'Integrated the LLM into existing backend APIs and business logic rather than treating it as an isolated chatbot.',
      'Focused on reliability, structured outputs, and production-grade behaviour rather than experimental use.',
    ],
    outcome:
      'Automated a previously manual approval/rejection process, reducing turnaround time while keeping decisions structured, auditable, and integrated into the platform’s existing workflow.',
    stack: [
      'Python',
      'LangChain',
      'LLM APIs',
      'Prompt Engineering',
      'REST APIs',
      'Backend Integration',
    ],
    featuredTags: ['Python', 'LangChain', 'LLM APIs', 'REST APIs'],
    featured: true,
  },
  {
    slug: 'configurable-rag-platform',
    index: '002',
    title: 'Configurable RAG & AI Agent Platform',
    client: 'Multi-customer AI platform',
    summary:
      'A reusable RAG and agent architecture that can be configured per customer — LLM, embeddings, vector store, chunking, and retrieval — instead of rebuilding pipelines from scratch.',
    problem:
      'Different customers required RAG and agent-based AI capabilities, but each had different LLM providers, data types, and retrieval needs. A single fixed RAG implementation would not scale across use cases.',
    architecture: [
      'Built a highly configurable RAG and AI-agent architecture adaptable to multiple customer requirements.',
      'Made core components configurable: LLM provider, embedding model, vector database, chunking strategy, chunk size/overlap, and retrieval settings.',
      'Implemented document processing, embeddings, vector search, retrieval, and LLM generation pipelines.',
      'Built agent workflows on top of the retrieval layer for more complex, multi-step tasks.',
      'Added evaluation and observability tooling to monitor and improve AI application quality.',
    ],
    outcome:
      'A single reusable architecture that can be configured and deployed for multiple customer use cases, reducing the need to rebuild RAG pipelines from scratch for each new client.',
    stack: [
      'Python',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector Databases',
      'PostgreSQL',
      'Embeddings',
      'LLM APIs',
      'LangSmith',
    ],
    featuredTags: ['Python', 'LangChain', 'LangGraph', 'RAG'],
    featured: true,
  },
  {
    slug: 'ev-fleet-intelligence',
    index: '003',
    title: 'EV Fleet Intelligence Platform',
    client: 'Dubai-based EV manufacturer & distributor',
    summary:
      'A production fleet-intelligence platform that turns live vehicle telemetry into anomaly alerts, safety insights, and battery health forecasts.',
    problem:
      'The company needed intelligent, real-time fleet monitoring and vehicle-level insights derived from continuously generated vehicle telemetry, to support fleet management and vehicle health decisions.',
    architecture: [
      'Data layer: real-time vehicle telemetry ingested via Kafka and processed through an AI/ML pipeline.',
      'ML layer: anomaly detection and battery health models, including State of Health (SoH) analysis and battery degradation / Remaining Useful Life (RUL) forecasting.',
      'AI layer: LangGraph orchestration combining telemetry, business rules, and model outputs into coherent, vehicle-level insights.',
      'Application layer: backend integration delivering insights through fleet-management dashboards.',
      'Combined rule-based and ML-based detection for abnormal vehicle and driving behaviour.',
    ],
    outcome:
      'A production-oriented platform combining streaming data, ML models, and AI orchestration to deliver actionable vehicle intelligence — anomaly alerts, safety insights, and battery health forecasts — directly through fleet-management dashboards.',
    stack: [
      'Python',
      'Kafka',
      'Machine Learning',
      'LangGraph',
      'AI Orchestration',
      'FastAPI',
      'Real-Time Data Processing',
    ],
    featuredTags: ['Python', 'Kafka', 'LangGraph', 'FastAPI'],
    featured: true,
  },
];
