import { getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js"
import { CURRENT_VERSION } from "@/constants/currentVersion.jsx"
import { forceHardRefresh } from "@/functions/forceHardReset.jsx"

export async function checkForUpdate() {
  const snap = await getDoc(doc(db, "appMeta", "version"))
  const latestVersion = snap.data().version

  if (latestVersion !== CURRENT_VERSION) {
    await forceHardRefresh()
  }
}
