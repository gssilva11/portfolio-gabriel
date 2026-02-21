import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-lg items-center justify-center px-4">
      <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Projeto</p>
        <h1 className="mt-2 text-2xl font-semibold text-white">Projeto não encontrado</h1>
        <p className="mt-4 leading-7 text-zinc-300">
          O projeto que você tentou acessar não existe ou ainda não está publicado.
        </p>

        <div className="mt-6">
          <Link
            href="/#projetos"
            className="inline-flex rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voltar para projetos
          </Link>
        </div>
      </div>
    </div>
  );
}