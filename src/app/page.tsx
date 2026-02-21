import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-zinc-700/20 blur-3xl" />
      </div>

      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />

      <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Sobre</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Minha transição para desenvolvimento
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-zinc-300">
            Sou formado em Análise e Desenvolvimento de Sistemas pela Fatec de Franca.
            Durante a graduação, senti que não consegui consolidar programação da forma que eu queria.
            Agora estou reconstruindo essa base com prática real, disciplina e projetos aplicados.
            Este portfólio é parte desse processo — e também a minha vitrine profissional.
          </p>
          <p className="mt-4 max-w-4xl leading-7 text-zinc-400">{profile.shortBio}</p>
        </div>
      </section>

      <section id="contato" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Contato</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Vamos conversar
          </h2>
          <p className="mt-4 text-zinc-300">
            Você pode entrar em contato comigo pelo e-mail{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              {profile.email}
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}