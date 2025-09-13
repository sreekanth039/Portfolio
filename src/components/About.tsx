import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Expert in HTML, CSS, Javascript, React, and modern UI frameworks'
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express, MongoDB, and RESTful APIs'
    },
    {
      icon: <Globe size={24} />,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development and deployment'
    },
    {
      icon: <Cpu size={24} />,
      title: 'System Design',
      description: 'Scalable architecture and performance optimization'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
    I’m an MSc Computer Science graduate from Swansea University with a strong foundation in the MERN stack. 
    I’m passionate about building user-focused web applications and eager to grow into full-stack and 
    front-end developer roles.
  </p>

  <p>
    My journey spans digitising land records for 300+ villages with the Government of Andhra Pradesh to 
    building BI dashboards at TCS and Accenture, and most recently developing full-stack projects at Crio.Do. 
    These experiences shaped my ability to write clean code, collaborate in agile teams, and deliver measurable impact.
  </p>

  <p>
    I bring enthusiasm, curiosity, and a commitment to continuous learning while striving to add value to every project I work on.
  </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;