import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--clay)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-font text-4xl leading-tight text-[var(--ink)] md:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{text}</p> : null}
    </div>
  );
}
