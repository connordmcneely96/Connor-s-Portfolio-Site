'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import ModelViewer from '@/components/projects/ModelViewer';
import {
  categoryLabels,
  statusLabels,
  statusColors,
  type Project,
} from '@/data/projects';

interface ProjectPageClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

function ProjectImageGallery({ project }: { project: Project }) {
  const images = project.images && project.images.length > 0
    ? project.images
    : project.primaryImage
      ? [project.primaryImage]
      : project.thumbnail
        ? [project.thumbnail]
        : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;
    intervalRef.current = setInterval(() => {
      setImageError(false);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultiple, images.length]);

  const goNext = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    // Reset auto-advance timer
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageError(false);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageError(false);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">Project Images</h2>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary-900 border border-steel-700/30">
        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-accent-500/20 to-primary-900 flex items-center justify-center">
            <span className="text-steel-500 text-sm font-medium">{project.title}</span>
          </div>
        ) : (
          <Image
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${project.title} - image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            onError={() => setImageError(true)}
          />
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary-900/70 text-white hover:bg-primary-800 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-primary-900/70 text-white hover:bg-primary-800 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
              {images.map((_img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setImageError(false);
                    setCurrentIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-accent-400' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter */}
        {hasMultiple && (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary-900/70 text-white text-xs font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectPageClient({
  project,
  prevProject,
  nextProject,
}: ProjectPageClientProps) {
  const hasImages = (project.images && project.images.length > 0) ||
    project.primaryImage ||
    project.thumbnail;

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
              {/* Image Gallery */}
              {hasImages && <ProjectImageGallery project={project} />}

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
                    {project.client && (
                      <div>
                        <p className="text-sm text-steel-500 mb-1">Client</p>
                        <p className="text-white font-medium">{project.client}</p>
                      </div>
                    )}
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
                    Let&apos;s discuss how I can help with your project.
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
