import { Suspense, lazy } from 'react';
import AnimatedText from '../AnimatedText';

const ThreeModel = lazy(() => import('../ThreeModel'));

const HeroSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Daichi_Resume.pdf';
    link.download = 'Daichi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20 sm:pt-24 md:pt-0"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-teal-900/10" />
      {/* Glassmorphism floating cards */}
      <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 w-32 sm:w-48 h-16 sm:h-24 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-md rounded-2xl border border-cyan-300/20 shadow-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/4 sm:top-1/3 right-1/6 sm:right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-teal-300/10 to-emerald-400/10 backdrop-blur-md rounded-full border border-teal-300/20 shadow-2xl animate-bounce" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <AnimatedText
              animation="scale"
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 drop-shadow-2xl bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent leading-tight"
            >
              I'm a{' '}
              <span className="text-teal-300 bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Web Developer
              </span>
            </AnimatedText>
            <AnimatedText
              animation="fadeLeft"
              delay={400}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-8 sm:mb-12 drop-shadow-xl leading-relaxed"
            >
              Building the <span className="text-teal-300 drop-shadow-lg">Digital Economy</span>,
              <br className="hidden xs:block" />
              One Innovation at a Time
            </AnimatedText>
            <AnimatedText
              animation="bounce"
              delay={800}
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={handleResumeDownload}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-base sm:text-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 drop-shadow-xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative">Resume</span>
              </button>
              <button
                type="button"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-400/90 to-cyan-500/90 backdrop-blur-md border-2 border-teal-300/30 rounded-2xl text-base sm:text-xl font-bold hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 drop-shadow-xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Projects</span>
              </button>
            </AnimatedText>
          </div>

          {/* Right side - ThreeModel with Suspense */}
          <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-0">
            <div className="w-full flex justify-center items-center">
              <Suspense
                fallback={
                  <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-full flex items-center justify-center border border-teal-300/30 animate-pulse">
                    <span className="text-teal-300 text-xs sm:text-sm font-semibold text-center px-4">
                      Loading 3D Model...
                    </span>
                  </div>
                }
              >
                <ThreeModel />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
