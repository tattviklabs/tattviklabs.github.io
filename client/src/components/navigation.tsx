import { useState, useEffect } from "react";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-blur border-b border-gray-200/20 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-slate-800">TattvaLabs</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-gray-600 hover:text-slate-800 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('sectors')} 
              className="text-gray-600 hover:text-slate-800 transition-colors"
            >
              Sectors
            </button>
            <button 
              onClick={() => scrollToSection('architecture')} 
              className="text-gray-600 hover:text-slate-800 transition-colors"
            >
              Architecture
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-gray-600 w-6 h-6" /> : <Menu className="text-gray-600 w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button 
              onClick={() => scrollToSection('products')} 
              className="block w-full text-left text-gray-600 hover:text-slate-800 py-2"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('sectors')} 
              className="block w-full text-left text-gray-600 hover:text-slate-800 py-2"
            >
              Sectors
            </button>
            <button 
              onClick={() => scrollToSection('architecture')} 
              className="block w-full text-left text-gray-600 hover:text-slate-800 py-2"
            >
              Architecture
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-center"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
