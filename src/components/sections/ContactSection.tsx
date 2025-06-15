import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedText from '../AnimatedText';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-sm" />
      <div className="container mx-auto relative z-10">
        <AnimatedText
          animation="fadeUp"
          className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl"
        >
          Get In Touch
        </AnimatedText>
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            delay={200}
            className="bg-slate-800/80 backdrop-blur-sm p-12 rounded-2xl shadow-2xl border border-teal-300/20"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-xl">
                  Let's work together
                </h3>
                <p className="text-xl mb-8 leading-relaxed drop-shadow-lg">
                  I'm always interested in new opportunities and exciting projects. Let's create
                  something amazing together!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-teal-300" />
                    <span>d.izushi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-teal-300" />
                    <span>+1 (236) 995-8601</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-teal-300" />
                    <span>Vancouver, Canada</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-teal-300/30 rounded-lg focus:border-teal-300 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-teal-300/30 rounded-lg focus:border-teal-300 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-teal-300/30 rounded-lg focus:border-teal-300 focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg text-xl font-bold hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
