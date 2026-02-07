import { onAuthStateChanged, signInWithPopup } from "firebase/auth"

import { createContext, useContext, useEffect, useState } from "react"

import { checkForUpdate } from "@/api/fetchAppVersion.jsx"

import { auth, googleProvider } from "../../firebase/firebaseConfig"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [versionReady, setVersionReady] = useState(true)

  useEffect(() => {
    async function run() {
      const ok = await checkForUpdate()
      if (ok) setVersionReady(false)
      console.log("App is up to date")
    }

    run()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setAuthLoading(false)
    })
    return unsubscribe
  }, [])

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      setUser(result.user)
      console.log("User logged in:", result.user.displayName)
    } catch (error) {
      console.error(error)
    }
  }

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
