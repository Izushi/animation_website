import {
  AlertCircle,
  Briefcase,
  Building,
  Clock,
  Code,
  FileText,
  Folder,
  Star,
  Terminal,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedText from '../AnimatedText';

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ Welcome to Experience Terminal',
    '$ Type "npm run dev" to view work history',
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<'current' | 'previous'>('current');
  const [showHoverMessage, setShowHoverMessage] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (terminalInput.trim() === '') return;

    const newHistory = [...terminalHistory, `$ ${terminalInput}`];

    if (terminalInput.trim() === 'npm run dev') {
      setIsTyping(true);
      setTerminalHistory([...newHistory, '> Loading work experience...']);

      setTimeout(() => {
        setTerminalHistory((prev) => [...prev, '> Fetching career timeline...']);
        setTimeout(() => {
          setTerminalHistory((prev) => [...prev, '> Opening experience dashboard...']);
          setTimeout(() => {
            setIsTyping(false);
            openModal();
          }, 1000);
        }, 1000);
      }, 1500);
    } else if (terminalInput.trim() === 'clear') {
      setTerminalHistory(['$ Welcome to Experience Terminal']);
    } else {
      setTerminalHistory([...newHistory, `bash: ${terminalInput}: command not found`]);
    }

    setTerminalInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/5 via-transparent to-cyan-900/5" />
      <div className="container mx-auto relative z-10">
        <AnimatedText
          animation="fadeRight"
          className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl"
        >
          Experience
        </AnimatedText>

        <div className="max-w-4xl mx-auto">
          {/* VSCode Style Editor */}
          <AnimatedText delay={200} className="w-full">
            <div
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-teal-300/30 shadow-2xl overflow-hidden relative group cursor-pointer"
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }
                hoverTimeoutRef.current = window.setTimeout(() => {
                  setShowHoverMessage(true);
                }, 400);
              }}
              onMouseLeave={() => {
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                  hoverTimeoutRef.current = null;
                }
                setShowHoverMessage(false);
              }}
            >
              {/* VSCode Title Bar */}
              <div className="flex items-center justify-between p-3 bg-slate-700/80 border-b border-slate-600/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="text-xs text-gray-300 font-mono">experience.tsx</div>
                <div className="w-12" />
              </div>

              {/* Tab Bar */}
              <div className="flex bg-slate-700/60 border-b border-slate-600/50">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-600/50 border-r border-slate-500/50">
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-200 font-mono">experience.tsx</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-slate-600/30 border-r border-slate-500/50">
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400 font-mono">terminal</span>
                </div>
              </div>

              {/* Editor Content */}
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-12 bg-slate-700/40 border-r border-slate-600/50 flex flex-col items-center py-3 space-y-3">
                  <Folder className="w-5 h-5 text-gray-400" />
                  <FileText className="w-5 h-5 text-orange-400" />
                  <Terminal className="w-5 h-5 text-green-400" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                  {/* Code Editor */}
                  <div className="flex-1 p-4 bg-slate-800/50 font-mono text-sm overflow-y-auto">
                    <div className="space-y-1 text-gray-300">
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">currentExperience</span> = {'{'}
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">position</span>:{' '}
                        <span className="text-green-400">'Full-Stack Developer'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">company</span>:{' '}
                        <span className="text-green-400">'X tech management'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">location</span>:{' '}
                        <span className="text-green-400">'Tokyo, Japan'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">period</span>:{' '}
                        <span className="text-green-400">'Feb 2025 - Present'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">industry</span>:{' '}
                        <span className="text-green-400">'Educational Technology'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">methodology</span>:{' '}
                        <span className="text-green-400">'Agile/Scrum'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-red-400">frontend</span>: [
                      </div>
                      <div className="ml-8">
                        <span className="text-green-400">'Next.js'</span>,{' '}
                        <span className="text-green-400">'TypeScript'</span>,{' '}
                        <span className="text-green-400">'Tailwind CSS'</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-green-400">'Panda CSS'</span>,{' '}
                        <span className="text-green-400">'HTML'</span>
                      </div>
                      <div className="ml-4">],</div>
                      <div className="ml-4">
                        <span className="text-red-400">backend</span>: [
                      </div>
                      <div className="ml-8">
                        <span className="text-green-400">'Golang'</span>,{' '}
                        <span className="text-green-400">'PostgreSQL'</span>,{' '}
                        <span className="text-green-400">'REST API'</span>
                      </div>
                      <div className="ml-4">],</div>
                      <div className="ml-4">
                        <span className="text-red-400">devops</span>: [
                      </div>
                      <div className="ml-8">
                        <span className="text-green-400">'GCP'</span>,{' '}
                        <span className="text-green-400">'Terraform'</span>,{' '}
                        <span className="text-green-400">'Docker'</span>
                      </div>
                      <div className="ml-4">],</div>
                      <div className="ml-4">
                        <span className="text-red-400">focus</span>:{' '}
                        <span className="text-green-400">
                          'Educational tools for university students'
                        </span>
                      </div>
                      <div>{'};'}</div>
                      <div className="mt-3" />
                      <div>
                        <span className="text-purple-400">export default</span>{' '}
                        <span className="text-blue-400">currentExperience</span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal */}
                  <div className="h-[200px] bg-black/80 border-t border-slate-600/50 flex flex-col">
                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-700/60 border-b border-slate-600/50">
                      <Terminal className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-300 font-mono">Terminal</span>
                      <div className="flex-1" />
                      <div className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 px-3 py-1 rounded-full text-xs font-bold text-pink-200 animate-pulse border border-pink-400/30">
                        ✨ Type: npm run dev
                      </div>
                    </div>
                    <div
                      ref={terminalRef}
                      className="flex-1 p-3 font-mono text-sm text-green-400 overflow-y-auto"
                    >
                      {terminalHistory.map((line, index) => (
                        <div
                          key={`exp-terminal-line-${index}-${line.slice(0, 10)}`}
                          className="mb-1"
                        >
                          {line}
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex items-center">
                          <span className="animate-pulse">▋</span>
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleTerminalSubmit} className="flex items-center px-3 pb-2">
                      <span className="text-green-400 font-mono text-sm mr-2">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none"
                        placeholder="Type 'npm run dev' to start..."
                        disabled={isTyping}
                      />
                    </form>
                  </div>
                </div>
              </div>

              {/* Hover Message Popup */}
              {showHoverMessage && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
                  <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-transparent bg-clip-padding rounded-2xl p-4 shadow-2xl relative overflow-hidden max-w-sm animate-in fade-in-0 zoom-in-90 duration-1000 transition-all ease-in-out">
                    {/* Animated background elements */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-1 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100" />
                      <div className="absolute top-3 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-300" />
                      <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-500" />
                      <div className="absolute bottom-1 right-2 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-700" />
                    </div>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="relative">
                        <AlertCircle className="w-6 h-6 text-yellow-400 animate-pulse" />
                        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                      </div>

                      <div className="flex-1">
                        <p className="text-lg font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-1">
                          Interactive Mode Locked!
                        </p>
                        <div className="flex flex-wrap items-center gap-1 text-xs">
                          <span className="text-yellow-300 font-semibold">✨ Run</span>
                          <code className="bg-black/50 px-2 py-0.5 rounded font-mono text-green-300 border border-green-400/30 text-xs">
                            npm run dev
                          </code>
                          <span className="text-yellow-300 font-semibold">to unlock! 🚀</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full shadow-lg">
                        <span className="text-white font-bold text-xs">🎯 Try it!</span>
                      </div>
                    </div>

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 -z-10 blur-sm" />
                  </div>
                </div>
              )}
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Detailed Experience Modal */}
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
          <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border border-teal-300/30 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Chrome Browser Header - Fixed */}
            <div className="sticky top-0 z-30 bg-gray-200 backdrop-blur-sm rounded-t-3xl border-b border-gray-300">
              {/* Chrome Tabs Bar */}
              <div className="flex bg-gray-200 rounded-t-3xl">
                {/* Browser Controls */}
                <div className="flex items-center px-4 py-2">
                  <div className="flex space-x-2 mr-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors duration-200"
                      aria-label="Close window"
                    />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>

                {/* Current Experience Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab('current')}
                  className={`relative border-r border-gray-300 px-4 py-2 flex items-center gap-2 min-w-0 max-w-xs transition-colors duration-200 ${
                    activeTab === 'current'
                      ? 'bg-white text-gray-800 rounded-t-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-4 h-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-sm flex items-center justify-center">
                    <Briefcase className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm font-medium truncate">2025 - Current</span>
                </button>

                {/* Previous Experience Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab('previous')}
                  className={`relative border-r border-gray-300 px-4 py-2 flex items-center gap-2 min-w-0 max-w-xs transition-colors duration-200 ${
                    activeTab === 'previous'
                      ? 'bg-white text-gray-800 rounded-t-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-sm flex items-center justify-center">
                    <Building className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-sm font-medium truncate">2021 - 2024</span>
                </button>
              </div>

              {/* Address Bar */}
              <div className="px-4 py-2 bg-gray-100 border-t border-gray-300">
                <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 border border-gray-300 shadow-sm">
                  <div className="w-4 h-4 text-green-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <title>Secure Connection</title>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-mono flex-1">
                    {activeTab === 'current'
                      ? 'https://daichi.dev/experience/current'
                      : 'https://daichi.dev/experience/2021-2024'}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="p-1 rounded hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Bookmark"
                    >
                      <Star className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Experience Header */}
              <div className="pt-6 pb-6 px-6 bg-gradient-to-r from-teal-600/20 to-cyan-600/20">
                <div className="flex flex-col items-center">
                  {activeTab === 'current' ? (
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-teal-300/50 shadow-xl mb-4">
                      <img
                        src="/images/current-profile.jpg"
                        alt="Current Position"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-300/50 shadow-xl mb-4">
                      <img
                        src="/images/prev-profile.jpg"
                        alt="Previous Experience"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-white mb-2">Work Experience</h3>
                  <p className="text-teal-300 font-medium text-lg">
                    {activeTab === 'current' ? 'Current Position' : 'Previous Experience'}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {activeTab === 'current'
                      ? 'Building educational tools since 2025'
                      : 'Building scalable solutions 2021-2024'}
                  </p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 mt-4" />
                </div>
              </div>

              <div className="p-6 space-y-8">
                {activeTab === 'current' ? (
                  // Current Experience (2025 - Present)
                  <>
                    {/* Career Timeline */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Current Position
                      </h4>

                      <div className="relative pl-8 border-l-2 border-teal-400/30">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full animate-pulse" />
                        <div className="bg-slate-700/30 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="text-xl font-bold text-white">Full-Stack Developer</h5>
                              <p className="text-teal-300 font-medium">
                                X tech management – Tokyo, Japan
                              </p>
                              <p className="text-gray-400 text-sm">Feb. 2025 – Present</p>
                            </div>
                            <div className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm animate-pulse">
                              Current
                            </div>
                          </div>

                          <p className="text-gray-300 mb-4 leading-relaxed">
                            Joined an agile team developing educational tools (textbooks and video
                            content) for university students. Working across the full development
                            lifecycle with modern technologies and cloud infrastructure.
                          </p>

                          {/* Key Responsibilities */}
                          <div className="space-y-3">
                            <h6 className="text-teal-300 font-semibold">Key Responsibilities:</h6>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Worked across the full development lifecycle: planning, basic
                                  design, detailed design, implementation, testing, maintenance, and
                                  operations
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Utilized Scrum methodology with active participation in sprint
                                  planning, daily standups, and retrospectives
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Built frontend applications using Next.js, TypeScript, Tailwind
                                  CSS, and Panda CSS
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Developed backend APIs using Go (Golang), with infrastructure
                                  managed via Terraform and deployed on Google Cloud Platform (GCP)
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Containerized services using Docker and managed relational data
                                  with PostgreSQL
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Tech Stack
                      </h4>
                      <div className="ml-7 space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Frontend</h5>
                          <div className="flex flex-wrap gap-2">
                            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Panda CSS', 'HTML'].map(
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
                            {['Golang', 'PostgreSQL', 'REST API'].map((tech) => (
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
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">
                            DevOps & Cloud
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {['GCP', 'Terraform', 'Docker', 'Scrum'].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-orange-400/20 text-orange-200 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industry Focus */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Industry Focus
                      </h4>
                      <p className="text-gray-300 leading-relaxed ml-7">
                        Specializing in educational technology, developing comprehensive learning
                        platforms that serve university students. Focus on creating scalable,
                        user-friendly educational tools with modern web technologies and
                        cloud-native architecture.
                      </p>
                    </div>
                  </>
                ) : (
                  // Previous Experience (2021 - 2024)
                  <>
                    {/* Career Timeline */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Previous Experience
                      </h4>

                      <div className="relative pl-8 border-l-2 border-teal-400/30">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
                        <div className="bg-slate-700/30 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="text-xl font-bold text-white">Web Developer</h5>
                              <p className="text-blue-300 font-medium">GIZMO</p>
                              <p className="text-gray-400 text-sm">
                                Dec 2021 - Jun 2024 (32 months)
                              </p>
                            </div>
                            <div className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                              Completed
                            </div>
                          </div>

                          <p className="text-gray-300 mb-4 leading-relaxed">
                            Architected and deployed scalable web services for the public gambling
                            industry, leveraging modern LAMP stack architecture and RESTful API
                            design principles.
                          </p>

                          {/* Key Achievements */}
                          <div className="space-y-3">
                            <h6 className="text-blue-300 font-semibold">Key Achievements:</h6>
                            <ul className="space-y-2 text-gray-300">
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Designed and implemented scalable web architecture serving 10,000+
                                  daily users
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Optimized database queries resulting in 40% performance
                                  improvement
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Led full-stack development using PHP, MySQL, JavaScript, and
                                  Apache
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                <span>
                                  Implemented RESTful APIs and integrated third-party payment
                                  systems
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Tech Stack
                      </h4>
                      <div className="ml-7 space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Backend</h5>
                          <div className="flex flex-wrap gap-2">
                            {['PHP', 'MySQL', 'Apache', 'Linux'].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-400/20 text-blue-200 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">Frontend</h5>
                          <div className="flex flex-wrap gap-2">
                            {['JavaScript', 'HTML5', 'CSS3', 'jQuery'].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-purple-400/20 text-purple-200 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-gray-300 mb-2">
                            DevOps & Tools
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {['Git', 'Docker', 'REST API', 'Payment Integration'].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-green-400/20 text-green-200 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Industry Impact */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                        <Building className="w-5 h-5" />
                        Industry Impact
                      </h4>
                      <p className="text-gray-300 leading-relaxed ml-7">
                        Specialized in developing robust web applications for the gambling industry,
                        ensuring high availability, security, and compliance with regulatory
                        standards. Successfully managed production environments handling thousands
                        of concurrent users while maintaining 99.9% uptime.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
