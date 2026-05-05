/* eslint-disable react-hooks/rules-of-hooks */
import { debounce, merge } from "lodash"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { FirestoreAdapter } from "./fireStoreAdapter"
import { LocalStorageAdapter } from "./localStorageAdapter"
import { useAuth } from "./loginContext"

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    survivalStats: {
      totalGames: 0,
      currentStreak: 0,
      videosWatched: 0,
      correctGuesses: 0,
      accuracy: 0,
      maxStreak: 0,
      averageScore: 0,
    },
    dailyBlocStats: {
      totalGames: 0,
      currentStreak: 0,
      maxStreak: 0,
      averageScore: 0,
    },
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

  const { user, authLoading } = useAuth()
  const [openControls, setOpenControls] = useState(true)
  const storeRef = useRef(null)
  const [settings, setSettings] = useState(defaultSettings)
  const [flushReady, setFlushReady] = useState(false)

  // ✅ Keep a ref of current settings so debounced functions always see latest value
  const settingsRef = useRef(settings)
  useEffect(() => {
    settingsRef.current = settings
  }, [settings])

  // ✅ Keep a ref of current user so debounced functions always see latest value
  const userRef = useRef(user)
  useEffect(() => {
    userRef.current = user
  }, [user])

  // ✅ Create debounced function once using useRef to avoid recreation on every render
  const saveSettingsDebounced = useRef(
    debounce(async (data) => {
      if (!storeRef.current) return

      if (userRef.current) {
        await storeRef.current.save(data, userRef.current)
      } else {
        await storeRef.current.save(data)
      }

      console.log("Settings saved:", data)
    }, 2000),
  ).current

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

  // Update setting function
  function updateSetting(key, value) {
    if (settings[key] === value) return
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    saveSettingsDebounced(newSettings)
  }

  // ✅ Safe function for external consumers (e.g. GameContext)
  // Merges partial data with current settings before saving
  function saveToStore(partialData) {
    if (!storeRef.current) return
    // ✅ Deep merge instead of shallow spread
    const merged = merge({}, settingsRef.current, partialData)
    setSettings(merged)
    saveSettingsDebounced(merged)
  }

  useEffect(() => {
    if (flushReady) {
      flushStatsToFirebase()
    }
  }, [flushReady])

  // Update game stats locally
  function updateGameStatsLocal({ correct, gameFinished }) {
    setSettings((prev) => {
      const stats = prev.survivalStats ?? defaultSettings.survivalStats

      const currentStreak = correct
        ? stats.currentStreak + 1
        : stats.currentStreak
      console.log("correct =", correct, "prev streak =", stats.currentStreak)

      const maxStreak = Math.max(stats.maxStreak, currentStreak)
      const correctGuesses = stats.correctGuesses + (correct ? 1 : 0)
      const videosWatched = stats.videosWatched + 1
      const accuracy = Math.round((correctGuesses / videosWatched) * 100)

      let totalGames = stats.totalGames
      let averageScore = stats.averageScore

      if (!gameFinished) {
        totalGames = stats.totalGames + 1
        averageScore = correctGuesses / totalGames
        console.log("New total games:", totalGames)
        console.log("New average score:", averageScore)
        setFlushReady(true)
      }

      console.log("Correct guesses:", correctGuesses)
      console.log("Total videos:", videosWatched)
      console.log("New accuracy:", accuracy)
      console.log("Current streak:", currentStreak)
      console.log("Max streak:", maxStreak)

      return {
        ...prev,
        survivalStats: {
          ...stats,
          currentStreak,
          maxStreak,
          correctGuesses,
          videosWatched,
          accuracy,
          averageScore,
          totalGames,
        },
      }
    })
  }

  function flushStatsToFirebase() {
    if (!storeRef.current) return
    // ✅ Use settingsRef.current instead of settings to avoid stale closure
    saveSettingsDebounced(settingsRef.current)
    setFlushReady(false)
    console.log("Flushing stats to Firebase")
  }

  function resetCurrentStreak() {
    setSettings((prev) => ({
      ...prev,
      survivalStats: {
        ...prev.survivalStats,
        currentStreak: 0,
      },
    }))
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSetting,
        updateGameStatsLocal,
        flushStatsToFirebase,
        resetCurrentStreak,
        openControls,
        setOpenControls,
        storeRef,
        user,
        saveToStore, // ✅ expose saveToStore instead of saveSettingsDebounced
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
