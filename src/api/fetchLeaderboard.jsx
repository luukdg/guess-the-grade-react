import { collection, getDocs, query, limit, orderBy } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"

export async function getLeaderBoard(dataType) {
  const usersRef = collection(db, "users")
  const field = `settings.${dataType}`
  const q = query(usersRef, orderBy(field, "desc"), limit(15))
  const snapshot = await getDocs(q)
  const leaderboard = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return leaderboard
}
