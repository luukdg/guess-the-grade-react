/* eslint-disable react-hooks/rules-of-hooks */
import {
  ChevronDown,
  ChevronUp,
  PauseIcon,
  PlayIcon,
  Volume2,
  VolumeOff,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Spinner } from "@/components/ui/spinner"
import { useGameContext } from "@/context/gameContext"
import { useSettings } from "@/context/settingsContext"
import { Report } from "./reportVideo"
import { Badge } from "@/components/ui/badge"

const speeds = [1, 2]

export function VideoPlayer({
  className = "",
  innerClassName = "",
  setVideoIsReady,
  videoIsReady,
  credits,
}) {
  const { openControls, setOpenControls, settings } = useSettings()
  const { firebaseId, videoId } = useGameContext()
  const [muted, setMuted] = useState(() => (!settings.mute ? false : true))
  const [isPlaying, setIsPlaying] = useState(settings.autoPlay)
  const [speed, setSpeed] = useState(() => (settings.always2x ? 2 : 1))

  useEffect(() => {
    if (settings.mute) {
      setMuted(true)
    }
    if (settings.always2x) {
      setSpeed(2)
    }
  }, [settings.always2x, settings.mute])

  return (
    <>
      <div className={className}>
        <div className={innerClassName}>
          {videoId && (
            <ReactPlayer
              src={`https://www.youtube.com/shorts/${videoId}`}
              // onReady={autoPlay ? () => setIsPlaying(true) : null}
              playing={isPlaying}
              onPlay={() => setVideoIsReady(true)} // Check if a video is playing before submitting a guess
              muted={muted}
              controls={false}
              loop={settings.loop}
              playbackRate={speed}
              onStart={() => setIsPlaying(true)}
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

          {/* Loader overlay */}
          {!videoIsReady && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black">
              <Spinner className="size-12" />
              Loading video...
            </div>
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
        >
          <div className="pt-1 pl-2">
            <Badge>Credits: {credits}</Badge>
          </div>
        </div>
        <div className="absolute bottom-2 flex w-full flex-col items-center gap-4">
          <AnimatePresence initial={false}>
            {openControls && (
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 45 }}
                key="box"
              >
                <ButtonGroup>
                  <Button
                    onClick={() => setMuted(!muted)}
                    size="sm"
                    variant="default"
                  >
                    {muted ? <VolumeOff /> : <Volume2 />}
                  </Button>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="sm"
                    variant="default"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </Button>
                  {speeds.map((s) => (
                    <Button
                      key={s}
                      onClick={() => setSpeed(s)}
                      size="sm"
                      variant={speed === s ? "secondary" : "default"}
                    >
                      {s}x
                    </Button>
                  ))}
                  <Report firebaseId={firebaseId} />
                </ButtonGroup>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Button to remove video controls */}
        <div className="absolute right-2 bottom-2">
          <Button
            variant="default"
            size="icon"
            className="rounded-full"
            onClick={() => setOpenControls((prev) => !prev)}
          >
            {openControls ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
      </div>
    </>
  )
}
