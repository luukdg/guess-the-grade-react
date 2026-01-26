import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

export class FirestoreAdapter {
  constructor(uid) {
    if (!uid) {
      throw new Error("FirestoreStore requires a uid")
    }
    this.uid = uid
    this.docRef = doc(db, "users", uid)
  }

  async load() {
    const snap = await getDoc(this.docRef)
    return snap.exists() ? snap.data().settings : null
  }

  async save(data, profile = null) {
    const payload = {
      settings: data,
    }

    if (profile) {
      payload.profile = {
        displayName: profile.displayName,
        photoURL: profile.photoURL,
        email: profile.email,
      }
    }

    await setDoc(this.docRef, payload, { merge: true })
  }
}
