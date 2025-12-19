import { isGradeCorrect } from "../../../functions/isGradeCorrect"
import { useEffect } from "react"
import { useSettings } from "@/context/settingsContext"

const messages = {
  correct: [
    "Send it!",
    "Flawless ascent!",
    "You crushed it!",
    "Top out like a pro!",
    "Hold after hold, perfect!",
    "That’s a clean send!",
    "Smooth moves, well done!",
    "Crux conquered!",
    "Dyno master!",
    "Perfect beta execution!",
  ],
  incorrect: [
    "So close, almost a send!",
    "Good try, keep your beta tight!",
    "Almost topped out, keep pushing!",
    "Slipped the crux, but don’t give up!",
    "Close one! Adjust your footwork next time.",
    "Foot slip, but nice attempt!",
    "Crux got you this time, reset and go!",
    "Not a send yet, but great effort!",
    "Almost perfect, tweak that sequence!",
  ],
}

const randomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function CheckGrade({ guess, lives, setLives, setStreak }) {
  const correct = isGradeCorrect(guess)
  const { infinite } = useSettings()

  const message =
    guess == null
      ? ""
      : correct
        ? randomMessage(messages.correct)
        : randomMessage(messages.incorrect)

  // Update state when component renders
  useEffect(() => {
    if (guess == null) return

    if (correct) {
      setStreak((prev) => prev + 1)
    } else if (!infinite) {
      setLives((prev) => prev - 1)
    }
  }, [correct])

  return (
    <h1 className="text-center text-4xl font-bold">
      {lives === 0 ? "Game Over!" : message}
    </h1>
  ) // show message in DOM
}
