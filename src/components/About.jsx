import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Zap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and optimized solutions that stand the test of time."
    },
    {
      icon: <Users className="text-secondary" size={32} />,
      title: "Client-Centric",
      description: "Focused on solving real business problems with technology, not just writing lines of code."
    },
    {
      icon: <Zap className="text-accent" size={32} />,
      title: "Fast Delivery",
      description: "Agile methodology ensuring quick turnarounds without compromising on quality."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">DHANUSH</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm a passionate freelance developer dedicated to pushing the boundaries of what's possible on the web. 
            With an eye for design and a mind for architecture, I create digital experiences that leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
