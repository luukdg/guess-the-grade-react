import { currentGrade } from "@/components/main-components/videoGuess"
import { gradeMap } from "@/constants/gradeMap"

function checkAnswerDifference(userAnswer, correctAnswer) {
  if (correctAnswer > userAnswer) {
    return correctAnswer - userAnswer
  } else {
    return userAnswer - correctAnswer
  }
}

// Checks if a match is found between the player's guess and the actual grade
export function isGradeCorrect(playerGuess, actualGrade) {
  const normalize = (s) => s.toLowerCase().replace(/\s+/g, "").split(/[-/]/)

  const userAnswer = normalize(playerGuess)
  const correctAnswer = normalize(actualGrade ?? currentGrade)
  const diff = checkAnswerDifference(
    gradeMap[userAnswer[0]],
    gradeMap[correctAnswer[0]],
  )

  // This checks within gradeMap if there is a match.
  if (gradeMap[userAnswer[0]] === gradeMap[correctAnswer[0]]) {
    return { isCorrect: true, diff }
  } else {
    return { isCorrect: false, diff }
  }
}
