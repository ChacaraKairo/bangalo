import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/features/services/service-card";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Serviços de quiosques, lojas, ambientes comerciais e mobiliário sob medida."
};

export default function ServicosPage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções comerciais pensadas para marca, ponto e operação."
            text="Cada serviço abaixo deve receber futuramente fotos específicas, benefícios detalhados, processo próprio e CTA dedicado."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </main>
  );
}
