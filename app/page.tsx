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
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TextReveal } from '@/components/ui/TextReveal';
import { StatCounter } from '@/components/ui/StatCounter';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid';
import { GlassCard } from '@/components/ui/GlassCard';
import ProjectCard from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

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

  const valueProps = [
    {
      icon: Settings,
      title: 'Mechanical Engineering Mastery',
      description:
        'API 610/682 certified pump design, rotating equipment, shaft analysis per ASME standards.',
      benefit: 'Production-ready designs that pass quality gates the first time.',
      proof: '50+ pumps designed for automotive production',
      gradient: 'from-secondary-500 to-secondary-600',
      tags: ['SolidWorks', 'API 610', 'FEA/CFD', 'GD&T'],
    },
    {
      icon: Brain,
      title: 'AI Development That Ships',
      description:
        'RAG systems, multi-agent architectures, LangChain/CrewAI implementations.',
      benefit: 'AI tools that solve real engineering problems, not demos.',
      proof: 'EngineerGPT, DesignReviewCrew in active development',
      gradient: 'from-accent-500 to-accent-600',
      tags: ['LangChain', 'RAG', 'GPT-4', 'Python'],
    },
    {
      icon: Code2,
      title: 'Full-Stack Delivery',
      description:
        'Next.js, React, TypeScript applications with cloud deployment.',
      benefit: 'Complete solutions from concept to production.',
      proof: 'Multiple live applications serving real users',
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
      skills: ['LangChain', 'OpenAI', 'RAG', 'CrewAI', 'Vector DBs'],
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
      {/* Gradient Mesh Background */}
      <GradientMesh variant="subtle" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pattern Interrupt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-steel-400 text-lg mb-6 max-w-xl mx-auto"
            >
              What if your next engineer could design industrial pumps AND build the AI to optimize them?
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-accent-400">
                Engineering Expertise is Rare. AI Skills are Rarer. I Have Both.
              </span>
            </motion.div>

            {/* Main Headline with Text Reveal */}
            <div className="mb-6">
              <TextReveal
                text="Mechanical Engineer"
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight justify-center"
                delay={0.4}
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block text-5xl md:text-6xl lg:text-7xl font-display font-bold mt-2 bg-gradient-to-r from-accent-400 via-accent-300 to-primary-400 bg-clip-text text-transparent"
              >
                × AI Developer
              </motion.span>
            </div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-xl md:text-2xl text-steel-300 max-w-3xl mx-auto mb-2 font-medium">
                5+ years designing production systems in automotive manufacturing.
              </p>
              <p className="text-lg md:text-xl text-steel-400 max-w-2xl mx-auto mb-12">
                Now building AI tools that transform how engineering gets done.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/portfolio">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  See What I've Built
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center justify-center gap-6"
            >
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
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
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

      {/* Stats Section - Bento Grid */}
      <section className="relative -mt-20 z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BentoGrid className="grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[140px]">
            <BentoCard span="1x1" glow delay={0}>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Award className="w-8 h-8 text-accent-400 mb-2" />
                <StatCounter value={5} suffix="+" label="Years Experience" className="!text-3xl md:!text-4xl" />
              </div>
            </BentoCard>
            <BentoCard span="1x1" glow delay={0.1}>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Settings className="w-8 h-8 text-secondary-400 mb-2" />
                <StatCounter value={50} suffix="+" label="Pumps Designed" className="!text-3xl md:!text-4xl" />
              </div>
            </BentoCard>
            <BentoCard span="1x1" glow delay={0.2}>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Brain className="w-8 h-8 text-primary-400 mb-2" />
                <StatCounter value={10} suffix="+" label="AI Projects" className="!text-3xl md:!text-4xl" />
              </div>
            </BentoCard>
            <BentoCard span="1x1" glow delay={0.3}>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Factory className="w-8 h-8 text-accent-400 mb-2" />
                <StatCounter value={2} suffix="M+" label="Units Produced" className="!text-3xl md:!text-4xl" />
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Experience Bar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-8 border-y border-steel-800/50"
          >
            <p className="text-steel-500 text-sm uppercase tracking-wider mb-6">
              Trusted By Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {['Pfizer', 'John Deere', 'Louisiana Tech'].map((company) => (
                <motion.span
                  key={company}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl md:text-3xl font-bold text-steel-500 hover:text-white transition-colors"
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
            <Badge variant="accent" className="mb-4">Core Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              A rare intersection of deep engineering expertise and modern AI development
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
                <GlassCard padding="lg" glow className="h-full">
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-steel-400 leading-relaxed mb-4">{prop.description}</p>

                  {/* Benefit */}
                  <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-accent-500/10 border border-accent-500/20">
                    <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-accent-300">{prop.benefit}</p>
                  </div>

                  {/* Proof */}
                  <p className="text-xs text-steel-500 mb-4 italic">{prop.proof}</p>

                  <div className="flex flex-wrap gap-2">
                    {prop.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
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
            <Badge variant="accent" className="mb-4">Technical Stack</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Tools of the Trade
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
                <GlassCard padding="md" hover>
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
                        className="px-3 py-1.5 text-sm rounded-lg bg-steel-800/50 text-steel-300 border border-steel-700/50 hover:border-accent-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
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

      {/* About Snapshot Section */}
      <section className="py-24 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge variant="accent" className="mb-4">About Me</Badge>
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Production engineering taught me that details matter.
              </h2>
              <p className="text-lg text-steel-300 mb-6">
                When you design pumps that move 500 gallons per minute, there's no room
                for "close enough." That same precision now drives everything I build—
                whether it's a rotating assembly or an AI agent.
              </p>
              <p className="text-steel-400 mb-8 p-3 rounded-lg bg-accent-500/10 border border-accent-500/20">
                I'm not a developer who took an engineering class, or an engineer who
                watched a coding tutorial. I've done both—deeply.
              </p>
              <Link href="/about">
                <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  The Full Story →
                </Button>
              </Link>
            </div>

            <GlassCard padding="lg" glow>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Fast Learner</h4>
                    <p className="text-sm text-steel-400">Self-taught full-stack developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-500/20 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-secondary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Precision-Driven</h4>
                    <p className="text-sm text-steel-400">Engineering discipline in every project</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AI-Forward</h4>
                    <p className="text-sm text-steel-400">Building the future of engineering tools</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
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
                Ready to Build Something Together?
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
                    Start a Project
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

              {/* Resume Downloads */}
              <div className="flex items-center justify-center gap-4 mt-8 text-sm">
                <a
                  href="/resumes/Mechanical_DrafterModeler_Automation%20Resume.docx.pdf"
                  download
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download ME Resume</span>
                </a>
                <span className="text-white/40">|</span>
                <a
                  href="/resumes/AI%20Developer_Fullstack%20Developer_AIML_Engineer%20Resume.docx.pdf"
                  download
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download AI/Dev Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
