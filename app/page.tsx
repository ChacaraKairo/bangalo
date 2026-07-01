import Image from "next/image";
import { ArrowDown, BadgeCheck, Compass, Ruler } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/features/projects/project-card";
import { ServiceCard } from "@/features/services/service-card";
import { ShowroomSection } from "@/features/showroom3d/showroom-section";
import { processSteps, projects, services, stats } from "@/lib/content";
import { whatsappUrl } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <Image
          src="/projects/quiosque-interno-38.webp"
          alt="Quiosque comercial projetado pela Bangalô Design"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/38 to-black/12" />
        <Container className="relative flex min-h-[calc(100vh-80px)] flex-col justify-end pb-12 pt-24 text-white">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-white/70">
              Arquitetura comercial · Design · Engenharia
            </p>
            <h1 className="display-font text-5xl leading-[0.98] md:text-7xl lg:text-8xl">
              Bangalô Design
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Projetos comerciais sob medida para quiosques, lojas, mobiliário e experiências
              de marca que precisam funcionar no mundo real.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={whatsappUrl}>
                Solicitar orçamento
              </Button>
              <Button href="/projetos" variant="secondary" className="border-white text-white hover:bg-white hover:text-[var(--ink)]">
                Ver projetos
              </Button>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-sm text-white/65">
            <ArrowDown aria-hidden="true" size={18} />
            Role para entrar no showroom digital
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Quem é"
            title="Uma empresa para marcas que precisam sair do projeto e ganhar presença."
            text="A Bangalô Design cria espaços comerciais com atenção à operação, acabamento e leitura de marca. O resultado esperado é um ambiente bonito, funcional e confiável para vender, atender e crescer."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="border-l border-[var(--line)] pl-5">
                <p className="display-font text-4xl text-[var(--forest)]">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/45 py-24">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Serviços"
              title="Do conceito à operação comercial."
              text="A entrega combina estética, engenharia e uso diário para criar espaços que valorizam a marca sem esquecer a rotina da operação."
            />
            <Button href="/servicos" variant="secondary">
              Conhecer serviços
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Projetos"
              title="Portfólio como prova de capacidade."
              text="Fotos e renders devem ser tratados como evidência: mostram escala, acabamento, iluminação e decisões que sustentam a confiança do cliente."
            />
            <Button href="/projetos" variant="secondary">
              Ver galeria
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} priority={index === 0} />
            ))}
          </div>
        </Container>
      </section>

      <ShowroomSection />

      <section className="bg-[var(--stone)] py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Processo"
            title="Clareza para decidir. Precisão para executar."
            text="O processo transforma ideias em decisões visuais, técnicas e comerciais antes da produção."
          />
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="grid gap-5 border-t border-black/10 py-6 md:grid-cols-[80px_1fr]">
                <span className="display-font text-4xl text-[var(--clay)]">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--ink)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: Compass, title: "Direção criativa", text: "Cada projeto parte da leitura de marca, ponto comercial e público." },
            { icon: Ruler, title: "Precisão técnica", text: "A estética precisa conversar com medidas, materiais, montagem e manutenção." },
            { icon: BadgeCheck, title: "Confiança comercial", text: "O visitante entende o processo e sabe qual é o próximo passo para orçar." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-black/10 p-7">
                <Icon aria-hidden="true" size={28} className="text-[var(--forest)]" />
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            );
          })}
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
