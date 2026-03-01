"use server";

import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2, "Nome muito curto.").max(80, "Nome muito longo."),
  email: z.string().email("E-mail inválido.").max(120, "E-mail muito longo."),
  message: z.string().min(10, "Mensagem muito curta.").max(2000, "Mensagem muito longa."),
  company: z.string().optional(), // honeypot
});

export type ContactActionState =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function sendContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  try {
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    // Antispam: se o bot preencher, finge sucesso.
    if (raw.company && raw.company.trim().length > 0) {
      return { ok: true, message: "Mensagem enviada com sucesso." };
    }

    const parsed = ContactSchema.safeParse(raw);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Dados inválidos.";
      return { ok: false, message: firstError };
    }

    const { name, email, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey) {
      return { ok: false, message: "Defina RESEND_API_KEY no .env.local / Vercel." };
    }
    if (!toEmail) {
      return { ok: false, message: "Defina CONTACT_TO_EMAIL no .env.local / Vercel." };
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Novo contato pelo portfólio — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return { ok: true, message: "Mensagem enviada! Vou te responder em breve." };
  } catch {
    return { ok: false, message: "Falha ao enviar. Tente novamente em instantes." };
  }
}