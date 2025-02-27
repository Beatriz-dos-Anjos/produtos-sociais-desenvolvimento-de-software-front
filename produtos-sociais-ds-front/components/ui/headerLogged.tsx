"use client";

import Link from "next/link";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "../notification-dropdown";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

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
            <Link
              href="/Marketplace"
              className="text-sm font-medium text-white hover:text-white/80"
            >
              Meus produtos
            </Link>

            {/* Clique no nome "Notificações" abre o dropdown */}
            <button
              className="text-sm font-medium text-white hover:text-white/80"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              Notificações
            </button>
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

      {/* Dropdown de Notificações aparece abaixo do botão */}
      {isNotificationsOpen && (
        <div className="absolute right-10 top-14 z-50">
          <NotificationDropdown
            closeDropdown={() => setIsNotificationsOpen(false)}
          />
        </div>
      )}

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#6672FA] shadow-lg z-50">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/Marketplace"
              className="text-sm font-medium text-white hover:text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              Meus produtos
            </Link>

            <button
              className="text-sm font-medium text-white hover:text-white/80"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              Notificações
            </button>
          </nav>

          {isNotificationsOpen && (
            <div className="w-full flex justify-center py-2">
              <NotificationDropdown
                closeDropdown={() => setIsNotificationsOpen(false)}
              />
            </div>
          )}

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
