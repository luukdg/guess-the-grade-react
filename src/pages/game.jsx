import { useEffect, useState } from "react"
import VideoGuess from "@/components/main-components/videoGuess"
import Result from "@/components/main-components/result"
import { ClimberIcons } from "@/components/UI/results-page/climberIcons"
import Streak from "@/components/UI/video-page/scoreStreak"
import { useSettings } from "@/context/settingsContext"
import { FirstTimeMessage } from "@/components/UI/home-page/firstTimeMessage"

function Game() {
  const { infinite, firstTime, incrementSetting } = useSettings()
  const [lives, setLives] = useState(3)
  const [outcome, setOutcome] = useState("game")
  const [streak, setStreak] = useState(0)
  const [guess, setGuess] = useState(null)
  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [firebaseId, setFirebaseId] = useState(null)
  const [randomHoldIndex] = useState(() => Math.floor(Math.random() * 6))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videos, setVideos] = useState([]) // video array
  const gameFinished = lives > 0
  const [correctGuess, setCorrectGuess] = useState(0)

  useEffect(() => {
    if (gameFinished) {
      incrementSetting("correctGuesses", correctGuess)
      incrementSetting("totalGames", 1)
    }

    console.log(correctGuess)
  }, [correctGuess])

  return (
    <>
      <div className="flex h-full w-full flex-col gap-2 px-3 pt-3">
        {firstTime && <FirstTimeMessage />}
        {!infinite && (
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
            videos={videos}
            currentIndex={currentIndex}
            setCorrectGuess={setCorrectGuess}
          />
        )}
      </div>
    </>
  )
}

export default Game
