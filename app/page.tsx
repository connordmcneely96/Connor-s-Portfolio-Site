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
  Brain
} from 'lucide-react';

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
    { value: '75%', label: 'Downtime Reduction', icon: TrendingUp },
    { value: '50%', label: 'Efficiency Gains', icon: Zap },
    { value: '20%', label: 'Cost Savings', icon: Award },
    { value: '759M', label: 'Units Produced', icon: Factory },
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
                Multi-Disciplinary Engineering Excellence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Connor McNeely
              <span className="block mt-2 bg-gradient-to-r from-brand-cyan via-glow-cyan to-brand-blue-electric bg-clip-text text-transparent">
                Engineering Leader
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-4">
              Full-Stack Developer | AI Developer | ML Engineer
            </p>

            <p className="text-lg md:text-xl text-circuit-silver max-w-3xl mx-auto mb-12">
              Mechanical Design • Automation • Process Optimization • AI/ML Integration
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
              </div>
            </motion.div>
          ))}
        </div>

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
      </div>
    </div>
  );
}
