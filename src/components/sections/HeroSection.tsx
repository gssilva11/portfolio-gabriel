import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/SocialLinks";

export function HeroSection() {
  return (
    <section id="inicio" className="relative">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div>
          <Reveal delay={0.02}>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              Portfólio em evolução • foco em desenvolvimento web
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-3 text-lg font-medium text-zinc-200 md:text-xl">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              {profile.headline}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:opacity-90"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Falar comigo
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <SocialLinks
              className="mt-6 flex flex-wrap gap-2"
              linkClassName="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold text-white">Resumo profissional</h2>

            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Formação em ADS (Fatec de Franca)</li>
              <li>• Experiência em suporte de TI e telecom</li>
              <li>• Foco atual em React, TypeScript, Node.js e projetos reais</li>
              <li>• Objetivo: atuar profissionalmente como desenvolvedor</li>
            </ul>

            <p className="mt-5 text-sm text-zinc-400">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}