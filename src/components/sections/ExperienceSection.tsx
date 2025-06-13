import AnimatedText from '../AnimatedText';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/5 via-transparent to-cyan-900/5" />
      <div className="container mx-auto relative z-10">
        <AnimatedText className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl">
          Experience
        </AnimatedText>
        <AnimatedText
          delay={200}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-teal-300/20 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Terminal-like header */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <div className="absolute top-4 right-4 text-xs text-teal-300/60 font-mono">
            experience.log
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-4 left-4 space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="text-xs text-green-400 font-mono">Production Ready</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100" />
              <div className="text-xs text-blue-400 font-mono">32 Months Active</div>
            </div>
          </div>

          <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl font-mono">
            {'> '}
            <span className="text-teal-300">Web Developer</span>
          </h3>
          <p className="text-teal-300 text-xl md:text-2xl font-semibold mb-8 drop-shadow-lg font-mono">
            {'// '} Dec 2021 - Jun 2024
          </p>
          <div className="space-y-4">
            <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-lg">
              Architected and deployed scalable web services for the public gambling industry,
              leveraging modern LAMP stack architecture and RESTful API design principles.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-teal-400/10 backdrop-blur-sm rounded-lg p-4 border border-teal-300/20">
                <div className="text-teal-300 font-semibold mb-2">Tech Stack</div>
                <div className="text-sm text-teal-100">LAMP, REST API, MySQL</div>
              </div>
              <div className="bg-cyan-400/10 backdrop-blur-sm rounded-lg p-4 border border-cyan-300/20">
                <div className="text-cyan-300 font-semibold mb-2">Role Impact</div>
                <div className="text-sm text-cyan-100">Full-stack Architecture</div>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
};

export default ExperienceSection;
