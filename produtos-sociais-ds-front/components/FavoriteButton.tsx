import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FavoriteButton() {
  return (
    <Button variant="outline" className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-100">
      <Heart className="w-5 h-5 mr-2" /> Favoritar
    </Button>
  );
}
