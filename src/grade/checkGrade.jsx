import { currentGrade } from "../api/getVideo";

export function checkGrade(guess) {
  if (guess === currentGrade) {
    alert(`Correct! The grade of the boulder is ${currentGrade}`);
  } else {
    alert(`Close one, the grade of the boulder is ${currentGrade}`);
  }
}
