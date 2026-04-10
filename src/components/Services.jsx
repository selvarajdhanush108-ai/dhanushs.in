import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} className="text-primary group-hover:text-white transition-colors" />,
      title: "Business Websites",
      description: "High-performance websites tailored to your brand identity, designed to engage users and drive conversions.",
      features: ["Custom Design", "SEO Optimized", "CMS Integration"]
    },
    {
      icon: <Layout size={40} className="text-secondary group-hover:text-white transition-colors" />,
      title: "Landing Pages",
      description: "High-converting landing pages built for marketing campaigns with strong calls-to-action and tracking capabilities.",
      features: ["A/B Testing Ready", "Fast Loading", "Analytics Setup"]
    },
    {
      icon: <Smartphone size={40} className="text-accent group-hover:text-white transition-colors" />,
      title: "Web Applications",
      description: "Complex, scalable web apps with rich interactive features, complex routing, and sophisticated state management.",
      features: ["React/Next.js", "API Development", "Real-time Features"]
    },
    {
      icon: <Database size={40} className="text-blue-400 group-hover:text-white transition-colors" />,
      title: "Backend Solutions",
      description: "Robust server-side architecture, API development, and database design for demanding digital products.",
      features: ["Node.js/Express", "Database Design", "Cloud Deployment"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-[#0f0f13]">
       <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I <span className="text-gradient">Do</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I offer a wide range of digital services to help your business grow and stand out in the crowded online space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500 -mr-10 -mt-10"></div>
              
              <div className="mb-6 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:mr-3">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
