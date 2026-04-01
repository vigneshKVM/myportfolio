import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-surface noise-bg">
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-white/5" />
        <About />
        <div className="border-t border-white/5" />
        <Skills />
        <div className="border-t border-white/5" />
        <Projects />
        <div className="border-t border-white/5" />
        <Architecture />
        <div className="border-t border-white/5" />
        <Experience />
        <div className="border-t border-white/5" />
        <Achievements />
        <div className="border-t border-white/5" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
