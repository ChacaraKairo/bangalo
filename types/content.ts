export type ProjectCategory =
  | "Quiosques"
  | "Lojas"
  | "Mobiliário Comercial"
  | "Ambientes Corporativos"
  | "Fachadas"
  | "Projetos Personalizados";

export type Project = {
  name: string;
  category: ProjectCategory;
  city: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
};

export type Service = {
  title: string;
  summary: string;
  image: string;
  benefits: string[];
};
