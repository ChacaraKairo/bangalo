"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[rgba(248,245,239,0.88)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Bangalô Design - início" onClick={closeMenu}>
          <Image src="/brand/logo-bangalo.png" alt="Bangalô Design" width={144} height={50} priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={whatsappUrl} showIcon={false}>
            Solicitar orçamento
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-black/10 text-[var(--ink)] lg:hidden"
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </Container>
      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-black/10 bg-[var(--sand)] lg:hidden">
          <Container className="grid gap-1 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1 py-3 text-base font-medium text-[var(--ink)]"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button href={whatsappUrl} className="mt-4 w-full" showIcon={false}>
              Solicitar orçamento
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
