import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

export function ReportButton() {
  return (
    <Button
      variant="outline"
      className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-100"
    >
      <Flag className="w-5 h-5 mr-2" /> Denunciar
    </Button>
  );
}
