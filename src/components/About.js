import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { personalInfo } from './data';

const traits = [
  { icon: '🧠', title: 'System Thinker', desc: 'I think in systems, not features. Every decision considers scale, maintainability, and team velocity.' },
  { icon: '🏗️', title: 'Architecture-First', desc: 'Before writing code, I design the architecture. Proper boundaries prevent future rewrites.' },
  { icon: '👥', title: 'Engineering Leader', desc: 'Led teams, mentored engineers, and built cultures of code quality and ownership.' },
  { icon: '🚀', title: 'Ownership Mindset', desc: 'I treat every system I build as if I will maintain it for the next 5 years.' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="about">
      <SectionHeader
        title="Engineer. Architect. Builder."
        description="The story behind the systems I build."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Story */}
        <div ref={ref} className="space-y-5">
          {[
            `With <strong class="text-white">${personalInfo.yearsOfExperience} years</strong> of hands-on experience in the MERN stack, I've evolved from writing features to designing the systems that power them.`,
            `I've architected <strong class="text-white">microservices platforms</strong> and <strong class="text-white">micro frontend systems</strong> using Module Federation — enabling independent team deployments and dramatically faster release cycles.`,
            `As a <strong class="text-white">team lead</strong>, I've mentored engineers, introduced TDD practices, and built code review cultures that reduced production bugs by 50%. I believe great engineering is as much about people as it is about code.`,
            `I work closely with <strong class="text-white">QA, DevOps, and Product</strong> teams — because scalable systems require cross-functional thinking, not just technical excellence.`,
            `My current focus: deepening my knowledge of <strong class="text-white">distributed systems, AWS architecture, and system design</strong> — positioning myself as a Solution Architect who can bridge business problems with technical solutions.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-gray-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>

        {/* Trait cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card group hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="text-2xl mb-3">{trait.icon}</div>
              <h3 className="text-white font-semibold mb-2">{trait.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
