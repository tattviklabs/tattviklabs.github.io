import { Heart, Building, Scale, Factory, DollarSign, GraduationCap, Wheat, FlaskConical, Shield } from "lucide-react";

export default function SectorSolutions() {
  const sectors = [
    {
      icon: Factory,
      name: "Industry, Logistics & Infrastructure",
      description: "Driving operational intelligence for the world's most complex environments",
      gradient: "from-gray-600 to-slate-700",
      bgGradient: "from-gray-50 to-slate-50",
      borderColor: "border-gray-100",
      products: [
        { name: "OpsBoard", desc: "Unified operational dashboard for plant/port/logistics ops" },
        { name: "EquipGuard", desc: "Predictive maintenance using sensor + manual data" },
        { name: "ShiftSync", desc: "AI workforce and shift planner" },
        { name: "InfraDoc", desc: "Industrial spec, blueprint, and SOP reader" },
        { name: "SOPBot", desc: "Voice assistant for frontline industrial procedures" }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Enhancing precision, safety, and efficiency across care delivery systems",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      products: [
        { name: "MediFlow", desc: "AI triage, journey mapping, discharge automation" },
        { name: "VitalsEdge", desc: "Predictive load tracking for ICUs and wards" },
        { name: "ClaimSure", desc: "Smart billing, fraud detection, and RCM intelligence" },
        { name: "ClinicScan", desc: "Parses reports, prescriptions, and discharge notes" },
        { name: "CareBot", desc: "Voice/chat assistant for patients and staff (multi-device)" }
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Shield,
      name: "Defense, Railways, Government, Airports",
      description: "Mission-critical command and control for national infrastructure",
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      borderColor: "border-red-100",
      products: [
        { name: "FileTrack", desc: "Indexes movement of files, records, cases" },
        { name: "CivicBot", desc: "Vernacular assistant for citizen service & RTI queries" },
        { name: "PolicyLens", desc: "AI for tenders, bills, policies, GR summaries" },
        { name: "AuditTrail", desc: "Monitors compliance, breach flags, auto-log traceability" },
        { name: "ControlGrid", desc: "Real-time command-center for ops, alerts, strategy" }
      ],
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: Scale,
      name: "Legal & Compliance",
      description: "Structuring insight, risk, and review in knowledge-intensive domains",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      products: [
        { name: "LexIQ", desc: "Reads and summarizes legal texts, precedents, judgments" },
        { name: "CaseTrace", desc: "Tracks litigation, automates document prep & review" },
        { name: "Briefly", desc: "AI-generated legal briefs, arguments, case extracts" },
        { name: "ComplyGuard", desc: "KYC/AML/doc audit and contract violation detection" }
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: DollarSign,
      name: "Finance / Sales / HR / CRM / Enterprise Ops",
      description: "Bringing automation and transparency to financial workflows and enterprise operations",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      products: [
        { name: "ClaimTrack", desc: "Insurance doc verification and fraud detection" },
        { name: "LoanIntel", desc: "Automates loan triage, credit file insights" },
        { name: "SalesFlow", desc: "AI agent for CRM automation and account analysis" },
        { name: "PeoplePulse", desc: "AI for HR ops: onboarding, helpdesk, compliance" },
        { name: "InsightDash", desc: "Custom reports over sales, ops, finance data" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: GraduationCap,
      name: "Education, Pharma, Rural Development",
      description: "Empowering knowledge access, research acceleration, and grassroots transformation",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100",
      products: [
        { name: "LearnAssist", desc: "Tutor AI for students, researchers, training centers" },
        { name: "ArchiveIQ", desc: "Semantic search over thesis, publications, docs" },
        { name: "TrialMind", desc: "Clinical trial protocol reader + anomaly detector" },
        { name: "KrishiBot", desc: "Farmer chatbot for subsidies, crop data, pricing" }
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 section-fade">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Sector Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Industry-specific AI applications built on our modular infrastructure
          </p>
        </div>
        
        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <div key={sector.name} className={`bg-gradient-to-r ${sector.bgGradient} rounded-3xl p-8 section-fade`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center`}>
                          <sector.icon className="text-white w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">{sector.name}</h3>
                          <p className="text-gray-600">{sector.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {sector.products.map((product) => (
                          <div key={product.name} className={`bg-white rounded-xl p-4 border ${sector.borderColor}`}>
                            <h4 className="font-semibold text-slate-800 mb-2">{product.name}</h4>
                            <p className="text-sm text-gray-600">{product.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="hidden lg:block">
                      <img 
                        src={sector.image} 
                        alt={`${sector.name} solutions`} 
                        className="rounded-2xl shadow-lg w-full h-auto" 
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block">
                      <img 
                        src={sector.image} 
                        alt={`${sector.name} solutions`} 
                        className="rounded-2xl shadow-lg w-full h-auto" 
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-2xl flex items-center justify-center`}>
                          <sector.icon className="text-white w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800">{sector.name}</h3>
                          <p className="text-gray-600">{sector.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {sector.products.map((product) => (
                          <div key={product.name} className={`bg-white rounded-xl p-4 border ${sector.borderColor}`}>
                            <h4 className="font-semibold text-slate-800 mb-2">{product.name}</h4>
                            <p className="text-sm text-gray-600">{product.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
