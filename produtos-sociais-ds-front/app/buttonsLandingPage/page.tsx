import { Button } from "@/components/ui/button";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Buttons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <Button
        className={`w-[142px] h-[35px] bg-[#6672FA] text-white rounded-[4px] ${dmSans.className}`}
      >
        Compre agora
      </Button>

      <Button
        className={`w-[162px] h-[43px] bg-[#6672FA] text-white rounded-[4px] ${dmSans.className}`}
      >
        Eu quero
      </Button>
      <Button
        className={`w-[142px] h-[35px] bg-[#6672FA] text-white rounded-[4px]${dmSans.className}`}
      >
        Saber mais
      </Button>
    </div>
  );
}
