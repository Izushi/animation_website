import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ThreeBackground from './components/ThreeBackground';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const section of sections) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br text-white overflow-x-hidden bg-slate-900/60 border-teal-300/20">
      <ThreeBackground />

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default App;
