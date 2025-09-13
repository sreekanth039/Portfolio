import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Crio.do',
      period: 'January 2025 - Present',
      type: 'Intern',
      description: [
        'Honed frontend development skills and transitioned into a full-stack developer through Fellowship Program',
        'Mastered the MERN stack, including React, Node.js, MongoDB, and Express.js',
        'Gained proficiency in frameworks such as Bootstrap and Material UI',
        'Built a strong understanding of advanced JavaScript concepts'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Bootstrap', 'TypeScript']
    },
    {
      title: 'Customer Team Member',
      company: 'Rontec',
      period: 'August 2024 - April 2025',
      type: 'Part Time',
      description: [
        'Served 100+ customers per hour, achieving 94% satisfaction through positive feedback and strong store performance',
        'Processed 1,500+ transactions daily with 99.9% accuracy, reducing errors and ensuring financial integrity',
        'Decreased queue times by 50% during peak hours by streamlining checkout processes with team collaboration'
      ],
      tech: ['Customer Service', 'Problem Solving', 'Technical Support', 'Team Collaboration', 'Training and Development']
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: 'April 2023 - June 2023',
      type: 'Full Time',
      description: [
        'Built and deployed Power BI dashboards, streamlining decision-making and improving efficiency by 50%',
        'Automated reporting pipelines with secure access controls, reducing manual work by 40%',
        'Addressed ad hoc user requests with priority and delivered timely solutions',
        'Handled license management by addressing inactive users and maintaining compliance across platforms',
        'Designed scalable BI models in collaboration with cross-functional teams, cutting development time by 25%'
      ],
      tech: ['Qlik Sense', 'Power BI', 'QMC', 'MySQL', 'Cross-Functional Collaboration']
    },
    {
      title: 'Software Engineer',
      company: 'Accenture',
      period: 'May 2022 - December 2022',
      type: 'Full Time',
      description: [
        'Maintained Qlik Sense, QlikView, and NPrinting dashboards with 99.9% uptime, ensuring uninterrupted reporting for business users',
        'Led the Qlik platform administration (Run Team), delivering services and monitoring tasks within SLA while maintaining high security standards',
        'Managed root admin responsibilities, monitored server performance, and implemented proactive/reactive measures to resolve platform issues',
        'Supported developers and end-users in leveraging Qlik platforms effectively for business insights',
        'Deployed Qlik dashboards and NPrinting reports from development to production after reviewing document analyzers and metadata, reducing delivery timelines by 30%',
        'Collaborated with cross-functional teams (Server, Cloud, Firewall, Database) to ensure efficient operations, improving overall efficiency by 20%',
        'Contributed to three development projects in parallel with run responsibilities, all successfully delivered to production'
      ],
      tech: ['Qlik Sense', 'QlikView', 'Qlik NPrinting', 'QMC Administration', 'Server-Side Management', 'Team Collaboration']
    },
    {
      title: 'Land Surveyor',
      company: 'Government of Andhra Pradesh',
      period: 'October 2019 - April 2022',
      type: 'Full Time',
      description: [
        'Digitised land records for 300+ villages using Collab-Land software, improving accessibility & documentation',
        'Facilitated transparent public communication that helped resolve 85% of local land disputes',
        'Led data entry and verification teams, boosting productivity and strengthening revenue system accuracy'
      ],
      tech: ['Data Management', 'Problem Solving', 'Leadership', 'Customer Service', 'Decision Making']
    }
  ];
  

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((experience, index) => (
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
                  <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                      <Briefcase size={20} className="text-blue-400" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                      {experience.type}
                    </span>
                  </div>
                  <div className={`flex items-center space-x-2 text-gray-400 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {experience.title}
                </h3>
                <h4 className="text-lg font-medium text-blue-400 mb-4">
                  {experience.company}
                </h4>

                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, techIndex) => (
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

export default Experience;