"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900">
        {project.imagePath ? (
          <Image
            src={project.imagePath}
            alt={`Capa do projeto ${project.title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-zinc-400">Screenshot do projeto (futuro)</span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <h3 className="text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-300">{project.summary}</p>

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
        {project.links.demo ? (
          <a
            href={project.links.demo}
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

        {project.links.github ? (
          <a
            href={project.links.github}
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
    </motion.article>
  );
}