import { currentGrade } from "../api/getVideo";

export let userGrade = null;

export function checkGrade(guess) {
  userGrade = guess;

  const correctMessages = [
    "Perfect!",
    "Spot on!",
    "You nailed it!",
    "Exactly right!",
    "Nice work!",
  ];

  const incorrectMessages = [
    "Close one!",
    "Almost there!",
    "Good try!",
    "Not quite!",
    "You'll get it next time!",
  ];

  // Choose a random message from the right array
  const randomMessage = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (guess === currentGrade) {
    return randomMessage(correctMessages);
  } else {
    return randomMessage(incorrectMessages);
  }
}
