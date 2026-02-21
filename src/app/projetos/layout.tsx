import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-zinc-700/20 blur-3xl" />
      </div>

      <Header />
      {children}
      <Footer />
    </main>
  );
}