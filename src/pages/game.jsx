import { useState } from "react"
import VideoGuess from "@/components/main/videoGuess"
import Result from "@/components/main/result"
import { ClimberIcons } from "@/components/UI/climberIcons"
import Streak from "@/components/UI/scoreStreak"

function Game({ videoType }) {
  const [lives, setLives] = useState(3)
  const [outcome, setOutcome] = useState("game") // store score or result if needed
  const [streak, setStreak] = useState(0)
  const [guess, setGuess] = useState(null)
  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [firebaseId, setFirebaseId] = useState(null)

  const showScoreAndLives = lives > 0

  return (
    <>
      <div className="align-self flex h-full w-full flex-1 flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-row items-center justify-center">
          <p>Score: </p>
          <Streak streak={streak} />
          {showScoreAndLives && (
            <>
              <p>Lives:</p>
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
            videoType={videoType}
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
          />
        )}
      </div>
    </>
  )
}

export default Game
