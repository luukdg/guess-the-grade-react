import { currentGrade } from "../api/getVideo";

export function checkGrade(guess) {
  if (guess === currentGrade) {
    alert(`Correct! The grade of the boulder is ${currentGrade}`);
    window.location.reload();
  } else {
    alert(`Close one, the grade of the boulder is ${currentGrade}`);
    window.location.reload();
  }
}
