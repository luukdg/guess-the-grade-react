import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"

export async function submitReport(firebaseId, data, videoId) {
  const today = new Date()

  try {
    const docRef = await addDoc(collection(db, "reports"), {
      issue: data,
      youtubeLink: `https://www.youtube.com/shorts/${videoId}`,
      ticket: firebaseId,
      timeUploaded: today,
    })
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
