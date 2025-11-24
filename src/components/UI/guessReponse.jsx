import { isGradeCorrect } from "../../functions/isGradeCorrect"
import { useEffect } from "react"

const messages = {
  correct: ["Perfect!", "Spot on!", "You nailed it!"],
  incorrect: ["Close one!", "Almost there!", "Not quite!"],
}

const randomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function CheckGrade({ guess, lives, setLives, setStreak }) {
  const correct = isGradeCorrect(guess)

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
    } else {
      setLives((prev) => prev - 1)
    }
  }, [correct])

  return (
    <h1 className="text-center text-4xl font-bold">
      {lives === 0 ? "Game Over!" : message}
    </h1>
  ) // show message in DOM
}
