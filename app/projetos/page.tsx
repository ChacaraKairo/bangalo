import Image from "next/image";
import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGalleryExperience, type GalleryProject } from "@/features/projects/project-gallery-experience";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Portfólio interativo de quiosques, lojas e mobiliário comercial da Bangalô Design."
};

const galleryProjects: GalleryProject[] = projects.map((project, index) => {
  const roles = [
    "Um quiosque pensado para ser visto de longe e entendido de perto.",
    "Uma loja conceito onde circulação, exposição e marca trabalham juntas.",
    "Uma operação modular com presença visual e lógica de montagem.",
    "Mobiliário comercial para organizar produto, atendimento e percepção de valor."
  ];

  const results = [
    "O foco está em dar força ao ponto de venda sem perder clareza operacional: atendimento, exposição e acabamento precisam funcionar no mesmo desenho.",
    "A leitura do espaço conduz o visitante pelos produtos, cria pontos de interesse e reforça a identidade da marca sem excesso de informação.",
    "A solução prioriza estrutura, comunicação visual e montagem organizada para que o projeto seja bonito, viável e prático.",
    "Cada peça precisa justificar sua presença: guardar, expor, orientar, vender e manter o padrão visual da operação."
  ];

  const galleries = [
    ["/projects/quiosque-interno-38.webp", "/projects/quiosque-interno-25.webp", "/projects/quiosque-externo-04.webp", "/projects/quiosque-interno-38.webp"],
    ["/projects/loja-01.webp", "/projects/loja-05.webp", "/projects/loja-10.webp", "/projects/quem-somos.webp"],
    ["/projects/quiosque-externo-04.webp", "/projects/quiosque-interno-25.webp", "/projects/quiosque-interno-38.webp", "/projects/loja-05.webp"],
    ["/projects/loja-10.webp", "/projects/loja-05.webp", "/projects/loja-01.webp", "/projects/quiosque-interno-25.webp"]
  ];

  return {
    ...project,
    role: roles[index] ?? roles[0],
    result: results[index] ?? results[0],
    gallery: galleries[index] ?? galleries[0]
  };
});

const projectSignals = [
  { value: "Portfólio", label: "como prova visual de capacidade" },
  { value: "Detalhe", label: "para mostrar acabamento e materiais" },
  { value: "Contexto", label: "para explicar decisão e função" }
];

export default function ProjetosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--ink)] py-24 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/projects/loja-01.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/20" />
        </div>
        <Container className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-white/55">
              Projetos Bangalô
            </p>
            <h1 className="display-font text-5xl leading-tight md:text-7xl">
              O portfólio precisa fazer o visitante imaginar a própria marca ali.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/72">
            Aqui os projetos deixam de ser apenas fotos. Cada imagem mostra decisão de design,
            leitura comercial, materialidade e lógica de operação.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="mb-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Explore"
              title="Filtre, escolha um projeto e observe os detalhes."
              text="A galeria destaca categorias, contexto e pontos fortes para que o visitante perceba a profundidade do trabalho antes de pedir orçamento."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {projectSignals.map((signal) => (
                <div key={signal.value} className="border-l border-[var(--line)] pl-5">
                  <p className="display-font text-4xl text-[var(--forest)]">{signal.value}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>

          <ProjectGalleryExperience projects={galleryProjects} />
        </Container>
      </section>

      <section className="bg-[var(--stone)] py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Leitura de projeto"
            title="Cada case deve responder o que foi resolvido, não apenas mostrar uma boa foto."
            text="Na próxima etapa, esta página pode receber estudos de caso completos com briefing, desafio, solução, materiais, bastidores e resultados autorizados."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Qual era o objetivo comercial do espaço?",
              "Como a circulação foi organizada?",
              "Quais materiais sustentam a percepção premium?",
              "O que torna a operação mais prática no dia a dia?"
            ].map((item) => (
              <div key={item} className="border border-black/10 bg-[var(--sand)] p-6">
                <p className="text-lg font-semibold leading-7 text-[var(--ink)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
