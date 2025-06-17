import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-teal-300/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-300 truncate">
            Daichi's Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
              <button
                type="button"
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 text-sm lg:text-base ${
                  activeSection === section ? 'text-teal-300' : 'text-white hover:text-teal-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-teal-300/20 hover:bg-slate-700/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-teal-300" />
            ) : (
              <Menu className="w-5 h-5 text-teal-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl border border-teal-300/20 shadow-2xl">
              <div className="py-3">
                {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
                  <button
                    type="button"
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className={`w-full text-left px-6 py-3 capitalize transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-teal-300 bg-teal-400/10'
                        : 'text-white hover:text-teal-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
