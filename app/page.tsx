'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Settings,
  Factory,
  TrendingUp,
  Cog,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Code,
  Layers,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Server,
  Github,
  ExternalLink,
  Brain,
  Download,
  Linkedin
} from 'lucide-react';
import AudienceModeToggle from './components/AudienceModeToggle';
import { trackResumeDownload } from './utils/analytics';

export default function Home() {
  const features = [
    {
      icon: Settings,
      title: 'Mechanical Design Excellence',
      description: 'Full-cycle pump design from conception to manufacturing using SolidWorks, FEA/CFD analysis, and DFMA principles',
      gradient: 'from-brand-cyan to-brand-cyan-dark',
    },
    {
      icon: Zap,
      title: 'Automation & Controls',
      description: 'PLC programming, SCADA systems, machine vision, and IoT integration for process optimization',
      gradient: 'from-brand-blue-electric to-brand-cyan',
    },
    {
      icon: Factory,
      title: 'Process Optimization',
      description: 'Lean Six Sigma methodologies delivering quantifiable improvements in efficiency, cost, and quality',
      gradient: 'from-success to-brand-cyan',
    },
    {
      icon: Code,
      title: 'AI/ML Integration',
      description: 'Python, TensorFlow, and data-driven decision making to solve complex engineering challenges',
      gradient: 'from-warning to-brand-blue-electric',
    },
  ];

  const stats = [
    { value: '75%', label: 'Downtime Reduction', context: 'John Deere automation', icon: TrendingUp },
    { value: '50%', label: 'Efficiency Gains', context: 'Pfizer process optimization', icon: Zap },
    { value: '20%', label: 'Cost Savings', context: 'Pump design innovations', icon: Award },
    { value: '759M', label: 'Units Produced', context: 'Pfizer vaccine production', icon: Factory },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      icon: Code,
      gradient: 'from-brand-cyan/30 via-brand-cyan/10 to-brand-blue-electric/20',
      tagClass: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs'],
      icon: Server,
      gradient: 'from-brand-blue-electric/25 via-brand-cyan/15 to-brand-cyan-dark/20',
      tagClass: 'bg-brand-blue-electric/10 text-brand-blue-electric border-brand-blue-electric/30',
    },
    {
      title: 'AI/ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'OpenAI API', 'RAG'],
      icon: Sparkles,
      gradient: 'from-success/25 via-brand-cyan/15 to-brand-cyan/10',
      tagClass: 'bg-success/10 text-success border-success/30',
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Pinecone', 'Chroma', 'FAISS'],
      icon: Database,
      gradient: 'from-warning/25 via-brand-blue-electric/10 to-brand-cyan/10',
      tagClass: 'bg-warning/10 text-warning border-warning/30',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Vercel', 'Git', 'GitHub'],
      icon: Cloud,
      gradient: 'from-brand-cyan-dark/25 via-brand-blue-electric/15 to-brand-cyan/10',
      tagClass: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    },
  ];

  const featuredProjects = [
    {
      title: 'Inner Animals AI Dashboard',
      description: 'AI/ML platform with RAG builder and ML studio',
      tags: ['Next.js', 'FastAPI', 'LangChain', 'RAG'],
      githubUrl: 'https://github.com/connordmcneely96/inner-animals-ai-dashboard',
      liveUrl: '/dashboard',
    },
    {
      title: 'RAG Q&A System',
      description: 'Retrieval-Augmented Generation for technical docs',
      tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
      githubUrl: 'https://github.com/connordmcneely96/RAG-Q-A-for-Mechanical-Engineers',
      liveUrl: 'https://rag-q-a-for-mechanical-engineers.vercel.app/',
    },
    {
      title: 'Southern Pets',
      description: 'Full-stack MERN animal rescue platform',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/connordmcneely96/Southern-Pets-Animal-Rescue-client-project',
      liveUrl: 'https://southern-pets-animal-rescue-client.vercel.app/',
    },
    {
      title: 'AI Health Coach',
      description: 'LLM-powered fitness coaching application',
      tags: ['React', 'OpenAI API', 'FastAPI', 'Vercel'],
      githubUrl: 'https://github.com/connordmcneely96/AI_Powered_Health_-_Fitness_Coach',
      liveUrl: 'https://ai-powered-health-fitness-coach.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-32 pb-40"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #00B8E6 1px, transparent 1px),
                            linear-gradient(to bottom, #00B8E6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-brand-blue-electric opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success opacity-10 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span className="text-sm font-medium text-brand-cyan">
                Mechanical Engineering × AI/ML × Full-Stack Development
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Connor McNeely
              <span className="block mt-2 bg-gradient-to-r from-brand-cyan via-glow-cyan to-brand-blue-electric bg-clip-text text-transparent">
                Mechanical Engineer → AI/ML Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-4">
              Full-Stack Development | AI/ML Engineering | Mechanical Design
            </p>

            <p className="text-lg md:text-xl text-circuit-silver max-w-3xl mx-auto mb-12">
              Bridging physical and digital engineering • 5+ years at Pfizer, John Deere, and leading manufacturers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-semibold shadow-glow-cyan-lg hover:shadow-glow-cyan-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl border-2 border-brand-cyan/30 text-brand-cyan font-semibold hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 text-sm">
              <a
                href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
                download="Mechanical_DrafterModeler_Automation Resume"
                onClick={() => trackResumeDownload('mechanical')}
                className="text-circuit-silver hover:text-warning transition-colors flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                ME Resume
              </a>
              <span className="text-circuit-silver/30">|</span>
              <a
                href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
                download="AI Developer_Fullstack Developer_AIML_Engineer Resume"
                onClick={() => trackResumeDownload('ai-dev')}
                className="text-circuit-silver hover:text-brand-cyan transition-colors flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                AI/Dev Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-circuit-silver">
              <a
                href="https://github.com/connordmcneely96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/connordmcneely"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            <AudienceModeToggle />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 text-center hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 group-hover:to-transparent transition-all duration-300" />
              <div className="relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-cyan/20 flex items-center justify-center group-hover:bg-brand-cyan/30 transition-colors">
                  <stat.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-circuit-silver text-sm">{stat.label}</p>
                <p className="text-circuit-silver/60 text-xs mt-1">{stat.context}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center py-12 mb-20 border-y border-circuit-silver/10"
        >
          <p className="text-circuit-silver/60 text-sm uppercase tracking-wider mb-6">Experience At</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-circuit-silver hover:text-white transition-colors"
            >
              <span className="text-2xl md:text-3xl font-bold">Pfizer</span>
            </motion.div>
            <span className="text-circuit-silver/30 text-2xl">·</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-circuit-silver hover:text-white transition-colors"
            >
              <span className="text-2xl md:text-3xl font-bold">John Deere</span>
            </motion.div>
            <span className="text-circuit-silver/30 text-2xl">·</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-circuit-silver hover:text-white transition-colors"
            >
              <span className="text-2xl md:text-3xl font-bold">Louisiana Tech</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-circuit-silver">
              Delivering engineering excellence across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300`} />

                <div className="relative">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-glow-cyan`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-circuit-silver leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Stack
            </h2>
            <p className="text-xl text-circuit-silver">
              Modern technologies powering engineering and software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark flex items-center justify-center shadow-glow-cyan">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-brand-blue-electric to-brand-cyan flex items-center justify-center shadow-glow-cyan">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'FastAPI', 'Python', 'Rust'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI/ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-success to-brand-cyan flex items-center justify-center shadow-glow-cyan">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'RAG', 'Vector DBs'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-warning to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                Databases & Storage
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'Pinecone', 'Redis', 'SQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Vercel', 'Docker', 'Git', 'CI/CD'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Engineering Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              whileHover={{ y: -8 }}
              className="group bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-error to-brand-cyan flex items-center justify-center shadow-glow-cyan">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                Engineering Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['SolidWorks', 'FEA/CFD', 'PLC', 'SCADA', 'AutoCAD'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="relative bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-12 overflow-hidden text-center mb-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cog className="w-8 h-8 text-white animate-pulse" />
              <h2 className="text-4xl font-bold text-white">Let's Build Something Amazing</h2>
            </div>
            <p className="text-white/80 text-xl mb-8">
              Ready to bring engineering excellence to your team
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-brand-cyan font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-cyan">
                Technical Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Projects
            </h2>
            <p className="text-xl text-circuit-silver">
              Featured work across AI, full-stack, and product engineering
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 via-brand-cyan/0 to-brand-blue-electric/0 group-hover:from-brand-cyan/10 group-hover:to-brand-blue-electric/10 transition-all duration-300" />

                <div className="relative flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-circuit-silver text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-circuit-silver/10 border border-circuit-silver/20 text-white font-medium hover:text-brand-cyan hover:border-brand-cyan/40 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-semibold hover:shadow-glow-cyan transition-all duration-200"
                    >
                      Live
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border-2 border-brand-cyan/30 text-brand-cyan font-semibold hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile Sticky Resume Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neural-slate/95 backdrop-blur-xl border-t border-circuit-silver/20 p-3 flex gap-2 z-50">
        <a
          href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
          download="Mechanical_DrafterModeler_Automation Resume"
          onClick={() => trackResumeDownload('mechanical')}
          className="flex-1 px-3 py-2 rounded-lg bg-warning/10 border border-warning/30 text-warning text-sm font-medium flex items-center justify-center gap-1"
        >
          <Download className="w-3.5 h-3.5" />
          ME Resume
        </a>
        <a
          href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
          download="AI Developer_Fullstack Developer_AIML_Engineer Resume"
          onClick={() => trackResumeDownload('ai-dev')}
          className="flex-1 px-3 py-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-sm font-medium flex items-center justify-center gap-1"
        >
          <Download className="w-3.5 h-3.5" />
          AI Resume
        </a>
      </div>
    </div>
  );
}
