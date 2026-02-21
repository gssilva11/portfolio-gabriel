import { projects, type Project } from "@/data/projects";

function sortProjects(list: Project[]) {
  return [...list].sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getPublishedProjects() {
  return sortProjects(projects.filter((project) => project.isPublished));
}

export function getFeaturedProjects() {
  return sortProjects(
    projects.filter((project) => project.isPublished && project.featured),
  );
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug && project.isPublished);
}