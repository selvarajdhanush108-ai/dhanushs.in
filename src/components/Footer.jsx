import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-3xl font-black tracking-tighter text-white inline-block mb-2">
              DHA<span className="text-primary">NUSH</span> S
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Freelance developer building high-performance modern web applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/selvarajdhanush108-ai" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-s1006/" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all">
              <Linkedin size={18} />
            </a>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-sm gap-4">
          <p>© {new Date().getFullYear()} Dhanush. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> and React.js
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
