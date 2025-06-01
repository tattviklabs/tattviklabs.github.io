import { Shield, Server, Cloud, Globe } from "lucide-react";

export default function ArchitectureOverview() {
  const deploymentOptions = [
    {
      icon: Shield,
      name: "Offline AI OS",
      description: "Air-gapped environments for maximum security",
      gradient: "from-red-500 to-orange-500",
      tags: ["Defense", "Rural Health", "Critical Infrastructure"]
    },
    {
      icon: Server,
      name: "On-Premise",
      description: "Customer-controlled infrastructure for privacy",
      gradient: "from-blue-500 to-indigo-500",
      tags: ["Private Cloud", "Data Sovereignty", "Compliance"]
    },
    {
      icon: Cloud,
      name: "Hybrid Stack",
      description: "Best of both worlds - control and scalability",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Edge + Cloud", "Flexible Scaling", "Multi-Region"]
    },
    {
      icon: Globe,
      name: "Cloud SaaS",
      description: "Fully managed service for rapid deployment",
      gradient: "from-emerald-500 to-teal-500",
      tags: ["Auto-Scaling", "Global Access", "Zero Maintenance"]
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Deployment Architecture
          </h2>
          <p className="text-xl text-gray-600">
            Flexible deployment options designed for your security and scale requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deploymentOptions.map((option) => (
            <div key={option.name} className="bg-white rounded-2xl p-6 hover-lift border border-gray-100 text-center section-fade">
              <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <option.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{option.name}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="space-y-2 text-sm">
                {option.tags.map((tag) => (
                  <div key={tag} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
