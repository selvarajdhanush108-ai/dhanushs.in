import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Developer", "Freelancer", "Problem Solver", "Creative Designer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, typingSpeed, loopNum]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <div className="px-4 py-2 rounded-full glass inline-flex items-center gap-2 mb-6 text-sm font-medium text-primary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Available for new projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Hi, I'm <span className="text-gradient">Dhanush</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 h-12">
            <span className="text-gray-300">I am a </span>
            <span className="text-accent">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl">
            I build modern, high-performance websites and applications that convert visitors into customers and solve real business problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-4 rounded-full bg-primary hover:bg-primary/80 text-white font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full glass border border-white/20 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-black/80 to-background flex items-center justify-center relative">
                <div className="text-6xl font-black text-white/5 opacity-50 absolute rotate-[-45deg] select-none">KRATOZ</div>
                <div className="w-40 h-40 rounded-2xl border border-white/10 flex flex-col gap-2 p-4 rotate-12 hover:rotate-0 transition-transform duration-500 shadow-2xl glass bg-[#0a0a0a]/80 z-10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex gap-1.5 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mt-4 space-y-3 relative z-10">
                    <div className="h-2 w-full bg-primary/40 rounded"></div>
                    <div className="h-2 w-4/5 bg-secondary/40 rounded"></div>
                    <div className="h-2 w-full bg-accent/40 rounded"></div>
                    <div className="h-2 w-3/5 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -right-6 glass px-4 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">R</div>
              <div>
                <div className="text-xs text-gray-400"></div>
                <div className="text-sm font-bold text-white">React & Flutter Developer</div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-10 -left-6 glass px-4 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
              <div className="text-yellow-400 flex">
                {'★'.repeat(5)}
              </div>
              <div className="text-sm font-bold text-white">100% Success</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
