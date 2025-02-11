import { FavoriteButton } from "@/components/FavoriteButton"
import { ShareButton } from "@/components/ShareButton"
import { ReportButton } from "@/components/ReportButton"

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex gap-4">
        <FavoriteButton />
        <ShareButton />
        <ReportButton />
      </div>
    </div>
  )
}

