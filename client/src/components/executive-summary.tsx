import { ServerCog, Shield, Box, Network } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8 section-fade">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <ServerCog className="w-4 h-4" />
            <span>Tattva AI Operating System for Enterprise Knowledge</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Modular AI Infrastructure<br />
            <span className="text-blue-500">Built for Mission-Critical Systems</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A flexible infrastructure that empowers mission-critical organizations to deploy tailored AI agents, 
            actionable insights, and predictive automation across roles, devices, and environments. 
            From <strong>Offline AI OS</strong> for air-gapped environments to <strong>Centralized Enterprise AI</strong> 
            for cloud-scale orchestration—securely and scalably.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Trusted & Compliant</h3>
              <p className="text-gray-600">Audit trails, explainable AI, and compliance-first design for regulated sectors.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                <Box className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Modular Design</h3>
              <p className="text-gray-600">Sector-specific apps built on shared intelligence cores for maximum efficiency.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
                <Network className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Flexible Deployment</h3>
              <p className="text-gray-600">Offline, on-premise, hybrid, or cloud deployment options to meet your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
