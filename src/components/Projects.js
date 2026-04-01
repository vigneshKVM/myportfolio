import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { projects } from './data';

function CaseStudyCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm overflow-hidden`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.color.replace('/20', '').replace('/10', '')}`} />

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <span className="tag mb-3 inline-block">{project.tag}</span>
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.subtitle}</p>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="glass rounded-xl p-4">
            <div className="text-xs font-mono text-red-400 mb-2 uppercase tracking-wider">Problem</div>
            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">Solution</div>
            <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-brand-light hover:text-white transition-colors duration-200"
        >
          {expanded ? 'Hide Details' : 'View Architecture & Impact'}
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-white/5">
                {/* Architecture */}
                <div>
                  <div className="text-xs font-mono text-brand-light mb-3 uppercase tracking-wider">Architecture</div>
                  <ul className="space-y-2">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-brand mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Impact */}
                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">Impact</div>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        title="Architecture-Driven Projects"
        description="Not just what I built — but why, how, and the impact it created."
      />
      <div className="space-y-6">
        {projects.map((project, i) => (
          <CaseStudyCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
