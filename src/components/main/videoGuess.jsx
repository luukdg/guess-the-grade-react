/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"
import { getData } from "../../api/fetchVideoData"
import { getGrade } from "../../functions/GetGradeLabel"
import { convertToFont, convertToVSale } from "../../functions/gradeConverter"
import { Button } from "@/components/ui/button"
import SliderForGrading from "../UI/sliderForGrading"
import { useSettings } from "@/functions/settingsContext"
import { VideoPlayer } from "../video/videoPlayer"
import { updateUserGuess } from "@/api/updateUserGuess"

const VideoGuess = ({
  finish,
  setGuess,
  numericGuess,
  setNumericGuess,
  setFirebaseId,
  firebaseId,
  randomHoldIndex,
}) => {
  const { videoType, gradeScale, setVideoId } = useSettings()

  const [value, setValue] = useState(30) // slider state

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setValue(newValue) // slider state
    setNumericGuess(getGrade(newValue)) // numericGuess state
  }

  // Function to fetch a new video
  const fetchNewVideo = async () => {
    const { youtubeLink, ticketId } = await getData(
      gradeScale.value,
      videoType.value,
    )
    setFirebaseId(ticketId)
    setVideoId(youtubeLink)
  }

  // Load first video on mount
  useEffect(() => {
    fetchNewVideo()
  }, [])

  // Submit guess and refresh video
  const handleSubmit = () => {
    const convertedGuess = chooseGradeConverter(numericGuess)
    setGuess(convertedGuess)
    finish("result")
    updateUserGuess(firebaseId, numericGuess)
  }

  const chooseGradeConverter = (num) => {
    return gradeScale.value === "font-scale"
      ? convertToFont(num)
      : convertToVSale(num)
  }

  return (
    <div className="flex h-full w-full flex-col gap-2">
      {/* Video player with boulder video */}

      <VideoPlayer
        className="relative flex h-full items-center justify-center overflow-hidden"
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
        <div className="mx-3 mb-1 flex h-10 items-center justify-center">
          <SliderForGrading
            value={value}
            setValue={setValue}
            handleChange={handleChange}
            randomHoldIndex={randomHoldIndex}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
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
        </div>
      </div>
    </div>
  )
}

export default VideoGuess
