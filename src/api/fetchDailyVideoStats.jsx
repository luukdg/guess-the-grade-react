import { doc, getDoc } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig.js"

function getTodayYYYYMMDD() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export async function getDailyStats() {
  const today = getTodayYYYYMMDD()

  const ref = doc(db, "boulder-of-the-day", today)
  const snap = await getDoc(ref)

  if (!snap.exists()) return null

  const video = snap.data()

  return {
    guesses: video.guesses,
  }
}
