import { useEffect, useState } from "react"

import { ClimberIcons } from "@/components/UI/results-page/climberIcons"
import Streak from "@/components/UI/video-page/scoreStreak"
import Result from "@/components/main-components/result"
import VideoGuess from "@/components/main-components/videoGuess"
import { useGameContext } from "@/context/gameContext"
import { useSettings } from "@/context/settingsContext"

function Game() {
  const { resetCurrentStreak, settings } = useSettings()
  const { lives, setLives } = useGameContext()
  const [outcome, setOutcome] = useState("game")
  const [streak, setStreak] = useState(0)
  const [guess, setGuess] = useState(null)
  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [firebaseId, setFirebaseId] = useState(null)
  const [randomHoldIndex] = useState(() => Math.floor(Math.random() * 6))
  const [currentIndex, setCurrentIndex] = useState(0) // current video index
  const [videos, setVideos] = useState([]) // video array
  const [credits, setCredits] = useState("") // video credits
  const gameFinished = lives > 0

  useEffect(() => {
    resetCurrentStreak()
  }, [])

  return (
    <>
      <div className="flex h-full w-full flex-col gap-2 px-3 pt-3">
        {!settings.infinite && (
          <div className="flex h-8 w-full flex-row items-center justify-center">
            <p className="font-bold">Score: </p>
            <Streak streak={streak} />
            {gameFinished && (
              <>
                <p className="font-bold">Lives:</p>
                <ClimberIcons lives={lives} />
              </>
            )}
          </div>
        )}

        {outcome === "game" && (
          <VideoGuess
            finish={(result) => setOutcome(result)}
            guess={guess}
            setGuess={setGuess}
            numericGuess={numericGuess}
            setNumericGuess={setNumericGuess}
            firebaseId={firebaseId}
            setFirebaseId={setFirebaseId}
            outcome={outcome}
            setOutcome={setOutcome}
            randomHoldIndex={randomHoldIndex}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            videos={videos}
            setVideos={setVideos}
            setCredits={setCredits}
            credits={credits}
          />
        )}
        {outcome === "result" && (
          <Result
            gameFinished={gameFinished}
            streak={streak}
            setStreak={setStreak}
            guess={guess}
            setGuess={setGuess}
            lives={lives}
            setLives={setLives}
            result={outcome}
            nextVideo={() => {
              setOutcome("game")
              setNumericGuess([68, 71])
            }}
            restart={() => {
              setNumericGuess([68, 71])
              setLives(3)
              setStreak(0)
              setGuess(null)
              setOutcome("game")
              resetCurrentStreak()
            }}
            firebaseId={firebaseId}
            setFirebaseId={setFirebaseId}
            setCurrentIndex={setCurrentIndex}
            videos={videos}
            currentIndex={currentIndex}
            credits={credits}
          />
        )}
      </div>
    </>
  )
}

export default Game
