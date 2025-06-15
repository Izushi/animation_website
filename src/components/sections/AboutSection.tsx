import {
  Award,
  Calendar,
  Code,
  Coffee,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Star,
  X,
} from 'lucide-react';
import { useState } from 'react';
import AnimatedText from '../AnimatedText';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <AnimatedText
          animation="rotate"
          className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl"
        >
          About Me
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            {/* Profile Card */}
            <AnimatedText delay={200} className="w-full max-w-md mx-auto">
              <button
                type="button"
                onClick={openModal}
                aria-label="Open profile modal"
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-teal-300/30 shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-teal-300/50 group w-full text-left"
              >
                {/* Profile Image */}
                <div className="relative p-8 pb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-teal-300/50 shadow-xl group-hover:border-teal-300/70 transition-colors duration-300">
                    <img
                      src="/images/000041 2.JPG"
                      alt="Daichi Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="px-8 pb-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                    Daichi Izushi
                  </h3>
                  <p className="text-teal-300 font-medium text-lg mb-3">Full Stack Developer</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Passionate about creating innovative web experiences with modern technologies
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-slate-700/30 rounded-xl p-3 group-hover:bg-slate-700/50 transition-colors duration-300">
                      <div className="text-lg font-bold text-teal-400">3+</div>
                      <div className="text-xs text-gray-400">Years</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-3 group-hover:bg-slate-700/50 transition-colors duration-300">
                      <div className="text-lg font-bold text-teal-400">50+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-xl p-3 group-hover:bg-slate-700/50 transition-colors duration-300">
                      <div className="text-lg font-bold text-teal-400">15+</div>
                      <div className="text-xs text-gray-400">Skills</div>
                    </div>
                  </div>

                  {/* Location & Status */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-teal-400" />
                      <span className="text-sm">Vancouver, Canada</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm">Available for opportunities</span>
                    </div>
                  </div>

                  {/* Click to view more */}
                  <div className="text-teal-300 text-sm font-medium group-hover:text-teal-200 transition-colors duration-300">
                    Click to view full profile →
                  </div>
                </div>
              </button>
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
              A passionate full-stack developer with 3 years of experience building scalable web
              applications. I specialize in modern web technologies and creating efficient,
              user-friendly digital solutions.
            </AnimatedText>
            <AnimatedText delay={800} className="text-lg leading-relaxed mb-8 text-gray-300">
              With expertise in React, TypeScript and backend technologies, I bring ideas to life
              through clean code and thoughtful design. Currently working with educational
              technology and always eager to learn new technologies and tackle challenging problems.
            </AnimatedText>
            <AnimatedText delay={1000} className="flex gap-6">
              <a
                href="https://github.com/Izushi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <Github className="w-6 h-6 relative z-10" />
                <span className="font-bold relative z-10">View Projects</span>
              </a>
              <a
                href="https://www.linkedin.com/in/daichi-izushi-98793531b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <Linkedin className="w-6 h-6 relative z-10" />
                <span className="font-bold relative z-10">LinkedIn</span>
              </a>
            </AnimatedText>
          </div>
        </div>
      </div>

      {/* Detailed Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
            onKeyDown={(e) => e.key === 'Escape' && closeModal()}
            role="button"
            tabIndex={0}
          />

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-teal-300/30 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-300" />
            </button>

            {/* Window Controls */}
            <div className="absolute top-4 left-4 flex space-x-2 z-10">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100" />
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200" />
            </div>

            {/* Profile Header */}
            <div className="pt-12 pb-6 px-6 bg-gradient-to-r from-teal-600/20 to-cyan-600/20">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-teal-300/50 shadow-xl mb-4">
                  <img
                    src="/images/000041 2.JPG"
                    alt="Daichi Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Daichi Izushi</h3>
                <p className="text-teal-300 font-medium text-lg">Full Stack Developer</p>
                <p className="text-gray-400 text-sm mt-1">
                  Building the future, one line of code at a time
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 mt-4" />
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-teal-400">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
                <div className="text-center bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-teal-400">50+</div>
                  <div className="text-xs text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center bg-slate-700/30 rounded-xl p-4">
                  <div className="text-2xl font-bold text-teal-400">15+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </h4>
                <div className="space-y-2 ml-7">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>Vancouver, Canada (PST)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>Available for full-time opportunities</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-teal-400" />
                    <span>d.izushi@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  About Me
                </h4>
                <p className="text-gray-300 leading-relaxed ml-7">
                  Full-stack developer with 3 years of experience creating web applications across
                  different industries. I specialize in React, TypeScript, PHP, and modern web
                  technologies. Currently working in educational technology, building tools for
                  university students. Always eager to learn new technologies and tackle challenging
                  problems.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Experience
                </h4>
                <div className="space-y-4 ml-7">
                  <div className="border-l-2 border-teal-400/30 pl-4">
                    <h5 className="font-semibold text-white">Full-Stack Developer</h5>
                    <p className="text-teal-300 text-sm">X tech management • Feb 2025 - Present</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Developing educational tools for university students using Next.js,
                      TypeScript, Golang, and cloud technologies with Agile/Scrum methodology.
                    </p>
                  </div>
                  <div className="border-l-2 border-teal-400/30 pl-4">
                    <h5 className="font-semibold text-white">Web Developer</h5>
                    <p className="text-teal-300 text-sm">GIZMO • Dec 2021 - Jun 2024</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Built scalable web services for gambling industry with 10,000+ daily users
                      using PHP, MySQL, and LAMP stack architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Tech Stack
                </h4>
                <div className="ml-7 space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-400/20 text-teal-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Backend</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Golang', 'Node.js', 'PHP', 'Python', 'Express', 'REST API'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Database & Cloud</h5>
                    <div className="flex flex-wrap gap-2">
                      {['MySQL', 'PostgreSQL', 'GCP', 'AWS', 'Terraform', 'Docker', 'Git'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-orange-400/20 text-orange-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h4>
                <div className="ml-7">
                  <h5 className="font-semibold text-white">Bachelor's Degree in Biology</h5>
                  <p className="text-teal-300 text-sm">University • 2018 - 2022</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Studied biological sciences and research methodologies, later transitioned to
                    software development.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Interests & Hobbies
                </h4>
                <div className="flex flex-wrap gap-2 ml-7">
                  {['📸 Photography', '🎨 Painting', '🏃‍♂️ Jogging', '🍳 Cooking'].map((hobby) => (
                    <span
                      key={hobby}
                      className="px-3 py-1 bg-teal-400/20 text-teal-200 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-teal-300">Connect With Me</h4>
                <div className="grid grid-cols-2 gap-3 ml-7">
                  <a
                    href="https://github.com/Izushi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">GitHub</span>
                  </a>
                  <a
                    href="mailto:d.izushi@gmail.com"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">Email</span>
                  </a>
                  <a
                    href="https://dev.to/izushi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">DEV.to</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daichi-izushi-98793531b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
