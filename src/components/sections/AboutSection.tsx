import { ExternalLink, Github } from 'lucide-react';
import AnimatedText from '../AnimatedText';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <AnimatedText className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl">
          About Me
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Enhanced profile card with data visualization elements */}
            <AnimatedText
              delay={200}
              className="w-full h-96 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl border border-teal-300/30 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100" />
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200" />
              </div>
              <div className="absolute bottom-4 right-4 space-y-1">
                <div className="w-16 h-1 bg-teal-300/60 rounded animate-pulse" />
                <div className="w-12 h-1 bg-cyan-300/60 rounded animate-pulse delay-100" />
                <div className="w-20 h-1 bg-teal-400/60 rounded animate-pulse delay-200" />
              </div>
              <div className="text-8xl font-bold text-teal-300/70 font-mono">{'<D/>'}</div>
              <div className="mt-4 text-sm text-teal-200/70 font-mono">
                developer.status: active
              </div>
            </AnimatedText>
          </div>
          <div>
            <AnimatedText
              delay={400}
              className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl"
            >
              Hi, I'm{' '}
              <span className="text-teal-300 drop-shadow-lg bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Daichi
              </span>
            </AnimatedText>
            <AnimatedText
              delay={600}
              className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed drop-shadow-xl"
            >
              A dedicated software engineer crafting next-generation financial technology solutions
              with expertise in full-stack development and modern architectures.
            </AnimatedText>
            <AnimatedText delay={800} className="flex gap-6">
              <a
                href="https://github.com/Izushi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <Github className="w-6 h-6 relative z-10" />
                <span className="font-bold relative z-10">GitHub</span>
              </a>
              <a
                href="https://dev.to/izushi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-400/90 to-cyan-500/90 backdrop-blur-md border-2 border-teal-300/30 rounded-2xl hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                <ExternalLink className="w-6 h-6 relative z-10" />
                <span className="font-bold relative z-10">Dev.to</span>
              </a>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
