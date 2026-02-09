/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "sonner"

import { useEffect, useState } from "react"

import { updateUserGuess } from "@/api/updateUserGuess"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { useGameContext } from "@/context/gameContext"
import { useSettings } from "@/context/settingsContext"

import { getData } from "../../api/fetchVideoData"
import { getGrade } from "../../functions/GetGradeLabel"
import { convertToFont, convertToVSale } from "../../functions/gradeConverter"
import SliderForGrading from "../UI/video-page/sliderForGrading"
import { VideoPlayer } from "../UI/video-page/videoPlayer"

export let currentGrade = null

const VideoGuess = ({
  finish,
  setGuess,
  numericGuess,
  setNumericGuess,
  setFirebaseId,
  firebaseId,
  currentIndex,
  setCurrentIndex,
  videos,
  setVideos,
}) => {
  const { settings } = useSettings()
  const { updateVideoId } = useGameContext()
  const [sliderValue, setSliderValue] = useState(30)
  const [videoIsReady, setVideoIsReady] = useState(false)

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setSliderValue(newValue)
    setNumericGuess(getGrade(newValue))
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
      console.log(newVideos)
      setCurrentIndex(0)
      updateVideoId(newVideos[0].youtubeLink)
      setFirebaseId(newVideos[0].ticketId)
      currentGrade = newVideos[0].grade
    } else {
      updateVideoId(videos[currentIndex].youtubeLink)
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
    updateUserGuess(firebaseId, numericGuess, "videos")
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
        setVideoIsReady={setVideoIsReady}
        videoIsReady={videoIsReady}
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
            sliderValue={sliderValue}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-2 pb-2">
          {!settings.submitOnDrag && (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoGuess
