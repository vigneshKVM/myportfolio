import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from './data';

const contactLinks = [
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/vigneshKVM',
    href: personalInfo.github,
    color: 'hover:border-gray-500/50 hover:shadow-gray-500/10',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vignesh-moorthy',
    href: personalInfo.linkedin,
    color: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="contact">
      <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm text-gray-500 mb-4 inline-block uppercase tracking-widest"
        >
          Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-heading"
        >
          Let&apos;s Build Something{' '}
          <span className="gradient-text">Scalable</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Open to collaborations, interesting problems, and technical discussions. Let&apos;s talk about systems, scale, and impact.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={`card flex flex-col items-center text-center gap-3 hover:shadow-xl ${link.color} transition-all duration-300 group`}
          >
            <div className="p-3 glass rounded-xl text-gray-400 group-hover:text-white transition-colors">
              {link.icon}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{link.label}</div>
              <div className="text-gray-500 text-xs mt-0.5 break-all">{link.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <a href={personalInfo.resume} download className="btn-primary flex items-center gap-2">
          Download Resume <FiArrowRight />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
