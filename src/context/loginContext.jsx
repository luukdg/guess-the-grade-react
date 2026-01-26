import { useState, useEffect, createContext, useContext } from "react"
import { onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../firebase/firebaseConfig"
import { checkForUpdate } from "@/api/fetchAppVersion.jsx"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // null = not logged in
  const [authLoading, setAuthLoading] = useState(true)
  const [versionReady, setVersionReady] = useState(true)

  // Check for app updates on mount
  useEffect(() => {
    async function run() {
      const ok = await checkForUpdate()
      if (ok) setVersionReady(false)
      console.log("App is up to date")
    }

    run()
  }, [])

  // Track login state automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)
    })
    return unsubscribe
  }, [])

  // Function to log in with Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user) // update state
      console.log("User logged in:", result.user.displayName)
    } catch (error) {
      console.error(error)
    }
  }

  // Function to log out
  const logout = async () => {
    await auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, loginWithGoogle, logout, authLoading, versionReady }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
