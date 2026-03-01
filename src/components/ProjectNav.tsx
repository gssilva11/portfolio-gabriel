import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectNavProps = {
  prev?: Project;
  next?: Project;
};

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav className="mt-8 grid gap-3 md:grid-cols-2">
      {prev ? (
        <Link
          href={`/projetos/${prev.slug}`}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Anterior</p>
          <p className="mt-2 text-base font-semibold text-white">{prev.title}</p>
          <p className="mt-1 text-sm text-zinc-300">{prev.summary}</p>
        </Link>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-400">
          Você está no primeiro projeto.
        </div>
      )}

      {next ? (
        <Link
          href={`/projetos/${next.slug}`}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Próximo</p>
          <p className="mt-2 text-base font-semibold text-white">{next.title}</p>
          <p className="mt-1 text-sm text-zinc-300">{next.summary}</p>
        </Link>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-400">
          Você está no último projeto.
        </div>
      )}
    </nav>
  );
}