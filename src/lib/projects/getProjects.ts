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

export function getPublishedProjectSlugs() {
  return getPublishedProjects().map((project) => project.slug);
}

export function getProjectNavBySlug(slug: string) {
  const list = getPublishedProjects();
  const index = list.findIndex((p) => p.slug === slug);

  if (index === -1) return { prev: undefined, next: undefined };

  const prev = index > 0 ? list[index - 1] : undefined;
  const next = index < list.length - 1 ? list[index + 1] : undefined;

  return { prev, next };
}