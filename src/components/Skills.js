import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { skills } from './data';

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-xs font-mono text-brand-light">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand to-purple-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = ['All', ...skills.map((s) => s.category)];
  const filtered = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills">
      <SectionHeader
        title="Technical Expertise"
        description="Grouped by domain — from frontend to cloud infrastructure."
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-brand text-white shadow-lg shadow-brand/25'
                : 'glass text-gray-400 hover:text-white hover:border-brand/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="text-white font-semibold">{group.category}</h3>
            </div>
            {group.items.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                inView={inView}
                delay={gi * 0.1 + si * 0.08}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
