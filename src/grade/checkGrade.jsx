import { check } from "prettier";
import { currentGrade } from "../api/getVideo";

// Variable to store the user's guessed grade
export let userGrade = null;

// The function which returns a correct or wrong message
export function checkGrade(guess) {
  userGrade = guess;

  console.log("user grade: ", guess);
  console.log("actual grade: ", currentGrade);

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

  // Search for a match in the label
  function findWord(word, str) {
    // Normalize both inputs
    const normalize = (s) =>
      s
        .toUpperCase()
        .replace(/\s+/g, "") // remove all spaces
        .split(/[-/]/); // split on "-" or "/"

    const wordParts = normalize(word);
    const strParts = normalize(str);

    // Check if any grade part overlaps
    return wordParts.some((part) => strParts.includes(part));
  }

  // Receiving a boolean
  let checkMatch = findWord(currentGrade, guess);

  console.log("Check's match: ", checkMatch);

  if (checkMatch) {
    return randomMessage(correctMessages);
  } else {
    return randomMessage(incorrectMessages);
  }
}
