'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectGrid from '@/components/projects/ProjectGrid';
import { projects, type Project, categoryLabels } from '@/data/projects';

type CategoryFilter = 'all' | Project['category'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects.sort((a, b) => a.order - b.order);
    }
    return projects
      .filter((p) => p.category === activeCategory)
      .sort((a, b) => a.order - b.order);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => ({
    all: projects.length,
    mechanical: projects.filter((p) => p.category === 'mechanical').length,
    'ai-ml': projects.filter((p) => p.category === 'ai-ml').length,
    fullstack: projects.filter((p) => p.category === 'fullstack').length,
  }), []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-20" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Projects & Work
            </h1>
            <p className="text-xl text-steel-400 max-w-2xl mx-auto">
              A collection of mechanical engineering, AI/ML, and full-stack development projects
              showcasing the intersection of physical and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-steel-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ProjectFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-between mb-8"
          >
            <p className="text-steel-400">
              Showing{' '}
              <span className="text-white font-semibold">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeCategory !== 'all' && (
                <span>
                  {' '}in <span className="text-accent-400">{categoryLabels[activeCategory as Project['category']]}</span>
                </span>
              )}
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectGrid projects={filteredProjects} columns={3} />
          </motion.div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-16 bg-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Project Categories
            </h2>
            <p className="text-steel-400 max-w-xl mx-auto">
              Explore work across different disciplines, each representing years of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'mechanical' as const,
                title: 'Mechanical Engineering',
                description: 'Industrial pump design, rotating equipment, FEA analysis, and manufacturing-ready documentation.',
                color: 'secondary',
              },
              {
                category: 'ai-ml' as const,
                title: 'AI/ML Development',
                description: 'RAG systems, multi-agent architectures, LangChain applications, and intelligent automation.',
                color: 'accent',
              },
              {
                category: 'fullstack' as const,
                title: 'Full-Stack Development',
                description: 'Modern web applications with Next.js, React, and cloud-native architectures.',
                color: 'primary',
              },
            ].map((item, index) => (
              <motion.button
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveCategory(item.category)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeCategory === item.category
                    ? 'bg-accent-500/10 border-accent-500/50'
                    : 'bg-primary-800/50 border-steel-700/30 hover:border-accent-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-bold bg-accent-500/20 text-accent-400">
                    {categoryCounts[item.category]}
                  </span>
                </div>
                <p className="text-steel-400 text-sm">{item.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
