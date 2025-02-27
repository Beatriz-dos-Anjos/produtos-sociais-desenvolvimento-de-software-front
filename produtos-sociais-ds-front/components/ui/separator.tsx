import React from "react";

interface SeparatorProps {
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
  return (
    <div className="flex pt-10 pb-8">
      <div
        role="separator"
        className={`bg-gray-200 h-[1px] w-80 ${className}`}
      />
    </div>
  );
};
