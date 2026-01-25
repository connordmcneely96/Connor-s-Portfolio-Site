'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import ModelViewer from '@/components/projects/ModelViewer';
import {
  getProjectBySlug,
  projects,
  categoryLabels,
  statusLabels,
  statusColors,
} from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { category, slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project || project.category !== category) {
    notFound();
  }

  // Get adjacent projects for navigation
  const categoryProjects = projects
    .filter((p) => p.category === project.category)
    .sort((a, b) => a.order - b.order);
  const currentIndex = categoryProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = categoryProjects[currentIndex - 1];
  const nextProject = categoryProjects[currentIndex + 1];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-primary-800/50 border-b border-steel-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/portfolio" className="text-steel-400 hover:text-white transition-colors">
              Portfolio
            </Link>
            <ChevronRight className="w-4 h-4 text-steel-600" />
            <Link
              href={`/portfolio?category=${project.category}`}
              className="text-steel-400 hover:text-white transition-colors"
            >
              {categoryLabels[project.category]}
            </Link>
            <ChevronRight className="w-4 h-4 text-steel-600" />
            <span className="text-accent-400">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid-50 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category & Status */}
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="accent">{categoryLabels[project.category]}</Badge>
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
                {statusLabels[project.status]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-steel-300 max-w-3xl mb-8">
              {project.longDescription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" leftIcon={<Github className="w-4 h-4" />}>
                    View Code
                  </Button>
                </a>
              )}
              {project.links?.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button leftIcon={<ExternalLink className="w-4 h-4" />}>
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* 3D Model Viewer (if available) */}
              {project.modelPath && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">3D Model</h2>
                  <ModelViewer
                    src={project.modelPath}
                    alt={project.title}
                    className="aspect-video"
                  />
                </motion.div>
              )}

              {/* Project Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card padding="lg">
                  <h2 className="text-2xl font-bold text-white mb-6">Project Highlights</h2>
                  <ul className="space-y-4">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent-400 text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-steel-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Technical Details (for ME projects) */}
              {project.category === 'mechanical' && project.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card padding="lg">
                    <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-4 rounded-xl bg-steel-800/30">
                          <div className="text-2xl font-bold text-accent-400 mb-1">{metric.value}</div>
                          <div className="text-sm text-steel-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card padding="lg">
                  <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-steel-500 mb-1">Status</p>
                      <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full border ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-steel-500 mb-1">Category</p>
                      <p className="text-white font-medium">{categoryLabels[project.category]}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card padding="lg">
                  <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card padding="lg" className="bg-gradient-to-br from-accent-500/10 to-primary-600/10 border-accent-500/30">
                  <h3 className="text-lg font-bold text-white mb-2">Interested in Similar Work?</h3>
                  <p className="text-steel-400 text-sm mb-4">
                    Let's discuss how I can help with your project.
                  </p>
                  <Link href="/contact">
                    <Button fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Get in Touch
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-steel-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.category}/${prevProject.slug}`}
                className="flex items-center gap-3 text-steel-400 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-steel-500">Previous Project</p>
                  <p className="font-medium">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link href="/portfolio">
              <Button variant="outline" size="sm">
                All Projects
              </Button>
            </Link>

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.category}/${nextProject.slug}`}
                className="flex items-center gap-3 text-steel-400 hover:text-white transition-colors group text-right"
              >
                <div>
                  <p className="text-xs text-steel-500">Next Project</p>
                  <p className="font-medium">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
