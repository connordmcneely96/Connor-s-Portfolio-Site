'use client';

import { motion } from 'framer-motion';
import { type Project, projects, categoryLabels } from '@/data/projects';

type CategoryFilter = 'all' | Project['category'];

interface ProjectFilterProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

export default function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  const categories: { value: CategoryFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'mechanical', label: categoryLabels.mechanical, count: projects.filter(p => p.category === 'mechanical').length },
    { value: 'ai-ml', label: categoryLabels['ai-ml'], count: projects.filter(p => p.category === 'ai-ml').length },
    { value: 'fullstack', label: categoryLabels.fullstack, count: projects.filter(p => p.category === 'fullstack').length },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
            activeCategory === category.value
              ? 'text-white'
              : 'text-steel-400 hover:text-white hover:bg-steel-800/50'
          }`}
        >
          {activeCategory === category.value && (
            <motion.div
              layoutId="active-filter"
              className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-600/20 border border-accent-500/30 rounded-xl"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            {category.label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeCategory === category.value
                ? 'bg-accent-500/30 text-accent-300'
                : 'bg-steel-700/50 text-steel-500'
            }`}>
              {category.count}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
