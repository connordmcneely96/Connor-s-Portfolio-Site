'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Settings,
  Brain,
  Code2,
  Download,
  Github,
  Linkedin,
  Award,
  Factory,
  Layers,
  Database,
  Cloud,
  Terminal,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import ProjectCard from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import { trackResumeDownload } from './utils/analytics';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 6);

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Pumps Designed', icon: Settings },
    { value: '10+', label: 'AI Projects', icon: Brain },
    { value: '759M', label: 'Units Produced', icon: Factory },
  ];

  const valueProps = [
    {
      icon: Settings,
      title: 'Mechanical Engineering',
      description:
        'API 610/682 compliant pump design, rotating equipment, FEA/CFD analysis, and production-ready engineering documentation.',
      gradient: 'from-secondary-500 to-secondary-600',
      tags: ['SolidWorks', 'API 610', 'FEA/CFD', 'DFMA'],
    },
    {
      icon: Brain,
      title: 'AI Development',
      description:
        'LangChain, CrewAI, RAG systems, and multi-agent architectures. Building AI tools that transform how engineers work.',
      gradient: 'from-accent-500 to-accent-600',
      tags: ['LangChain', 'RAG', 'GPT-4', 'Python'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Next.js, React, TypeScript applications with cloud deployment. End-to-end delivery from concept to production.',
      gradient: 'from-primary-500 to-primary-600',
      tags: ['Next.js', 'React', 'TypeScript', 'AWS'],
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      icon: Layers,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      icon: Terminal,
      skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'REST APIs'],
    },
    {
      category: 'AI/ML',
      icon: Brain,
      skills: ['LangChain', 'OpenAI', 'RAG', 'TensorFlow', 'Vector DBs'],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Pinecone', 'Redis'],
    },
    {
      category: 'Cloud',
      icon: Cloud,
      skills: ['AWS', 'Vercel', 'Cloudflare', 'Docker'],
    },
    {
      category: 'Engineering',
      icon: Cpu,
      skills: ['SolidWorks', 'FEA/CFD', 'PLC', 'AutoCAD'],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-30" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-500/10 to-transparent rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-accent-400">
                Mechanical Engineering × AI Development
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Mechanical Engineer
              <span className="block mt-2 bg-gradient-to-r from-accent-400 via-accent-300 to-primary-400 bg-clip-text text-transparent">
                × AI Developer
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-steel-300 max-w-3xl mx-auto mb-4 font-medium">
              15 years building industrial systems at Tesla.
            </p>
            <p className="text-lg md:text-xl text-steel-400 max-w-2xl mx-auto mb-12">
              Now building the AI tools that transform engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/portfolio">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Work With Me
                </Button>
              </Link>
            </div>

            {/* Resume Downloads */}
            <div className="flex items-center justify-center gap-4 text-sm mb-8">
              <a
                href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
                download
                onClick={() => trackResumeDownload('mechanical')}
                className="flex items-center gap-2 text-steel-400 hover:text-secondary-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>ME Resume</span>
              </a>
              <span className="text-steel-600">|</span>
              <a
                href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
                download
                onClick={() => trackResumeDownload('ai-dev')}
                className="flex items-center gap-2 text-steel-400 hover:text-accent-400 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>AI/Dev Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/connordmcneely96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/connordmcneely"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-steel-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-steel-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-accent-400"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card hover glow="cyan" className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent-500/20 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-steel-400 text-sm">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Bar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-8 border-y border-steel-800/50"
          >
            <p className="text-steel-500 text-sm uppercase tracking-wider mb-6">
              Experience At
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {['Pfizer', 'John Deere', 'Louisiana Tech'].map((company) => (
                <motion.span
                  key={company}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl md:text-3xl font-bold text-steel-400 hover:text-white transition-colors"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              A rare intersection of deep engineering expertise and modern software development
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {valueProps.map((prop) => (
              <motion.div key={prop.title} variants={fadeInUp}>
                <Card hover glow="cyan" className="h-full">
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-steel-400 leading-relaxed mb-6">{prop.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {prop.tags.map((tag) => (
                      <Badge key={tag} variant="accent" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-24 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Technical Stack
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              Modern technologies powering engineering and AI solutions
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techStack.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <Card hover glow="cyan">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-steel-800/50 text-steel-300 border border-steel-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="accent" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Selected Projects
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              A selection of work across mechanical engineering, AI/ML, and full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-accent-500 to-primary-600 rounded-3xl p-12 md:p-16 overflow-hidden text-center"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Whether you need AI development, engineering consultation, or a full-stack solution,
                I'm ready to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-white/90"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
