/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"
import { useSettings } from "@/context/settingsContext"
import { VideoPlayer } from "@/components/UI/video-page/videoPlayer"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { convertToFont, convertToVSale } from "@/functions/gradeConverter"
import { getBoulderOfTheDay } from "@/api/fetchBoulderOfTheDay"
import { Button } from "@/components/UI/button"
import { getGrade } from "@/functions/getGradeLabel"
import SliderForGrading from "@/components/UI/video-page/sliderForGrading"
import { isGradeCorrect } from "@/functions/isGradeCorrect"
import { GradeCell } from "@/components/UI/video-page/gradeCells"

function BoulderOfTheDay() {
  const { setVideoId, settings } = useSettings()
  const [guess, setGuess] = useState([]) // Saves the grade to show in the DOM
  const [firebaseId, setFirebaseId] = useState(null)
  const [correctGrade, setCorrectGrade] = useState(null)
  const [numericGuess, setNumericGuess] = useState([68, 71])
  const [value, setValue] = useState(30) // slider state
  const [randomHoldIndex] = useState(() => Math.floor(Math.random() * 6))
  const [outcome, setOutcome] = useState([])
  const [difference, setDifference] = useState([])
  const [answerIndex, setAnswerIndex] = useState(3)

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setValue(newValue) // slider state
    setNumericGuess(getGrade(newValue)) // numericGuess state
  }

  // Submit guess
  const handleSubmit = () => {
    const convertedGuess = chooseGradeConverter(numericGuess)
    setGuess((prev) => [...prev, convertedGuess])
    const { isCorrect, diff } = isGradeCorrect(convertedGuess, correctGrade) // Checks if the user guess matches the answer
    setOutcome((prev) => [...prev, isCorrect])
    setDifference((prev) => [...prev, diff])
    setAnswerIndex((prev) => prev - 1)
  }

  // Translates the grade
  const chooseGradeConverter = (num) => {
    return settings.gradeScale.value === "font-scale"
      ? convertToFont(num)
      : convertToVSale(num)
  }

  // Report
  function openToaster(message) {
    toast(message)
  }

  const fetchBoulderOfTheDay = async () => {
    const newVideo = await getBoulderOfTheDay(settings.gradeScale.value)
    setVideoId(newVideo.youtubeLink)
    setFirebaseId(newVideo.ticketId)
    setCorrectGrade(newVideo.grade)
  }

  useEffect(() => {
    fetchBoulderOfTheDay()
  }, [])

  useEffect(() => {
    console.log(guess)
    if (correctGrade) {
      console.log("correct grade: ", correctGrade)
    }
    if (outcome) {
      console.log("OUTCOME:", outcome)
    }
    if (difference) {
      console.log("DIFF: ", difference)
    }
    if (answerIndex) {
      console.log("answerIndex: ", answerIndex)
    }
  }, [guess, correctGrade, outcome, difference])

  return (
    <>
      <div className="mt-1 flex h-full w-full flex-col gap-2 px-3">
        <Toaster position="top-center" />
        <div className="flex w-full flex-row items-center justify-center gap-1">
          <div className="font-archivo-black flex h-8 w-full items-center justify-center text-center font-bold">
            <div className="font-archivo-black flex h-8 w-full items-center justify-center text-center">
              {[0, 1, 2].map((i) => (
                <GradeCell
                  key={i}
                  guess={guess[i]}
                  outcome={outcome[i]}
                  difference={difference[i]}
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
          firebaseId={firebaseId}
          openToaster={openToaster}
          className="border-border relative flex h-full items-center justify-center overflow-hidden border-1"
          innerClassName="absolute aspect-[9/16] h-full w-full bg-black"
        />
        {/* Slider and guess button */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="align-center flex w-full items-center justify-center gap-2">
            Guess:{" "}
            <strong className="font-archivo-black text-lg">
              {chooseGradeConverter(numericGuess)}
            </strong>
          </div>
          <div className="mx-3 mt-1 flex h-10 items-center justify-center">
            <SliderForGrading
              value={value}
              setValue={setValue}
              handleChange={handleChange}
              randomHoldIndex={randomHoldIndex}
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-2 pb-2">
            {!settings.submitOnDrag && (
              <Button
                size="lg"
                variant="default"
                className="w-full"
                onClick={() => {
                  handleSubmit()
                }}
              >
                Check your guess
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BoulderOfTheDay
