import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectNav } from "@/components/ProjectNav";
import {
  getProjectBySlug,
  getProjectNavBySlug,
  getPublishedProjectSlugs,
} from "@/lib/projects/getProjects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado | Gabriel Santos" };
  }

  return {
    title: `${project.title} | Gabriel Santos`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getProjectNavBySlug(slug);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
      <div className="mb-8">
        <Link
          href="/#projetos"
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10"
        >
          ← Voltar para projetos
        </Link>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-7">
        <div className="relative mb-6 h-56 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 md:h-80">
          {project.imagePath ? (
            <Image
              src={project.imagePath}
              alt={`Capa do projeto ${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-sm text-zinc-400">Imagem do projeto</span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Projeto</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-300">{project.summary}</p>
          </div>

          <div className="min-w-[220px] rounded-xl border border-white/10 bg-white/5 p-4">
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-zinc-400">Status</dt>
                <dd className="text-zinc-100">{project.status ?? "—"}</dd>
              </div>

              <div className="flex items-center justify-between gap-3">
                <dt className="text-zinc-400">Ano</dt>
                <dd className="text-zinc-100">{project.year ?? "—"}</dd>
              </div>

              <div className="flex items-center justify-between gap-3">
                <dt className="text-zinc-400">Slug</dt>
                <dd className="text-zinc-100">{project.slug}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
            >
              Ver demo
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          )}
        </div>
      </section>

      <section className="mt-6 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Contexto e descrição</h2>
          <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

          {project.role && (
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Papel no projeto</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{project.role}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Destaques</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
              {(project.highlights ?? []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Aprendizados</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
              {(project.learnings ?? []).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navegação anterior/próximo */}
      <ProjectNav prev={prev} next={next} />
    </div>
  );
}