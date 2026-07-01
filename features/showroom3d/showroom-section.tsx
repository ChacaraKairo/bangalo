"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappUrl } from "@/lib/utils";

const ShowroomViewer = dynamic(
  () => import("./showroom-viewer").then((mod) => mod.ShowroomViewer),
  {
    ssr: false,
    loading: () => <div className="h-[440px] bg-[var(--stone)] md:h-[560px]" aria-label="Carregando visualizador 3D" />
  }
);

export function ShowroomSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Showroom digital"
              title="O projeto pode ser compreendido antes de existir fisicamente."
              text="A experiência 3D foi preparada para demonstrar volumetria, proporção, materiais e leitura de operação. Quando os modelos finais estiverem prontos, entram aqui como arquivos GLB otimizados."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projetos" variant="secondary">
                Ver projetos
              </Button>
              <Button href={whatsappUrl} variant="ghost">
                Quero visualizar meu projeto
              </Button>
            </div>
          </div>
          <ShowroomViewer />
        </div>
      </Container>
    </section>
  );
}
