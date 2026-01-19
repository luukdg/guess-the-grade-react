import { VideoStats } from "./statistics"
import ComparePickedGrade from "./comparePickedGrade"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const StatTabs = ({ videos, currentIndex, currentGrade, guess }) => {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto px-3">
      <div className="flex h-100 w-full flex-col gap-2 md:w-200">
        <ComparePickedGrade currentGrade={currentGrade} guess={guess} />
        <VideoStats
          videos={videos}
          currentIndex={currentIndex}
          currentGrade={currentGrade}
          guess={guess}
        />
        <Card className="h-40 w-full">
          <CardHeader>
            <CardTitle>More to come...</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default StatTabs
