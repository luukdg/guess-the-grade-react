/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { getData } from "../../api/fetchVideoData"
import { getGrade } from "../../functions/GetGradeLabel"
import { convertToFont, convertToVSale } from "../../functions/gradeConverter"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  PauseIcon,
  PlayIcon,
  Volume2,
  VolumeOff,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import SliderForGrading from "../UI/sliderForGrading"
import { useSettings } from "@/functions/settingsContext"
import { AnimatePresence, motion } from "motion/react"

const VideoGuess = ({
  finish,
  setGuess,
  numericGuess,
  setNumericGuess,
  setFirebaseId,
  randomHoldIndex,
}) => {
  const {
    videoType,
    always2x,
    autoPlay,
    mute,
    loop,
    gradeScale,
    openControls,
    setOpenControls,
  } = useSettings()
  const [videoId, setVideoId] = useState(null) // saves the youtubeLink
  const [videoArray, setVideoArray] = useState([]) // array of videos fetched
  const [value, setValue] = useState(30) // slider state
  const [muted, setMuted] = useState(() => (!mute ? false : true))
  const [isPlaying, setIsPlaying] = useState(false) // video play state
  const [speed, setSpeed] = useState(() => (always2x ? 2 : 1))

  // Resets the grade value after submitting
  const handleChange = (newValue) => {
    setValue(newValue) // slider state
    setNumericGuess(getGrade(newValue)) // numericGuess state
  }

  // Function to fetch a new video
  const fetchNewVideo = async () => {
    const { youtubeLink, ticketId } = await getData(
      gradeScale.value,
      videoType.value,
    )
    if (videoArray.includes(youtubeLink)) {
      return await fetchNewVideo()
    } else {
      setFirebaseId(ticketId)
      setVideoId(youtubeLink)
      setVideoArray((prev) => [...prev, youtubeLink])
    }
  }

  // Load first video on mount
  useEffect(() => {
    fetchNewVideo()
  }, [])

  useEffect(() => {
    if (mute) {
      setMuted(true)
    }
    if (always2x) {
      setSpeed(2)
    }
  }, [always2x, mute])

  // Submit guess and refresh video
  const handleSubmit = () => {
    const convertedGuess = chooseGradeConverter(numericGuess)
    setGuess(convertedGuess)
    finish("result")
    // updateUserGuess(firebaseId, numericGuess);
  }

  const chooseGradeConverter = (num) => {
    return gradeScale.value === "font-scale"
      ? convertToFont(num)
      : convertToVSale(num)
  }

  const speeds = [1, 2]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <div className="absolute aspect-[9/16] h-full w-full bg-black">
          {videoId && (
            <ReactPlayer
              src={`https://www.youtube.com/shorts/${videoId}`}
              onReady={autoPlay ? () => setIsPlaying(true) : null}
              playing={isPlaying}
              muted={muted}
              controls={false}
              loop={loop}
              playbackRate={speed}
              config={{
                youtube: {
                  modestbranding: 1,
                  rel: 0,
                  showinfo: 0,
                  playlist: videoId,
                },
              }}
              style={{
                aspectRatio: "9/16",
                height: "100%",
                width: "100%",
              }}
            />
          )}
        </div>

        <div className="pointer-events-auto absolute top-0 left-0 h-full w-full"></div>
        <div
          className={`pointer-events-none absolute top-0 left-0 h-[15%] w-full ${"opacity-100"}`}
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        ></div>
        <div className="absolute bottom-2 flex w-full flex-col items-center gap-4">
          <AnimatePresence initial={false}>
            {openControls && (
              <motion.div
                initial={{ y: 45 }}
                animate={{ y: 0 }}
                exit={{ y: 45 }}
                key="box"
              >
                <ButtonGroup>
                  <Button
                    onClick={() => setMuted(!muted)}
                    size="sm"
                    variant="outline"
                  >
                    {muted ? <VolumeOff /> : <Volume2 />}
                  </Button>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    variant="outline"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </Button>
                  {speeds.map((s) => (
                    <Button
                      key={s}
                      onClick={() => setSpeed(s)}
                      size="sm"
                      variant={speed === s ? "default" : "outline"}
                    >
                      {s}x
                    </Button>
                  ))}
                  <Button
                    className="m-0 p-2"
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    variant="outline"
                  >
                    <p className="text-xs">Report</p>
                  </Button>
                </ButtonGroup>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Button to remove video controls */}
        <div className="absolute right-2 bottom-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setOpenControls((prev) => !prev)}
          >
            {openControls ? <ChevronDown /> : <ChevronUp />}
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="align-center flex w-full justify-center gap-2">
          Guess: <strong>{chooseGradeConverter(numericGuess)}</strong>
        </div>
        <div className="flex h-15">
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
