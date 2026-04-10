import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:dhanushselvaraj@codux.fun?subject=New message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#0f0f13]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Talk</span></h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Reach out below and let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-10">
              Fill out the form and I will get back to you within 24 hours. Alternatively, you can reach me directly via email or WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Email Me</h4>
                  <a href="mailto:dev@dhanushs.in" className="text-lg text-white group-hover:text-primary transition-colors">dev@dhanushs.in</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">WhatsApp</h4>
                  <a href="https://wa.me/919344221217" target="_blank" rel="noreferrer" className="text-lg text-white group-hover:text-green-500 transition-colors">+91 9344221217</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Location</h4>
                  <p className="text-lg text-white">Salem, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 glass rounded-2xl border-l-4 border-l-primary hidden md:block">
              <p className="text-gray-300 italic font-medium">
                "Dhanush is currently open for new freelance opportunities and exciting collaborative projects."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl shadow-xl border border-white/5 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Dhanush"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="dev@dhanushs.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
