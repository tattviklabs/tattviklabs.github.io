import { FileText, Search, GitBranch, TrendingUp, MessageCircle, Settings, Database, Cog, Brain } from "lucide-react";

export default function CoreEngines() {
  const engines = [
    {
      icon: FileText,
      name: "DocParse",
      description: "Advanced OCR and document layout parser for complex document structures",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["OCR", "Layout Analysis"]
    },
    {
      icon: Search,
      name: "RAGCore",
      description: "Retrieval-Augmented Generation engine for contextually aware responses",
      gradient: "from-purple-500 to-pink-500",
      tags: ["RAG", "Context-Aware"]
    },
    {
      icon: GitBranch,
      name: "GraphMind",
      description: "Knowledge graph generator from structured and unstructured data",
      gradient: "from-emerald-500 to-teal-500",
      tags: ["Knowledge Graphs", "Data Integration"]
    },
    {
      icon: TrendingUp,
      name: "InsightDash",
      description: "Real-time KPI dashboard with intelligent alert engine",
      gradient: "from-orange-500 to-red-500",
      tags: ["Real-time", "Alerts"]
    },
    {
      icon: MessageCircle,
      name: "ChatCore",
      description: "Multilingual, voice-enabled AI assistant engine",
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Multilingual", "Voice"]
    },
    {
      icon: Database,
      name: "VectorVault",
      description: "Embedding store for rapid semantic search across enterprise data",
      gradient: "from-cyan-500 to-blue-500",
      tags: ["Vector Search", "Embeddings"]
    },
    {
      icon: Cog,
      name: "AutoModelOps",
      description: "Automated model deployment, versioning and monitoring",
      gradient: "from-green-500 to-emerald-500",
      tags: ["MLOps", "Automation"]
    },
    {
      icon: Settings,
      name: "ChainRunner",
      description: "Agent orchestration engine for complex multi-step workflows",
      gradient: "from-gray-600 to-gray-800",
      tags: ["Orchestration", "Multi-Agent"]
    },
    {
      icon: Brain,
      name: "ContextOS",
      description: "Context management system to retain session state across apps",
      gradient: "from-violet-500 to-purple-500",
      tags: ["Context", "Session Management"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Core AI Engines
          </h2>
          <p className="text-xl text-gray-600">
            Reusable intelligence components that power sector-specific solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engines.map((engine, index) => (
            <div key={engine.name} className="bg-white rounded-2xl p-8 hover-lift border border-gray-100 section-fade">
              <div className={`w-12 h-12 bg-gradient-to-br ${engine.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <engine.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{engine.name}</h3>
              <p className="text-gray-600 mb-4">{engine.description}</p>
              <div className="flex flex-wrap gap-2">
                {engine.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
