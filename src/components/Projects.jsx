import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, AlertCircle } from 'lucide-react';
import { supabase } from '../supabase';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Unable to load projects from the database.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-xl text-lg">
              A selection of my best work dynamically fetched from my database, demonstrating expertise in frontend, backend, and UI/UX design.
            </p>
          </div>
          <a href="https://github.com/selvarajdhanush108-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group text-primary hover:text-white transition-colors font-medium border-b border-primary/30 pb-1">
            <Github size={20} />
            <span>View all on GitHub</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-primary">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
            <p className="font-medium animate-pulse">Loading dynamic projects...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 flex flex-col items-center text-center text-red-400">
            <AlertCircle size={48} className="mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Oops!</h3>
            <p>{error}</p>
            <p className="text-sm mt-4 text-gray-400">Make sure your Supabase URL and ANON KEY are correctly set in the .env file.</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center text-gray-400">
            No projects found. Add some from the Admin Dashboard!
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-black/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <span className="text-gray-500 font-medium">No Image</span>
                  )}

                  <div className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass bg-black/50 flex items-center justify-center text-white hover:bg-primary/80 transition-colors backdrop-blur-md">
                        <Github size={18} />
                      </a>
                    )}
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass bg-black/50 flex items-center justify-center text-white hover:bg-secondary/80 transition-colors backdrop-blur-md">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-8 relative">
                  <div className="absolute top-0 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {index === 0 && (
                    <div className="text-xs font-bold tracking-widest text-primary mb-2 uppercase flex items-center gap-2">
                      <Code2 size={14} />
                      Latest Project
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
