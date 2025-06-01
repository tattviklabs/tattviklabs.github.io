import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Intelligence That Works,
              </span><br />
              <span className="text-blue-200">Wherever You Do</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              <span className="font-semibold text-white">Modular Intelligence for Complex Enterprises.</span> 
              Delivering powerful AI Operating System for factories, ports, railways, hospitals, defense networks, 
              and institutions with <span className="font-semibold text-white">trust, transparency, and tactical impact</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('products')} 
                className="bg-white text-slate-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                size="lg"
              >
                Explore Products
              </Button>
              <Button 
                onClick={() => scrollToSection('architecture')} 
                className="glass-effect text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border-white/20"
                variant="outline"
                size="lg"
              >
                View Architecture
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Modern data center with blue lighting" 
              className="rounded-2xl shadow-2xl w-full h-auto opacity-90" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
