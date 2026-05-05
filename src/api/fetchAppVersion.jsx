import { doc, getDoc } from "firebase/firestore"

import { CURRENT_VERSION } from "@/constants/currentVersion.jsx"
import { forceHardRefresh } from "@/functions/forceHardReset.jsx"

import { db } from "../../firebase/firebaseConfig.js"

export async function checkForUpdate() {
  const snap = await getDoc(doc(db, "appMeta", "version"))
  const latestVersion = snap.data().version

  if (latestVersion !== CURRENT_VERSION) {
    await forceHardRefresh()
  }
}
