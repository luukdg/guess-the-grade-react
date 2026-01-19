import { doc, increment, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"

export async function updateUserGuess(firebaseId, numericGuess) {
  const rangeKey = `${numericGuess[0]}-${numericGuess[1]}`

  try {
    const videoRef = doc(db, "videos", firebaseId)
    const docSnap = await getDoc(videoRef)

    if (!docSnap.exists()) {
      console.error("Document does not exist!")
      return
    }

    await setDoc(
      videoRef,
      {
        guesses: { [rangeKey]: increment(1) },
        views: increment(1),
      },
      { merge: true },
    )
  } catch (e) {
    console.error("Error updating document in updateUserGuess:", e)
  }
}
