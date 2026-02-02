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
  Target,
  BookOpen,
  Lightbulb,
  Shield,
  Car,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

export default function About() {
  const experience = [
    {
      company: 'Leadership Legacy LLC',
      role: 'Founder & AI Engineer',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Building AI-powered tools for engineers and businesses—from intelligent design assistants to full-stack automation platforms.',
      highlights: [
        'Developing EngineerCAD: AI-assisted CAD and design intelligence platform',
        'Delivering custom AI agents, RAG systems, and automation workflows for clients',
        'Bridging mechanical engineering domain expertise with production AI systems',
      ],
      tech: ['Next.js', 'LangChain', 'Python', 'CrewAI', 'AWS', 'OpenAI'],
    },
    {
      company: 'Revamped Pumps',
      role: 'Lead Design Engineer',
      period: '2023 - 2024',
      location: 'Remote',
      description: 'Sole mechanical design engineer responsible for full product design lifecycle—from concept sketches to production-ready CAD deliverables.',
      highlights: [
        'Designed 30+ production-ready mechanical assemblies with full GD&T documentation',
        'Built parametric CAD automation that cut design iteration time by 60%',
        'Delivered complete engineering packages: 3D models, drawings, BOMs, and FEA reports',
      ],
      tech: ['SolidWorks', 'FEA', 'CFD', 'GD&T', 'Python'],
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
      description: 'Capstone engineering project: designed and built a complete CNC gang drill system from concept to functional prototype.',
      highlights: [
        'Full mechanical design with multi-spindle synchronization',
        'FEA-validated structural and vibration analysis',
        'Manufactured functional prototype with GD&T documentation',
      ],
      tech: ['SolidWorks', 'ANSYS', 'FEA', 'CNC Machining', 'GD&T'],
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
      { name: 'AutoCAD / CATIA', level: 85 },
      { name: 'FEA / CFD (ANSYS)', level: 85 },
      { name: 'GD&T', level: 90 },
      { name: 'DFM / DFA', level: 90 },
      { name: '3D Printing / Prototyping', level: 80 },
    ],
    'Tools & Platforms': [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS / Cloudflare', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'VS Code / Cursor', level: 95 },
      { name: 'Vercel / CI/CD', level: 85 },
    ],
  };

  const values = [
    {
      icon: Target,
      title: 'Precision Over Perfection',
      description: 'Ship things that work. Iterate. But never ship sloppy work.',
    },
    {
      icon: Lightbulb,
      title: 'Learning by Building',
      description: "I don't take courses to check boxes. I build projects that solve real problems.",
    },
    {
      icon: Cog,
      title: 'Engineering Discipline in Everything',
      description: 'Whether designing a mechanical assembly or an AI workflow—understand requirements, follow standards, document, test.',
    },
    {
      icon: Shield,
      title: 'Honest Work',
      description: "I won't oversell my capabilities or take projects I can't deliver.",
    },
  ];

  const facts = [
    { label: 'Experience', value: '5+ years in mechanical engineering, 3+ years in software/AI development' },
    { label: 'Education', value: 'B.S. Mechanical Engineering, Louisiana Tech University' },
    { label: 'Location', value: 'El Dorado, Arkansas' },
    { label: 'Current Focus', value: 'AI-powered design tools, EngineerCAD, Leadership Legacy LLC' },
    { label: 'Specialties', value: 'CAD & product design, FEA/CFD analysis, RAG systems, multi-agent AI' },
  ];

  const beyondWork = [
    { icon: Car, text: 'Working on classic cars (the mechanical kind of debugging)' },
    { icon: BookOpen, text: 'Learning something new (currently: advanced robotics kinematics)' },
    { icon: Code, text: 'Building side projects that might become products someday' },
    { icon: MapPin, text: 'Spending time with family in Arkansas' },
  ];

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
            <Badge variant="accent" className="mb-6">About</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Mechanical engineer by trade. AI developer by obsession.
            </h1>
            <p className="text-xl text-steel-300 max-w-3xl mx-auto">
              I design production-ready CAD assemblies and build the AI tools that make engineers faster.
              Most people pick one lane—I built a career at the intersection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Short Version */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard padding="lg" glow>
              <h2 className="text-2xl font-bold text-white mb-4">The Short Version</h2>
              <p className="text-lg text-steel-300 leading-relaxed">
                I'm a mechanical engineer who spent years in SolidWorks designing production parts—and got
                tired of the repetitive work that ate into actual engineering. So I taught myself to code.
                Then I discovered AI.
                <span className="block mt-4 text-accent-400 font-medium">
                  Now I build the tools that give engineers their time back.
                </span>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* The Longer Story */}
      <section className="py-16 bg-primary-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">The Longer Story</h2>
          </motion.div>

          <div className="space-y-12">
            {/* Where I Started */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-accent-400 mb-4">Where I Started</h3>
              <div className="space-y-4 text-steel-300">
                <p>
                  I didn't set out to become a software developer. I set out to be a damn good mechanical engineer.
                </p>
                <p>
                  For 5+ years, I've been deep in CAD—designing mechanical assemblies, detailing production drawings,
                  and running FEA simulations where the difference between a good design and a failed one lives in
                  thousandths of an inch. The kind of work where GD&T callouts matter and every tolerance has a reason.
                </p>
                <p>
                  I learned to be precise. To follow engineering standards religiously. To document everything
                  because the shop floor, the manufacturer, and the end user all depend on it.
                </p>
                <p className="text-white font-medium italic">
                  That discipline never leaves you.
                </p>
              </div>
            </motion.div>

            {/* The Turning Point */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-accent-400 mb-4">The Turning Point</h3>
              <div className="space-y-4 text-steel-300">
                <p>
                  But I also noticed something frustrating: engineers—myself included—spent huge chunks of our time
                  on repetitive work. Re-running the same calculations with slightly different inputs. Digging through
                  500-page standards documents for one specific clause. Formatting reports that looked exactly like last month's reports.
                </p>
                <p>
                  Work that required expertise but not creativity.
                </p>
                <p className="text-white font-medium italic">
                  I thought: There has to be a better way.
                </p>
              </div>
            </motion.div>

            {/* Teaching Myself to Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-accent-400 mb-4">Teaching Myself to Code</h3>
              <div className="space-y-4 text-steel-300">
                <p>
                  So I started small. Python scripts to automate my own CAD workflows and calculations.
                  Macros that generated drawing templates and BOMs in minutes instead of hours.
                  Nothing fancy—just tools that solved my problems.
                </p>
                <p>
                  But those scripts became web applications. Those applications led me to React, then Next.js,
                  then full-stack development. And when large language models emerged, I saw immediately what they could do
                  for engineering workflows.
                </p>
                <p className="text-white font-medium italic">
                  I wasn't just learning to code. I was building a new skill set on top of my engineering foundation.
                </p>
              </div>
            </motion.div>

            {/* Where I Am Now */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-accent-400 mb-4">Where I Am Now</h3>
              <div className="space-y-4 text-steel-300">
                <p>
                  Today I run <span className="text-white font-medium">Leadership Legacy LLC</span>—a
                  consulting and development company focused on AI-powered solutions, web applications, and
                  engineering automation. I help businesses leverage AI to streamline operations, build custom
                  tools, and turn complex workflows into scalable systems.
                </p>
                <p>
                  I'm also building <span className="text-white font-medium">EngineerCAD</span>—a suite of
                  AI-assisted tools for CAD, design, and engineering workflows. Think intelligent design
                  validation, automated drawing generation, AI-powered BOM management, and FEA
                  recommendations—all integrated into the tools engineers already use. AI that doesn't
                  replace engineers; it makes them dangerous.
                </p>
                <p className="text-white font-medium italic">
                  That's the future I'm building.
                </p>
              </div>
            </motion.div>

            {/* What Drives Me */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-accent-400 mb-4">What Drives Me</h3>
              <div className="space-y-4 text-steel-300">
                <p>
                  The goal isn't automation for its own sake. It's giving engineers back their time for what actually matters:
                  solving hard problems, innovating, building things that work.
                </p>
                <p>
                  I've sat at the desk doing tedious work when I could have been designing.
                  I don't want other engineers to spend their careers that way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Facts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">The Facts</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card padding="lg">
              <div className="space-y-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 py-3 border-b border-steel-800/50 last:border-0"
                  >
                    <span className="text-accent-400 font-medium w-32 flex-shrink-0">{fact.label}</span>
                    <span className="text-steel-300">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card variant="gradient" padding="lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent-400 mb-2">5+</div>
                  <div className="text-sm text-steel-400">Years Building</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent-400 mb-2">30+</div>
                  <div className="text-sm text-steel-400">ME Projects</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent-400 mb-2">10+</div>
                  <div className="text-sm text-steel-400">AI Projects</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent-400 mb-2">500+</div>
                  <div className="text-sm text-steel-400">CAD Models</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What I Value */}
      <section className="py-16 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What I Value</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard padding="lg" hover>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-steel-400">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-steel-400 max-w-2xl mx-auto">
              From manufacturing floors to CAD workstations to AI development—each role
              has shaped how I approach engineering problems.
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
      <section className="py-16 bg-primary-800/30">
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
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

      {/* Beyond Work */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Beyond Work</h2>
            <p className="text-steel-400">When I'm not engineering or coding, you'll find me:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beyondWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-steel-800/30 border border-steel-700/50"
              >
                <item.icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-steel-300">{item.text}</span>
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="gradient" padding="lg" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-steel-300 text-lg mb-8 max-w-2xl mx-auto">
                I'm always interested in challenging projects, interesting conversations,
                and opportunities to build something meaningful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Start a Conversation
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
