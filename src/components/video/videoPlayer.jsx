/* eslint-disable react-hooks/rules-of-hooks */

import { useState, useEffect } from "react"
import ReactPlayer from "react-player"
import { useSettings } from "@/functions/settingsContext"
import { AnimatePresence, motion } from "motion/react"
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

const speeds = [1, 2]

export function VideoPlayer({ className = "", innerClassName = "" }) {
  const {
    always2x,
    autoPlay,
    mute,
    loop,
    openControls,
    setOpenControls,
    videoId,
  } = useSettings()
  const [muted, setMuted] = useState(() => (!mute ? false : true))
  const [isPlaying, setIsPlaying] = useState(false) // video play state
  const [speed, setSpeed] = useState(() => (always2x ? 2 : 1))

  useEffect(() => {
    if (mute) {
      setMuted(true)
    }
    if (always2x) {
      setSpeed(2)
    }
  }, [always2x, mute])

  return (
    <>
      <div className={className}>
        <div className={innerClassName}>
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
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 45 }}
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
    </>
  )
}
