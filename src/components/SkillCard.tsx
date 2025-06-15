import AnimatedText from './AnimatedText';

interface SkillCardProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard = ({ title, skills, delay }: SkillCardProps) => (
  <AnimatedText
    delay={delay}
    className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-teal-300/20 hover:border-teal-300/40 transition-all duration-300 hover:transform hover:scale-105"
  >
    <h3 className="text-2xl font-bold text-teal-300 mb-4 drop-shadow-lg">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string) => (
        <span
          key={skill}
          className="px-3 py-1 bg-teal-300/20 text-teal-100 rounded-full text-sm hover:bg-teal-300/30 transition-colors duration-200 drop-shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </AnimatedText>
);

export default SkillCard;
