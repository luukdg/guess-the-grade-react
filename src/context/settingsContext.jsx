import { createContext, useState, useContext, useEffect, useRef } from "react"
import { LocalStorageStore } from "./localStorageAdapter"

// Creates a global boolean to check if the V-scale converter is necessary
const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
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
  const storeRef = useRef(null)
  const [settings, setSettings] = useState(defaultSettings)
  const [videoId, setVideoId] = useState(null)
  const [openControls, setOpenControls] = useState(true)

  function updateSetting(key, value) {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)

    if (storeRef.current) {
      storeRef.current.save(newSettings)
    }
  }

  useEffect(() => {
    const store = new LocalStorageStore()
    storeRef.current = store

    store.load().then((data) => {
      if (data) setSettings({ ...defaultSettings, ...data })
    })
  }, [])

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
