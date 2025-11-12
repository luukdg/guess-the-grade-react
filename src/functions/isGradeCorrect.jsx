import { currentGrade } from "../api/fetchVideoData";

// gradeUtils.js
export function isGradeCorrect(playerGuess) {
  const normalize = (s) => s.toUpperCase().replace(/\s+/g, "").split(/[-/]/);

  const guessParts = normalize(playerGuess);
  const gradeParts = normalize(currentGrade);

  if (guessParts[0] === "5A") {
    guessParts.push(...["5A+", "5B", "5B+", "5C"]);
  }

  return gradeParts.some((part) => guessParts.includes(part)); // true or false
}
