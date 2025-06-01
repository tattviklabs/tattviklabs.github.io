import { Cloud, Shield, Users, Settings, Award, Zap, Bot } from "lucide-react";

export default function StrategicThemes() {
  const themes = [
    {
      icon: Cloud,
      title: "Flexible Deployment",
      description: "Offline, On-Premise, Cloud: Choice-driven deployment at every scale for air-gapped to cloud environments.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Human-in-the-Loop",
      description: "Trusted automation with oversight & control, combining intelligent agents with human decision-making.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Bot,
      title: "AI Agents for Every Role",
      description: "Sales, Ops, Support, Legal, Admin, Compliance - specialized agents tailored for each business function.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Small Business Friendly",
      description: "WhatsApp-ready, cost-efficient automation that scales from SMEs to enterprise deployments.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Explainability",
      description: "Every insight is traceable, auditable, documented with comprehensive compliance and transparency.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Embedded Design",
      description: "Works with legacy software and modern stacks, seamlessly integrating into existing enterprise systems.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Modular Infrastructure",
      description: "Plug in only what you need, from dashboard to agent - scalable components for any enterprise requirement.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Strategic Principles
          </h2>
          <p className="text-xl text-gray-600">
            Core themes that drive our approach to enterprise AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <div key={theme.title} className="space-y-4 section-fade">
              <div className={`w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center`}>
                <theme.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">{theme.title}</h3>
              <p className="text-gray-600">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
