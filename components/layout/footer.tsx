import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/content";
import { whatsappUrl } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import koruLogo from "@/assets/empresa.png";

const contactItems = [
  { icon: Phone, label: "WhatsApp", value: "Solicitar orçamento", href: whatsappUrl },
  { icon: Mail, label: "Email", value: "contato@bangalodesign.com.br", href: "mailto:contato@bangalodesign.com.br" },
  { icon: MapPin, label: "Atuação", value: "Projetos comerciais sob medida", href: "/contato" },
  { icon: Camera, label: "Instagram", value: "Bangalô Design", href: "https://www.instagram.com/" }
];

export function Footer() {
  return (
    <footer className="bg-[var(--forest)] py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="display-font text-4xl">Bangalô Design</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Design, arquitetura e engenharia para transformar marcas em espaços comerciais
              funcionais, memoráveis e preparados para operar.
            </p>
          </div>
          <nav aria-label="Rodapé" className="grid gap-1 text-sm text-white/75">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-10 items-center transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex min-h-12 items-center gap-4 text-sm text-white/75 transition hover:text-white"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-white/45">
                      {item.label}
                    </span>
                    {item.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bangalô Design. Todos os direitos reservados.</p>
          <a
            href="https://site-koru-company.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-10 w-fit items-center gap-3 text-white/60 transition hover:text-white"
            aria-label="Site desenvolvido pela Koru Company"
          >
            <span>Desenvolvido por</span>
            <Image
              src={koruLogo}
              alt="Koru Company"
              width={28}
              height={28}
              className="h-7 w-7 rounded-sm object-contain"
            />
            <span className="font-medium text-white/80 transition group-hover:text-white">
              Koru Company
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
