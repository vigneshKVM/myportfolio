import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { experience } from './data';

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Career Timeline"
        description="Impact-focused highlights from each role."
      />

      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-1.5 w-4 h-4 rounded-full bg-brand border-2 border-surface shadow-lg shadow-brand/30" />

              <div className="card hover:shadow-xl hover:shadow-brand/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.role}</h3>
                    <p className="text-brand-light font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-sm font-mono text-gray-500">{job.period}</span>
                    <span className="tag">{job.type}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((point, pi) => (
                    <li key={pi} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-brand mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
