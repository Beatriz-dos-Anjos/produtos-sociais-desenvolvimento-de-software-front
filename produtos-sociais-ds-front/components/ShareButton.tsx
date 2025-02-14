import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function ShareButton() {
  return (
    <Button
      variant="outline"
      className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-100"
    >
      <Share2 className="w-5 h-5 mr-2" /> Compartilhar
    </Button>
  );
}
