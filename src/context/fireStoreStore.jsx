import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

export class FirestoreStore {
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

  async save(data) {
    await setDoc(this.docRef, { settings: data }, { merge: true })
  }
}
