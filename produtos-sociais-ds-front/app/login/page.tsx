"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function LoginPage() {
  return (
    <div
      className={`${dmSans.className} flex items-center justify-center min-h-screen bg-[#6672FA]`}
    >
      <div className="bg-[#F6FAFF] px-12 py-16 rounded-2xl shadow-lg w-[450px] min-h-[550px] flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-12">
          <Image
            src="/conectaLogo.svg"
            alt="Conecta Recife"
            width={250}
            height={60}
          />

          <form className="w-full flex flex-col gap-6">
            <input
              type="text"
              placeholder="username"
              className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6672FA] transition"
            />
            <input
              type="email"
              placeholder="email"
              className="w-full px-4 py-3 border border-gray-300 bg-[#FFFFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6672FA] transition"
            />

            <button className="w-full bg-[#6672FA] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#5562F5] transition mt-4">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}