import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="text-sm text-zinc-400">
            © {currentYear} • Portfólio profissional em evolução
          </p>
        </div>

        <SocialLinks
          className="flex flex-wrap gap-2"
          linkClassName="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:bg-white/10"
        />
      </div>
    </footer>
  );
}