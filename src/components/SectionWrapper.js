import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`py-24 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ tag, title, description }) {
  return (
    <div className="mb-16">
      {tag && (
        <span className="tag mb-4 inline-block">{tag}</span>
      )}
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-subheading">{description}</p>}
    </div>
  );
}
