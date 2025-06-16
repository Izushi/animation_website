import { Cloud, Code, Globe, Server, Terminal, Zap } from 'lucide-react';
import AnimatedText from '../AnimatedText';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <AnimatedText
          animation="bounce"
          className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl"
        >
          Technical Expertise
        </AnimatedText>

        <div className="max-w-6xl mx-auto">
          {/* Main Tech Stack Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Frontend & Backend */}
            <AnimatedText delay={200} className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-teal-300/30 shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-teal-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                    <p className="text-teal-300 text-sm">Modern Web Technologies</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Frontend */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-lg font-semibold text-yellow-300">Modern Frameworks</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Panda CSS'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-400/20 text-teal-200 rounded-full text-sm font-medium hover:bg-teal-400/30 transition-colors duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Core Web */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-semibold text-blue-300">Core Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {['JavaScript', 'HTML5', 'CSS3', 'jQuery'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm font-medium hover:bg-blue-400/30 transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
                  <p className="text-gray-300 text-sm italic">
                    "Creating responsive and interactive user experiences"
                  </p>
                </div>
              </div>
            </AnimatedText>

            {/* Backend & Infrastructure */}
            <AnimatedText delay={400} className="w-full">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-green-300/30 shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                    <p className="text-green-300 text-sm">Server-Side Technologies</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Backend Languages */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-semibold text-green-300">
                        Languages & Frameworks
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {['Golang', 'Node.js', 'PHP', 'Python', 'Express', 'REST API'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm font-medium hover:bg-green-400/30 transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cloud className="w-5 h-5 text-orange-400" />
                      <h4 className="text-lg font-semibold text-orange-300">Infrastructure</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {['Apache', 'Linux', 'Docker', 'GCP', 'AWS'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-orange-400/20 text-orange-200 rounded-full text-sm font-medium hover:bg-orange-400/30 transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
                  <p className="text-gray-300 text-sm italic">
                    "Building scalable and robust server-side solutions"
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
