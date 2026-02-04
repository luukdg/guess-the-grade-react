import { getDoc, doc } from "firebase/firestore"
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
  console.log(today) // e.g. "2026-02-02"

  const ref = doc(db, "boulder-of-the-day", "2026-02-03")
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
  }
}
