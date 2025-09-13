import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Postgraduate Degree, Computer Science',
      school: 'Swansea University',
      period: 'September 2023 - September 2024',
      type: 'Full-time',
      description: [
        'Completed Master of Science (MSc) in Computer Science from Swansea University, Swansea, UK',
        'Graduated in September 2024 with a 2:1 grade',
        'Studied from September 2023 to September 2024',
        'Developed a strong foundation in core Comp.Sc principles with practical exposure to real-world applications'
      ],
      tech: ['Java', 'Python', 'Machine Learning','Software Engineering Principles', 'Computer System Concepts']
    },
    {
      degree: 'Bachelor of Technology - BTech, Civil Engineering',
      school: 'Hindustan University',
      period: 'May 2013 - April 2017',
      type: 'Full-time',
      description: [
        'Completed Bachelor of Technology (B.Tech) in Civil Engineering from Hindustan University, Chennai',
        'Graduated in April 2017 with a CGPA of 7.9',
        'Studied from May 2013 to April 2017',
        'Built a strong foundation in core civil engineering principles with practical exposure to real-world applications'
      ],
      tech: ['Computer Programming', 'Surveying', 'Structural Analysis', 'Professional Ethics and Human Values']
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and the milestones that shaped my technical foundation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-12 md:ml-0 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex items-center space-x-3 ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                    }`}
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                      <GraduationCap size={20} className="text-purple-400" />
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {edu.type}
                    </span>
                  </div>
                  <div
                    className={`flex items-center space-x-2 text-gray-400 text-sm ${
                      index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                    }`}
                  >
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-purple-400 mb-4">{edu.school}</h4>

                <ul className="space-y-2 mb-6">
                  {edu.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {edu.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-slate-600/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
