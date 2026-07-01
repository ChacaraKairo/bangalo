import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { whatsappUrl } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="bg-[var(--ink)] py-20 text-white">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Próximo passo
          </p>
          <h2 className="display-font mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            Vamos desenhar um espaço comercial para a sua marca?
          </h2>
        </div>
        <Button href={whatsappUrl}>
          Solicitar orçamento
        </Button>
      </Container>
    </section>
  );
}
