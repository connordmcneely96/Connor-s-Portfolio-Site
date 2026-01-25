'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code,
  Cog,
  Brain,
  Wrench,
  Zap,
  Award,
  MapPin,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function About() {
  const experience = [
    {
      company: 'Revamped Pumps',
      role: 'Lead Design Engineer',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Sole mechanical design engineer for high-efficiency centrifugal pump systems.',
      highlights: [
        'Designed 50+ API 610 compliant pump systems',
        'Achieved 15% efficiency improvements over industry standard',
        'Implemented parametric CAD automation reducing design time by 60%',
      ],
      tech: ['SolidWorks', 'API 610', 'FEA', 'CFD', 'Python'],
    },
    {
      company: 'John Deere Turf Care',
      role: 'Automation Engineer',
      period: '2023',
      location: 'Fuquay-Varina, NC',
      description: 'Led automation and process improvement initiatives for manufacturing operations.',
      highlights: [
        '75% reduction in machine downtime through predictive maintenance',
        'Implemented PLC-based automation systems',
        '50% efficiency improvement in production workflows',
      ],
      tech: ['PLC Programming', 'SCADA', 'Python', 'Lean Six Sigma'],
    },
    {
      company: 'Pfizer',
      role: 'Manufacturing Technician III',
      period: '2021 - 2023',
      location: 'McPherson, KS',
      description: 'Supported COVID-19 vaccine production achieving record manufacturing output.',
      highlights: [
        'Contributed to 759M vaccine doses production',
        'Achieved #1 PatientView ranking through process excellence',
        'Maintained cGMP compliance in critical production environment',
      ],
      tech: ['cGMP', 'Process Engineering', 'Quality Systems', 'SAP'],
    },
    {
      company: 'Louisiana Tech University',
      role: 'Senior Design Project',
      period: '2020',
      location: 'Ruston, LA',
      description: 'Designed and built complete centrifugal pump system from concept to prototype.',
      highlights: [
        'Full pump design including impeller, volute, and housing',
        'CFD analysis and performance optimization',
        'Manufactured functional prototype',
      ],
      tech: ['SolidWorks', 'ANSYS', 'CFD', 'CNC Machining'],
    },
  ];

  const skills = {
    'AI & Machine Learning': [
      { name: 'LangChain', level: 90 },
      { name: 'RAG Systems', level: 95 },
      { name: 'OpenAI API', level: 90 },
      { name: 'PyTorch', level: 75 },
      { name: 'Vector Databases', level: 85 },
      { name: 'Prompt Engineering', level: 95 },
    ],
    'Full-Stack Development': [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
    'Mechanical Engineering': [
      { name: 'SolidWorks', level: 95 },
      { name: 'API 610 Design', level: 90 },
      { name: 'FEA / CFD', level: 85 },
      { name: 'GD&T', level: 90 },
      { name: 'Pump Design', level: 95 },
      { name: 'Process Engineering', level: 85 },
    ],
    'Tools & Platforms': [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS / Cloudflare', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'VS Code / Cursor', level: 95 },
      { name: 'PLC Programming', level: 80 },
    ],
  };

  const certifications = [
    { name: 'B.S. Mechanical Engineering', issuer: 'Louisiana Tech University', year: '2020' },
    { name: 'Full-Stack Development', issuer: 'Self-taught + Online Courses', year: '2023' },
    { name: 'AI/ML Engineering', issuer: 'DeepLearning.AI', year: '2024' },
    { name: 'Lean Six Sigma', issuer: 'John Deere', year: '2023' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-10" />
        <div className="absolute top-20 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="accent" className="mb-6">
              Mechanical Engineer × AI Developer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              About Connor McNeely
            </h1>
            <p className="text-xl text-steel-300 max-w-3xl mx-auto">
              15+ years of hands-on engineering experience. Now building AI tools
              that transform how engineers work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-steel-300">
                <p>
                  I started taking things apart before I could read. By high school,
                  I was rebuilding engines and designing custom parts. That curiosity
                  led me to mechanical engineering at Louisiana Tech, where I designed
                  my first centrifugal pump from scratch.
                </p>
                <p>
                  After graduation, I joined Pfizer during the COVID-19 pandemic,
                  contributing to the production of 759 million vaccine doses. The
                  experience of working on something that mattered at that scale
                  changed how I think about engineering impact.
                </p>
                <p>
                  At John Deere, I discovered the power of automation and data-driven
                  decision making. Reducing machine downtime by 75% showed me that
                  software could multiply the impact of mechanical systems.
                </p>
                <p>
                  Today, I combine deep mechanical engineering expertise with AI and
                  full-stack development. I build tools that help engineers work
                  smarter—from RAG-powered documentation systems to parametric CAD
                  automation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="gradient" padding="lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">15+</div>
                    <div className="text-sm text-steel-400">Years Building</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">50+</div>
                    <div className="text-sm text-steel-400">Pumps Designed</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">759M</div>
                    <div className="text-sm text-steel-400">Vaccine Doses</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-accent-400 mb-2">75%</div>
                    <div className="text-sm text-steel-400">Downtime Reduced</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-steel-400 max-w-2xl mx-auto">
              From vaccine manufacturing to pump design to AI development—each role
              has shaped my approach to engineering.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-primary-600 to-accent-500 opacity-30" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent-500 border-4 border-primary-900 z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <Card padding="lg" className="hover:border-accent-500/50 transition-colors">
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent-400" />
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <h3 className="text-xl font-bold text-white">{job.role}</h3>
                          <p className="text-accent-400 font-medium">{job.company}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-steel-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {job.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-steel-300 mb-4">{job.description}</p>
                      <ul className="space-y-2 mb-4">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-steel-400">
                            <Zap className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <Badge key={tech} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-steel-400 max-w-2xl mx-auto">
              A unique combination of mechanical engineering, AI/ML, and full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <Card padding="lg">
                  <div className="flex items-center gap-3 mb-6">
                    {category === 'AI & Machine Learning' && <Brain className="w-6 h-6 text-accent-400" />}
                    {category === 'Full-Stack Development' && <Code className="w-6 h-6 text-accent-400" />}
                    {category === 'Mechanical Engineering' && <Cog className="w-6 h-6 text-accent-400" />}
                    {category === 'Tools & Platforms' && <Wrench className="w-6 h-6 text-accent-400" />}
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-steel-300">{skill.name}</span>
                          <span className="text-sm text-steel-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-steel-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Education & Certifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card padding="lg" className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center">
                    {index === 0 ? (
                      <GraduationCap className="w-7 h-7 text-accent-400" />
                    ) : (
                      <Award className="w-7 h-7 text-accent-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-sm text-steel-400 mb-2">{cert.issuer}</p>
                  <Badge variant="accent" size="sm">{cert.year}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="gradient" padding="lg" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-steel-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need AI-powered tools, mechanical engineering expertise,
                or full-stack development—I'm ready to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    View My Work
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
