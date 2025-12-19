import { useState } from "react"
import VideoGuess from "@/components/main-components/videoGuess"
import Result from "@/components/main-components/result"
import { ClimberIcons } from "@/components/UI/results-page/climberIcons"
import Streak from "@/components/UI/video-page/scoreStreak"
import { useSettings } from "@/context/settingsContext"

function Game() {
  const { infinite } = useSettings()
  const [lives, setLives] = useState(3)
  const [outcome, setOutcome] = useState("game")
  const [streak, setStreak] = useState(0)
  const [guess, setGuess] = useState(null)
  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [firebaseId, setFirebaseId] = useState(null)
  const [randomHoldIndex] = useState(() => Math.floor(Math.random() * 6))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videos, setVideos] = useState([]) // video array
  const showScoreAndLives = lives > 0

  return (
    <>
      <div className="align-self flex h-full w-full flex-1 flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-row items-center justify-center">
          <p className="font-bold">Score: </p>
          <Streak streak={streak} />
          {!infinite && showScoreAndLives && (
            <>
              <p className="font-bold">Lives:</p>
              <ClimberIcons lives={lives} />
            </>
          )}
        </div>

        {outcome === "game" && (
          <VideoGuess
            lives={lives}
            setLives={setLives}
            streak={streak}
            setStreak={setStreak}
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
          />
        )}
        {outcome === "result" && (
          <Result
            guess={guess}
            setGuess={setGuess}
            lives={lives}
            setLives={setLives}
            streak={streak}
            setStreak={setStreak}
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
            }}
            firebaseId={firebaseId}
            setFirebaseId={setFirebaseId}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
    </>
  )
}

export default Game
