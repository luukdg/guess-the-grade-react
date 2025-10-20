import { checkGradeBoolean } from "./checkGradeBoolean";
import { useEffect } from "react";

const messages = {
  correct: ["Perfect!", "Spot on!", "You nailed it!"],
  incorrect: ["Close one!", "Almost there!", "Not quite!"],
};

export default function CheckGrade({
  guess,
  lives,
  setLives,
  streak,
  setStreak,
  result,
  setResult,
}) {
  const isCorrect = checkGradeBoolean(guess); // boolean

  // Update state when component renders
  useEffect(() => {
    if (isCorrect) {
      setStreak(streak + 1);
    } else {
      setLives(lives - 1);
    }
  }, [isCorrect]); // run whenever guess changes

  const randomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const message = isCorrect
    ? randomMessage(messages.correct)
    : randomMessage(messages.incorrect);

  return <h1 className="text-center text-4xl font-bold">{message}</h1>; // show message in DOM
}
