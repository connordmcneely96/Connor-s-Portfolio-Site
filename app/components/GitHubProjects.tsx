'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Code2,
  Rocket,
  Star,
  GitFork
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  stats?: {
    stars?: number;
    forks?: number;
  };
  featured?: boolean;
  category: 'AI/ML' | 'Full-Stack' | 'Mechanical' | 'Hybrid';
}

const projects: Project[] = [
  {
    title: 'Inner Animals AI Dashboard',
    description: 'Enterprise-grade AI platform featuring RAG document processing, ML model training, NLP analytics, and computer vision capabilities. Built with Next.js, FastAPI, and PyTorch for scalable AI/ML workflows.',
    tags: ['Next.js', 'FastAPI', 'PyTorch', 'LangChain', 'Pinecone', 'TensorFlow', 'RAG'],
    githubUrl: 'https://github.com/connordmcneely96/inner-animals-ai-dashboard',
    liveUrl: '/dashboard',
    featured: true,
    category: 'Hybrid',
  },
  {
    title: 'Leadership Legacy',
    description: 'Modern portfolio website built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Features server-side rendering, advanced animations with Framer Motion, Three.js 3D CAD viewer integration, and responsive design. Optimized for performance with Vercel edge functions.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'SSR'],
    githubUrl: 'https://github.com/connordmcneely96/LeadershipLegacy',
    liveUrl: 'https://leadership-legacy.vercel.app',
    category: 'Full-Stack',
  },
  {
    title: 'Southern Pets Animal Rescue',
    description: 'Enterprise-grade MERN stack application for animal shelter management. Features real-time pet availability, advanced search/filtering, adoption workflow automation, and administrative dashboard. Implements RESTful API architecture with JWT authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth', 'REST API'],
    githubUrl: 'https://github.com/connordmcneely96/Southern-Pets-Animal-Rescue-client-project',
    liveUrl: 'https://southern-pets-animal-rescue-client.vercel.app/',
    category: 'Full-Stack',
  },
  {
    title: 'AI-Powered Health & Fitness Coach',
    description: 'Full-stack AI coaching platform with GPT-4 integration for personalized workout and nutrition plans. Features real-time progress tracking, adaptive workout generation, and nutritional analysis. Built with React frontend and Python FastAPI backend.',
    tags: ['React', 'OpenAI GPT-4', 'Python', 'FastAPI', 'PostgreSQL', 'ML'],
    githubUrl: 'https://github.com/connordmcneely96/AI_Powered_Health_-_Fitness_Coach',
    liveUrl: 'https://ai-powered-health-fitness-coach.vercel.app/',
    category: 'AI/ML',
  },
  {
    title: 'RAG Q&A for Mechanical Engineers',
    description: 'Production-grade Retrieval-Augmented Generation system leveraging LangChain and Pinecone vector database. Enables semantic search across technical documentation with context-aware AI responses. Built with Python backend and Next.js frontend for optimal performance.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'Vector DB', 'Next.js', 'FastAPI'],
    githubUrl: 'https://github.com/connordmcneely96/RAG-Q-A-for-Mechanical-Engineers',
    liveUrl: 'https://rag-q-a-for-mechanical-engineers.vercel.app/',
    featured: true,
    category: 'AI/ML',
  },
  {
    title: 'CAD Autonomous Engine',
    description: 'Intelligent CAD design automation system using machine learning to generate and optimize mechanical engineering designs. Features parametric design generation, automated FEA analysis integration, and real-time design optimization algorithms.',
    tags: ['Python', 'PyTorch', 'CAD API', 'FastAPI', 'React', 'ML Optimization'],
    githubUrl: 'https://github.com/connordmcneely96/CAD_Autonomous_Engine',
    liveUrl: 'https://cad-autonomous-engine-backend.vercel.app/',
    category: 'Hybrid',
  },
  {
    title: 'iAutodidact',
    description: 'High-performance learning management system built with Rust and compiled to WebAssembly for near-native browser performance. Features personalized learning paths, progress analytics, and spaced-repetition algorithms. React frontend with Rust/WASM core.',
    tags: ['Rust', 'WebAssembly', 'React', 'PostgreSQL', 'WASM', 'Performance'],
    githubUrl: 'https://github.com/connordmcneely96/I-autodidact',
    liveUrl: 'https://i-autodidact-rust.vercel.app/',
    category: 'Full-Stack',
  },
  {
    title: 'Inner Animal Media',
    description: 'Content management and distribution platform with Cloudinary integration for optimized media delivery. Features dynamic image processing, artist portfolio management, responsive galleries, and SEO optimization. Built with Next.js 15 and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary CDN', 'CMS', 'SEO'],
    githubUrl: 'https://github.com/connordmcneely96/InnerAnimalMedia',
    liveUrl: 'https://inner-animal-media-psi.vercel.app/',
    category: 'Full-Stack',
  },
];

