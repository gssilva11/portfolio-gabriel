import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
      <Reveal>
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Skills</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Tecnologias e ferramentas
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300 md:text-base">
            Minha stack atual e o que estou consolidando no dia a dia com prática em projetos.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {profile.skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}