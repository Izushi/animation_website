import AnimatedText from '../AnimatedText';
import SkillCard from '../SkillCard';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <AnimatedText className="text-5xl font-bold text-teal-300 mb-16 text-center drop-shadow-2xl">
          Technical Expertise
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SkillCard
            title="Frontend Technologies"
            skills={[
              'React',
              'TypeScript',
              'Three.js',
              'Tailwind CSS',
              'Next.js',
              'HTML5',
              'CSS3',
              'JavaScript',
            ]}
            delay={200}
          />
          <SkillCard
            title="Backend & Infrastructure"
            skills={[
              'Node.js',
              'PHP',
              'Laravel',
              'Express.js',
              'MySQL',
              'REST API',
              'Docker',
              'AWS',
            ]}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
