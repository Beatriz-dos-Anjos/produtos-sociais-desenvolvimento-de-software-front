"use client";
import React from "react";

interface ModalExplainProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const ModalExplain: React.FC<ModalExplainProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={handleClick}
            style={{
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalExplain;
