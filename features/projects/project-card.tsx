import Image from "next/image";
import type { Project } from "@/types/content";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--stone)]">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          priority={priority}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">
          {project.category} · {project.city}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-[var(--ink)]">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
      </div>
    </article>
  );
}
