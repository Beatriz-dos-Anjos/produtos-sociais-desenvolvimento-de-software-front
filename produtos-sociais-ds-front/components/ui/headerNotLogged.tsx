"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const menuItems = [
  { href: "/servicos", label: "Serviços" },
  { href: "/createOng", label: "Cadastrar ONG" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={`${dmSans.className} w-full bg-[#6672FA] px-4 py-4 relative`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Vector.svg"
            alt="Recife Prefeitura"
            width={120}
            height={32}
            className="w-[100px] sm:w-[150px]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="text-xs font-normal text-[#6366F1] bg-white px-4 py-1.5 rounded hover:bg-white/90 transition-colors"
          >
            Entrar
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#6672FA] to-[#6672FA] shadow-lg z-50">
          <nav className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/entrar"
              className="text-xs font-normal text-[#6366F1] bg-white px-4 py-1.5 rounded hover:bg-white/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
