import { doc, getDoc } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig.js"
import { convertToFont, convertToVSale } from "../functions/gradeConverter.jsx"

function getTodayYYYYMMDD() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export async function getBoulderOfTheDay(gradeScale) {
  const today = getTodayYYYYMMDD()

  const ref = doc(db, "boulder-of-the-day", today)
  const snap = await getDoc(ref)

  if (!snap.exists()) return null

  const video = snap.data()

  const convertedGrade =
    gradeScale === "font-scale"
      ? convertToFont(video.numericGrade)
      : convertToVSale(video.numericGrade)

  return {
    ...video,
    grade: convertedGrade,
    ticketId: snap.id,
    guesses: video.guesses,
    credits: video.credits,
  }
}
