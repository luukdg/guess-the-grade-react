/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, useState, useContext, useEffect, useRef } from "react"
import { LocalStorageAdapter } from "./localStorageAdapter"
import { FirestoreAdapter } from "./fireStoreAdapter"
import { useAuth } from "./loginContext"
import { debounce } from "lodash"

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    totalGames: 0,
    currentStreak: 0,
    videosWatched: 0,
    correctGuesses: 0,
    accuracy: 0,
    maxStreak: 0,
    averageScore: 0,
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

  const { user, authLoading } = useAuth() // Get user from auth context
  const [videoId, setVideoId] = useState(null) // Saves the current video ID being played
  const [openControls, setOpenControls] = useState(true) // Video controls visibility
  const storeRef = useRef(null) // Reference to the storage adapter
  const [settings, setSettings] = useState(defaultSettings) // Settings state

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
    console.log("Settings loaded:", settings)
  }, [user, authLoading])

  // Migrate guest data to Firestore when user logs in
  useEffect(() => {
    if (!user || !storeRef.current) return

    const localStore = new LocalStorageAdapter()

    localStore.load().then((guestData) => {
      storeRef.current.load().then((fireData) => {
        if (!fireData && guestData) {
          storeRef.current.save(guestData, user)
        }
      })
    })
  }, [user])

  // Debounced save function
  const saveSettingsDebounced = debounce(async (data) => {
    if (!storeRef.current) return

    if (user) {
      await storeRef.current.save(data, user)
    } else {
      await storeRef.current.save(data)
    }

    console.log("Settings saved:", data)
  }, 2000)

  // Update setting function
  function updateSetting(key, value) {
    if (settings[key] === value) return // skip if no change
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)

    // Debounced save
    saveSettingsDebounced(newSettings)
  }

  // Update game stats locally
  function updateGameStatsLocal({ correct, gameFinished }) {
    setSettings((prev) => {
      const currentStreak = correct
        ? prev.currentStreak + 1
        : prev.currentStreak
      console.log("correct =", correct, "prev streak =", prev.currentStreak)

      const maxStreak = Math.max(prev.maxStreak, currentStreak)
      const correctGuesses = prev.correctGuesses + (correct ? 1 : 0) // increment correct guesses if the answer is correct
      const videosWatched = prev.videosWatched + 1 // increment videos watched
      const accuracy = Math.round((correctGuesses / videosWatched) * 100) // calculate accuracy

      let totalGames = prev.totalGames
      let averageScore = prev.averageScore

      if (!gameFinished) {
        totalGames = prev.totalGames + 1 // increment total games played
        averageScore = correctGuesses / totalGames // Calcualate average score
        console.log("New total games:", totalGames)
        console.log("New average score:", averageScore)
      }

      console.log("Correct guesses:", correctGuesses)
      console.log("Total videos:", videosWatched)
      console.log("New accuracy:", accuracy)
      console.log("Current streak:", currentStreak)
      console.log("Max streak:", maxStreak)

      return {
        ...prev,
        currentStreak,
        maxStreak,
        correctGuesses,
        videosWatched,
        accuracy,
        averageScore,
        totalGames,
      }
    })
  }

  function flushStatsToFirebase() {
    if (!storeRef.current) return
    saveSettingsDebounced(settings)
  }

  function resetCurrentStreak() {
    setSettings((prev) => ({
      ...prev,
      currentStreak: 0,
    }))
    console.log("I AM RESETTING THE STREAK")
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSetting,
        updateGameStatsLocal,
        flushStatsToFirebase,
        resetCurrentStreak,
        videoId,
        setVideoId,
        openControls,
        setOpenControls,
        storeRef,
        user,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
