import ComparePickedGrade from "./comparePickedGrade"
import { VideoStats } from "./statistics"

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
      </div>
    </div>
  )
}

export default StatTabs
