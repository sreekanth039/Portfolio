import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Kewordal',
    period: 'November 2025 - February 2026',
    type: 'Contract',
    description: [
      'Developed the Quiz Battle feature end-to-end using React and Material UI, building a reusable component library that increased development efficiency by 20% and boosted pre-launch user engagement',
      'Improved initial load performance by 15% through route-level lazy loading and code splitting, enhancing SEO outcomes and user retention',
      'Accelerated delivery timelines by 25% by simulating backend APIs with Mock Service Worker (MSW), enabling parallel frontend–backend development and reducing integration delays',
      'Enhanced application accessibility by implementing WCAG 2.1 standards using semantic HTML, keyboard navigation, ARIA attributes, and screen reader testing',
      'Collaborated within Agile sprints alongside backend and design teams, contributing to code reviews, sprint planning, and retrospectives to strengthen code quality and cross-functional alignment'
    ],
    tech: [
      'React',
      'Material UI',
      'SCSS',
      'JavaScript',
      'Lazy Loading',
      'Code Splitting',
      'Accessibility (WCAG 2.1)',
      'Responsive Design',
      'Mock Service Worker (MSW)',
      'Agile / Scrum'
    ]
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Crio.do',
    period: 'January 2025 - January 2026',
    type: 'Graduate Program',
    description: [
      'Delivered 10+ sprint features across e-commerce (QKart), healthcare (Medify), and AI-driven projects (Bot AI, XBoard, QTify) with full QA sign-off, improving application reliability and user experience',
      'Reduced recurring frontend defects by 30% through structured debugging, comprehensive testing strategies, and collaborative code reviews',
      'Implemented core user-facing features including search, filtering, pagination, authentication, and cart management to support scalable application workflows',
      'Integrated RESTful APIs using Axios, handling loading states, error scenarios, and edge cases to ensure reliable client–server data exchange',
      'Accelerated development velocity by leveraging AI-assisted tools such as ChatGPT and Cursor for debugging, refactoring, and feature implementation',
      'Built responsive, mobile-first user interfaces using React, Material UI, and modern CSS frameworks'
    ],
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Axios',
      'REST APIs',
      'Material UI',
      'Responsive Design',
      'Git',
      'AI-Assisted Development'
    ]
  },
  {
    title: 'Customer Team Member',
    company: 'Rontec',
    period: 'August 2024 - April 2025',
    type: 'Part Time',
    description: [
      'Handled 100+ customers per hour while maintaining a 94% customer satisfaction rating',
      'Processed over 1,500 daily transactions with 99.9% accuracy, ensuring financial integrity',
      'Reduced peak-hour queue times by 50% through efficient checkout coordination and teamwork'
    ],
    tech: [
      'Customer Service',
      'Problem Solving',
      'Operational Efficiency',
      'Team Collaboration'
    ]
  },
  {
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    period: 'April 2023 - June 2023',
    type: 'Full Time',
    description: [
      'Provided first-line application support to 2,500+ global users across Qlik Sense and custom front-office systems, maintaining 97% SLA compliance through rapid incident resolution',
      'Resolved 400+ incidents and reduced recurring issues by 35% by executing ITIL-aligned incident, change, and problem management workflows via ServiceNow',
      'Authored and maintained technical documentation in Confluence, including application workflows, training materials, and troubleshooting guides to support audits, onboarding, and operational continuity',
      'Delivered structured training sessions for new team members on application usage and support procedures, accelerating ramp-up time and improving overall team productivity'
    ],
    tech: [
      'Qlik Sense',
      'ServiceNow',
      'ITIL Processes',
      'Incident Management',
      'Change Management',
      'Problem Management',
      'Confluence',
      'Technical Documentation',
      'User Support'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Accenture',
    period: 'May 2022 - December 2022',
    type: 'Full Time',
    description: [
      'Maintained 99.9% dashboard uptime for Qlik Sense and Power BI platforms serving users across India, Europe, and the UK, ensuring SLA-aligned delivery of scheduled tasks and reports',
      'Reduced deployment-related issues by 30% by performing thorough pre-release checks on document analyzers, metadata, and ETL pipelines to ensure stable production rollouts',
      'Resolved high-impact incidents by coordinating with server, cloud, firewall, and database teams across multiple regions, minimizing downtime and business disruption',
      'Led enterprise analytics platform administration, managing user access controls, security permissions, system monitoring, and performance optimization',
      'Recognised as a Top 10 Performer by the client for resolving a high volume of critical support tickets, contributing to a 40% reduction in platform-related issues'
    ],
    tech: [
      'Qlik Sense',
      'Power BI',
      'QlikView',
      'Qlik NPrinting',
      'QMC Administration',
      'ETL Validation',
      'Platform Monitoring',
      'Incident Management',
      'Cross-Regional Collaboration'
    ]
  },
  {
    title: 'Land Surveyor',
    company: 'Government of Andhra Pradesh',
    period: 'October 2019 - April 2022',
    type: 'Full Time',
    description: [
      'Honoured by the District Collector for leading a pilot land resurvey project, recognised by senior authorities for measurable impact and execution effectiveness',
      'Digitised land records for 300+ villages using Collab-Land software, improving legal documentation accessibility and reducing administrative processing time',
      'Resolved 85% of local land disputes through transparent public communication, accurate record handling, and cross-stakeholder collaboration',
      'Led data entry and verification teams by streamlining workflows, significantly improving productivity and enhancing revenue system accuracy across the district'
    ],
    tech: [
      'Land Records Digitisation',
      'Data Management',
      'Process Optimisation',
      'Stakeholder Communication',
      'Leadership',
      'Public Administration'
    ]
  }
];
   

 

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
