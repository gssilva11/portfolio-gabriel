import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projetos" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Projetos</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Aplicações que mostram minha evolução
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300 md:text-base">
          Projetos com foco em prática real: front-end, back-end, organização de dados
          e experiência de uso. Essa seção vai evoluir com demos, screenshots e melhorias
          visuais nas próximas sprints.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}