import { currentGrade } from "../api/getVideo";

// gradeUtils.js
export function checkGradeBoolean(playerGuess) {
  const normalize = (s) => s.toUpperCase().replace(/\s+/g, "").split(/[-/]/);

  const guessParts = normalize(playerGuess);
  const gradeParts = normalize(currentGrade);

  return gradeParts.some((part) => guessParts.includes(part)); // true or false
}
