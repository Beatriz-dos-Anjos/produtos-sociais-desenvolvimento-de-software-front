"use client";

import { Upload } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
interface UploadImageProps {
  onFileSelect?: (file: File) => void;
  className?: string;
}
const uploadImageStyles = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function UploadImage({
  onFileSelect,
  className,
}: UploadImageProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        onFileSelect?.(file);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        onFileSelect?.(file);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative cursor-pointer flex flex-row items-center justify-center max-w-[200px] w-auto h-[47px] rounded-md border-2 border-dashed border-blue-400 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors",
        isDragging && "border-blue-600 bg-blue-100",
        className,
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2 text-center">
        <Upload className="h-6 w-6 text-blue-500" />
        <span
          className="text-sm font-medium"
          style={{
            fontFamily: uploadImageStyles.style.fontFamily,
            color: "black",
          }}
        >
          Carregar arquivo
        </span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
