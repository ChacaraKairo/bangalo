"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Bangalô Design pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f6f4a] text-white shadow-[0_18px_45px_rgba(31,111,74,0.32)] transition hover:scale-105"
    >
      <MessageCircle aria-hidden="true" size={24} />
    </a>
  );
}
