import { useEffect, useState } from "react"
import { currentGrade } from "../../api/fetchVideoData"
import { isGradeCorrect } from "../../functions/isGradeCorrect"
import CheckGrade from "../UI/results-page/guessReponse"
import ComparePickedGrade from "../UI/results-page/comparePickedGrade"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import GameOverButtons from "../UI/results-page/gameOverButtons"
import { saveStreakToLocalStorage } from "../../api/localStorage/streakLocalStorage"
import { VideoPlayer } from "../UI/video-page/videoPlayer"
import { Youtube } from "lucide-react"

const Result = ({
  guess,
  lives,
  setLives,
  streak,
  setStreak,
  restart,
  nextVideo,
}) => {
  const isCorrect = isGradeCorrect(guess)
  const [openVideo, setOpenVideo] = useState(false)

  useEffect(() => {
    saveStreakToLocalStorage(streak)
  }, [lives, streak])

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="align-self relative flex h-full w-full flex-col items-center justify-center">
        <motion.div
          className="mb-6 flex flex-col gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
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
          <div className="mb-6 text-center text-xl">
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
        </motion.div>
        {/* Comparison bar */}
        <ComparePickedGrade currentGrade={currentGrade} guess={guess} />
        <Button onClick={() => setOpenVideo(true)} variant="outline">
          <Youtube />
          Watch again
        </Button>

        {/* Buttons at the bottom */}
        <div className="absolute bottom-0 flex w-full flex-row gap-4">
          {lives === 0 ? (
            <GameOverButtons restart={restart} />
          ) : (
            <Button
              size="lg"
              variant="default"
              className="w-full"
              onClick={() => nextVideo()}
            >
              Next video
            </Button>
          )}
        </div>
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
              transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
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