export default function GitHubProjects() {
  const [filter, setFilter] = useState<'all' | 'AI/ML' | 'Full-Stack' | 'Mechanical' | 'Hybrid'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categoryStyles = {
    'AI/ML': 'bg-success/10 text-success border-success/30',
    'Full-Stack': 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30',
    'Mechanical': 'bg-warning/10 text-warning border-warning/30',
    'Hybrid': 'bg-brand-blue-electric/10 text-brand-blue-electric border-brand-blue-electric/30',
  };

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
          <Code2 className="w-4 h-4 text-brand-cyan" />
          <span className="text-sm font-medium text-brand-cyan">Open Source & Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Software Projects
        </h2>
        <p className="text-xl text-circuit-silver max-w-3xl mx-auto mb-8">
          Building modern web applications with cutting-edge technologies
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === 'all'
                ? 'bg-brand-cyan text-white shadow-glow-cyan'
                : 'bg-neural-slate/60 text-circuit-silver border border-circuit-silver/20 hover:border-brand-cyan/50'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('AI/ML')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === 'AI/ML'
                ? 'bg-success text-white'
                : 'bg-neural-slate/60 text-circuit-silver border border-circuit-silver/20 hover:border-success/50'
            }`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setFilter('Full-Stack')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === 'Full-Stack'
                ? 'bg-brand-cyan text-white shadow-glow-cyan'
                : 'bg-neural-slate/60 text-circuit-silver border border-circuit-silver/20 hover:border-brand-cyan/50'
            }`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setFilter('Hybrid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filter === 'Hybrid'
                ? 'bg-brand-blue-electric text-white'
                : 'bg-neural-slate/60 text-circuit-silver border border-circuit-silver/20 hover:border-brand-blue-electric/50'
            }`}
          >
            Hybrid (AI + Engineering)
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl overflow-hidden hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/0 via-brand-cyan/0 to-brand-blue-electric/0 group-hover:from-brand-cyan/10 group-hover:to-brand-blue-electric/10 transition-all duration-300" />

            <div className="relative p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-xs font-bold rounded border ${categoryStyles[project.category]}`}>
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-warning">
                            <Star className="w-3 h-3 fill-warning" />
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-circuit-silver text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stats (if available) */}
              {project.stats && (
                <div className="flex items-center gap-4 mb-6">
                  {project.stats.stars !== undefined && (
                    <div className="flex items-center gap-1.5 text-circuit-silver">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.stats.stars}</span>
                    </div>
                  )}
                  {project.stats.forks !== undefined && (
                    <div className="flex items-center gap-1.5 text-circuit-silver">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.stats.forks}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 hover:bg-brand-cyan/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-circuit-silver/10 border border-circuit-silver/20 text-white font-medium hover:bg-circuit-silver/20 hover:border-circuit-silver/40 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white font-medium hover:shadow-glow-cyan transition-all duration-200"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </a>
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Add More Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/connordmcneely96"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neural-slate/60 border border-circuit-silver/20 text-circuit-silver font-medium hover:text-brand-cyan hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300"
        >
          <Github className="w-5 h-5" />
          <span>View All Projects on GitHub</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
