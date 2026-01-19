import { useEffect, useState } from "react"
import { currentGrade } from "./videoGuess"
import { isGradeCorrect } from "../../functions/isGradeCorrect"
import CheckGrade from "../UI/results-page/guessReponse"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import GameOverButtons from "../UI/results-page/gameOverButtons"
import { saveStreakToLocalStorage } from "../../api/localStorage/streakLocalStorage"
import { VideoPlayer } from "../UI/video-page/videoPlayer"
import { Youtube } from "lucide-react"
import StatTabs from "../UI/results-page/statTabs"
import { ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Result = ({
  guess,
  lives,
  setLives,
  streak,
  setStreak,
  restart,
  nextVideo,
  setCurrentIndex,
  currentIndex,
  videos,
}) => {
  const isCorrect = isGradeCorrect(guess)
  const [openVideo, setOpenVideo] = useState(false)
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    saveStreakToLocalStorage(streak)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center gap-2">
      {/* Pagination dots */}
      <div className="flex h-2 w-full items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api && api.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-primary" : "bg-primary/40"
            }`}
          />
        ))}
      </div>
      <div className="h-full w-screen overflow-hidden">
        <Carousel
          setApi={setApi}
          className="h-full w-full"
          opts={{ align: "start" }}
        >
          <CarouselContent className="h-full">
            <CarouselItem className="flex h-full w-screen flex-col">
              <div className="text-muted-foreground flex w-full items-center justify-end pr-2 text-xs">
                See stats
                <ChevronRight size={20} />
              </div>
              <motion.div
                className="flex h-full w-full flex-col items-center justify-center gap-2 px-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <CheckGrade
                  guess={guess}
                  lives={lives}
                  setLives={setLives}
                  streak={streak}
                  setStreak={setStreak}
                />
                <div className="mb-3 text-center text-lg">
                  You guessed{" "}
                  <strong
                    className={
                      isCorrect
                        ? "font-archivo-black text-green-400"
                        : "font-archivo-black text-red-400"
                    }
                  >
                    {guess}
                  </strong>
                  , and the correct grade was{" "}
                  <strong className="font-archivo-black text-green-400">
                    {currentGrade}
                  </strong>
                  .
                </div>

                <Button
                  onClick={() => setOpenVideo(true)}
                  variant="outline"
                  size="sm"
                >
                  <Youtube />
                  Watch again
                </Button>
              </motion.div>
            </CarouselItem>
            <CarouselItem className="h-full w-screen">
              <StatTabs
                videos={videos}
                currentIndex={currentIndex}
                currentGrade={currentGrade}
                guess={guess}
                setOpenVideo={setOpenVideo}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex h-11 w-full gap-2 pb-2">
        {lives === 0 ? (
          <GameOverButtons restart={restart} />
        ) : (
          <Button
            size="default"
            variant="default"
            className="w-full"
            onClick={() => nextVideo()}
          >
            Next video
          </Button>
        )}
      </div>

      <AnimatePresence>
        {openVideo && (
          <>
            {/* Backdrop (on top, clickable) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute inset-0 z-0 backdrop-blur-[2px]"
              onClick={() => setOpenVideo(false)}
            ></motion.div>

            {/* VideoPlayer (underneath) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="absolute z-1 mb-15 flex aspect-[9/16] h-3/4 bg-black shadow-lg"
            >
              <VideoPlayer
                innerClassName="h-full w-full"
                className="relative"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Result
