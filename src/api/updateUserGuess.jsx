import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";

export async function updateUserGuess(firebaseId, numericGuess) {
  const rangeKey = `${numericGuess[0]}-${numericGuess[1]}`;

  try {
    const videoRef = doc(db, "videos", firebaseId);
    const docSnap = await getDoc(videoRef);

    let targetRef = videoRef;

    if (!docSnap.exists()) {
      targetRef = doc(db, "outdoor", firebaseId);
    }

    await updateDoc(targetRef, {
      [`guesses.${rangeKey}`]: increment(1),
    });
  } catch (e) {
    console.error("Error updating document:", e);
  }
}
