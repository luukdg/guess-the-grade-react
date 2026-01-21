import { createContext, useState, useContext, useEffect, useRef } from "react"
import { LocalStorageStore } from "./localStorageAdapter"

// Creates a global boolean to check if the V-scale converter is necessary
const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const storeRef = useRef(null)

  const defaultSettings = {
    streak: 0,
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
    storeRef.current = new LocalStorageStore()

    storeRef.current.load().then((data) => {
      if (data) setSettings({ ...defaultSettings, ...data })
    })
  }, []) // no need to depend on user yet

  // Migrate guest data to Firestore when user logs in
  useEffect(() => {
    if (!user) return

    const localStore = new LocalStorageStore()
    localStore.load().then((data) => {
      if (data) storeRef.current.save(data)
    })
  }, [user])

  function updateSetting(key, value) {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    if (storeRef.current) storeRef.current.save(newSettings)
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
