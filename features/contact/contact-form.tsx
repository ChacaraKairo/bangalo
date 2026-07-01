"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  phone: z.string().min(8, "Informe um telefone válido."),
  company: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Conte brevemente sobre o projeto.")
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClass =
  "w-full border border-black/10 bg-white/70 px-4 py-3 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--forest)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  function onSubmit(data: ContactFormData) {
    const message = [
      "Olá! Gostaria de solicitar um orçamento para um projeto comercial.",
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.company ? `Empresa: ${data.company}` : null,
      data.projectType ? `Tipo de projeto: ${data.projectType}` : null,
      `Mensagem: ${data.message}`
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(`https://wa.me/5519982383450?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome" error={errors.name?.message}>
          <input className={inputClass} autoComplete="name" {...register("name")} />
        </Field>
        <Field label="Telefone" error={errors.phone?.message}>
          <input className={inputClass} autoComplete="tel" inputMode="tel" {...register("phone")} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Empresa">
          <input className={inputClass} autoComplete="organization" {...register("company")} />
        </Field>
        <Field label="Tipo de projeto">
          <select className={inputClass} {...register("projectType")} defaultValue="">
            <option value="">Selecionar</option>
            <option>Quiosque</option>
            <option>Loja</option>
            <option>Mobiliário comercial</option>
            <option>Projeto personalizado</option>
          </select>
        </Field>
      </div>
      <Field label="Mensagem" error={errors.message?.message}>
        <textarea className={cn(inputClass, "min-h-36 resize-y")} {...register("message")} />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--forest)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d2a23] disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        <Send aria-hidden="true" size={17} />
        Enviar pelo WhatsApp
      </button>
      {sent ? <p className="text-sm text-[var(--forest)]">Mensagem preparada no WhatsApp.</p> : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
      {label}
      {children}
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
