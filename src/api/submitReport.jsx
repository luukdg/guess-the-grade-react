import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"

export async function submitReport(firebaseId, data, videoId) {
  try {
    const docRef = await addDoc(collection(db, "reports"), {
      issue: data,
      youtubeLink: `https://www.youtube.com/shorts/${videoId}`,
      ticket: firebaseId,
    })
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
