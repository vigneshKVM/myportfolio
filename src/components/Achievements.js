import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { achievements, currentlyLearning } from './data';

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        title="Recognition & Growth"
        description="Milestones that reflect my commitment to engineering excellence."
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card text-center group hover:shadow-xl hover:shadow-brand/5"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-white font-semibold">Currently Learning</h3>
          <div className="flex-1 h-px bg-white/5" />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white font-medium text-sm">{item.topic}</span>
                </div>
                <span className="text-xs font-mono text-brand-light">{item.progress}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.progress}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-brand to-purple-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
