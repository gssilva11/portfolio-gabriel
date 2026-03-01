"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactActionState } from "@/app/actions/contact";
import { profile } from "@/data/profile";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Enviar mensagem"}
    </button>
  );
}

const initialState: ContactActionState = {
  ok: false,
  message: "",
};

export function ContactSection() {
  const [state, formAction] = useActionState(sendContact, initialState);

  useEffect(() => {
    // aqui você pode colocar tracking no futuro se quiser
  }, [state.ok]);

  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-4 pb-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Contato</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Vamos conversar
        </h2>

        <p className="mt-4 text-zinc-300">
          Preencha o formulário abaixo ou, se preferir, envie um e-mail direto para{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            {profile.email}
          </a>
          .
        </p>

        <form action={formAction} className="mt-6 grid gap-4 md:max-w-2xl">
          {/* Honeypot (antispam) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-zinc-200">Nome</span>
              <input
                name="name"
                placeholder="Seu nome"
                className="rounded-xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-zinc-200">E-mail</span>
              <input
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="rounded-xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20"
                required
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm text-zinc-200">Mensagem</span>
            <textarea
              name="message"
              placeholder="Me conte sobre a oportunidade, ideia ou feedback..."
              rows={6}
              className="resize-none rounded-xl border border-white/10 bg-zinc-950/30 px-4 py-3 text-sm text-white outline-none transition focus:border-white/20"
              required
            />
          </label>

          {state.message ? (
            <div
              className={`rounded-xl border px-4 py-3 text-sm ${
                state.ok
                  ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                  : "border-red-400/20 bg-red-400/10 text-red-200"
              }`}
            >
              {state.message}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <SubmitButton />
            <span className="text-xs text-zinc-400">
              Ao enviar, sua mensagem será encaminhada para o meu e-mail.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}