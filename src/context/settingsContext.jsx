/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, useState, useContext, useEffect, useRef } from "react"
import { LocalStorageAdapter } from "./localStorageAdapter"
import { FirestoreAdapter } from "./fireStoreAdapter"
import { useAuth } from "./loginContext"
import { debounce } from "lodash"

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const { user, authLoading } = useAuth()
  const storeRef = useRef(null)

  const defaultSettings = {
    totalGames: 0,
    correctGuesses: 0,
    accuracy: 0,
    streak: 0,
    averageScore: 0,
    playTime: 0,
    firstTime: true,
    submitOnDrag: false,
    infinite: false,
    autoPlay: true,
    mute: true,
    loop: true,
    always2x: false,
    videoType: { value: "all", label: "All" },
    gradeScale: { value: "font-scale", label: "Font-scale" },
  }

  const [settings, setSettings] = useState(defaultSettings)
  const [videoId, setVideoId] = useState(null)
  const [openControls, setOpenControls] = useState(true)

  // Initialize store and load settings
  useEffect(() => {
    if (authLoading) return

    if (user && user.uid) {
      storeRef.current = new FirestoreAdapter(user.uid)
    } else {
      storeRef.current = new LocalStorageAdapter()
    }

    storeRef.current.load().then((data) => {
      if (data) setSettings({ ...defaultSettings, ...data })
    })

    console.log(storeRef.current)
  }, [user, authLoading])

  // Migrate guest data to Firestore when user logs in
  useEffect(() => {
    if (!user) return
    if (!storeRef.current) return

    const localStore = new LocalStorageAdapter()
    localStore.load().then((guestData) => {
      // Only migrate if Firestore is empty
      storeRef.current.load().then((fireData) => {
        if (!fireData && guestData) {
          storeRef.current.save(guestData)
        }
      })
    })
  }, [user])

  // Debounced save function
  const saveSettingsDebounced = debounce(async (data) => {
    if (storeRef.current) {
      await storeRef.current.save(data)
      console.log("Settings saved")
    }
  }, 2000)

  // Update setting function
  function updateSetting(key, value) {
    if (settings[key] === value) return // skip if no change
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)

    // Debounced save
    saveSettingsDebounced(newSettings)
  }

  // Update game statistics
  function incrementSetting(key, amount = 1) {
    setSettings((prev) => {
      const newValue = (prev[key] ?? 0) + amount
      const newSettings = { ...prev, [key]: newValue }
      saveSettingsDebounced(newSettings)
      return newSettings
    })
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSetting,
        videoId,
        setVideoId,
        openControls,
        setOpenControls,
        storeRef,
        user,
        incrementSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
