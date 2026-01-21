import { LocalStorageStore } from "./localStorageAdapter"
import { FirestoreStore } from "./fireStoreStore"

export function getSettingsStore(user) {
  return user ? new FirestoreStore(user.uid) : new LocalStorageStore()
}
