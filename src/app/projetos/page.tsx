import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { getPublishedProjects } from "@/lib/projects/getProjects";

export default function ProjetosPage() {
  const projects = getPublishedProjects();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Projetos</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Todos os projetos
            </h1>
            <p className="mt-3 max-w-3xl text-zinc-300">
              Uma coleção dos projetos que mostram minha evolução em desenvolvimento web.
            </p>
          </div>

          <Link
            href="/#projetos"
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voltar para Home
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}