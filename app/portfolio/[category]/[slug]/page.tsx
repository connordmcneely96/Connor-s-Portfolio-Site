import { notFound } from 'next/navigation';
import {
  getProjectBySlug,
  projects,
} from '@/data/projects';
import ProjectPageClient from './ProjectPageClient';

interface ProjectPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.category !== category) {
    notFound();
  }

  // Get adjacent projects for navigation
  const categoryProjects = projects
    .filter((p) => p.category === project.category)
    .sort((a, b) => a.order - b.order);
  const currentIndex = categoryProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = categoryProjects[currentIndex - 1] || null;
  const nextProject = categoryProjects[currentIndex + 1] || null;

  return (
    <ProjectPageClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
