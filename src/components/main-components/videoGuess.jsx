/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"
import { getData } from "../../api/fetchVideoData"
import { getGrade } from "../../functions/GetGradeLabel"
import { convertToFont, convertToVSale } from "../../functions/gradeConverter"
import { Button } from "@/components/ui/button"
import SliderForGrading from "../UI/video-page/sliderForGrading"
import { useSettings } from "@/context/settingsContext"
import { VideoPlayer } from "../UI/video-page/videoPlayer"
import { updateUserGuess } from "@/api/updateUserGuess"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"

export let currentGrade = null

const VideoGuess = ({
  finish,
  setGuess,
  numericGuess,
  setNumericGuess,
  setFirebaseId,
  firebaseId,
  randomHoldIndex,
  currentIndex,
  setCurrentIndex,
  videos,
  setVideos,
}) => {
  const { setVideoId, settings } = useSettings()
  const [value, setValue] = useState(30) // slider state

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setValue(newValue) // slider state
    setNumericGuess(getGrade(newValue)) // numericGuess state
  }

  // Function to fetch 10 videos
  const fetchVideos = async () => {
    // Only fetch video's when there are no videos or when the video array has reached it's end
    if (videos.length === 0 || videos.length === currentIndex) {
      const newVideos = await getData(
        settings.gradeScale.value,
        settings.videoType.value,
      )
      setVideos(newVideos)
      setCurrentIndex(0)
      setVideoId(newVideos[0].youtubeLink)
      setFirebaseId(newVideos[0].ticketId)
      currentGrade = newVideos[0].grade
    } else {
      setVideoId(videos[currentIndex].youtubeLink)
      setFirebaseId(videos[currentIndex].ticketId)
      currentGrade = videos[currentIndex].grade
    }
  }

  // Load video on mount
  useEffect(() => {
    fetchVideos()
  }, [])

  // Submit guess and refresh video
  const handleSubmit = () => {
    const convertedGuess = chooseGradeConverter(numericGuess)
    setGuess(convertedGuess)
    finish("result")
    updateUserGuess(firebaseId, numericGuess)
  }

  const chooseGradeConverter = (num) => {
    return settings.gradeScale.value === "font-scale"
      ? convertToFont(num)
      : convertToVSale(num)
  }

  function openToaster(message) {
    toast(message)
  }

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <Toaster position="top-center" />
      {/* Video player with boulder video */}
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
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pt-2 pb-2">
          {!settings.submitOnDrag && (
            <Button
              size="default"
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
  )
}

export default VideoGuess
