/* eslint-disable react-hooks/rules-of-hooks */
import { useGameContext } from "@/context/gameContext"

import { BOTDStats } from "../UI/results-page/BOTDStats"

const ResultBoulderOfTheDay = () => {
  const { gameWon, videoStats } = useGameContext()

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-3 pt-3">
      <div className="font-archivo-black text-center text-4xl font-bold">
        {gameWon ? "Good job!" : "Too bad."}

        <div className="h-full w-screen">
          <BOTDStats videoStats={videoStats} />
        </div>
      </div>
    </div>
  )
}

export default ResultBoulderOfTheDay
