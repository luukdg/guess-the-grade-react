import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

export async function updateUserGuess(firebaseId, numericGuess) {
  const rangeKey = `${numericGuess[0]}-${numericGuess[1]}`;

  try {
    const videoRef = doc(db, "videos", firebaseId);

    await updateDoc(videoRef, {
      [`guesses.${rangeKey}`]: increment(1),
    });
  } catch (e) {
    console.error("Error updating documents: ", e);
  }
}
