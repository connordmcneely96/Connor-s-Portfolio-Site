'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { type Project, categoryLabels, statusColors } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const galleryImages = useMemo(
    () => (project.images && project.images.length > 0 ? project.images : [project.primaryImage || project.thumbnail]),
    [project.images, project.primaryImage, project.thumbnail]
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const activeImage = galleryImages[imageIndex] || project.thumbnail;
  const hasMultipleImages = galleryImages.length > 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance carousel every 4 seconds, pause on hover
  useEffect(() => {
    if (!hasMultipleImages) return;
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setImageError(false);
      setImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasMultipleImages, isHovered, galleryImages.length]);

  const showNext = useCallback(() => {
    setImageError(false);
    setImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const showPrev = useCallback(() => {
    setImageError(false);
    setImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-primary-800/60 backdrop-blur-xl border border-steel-700/30 rounded-2xl overflow-hidden hover:border-accent-500/50 hover:shadow-glow-cyan transition-all duration-300"
    >
      {/* Hero Image / Gallery */}
      <div
        className="relative h-[220px] overflow-hidden bg-primary-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fallback gradient shown on image error */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-accent-500/20 to-primary-900 flex items-center justify-center">
            <span className="text-steel-500 text-sm font-medium">{project.title}</span>
          </div>
        )}

        {!imageError && (
          <Image
            key={activeImage}
            src={activeImage}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={handleImageError}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="accent" size="sm">
            {categoryLabels[project.category]}
          </Badge>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
            {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>

        {/* Carousel Controls — z-20 so they sit above the hover overlay */}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-primary-900/70 text-white hover:bg-primary-800 transition-colors"
              aria-label={`Previous image for ${project.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-primary-900/70 text-white hover:bg-primary-800 transition-colors"
              aria-label={`Next image for ${project.title}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {galleryImages.map((_image, dotIndex) => (
                <button
                  key={`${project.id}-dot-${dotIndex}`}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImageError(false);
                    setImageIndex(dotIndex);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${dotIndex === imageIndex ? 'bg-accent-400' : 'bg-white/60'}`}
                  aria-label={`View image ${dotIndex + 1} for ${project.title}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hover Overlay — pointer-events-none so it doesn't block arrows */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
          <div className="flex gap-2 pointer-events-auto">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-steel-800/80 text-white hover:bg-steel-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-steel-800/80 text-white hover:bg-steel-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-steel-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.client && (
          <p className="text-xs text-steel-500 mb-4">
            Client: <span className="text-steel-300">{project.client}</span>
          </p>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-steel-800/50 text-steel-300 border border-steel-700/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-steel-800/50 text-steel-500 border border-steel-700/50">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex gap-4 mb-4 pt-4 border-t border-steel-700/30">
            {project.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-accent-400 font-bold text-sm">{metric.value}</div>
                <div className="text-steel-500 text-xs">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* View Project Link */}
        <Link
          href={`/portfolio/${project.category}/${project.slug}`}
          className="inline-flex items-center gap-2 text-accent-400 font-medium text-sm hover:gap-3 transition-all group/link"
        >
          View Project
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
