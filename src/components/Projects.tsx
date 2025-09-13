import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Users, Code } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'KQart-Frontend',
      shortDesc: 'Modern e-commerce application with React',
      fullDesc: 'QKart is an e-commerce application offering a variety of products for customers to choose buy and get delivered to their required address.',
      image: './KQart.png',
      tech: ['React.Js', 'React-Router', 'Material UI', 'React Hooks', 'Form', 'Responsive Design'],
      github: 'https://github.com/sreekanth039',
      demo: 'https://demo-project.com', // once completed will publish this demo link
      status: 'In Progress',
      duration: '2 months',
      teamSize: '4 members',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Real-time order tracking',
        'Responsive design for all devices'
      ]
    },
    {
      id: 2,
      title: 'QTripDynamic',
      shortDesc: 'QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.',
      fullDesc: 'QTripDynamic is a responsive travel booking application designed for adventure enthusiasts seeking experiences across multiple cities. The app allows users to browse destinations, explore a wide range of activities, and filter experiences based on categories and preferences.',
      image: './public/QTripdynamic.png',
      tech: ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'Responsive Design', 'Event Handling', 'Responsive Design', 'Conditional Rendering'],
      github: 'https://github.com/sreekanth039',
      demo: 'https://me-qtripdynamic-beta.vercel.app/',
      status: 'Completed',
      duration: '2 months',
      teamSize: '3 members',
      features: [
        'Created web pages using HTML and CSS and made them dynamic using JavaScript',
        'Improved UX with multi-select filters, image carouselsImplemented conditional rendering of page elements',
        'Implemented conditional rendering of page elements',
        'Utilized localStorage to persist user preferences at client-side and facilitated reservation form submission using fetch API.',
        'Deployed the website using Netlify/Vercel for Frontend and Render for Backend.'
      ]
    },
    {
      id: 3,
      title: 'QTripStatic',
      shortDesc: 'QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ',
      fullDesc: 'QTripStatic is a responsive travel booking application designed for adventure enthusiasts seeking experiences across multiple cities. The app allows users to browse destinations, explore a wide range of activities, and filter experiences based on categories and preferences.',
      image: './public/QTripStatic.png',
      tech: ['HTML', 'CSS', 'BootStrap', 'CSS Flex Box', 'Responsive Design', 'Netlify'],
      github: 'https://github.com/sreekanth039',
      demo: 'https://qtrip-static-ovyjxuq45-sreekanths-projects-5e538b0f.vercel.app/',
      status: 'Completed',
      duration: '1 month',
      teamSize: '2 members',
      features: [
        'Created 3 different web pages from Wireframe layout using HTML and CSS',
        'Utilized Bootstrap extensively for responsive design',
         'Deployed the website to Netlify/Vercel'
      ]
    },
    {
      id: 4,
      title: 'Xboard',
      shortDesc: 'XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.',
      fullDesc: 'XBoard is a dynamic news feed application that aggregates and displays the latest updates on selected topics from Flipboard. It provides users with real-time news content in an intuitive, responsive interface, making it easy to stay informed and engaged with trending stories across different categories.',
      image: './public/Xboard.png',
      tech: ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'Figma', 'DOM Manipulation', 'REST', 'JSON'],
      github: 'https://github.com/sreekanth039',
      demo: 'https://xboard-sree.netlify.app/',
      status: 'Completed',
      duration: '1 month',
      teamSize: '1 member',
      features: [
        'Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch',
        'Used Accordions and Image Carousel to improve UI',
        "Fetched news content from flipboard's RSS feed using REST API"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20';
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded text-sm">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                className="bg-slate-800 border border-slate-700 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full text-white hover:bg-slate-800 transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users size={16} />
                          <span>{selectedProject.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.fullDesc}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Code size={20} className="mr-2" />
                      Key Features
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
