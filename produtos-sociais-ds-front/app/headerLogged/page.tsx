"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const menuItems = [
  { href: "/produtos", label: "Meus produtos" },
  { href: "/notificacoes", label: "Notificações" },
  { href: "/configuracoes", label: "Configurações" },
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
                className="text-sm font-medium text-white hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/perfil"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#B7E3FF] text-[#6672FA] font-bold text-xs">
              M
            </div>
            <span className="text-xs font-medium text-white mt-1">
              Meu Perfil
            </span>
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#6672FA] shadow-lg z-50">
          <nav className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-white/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/perfil"
            className="flex flex-col items-center hover:opacity-80 transition-opacity py-4"
          >
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#B7E3FF] text-[#6672FA] font-bold text-xs">
              M
            </div>
            <span className="text-xs font-medium text-white mt-1">
              Meu Perfil
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
