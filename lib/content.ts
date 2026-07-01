import type { Project, Service } from "@/types/content";

export const navItems = [
  { label: "Projetos", href: "/projetos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Processo", href: "/processo" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" }
];

export const projects: Project[] = [
  {
    name: "Quiosque comercial premium",
    category: "Quiosques",
    city: "Brasil",
    description:
      "Estrutura planejada para operação compacta, exposição clara de produto e presença forte em áreas de alto fluxo.",
    image: "/projects/quiosque-interno-38.webp",
    alt: "Quiosque comercial com iluminação integrada e mobiliário sob medida",
    highlights: ["Layout funcional", "Mobiliário sob medida", "Iluminação de destaque"]
  },
  {
    name: "Loja conceito",
    category: "Lojas",
    city: "Brasil",
    description:
      "Ambiente comercial com leitura de marca, circulação organizada e acabamento pensado para melhorar a experiência de compra.",
    image: "/projects/loja-01.webp",
    alt: "Interior de loja com mobiliário comercial e exposição de produtos",
    highlights: ["Experiência de marca", "Circulação orientada", "Acabamentos comerciais"]
  },
  {
    name: "Operação modular",
    category: "Quiosques",
    city: "Brasil",
    description:
      "Projeto para montar, operar e manter com precisão, combinando engenharia, design e facilidade de uso diário.",
    image: "/projects/quiosque-externo-04.webp",
    alt: "Quiosque externo com estrutura modular e comunicação visual",
    highlights: ["Montagem planejada", "Estrutura modular", "Comunicação visual"]
  },
  {
    name: "Mobiliário de exposição",
    category: "Mobiliário Comercial",
    city: "Brasil",
    description:
      "Peças comerciais desenvolvidas para destacar produtos, organizar atendimento e reforçar o padrão visual da marca.",
    image: "/projects/loja-10.webp",
    alt: "Mobiliário de exposição em loja com acabamento claro",
    highlights: ["Exposição eficiente", "Acabamento resistente", "Projeto personalizado"]
  }
];

export const services: Service[] = [
  {
    title: "Quiosques comerciais",
    summary:
      "Projetos completos para operações em shopping centers, galerias, eventos e áreas de grande circulação.",
    image: "/projects/quiosque-interno-25.webp",
    benefits: ["Aproveitamento de área", "Operação inteligente", "Acabamentos de alto impacto"]
  },
  {
    title: "Lojas e ambientes comerciais",
    summary:
      "Espaços que traduzem marca em arquitetura, com circulação, exposição e experiência de compra bem resolvidas.",
    image: "/projects/loja-05.webp",
    benefits: ["Identidade aplicada", "Fluxo de clientes", "Ambiência e materiais"]
  },
  {
    title: "Mobiliário sob medida",
    summary:
      "Balcões, expositores, displays e soluções funcionais para operações que precisam de precisão e presença.",
    image: "/projects/loja-10.webp",
    benefits: ["Ergonomia", "Durabilidade", "Padronização visual"]
  }
];

export const processSteps = [
  {
    title: "Imersão",
    text: "Entendimento do negócio, público, operação, ponto comercial e objetivos da marca."
  },
  {
    title: "Conceito",
    text: "Criação da direção visual e funcional, com referências, volumetria e primeiras soluções."
  },
  {
    title: "Projeto",
    text: "Detalhamento técnico, materiais, medidas, compatibilização e visualização para decisão."
  },
  {
    title: "Produção",
    text: "Execução orientada por projeto, com atenção a acabamento, montagem e funcionamento real."
  }
];

export const stats = [
  { value: "360°", label: "Visão entre design, engenharia e operação" },
  { value: "3D", label: "Visualização para antecipar decisões" },
  { value: "Sob medida", label: "Soluções para cada marca e ponto" }
];
