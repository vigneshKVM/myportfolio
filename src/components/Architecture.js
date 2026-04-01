import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper, { SectionHeader } from './SectionWrapper';
import { architectureInsights } from './data';

export default function Architecture() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="architecture">
      <SectionHeader
        title="How I Think About Systems"
        description="The mental models and principles that guide my engineering decisions."
      />

      {/* Visual diagram hint */}
      <div className="glass rounded-2xl p-6 mb-10 border border-brand/20">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono">
          {['Client', '→', 'API Gateway', '→', 'Microservices', '→', 'Message Queue', '→', 'Database'].map((item, i) => (
            <span
              key={i}
              className={item === '→' ? 'text-gray-600' : 'px-3 py-1.5 glass rounded-lg text-brand-light border border-brand/20'}
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-4 font-mono">
          // simplified microservices request flow
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-6">
        {architectureInsights.map((insight, i) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="card group hover:shadow-xl hover:shadow-brand/5"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">{insight.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-lg">{insight.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{insight.description}</p>
              </div>
            </div>
            <ul className="space-y-2 pl-2 border-l border-brand/20">
              {insight.points.map((point, pi) => (
                <li key={pi} className="text-sm text-gray-400 pl-3">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
