import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, ClipboardList, Cuboid, FileText, Lightbulb, PenTool, Wrench } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Conheça o processo da Bangalô Design para transformar briefing em quiosques, lojas e espaços comerciais prontos para operar."
};

const detailedSteps = [
  {
    icon: ClipboardList,
    title: "Imersão",
    text: "Entendemos a marca, a operação, o ponto comercial, o público e as restrições reais do projeto.",
    deliverables: ["Briefing orientado", "Levantamento de necessidades", "Mapa inicial de prioridades"]
  },
  {
    icon: Lightbulb,
    title: "Conceito",
    text: "Definimos a direção visual e funcional para que a ideia tenha personalidade, clareza e viabilidade.",
    deliverables: ["Referências visuais", "Direção de materiais", "Primeira leitura de volumetria"]
  },
  {
    icon: Cuboid,
    title: "Visualização",
    text: "Usamos render e 3D para antecipar decisões, testar proporções e alinhar expectativas antes da execução.",
    deliverables: ["Renders de apresentação", "Estudo de proporção", "Ponto de integração para GLB"]
  },
  {
    icon: PenTool,
    title: "Projeto técnico",
    text: "Organizamos medidas, materiais, detalhes construtivos e compatibilizações para orientar a produção.",
    deliverables: ["Detalhamento", "Especificações", "Ajustes para montagem"]
  },
  {
    icon: Wrench,
    title: "Produção e montagem",
    text: "A execução segue o projeto com atenção a acabamento, funcionamento, resistência e apresentação final.",
    deliverables: ["Acompanhamento de produção", "Conferência de acabamento", "Entrega orientada ao uso"]
  }
];

const decisionPoints = [
  "O espaço precisa vender melhor, atender melhor ou comunicar melhor?",
  "Quais produtos ou serviços precisam receber mais destaque?",
  "Como o cliente circula, espera, compra e interage com a equipe?",
  "Quais materiais equilibram presença visual, custo, resistência e manutenção?",
  "O projeto consegue ser montado, transportado e mantido com segurança?"
];

export default function ProcessoPage() {
  return (
    <main>
      <section className="bg-[var(--stone)] py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Processo"
            title="Um método para tirar o projeto do campo das ideias."
            text="A Bangalô conduz o projeto como uma sequência de decisões claras. Cada etapa reduz incertezas e aproxima a marca de um espaço comercial pronto para operar."
          />
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sand)]">
            <Image
              src="/projects/quiosque-externo-04.webp"
              alt="Quiosque comercial externo com estrutura e comunicação visual"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <SectionHeading
              eyebrow="Etapas"
              title="Da conversa inicial à execução."
              text="O processo abaixo já está preparado para receber exemplos reais, imagens de bastidores e documentos técnicos em uma próxima fase."
            />
            <p className="text-lg leading-8 text-[var(--muted)]">
              A intenção não é criar burocracia. É dar ao cliente segurança para decidir e à produção
              informações suficientes para executar com precisão.
            </p>
          </div>

          <div className="grid gap-5">
            {detailedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="grid gap-6 border-t border-black/10 py-8 lg:grid-cols-[120px_0.8fr_1fr]"
                >
                  <div>
                    <span className="display-font text-5xl text-[var(--clay)]">0{index + 1}</span>
                  </div>
                  <div>
                    <Icon aria-hidden="true" size={30} className="text-[var(--forest)]" />
                    <h2 className="mt-5 text-3xl font-semibold text-[var(--ink)]">{step.title}</h2>
                    <p className="mt-4 text-base leading-8 text-[var(--muted)]">{step.text}</p>
                  </div>
                  <div className="grid gap-3 self-start bg-white/45 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
                      Entregáveis
                    </p>
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-[var(--ink)]">
                        <CheckCircle2 aria-hidden="true" size={17} className="text-[var(--forest)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white/45 py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--stone)]">
            <Image
              src="/projects/loja-05.webp"
              alt="Loja comercial com mobiliário e exposição planejada"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Perguntas que guiam"
              title="Antes de desenhar, é preciso entender o que o espaço precisa resolver."
              text="Boas decisões surgem quando o projeto responde às perguntas certas. É assim que design deixa de ser decoração e vira estratégia comercial."
            />
            <div className="mt-8 grid gap-4">
              {decisionPoints.map((item) => (
                <div key={item} className="flex gap-4 border-t border-black/10 pt-4">
                  <FileText aria-hidden="true" size={19} className="mt-1 shrink-0 text-[var(--clay)]" />
                  <p className="text-base leading-7 text-[var(--ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Menos dúvida",
              text: "Cada etapa organiza informações para que o cliente visualize o caminho antes de investir na execução."
            },
            {
              title: "Mais coerência",
              text: "Conceito, material, iluminação e função caminham juntos para evitar soluções soltas."
            },
            {
              title: "Execução mais segura",
              text: "O projeto técnico reduz ruído entre ideia, produção, montagem e uso diário."
            }
          ].map((item) => (
            <article key={item.title} className="border border-black/10 p-7">
              <h2 className="display-font text-4xl text-[var(--forest)]">{item.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
