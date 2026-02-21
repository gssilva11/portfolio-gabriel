import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { getPublishedProjects } from "@/lib/projects/getProjects";

export function ProjectsSection() {
  const visibleProjects = getPublishedProjects();

  return (
    <section id="projetos" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Projetos</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Aplicações que mostram minha evolução
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300 md:text-base">
            Projetos com foco em prática real: front-end, back-end, organização de dados
            e experiência de uso. Essa estrutura já está preparada para evoluir para banco de dados
            e painel administrativo no futuro.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}