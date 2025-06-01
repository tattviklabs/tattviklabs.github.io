import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExecutiveSummary from "@/components/executive-summary";
import CoreEngines from "@/components/core-engines";
import SectorSolutions from "@/components/sector-solutions";
import ArchitectureOverview from "@/components/architecture-overview";
import StrategicThemes from "@/components/strategic-themes";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all section-fade elements
    const elements = document.querySelectorAll('.section-fade');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <CoreEngines />
      <SectorSolutions />
      <ArchitectureOverview />
      <StrategicThemes />
      <ContactSection />
      <Footer />
    </div>
  );
}
