import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900">
        <span className="text-sm text-zinc-400">Screenshot do projeto (futuro)</span>
      </div>

      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-900 transition hover:opacity-90"
          >
            Ver demo
          </a>
        ) : (
          <span className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-400">
            Demo em breve
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-3 py-2 text-sm text-zinc-100 transition hover:bg-white/10"
          >
            GitHub
          </a>
        ) : (
          <span className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-400">
            GitHub em breve
          </span>
        )}
      </div>
    </article>
  );
}