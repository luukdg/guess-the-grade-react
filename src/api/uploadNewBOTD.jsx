import { convertToNumericGrade } from "@/functions/gradeConverter.jsx"
import { setDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"
import UrlParser from "js-video-url-parser"

export async function uploadNewBOTD(data) {
  const videoId = UrlParser.parse(data.youtubeLink).id
  const grade = data.grade
  const location = data.location
  const credits = data.credits
  const ticketId = data.ticketId // "YYYY-MM-DD"
  const numericGrade = convertToNumericGrade(grade)
  const today = new Date()

  try {
    await setDoc(doc(db, "boulder-of-the-day", ticketId), {
      grade: grade,
      lastShowDate: null,
      youtubeLink: videoId,
      credits: credits,
      location: location,
      hasBeenShown: false,
      timesShown: 0,
      numericGrade: numericGrade,
      guesses: {
        "48-59": 0,
        "60-63": 0,
        "64-67": 0,
        "68-71": 0,
        "72-75": 0,
        "76-79": 0,
        "80-83": 0,
      },
      timeUploaded: today,
      rand: Math.random(),
      approved: false,
    })

    console.log("BOTD uploaded for:", ticketId)
  } catch (e) {
    console.error("Error adding video ", e)
  }
}
