import { collection, doc, getDocs, where, query } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"
import { convertToFont, convertToVSale } from "../functions/gradeConverter.jsx"

// Variable to store the actual grade of the current video
export let currentGrade = null

// Calling for a random video
export async function getData(useGradeScale, videoType) {
  const collectionRedRef = collection(db, "videos")
  let q

  if (videoType === "indoor") {
    q = query(collectionRedRef, where("location", "==", "indoor"))
  } else if (videoType === "outdoor") {
    q = query(collectionRedRef, where("location", "==", "outdoor"))
  } else {
    q = query(collectionRedRef)
  }

  const querySnapshot = await getDocs(q)

  const videos = querySnapshot.docs

  if (videos.length > 0) {
    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * videos.length)

    // Get the random document
    const randomDoc = videos[randomIndex]
    const selectedVideo = randomDoc.data()

    const ticketId = selectedVideo.id
    const youtubeLink = selectedVideo.youtubeLink
    const grade = selectedVideo.numericGrade

    // convert the ACTUAL grade based on useGradeScale
    if (useGradeScale === "font-scale") {
      currentGrade = convertToFont(grade)
    } else {
      currentGrade = convertToVSale(grade)
    }
    return { youtubeLink: youtubeLink, ticketId: ticketId }
  }
}
