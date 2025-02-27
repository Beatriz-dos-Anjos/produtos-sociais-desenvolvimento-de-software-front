"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const ModalEntry: React.FC = () => {
  const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#6672FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          borderRadius: "30px",
          padding: "50px",
          paddingBottom: "35px",
          paddingLeft: "55px",
          paddingRight: "55px",
          boxSizing: "border-box",
          maxWidth: "473px",
          width: "100%",
          height: "470px",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {" "}
            <Image src={logo} alt="Logo" />
            <div className="relative w-full max-w-sm mt-10">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
                >
                  Email
                </label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Ex: assisju@hotmail.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="relative w-full max-w-sm mt-10">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600"
                >
                  Senha
                </label>
                <Input
                  type="text"
                  id="password"
                  placeholder="Ex: 111222333"
                  className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <Button
              className={`w-[152px] h-[35px] bg-[#6672FA] text-white rounded-[4px] ml-24 mt-10 ${dmSans.className}`}
              onClick={() => router.push("/Marketplace")}
            >
              Entrar
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "64px",
                marginTop: "20px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEntry;
