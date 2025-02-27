"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
interface ModalDeleteProps {
  onClose: () => void;
  handleDelete: () => void;
}
const ModalDelete: React.FC<ModalDeleteProps> = ({ onClose, handleDelete }) => {
  // const router = useRouter();
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#80808015",
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
          borderRadius: "40px",
          padding: "50px",
          paddingBottom: "35px",
          paddingLeft: "55px",
          paddingRight: "55px",
          boxSizing: "border-box",
          maxWidth: "470px",
          width: "100%",
          height: "250px",
          fontFamily: dmSans.style.fontFamily,
        }}
      >
        {" "}
        Você tem certeza que deseja deletar o artesanato?
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "7rem",
            marginTop: "4rem",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleDelete}>Sim</Button>
          <Button onClick={onClose}>Não</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
