"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Maximize2 } from "lucide-react";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";

type GalleryProject = Project & {
  role: string;
  result: string;
  gallery: string[];
};

const categories = ["Todos", "Quiosques", "Lojas", "Mobiliário Comercial"] as const;

export function ProjectGalleryExperience({ projects }: { projects: GalleryProject[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [activeProjectName, setActiveProjectName] = useState(projects[0]?.name ?? "");

  const filteredProjects = useMemo(() => {
    if (category === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === category);
  }, [category, projects]);

  const activeProject =
    filteredProjects.find((project) => project.name === activeProjectName) ??
    filteredProjects[0] ??
    projects[0];

  function selectCategory(nextCategory: (typeof categories)[number]) {
    setCategory(nextCategory);
    const nextProject =
      nextCategory === "Todos"
        ? projects[0]
        : projects.find((project) => project.category === nextCategory);
    setActiveProjectName(nextProject?.name ?? "");
  }

  return (
    <div className="grid gap-14">
      <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filtrar projetos">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => selectCategory(item)}
            className={cn(
              "min-h-11 shrink-0 rounded-sm border px-4 text-sm font-semibold transition",
              category === item
                ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                : "border-black/10 bg-white/55 text-[var(--muted)] hover:border-[var(--forest)] hover:text-[var(--forest)]"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="relative min-h-[520px] overflow-hidden bg-[var(--stone)]">
          <Image
            src={activeProject.image}
            alt={activeProject.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
              Projeto em foco
            </p>
            <h2 className="display-font mt-3 text-4xl leading-tight md:text-6xl">
              {activeProject.name}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">
              {activeProject.description}
            </p>
          </div>
        </div>

        <aside className="grid content-between gap-8 bg-[var(--ink)] p-7 text-white md:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              {activeProject.category} · {activeProject.city}
            </p>
            <h3 className="mt-5 text-3xl font-semibold">{activeProject.role}</h3>
            <p className="mt-5 text-sm leading-7 text-white/68">{activeProject.result}</p>
          </div>

          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Destaques
            </p>
            {activeProject.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 text-sm text-white/82">
                <Check aria-hidden="true" size={17} className="text-[#f0c15d]" />
                {highlight}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setActiveProjectName(project.name)}
            className={cn(
              "group text-left transition",
              activeProject.name === project.name ? "opacity-100" : "opacity-78 hover:opacity-100"
            )}
          >
            <span className="relative block aspect-[4/5] overflow-hidden bg-[var(--stone)]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority={index < 2}
              />
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-white/86 text-[var(--ink)] opacity-0 transition group-hover:opacity-100">
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </span>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--clay)]">
              {project.category}
            </span>
            <span className="mt-2 block text-xl font-semibold text-[var(--ink)]">{project.name}</span>
          </button>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-6">
        {activeProject.gallery.map((image, index) => (
          <div
            key={`${activeProject.name}-${image}-${index}`}
            className={cn(
              "relative overflow-hidden bg-[var(--stone)]",
              index === 0 ? "aspect-[16/10] md:col-span-3 md:row-span-2" : "aspect-[4/3] md:col-span-3 lg:col-span-1"
            )}
          >
            <Image
              src={image}
              alt={`Detalhe visual de ${activeProject.name}`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            {index === 0 ? (
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/86 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                <Maximize2 aria-hidden="true" size={15} />
                Detalhes
              </div>
            ) : null}
          </div>
        ))}
      </section>
    </div>
  );
}

export type { GalleryProject };
