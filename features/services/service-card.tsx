import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="border border-black/10 bg-white/45">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[var(--ink)]">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.summary}</p>
        <ul className="mt-6 grid gap-3">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-sm text-[var(--ink)]">
              <Check aria-hidden="true" size={17} className="text-[var(--forest)]" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
