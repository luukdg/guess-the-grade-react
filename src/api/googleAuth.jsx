import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../firebase/firebaseConfig"

export const googleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    console.log("User logged in:", user.displayName)
  } catch (error) {
    console.error(error)
  }
}
