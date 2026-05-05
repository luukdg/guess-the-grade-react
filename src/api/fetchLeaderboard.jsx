import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig.js"

export async function getLeaderBoard(dataType, gameMode) {
  const usersRef = collection(db, "users")
  const field = `settings.${gameMode}.${dataType}`
  const q = query(usersRef, orderBy(field, "desc"), limit(15))
  const snapshot = await getDocs(q)
  const leaderboard = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return leaderboard
}
