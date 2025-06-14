import AnimatedText from '../AnimatedText';
import ThreeModel from '../ThreeModel';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-teal-900/10" />
      {/* Glassmorphism floating cards */}
      <div className="absolute bottom-32 right-16 w-48 h-24 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-md rounded-2xl border border-cyan-300/20 shadow-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-teal-300/10 to-emerald-400/10 backdrop-blur-md rounded-full border border-teal-300/20 shadow-2xl animate-bounce" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <AnimatedText 
              animation="scale"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 drop-shadow-2xl bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent"
            >
              I'm a{' '}
              <span className="text-teal-300 bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Web Developer
              </span>
            </AnimatedText>
            <AnimatedText
              animation="fadeLeft"
              delay={400}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-12 drop-shadow-xl"
            >
              Building the <span className="text-teal-300 drop-shadow-lg">Digital Economy</span>,
              One Innovation at a Time
            </AnimatedText>
            <AnimatedText
              animation="bounce"
              delay={800}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <button
                type="button"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 drop-shadow-xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative">Resume</span>
              </button>
              <button
                type="button"
                className="group px-8 py-4 bg-gradient-to-r from-teal-400/90 to-cyan-500/90 backdrop-blur-md border-2 border-teal-300/30 rounded-2xl text-xl font-bold hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 drop-shadow-xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Projects</span>
              </button>
            </AnimatedText>
          </div>

          {/* Right side - ThreeModel */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-md">
              <ThreeModel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
