import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from './data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left — Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="flex justify-center md:justify-start mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new challenges & collaborations
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.div {...fadeUp(0.2)} className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-lg md:text-xl text-gray-400 font-medium">{personalInfo.title}</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-base md:text-lg text-gray-500 font-mono max-w-xl mb-10 leading-relaxed mx-auto md:mx-0"
            >
              &ldquo;{personalInfo.tagline}&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Case Studies <FiArrowRight />
              </a>
              <a href={personalInfo.resume} download className="btn-ghost flex items-center gap-2">
                <FiDownload /> Resume
              </a>
              <a href="#contact" className="btn-ghost flex items-center gap-2">
                <FiMail /> Contact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.5)} className="flex justify-center md:justify-start gap-3 mb-12">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-brand/30 transition-all duration-200">
                <FaGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-brand/30 transition-all duration-200">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-3 glass rounded-xl text-gray-400 hover:text-white hover:border-brand/30 transition-all duration-200">
                <FiMail size={20} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap justify-center md:justify-start gap-8">
              {[
                { value: personalInfo.yearsOfExperience, label: 'Years Experience' },
                { value: '6+', label: 'Case Studies' },
                { value: '10+', label: 'Systems Built' },
                { value: '5+', label: 'Engineers Mentored' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/40 to-purple-500/20 blur-2xl" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-brand/30" />
              {/* Image */}
              <img
                src={`${process.env.PUBLIC_URL}/vignesh.jpg`}
                alt={personalInfo.name}
                className="relative w-full h-full rounded-full object-cover object-top border-4 border-surface"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
