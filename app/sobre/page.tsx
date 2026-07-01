import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Boxes, DraftingCompass, Eye, Layers3, Ruler } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Bangalô Design: design, arquitetura e engenharia para quiosques, lojas e espaços comerciais sob medida."
};

const principles = [
  {
    icon: DraftingCompass,
    title: "Conceito com intenção",
    text: "Cada escolha visual precisa comunicar a marca, orientar o cliente e facilitar a operação."
  },
  {
    icon: Ruler,
    title: "Projeto que vira obra",
    text: "A estética é pensada junto com medidas, materiais, montagem, manutenção e rotina de uso."
  },
  {
    icon: Eye,
    title: "Visualização antes da execução",
    text: "Renders e 3D ajudam a antecipar decisões e reduzem dúvidas antes da produção."
  }
];

const capabilities = [
  "Quiosques para shopping centers, galerias e eventos",
  "Lojas e ambientes comerciais com identidade de marca",
  "Balcões, expositores, displays e mobiliário sob medida",
  "Fachadas, comunicação visual e pontos de atendimento",
  "Projetos personalizados para operações em expansão",
  "Apoio visual em 3D para tomada de decisão"
];

export default function SobrePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] py-24 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-45 lg:block">
          <Image
            src="/projects/quem-somos.webp"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/55 to-transparent" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
              Sobre a Bangalô
            </p>
            <h1 className="display-font text-5xl leading-tight md:text-7xl">
              Espaços comerciais desenhados para vender, operar e permanecer na memória.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              A Bangalô Design atua na criação de quiosques, lojas, mobiliário e projetos
              personalizados para marcas que precisam transformar uma ideia em presença física.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--stone)]">
            <Image
              src="/projects/quiosque-interno-25.webp"
              alt="Detalhe de quiosque comercial com mobiliário e iluminação planejados"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Visão"
              title="A marca não aparece apenas no logotipo. Ela aparece na circulação, na luz e no atendimento."
              text="Um bom espaço comercial precisa ser bonito, mas também precisa orientar pessoas, valorizar produtos, resistir ao uso e apoiar quem trabalha ali todos os dias."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="border-l border-[var(--line)] pl-5">
                  <p className="display-font text-4xl text-[var(--forest)]">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white/45 py-24">
        <Container>
          <SectionHeading
            eyebrow="Como pensamos"
            title="Design premium sem perder o chão da operação."
            text="A proposta visual precisa encantar o cliente final, mas o projeto só se sustenta quando funciona para a equipe, para o ponto comercial e para a marca."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-black/10 bg-[var(--sand)] p-7">
                  <Icon aria-hidden="true" size={30} className="text-[var(--forest)]" />
                  <h2 className="mt-7 text-2xl font-semibold text-[var(--ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="O que a Bangalô entrega"
              title="Do ponto vazio à experiência comercial pronta para receber pessoas."
              text="A página pode evoluir com história, equipe, clientes autorizados e bastidores. Mesmo nesta versão, ela já comunica uma empresa orientada por projeto, acabamento e resultado comercial."
            />
          </div>
          <div className="grid gap-3">
            {capabilities.map((item) => (
              <div key={item} className="flex items-start gap-4 border-t border-black/10 py-5">
                <ArrowRight aria-hidden="true" size={18} className="mt-1 shrink-0 text-[var(--clay)]" />
                <p className="text-lg leading-7 text-[var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--stone)] py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-white/40">
              <Image
                src="/projects/loja-01.webp"
                alt="Loja com mobiliário comercial e exposição de produtos"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="border border-black/10 bg-[var(--sand)] p-7">
                <Layers3 aria-hidden="true" size={30} className="text-[var(--forest)]" />
                <h2 className="mt-6 text-2xl font-semibold">Arquitetura, design e engenharia juntos.</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  A percepção premium nasce quando conceito, proporção, materiais e execução apontam
                  para a mesma direção.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-black/10 bg-[var(--sand)] p-6">
                  <Boxes aria-hidden="true" size={26} className="text-[var(--forest)]" />
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    Soluções sob medida para diferentes formatos de operação.
                  </p>
                </div>
                <div className="border border-black/10 bg-[var(--sand)] p-6">
                  <BadgeCheck aria-hidden="true" size={26} className="text-[var(--forest)]" />
                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    Comunicação clara para gerar confiança antes do orçamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
