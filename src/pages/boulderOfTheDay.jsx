/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getBoulderOfTheDay } from "@/api/fetchBoulderOfTheDay"
import { updateUserGuess } from "@/api/updateUserGuess"
import { Button } from "@/components/UI/button"
import { GameFinished } from "@/components/UI/video-page/gameFinishedAlert"
import { GradeCell } from "@/components/UI/video-page/gradeCells"
import SliderForGrading from "@/components/UI/video-page/sliderForGrading"
import { VideoPlayer } from "@/components/UI/video-page/videoPlayer"
import { Toaster } from "@/components/ui/sonner"
import { useGameContext } from "@/context/gameContext"
import { useSettings } from "@/context/settingsContext"
import { getGrade } from "@/functions/getGradeLabel"
import { convertNumToGrade } from "@/functions/gradeConverter"
import { isGradeCorrect } from "@/functions/isGradeCorrect"

function BoulderOfTheDay() {
  const navigate = useNavigate()
  const { settings } = useSettings()
  const {
    correctGrade,
    updateCorrectGrade,
    firebaseId,
    updateFirebaseId,
    updateGameWon,
    gameWon,
    guessState,
    updateGuessState,
    updateVideoId,
    videoStats,
    setVideoStats,
  } = useGameContext()

  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [sliderValue, setSliderValue] = useState(30)
  const [videoIsReady, setVideoIsReady] = useState(false)
  const [firstGuess, setFirstGuess] = useState(true)
  const [credits, setCredits] = useState("")

  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
    setNumericGuess(getGrade(newValue))
  }

  const handleSubmit = () => {
    const convertedGuess = convertNumToGrade(
      numericGuess,
      settings.gradeScale.value,
    )
    const { isCorrect, diff } = isGradeCorrect(convertedGuess, correctGrade)

    updateGuessState(convertedGuess, isCorrect, diff)
    // updateGameStatsLocal({ isCorrect, anotherVariable }, "daily")

    if (isCorrect) {
      updateGameWon(true)
    } else if (guessState.guess.length + 1 >= 3) {
      updateGameWon(false)
    }

    if (firstGuess) {
      updateUserGuess(firebaseId, numericGuess, "boulder-of-the-day")
      setFirstGuess(false)
    }
  }

  const fetchBoulderOfTheDay = async () => {
    try {
      const newVideo = await getBoulderOfTheDay(settings.gradeScale.value)
      setVideoStats(newVideo.guesses)
      updateVideoId(newVideo.youtubeLink)
      updateFirebaseId(newVideo.ticketId)
      updateCorrectGrade(newVideo.grade)
      setCredits(newVideo.credits)
    } catch (error) {
      console.error("Failed to fetch boulder of the day:", error)
    }
  }

  useEffect(() => {
    fetchBoulderOfTheDay()
  }, [])

  useEffect(() => {
    if (videoStats) {
      console.log(videoStats)
    }
  }, [videoStats])

  return (
    <>
      <div className="mt-1 flex h-full w-full flex-col gap-2 px-3">
        <GameFinished
          navigate={navigate}
          gameWon={gameWon}
          guessState={guessState}
        />
        <Toaster position="top-center" />
        <div className="flex w-full flex-row items-center justify-center gap-1">
          <div className="font-archivo-black flex h-8 w-full items-center justify-center text-center font-bold">
            <div className="font-archivo-black flex h-8 w-full items-center justify-center text-center">
              {[0, 1, 2].map((i) => (
                <GradeCell
                  key={i}
                  guess={guessState.guess[i]}
                  outcome={guessState.outcome[i]}
                  difference={guessState.difference[i]}
                  rounded={
                    i === 0
                      ? "rounded-sm rounded-r-none"
                      : i === 1
                        ? "rounded-r-none rounded-l-none"
                        : "rounded-sm rounded-l-none"
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <VideoPlayer
          setVideoIsReady={setVideoIsReady}
          videoIsReady={videoIsReady}
          credits={credits}
          className="border-border relative flex h-full items-center justify-center overflow-hidden border-1"
          innerClassName="absolute aspect-[9/16] h-full w-full bg-black"
        />
        {/* Slider and guess button */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="align-center flex w-full items-center justify-center gap-2">
            Guess:{" "}
            <strong className="font-archivo-black text-lg">
              {convertNumToGrade(numericGuess, settings.gradeScale.value)}
            </strong>
          </div>
          <div className="mx-3 mt-1 flex h-10 items-center justify-center">
            <SliderForGrading
              sliderValue={sliderValue}
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-2 pb-2">
            <Button
              size="lg"
              variant={videoIsReady ? "default" : "outline"}
              className="w-full"
              onClick={() => {
                videoIsReady ? handleSubmit() : null
              }}
            >
              Check your guess
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoulderOfTheDay
