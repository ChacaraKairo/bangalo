import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/features/contact/contact-form";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite orçamento para projetos comerciais, quiosques, lojas e mobiliário."
};

export default function ContatoPage() {
  return (
    <main>
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contato"
              title="Conte sobre o espaço que sua marca precisa criar."
              text="O formulário solicita apenas o essencial e prepara a conversa pelo WhatsApp, principal canal comercial previsto nas regras do projeto."
            />
            <div className="mt-10 grid gap-4 text-sm text-[var(--muted)]">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex min-h-10 items-center gap-3">
                <MessageCircle aria-hidden="true" size={18} />
                Falar pelo WhatsApp
              </a>
              <a href="mailto:contato@bangalodesign.com.br" className="flex min-h-10 items-center gap-3">
                <Mail aria-hidden="true" size={18} />
                contato@bangalodesign.com.br
              </a>
              <span className="flex items-center gap-3">
                <Phone aria-hidden="true" size={18} />
                Atendimento para projetos comerciais sob medida
              </span>
            </div>
          </div>
          <div className="border border-black/10 bg-white/45 p-6 md:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
